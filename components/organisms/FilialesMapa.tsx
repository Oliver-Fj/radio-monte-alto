'use client';

import { useRef, useState } from 'react';
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  MapControls,
  type MapRef,
} from '@/components/ui/map';
import { filiales, CATEGORIAS_FILIAL, formatearCelular, type CategoriaFilial, type Filial } from '@/lib/data/filiales';
import { coloresCategoria } from '@/lib/utils/paletaMaterial';
import { MapPin, Phone, User, Clock, RadioTower, Church, Star } from 'lucide-react';

// Vista inicial: todo el Perú
const PERU_CENTER: [number, number] = [-75.0, -9.4];
const PERU_ZOOM = 4.2;
const PERU_BOUNDS: [[number, number], [number, number]] = [
  [-86.5, -21.5],
  [-63.5, 3.0],
];

/**
 * Punto del mapa con el color de la categoría, el mismo de su tarjeta
 * (p. ej. Siervos → celeste). La sede central conserva su pulso.
 */
function PinFilial({ filial }: { filial: Filial }) {
  const c = coloresCategoria(filial.categoria);
  const Icono = filial.esMatriz ? RadioTower : Church;
  return (
    <div className="relative flex flex-col items-center cursor-pointer group/pin">
      {filial.esMatriz && (
        <span className="absolute -top-1 w-12 h-12 rounded-full opacity-30 motion-safe:animate-ping" style={{ backgroundColor: c[500] }} />
      )}
      <div
        className={`relative ${filial.esMatriz ? 'w-11 h-11' : 'w-9 h-9'} rounded-full border-[3px] border-white flex items-center justify-center transition-transform duration-200 group-hover/pin:scale-110`}
        style={{ backgroundColor: c[500], boxShadow: `0 4px 12px ${c[500]}80` }}
      >
        <Icono className={`${filial.esMatriz ? 'w-5 h-5' : 'w-4 h-4'} text-white`} aria-hidden="true" />
      </div>
      <div
        className="w-2 h-2 -mt-[3px] rotate-45 border-r-[3px] border-b-[3px] border-white shadow-md"
        style={{ backgroundColor: c[500] }}
      />
    </div>
  );
}

function PopupFilial({ filial }: { filial: Filial }) {
  return (
    <div className="w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden font-sans">
      <div className="h-1.5" style={{ backgroundColor: coloresCategoria(filial.categoria)[500] }} />
      <div className="p-4">
        {filial.esMatriz && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2 bg-amber-100 text-amber-800 rounded-full text-[11px] font-bold uppercase tracking-wide">
            <Star className="w-3 h-3" aria-hidden="true" /> Sede Central
          </span>
        )}
        <h3 className="text-base font-bold text-gray-900 leading-snug">{filial.nombre}</h3>
        <p className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mt-1">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
          {filial.ciudad}, {filial.region}
        </p>

        {filial.direccion && (
          <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2.5 mt-3">{filial.direccion}</p>
        )}

        <p className="text-[11px] font-bold uppercase tracking-wide mt-3" style={{ color: coloresCategoria(filial.categoria)[900] }}>
          {CATEGORIAS_FILIAL[filial.categoria].nombre}
        </p>
        {filial.responsables.map((r) => (
          <div key={r} className="flex items-center gap-2 mt-1.5 text-xs text-gray-700">
            <User className="w-3.5 h-3.5 text-blue-600 shrink-0" aria-hidden="true" />
            <span className="font-semibold">{r}</span>
          </div>
        ))}
        {filial.horario && (
          <div className="flex items-start gap-2 mt-1.5 text-xs text-gray-700">
            <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{filial.horario}</span>
          </div>
        )}

        {filial.contactos.filter((c) => c.numero).map((c) => (
          <a
            key={`${c.rol}-${c.numero}`}
            href={`tel:+51${c.numero}`}
            className="mt-2 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-2 rounded-lg font-bold text-xs transition shadow-md"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            {c.rol}: {formatearCelular(c.numero)}
          </a>
        ))}
        {!filial.contactos.some((c) => c.numero) && (
          <a
            href="https://wa.me/51985796588"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-2 rounded-lg font-bold text-xs transition shadow-md"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

// Solo los lugares con coordenadas aparecen en el mapa
const enMapa = filiales.filter(
  (f): f is Filial & { coordenadas: { lat: number; lng: number } } => Boolean(f.coordenadas),
);

// Departamentos con al menos un lugar en el mapa, ordenados por cantidad.
// (Se usa un objeto: `Map` aquí es el componente del mapa.)
const porRegion: Record<string, typeof enMapa> = {};
for (const f of enMapa) (porRegion[f.region] ??= []).push(f);
const DEPARTAMENTOS = Object.entries(porRegion).sort((a, b) => b[1].length - a[1].length);

// Categorías que tienen algún punto en el mapa, en el orden de la lista
const CATEGORIAS_EN_MAPA = (Object.keys(CATEGORIAS_FILIAL) as CategoriaFilial[]).filter((c) =>
  enMapa.some((f) => f.categoria === c),
);

export default function FilialesMapa() {
  const mapRef = useRef<MapRef>(null);
  const [activa, setActiva] = useState<string | null>(null);

  const volarA = (region: string | null) => {
    if (!mapRef.current) return;
    setActiva(region);
    const lugares = region ? DEPARTAMENTOS.find(([r]) => r === region)?.[1] ?? [] : [];
    if (lugares.length === 0) {
      mapRef.current.flyTo({ center: PERU_CENTER, zoom: PERU_ZOOM, duration: 1500, essential: false });
      return;
    }
    // Encuadra todos los lugares del departamento
    const lngs = lugares.map((f) => f.coordenadas.lng);
    const lats = lugares.map((f) => f.coordenadas.lat);
    mapRef.current.fitBounds(
      [
        [Math.min(...lngs) - 0.08, Math.min(...lats) - 0.08],
        [Math.max(...lngs) + 0.08, Math.max(...lats) + 0.08],
      ],
      { padding: 60, maxZoom: 12, duration: 1800, essential: false }, // respeta prefers-reduced-motion
    );
  };

  return (
    <div>
      {/* Accesos rápidos por región */}
      <div className="flex flex-wrap justify-center gap-2 mb-6" role="group" aria-label="Ir a una filial en el mapa">
        <button
          type="button"
          onClick={() => volarA(null)}
          aria-pressed={activa === null}
          className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition border ${
            activa === null
              ? 'bg-gray-900 text-white border-gray-900 shadow-md'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
          }`}
        >
          Todo el Perú
        </button>
        {DEPARTAMENTOS.map(([region, lugares]) => (
          <button
            key={region}
            type="button"
            onClick={() => volarA(region)}
            aria-pressed={activa === region}
            className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition border ${
              activa === region
                ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-700'
            }`}
          >
            {region} ({lugares.length})
          </button>
        ))}
      </div>

      {/* Mapa */}
      <div className="rounded-2xl overflow-hidden border-2 border-gray-100 shadow-2xl">
        <Map
          ref={mapRef}
          theme="light"
          center={PERU_CENTER}
          zoom={PERU_ZOOM}
          minZoom={3.5}
          maxZoom={16}
          maxBounds={PERU_BOUNDS}
          cooperativeGestures
          locale={{
            'CooperativeGesturesHandler.WindowsHelpText': 'Usa Ctrl + rueda del ratón para hacer zoom en el mapa',
            'CooperativeGesturesHandler.MacHelpText': 'Usa ⌘ + rueda del ratón para hacer zoom en el mapa',
            'CooperativeGesturesHandler.MobileHelpText': 'Usa dos dedos para mover el mapa',
          }}
          className="h-[420px] md:h-[540px] w-full"
        >
          <MapControls position="top-right" showZoom showFullscreen />

          {enMapa.map((filial) => (
            <MapMarker
              key={filial.id}
              longitude={filial.coordenadas.lng}
              latitude={filial.coordenadas.lat}
              anchor="bottom"
            >
              <MarkerContent><PinFilial filial={filial} /></MarkerContent>
              <MarkerTooltip>
                <span className="px-2.5 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-bold shadow-lg whitespace-nowrap">
                  {filial.ciudad} — {filial.region}
                </span>
              </MarkerTooltip>
              <MarkerPopup offset={24}>
                <PopupFilial filial={filial} />
              </MarkerPopup>
            </MapMarker>
          ))}
        </Map>
      </div>

      {/* Leyenda: los mismos colores que las tarjetas */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {CATEGORIAS_EN_MAPA.map((categoria) => {
          const Icono = categoria === 'sede' ? RadioTower : Church;
          return (
            <div key={categoria} className="flex items-center gap-2">
              <span
                className="w-7 h-7 rounded-full border-2 border-white shadow-md flex items-center justify-center"
                style={{ backgroundColor: coloresCategoria(categoria)[500] }}
              >
                <Icono className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-gray-700">{CATEGORIAS_FILIAL[categoria].nombre}</span>
            </div>
          );
        })}
        <p className="text-xs text-gray-400 w-full text-center md:w-auto">
          Toca un punto del mapa para ver los detalles de cada filial.
        </p>
      </div>
    </div>
  );
}

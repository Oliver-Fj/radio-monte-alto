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
import { filiales, type Filial } from '@/lib/data/filiales';
import { MapPin, Phone, User, Clock, Calendar, RadioTower, Church, Star } from 'lucide-react';

// Vista inicial: todo el Perú
const PERU_CENTER: [number, number] = [-75.0, -9.4];
const PERU_ZOOM = 4.2;
const PERU_BOUNDS: [[number, number], [number, number]] = [
  [-86.5, -21.5],
  [-63.5, 3.0],
];

function PinSede() {
  return (
    <div className="relative flex flex-col items-center cursor-pointer group/pin">
      <span className="absolute -top-1 w-12 h-12 rounded-full bg-amber-400/30 motion-safe:animate-ping" />
      <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-[3px] border-white shadow-[0_4px_14px_rgba(217,119,6,0.5)] flex items-center justify-center transition-transform duration-200 group-hover/pin:scale-110">
        <RadioTower className="w-5 h-5 text-white" aria-hidden="true" />
      </div>
      <div className="w-2 h-2 -mt-[3px] rotate-45 bg-yellow-600 border-r-[3px] border-b-[3px] border-white shadow-md" />
    </div>
  );
}

function PinFilial() {
  return (
    <div className="relative flex flex-col items-center cursor-pointer group/pin">
      <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 border-[3px] border-white shadow-[0_4px_12px_rgba(5,150,105,0.45)] flex items-center justify-center transition-transform duration-200 group-hover/pin:scale-110">
        <Church className="w-4 h-4 text-white" aria-hidden="true" />
      </div>
      <div className="w-2 h-2 -mt-[3px] rotate-45 bg-green-700 border-r-[3px] border-b-[3px] border-white shadow-md" />
    </div>
  );
}

function PopupFilial({ filial }: { filial: Filial }) {
  return (
    <div className="w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden font-sans">
      <div className={`h-1.5 ${filial.esMatriz ? 'bg-gradient-to-r from-amber-400 to-yellow-600' : 'bg-gradient-to-r from-emerald-500 to-green-600'}`} />
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

        <p className="text-xs text-gray-600 bg-gray-50 rounded-lg p-2.5 mt-3">{filial.direccion}</p>

        <div className="flex items-center gap-2 mt-3 text-xs text-gray-700">
          <User className="w-3.5 h-3.5 text-blue-600 shrink-0" aria-hidden="true" />
          <span className="font-semibold">{filial.pastor}</span>
        </div>
        <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-700">
          <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
          <span>{filial.dias.join(' · ')}</span>
        </div>
        <div className="flex items-start gap-2 mt-1.5 text-xs text-gray-700">
          <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{filial.horario}</span>
        </div>

        {filial.telefono.includes('X') ? (
          <a
            href="https://wa.me/51985796588"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-2 rounded-lg font-bold text-xs transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Consultar por WhatsApp
          </a>
        ) : (
          <a
            href={`tel:${filial.telefono.replace(/\s/g, '')}`}
            className="mt-3 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-2 rounded-lg font-bold text-xs transition-all shadow-md"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            {filial.telefono}
          </a>
        )}
      </div>
    </div>
  );
}

export default function FilialesMapa() {
  const mapRef = useRef<MapRef>(null);
  const [activa, setActiva] = useState<string | null>(null);

  const volarA = (filial: Filial | null) => {
    if (!mapRef.current) return;
    if (filial) {
      setActiva(filial.id);
      mapRef.current.flyTo({
        center: [filial.coordenadas.lng, filial.coordenadas.lat],
        zoom: 12,
        duration: 1800,
        essential: false, // respeta prefers-reduced-motion
      });
    } else {
      setActiva(null);
      mapRef.current.flyTo({ center: PERU_CENTER, zoom: PERU_ZOOM, duration: 1500, essential: false });
    }
  };

  return (
    <div>
      {/* Accesos rápidos por región */}
      <div className="flex flex-wrap justify-center gap-2 mb-6" role="group" aria-label="Ir a una filial en el mapa">
        <button
          type="button"
          onClick={() => volarA(null)}
          aria-pressed={activa === null}
          className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition-all border ${
            activa === null
              ? 'bg-gray-900 text-white border-gray-900 shadow-md'
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'
          }`}
        >
          Todo el Perú
        </button>
        {filiales.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => volarA(f)}
            aria-pressed={activa === f.id}
            className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition-all border ${
              activa === f.id
                ? f.esMatriz
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-600 text-white border-transparent shadow-md'
                  : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent shadow-md'
                : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-700'
            }`}
          >
            {f.esMatriz && <Star className="inline w-3 h-3 -mt-0.5 mr-1" aria-hidden="true" />}
            {f.ciudad}
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

          {filiales.map((filial) => (
            <MapMarker
              key={filial.id}
              longitude={filial.coordenadas.lng}
              latitude={filial.coordenadas.lat}
              anchor="bottom"
              onClick={() => setActiva(filial.id)}
            >
              <MarkerContent>{filial.esMatriz ? <PinSede /> : <PinFilial />}</MarkerContent>
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

      {/* Leyenda */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 border-2 border-white shadow-md flex items-center justify-center">
            <RadioTower className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-gray-700">Sede Central — Huancayo</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 border-2 border-white shadow-md flex items-center justify-center">
            <Church className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold text-gray-700">Filiales</span>
        </div>
        <p className="text-xs text-gray-400 w-full text-center md:w-auto">
          Toca un punto del mapa para ver los detalles de cada filial.
        </p>
      </div>
    </div>
  );
}

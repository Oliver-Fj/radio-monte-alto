'use client';

import dynamic from 'next/dynamic';
import SectionTitle from '@/components/atoms/SectionTitle';
import { MapPin, Landmark, Church } from 'lucide-react';
import { filiales } from '@/lib/data/filiales';

// MapLibre solo funciona en el navegador: carga diferida sin SSR,
// con un esqueleto que reserva la altura (sin saltos de diseño).
const FilialesMapa = dynamic(() => import('@/components/organisms/FilialesMapa'), {
  ssr: false,
  loading: () => (
    <div
      className="h-[500px] md:h-[620px] rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 border-2 border-gray-100 flex items-center justify-center"
      role="status"
      aria-label="Cargando mapa de filiales"
    >
      <div className="text-center">
        <MapPin className="w-12 h-12 text-emerald-500 mx-auto mb-3 motion-safe:animate-bounce" aria-hidden="true" />
        <p className="text-gray-500 font-semibold">Cargando mapa del Perú…</p>
      </div>
    </div>
  ),
});

export default function FilialesMapaSection() {
  const departamentos = new Set(filiales.map((f) => f.region)).size;

  const stats = [
    { icon: Church, valor: filiales.length, etiqueta: 'Filiales en el Perú', color: 'from-emerald-500 to-green-600' },
    { icon: Landmark, valor: departamentos, etiqueta: 'Departamentos', color: 'from-blue-500 to-indigo-600' },
    { icon: MapPin, valor: 1, etiqueta: 'Sede Central — Huancayo', color: 'from-amber-400 to-yellow-600' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Presencia en todo el territorio nacional">
            Mapa de Filiales
          </SectionTitle>

          {/* Estadísticas */}
          <div className="mt-10 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, valor, etiqueta, color }) => (
              <div
                key={etiqueta}
                className="flex items-center gap-4 bg-white rounded-2xl border-2 border-gray-100 shadow-lg px-6 py-5 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${color} shadow-md flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-3xl font-black text-gray-900 leading-none">{valor}</p>
                  <p className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">{etiqueta}</p>
                </div>
              </div>
            ))}
          </div>

          <FilialesMapa />
        </div>
      </div>
    </section>
  );
}

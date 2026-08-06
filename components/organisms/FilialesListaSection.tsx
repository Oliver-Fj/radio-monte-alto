'use client';

import { useState } from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';
import { MapPin, Phone, User, Calendar, Clock, Star, Church, RadioTower } from 'lucide-react';
import { filiales } from '@/lib/data/filiales';

const regiones = ['Todas', ...Array.from(new Set(filiales.map((f) => f.region)))];

export default function FilialesListaSection() {
  const [region, setRegion] = useState('Todas');
  const visibles = region === 'Todas' ? filiales : filiales.filter((f) => f.region === region);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle centered subtitle="Encuentra la filial más cercana a ti">
            Todas Nuestras Filiales
          </SectionTitle>

          {/* Filtro por departamento */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar filiales por departamento">
            {regiones.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                aria-pressed={region === r}
                className={`px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition-all border ${
                  region === r
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent shadow-md'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-700'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibles.map((filial) => (
              <article
                key={filial.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 hover:shadow-2xl hover:-translate-y-2 motion-reduce:hover:translate-y-0 transition-all duration-300 ${
                  filial.esMatriz
                    ? 'border-amber-200 bg-gradient-to-br from-amber-50/60 to-white'
                    : 'border-gray-100 hover:border-emerald-300'
                }`}
              >
                {/* Franja superior */}
                <div className={`h-1.5 ${filial.esMatriz ? 'bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600' : 'bg-gradient-to-r from-emerald-500 to-green-600'}`} />

                <div className="p-6">
                  {/* Encabezado */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`w-12 h-12 shrink-0 rounded-xl shadow-md flex items-center justify-center ${
                        filial.esMatriz ? 'bg-gradient-to-br from-amber-400 to-yellow-600' : 'bg-gradient-to-br from-emerald-500 to-green-700'
                      }`}
                    >
                      {filial.esMatriz ? (
                        <RadioTower className="w-6 h-6 text-white" aria-hidden="true" />
                      ) : (
                        <Church className="w-6 h-6 text-white" aria-hidden="true" />
                      )}
                    </div>
                    {filial.esMatriz && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-[11px] font-bold uppercase tracking-wide">
                        <Star className="w-3 h-3" aria-hidden="true" />
                        Sede Central
                      </span>
                    )}
                  </div>

                  {/* Nombre y ubicación */}
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2">{filial.nombre}</h3>
                  <p className="flex items-center gap-2 text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span className="text-sm font-semibold">
                      {filial.ciudad} · <span className="text-gray-400">{filial.region}</span>
                    </span>
                  </p>

                  <p className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3 mb-4">{filial.direccion}</p>

                  {/* Pastor */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <User className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-gray-400 font-bold">Pastor / Líder</p>
                      <p className="text-sm font-bold text-gray-900">{filial.pastor}</p>
                    </div>
                  </div>

                  {/* Días y horario */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <Calendar className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <div className="flex flex-wrap gap-1.5">
                      {filial.dias.map((dia) => (
                        <span key={dia} className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-100">
                          {dia}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 mb-5">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm text-gray-700">{filial.horario}</p>
                  </div>

                  {/* Teléfono (si aún no hay número propio, WhatsApp central) */}
                  <a
                    href={
                      filial.telefono.includes('X')
                        ? 'https://wa.me/51985796588'
                        : `tel:${filial.telefono.replace(/\s/g, '')}`
                    }
                    {...(filial.telefono.includes('X') && { target: '_blank', rel: 'noopener noreferrer' })}
                    className={`flex items-center justify-center gap-2 w-full text-white py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg ${
                      filial.esMatriz
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700'
                        : 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                    }`}
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {filial.telefono.includes('X') ? 'Consultar por WhatsApp' : filial.telefono}
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Nota final */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-emerald-600 shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">¿No hay filial en tu ciudad?</h4>
                <p className="text-gray-700">
                  Estamos en constante crecimiento. Si estás interesado en abrir una filial de Monte Alto
                  en tu ciudad o deseas más información, contáctanos. Dios puede estar llamándote a ser
                  parte de esta expansión del Reino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

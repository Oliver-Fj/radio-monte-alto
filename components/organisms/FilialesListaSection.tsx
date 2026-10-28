'use client';

import { useState } from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';
import { MapPin } from 'lucide-react';
import FilialCard from '@/components/molecules/FilialCard';
import { filiales, CATEGORIAS_FILIAL, type CategoriaFilial } from '@/lib/data/filiales';

type Filtro = 'todas' | CategoriaFilial;

// Solo las categorías que tienen al menos una filial, en el orden de la lista
const CATEGORIAS = (Object.keys(CATEGORIAS_FILIAL) as CategoriaFilial[]).filter((c) =>
  filiales.some((f) => f.categoria === c),
);

export default function FilialesListaSection() {
  const [filtro, setFiltro] = useState<Filtro>('todas');
  const visibles = filtro === 'todas' ? filiales : filiales.filter((f) => f.categoria === filtro);

  const claseFiltro = (activo: boolean) =>
    `px-4 py-2 min-h-[40px] rounded-full text-xs font-bold transition border ${
      activo
        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent shadow-md'
        : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-700'
    }`;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle centered subtitle="Encuentra la filial más cercana a ti. Toca el botón de cada tarjeta para ver sus datos de contacto.">
            Todas Nuestras Filiales
          </SectionTitle>

          {/* Filtro por grupo de la lista nacional */}
          <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filtrar filiales por grupo">
            <button type="button" onClick={() => setFiltro('todas')} aria-pressed={filtro === 'todas'} className={claseFiltro(filtro === 'todas')}>
              Todas ({filiales.length})
            </button>
            {CATEGORIAS.map((c) => (
              <button key={c} type="button" onClick={() => setFiltro(c)} aria-pressed={filtro === c} className={claseFiltro(filtro === c)}>
                {CATEGORIAS_FILIAL[c].nombre} ({filiales.filter((f) => f.categoria === c).length})
              </button>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((filial) => (
              <FilialCard key={filial.id} filial={filial} />
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

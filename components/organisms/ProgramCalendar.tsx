'use client';

import { useState, useMemo } from 'react';
import { Programa } from '@/lib/types';
import ProgramCard from '@/components/molecules/ProgramCard';
import DayFilter from '@/components/molecules/DayFilter';
import CategoryFilter from '@/components/molecules/CategoryFilter';
import ResetFiltersButton from '@/components/atoms/ResetFiltersButton';
import { Calendar, Filter, Sparkles, SearchX } from 'lucide-react';

interface ProgramCalendarProps {
  programas: Programa[];
}

export default function ProgramCalendar({ programas }: ProgramCalendarProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleReset = () => {
    setSelectedDays([]);
    setSelectedCategories([]);
  };

  const programasFiltrados = useMemo(() => {
    let filtrados = programas;

    if (selectedDays.length > 0) {
      filtrados = filtrados.filter((programa) =>
        programa.dias.some((dia) => selectedDays.includes(dia))
      );
    }

    if (selectedCategories.length > 0) {
      filtrados = filtrados.filter((programa) =>
        selectedCategories.includes(programa.categoria)
      );
    }

    return filtrados.sort((a, b) => {
      const horaA = a.horario.split(' - ')[0];
      const horaB = b.horario.split(' - ')[0];
      return horaA.localeCompare(horaB);
    });
  }, [programas, selectedDays, selectedCategories]);

  const hasFilters = selectedDays.length > 0 || selectedCategories.length > 0;

  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 md:p-8 relative overflow-hidden">

      {/* --- DECORACIÓN DE FONDO (Atmósfera Dorada) --- */}
      {/* Gradiente superior suave */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-amber-50 via-white to-transparent pointer-events-none" />
      {/* Orbe de luz dorado a la derecha */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply" />
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* --- PANEL DE FILTROS (Estilo Cerámica y Oro) --- */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(251,191,36,0.15)] border border-amber-100/50 p-6 md:p-10 space-y-8 relative overflow-hidden">
          
          {/* Decoración borde superior */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200"></div>

          {/* Cabecera del Panel */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 shadow-sm">
                <Filter className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                  Filtrar <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-600">Programación</span>
                </h3>
                <p className="text-sm text-slate-500 mt-1 font-medium">Personaliza tu experiencia visual</p>
              </div>
            </div>
            
            {/* Reset Button Wrapper para asegurar contraste */}
            <div className="relative z-20">
               <ResetFiltersButton onReset={handleReset} hasFilters={hasFilters} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Sección Días */}
            <div className="space-y-5">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                <div className="p-1 bg-amber-100 rounded text-amber-600"><Calendar className="w-3.5 h-3.5" /></div>
                Seleccionar Días
              </label>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner transition-all hover:border-amber-200">
                <DayFilter
                  selectedDays={selectedDays}
                  onDayToggle={handleDayToggle}
                />
              </div>
            </div>

            {/* Sección Categorías */}
            <div className="space-y-5">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                <div className="p-1 bg-amber-100 rounded text-amber-600"><Sparkles className="w-3.5 h-3.5" /></div>
                Seleccionar Categoría
              </label>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-inner transition-all hover:border-amber-200">
                <CategoryFilter
                  selectedCategories={selectedCategories}
                  onCategoryToggle={handleCategoryToggle}
                />
              </div>
            </div>
          </div>

          {/* Footer del Panel */}
          <div className="pt-6 flex justify-end items-center border-t border-slate-50 mt-4">
            <p className="text-sm font-medium text-slate-500 bg-slate-50 px-5 py-2 rounded-full border border-slate-200">
              Mostrando{' '}
              <span className="font-bold text-amber-600 text-base">
                {programasFiltrados.length}
              </span>{' '}
              de {programas.length} programas
              {hasFilters && <span className="text-amber-600 italic ml-1">(filtrado activo)</span>}
            </p>
          </div>
        </div>

        {/* --- GRID DE RESULTADOS --- */}
        {programasFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 pb-20">
            {programasFiltrados.map((programa) => (
              <div key={programa.id} className="transform hover:-translate-y-2 transition-transform duration-500">
                {/* Aquí se renderiza la tarjeta blanca con bordes dorados que hicimos antes */}
                <ProgramCard
                  nombre={programa.nombre}
                  descripcion={programa.descripcion}
                  horario={programa.horario}
                  dias={programa.dias}
                  categoria={programa.categoria}
                  imagen={programa.imagen}
                  publicoObjetivo={programa.publicoObjetivo}
                />
              </div>
            ))}
          </div>
        ) : (
          /* --- ESTADO VACÍO (EMPTY STATE) WHITE GOLD --- */
          <div className="bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 p-20 text-center relative overflow-hidden group shadow-sm hover:shadow-xl hover:shadow-amber-100/40 hover:border-amber-300 transition-all duration-500">
            
            {/* Fondo radial sutil al hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:shadow-amber-200/50 transition-all duration-500">
                <SearchX className="w-10 h-10 text-slate-300 group-hover:text-amber-500 transition-colors duration-300" />
              </div>

              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                Sin resultados disponibles
              </h3>
              <p className="text-slate-500 max-w-lg mx-auto mb-10 font-medium leading-relaxed text-lg">
                No encontramos programas que coincidan con tu búsqueda actual. Intenta ajustar tus filtros para descubrir nuestro contenido exclusivo.
              </p>

              {hasFilters && (
                <button
                  onClick={handleReset}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold text-sm uppercase tracking-[0.15em] shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  Limpiar Filtros
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
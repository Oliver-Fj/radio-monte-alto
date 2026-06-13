
'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, Calendar, Users, Radio, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface ProgramCardProps {
  nombre: string;
  descripcion: string;
  horario: string;
  dias: string[];
  categoria: string;
  imagen?: string;
  publicoObjetivo?: string;
}

export default function ProgramCard({
  nombre,
  descripcion,
  horario,
  dias,
  categoria,
  imagen = '/images/programas/default.jpg',
  publicoObjetivo = 'Público general',
}: ProgramCardProps) {
  return (
    <div className="group relative h-full flex flex-col overflow-hidden rounded-2xl bg-[#131c31] border border-white/5 shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] hover:border-amber-500/30 hover:-translate-y-2">
      
      {/* IMAGEN HEADER */}
      <div className="relative h-52 w-full overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          <Image 
            src={imagen} 
            alt={nombre} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#131c31] via-[#131c31]/40 to-transparent opacity-90" />

        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0B1120] bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-lg shadow-amber-500/20 border border-amber-200/50">
            <Radio className="w-3 h-3 mr-1" />
            {categoria === 'Ninos' ? 'Niños' : categoria}
          </span>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="relative flex flex-col flex-grow p-6 pt-2">
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-transparent mb-4 rounded-full" />

        <div className="flex items-center justify-between mb-3 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-1.5 text-amber-400/90">
            <Clock className="w-3.5 h-3.5" />
            <span className="tracking-wide font-mono">{horario}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{dias.length > 3 ? 'Varios días' : dias.join(', ')}</span>
          </div>
        </div>

        <h3 className="text-xl font-serif font-bold leading-snug mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-300 to-amber-600 group-hover:from-white group-hover:via-amber-200 group-hover:to-amber-400 transition-all duration-300">
            {nombre}
          </span>
        </h3>

        <p className="text-sm text-slate-400 font-light leading-relaxed line-clamp-3 mb-6 flex-grow">
          {descripcion}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
            <Users className="w-3.5 h-3.5" />
            <span>{publicoObjetivo}</span>
          </div>

          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-[#0B1120] transition-all duration-300 text-amber-500">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

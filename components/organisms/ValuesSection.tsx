'use client';

import React from 'react';
import { BookOpen, Heart, Users, Shield, Lightbulb, Globe, Star } from 'lucide-react';

// --- DATOS ---
const values = [
  {
    icon: BookOpen,
    title: 'Fidelidad Bíblica',
    description: 'Nos comprometemos a proclamar la Palabra de Dios con integridad absoluta, sin diluir ni alterar su mensaje eterno.',
  },
  {
    icon: Heart,
    title: 'Amor y Compasión',
    description: 'Servimos con un amor genuino y sacrificial, buscando activamente el bienestar espiritual y emocional de cada oyente.',
  },
  {
    icon: Users,
    title: 'Unidad en Cristo',
    description: 'Fomentamos la unidad del cuerpo de Cristo, celebrando la diversidad dentro de la familia de Dios bajo un mismo Espíritu.',
  },
  {
    icon: Shield,
    title: 'Integridad',
    description: 'Operamos con total transparencia, honestidad y responsabilidad ética ante Dios y ante los hombres en cada acción.',
  },
  {
    icon: Lightbulb,
    title: 'Excelencia',
    description: 'No nos conformamos. Buscamos la excelencia suprema en nuestra programación, producción y servicio, para la gloria de Dios.',
  },
  {
    icon: Globe,
    title: 'Visión Misionera',
    description: 'Mantenemos una mirada global y un corazón ardiente por alcanzar todas las naciones y culturas con el Evangelio.',
  },
];

// --- COMPONENTE DE TARJETA PREMIUM ---
const LuxuryValueCard = ({ value, index }: { value: typeof values[0], index: number }) => {
  const Icon = value.icon;
  
  return (
    <div className="group relative h-full">
      {/* Efecto de Glow trasero al hacer hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl opacity-0 group-hover:opacity-70 transition duration-500 blur"></div>
      
      {/* Contenedor Principal */}
      <div className="relative h-full bg-[#0f1623] border border-white/10 group-hover:border-transparent rounded-2xl p-8 flex flex-col items-start transition-all duration-300 overflow-hidden">
        
        {/* Número de fondo sutil */}
        <span className="absolute -right-4 -top-4 text-9xl font-serif font-bold text-white/[0.02] group-hover:text-yellow-500/[0.05] transition-colors select-none pointer-events-none">
          0{index + 1}
        </span>

        {/* Icono con halo */}
        <div className="relative mb-6">
           <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 group-hover:border-yellow-500/50 shadow-lg transition-colors duration-300">
              <Icon className="w-7 h-7 text-yellow-500" />
           </div>
        </div>

        {/* Título */}
        <h3 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-yellow-200 transition-colors">
          {value.title}
        </h3>

        {/* Descripción */}
        <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors">
          {value.description}
        </p>

        {/* Decoración inferior */}
        <div className="mt-auto pt-6 w-full">
           <div className="h-[1px] w-full bg-gradient-to-r from-white/5 to-transparent group-hover:from-yellow-500/50 transition-colors duration-500" />
        </div>
      </div>
    </div>
  );
};

// --- SECCIÓN PRINCIPAL ---
export default function ValuesSection() {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden font-sans">
      
      {/* --- FONDO AMBIENTAL --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
             <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
             <span className="text-xs font-bold tracking-[0.2em] text-yellow-500 uppercase">Nuestra Esencia</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
            Principios que <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700">Guían</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Más que reglas, son el corazón de nuestro ministerio. Estos valores fundamentales definen quiénes somos y cómo servimos al Reino.
          </p>
        </div>

        {/* --- GRID DE VALORES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <LuxuryValueCard key={value.title} value={value} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
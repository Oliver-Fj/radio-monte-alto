'use client';

import React from 'react';
import { MapPin, Sparkles, Network, Globe } from 'lucide-react';
const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FilialesHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-950 via-teal-900 to-slate-900 text-white overflow-hidden -mt-16">
      
      {/* --- 1. FONDO CON EFECTOS (TEMA ESMERALDA) --- */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {/* Patrón de fondo */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        
        {/* Luces Ambientales */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* --- 2. CONTENIDO PRINCIPAL (POSICIÓN SUPERIOR) --- */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 md:pt-32 md:pb-24 text-center">
        
        {/* LOGO ANIMADO FLOTANTE (ANILLOS GIRATORIOS) */}
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-6 group cursor-default">
           
           {/* Anillos Giratorios (Verde y Dorado) */}
           <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
           <div className="absolute -inset-2 border border-emerald-500/40 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
           
           {/* Contenedor de la Imagen */}
           <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)] overflow-hidden border border-white/10">
              <img 
                src={`${B}/images/logo-radio.png`}
                alt="Radio Monte Alto Logo" 
                className="w-full h-full object-contain p-2 opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
              
              {/* Brillo extra */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           </div>

           {/* Decoración Sparkles */}
           <Sparkles className="absolute -top-3 -right-3 w-7 h-7 text-yellow-400 animate-pulse drop-shadow-[0_0_10px_rgba(250,204,21,0.9)]" />
        </div>

        {/* TEXTOS */}
        <div className="max-w-5xl mx-auto">
          {/* Badge de Lujo */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-6 shadow-xl shadow-emerald-900/30 backdrop-blur-md hover:bg-emerald-900/50 transition-colors cursor-default">
            <Globe className="w-3 h-3 text-emerald-400 animate-pulse" />
            Expansión Nacional
          </div>

          {/* Título Gigante */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl">
            <span className="block text-white mb-1 drop-shadow-md">Nuestras</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-yellow-400 filter drop-shadow-sm">
              Filiales
            </span>
          </h1>

          {/* Cita Bíblica Estilizada */}
          <div className="relative inline-block mb-8">
             <span className="absolute -left-4 -top-2 text-4xl text-emerald-500/20 font-serif">"</span>
             <p className="text-xl md:text-2xl font-serif italic text-emerald-100 px-4 drop-shadow-md relative z-10">
               "Me seréis testigos... hasta lo último de la tierra"
             </p>
             <span className="absolute -right-4 -bottom-4 text-4xl text-emerald-500/20 font-serif rotate-180">"</span>
          </div>

          {/* Descripción */}
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            La obra de Monte Alto se extiende con poder por todo el Perú, 
            llevando el mensaje transformador del Evangelio a cada rincón de nuestra nación 
            a través de nuestras filiales establecidas.
          </p>

          {/* Botón / Estadísticas */}
          <div className="flex justify-center">
            <div className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-900/40 to-slate-900/40 border border-emerald-500/30 rounded-2xl backdrop-blur-md shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-1">
               {/* Fondo brillante en hover */}
               <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
               
               <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30 group-hover:bg-emerald-500/30 transition-colors">
                 <Network className="w-6 h-6 text-emerald-300" />
               </div>
               
               <div className="text-left">
                 <span className="block text-[10px] text-emerald-200/70 uppercase tracking-widest font-bold">Cobertura Total</span>
                 <span className="block text-lg font-bold text-white tracking-wide group-hover:text-emerald-100 transition-colors">
                   10 Filiales en Todo el Perú
                 </span>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- 3. OLA DE TRANSICIÓN INFERIOR --- */}
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            transform="scale(1, -1) translate(0, -120)" 
            className="fill-white" 
          />
        </svg>
      </div>
    </section>
  );
}
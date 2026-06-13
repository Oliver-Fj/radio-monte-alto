'use client';

import React from 'react';
import { Church, Calendar, Sparkles, MapPin } from 'lucide-react';

export default function CultosHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white overflow-hidden -mt-16">
      
      {/* --- 1. FONDO CON EFECTOS (TEMA DORADO) --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* --- 2. CONTENIDO PRINCIPAL (POSICIÓN SUPERIOR) --- */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 md:pt-32 md:pb-24 text-center">
        
        {/* LOGO ANIMADO FLOTANTE (ANILLOS GIRATORIOS) */}
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-5 group cursor-default">
           
           {/* Anillos Giratorios (Amarillo y Azul) */}
           <div className="absolute inset-0 border-2 border-yellow-400/60 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
           <div className="absolute -inset-2 border border-blue-400/40 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
           
           {/* Contenedor de la Imagen */}
           <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.4)] overflow-hidden border border-white/10">
              <img 
                src="/images/logo-radio.png" 
                alt="Radio Monte Alto Logo" 
                className="w-full h-full object-contain p-2 opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
              />
              
              {/* Brillo extra */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           </div>

           {/* Decoración Sparkles */}
           <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-white animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        </div>

        {/* TEXTOS */}
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-lg shadow-yellow-900/20 backdrop-blur-md">
            <Calendar className="w-3 h-3 text-yellow-400 animate-pulse" />
            Todos los Domingos
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-5 leading-tight drop-shadow-xl">
            <span className="block text-white mb-1">Cultos</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">
              Dominicales
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-serif italic text-blue-200 mb-6 drop-shadow-md">
            "No dejando de congregarnos, como algunos tienen por costumbre"
          </p>

          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Únete a nosotros cada domingo para adorar juntos, recibir la Palabra de Dios 
            y experimentar la presencia del Espíritu Santo en comunidad.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-yellow-900/20 border border-white/10 hover:border-yellow-500/50 rounded-full backdrop-blur-sm transition-all cursor-default">
              <Calendar className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm tracking-wide">Domingos 8:00 AM - 3:15 PM</span>
            </div>
            <div className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-blue-900/20 border border-white/10 hover:border-blue-500/50 rounded-full backdrop-blur-sm transition-all cursor-default">
              <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm tracking-wide">Monte Alto, Huancayo</span>
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
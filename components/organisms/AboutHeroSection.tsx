'use client';

import React, { useState } from 'react';
import { Radio, MapPin, Sparkles, Signal, TowerControl as Tower } from 'lucide-react';

export default function AboutHeroSection() {
  // Estado para manejar si la imagen del logo falla
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative bg-slate-950 overflow-hidden -mt-16">      
      {/* --- 1. FONDO CON IMAGEN Y PATRONES (SOLUCIÓN ROBUSTA) --- */}
      <div className="absolute inset-0 z-0">
        {/* IMAGEN DE FONDO (Antena) */}
        <img 
          src="https://images.unsplash.com/photo-1560164294-937d74318b6e?q=80&w=2076&auto=format&fit=crop" 
          alt="Antena de Radio Monte Alto" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        
        {/* Capa de Gradiente "Royal" */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/95 via-blue-900/90 to-slate-950" />
        
        {/* PATRÓN SVG EN LÍNEA (No requiere internet ni descargas externas) */}
        <div 
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        {/* Luz ambiental central */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* --- 2. CONTENIDO PRINCIPAL --- */}
      {/* ✅ CAMBIO: pt-24 md:pt-28 (ajustado para header h-16 md:h-20) */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20 md:pt-28 md:pb-28 text-center">
        
        {/* LOGO ANIMADO FLOTANTE */}
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-8 group cursor-default">
           {/* Anillos Giratorios */}
           <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
           <div className="absolute -inset-2 border border-blue-400/30 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
           
           {/* Contenedor Central */}
           <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] overflow-hidden border border-white/10">
              
              {/* LÓGICA INTELIGENTE: Muestra imagen O icono si la imagen falla */}
              {!logoError ? (
                <img 
                  src="/images/logo-radio.png" 
                  alt="Radio Monte Alto Logo" 
                  className="w-full h-full object-contain p-1.5 opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  onError={() => setLogoError(true)} // Si falla, activa el error
                />
              ) : (
                // Fallback de lujo si no encuentra la imagen
                <div className="flex items-center justify-center w-full h-full bg-blue-950/50 text-yellow-400">
                   <Tower className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                </div>
              )}
              
              {/* Brillo extra sobre la imagen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           </div>

           {/* Decoración Sparkles */}
           <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
        </div>

        {/* TEXTOS */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-lg shadow-blue-900/20 backdrop-blur-md">
            <Signal className="w-3 h-3 text-yellow-400 animate-pulse" />
            Señal Oficial
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300">Nosotros</span>
          </h1>

          {/* SLOGAN DORADO */}
          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-8 drop-shadow-lg">
            "El Portavoz del Reino de Dios"
          </p>
          
          {/* DATOS DE INTERÉS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100/90 font-light text-sm md:text-base">
            <div className="group flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-yellow-500/30 transition-all cursor-default shadow-lg">
              <Radio className="w-4 h-4 text-blue-400 group-hover:text-yellow-400 transition-colors" />
              <span>Transmisión Online</span>
            </div>
            
            <div className="hidden sm:block w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-50" />
            
            <div className="group flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-red-500/30 transition-all cursor-default shadow-lg">
              <MapPin className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors" />
              <span>Huancayo, Perú</span>
            </div>
          </div>
        </div>

      </div>

      {/* --- 3. LA OLA DE TRANSICIÓN --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            transform="scale(1, -1) translate(0, -120)" 
            className="fill-slate-50" 
          />
        </svg>
      </div>

    </section>
  );
}
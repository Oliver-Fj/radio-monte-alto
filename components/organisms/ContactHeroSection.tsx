'use client';

import { MessageCircle, Sparkles, Send } from 'lucide-react';

export default function ContactHeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden -mt-16">
      
      {/* --- 1. FONDO CON PROFUNDIDAD --- */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* --- 2. CONTENIDO PRINCIPAL (ULTRA COMPACTO) --- */}
      {/* - pt-24 / pt-32: Mantiene espacio para el menú de navegación.
         - pb-16 / pb-24: Reduje drásticamente el espacio de abajo para que la ola suba.
      */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        
        {/* ICONO FLOTANTE */}
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-5 group cursor-default">
           <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
           <div className="absolute -inset-2 border border-blue-400/30 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
           
           <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" />
              <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
           </div>
        </div>

        {/* TEXTOS */}
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <Send className="w-3 h-3 text-yellow-400" />
            Canales Abiertos
          </div>

          {/* TÍTULO */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
            Contáct<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">anos</span>
          </h1>

          {/* SLOGAN DORADO */}
          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-6 drop-shadow-lg">
            "Estamos aquí para escucharte"
          </p>
          
          {/* DESCRIPCIÓN (Sin margen inferior extra 'mb-0') */}
          <p className="text-blue-100/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Ya sea que tengas una consulta, necesites oración o quieras conocer más sobre nuestro ministerio, 
            nos encantaría saber de ti.
          </p>
        </div>

      </div>

      {/* --- 3. LA OLA DE TRANSICIÓN --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[90px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          {/* fill-slate-50 conecta con el fondo gris claro de abajo */}
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
'use client';

import React from 'react';
import { Smartphone, Download, Pause, SkipForward, Wifi, Battery, Signal, Heart } from 'lucide-react';

// --- COMPONENTES UI REUTILIZABLES (Point 1, 2, 7) ---

const GooglePlayIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.15L16.81,8.87L14.54,11.14L6.05,2.15Z" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
  </svg>
);

const FloatingBadge = ({ icon: Icon, label, value, colorClass, animationClass, positionClass }: any) => (
  <div className={`absolute z-20 ${positionClass} ${animationClass}`}>
    <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-2.5 rounded-xl shadow-xl flex items-center gap-2">
      <div className={`${colorClass} p-1 rounded-full`}>
        <Icon className={`w-3 h-3 ${colorClass.replace('bg-', 'text-').replace('/20', '')}`} />
      </div>
      <div>
        <p className="text-[9px] text-slate-400 uppercase font-bold">{label}</p>
        <p className="text-white font-bold text-[10px]">{value}</p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PHONE MOCKUP (Extracted for Point 7) ---
const PhoneMockup = () => {
  return (
    // Point 5: Accesibilidad
    <div 
      className="relative w-[230px] h-[440px] bg-slate-900 rounded-[2rem] border-[5px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.4)] overflow-hidden z-10 transform transition-transform hover:scale-105 duration-500"
      role="img"
      aria-label="Vista previa de la app Radio Monte Alto mostrando el reproductor en vivo"
    >
      {/* Borde interno decorativo */}
      <div className="absolute inset-0 rounded-[1.8rem] border border-slate-700/50 pointer-events-none z-50" />
      
      <div className="w-full h-full bg-[#0f172a] relative flex flex-col">
        {/* Status Bar */}
        <div className="flex justify-between items-center px-4 py-2 text-white text-[9px] font-medium z-20">
          <span>9:41</span>
          <div className="flex gap-1 items-center opacity-80">
            <Signal className="w-2 h-2" /><Wifi className="w-2 h-2" /><Battery className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="flex-1 flex flex-col items-center pt-4 px-4 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-[#0f172a] -z-10" />

          {/* Carátula */}
          <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg border border-white/5 flex items-center justify-center mb-4 group cursor-pointer relative overflow-hidden">
             <img 
               src="/images/logo-radio.png" 
               alt="Logo de Radio Monte Alto" 
               className="w-24 h-24 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Info Track */}
          <div className="text-center w-full mb-4">
            <h3 className="text-white text-base font-bold mb-0 truncate">Radio Monte Alto</h3>
            <p className="text-slate-400 text-[10px]">Transmisión Oficial</p>
          </div>

          {/* Player Controls Simplificados */}
          <div className="w-full h-1 bg-slate-700 rounded-full mb-4 overflow-hidden">
            <div className="h-full w-2/3 bg-gradient-to-r from-yellow-400 to-yellow-600 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg" />
            </div>
          </div>

          <div className="w-full flex justify-between items-center px-1">
             <button aria-label="Anterior" className="text-slate-400 hover:text-white"><SkipForward className="w-4 h-4 rotate-180" /></button>
             <button aria-label="Pausar" className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:scale-110 transition-transform">
               <Pause className="w-4 h-4 fill-current" />
             </button>
             <button aria-label="Siguiente" className="text-slate-400 hover:text-white"><SkipForward className="w-4 h-4" /></button>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="h-12 bg-slate-900/50 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-4 z-20">
          <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center"><Wifi className="w-3 h-3 text-yellow-500" /></div>
          <Download className="w-3 h-3 text-slate-500" />
          <Heart className="w-3 h-3 text-slate-500" />
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-600 rounded-full z-30" />
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function AppDownloadSection() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-[#131C31] text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* --- FONDO AMBIENTAL OPTIMIZADO (Point 4) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blurs reducidos en móvil para performance */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[40px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[40px] md:blur-[80px] translate-x-1/3 translate-y-1/3 mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#131C31]/50 to-[#131C31]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* --- COLUMNA TEXTO --- */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-blue-200 uppercase">Disponible Ahora</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Lleva la <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 drop-shadow-sm">
                Unción Contigo
              </span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
              Radio Monte Alto en tu bolsillo. Alabanzas y prédicas las <span className="text-white font-semibold">24 horas</span> sin interrupciones.
            </p>

            {/* Botones de descarga */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              
              <a 
                href="https://play.google.com/store/apps/details?id=app.radiomontealto.pe" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2.5 bg-white text-slate-900 px-4 py-2.5 rounded-xl hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5 overflow-hidden"
                aria-label="Descargar en Google Play"
              >
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine" />
                <div className="text-xl"><GooglePlayIcon /></div>
                <div className="text-left z-10">
                  <div className="text-[8px] font-bold uppercase tracking-widest opacity-70">Disponible en</div>
                  <div className="text-sm font-bold leading-none font-sans">Google Play</div>
                </div>
              </a>

              <div className="flex items-center gap-2.5 bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm text-slate-400 px-4 py-2.5 rounded-xl cursor-not-allowed" aria-label="Próximamente en App Store">
                <div className="text-xl"><AppleIcon /></div>
                <div className="text-left">
                  <div className="text-[8px] font-bold uppercase tracking-widest opacity-50">Próximamente</div>
                  <div className="text-sm font-bold leading-none font-sans">App Store</div>
                </div>
              </div>

            </div>
          </div>

          {/* --- COLUMNA MOCKUP --- */}
          <div className="flex-1 relative flex justify-center lg:justify-end perspective-1000">
            {/* Glow detrás del celular (Optimizado Point 4) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-[40px] md:blur-[60px]" />

            <FloatingBadge 
              icon={Wifi} 
              label="Estado" 
              value="En Vivo" 
              colorClass="bg-red-500/20 text-red-500"
              positionClass="top-10 -left-4 lg:left-4"
              animationClass="animate-float-slow"
            />
            
            <FloatingBadge 
              icon={Smartphone} 
              label="Calidad" 
              value="HD" 
              colorClass="bg-yellow-500/20 text-yellow-500"
              positionClass="bottom-12 -right-4 lg:-right-4"
              animationClass="animate-float-delayed"
            />

            <PhoneMockup />
          </div>

        </div>
      </div>

      {/* Point 3: Estilos Inline para Animaciones (Para que funcione sin config global) */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite 1s; }
        .group:hover .group-hover\:animate-shine { animation: shine 1s; }
      `}</style>

    </section>
  );
}
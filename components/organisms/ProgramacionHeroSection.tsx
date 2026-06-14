'use client';
import Image from 'next/image';
import { Calendar, Clock, Sparkles, Signal } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ProgramacionHeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/hero-deskto11.png`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/65 to-slate-950/95" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-6 group cursor-default">
          <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-blue-400/30 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" />
            <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
            <Signal className="w-3 h-3 text-yellow-400" /> Horarios en Vivo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Programación</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-6">"La Palabra de Dios las 24 horas del día"</p>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-blue-100/90 text-sm md:text-base">
            <Clock className="w-4 h-4 text-blue-400" /><span>Zona Horaria: Perú (GMT-5)</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[35px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" transform="scale(1, -1) translate(0, -120)" className="fill-gray-50" />
        </svg>
      </div>
    </section>
  );
}
'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Cross } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ClinicaHeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/hero-clinica.png`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-red-950/50 to-slate-950/95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-5 group cursor-default">
          <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-red-500/40 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] overflow-hidden border border-white/10">
            <img src={`${B}/images/logo-radio.png`} alt="Logo" className="w-full h-full object-contain p-2 opacity-95 group-hover:scale-110 transition-all duration-700" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
            <Heart className="w-3 h-3 text-red-400 animate-pulse" /> Ministerio de Sanidad y Restauración
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-xl">
            <span className="block text-white mb-1">Clínica</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-yellow-400">Celestial</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-blue-200 mb-4">"No necesitan médico los sanos, sino los enfermos"</p>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Un ministerio dedicado a la sanidad del alma y del cuerpo. Aquí oramos, ayunamos y ministramos en guerra espiritual para la liberación completa.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Heart className="w-5 h-5 text-red-400" /><span className="font-bold text-sm">Atención 24/7</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Cross className="w-5 h-5 text-yellow-400" /><span className="font-bold text-sm">Pase Libre</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg className="relative block w-[calc(100%+1.3px)] h-[35px] md:h-[45px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" transform="scale(1, -1) translate(0, -120)" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}
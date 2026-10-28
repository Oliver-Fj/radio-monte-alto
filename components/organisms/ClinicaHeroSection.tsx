'use client';
import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, Cross } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ClinicaHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/opt/hero-clinica.webp`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-red-950/50 to-slate-950/95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-5 group cursor-default">
          <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent motion-safe:animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-red-500/40 rounded-full border-b-transparent motion-safe:animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.5)] overflow-hidden border border-white/10">
            <img src={`${B}/images/opt/logo-radio.webp`} alt="Radio Monte Alto" width={160} height={160} fetchPriority="high" decoding="async" className="w-full h-full object-contain p-2 opacity-95 group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-transform duration-700" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
            <Heart className="w-3 h-3 text-red-400 motion-safe:animate-pulse" aria-hidden="true" /> Ministerio de Sanidad y Restauración
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
              <Heart className="w-5 h-5 text-red-400" aria-hidden="true" /><span className="font-bold text-sm">Atención 24/7</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Cross className="w-5 h-5 text-yellow-400" aria-hidden="true" /><span className="font-bold text-sm">Pase Libre</span>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider fillClass="fill-white" />
    </section>
  );
}
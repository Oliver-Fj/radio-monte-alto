'use client';
import React from 'react';
import Image from 'next/image';
import { MapPin, Sparkles, Network, Globe } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function FilialesHeroSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/hero-filiales.png`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-teal-900/65 to-slate-950/95" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-6 group cursor-default">
          <div className="absolute inset-0 border-2 border-yellow-400/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-emerald-500/40 rounded-full border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)] overflow-hidden border border-white/10">
            <img src={`${B}/images/logo-radio.png`} alt="Logo" className="w-full h-full object-contain p-2 opacity-95 group-hover:scale-110 transition-all duration-700" />
          </div>
          <Sparkles className="absolute -top-3 -right-3 w-7 h-7 text-yellow-400 animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
            <Globe className="w-3 h-3 text-emerald-400 animate-pulse" /> Expansión Nacional
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-2xl">
            <span className="block text-white mb-1">Nuestras</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-yellow-400">Filiales</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-emerald-100 mb-4">"Me seréis testigos... hasta lo último de la tierra"</p>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light mb-8">
            La obra de Monte Alto se extiende con poder por todo el Perú, llevando el mensaje transformador del Evangelio a cada rincón de nuestra nación.
          </p>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-900/40 border border-emerald-500/30 rounded-2xl backdrop-blur-md">
            <div className="p-2 bg-emerald-500/20 rounded-lg"><Network className="w-6 h-6 text-emerald-300" /></div>
            <div className="text-left">
              <span className="block text-[10px] text-emerald-200/70 uppercase tracking-widest font-bold">Cobertura Total</span>
              <span className="block text-lg font-bold text-white">10 Filiales en Todo el Perú</span>
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
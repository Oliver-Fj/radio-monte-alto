'use client';

import Image from 'next/image';
import { BookOpen, Sparkles, Library } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function RecursosHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${B}/images/hero/slide1-desktop-1366.webp`}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/70 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-yellow-500/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 md:pt-36 md:pb-28 text-center">

        {/* Ícono */}
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-7">
          <div className="absolute inset-0 border-2 border-yellow-500/50 rounded-full border-t-transparent animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-blue-400/25 rounded-full border-b-transparent animate-[spin_7s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.35)]">
            <Library className="w-8 h-8 md:w-10 md:h-10 text-white" />
            <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
            <BookOpen className="w-3 h-3 text-yellow-400" />
            Alimento Espiritual
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl">
            Recursos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
              Espirituales
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-8">
            "La fe viene por el oír, y el oír por la Palabra de Dios"
          </p>

          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Artículos, devocionales y enseñanzas para edificar tu vida espiritual.
          </p>
        </div>
      </div>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

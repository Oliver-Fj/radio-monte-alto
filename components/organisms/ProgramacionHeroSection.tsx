'use client';

import Image from 'next/image';
import { Calendar, Clock, Signal, Radio } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ProgramacionHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">

      {/* ── Imagen de fondo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${B}/images/hero/slide2-desktop-1366.webp`}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay degradado — termina en slate-950 exacto */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/75 via-blue-900/60 to-slate-950" />
        {/* Luz ambiental */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      {/* ── Contenido ── */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-20 md:pt-36 md:pb-28 text-center">

        {/* Ícono animado */}
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-7 group">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
            <Signal className="w-3 h-3 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
            Horarios en Vivo
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-xl">
            Nuestra{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Programación
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-8">
            "La Palabra de Dios las 24 horas del día"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-blue-100/90 text-sm">
              <Clock className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Zona Horaria: Perú (GMT-5)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm text-yellow-200 text-sm">
              <Radio className="w-4 h-4 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
              <span>Transmisión 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fade inferior suave — sin ola, sin línea ── */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

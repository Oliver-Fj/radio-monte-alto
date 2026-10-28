'use client';
import Image from 'next/image';
import { Star, ChevronDown } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function IglesiaHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">

      {/* ── Fondo con imagen ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${B}/images/hero/slide3-desktop-1366.webp`}
          alt=""
          fill
          priority
          quality={90}
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Capas de gradiente premium */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />
      </div>

      {/* ── Luces ambientales ── */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[180px] rounded-full" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/5 blur-[160px] rounded-full" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 blur-[160px] rounded-full" />
        {/* Partículas decorativas */}
        {[...Array(6)].map((_, i) => (
          <div key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/40 motion-safe:animate-pulse"
            style={{
              top: `${15 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }} />
        ))}
        {[...Array(5)].map((_, i) => (
          <div key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-amber-300/50 motion-safe:animate-pulse"
            style={{
              top: `${20 + i * 13}%`,
              right: `${8 + i * 14}%`,
              animationDelay: `${i * 0.9}s`,
              animationDuration: `${2.5 + i * 0.4}s`,
            }} />
        ))}
      </div>

      {/* ── Contenido ── */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center">

        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/40 border border-amber-500/30 text-amber-200 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase mb-10 backdrop-blur-md">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
          C.G.I. Monte Alto
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 motion-safe:animate-pulse" style={{ animationDelay:'0.5s' }} aria-hidden="true" />
        </div>

        {/* ── LOGO ── */}
        <div className="relative mb-10 group">
          {/* Anillos decorativos giratorios */}

          {/* Glow del logo */}
          <div className="absolute inset-0 bg-yellow-400/20 blur-[60px] rounded-full scale-150 group-hover:bg-yellow-400/30 transition duration-700" />
          <div className="absolute inset-0 bg-amber-500/15 blur-[30px] rounded-full motion-safe:animate-pulse" />

          {/* Logo container */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center
            bg-slate-950/40 backdrop-blur-xl border border-yellow-500/30 shadow-[0_0_80px_rgba(234,179,8,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]
            group-hover:border-yellow-400/50 group-hover:shadow-[0_0_120px_rgba(234,179,8,0.35)] transition duration-700">
            <Image
              src={`${B}./images/opt/logos-monte.webp`}
              alt="Radio Monte Alto"
              width={110}
              height={110}
              className="object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_35px_rgba(234,179,8,0.7)] transition duration-700"
              priority
            />
          </div>

          {/* Destellos en esquinas */}
          
        </div>

        {/* Títulos */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-4 drop-shadow-xl">
            Nuestra{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 italic font-serif">
                Iglesia
              </span>
              {/* Subrayado dorado */}
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 rounded-full" />
            </span>
          </h1>

          {/* Divisor con cruz */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-500/40" />
            <span className="text-yellow-500/60 text-lg">✝</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-500/40" />
          </div>

          <p className="text-xl md:text-2xl font-serif italic text-yellow-300 mb-5 drop-shadow-md">
            "Edificados sobre el fundamento de los apóstoles y profetas"
          </p>
          <p className="text-slate-300 text-slate-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
            Efesios 2:20
          </p>

          <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Una comunidad de fe arraigada en la Palabra de Dios, comprometida con el evangelio de Jesucristo y la transformación de las naciones.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 opacity-50 motion-safe:animate-bounce">
          <span className="text-slate-400 text-[10px] tracking-[0.3em] uppercase">Descubre más</span>
          <ChevronDown className="w-4 h-4 text-yellow-400" aria-hidden="true" />
        </div>
      </div>

      {/* Fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

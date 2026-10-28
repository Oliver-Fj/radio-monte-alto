'use client';
import React from 'react';
import Image from 'next/image';
import { Church, Calendar, Sparkles, MapPin } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function CultosHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/opt/hero-cultos.webp`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/65 to-slate-950/95" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-5 group cursor-default">
          <div className="absolute inset-0 border-2 border-yellow-400/60 rounded-full border-t-transparent motion-safe:animate-[spin_4s_linear_infinite]" />
          <div className="absolute -inset-2 border border-blue-400/40 rounded-full border-b-transparent motion-safe:animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.4)] overflow-hidden border border-white/10">
            <img src={`${B}/images/opt/logo-radio.webp`} alt="Radio Monte Alto" width={160} height={160} fetchPriority="high" decoding="async" className="w-full h-full object-contain p-2 opacity-95 group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-transform duration-700" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-white motion-safe:animate-pulse" aria-hidden="true" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-500/30 text-yellow-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
            <Calendar className="w-3 h-3 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" /> Todos los Domingos
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-xl">
            <span className="block text-white mb-1">Cultos</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500">Dominicales</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-blue-200 mb-4">&ldquo;No dejando de congregarnos, como algunos tienen por costumbre&rdquo;</p>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Únete a nosotros cada domingo para adorar juntos, recibir la Palabra de Dios y experimentar la presencia del Espíritu Santo en comunidad.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-yellow-400" aria-hidden="true" /><span className="font-bold text-sm">Domingos 8:00 AM - 3:15 PM</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-blue-400" aria-hidden="true" /><span className="font-bold text-sm">Monte Alto, Huancayo</span>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider fillClass="fill-white" />
    </section>
  );
}
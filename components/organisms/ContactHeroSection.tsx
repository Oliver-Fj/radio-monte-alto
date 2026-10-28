'use client';
import Image from 'next/image';
import { MessageCircle, Send } from 'lucide-react';
import SectionDivider from '@/components/atoms/SectionDivider';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function ContactHeroSection() {
  return (
    <section data-keep-dark className="relative bg-slate-950 overflow-hidden -mt-16">
      <div className="absolute inset-0 z-0">
        <Image src={`${B}/images/opt/hero-contactanos.webp`} alt="" fill priority quality={85} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/65 to-slate-950/95" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-10 md:pt-32 md:pb-12 text-center">
        <div className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-5 group cursor-default">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-md" aria-hidden="true" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
            <Send className="w-3 h-3 text-yellow-400" aria-hidden="true" /> Canales Abiertos
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-xl">
            Contáct<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">anos</span>
          </h1>
          <p className="text-xl md:text-2xl font-serif italic text-yellow-400 mb-4">&ldquo;Estamos aquí para escucharte&rdquo;</p>
          <p className="text-blue-100/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
            Ya sea que tengas una consulta, necesites oración o quieras conocer más sobre nuestro ministerio, nos encantaría saber de ti.
          </p>
        </div>
      </div>

      <SectionDivider fillClass="fill-slate-50" />
    </section>
  );
}
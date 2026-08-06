'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, Radio, Sparkles, Signal, Mic2, BookOpen, Heart, Globe, Music } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import GoldTitle from '@/components/atoms/GoldTitle';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

const programas = [
  {
    id: 1,
    numero: '01',
    nombre: 'Manteniendo el Candelero Encendido',
    descripcion: 'El mejor inicio de tu día con alabanzas y la Palabra de Dios que enciende tu espíritu.',
    horario: '5:00 – 6:00 AM',
    dias: 'Lun – Sáb',
    categoria: 'Alabanzas',
    imagen: `${B}/images/hero/slide1-desktop-1366.webp`,
    icono: <Music className="w-7 h-7" />,
    acento: 'from-yellow-500/70 via-amber-600/50 to-slate-950',
    glow: '234,179,8',
    badge: 'bg-yellow-500/15 border-yellow-400/30 text-yellow-200',
    borde: 'group-hover:border-yellow-400/50',
    linea: 'via-yellow-400',
    vivo: true,
  },
  {
    id: 2,
    numero: '02',
    nombre: 'Proclamando la Sana Doctrina',
    descripcion: 'Fundamentos sólidos de la fe cristiana para madurar al creyente en la Palabra.',
    horario: '5:00 – 6:00 PM',
    dias: 'Lun – Vie',
    categoria: 'Enseñanza',
    imagen: `${B}/images/hero/slide2-desktop-1366.webp`,
    icono: <BookOpen className="w-7 h-7" />,
    acento: 'from-blue-600/70 via-blue-800/50 to-slate-950',
    glow: '59,130,246',
    badge: 'bg-blue-500/15 border-blue-400/30 text-blue-200',
    borde: 'group-hover:border-blue-400/50',
    linea: 'via-blue-400',
    vivo: false,
  },
  {
    id: 3,
    numero: '03',
    nombre: 'Predestinados para Triunfar',
    descripcion: 'Mensajes de identidad, propósito y victoria en Cristo para la generación joven.',
    horario: '7:00 – 8:00 PM',
    dias: 'Sábados',
    categoria: 'Juventud',
    imagen: `${B}/images/hero/slide3-desktop-1366.webp`,
    icono: <Heart className="w-7 h-7" />,
    acento: 'from-purple-600/70 via-purple-800/50 to-slate-950',
    glow: '147,51,234',
    badge: 'bg-purple-500/15 border-purple-400/30 text-purple-200',
    borde: 'group-hover:border-purple-400/50',
    linea: 'via-purple-400',
    vivo: false,
  },
];

const BAR_H = [3,6,4,8,5,9,4,7,3,8,5,7,4,6,9,5,7,4,6,3];

function Waveform({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setPhase(p => (p + 1) % 20), 100);
    return () => clearInterval(id);
  }, [active]);
  return (
    <div className="flex items-end gap-[2px] h-6">
      {BAR_H.map((h, i) => {
        const animated = active ? Math.max(1, h + Math.round(Math.sin((i + phase) * 0.7) * 3)) : 2;
        return (
          <div key={i} className="w-[2px] rounded-full transition-all duration-100 flex-shrink-0"
            style={{ height: `${animated * 3}px`, background: active ? 'rgba(251,191,36,0.85)' : 'rgba(255,255,255,0.15)' }} />
        );
      })}
    </div>
  );
}

function Card({ p, index, visible }: { p: typeof programas[0]; index: number; visible: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="group relative h-[560px] flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 130}ms`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Glow exterior */}
      <div className="absolute -inset-[2px] rounded-[2.2rem] opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg pointer-events-none"
        style={{ background: `radial-gradient(ellipse, rgba(${p.glow},0.35) 0%, transparent 70%)` }} />

      {/* Card body */}
      <div className={`relative flex-1 rounded-[2rem] overflow-hidden border border-white/8 ${p.borde} transition-all duration-700 shadow-2xl group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] group-hover:-translate-y-2`}>

        {/* Imagen */}
        <div className="absolute inset-0">
          <Image src={p.imagen} alt={p.nombre} fill
            className="object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            sizes="(max-width:768px) 100vw, 33vw" />
          <div className={`absolute inset-0 bg-gradient-to-t ${p.acento} opacity-95`} />
          {/* Shimmer dorado */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 p-7 flex flex-col">

          {/* Top row */}
          <div className="flex items-start justify-between mb-auto">
            {/* Número */}
            <span className="text-6xl font-black text-white/8 group-hover:text-white/15 transition-colors duration-500 leading-none select-none font-serif">
              {p.numero}
            </span>
            <div className="flex flex-col items-end gap-2">
              {/* Badge categoría */}
              <div className={`inline-flex items-center px-3 py-1.5 rounded-full border backdrop-blur-sm text-[10px] font-bold tracking-wider uppercase ${p.badge}`}>
                {p.categoria}
              </div>
              {/* Badge EN VIVO */}
              {p.vivo && (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/20 border border-red-400/40 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  <span className="text-red-200 text-[9px] font-black tracking-widest uppercase">En Vivo</span>
                </div>
              )}
            </div>
          </div>

          {/* Centro — icono animado */}
          <div className="flex items-center justify-center py-6">
            <div className={`w-20 h-20 rounded-2xl bg-white/6 border border-white/12 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg`}
              style={{ boxShadow: hov ? `0 0 40px rgba(${p.glow},0.4)` : 'none' }}>
              <div className="text-white/60 group-hover:text-yellow-300 transition-colors duration-500">
                {p.icono}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div>
            {/* Waveform */}
            <div className="mb-5">
              <Waveform active={hov} />
            </div>

            {/* Nombre */}
            <h3 className="text-[1.35rem] md:text-2xl font-serif font-bold text-white leading-snug mb-3 group-hover:text-yellow-50 transition-colors duration-300 drop-shadow-lg">
              {p.nombre}
            </h3>

            {/* Descripción deslizable */}
            <div style={{ maxHeight: hov ? '64px' : '0', opacity: hov ? 1 : 0, transition: 'all 0.45s ease', overflow: 'hidden', marginBottom: hov ? '16px' : 0 }}>
              <p className="text-slate-300/85 text-sm leading-relaxed pl-3 border-l-2 border-yellow-400/50">
                {p.descripcion}
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px bg-gradient-to-r from-white/0 ${p.linea} to-white/0 mb-4 transition-all duration-500 ${hov ? 'opacity-80' : 'opacity-20'}`} />

            {/* Horario + días */}
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <Clock className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span className="font-mono">{p.horario}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
                <Radio className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                <span>{p.dias}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea inferior de color */}
        <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent ${p.linea} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>

      {/* CTA flotante bajo la card */}
      <div className="mt-3 overflow-hidden" style={{ maxHeight: hov ? '48px' : '0', opacity: hov ? 1 : 0, transition: 'all 0.3s ease' }}>
        <Link href="/programacion"
          className="flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-bold tracking-wider text-white/70 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300 bg-white/3 hover:bg-white/8">
          <span className="uppercase">Ver horario completo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function FeaturedProgramsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">

      {/* Fondos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] rounded-full blur-[180px]" style={{ background: 'rgba(234,179,8,0.035)' }} />
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(59,130,246,0.04)' }} />
        <div className="absolute -bottom-40 left-0 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(147,51,234,0.04)' }} />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20 transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}>

          {/* Badge con ondas laterales */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="hidden sm:flex items-end gap-[3px]">
              {[2,4,6,8,6,4,2].map((h,i) => (
                <div key={i} className="w-[3px] rounded-full bg-gradient-to-t from-yellow-600 to-yellow-400 opacity-60" style={{ height: `${h * 4}px` }} />
              ))}
            </div>
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/10 via-amber-500/15 to-yellow-500/10 border border-yellow-500/25 backdrop-blur-sm shadow-[0_0_30px_rgba(234,179,8,0.15)]">
              <Signal className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-200 text-xs font-black tracking-[0.35em] uppercase">Programas al Aire</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="hidden sm:flex items-end gap-[3px]">
              {[2,4,6,8,6,4,2].map((h,i) => (
                <div key={i} className="w-[3px] rounded-full bg-gradient-to-t from-yellow-600 to-yellow-400 opacity-60" style={{ height: `${h * 4}px` }} />
              ))}
            </div>
          </div>

          {/* Título */}
          <GoldTitle className="mb-6">Programación Radial</GoldTitle>

          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Espacios ungidos para transformar tu corazón.{' '}
            <span className="text-yellow-400/80 font-normal">Escúchanos</span> y vive la diferencia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mb-14">
          {programas.map((p, i) => (
            <Card key={p.id} p={p} index={i} visible={visible} />
          ))}
        </div>

        {/* Botón */}
        <div className="text-center transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}>
          <Link href="/programacion"
            className="group relative inline-flex items-center gap-4 px-10 py-4 rounded-full border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-500 overflow-hidden hover:shadow-[0_0_60px_rgba(234,179,8,0.2)]">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent" />
            <Radio className="w-5 h-5 text-yellow-400 group-hover:animate-pulse relative z-10" />
            <span className="relative z-10 text-sm font-bold tracking-[0.2em] text-white uppercase">Explorar Programación Completa</span>
            <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10" />
          </Link>
        </div>

      </div>
    </section>
  );
}

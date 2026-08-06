'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Heart, Quote, Star, MapPin, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

const testimonios = [
  {
    nombre: 'María Rodríguez',
    rol: 'Oyente desde 2019',
    testimonio: 'Radio Monte Alto ha sido un instrumento de Dios en mi vida. A través de sus enseñanzas encontré el camino de salvación. Gloria a Dios por este ministerio que transforma vidas.',
    ciudad: 'Huancayo, Perú',
    rating: 5,
    color: 'from-blue-600 to-blue-800',
  },
  {
    nombre: 'Carlos Mendoza',
    rol: 'Oyente fiel',
    testimonio: 'Escucho la radio todos los días mientras trabajo. Los mensajes me han ayudado a crecer espiritualmente y a fortalecer mi fe en momentos difíciles. Que Dios siga bendiciendo este ministerio.',
    ciudad: 'Lima, Perú',
    rating: 5,
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    nombre: 'Ana Gutiérrez',
    rol: 'Oyente desde 2020',
    testimonio: 'Desde que escucho Radio Monte Alto, mi vida cambió completamente. Los estudios bíblicos me han dado un conocimiento profundo de la Palabra de Dios. Estoy muy agradecida.',
    ciudad: 'Junín, Perú',
    rating: 5,
    color: 'from-purple-600 to-purple-800',
  },
  {
    nombre: 'Roberto Flores',
    rol: 'Oyente en familia',
    testimonio: 'Escuchamos Radio Monte Alto en familia cada mañana. La programación nos une en la Palabra y nos prepara para el día. Es una bendición tener este ministerio tan cerca.',
    ciudad: 'Ayacucho, Perú',
    rating: 5,
    color: 'from-rose-600 to-rose-800',
  },
  {
    nombre: 'Sandra Quispe',
    rol: 'Oyente desde 2021',
    testimonio: 'En los momentos más oscuros de mi vida, la voz de Radio Monte Alto fue el ancla que me mantuvo firme en la fe. Dios usa este ministerio de maneras extraordinarias.',
    ciudad: 'Cusco, Perú',
    rating: 5,
    color: 'from-amber-600 to-amber-800',
  },
  {
    nombre: 'Jorge Mamani',
    rol: 'Oyente internacional',
    testimonio: 'Desde España escucho Radio Monte Alto por internet. La señal llega a todos los rincones del mundo llevando esperanza. El streaming es una herramienta poderosa en manos de Dios.',
    ciudad: 'Madrid, España',
    rating: 5,
    color: 'from-cyan-600 to-cyan-800',
  },
];

function TestimonioCard({ t, index, visible }: { t: typeof testimonios[0]; index: number; visible: boolean }) {
  return (
    <div
      className="group relative flex-shrink-0 w-[85vw] sm:w-[420px] md:w-[400px] transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Glow hover */}
      <div className="absolute -inset-px bg-gradient-to-b from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

      <div className="relative h-full bg-slate-900/60 backdrop-blur-md border border-white/8 group-hover:border-yellow-500/30 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-500 shadow-xl group-hover:shadow-yellow-500/10">

        {/* Comilla decorativa de fondo */}
        <Quote className="absolute top-5 right-5 w-12 h-12 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors duration-500 fill-yellow-500/5" />

        {/* Estrellas */}
        <div className="flex gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Texto */}
        <blockquote className="flex-1 text-slate-300 leading-relaxed text-[15px] italic relative z-10">
          "{t.testimonio}"
        </blockquote>

        {/* Divisor */}
        <div className="h-px w-full bg-gradient-to-r from-yellow-500/30 via-white/5 to-transparent" />

        {/* Autor */}
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
            {t.nombre.charAt(0)}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{t.nombre}</p>
            <p className="text-yellow-400/70 text-[11px] font-medium mb-0.5">{t.rol}</p>
            <div className="flex items-center gap-1 text-slate-500 text-[11px]">
              <MapPin className="w-3 h-3 text-slate-500" />
              {t.ciudad}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimoniosSection() {
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cardW = 420 + 24; // width + gap
  const maxScroll = (testimonios.length - 1) * cardW;

  const mover = (dir: 'prev' | 'next') => {
    setScroll(s => Math.max(0, Math.min(maxScroll, s + (dir === 'next' ? cardW : -cardW))));
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: scroll, behavior: 'smooth' });
    }
  }, [scroll]);

  return (
    <section ref={sectionRef} className="relative bg-slate-950 overflow-hidden py-20 md:py-28">

      {/* ── Fondo ── */}
      <div className="absolute inset-0 z-0">
        <img src={`${B}/images/hero/slide1-desktop-1366.webp`} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="container mx-auto px-4 text-center mb-16">
          <div
            className="transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span className="text-yellow-300 text-xs font-bold tracking-[0.2em] uppercase">Vidas Transformadas</span>
              <Heart className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/50" />
            </div>

            <GoldTitle>Testimonios de Fe</GoldTitle>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
              Historias reales de vidas transformadas por el poder del Evangelio. Tu testimonio es la prueba viva de la gracia de Dios.
            </p>
          </div>
        </div>

        {/* ── Carrusel ── */}
        <div className="relative">
          {/* Botón anterior */}
          <button
            onClick={() => mover('prev')}
            disabled={scroll === 0}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-6 px-6 md:px-20 overflow-x-auto scrollbar-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonios.map((t, i) => (
              <TestimonioCard key={i} t={t} index={i} visible={visible} />
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            onClick={() => mover('next')}
            disabled={scroll >= maxScroll}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all shadow-xl backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Fades laterales */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
        </div>

        {/* ── Dots indicadores ── */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonios.map((_, i) => {
            const activo = Math.round(scroll / cardW) === i;
            return (
              <button
                key={i}
                onClick={() => setScroll(i * cardW)}
                className={`rounded-full transition-all duration-300 ${activo ? 'w-6 h-2 bg-yellow-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'}`}
              />
            );
          })}
        </div>

        {/* ── CTA comparte tu testimonio ── */}
        <div
          className="container mx-auto px-4 mt-16 text-center transition-all duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-bold text-sm">¿Tienes un testimonio?</p>
              <p className="text-slate-400 text-xs">Comparte cómo Dios ha obrado en tu vida</p>
            </div>
            <a
              href="/contacto"
              className="flex-shrink-0 px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
            >
              Compartir mi testimonio
            </a>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}

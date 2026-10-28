'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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
      data-tarjeta
      role="group"
      aria-roledescription="testimonio"
      aria-label={`Testimonio ${index + 1} de ${testimonios.length}: ${t.nombre}`}
      className="group relative flex-shrink-0 snap-start w-[85vw] sm:w-[420px] md:w-[400px] transition-[opacity,transform] duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Glow hover */}
      <div className="absolute -inset-px bg-gradient-to-b from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" aria-hidden="true" />

      <div className="relative h-full bg-slate-900/60 backdrop-blur-md border border-white/8 group-hover:border-yellow-500/30 rounded-2xl p-7 flex flex-col gap-5 transition-[border-color,box-shadow] duration-500 shadow-xl group-hover:shadow-yellow-500/10">

        {/* Comilla decorativa de fondo */}
        <Quote className="absolute top-5 right-5 w-12 h-12 text-yellow-500/10 group-hover:text-yellow-500/20 transition-colors duration-500 fill-yellow-500/5" aria-hidden="true" />

        {/* Estrellas */}
        <div className="flex gap-1" role="img" aria-label={`${t.rating} de 5 estrellas`}>
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          ))}
        </div>

        {/* Texto */}
        <blockquote className="flex-1 text-slate-300 leading-relaxed text-[15px] italic relative z-10">
          “{t.testimonio}”
        </blockquote>

        {/* Divisor */}
        <div className="h-px w-full bg-gradient-to-r from-yellow-500/30 via-white/5 to-transparent" />

        {/* Autor */}
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-white/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} aria-hidden="true">
            {t.nombre.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm break-words">{t.nombre}</p>
            <p className="text-yellow-400/70 text-[11px] font-medium mb-0.5">{t.rol}</p>
            <div className="flex items-center gap-1 text-slate-500 text-[11px]">
              <MapPin className="w-3 h-3 text-slate-500" aria-hidden="true" />
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
  const [activo, setActivo] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // El ancho real de cada tarjeta lo decide el CSS (85vw, 420px…); aquí solo
  // se lee al hacer clic o al desplazarse, nunca durante el render.
  const tarjetas = () =>
    Array.from(trackRef.current?.querySelectorAll<HTMLElement>('[data-tarjeta]') ?? []);

  const irA = useCallback((indice: number) => {
    const track = trackRef.current;
    const destino = tarjetas()[indice];
    if (!track || !destino) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: destino.offsetLeft - track.offsetLeft - track.clientWidth * 0.05, behavior: reduce ? 'auto' : 'smooth' });
    setActivo(indice);
  }, []);

  const mover = (dir: 'prev' | 'next') =>
    irA(Math.max(0, Math.min(testimonios.length - 1, activo + (dir === 'next' ? 1 : -1))));

  // Sincroniza el punto activo cuando el visitante desliza con el dedo o el trackpad.
  const alDesplazar = () => {
    const track = trackRef.current;
    if (!track) return;
    const izquierda = track.scrollLeft;
    let cercano = 0;
    let menor = Infinity;
    tarjetas().forEach((el, i) => {
      const d = Math.abs(el.offsetLeft - track.offsetLeft - izquierda);
      if (d < menor) { menor = d; cercano = i; }
    });
    setActivo(cercano);
  };

  return (
    <section ref={sectionRef} className="relative bg-slate-950 overflow-hidden py-20 md:py-28">

      {/* ── Fondo ── */}
      <div className="absolute inset-0 z-0">
        <img src={`${B}/images/hero/slide1-desktop-1366.webp`} alt="" width={1366} height={768} loading="lazy" decoding="async" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="relative z-10">

        {/* ── Header ── */}
        <div className="container mx-auto px-4 text-center mb-16">
          <div
            className="transition-[opacity,transform] duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
              <span className="text-yellow-300 text-xs font-bold tracking-[0.2em] uppercase">Vidas Transformadas</span>
              <Heart className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400/50" aria-hidden="true" />
            </div>

            <GoldTitle>Testimonios de Fe</GoldTitle>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6 leading-relaxed font-light">
              Historias reales de vidas transformadas por el poder del Evangelio. Tu testimonio es la prueba viva de la gracia de Dios.
            </p>
          </div>
        </div>

        {/* ── Carrusel ── */}
        <div className="relative" role="region" aria-roledescription="carrusel" aria-label="Testimonios de oyentes">
          {/* Botón anterior */}
          <button
            type="button"
            onClick={() => mover('prev')}
            disabled={activo === 0}
            aria-label="Testimonio anterior"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition shadow-xl backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={alDesplazar}
            tabIndex={0}
            aria-label="Lista de testimonios: desliza o usa las flechas"
            className="flex gap-6 px-6 md:px-20 overflow-x-auto overscroll-x-contain snap-x snap-mandatory scroll-px-6 md:scroll-px-20 scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 rounded-2xl"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonios.map((t, i) => (
              <TestimonioCard key={i} t={t} index={i} visible={visible} />
            ))}
          </div>

          {/* Botón siguiente */}
          <button
            type="button"
            onClick={() => mover('next')}
            disabled={activo >= testimonios.length - 1}
            aria-label="Testimonio siguiente"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-800/80 border border-white/10 text-white flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition shadow-xl backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Fades laterales */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-20 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-full w-16 md:w-20 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" aria-hidden="true" />
        </div>

        {/* ── Dots indicadores ── */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonios.map((t, i) => {
            const esActivo = activo === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Ir al testimonio ${i + 1}: ${t.nombre}`}
                aria-current={esActivo ? 'true' : undefined}
                className="flex h-6 min-w-[24px] items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
              >
                <span
                  aria-hidden="true"
                  className={`block rounded-full transition-[width,background-color] duration-300 ${esActivo ? 'w-6 h-2 bg-yellow-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'}`}
                />
              </button>
            );
          })}
        </div>

        {/* ── CTA comparte tu testimonio ── */}
        <div
          className="container mx-auto px-4 mt-16 text-center transition-[opacity,transform] duration-700 delay-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
            <div className="text-left">
              <p className="text-white font-bold text-sm">¿Tienes un testimonio?</p>
              <p className="text-slate-400 text-xs">Comparte cómo Dios ha obrado en tu vida</p>
            </div>
            <Link
              href="/contacto"
              className="flex-shrink-0 px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-sm rounded-xl transition-[background-color,box-shadow,transform] duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Compartir mi testimonio
            </Link>
          </div>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
}

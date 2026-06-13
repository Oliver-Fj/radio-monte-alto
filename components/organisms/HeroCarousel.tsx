'use client';

import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Slide } from '@/lib/types';


const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

// --- DATOS ---
const slides: Slide[] = [
  {
    id: 1,
    imagen: `${B}/images/hero-desktop.png`,
    imagenMobile: `${B}/images/hero-mobile2.png`,
    categoria: 'MINISTERIO RADIAL',
    titulo: 'MONTE ALTO',
    subtitulo: 'EL PORTAVOZ DEL REINO DE DIOS',
    descripcion: 'LLAMADOS PARA ANUNCIAR LA SANA DOCTRINA.',
    accent: 'from-rose-500 via-red-500 to-rose-600',
    textGlow: 'drop-shadow-[0_0_25px_rgba(225,29,72,0.6)]'
  },
  {
    id: 2,
    imagen: `${B}/images/hero-desktop1.png`,
    imagenMobile: `${B}/images/hero-mobile1.png`,
    categoria: 'TRANSMISIÓN EN VIVO',
    titulo: '24 HORAS',
    subtitulo: 'PREDICANDO EL EVANGELIO',
    descripcion: 'A TODA TRIBU, PUEBLO Y NACIÓN.',
    accent: 'from-yellow-300 via-amber-500 to-yellow-600',
    textGlow: 'drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]'
  },
  {
    id: 3,
    imagen: `${B}/images/hero-desktop2.png`,
    imagenMobile: `${B}/images/hero-mobile3.png`,
    categoria: 'CRECIMIENTO',
    titulo: 'PALABRA VIVA',
    subtitulo: 'ENSEÑANZA BÍBLICA PROFUNDA',
    descripcion: 'MENSAJES DE FE QUE RENUEVAN TU ESPÍRITU.',
    accent: 'from-cyan-300 via-blue-500 to-indigo-500',
    textGlow: 'drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]'
  },
];

// --- SUB-COMPONENTE OPTIMIZADO ---
const SlideItem = memo(({ slide, isActive, priority }: { slide: Slide; isActive: boolean; priority: boolean }) => {

  // Lógica específica para Slide 2 (Alineación Derecha y Dorado)
  const isSpecialSlide = slide.id === 2;
  const alignContainer = isSpecialSlide ? 'md:justify-end' : 'md:justify-start';
  const alignText = isSpecialSlide ? 'md:text-right' : 'md:text-left';

  // Color del Título
  const titleColorClass = isSpecialSlide
    ? 'text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 drop-shadow-[0_5px_15px_rgba(234,179,8,0.4)]'
    : 'text-white';

  // Estilo "Hermoso" de Categoría según ID
  let categoryBoxStyle = "";
  if (slide.id === 1) categoryBoxStyle = "border-rose-500/60 shadow-[0_0_20px_rgba(225,29,72,0.4)] bg-rose-950/30";
  if (slide.id === 2) categoryBoxStyle = "border-amber-500/60 shadow-[0_0_20px_rgba(234,179,8,0.4)] bg-amber-950/30";
  if (slide.id === 3) categoryBoxStyle = "border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] bg-cyan-950/30";

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
        }`}
      aria-hidden={!isActive}
    >
      {/* Capa de Imagen */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className={`relative w-full h-full transition-transform duration-[7000ms] ease-linear will-change-transform ${isActive ? 'scale-110' : 'scale-100'}`}>
          <div className="hidden md:block relative w-full h-full">
            <Image
              src={slide.imagen}
              alt={`${slide.categoria} - ${slide.titulo}`}
              fill
              priority={priority}
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="block md:hidden relative w-full h-full">
            <Image
              src={slide.imagenMobile}
              alt={`${slide.categoria} - ${slide.titulo}`}
              fill
              priority={priority}
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/40 to-black/10 md:from-[#050b14] md:via-[#050b14]/50 md:to-black/20 opacity-90" />
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-10 mix-blend-overlay`} />
      </div>

      {/* Contenido Textual */}
      {/* ✅ CAMBIO AQUÍ: 
          - Se cambió 'items-center' por 'items-start' (para móvil).
          - Se añadió 'pt-32' para dar espacio superior en móvil.
          - Se añadió 'md:items-center' y 'md:pt-0' para restaurar el centrado en desktop.
      */}
      <div className={`absolute inset-0 flex items-start pt-32 md:pt-0 md:items-center justify-center ${alignContainer}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-30">
          <div className={`max-w-5xl text-center ${alignText} ${isSpecialSlide ? 'ml-auto' : ''}`}>

            {/* CATEGORÍA HERMOSA */}
            <div className={`transition-all duration-700 delay-300 ease-out transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className={`inline-flex items-center gap-3 px-5 py-2.5 border-2 backdrop-blur-xl rounded-full transition-all duration-500 ${categoryBoxStyle}`}>
                <span className={`w-2.5 h-2.5 rounded-full animate-pulse bg-gradient-to-r ${slide.accent} shadow-[0_0_15px_currentColor]`} />
                <span className="text-xs md:text-sm font-extrabold tracking-[0.3em] text-white uppercase drop-shadow-sm leading-none pt-[2px]">
                  {slide.categoria}
                </span>
              </div>
            </div>

            {/* TÍTULO */}
            <h1 className="relative mb-2 mt-6 overflow-visible">
              <span
                className={`block font-serif font-medium italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-wide transition-all duration-700 delay-500 ease-out ${titleColorClass} ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                style={!isSpecialSlide ? { textShadow: '0 10px 40px rgba(0,0,0,0.5)' } : undefined}
              >
                {slide.titulo}
              </span>
            </h1>

            {/* SUBTÍTULO */}
            <h2 className={`text-sm sm:text-lg md:text-xl font-light tracking-[0.2em] uppercase mb-4 md:mb-6 transition-all duration-700 delay-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className={`${isSpecialSlide ? 'hidden md:hidden' : 'inline'} text-white/60 mr-2`}>—</span>
              <span className="text-white drop-shadow-md">{slide.subtitulo}</span>
              <span className={`${isSpecialSlide ? 'hidden md:inline' : 'hidden'} text-white/60 ml-2`}>—</span>
            </h2>

            {/* DESCRIPCIÓN */}
            <div className={`transition-all duration-700 delay-1000 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className={`relative text-lg sm:text-2xl md:text-3xl font-black italic tracking-wide uppercase max-w-3xl mx-auto ${isSpecialSlide ? 'md:mr-0 md:ml-auto' : 'md:ml-0'} leading-tight text-transparent bg-clip-text bg-gradient-to-r ${slide.accent} ${slide.textGlow}`}>
                <Sparkles className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 -mt-1 text-white fill-white animate-pulse" />
                {slide.descripcion}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
});
SlideItem.displayName = 'SlideItem';

// --- COMPONENTE PRINCIPAL ---
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => { setCurrent(index); }, []);



  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      // ✅ CAMBIO AQUÍ: He ajustado la altura móvil a h-[90vh] en lugar de 85vh o 75vh para dar más espacio vertical si es necesario.
      className="relative w-full h-[90vh] md:h-[85vh] overflow-hidden bg-slate-950 -mt-16 font-sans group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Noticias destacadas"
    >
      {slides.map((slide, index) => (
        <SlideItem
          key={slide.id}
          slide={slide}
          isActive={index === current}
          priority={index === 0}
        />
      ))}

      <button onClick={prevSlide} className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300 group/btn">
        <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
      </button>

      <button onClick={nextSlide} className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300 group/btn">
        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>

      {/* BARRAS DE PROGRESO */}
      <div className="absolute bottom-12 md:bottom-8 left-0 right-0 z-40 flex justify-center items-center gap-4 px-6">
        {slides.map((slide, index) => {
          const isCurrent = index === current;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group/indicator relative py-4 cursor-pointer flex-1 max-w-[60px] md:max-w-[100px]"
            >
              <div className={`h-[3px] w-full transition-all duration-500 rounded-full overflow-hidden ${isCurrent ? 'bg-white/20' : 'bg-white/10 group-hover/indicator:bg-white/30'}`}>
                {isCurrent && (
                  <div
                    className={`h-full bg-gradient-to-r ${slide.accent} rounded-full shadow-[0_0_15px_currentColor] origin-left`}
                    style={{
                      width: '100%',
                      animation: 'progress 6000ms linear forwards',
                      animationPlayState: isPaused ? 'paused' : 'running'
                    }}
                  />
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B1120] to-transparent z-30 pointer-events-none" />

    </section>
  );
}
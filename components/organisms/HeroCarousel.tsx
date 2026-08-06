'use client';

import React, { useState, useEffect, useCallback, useRef, useSyncExternalStore, memo } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';
import { Slide } from '@/lib/types';
import { publicPath } from '@/lib/utils/publicPath';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

// --- DATOS ---
// `imagen` / `imagenMobile` apuntan ahora al fallback JPEG optimizado.
// Los PNG originales se conservan en /images como respaldo de emergencia.
const slides: Slide[] = [
  {
    id: 1,
    imagen: `${B}/images/hero/slide1-desktop-1366.jpg`,
    imagenMobile: `${B}/images/hero/slide1-mobile-1080.jpg`,
    categoria: 'MINISTERIO RADIAL',
    titulo: 'MONTE ALTO',
    subtitulo: 'EL PORTAVOZ DEL REINO DE DIOS',
    descripcion: 'LLAMADOS PARA ANUNCIAR LA SANA DOCTRINA.',
    accent: 'from-rose-500 via-red-500 to-rose-600',
    textGlow: 'drop-shadow-[0_0_25px_rgba(225,29,72,0.6)]'
  },
  {
    id: 2,
    imagen: `${B}/images/hero/slide2-desktop-1366.jpg`,
    imagenMobile: `${B}/images/hero/slide2-mobile-1080.jpg`,
    categoria: 'TRANSMISIÓN EN VIVO',
    titulo: '24 HORAS',
    subtitulo: 'PREDICANDO EL EVANGELIO',
    descripcion: 'A TODA TRIBU, PUEBLO Y NACIÓN.',
    accent: 'from-yellow-300 via-amber-500 to-yellow-600',
    textGlow: 'drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]'
  },
  {
    id: 3,
    imagen: `${B}/images/hero/slide3-desktop-1366.jpg`,
    imagenMobile: `${B}/images/hero/slide3-mobile-1080.jpg`,
    categoria: 'CRECIMIENTO',
    titulo: 'PALABRA VIVA',
    subtitulo: 'ENSEÑANZA BÍBLICA PROFUNDA',
    descripcion: 'MENSAJES DE FE QUE RENUEVAN TU ESPÍRITU.',
    accent: 'from-cyan-300 via-blue-500 to-indigo-500',
    textGlow: 'drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]'
  },
];

const AUTOPLAY_MS = 6000;

// prefers-reduced-motion sin errores de hidratación (false en servidor).
const RM_QUERY = '(prefers-reduced-motion: reduce)';
function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia(RM_QUERY);
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
}

// srcset pregenerado en build (public/images/hero). Compatible con export
// estático, basePath, assetPrefix y GitHub Pages: rutas relativas al basePath.
const srcSetFor = (id: number, variant: 'desktop' | 'mobile', ext: 'avif' | 'webp') => {
  const widths = variant === 'desktop' ? [800, 1100, 1366] : [480, 750, 1080];
  return widths
    .map((w) => `${B}/images/hero/slide${id}-${variant}-${w}.${ext} ${w}w`)
    .join(', ');
};

// --- SUB-COMPONENTE OPTIMIZADO ---
const SlideItem = memo(
  ({ slide, index, total, isActive, priority }: { slide: Slide; index: number; total: number; isActive: boolean; priority: boolean }) => {
    // 0 = normal, 1 = fallback PNG original, 2 = sin imagen (fondo de respaldo)
    const [imgError, setImgError] = useState(0);

    const handleImgError = () => {
      if (process.env.NODE_ENV === 'development') {
        console.error(`[HeroCarousel] No se pudo cargar la imagen de la diapositiva ${index + 1}`);
      }
      setImgError((prev) => Math.min(prev + 1, 2));
    };

    // Lógica específica para Slide 2 (Alineación Derecha y Dorado)
    const isSpecialSlide = slide.id === 2;
    const alignContainer = isSpecialSlide ? 'md:justify-end' : 'md:justify-start';
    const alignText = isSpecialSlide ? 'md:text-right' : 'md:text-left';

    // Color del Título
    const titleColorClass = isSpecialSlide
      ? 'text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-600 drop-shadow-[0_5px_15px_rgba(234,179,8,0.4)]'
      : 'text-white';

    // Estilo "Hermoso" de Categoría según ID
    let categoryBoxStyle = '';
    if (slide.id === 1) categoryBoxStyle = 'border-rose-500/60 shadow-[0_0_20px_rgba(225,29,72,0.4)] bg-rose-950/30';
    if (slide.id === 2) categoryBoxStyle = 'border-amber-500/60 shadow-[0_0_20px_rgba(234,179,8,0.4)] bg-amber-950/30';
    if (slide.id === 3) categoryBoxStyle = 'border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.4)] bg-cyan-950/30';

    // Un solo h1 en la página: solo la primera diapositiva lo usa.
    const TitleTag = index === 0 ? 'h1' : 'h2';

    return (
      <div
        className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:duration-200 ease-in-out ${
          isActive ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'
        }`}
        role="group"
        aria-roledescription="diapositiva"
        aria-label={`Diapositiva ${index + 1} de ${total}: ${slide.titulo}`}
        aria-hidden={!isActive}
        inert={!isActive}
      >
        {/* Capa de Imagen */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className={`relative w-full h-full motion-safe:transition-transform motion-safe:duration-[7000ms] ease-linear will-change-transform ${
              isActive ? 'motion-safe:scale-110' : ''
            }`}
          >
            {imgError < 2 ? (
              <picture>
                {imgError === 0 && (
                  <>
                    <source media="(max-width: 767px)" type="image/avif" srcSet={srcSetFor(slide.id, 'mobile', 'avif')} sizes="100vw" />
                    <source media="(max-width: 767px)" type="image/webp" srcSet={srcSetFor(slide.id, 'mobile', 'webp')} sizes="100vw" />
                    <source media="(min-width: 768px)" type="image/avif" srcSet={srcSetFor(slide.id, 'desktop', 'avif')} sizes="100vw" />
                    <source media="(min-width: 768px)" type="image/webp" srcSet={srcSetFor(slide.id, 'desktop', 'webp')} sizes="100vw" />
                  </>
                )}
                <img
                  src={publicPath(imgError === 0 ? slide.imagen : `${B}/images/hero-desktop${slide.id === 1 ? '' : slide.id - 1}.png`)}
                  alt=""
                  width={1366}
                  height={768}
                  loading={priority ? 'eager' : 'lazy'}
                  fetchPriority={priority ? 'high' : undefined}
                  decoding={priority ? undefined : 'async'}
                  onError={handleImgError}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
            ) : (
              // Respaldo si ninguna imagen carga: conserva altura, texto y botones.
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/40 to-black/10 md:from-[#050b14] md:via-[#050b14]/50 md:to-black/20 opacity-90" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} opacity-10 mix-blend-overlay`} />
        </div>

        {/* Contenido Textual */}
        <div className={`absolute inset-0 flex items-start pt-32 md:pt-0 md:items-center justify-center ${alignContainer}`}>
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-30">
            <div className={`max-w-5xl text-center ${alignText} ${isSpecialSlide ? 'ml-auto' : ''}`}>

              {/* CATEGORÍA */}
              <div className={`transition-all motion-reduce:transition-none duration-700 delay-300 ease-out transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className={`inline-flex items-center gap-3 px-5 py-2.5 border-2 backdrop-blur-xl rounded-full transition-all duration-500 ${categoryBoxStyle}`}>
                  <span className={`w-2.5 h-2.5 rounded-full motion-safe:animate-pulse bg-gradient-to-r ${slide.accent} shadow-[0_0_15px_currentColor]`} />
                  <span className="text-xs md:text-sm font-extrabold tracking-[0.3em] text-white uppercase drop-shadow-sm leading-none pt-[2px]">
                    {slide.categoria}
                  </span>
                </div>
              </div>

              {/* TÍTULO */}
              <TitleTag className="relative mb-2 mt-6 overflow-visible">
                <span
                  className={`block font-serif font-medium italic text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-wide transition-all motion-reduce:transition-none duration-700 delay-500 ease-out ${titleColorClass} ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={!isSpecialSlide ? { textShadow: '0 10px 40px rgba(0,0,0,0.5)' } : undefined}
                >
                  {slide.titulo}
                </span>
              </TitleTag>

              {/* SUBTÍTULO */}
              <p className={`text-sm sm:text-lg md:text-xl font-light tracking-[0.2em] uppercase mb-4 md:mb-6 transition-all motion-reduce:transition-none duration-700 delay-700 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className={`${isSpecialSlide ? 'hidden md:hidden' : 'inline'} text-white/60 mr-2`}>—</span>
                <span className="text-white drop-shadow-md">{slide.subtitulo}</span>
                <span className={`${isSpecialSlide ? 'hidden md:inline' : 'hidden'} text-white/60 ml-2`}>—</span>
              </p>

              {/* DESCRIPCIÓN */}
              <div className={`transition-all motion-reduce:transition-none duration-700 delay-1000 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className={`relative text-lg sm:text-2xl md:text-3xl font-black italic tracking-wide uppercase max-w-3xl mx-auto ${isSpecialSlide ? 'md:mr-0 md:ml-auto' : 'md:ml-0'} leading-tight text-transparent bg-clip-text bg-gradient-to-r ${slide.accent} ${slide.textGlow}`}>
                  <Sparkles aria-hidden="true" className="inline-block w-5 h-5 md:w-6 md:h-6 mr-2 -mt-1 text-white fill-white motion-safe:animate-pulse" />
                  {slide.descripcion}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
);
SlideItem.displayName = 'SlideItem';

// --- COMPONENTE PRINCIPAL ---
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [docHidden, setDocHidden] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(RM_QUERY).matches,
    () => false
  );

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  // El avance automático solo corre sin pausas activas y con la pestaña visible.
  // Con prefers-reduced-motion el avance continúa, pero las transiciones son
  // fundidos breves sin zoom (motion-reduce), y siempre existe el botón de pausa.
  const autoActive = !userPaused && !hoverPaused && !focusPaused && !docHidden;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Navegación iniciada por el usuario: anuncia discretamente la diapositiva.
  const announce = useCallback((index: number) => {
    setAnnouncement(`Diapositiva ${index + 1} de ${slides.length}: ${slides[index].titulo}`);
  }, []);

  const userNext = useCallback(() => {
    setCurrent((prev) => {
      const next = (prev + 1) % slides.length;
      announce(next);
      return next;
    });
  }, [announce]);

  const userPrev = useCallback(() => {
    setCurrent((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      announce(next);
      return next;
    });
  }, [announce]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrent(index);
      announce(index);
    },
    [announce]
  );

  // Avance automático. Depende de `current` para que el temporizador se
  // reinicie tras una selección manual (evita saltos inmediatos).
  useEffect(() => {
    if (!autoActive) return;
    const timer = setInterval(nextSlide, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoActive, current, nextSlide]);

  // Pausa cuando la pestaña pasa a segundo plano.
  useEffect(() => {
    const onVisibility = () => setDocHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Teclado: solo cuando el foco está dentro del carrusel y no en un campo de texto.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      userPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      userNext();
    } else if (e.key === 'Escape') {
      setUserPaused(true);
    }
  };

  // Pausa solo cuando el foco es visible (navegación por teclado).
  // Un clic de ratón deja el foco en el botón pero no debe congelar el carrusel.
  const handleFocus = (e: React.FocusEvent) => {
    const el = e.target as HTMLElement;
    try {
      setFocusPaused(el.matches(':focus-visible'));
    } catch {
      setFocusPaused(true);
    }
  };
  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusPaused(false);
  };

  // Gestos: distingue desplazamiento vertical (scroll) de gesto horizontal.
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const dx = touchStartX.current - touchEndX.current;
    const dy = (touchStartY.current ?? 0) - (touchEndY.current ?? 0);

    // Solo reconoce el gesto si es claramente horizontal.
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx > 0) userNext();
      else userPrev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const navBtnClass =
    'flex absolute top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70';

  return (
    <section
      data-keep-dark
      className="hero-viewport relative w-full overflow-hidden bg-slate-950 -mt-16 font-sans group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onPointerOver={(e) => {
        // Pausa solo con ratón real y solo sobre los controles: así el
        // carrusel sigue avanzando aunque el cursor repose sobre el hero,
        // y en táctil no queda un "hover" fantasma pausándolo para siempre.
        if (e.pointerType === 'mouse') {
          setHoverPaused(!!(e.target as HTMLElement).closest('button'));
        }
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setHoverPaused(false);
      }}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Noticias destacadas"
    >
      {slides.map((slide, index) => (
        <SlideItem
          key={slide.id}
          slide={slide}
          index={index}
          total={slides.length}
          isActive={index === current}
          priority={index === 0}
        />
      ))}

      {/* Anuncio discreto para lectores de pantalla (solo cambios manuales) */}
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>

      <button
        type="button"
        onClick={userPrev}
        aria-label="Mostrar diapositiva anterior"
        className={`${navBtnClass} left-2 md:left-8 group/btn`}
      >
        <ChevronLeft aria-hidden="true" className="w-5 h-5 group-hover/btn:-translate-x-1 transition-transform" />
      </button>

      <button
        type="button"
        onClick={userNext}
        aria-label="Mostrar diapositiva siguiente"
        className={`${navBtnClass} right-2 md:right-8 group/btn`}
      >
        <ChevronRight aria-hidden="true" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>

      {/* INDICADORES + PAUSA */}
      <div className="absolute bottom-20 md:bottom-8 left-0 right-0 z-40 flex justify-center items-center gap-4 px-6">
        {slides.map((slide, index) => {
          const isCurrent = index === current;
          return (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la diapositiva ${index + 1}: ${slide.titulo}`}
              aria-current={isCurrent ? 'true' : undefined}
              className="group/indicator relative min-h-[44px] flex items-center cursor-pointer flex-1 max-w-[60px] md:max-w-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-full"
            >
              <div className={`h-[3px] w-full transition-all duration-500 rounded-full overflow-hidden ${isCurrent ? 'bg-white/20' : 'bg-white/10 group-hover/indicator:bg-white/30'}`}>
                {isCurrent && (
                  <div
                    className={`h-full bg-gradient-to-r ${slide.accent} rounded-full shadow-[0_0_15px_currentColor] origin-left`}
                    style={
                      autoActive
                        ? {
                            width: '100%',
                            animation: `progress ${AUTOPLAY_MS}ms linear forwards`,
                          }
                        : { width: '100%' }
                    }
                  />
                )}
              </div>
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          className="flex w-11 h-11 shrink-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-md items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {userPaused ? (
            <Play aria-hidden="true" className="w-4 h-4" />
          ) : (
            <Pause aria-hidden="true" className="w-4 h-4" />
          )}
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B1120] to-transparent z-30 pointer-events-none" />

    </section>
  );
}

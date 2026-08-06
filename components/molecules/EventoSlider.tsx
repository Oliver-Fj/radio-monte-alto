'use client';

import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ColorEvento, SlideEvento } from '@/lib/data/eventos';
import { getEventoTheme } from '@/lib/utils/eventoTheme';
import { cn } from '@/lib/utils/cn';

interface EventoSliderProps {
  slides: SlideEvento[];
  color?: ColorEvento;
  /** Nombre del evento; se usa para la etiqueta accesible del carrusel. */
  titulo: string;
  className?: string;
}

/** Píxeles mínimos de arrastre para que un gesto cuente como cambio de lámina. */
const UMBRAL_SWIPE = 50;

/**
 * Carrusel de láminas de un evento: fotografía a la izquierda y relato a la
 * derecha. Implementado sin librerías externas (sin Swiper) para no sumar peso
 * al bundle. Las láminas se apilan en una misma celda de grid, de modo que la
 * altura la fija la más alta y el cambio es un crossfade sin saltos de layout.
 */
export default function EventoSlider({ slides, color = 'amber', titulo, className }: EventoSliderProps) {
  const [activo, setActivo] = useState(0);
  const inicioTouch = useRef<number | null>(null);
  const theme = getEventoTheme(color);
  const total = slides.length;

  const irA = useCallback(
    (indice: number) => {
      if (total === 0) return;
      setActivo(((indice % total) + total) % total); // circular en ambos sentidos
    },
    [total],
  );

  const anterior = useCallback(() => irA(activo - 1), [activo, irA]);
  const siguiente = useCallback(() => irA(activo + 1), [activo, irA]);

  // Para reiniciar el carrusel al cambiar de evento, quien lo usa le pasa una
  // `key` distinta: React lo remonta y el estado vuelve solo a la primera lámina.

  const onKeyDown = (evento: React.KeyboardEvent<HTMLDivElement>) => {
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      anterior();
    } else if (evento.key === 'ArrowRight') {
      evento.preventDefault();
      siguiente();
    }
  };

  const onTouchStart = (evento: React.TouchEvent) => {
    inicioTouch.current = evento.touches[0].clientX;
  };

  const onTouchEnd = (evento: React.TouchEvent) => {
    if (inicioTouch.current === null) return;
    const recorrido = evento.changedTouches[0].clientX - inicioTouch.current;
    if (Math.abs(recorrido) > UMBRAL_SWIPE) {
      if (recorrido < 0) siguiente();
      else anterior();
    }
    inicioTouch.current = null;
  };

  if (total === 0) return null;

  return (
    <div
      role="group"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${titulo}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={cn(
        // Papel de pergamino con doble filete dorado, en lugar del blanco plano
        'papel-pergamino relative w-full rounded-[28px] p-5 md:p-7 lg:py-9 lg:pl-8 lg:pr-14 xl:pl-10',
        'border border-amber-700/25 ring-1 ring-inset ring-amber-200/60',
        'shadow-[0_18px_90px_rgba(120,80,10,0.35)] outline-none',
        'focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        className,
      )}
    >
      {/* Filetes dorados superior e inferior */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"
      />
      <div className="grid">
        {slides.map((slide, indice) => {
          const visible = indice === activo;
          const esAfiche = slide.formato === 'afiche';
          return (
            <article
              key={slide.id}
              role="group"
              aria-roledescription="lámina"
              aria-label={`${indice + 1} de ${total}: ${slide.titulo}`}
              aria-hidden={!visible}
              className={cn(
                'col-start-1 row-start-1 flex flex-col gap-6 transition-opacity duration-500 ease-out',
                'lg:flex-row lg:items-center lg:gap-9',
                visible ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              {/* Imagen: los afiches se muestran completos (para poder leerlos)
                  y las fotografías llenan un marco apaisado. */}
              <div
                className={cn(
                  'relative w-full shrink-0 overflow-hidden rounded-[26px] bg-gradient-to-br',
                  'shadow-[6px_16px_36px_rgba(15,23,42,0.32)]',
                  // El afiche sobresale del borde de la tarjeta solo en xl, donde
                  // hay margen suficiente para que no lo recorte la ventana.
                  'mx-auto lg:mx-0 xl:-ml-16',
                  esAfiche
                    ? 'aspect-[5/7] max-w-[320px] sm:max-w-[380px] lg:h-[546px] lg:w-[390px] lg:max-w-none lg:aspect-auto'
                    : 'aspect-[16/10] sm:max-w-lg lg:h-[400px] lg:w-[500px] lg:max-w-none lg:aspect-auto',
                  theme.gradiente,
                )}
              >
                <Image
                  src={slide.imagen}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className={cn(
                    'transition-all duration-700',
                    esAfiche ? 'object-contain' : 'object-cover',
                    visible ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
                  )}
                />
                {!esAfiche && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                )}
              </div>

              {/* Relato: texto compacto para que la imagen sea la protagonista */}
              <div className="min-w-0 flex-1">
                <span
                  className={cn(
                    'mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow transition-all duration-500',
                    theme.gradiente,
                    visible ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-4 opacity-0',
                  )}
                >
                  {slide.fecha}
                </span>
                <h4
                  className={cn(
                    'mb-3 font-serif text-xl font-bold leading-tight text-slate-900 transition-all duration-500 md:text-2xl',
                    visible ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0',
                  )}
                >
                  {slide.titulo}
                </h4>
                <p
                  className={cn(
                    'text-[13px] leading-relaxed text-slate-600 transition-all duration-500 md:text-sm',
                    visible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0',
                  )}
                >
                  {slide.texto}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {total > 1 && (
        <>
          {/* Flechas (solo escritorio: en móvil se navega con gestos y puntos) */}
          <button
            type="button"
            onClick={anterior}
            aria-label="Lámina anterior"
            className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/5 text-slate-700 transition hover:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={siguiente}
            aria-label="Lámina siguiente"
            className="absolute right-11 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/5 text-slate-700 transition hover:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 lg:flex"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          {/* Paginación: horizontal abajo en móvil, vertical a la derecha en escritorio */}
          <div className="mt-7 flex items-center justify-center gap-2 lg:absolute lg:right-4 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:flex-col">
            {slides.map((slide, indice) => {
              const visible = indice === activo;
              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Ir a la lámina ${indice + 1}: ${slide.titulo}`}
                  aria-current={visible}
                  onClick={() => irA(indice)}
                  className={cn(
                    'rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2',
                    visible
                      ? cn(
                          'h-3 w-10 bg-gradient-to-r lg:h-10 lg:w-3 lg:bg-gradient-to-b',
                          theme.gradiente,
                          theme.brillo,
                        )
                      : cn('h-3 w-3 hover:scale-125', theme.puntoSuave),
                  )}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

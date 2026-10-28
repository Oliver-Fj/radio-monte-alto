'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, Users2, X } from 'lucide-react';
import type { EventoEspecial } from '@/lib/data/eventos';
import { getEventoTheme } from '@/lib/utils/eventoTheme';
import FechaCalendario from '@/components/atoms/FechaCalendario';
import { cn } from '@/lib/utils/cn';
import EventoSlider from './EventoSlider';

interface EventoModalProps {
  evento: EventoEspecial | null;
  onCerrar: () => void;
}

const FOCUSABLES =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Ventana de detalle del evento. Cumple lo esperable de un diálogo modal:
 * cierra con Escape y con clic en el fondo, bloquea el scroll de la página,
 * atrapa el foco mientras está abierta y lo devuelve al cerrarse.
 */
export default function EventoModal({ evento, onCerrar }: EventoModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const focoPrevio = useRef<HTMLElement | null>(null);
  const abierto = evento !== null;

  useEffect(() => {
    if (!abierto) return;

    focoPrevio.current = document.activeElement as HTMLElement;
    const scrollOriginal = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // El foco entra al panel para que los lectores de pantalla anuncien el diálogo.
    const id = window.setTimeout(() => panelRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCerrar();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusables = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLES));
      if (focusables.length === 0) return;

      const primero = focusables[0];
      const ultimo = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === primero) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primero.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(id);
      document.body.style.overflow = scrollOriginal;
      focoPrevio.current?.focus();
    };
  }, [abierto, onCerrar]);

  if (!abierto || typeof document === 'undefined') return null;

  const theme = getEventoTheme(evento.color);
  const esProximo = evento.estado === 'proximo';

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-slate-950/85 p-4 py-8 backdrop-blur-sm md:p-8"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCerrar();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="evento-modal-titulo"
        tabIndex={-1}
        className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900 p-5 shadow-2xl outline-none md:p-8"
      >
        {/* Franja y resplandor del color del evento */}
        <span
          className={cn('absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r', theme.gradiente)}
          aria-hidden
        />
        <span
          className={cn(
            'pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br opacity-20 blur-[90px]',
            theme.gradiente,
          )}
          aria-hidden
        />
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar detalle del evento"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-800/80 text-slate-300 transition hover:bg-slate-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        {/* Encabezado */}
        <header className="mb-7 pr-12">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <FechaCalendario fechaISO={evento.fechaISO} grande />
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]',
                esProximo
                  ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200'
                  : 'border-white/15 bg-slate-800 text-slate-300',
              )}
            >
              {esProximo && <span className="h-1.5 w-1.5 motion-safe:animate-pulse rounded-full bg-emerald-400" />}
              {esProximo ? 'Próximo evento' : 'Evento realizado'}
            </span>
          </div>

          <h3 id="evento-modal-titulo" className="font-serif text-3xl font-bold text-white md:text-4xl">
            {evento.titulo}
          </h3>
          <p className={cn('mt-1.5 text-base font-medium', theme.texto)}>{evento.subtitulo}</p>

          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <dt className="sr-only">Fecha</dt>
              <CalendarDays className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
              <dd>
                <time dateTime={evento.fechaISO}>{evento.fechaTexto}</time>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Lugar</dt>
              <MapPin className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
              <dd>{evento.lugar}</dd>
            </div>
            <div className="flex items-center gap-2">
              <dt className="sr-only">Dirigido a</dt>
              <Users2 className="h-4 w-4 shrink-0 text-slate-500" aria-hidden />
              <dd>{evento.dirigidoA}</dd>
            </div>
          </dl>
        </header>

        {/* Carrusel de fotos con relato.
            La `key` remonta el carrusel al cambiar de evento: así vuelve solo a
            la primera lámina, sin necesidad de sincronizar estado con un efecto. */}
        <EventoSlider
          key={evento.slug}
          slides={evento.galeria}
          color={evento.color}
          titulo={evento.titulo}
        />

        {/* Descripción e invitación */}
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Sobre el evento
            </h4>
            <p className="leading-relaxed text-slate-300">{evento.descripcion}</p>
          </div>

          <aside
            className={cn(
              'rounded-2xl border p-5 md:col-span-2',
              esProximo ? theme.chip : 'border-white/10 bg-white/[0.03] text-slate-300',
            )}
          >
            <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
              {esProximo ? 'Estás invitado' : 'Lo que viene'}
            </h4>
            <p className="text-sm leading-relaxed">{evento.invitacion}</p>
            {evento.contacto && (
              <p className="mt-4 border-t border-white/15 pt-3 text-sm font-semibold">
                {evento.contacto}
              </p>
            )}
          </aside>
        </div>

        <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6">
          <Link
            href={`/eventos/${evento.slug}`}
            className={cn(
              'inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110',
              theme.gradiente,
            )}
          >
            Ver la página del evento
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={onCerrar}
            className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

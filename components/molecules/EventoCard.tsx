'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import type { EventoEspecial } from '@/lib/data/eventos';
import { getEventoTheme } from '@/lib/utils/eventoTheme';
import FechaCalendario from '@/components/atoms/FechaCalendario';
import { cn } from '@/lib/utils/cn';
import { publicPath } from '@/lib/utils/publicPath';
import { useGlowCard } from '@/lib/hooks/useGlowCard';
import styles from './GlowCard.module.css';

interface EventoCardProps {
  evento: EventoEspecial;
  /** Si se pasa, la tarjeta es un botón que abre el detalle en una ventana. */
  onAbrir?: (evento: EventoEspecial) => void;
  /** Si se pasa (y no hay onAbrir), la tarjeta navega a esta ruta. */
  href?: string;
  /** Retardo de la animación de entrada, en milisegundos. */
  retardo?: number;
  visible?: boolean;
}

/**
 * Tarjeta de la parrilla de eventos.
 * El afiche se muestra completo en la parte superior —sin texto encima, para
 * que se pueda leer— y los datos del evento van debajo, sobre el color del
 * evento: fecha, lugar, resumen y la acción para abrir el detalle.
 */
export default function EventoCard({
  evento,
  onAbrir,
  href,
  retardo = 0,
  visible = true,
}: EventoCardProps) {
  const theme = getEventoTheme(evento.color);
  const esProximo = evento.estado === 'proximo';
  const esAfiche = evento.portadaFormato !== 'foto';
  const refBoton = useGlowCard<HTMLButtonElement>(styles.animando);
  const refEnlace = useGlowCard<HTMLAnchorElement>(styles.animando);

  const contenido = (
    <>
      {/* Resplandor del borde (efecto «Colored, Glowing Edges») */}
      <span className={styles.glow} aria-hidden="true" />

      <span className={styles.interior}>
      {/* Franja de color: identifica el evento de un vistazo */}
      <span className={cn('block h-1.5 w-full bg-gradient-to-r', theme.gradiente)} />

      {/* Afiche completo, sobre un telón del color del evento */}
      <div className={cn('relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br', theme.telon)}>
        <Image
          src={publicPath(evento.portada)}
          alt={evento.portadaAlt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className={cn(
            'transition-transform duration-700 ease-out group-hover:scale-[1.04]',
            esAfiche ? 'object-contain p-3' : 'object-cover',
          )}
        />

        {/* Estado */}
        <span
          className={cn(
            'absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] shadow-lg backdrop-blur-md',
            esProximo
              ? 'border-emerald-300/40 bg-emerald-500/25 text-emerald-100'
              : 'border-white/20 bg-slate-950/70 text-slate-200',
          )}
        >
          {esProximo && <span className="h-1.5 w-1.5 motion-safe:animate-pulse rounded-full bg-emerald-300" />}
          {esProximo ? 'Próximo' : 'Ya realizado'}
        </span>
      </div>

      {/* Detalles, debajo del afiche */}
      <div className="relative flex flex-1 flex-col p-5">
        <div
          className={cn(
            'pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b opacity-25',
            theme.telon,
          )}
        />

        <div className="relative flex items-start gap-3">
          <FechaCalendario fechaISO={evento.fechaISO} />
          <div className="min-w-0">
            <h3 className="font-serif text-lg font-bold leading-tight text-white md:text-xl">
              {evento.titulo}
            </h3>
            <p className={cn('mt-1 text-[13px] font-medium leading-snug', theme.texto)}>
              {evento.subtitulo}
            </p>
          </div>
        </div>

        <dl className="relative mt-4 flex flex-wrap gap-2">
          <div
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold',
              theme.chip,
            )}
          >
            <dt className="sr-only">Fecha</dt>
            <CalendarDays className="h-3.5 w-3.5 shrink-0" aria-hidden />
            <dd>{evento.fechaTexto}</dd>
          </div>
          <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-slate-300">
            <dt className="sr-only">Lugar</dt>
            <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden />
            <dd className="truncate">{evento.lugar}</dd>
          </div>
        </dl>

        <p className="relative mt-4 line-clamp-3 text-[13px] leading-relaxed text-slate-400">
          {evento.resumen}
        </p>

        <span
          className={cn(
            'relative mt-5 inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r px-5 py-2.5 text-[13px] font-bold text-white shadow-lg transition-[gap,filter] duration-300 group-hover:gap-3 group-hover:brightness-110',
            theme.gradiente,
          )}
        >
          {esProximo ? 'Ver la invitación' : 'Ver el evento'}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
      </span>
    </>
  );

  const clasesContenedor = cn(
    styles.glowCard,
    'group flex h-full w-full flex-col rounded-3xl text-left',
    'transition duration-500 hover:shadow-2xl',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    theme.borde,
    theme.sombra,
  );

  const estilo = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${retardo}ms, transform .7s cubic-bezier(.16,1,.3,1) ${retardo}ms`,
  };

  if (onAbrir) {
    return (
      <button
        ref={refBoton}
        type="button"
        onClick={() => onAbrir(evento)}
        aria-label={`Ver detalles de ${evento.titulo}`}
        className={clasesContenedor}
        style={estilo}
      >
        {contenido}
      </button>
    );
  }

  return (
    <Link ref={refEnlace} href={href ?? `/eventos/${evento.slug}`} className={clasesContenedor} style={estilo}>
      {contenido}
    </Link>
  );
}

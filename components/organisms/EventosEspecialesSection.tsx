'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarHeart } from 'lucide-react';
import eventosOrdenados, { type EventoEspecial } from '@/lib/data/eventos';
import EventoCard from '@/components/molecules/EventoCard';
import GoldTitle from '@/components/atoms/GoldTitle';
import EventoModal from '@/components/molecules/EventoModal';

interface EventosEspecialesSectionProps {
  /** Cuántos eventos mostrar. Por defecto, todos. */
  limite?: number;
  /** El enlace a la página completa solo tiene sentido fuera de /eventos. */
  mostrarEnlaceATodos?: boolean;
  /** En /eventos el título ya lo pone la página: evitamos duplicarlo. */
  mostrarEncabezado?: boolean;
}

/**
 * Parrilla de eventos especiales del ministerio: retiros, conferencias y
 * fiestas espirituales, tanto los que ya se realizaron como los que vienen.
 * Al elegir una tarjeta se abre el detalle con su galería y la invitación.
 */
export default function EventosEspecialesSection({
  limite,
  mostrarEnlaceATodos = true,
  mostrarEncabezado = true,
}: EventosEspecialesSectionProps) {
  const [seleccionado, setSeleccionado] = useState<EventoEspecial | null>(null);
  const [visible, setVisible] = useState(false);
  const seccionRef = useRef<HTMLElement>(null);

  const eventos = limite ? eventosOrdenados.slice(0, limite) : eventosOrdenados;
  const hayMas = limite !== undefined && eventosOrdenados.length > limite;

  // Animación de entrada al hacer scroll (se desconecta tras dispararse una vez).
  useEffect(() => {
    const nodo = seccionRef.current;

    // Sin soporte del navegador (o sin nodo) mostramos las tarjetas igualmente.
    if (!nodo || typeof IntersectionObserver === 'undefined') {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(nodo);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={seccionRef}
      id="eventos"
      aria-label="Eventos especiales del ministerio"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
      {/* Ambiente */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />
        <div className="absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-amber-500/5 blur-[110px]" />
        <div className="absolute -right-32 bottom-0 h-[320px] w-[320px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {mostrarEncabezado && (
        <header className="mb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5">
            <CalendarHeart className="h-3.5 w-3.5 text-yellow-400" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Vida del ministerio
            </span>
          </div>

          <GoldTitle pie="Retiros · Conferencias · Fiestas espirituales">
            Eventos especiales
          </GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            Retiros, conferencias y fiestas espirituales que marcan el calendario de la
            congregación. Entra a cada uno para ver las fotos, las fechas y la invitación.
          </p>
        </header>
        )}

        <ul className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {eventos.map((evento, indice) => (
            <li key={evento.slug} className="h-full">
              <EventoCard
                evento={evento}
                onAbrir={setSeleccionado}
                visible={visible}
                retardo={indice * 90}
              />
            </li>
          ))}
        </ul>

        {mostrarEnlaceATodos && (
          <div className="mt-12 text-center">
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-7 py-3.5 text-sm font-bold text-yellow-300 transition hover:bg-yellow-500/20 hover:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {hayMas ? 'Ver todos los eventos' : 'Ir a la página de eventos'}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>

      <EventoModal evento={seleccionado} onCerrar={() => setSeleccionado(null)} />
    </section>
  );
}

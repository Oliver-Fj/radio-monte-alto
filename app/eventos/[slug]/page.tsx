import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, MapPin, Phone, Users2 } from 'lucide-react';
import eventos, { getEventoPorSlug } from '@/lib/data/eventos';
import EventoSlider from '@/components/molecules/EventoSlider';
import { getEventoTheme } from '@/lib/utils/eventoTheme';
import EventoIcono from '@/components/atoms/EventoIcono';
import { cn } from '@/lib/utils/cn';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Requerido para la exportación estática (output: 'export').
export function generateStaticParams() {
  return eventos.map((evento) => ({ slug: evento.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const evento = getEventoPorSlug(slug);

  if (!evento) {
    return { title: 'Evento no encontrado - Radio Monte Alto' };
  }

  return {
    title: `${evento.titulo} - Radio Monte Alto`,
    description: evento.resumen,
    openGraph: {
      title: `${evento.titulo} · ${evento.fechaTexto}`,
      description: evento.resumen,
      images: [evento.portada],
      type: 'article',
    },
  };
}

export default async function EventoPage({ params }: PageProps) {
  const { slug } = await params;
  const evento = getEventoPorSlug(slug);

  if (!evento) notFound();

  const theme = getEventoTheme(evento.color);
  const esProximo = evento.estado === 'proximo';
  const otros = eventos.filter((e) => e.slug !== evento.slug).slice(0, 3);

  return (
    <article className="bg-slate-950">
      {/* Encabezado con el afiche */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={evento.portada}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 blur-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/85 to-slate-950" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-14 md:py-20">
          <Link
            href="/eventos"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Volver a eventos
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[320px,1fr]">
            {/* Afiche */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={evento.portada}
                alt={evento.portadaAlt}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
              />
            </div>

            {/* Datos */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    'inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg',
                    theme.gradiente,
                  )}
                >
                  <EventoIcono nombre={evento.icono} className="h-6 w-6 text-white" />
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]',
                    esProximo
                      ? 'border-emerald-400/30 bg-emerald-500/15 text-emerald-200'
                      : 'border-white/15 bg-slate-900/60 text-slate-300',
                  )}
                >
                  {esProximo && (
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  )}
                  {esProximo ? 'Próximo evento' : 'Evento realizado'}
                </span>
              </div>

              <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                {evento.titulo}
              </h1>
              <p className={cn('mt-2 text-lg font-medium', theme.texto)}>{evento.subtitulo}</p>

              <dl className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Fecha
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-200">
                      <time dateTime={evento.fechaISO}>{evento.fechaTexto}</time>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Lugar
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-200">{evento.lugar}</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <Users2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Dirigido a
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-200">{evento.dirigidoA}</dd>
                  </div>
                </div>

                {evento.contacto && (
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden />
                    <div>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Inscripciones
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-200">{evento.contacto}</dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </header>

      {/* Galería con relato */}
      <section aria-label="Galería del evento" className="container mx-auto px-4 pb-4">
        <div className="mx-auto max-w-6xl">
          <EventoSlider slides={evento.galeria} color={evento.color} titulo={evento.titulo} />
        </div>
      </section>

      {/* Descripción e invitación */}
      <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Sobre el evento
          </h2>
          <p className="text-lg leading-relaxed text-slate-300">{evento.descripcion}</p>
        </div>

        <aside
          className={cn(
            'self-start rounded-3xl border p-6 md:col-span-2',
            esProximo ? theme.chip : 'border-white/10 bg-white/[0.03] text-slate-300',
          )}
        >
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            {esProximo ? 'Estás invitado' : 'Lo que viene'}
          </h2>
          <p className="leading-relaxed">{evento.invitacion}</p>
          {evento.contacto && (
            <p className="mt-5 border-t border-white/15 pt-4 text-sm font-semibold">
              {evento.contacto}
            </p>
          )}
          <Link
            href="/contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold transition hover:bg-white/10"
          >
            Escríbenos
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </aside>
      </section>

      {/* Otros eventos */}
      {otros.length > 0 && (
        <section
          aria-label="Otros eventos"
          className="border-t border-white/10 bg-slate-950 py-14"
        >
          <div className="container mx-auto px-4">
            <h2 className="mb-8 font-serif text-2xl font-bold text-white">Otros eventos</h2>
            <ul className="grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-3">
              {otros.map((otro) => {
                const t = getEventoTheme(otro.color);
                return (
                  <li key={otro.slug}>
                    <Link
                      href={`/eventos/${otro.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-0.5 hover:border-white/20"
                    >
                      <span className={cn('text-xs font-bold uppercase tracking-[0.18em]', t.texto)}>
                        {otro.estado === 'proximo' ? 'Próximo' : 'Realizado'}
                      </span>
                      <span className="mt-2 font-serif text-lg font-bold text-white">
                        {otro.titulo}
                      </span>
                      <span className="mt-1 text-sm text-slate-400">{otro.fechaTexto}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 transition group-hover:gap-2.5 group-hover:text-white">
                        Ver detalles
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}

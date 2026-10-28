import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  Globe,
  ListOrdered,
  Quote,
  Radio,
  Tag,
  Users,
} from 'lucide-react';
import DETALLES, { getDetallePorSlug } from '@/lib/data/programaDetalle';
import { programas } from '@/lib/data/programas';
import ReproductorGrabacion from '@/components/molecules/ReproductorGrabacion';
import GoldTitle from '@/components/atoms/GoldTitle';
import { publicPath } from '@/lib/utils/publicPath';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Requerido para la exportación estática.
export function generateStaticParams() {
  return DETALLES.map((detalle) => ({ slug: detalle.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detalle = getDetallePorSlug(slug);
  if (!detalle) return { title: 'Programa no encontrado - Radio Monte Alto' };

  const programa = programas.find((p) => p.id === detalle.programaId);
  return {
    title: `${programa?.nombre ?? 'Programa'} - Radio Monte Alto`,
    description: detalle.presentacion.slice(0, 155),
  };
}

const DIAS_LARGOS: Record<string, string> = {
  L: 'Lunes',
  M: 'Martes',
  X: 'Miércoles',
  J: 'Jueves',
  V: 'Viernes',
  S: 'Sábado',
  D: 'Domingo',
};

export default async function ProgramaPage({ params }: PageProps) {
  const { slug } = await params;
  const detalle = getDetallePorSlug(slug);
  if (!detalle) notFound();

  const programa = programas.find((p) => p.id === detalle.programaId);
  if (!programa) notFound();

  const dias = programa.dias.map((d) => DIAS_LARGOS[d] ?? d).join(' · ');

  return (
    <article className="bg-slate-950">
      {/* Encabezado */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={publicPath(programa.imagen ?? '/images/opt/programacion.webp')}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20 blur-2xl"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-14">
          <Link
            href="/programacion"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Toda la programación
          </Link>

          <div className="grid items-center gap-8 lg:grid-cols-[280px,1fr]">
            <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={publicPath(programa.imagen ?? '/images/opt/programacion.webp')}
                alt={`Carátula de ${programa.nombre}`}
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 280px"
                className="object-cover"
              />
            </div>

            <div>
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">
                <Tag className="h-3 w-3" aria-hidden />
                {programa.categoria}
              </span>

              <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                {programa.nombre}
              </h1>
              <p className="mt-2 text-lg font-medium text-sky-600">{detalle.lema}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                {detalle.presentacion}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Datos prácticos */}
      <section aria-label="Datos del programa" className="container mx-auto px-4 pb-4">
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icono: Clock, rotulo: 'Horario', valor: programa.horario },
            { icono: CalendarDays, rotulo: 'Días', valor: dias },
            { icono: Radio, rotulo: 'Duración', valor: detalle.duracion },
            { icono: Users, rotulo: 'Dirigido a', valor: programa.publicoObjetivo ?? 'Público general' },
            { icono: Globe, rotulo: 'Idioma', valor: detalle.idioma },
          ].map(({ icono: Icono, rotulo, valor }) => (
            <div
              key={rotulo}
              className="tarjeta flex items-start gap-3 p-4"
            >
              <Icono className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden />
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {rotulo}
                </dt>
                <dd className="mt-0.5 text-sm text-slate-300">{valor}</dd>
              </div>
            </div>
          ))}
        </dl>

        <p className="mt-3 text-center text-xs text-slate-500">{detalle.desde}</p>
      </section>

      {/* Versículo */}
      {detalle.versiculo && (
        <section aria-label="Texto base" className="container mx-auto px-4 py-10">
          <blockquote className="tarjeta mx-auto max-w-2xl rounded-3xl p-6 text-center">
            <Quote className="mx-auto mb-3 h-6 w-6 text-sky-600" aria-hidden />
            <p className="font-serif text-lg italic leading-relaxed text-slate-300">
              «{detalle.versiculo.texto}»
            </p>
            <cite className="mt-3 block text-xs font-bold uppercase not-italic tracking-[0.25em] text-sky-600">
              {detalle.versiculo.referencia}
            </cite>
          </blockquote>
        </section>
      )}

      {/* Secuencia de temas */}
      <section aria-label="Secuencia del programa" className="container mx-auto px-4 pb-14">
        <header className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5">
            <ListOrdered className="h-3.5 w-3.5 text-sky-600" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600">
              Cómo se emite
            </span>
          </div>
          <GoldTitle pie="El mismo orden en cada emisión">Secuencia de temas</GoldTitle>
        </header>

        <ol className="mx-auto max-w-3xl list-none space-y-0 p-0">
          {detalle.bloques.map((bloque, indice) => (
            <li key={bloque.minuto} className="relative flex gap-5 pb-8 last:pb-0">
              {/* Línea de tiempo */}
              {indice < detalle.bloques.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[27px] top-12 h-full w-px bg-gradient-to-b from-sky-500/40 to-transparent"
                />
              )}

              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-slate-900 font-mono text-xs font-bold text-sky-600">
                {bloque.minuto}
              </span>

              <div className="min-w-0 flex-1 pt-2">
                <h3 className="font-serif text-lg font-bold text-white">{bloque.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{bloque.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Grabaciones */}
      <section
        aria-label="Grabaciones del programa"
        className="border-t border-white/10 py-14 md:py-20"
      >
        <div className="container mx-auto px-4">
          <header className="mb-10 text-center">
            <GoldTitle pie="Vuelve a escuchar cuando quieras">Grabaciones</GoldTitle>
          </header>

          {detalle.grabaciones.length > 0 ? (
            <div className="mx-auto max-w-3xl space-y-3">
              {detalle.grabaciones.map((grabacion) => (
                <ReproductorGrabacion key={grabacion.id} grabacion={grabacion} />
              ))}
            </div>
          ) : (
            <div className="tarjeta mx-auto max-w-2xl rounded-3xl p-8 text-center">
              <Radio className="mx-auto mb-4 h-8 w-8 text-slate-500" aria-hidden />
              <p className="mb-2 font-serif text-xl font-bold text-white">
                Todavía no hay grabaciones publicadas
              </p>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
                Estamos subiendo las emisiones al archivo. Mientras tanto puedes escuchar el
                programa en vivo en su horario, o seguirnos por la señal en línea.
              </p>
              <Link href="/programacion" className="btn btn-primario mt-6">
                Ver la parrilla completa
              </Link>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}

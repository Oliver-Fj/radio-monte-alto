import type { Metadata } from 'next';
import { createElement } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Flame,
  HeartHandshake,
  MapPin,
  Music4,
  Quote,
  Trophy,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ACTIVIDADES, EQUIPOS, LEMA, VERSICULO } from '@/lib/data/ministerioJuvenil';
import GoldTitle from '@/components/atoms/GoldTitle';

export const metadata: Metadata = {
  title: 'Ministerio Juvenil - Radio Monte Alto',
  description:
    'Ministerio Juvenil «Predestinados para Triunfar»: reuniones semanales, estudio bíblico, alabanza, retiros y servicio. Jóvenes de 13 a 30 años en Huancayo.',
  keywords: ['ministerio juvenil', 'jóvenes cristianos', 'retiro de jóvenes', 'huancayo', 'monte alto'],
};

const ICONOS: Record<string, LucideIcon> = {
  Flame,
  Music4,
  BookOpen,
  Users,
  HeartHandshake,
  Trophy,
};

function IconoActividad({ nombre, className }: { nombre: string; className?: string }) {
  return createElement(ICONOS[nombre] ?? Flame, { className, 'aria-hidden': true });
}

export default function MinisterioJuvenilPage() {
  return (
    <>
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-10">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Link
            href="/nuestra-iglesia"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Nuestra Iglesia
          </Link>

          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
              <Flame className="h-8 w-8 text-white" aria-hidden />
            </span>
          </div>

          <GoldTitle as="h1" pie={LEMA}>
            Ministerio Juvenil
          </GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            Jóvenes y adolescentes de 13 a 30 años que se reúnen para buscar a Dios, servir juntos
            y no caminar solos esta etapa. Vengas de donde vengas, aquí hay lugar para ti.
          </p>

          {/* Versículo */}
          <blockquote className="tarjeta mx-auto mt-10 max-w-2xl rounded-3xl p-6">
            <Quote className="mx-auto mb-3 h-6 w-6 text-blue-500" aria-hidden />
            <p className="font-serif text-lg italic leading-relaxed text-slate-300">
              «{VERSICULO.texto}»
            </p>
            <cite className="mt-3 block text-xs font-bold uppercase not-italic tracking-[0.25em] text-blue-600">
              {VERSICULO.referencia}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Actividades */}
      <section aria-label="Actividades del ministerio juvenil" className="bg-slate-950 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <header className="mb-12 text-center">
            <GoldTitle pie="Cada semana, todo el año">Qué hacemos</GoldTitle>
          </header>

          <ul className="mx-auto grid max-w-6xl list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
            {ACTIVIDADES.map((actividad) => (
              <li key={actividad.id} className="h-full">
                <article className="tarjeta group flex h-full flex-col rounded-3xl p-6">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <IconoActividad nombre={actividad.icono} className="h-5 w-5 text-white" />
                  </span>

                  <h3 className="font-serif text-xl font-bold text-white">{actividad.titulo}</h3>

                  <dl className="mt-3 space-y-1.5 text-[13px] text-slate-400">
                    <div className="flex items-start gap-2">
                      <dt className="sr-only">Cuándo</dt>
                      <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" aria-hidden />
                      <dd className="font-semibold text-slate-300">{actividad.cuando}</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <dt className="sr-only">Dónde</dt>
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" aria-hidden />
                      <dd>{actividad.donde}</dd>
                    </div>
                  </dl>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                    {actividad.descripcion}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Equipos de servicio */}
      <section aria-label="Equipos de servicio" className="bg-slate-950 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <header className="mb-10 text-center">
            <GoldTitle pie="No hace falta experiencia">Dónde puedes servir</GoldTitle>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
              El ministerio lo sostienen cuatro equipos. Todos empiezan igual: llegando un día y
              preguntando en qué ayudar.
            </p>
          </header>

          <ul className="mx-auto grid max-w-4xl list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
            {EQUIPOS.map((equipo) => (
              <li key={equipo.id}>
                <article className="tarjeta h-full p-5">
                  <h3 className="mb-2 font-semibold text-white">{equipo.nombre}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-slate-400">
                    {equipo.descripcion}
                  </p>
                  <p className="rounded-xl bg-blue-500/10 px-3 py-2 text-[13px] text-blue-700">
                    <span className="font-semibold">Buscamos: </span>
                    {equipo.buscamos}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/contacto" className="btn btn-primario">
              Quiero unirme
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/eventos/retiro-de-jovenes" className="btn btn-secundario">
              Ver el retiro de jóvenes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

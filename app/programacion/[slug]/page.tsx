import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Clock,
  FileText,
  Globe,
  ListOrdered,
  MessageCircle,
  Mic,
  Quote,
  Radio,
  Tag,
  Users,
} from 'lucide-react';
import DETALLES, { getDetallePorSlug } from '@/lib/data/programaDetalle';
import { programas } from '@/lib/data/programas';
import { programas as parrilla } from '@/lib/data/programacion';
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

  // Quién conduce y opera el programa cada día, según la parrilla de la radio
  const ORDEN_DIAS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const equipo = parrilla
    .filter((p) => p.nombre === detalle.nombreParrilla && (p.locutor || p.operador))
    .sort((a, b) => ORDEN_DIAS.indexOf(a.dias[0]) - ORDEN_DIAS.indexOf(b.dias[0]));

  const apartados = [
    { id: 'grabaciones', rotulo: 'Grabaciones', icono: Radio },
    { id: 'estudios', rotulo: 'Estudios', icono: BookOpen },
    { id: 'detalles', rotulo: 'Detalles', icono: ListOrdered },
  ];

  const saludoWhatsApp = `https://wa.me/51985796588?text=${encodeURIComponent(
    `Hola, quisiera enviar un saludo al programa «${programa.nombre}»: `,
  )}`;

  return (
    <article className="ficha-programa bg-slate-950">
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
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-300"
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
              <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300">
                <Tag className="h-3 w-3" aria-hidden />
                {programa.categoria}
              </span>

              <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
                {programa.nombre}
              </h1>
              <p className="mt-2 text-lg font-medium text-sky-300">{detalle.lema}</p>
              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                {detalle.presentacion}
              </p>

              {/* Apartados de la ficha */}
              <nav aria-label="Apartados del programa" className="mt-6 flex flex-wrap gap-2">
                {apartados.map(({ id, rotulo, icono: Icono }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white"
                  >
                    <Icono className="h-4 w-4 text-sky-500" aria-hidden />
                    {rotulo}
                  </a>
                ))}
              </nav>
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
              <Icono className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden />
              <div className="min-w-0">
                <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {rotulo}
                </dt>
                <dd className="mt-0.5 text-sm text-slate-300">{valor}</dd>
              </div>
            </div>
          ))}
        </dl>

        {detalle.desde && <p className="mt-3 text-center text-xs text-slate-500">{detalle.desde}</p>}
      </section>

      {/* Versículo */}
      {detalle.versiculo && (
        <section aria-label="Texto base" className="container mx-auto px-4 py-10">
          <blockquote className="tarjeta mx-auto max-w-2xl rounded-3xl p-6 text-center">
            <Quote className="mx-auto mb-3 h-6 w-6 text-sky-300" aria-hidden />
            <p className="font-serif text-lg italic leading-relaxed text-slate-300">
              «{detalle.versiculo.texto}»
            </p>
            <cite className="mt-3 block text-xs font-bold uppercase not-italic tracking-[0.25em] text-sky-300">
              {detalle.versiculo.referencia}
            </cite>
          </blockquote>
        </section>
      )}

      {/* Secuencia de temas (solo si el equipo del programa la confirmó) */}
      {detalle.bloques.length > 0 && (
      <section aria-label="Secuencia del programa" className="container mx-auto px-4 pb-14">
        <header className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5">
            <ListOrdered className="h-3.5 w-3.5 text-sky-300" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-300">
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

              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-500/30 bg-slate-900 font-mono text-xs font-bold text-sky-300">
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
      )}

      {/* Grabaciones */}
      <section
        id="grabaciones"
        aria-label="Grabaciones del programa"
        className="scroll-mt-28 border-t border-white/10 py-14 md:py-20"
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

      {/* Estudios */}
      <section
        id="estudios"
        aria-label="Estudios del programa"
        className="scroll-mt-28 border-t border-white/10 py-14 md:py-20"
      >
        <div className="container mx-auto px-4">
          <header className="mb-10 text-center">
            <GoldTitle pie="Bosquejos y guías para estudiar en casa">Estudios</GoldTitle>
          </header>

          {detalle.estudios.length > 0 ? (
            <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
              {detalle.estudios.map((estudio) => (
                <li key={estudio.id} className="tarjeta flex flex-col rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {[estudio.pasaje, estudio.fecha].filter(Boolean).join(' · ')}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-white">{estudio.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{estudio.resumen}</p>
                  {estudio.pdf && (
                    <a
                      href={publicPath(estudio.pdf)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 self-start text-sm font-bold text-sky-300 hover:underline"
                    >
                      <FileText className="h-4 w-4" aria-hidden />
                      Abrir el estudio (PDF)
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="tarjeta mx-auto max-w-2xl rounded-3xl p-8 text-center">
              <BookOpen className="mx-auto mb-4 h-8 w-8 text-slate-500" aria-hidden />
              <p className="mb-2 font-serif text-xl font-bold text-white">Pronto publicaremos los estudios</p>
              <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
                Aquí estarán los bosquejos y guías de cada serie para que puedas repasar en casa con tu Biblia.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Detalles */}
      <section
        id="detalles"
        aria-label="Más detalles del programa"
        className="scroll-mt-28 border-t border-white/10 py-14 md:py-20"
      >
        <div className="container mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold text-white">
              <Mic className="h-5 w-5 text-sky-500" aria-hidden />
              Quiénes lo conducen
            </h2>
            {equipo.length > 0 ? (
              <div className="tarjeta overflow-hidden rounded-2xl">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-[0.15em] text-slate-500">
                      <th scope="col" className="px-4 py-3 font-semibold">Día</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Locución</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Operación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipo.map((turno) => (
                      <tr key={turno.id} className="border-b border-white/5 last:border-0">
                        <th scope="row" className="px-4 py-3 font-semibold text-slate-200">
                          {DIAS_LARGOS[turno.dias[0]] ?? turno.dias[0]}
                        </th>
                        <td className="px-4 py-3 text-slate-300">{turno.locutor ?? '—'}</td>
                        <td className="px-4 py-3 text-slate-400">{turno.operador ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="tarjeta rounded-2xl p-5 text-sm leading-relaxed text-slate-400">
                Pronto publicaremos quiénes conducen este programa.
              </p>
            )}
          </div>

          <aside className="tarjeta flex flex-col rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-white">
              <MessageCircle className="h-5 w-5 text-emerald-500" aria-hidden />
              Escríbele al programa
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              Envía tu saludo, tu petición de oración o la pregunta que quieres que se responda al aire. Se leen durante la emisión.
            </p>
            <a
              href={saludoWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primario mt-5 self-start"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Enviar por WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </article>
  );
}

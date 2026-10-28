import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, ArrowLeft, ArrowRight, Tag, Quote, CheckCircle2, List, CalendarDays } from 'lucide-react';
import articulos, { getArticuloPorSlug, type Articulo } from '@/lib/data/articulos';
import ArticleToc, { type TocItem } from '@/components/molecules/ArticleToc';
import GlowLink from '@/components/molecules/GlowLink';
import { publicPath } from '@/lib/utils/publicPath';

/** Identificador estable y legible para anclar cada subtítulo. */
function idDeSubtitulo(texto: string, i: number) {
  const base = texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `s${i + 1}-${base || 'seccion'}`;
}

// ── Requerido para next export estático ──
export function generateStaticParams() {
  return articulos.map(a => ({ slug: a.slug }));
}

// ── Renderizado de cada tipo de bloque ──
// Estilo de lectura inspirado en «Article Details» (codepen.io/fuzionix/pen/rNpEPpM):
// interlineado amplio (1.75), subtítulos con aire arriba y citas en tarjeta
// suave con comillas grandes en las esquinas.
function Bloque({ b, id, numero }: { b: Articulo['contenido'][0]; id?: string; numero?: number }) {
  switch (b.tipo) {
    case 'parrafo':
      return <p className="mb-6 text-[1.075rem] leading-[1.8] text-slate-300 md:text-[1.125rem]">{b.texto}</p>;

    case 'subtitulo':
      return (
        <h2 id={id} className="mb-5 mt-14 flex scroll-mt-28 items-baseline gap-3 text-2xl font-bold leading-snug text-white md:mt-16 md:text-[1.75rem]">
          <span className="font-sans text-sm font-extrabold tabular-nums text-yellow-400" aria-hidden="true">
            {String(numero ?? 1).padStart(2, '0')}
          </span>
          <span>{b.texto}</span>
        </h2>
      );

    case 'cita':
      return (
        <blockquote className="relative my-12 rounded-2xl border border-white/10 bg-white/5 px-8 py-9 md:px-12 md:py-10">
          <Quote className="absolute -left-3 -top-4 h-11 w-11 rotate-180 fill-current text-yellow-400/30" aria-hidden="true" />
          <Quote className="absolute -bottom-4 -right-3 h-11 w-11 fill-current text-yellow-400/30" aria-hidden="true" />
          <p className="text-xl font-semibold leading-[1.6] text-white md:text-[1.4rem]">{b.texto}</p>
          {b.referencia && (
            <footer className="mt-4 text-sm font-semibold text-yellow-400">— {b.referencia}</footer>
          )}
        </blockquote>
      );

    case 'lista':
      return (
        <ul className="my-8 space-y-4">
          {b.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[1.05rem] leading-[1.75] text-slate-300">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'versiculo':
      return (
        <figure className="relative my-12 overflow-hidden rounded-2xl border border-yellow-500/25 bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent px-8 py-10 text-center md:px-12">
          <BookOpen className="mx-auto mb-4 h-6 w-6 text-yellow-400" aria-hidden="true" />
          <blockquote className="text-xl font-medium leading-[1.65] text-white md:text-2xl">
            «{b.texto}»
          </blockquote>
          <figcaption className="mt-5">
            <cite className="font-serif text-lg font-bold not-italic text-yellow-400">{b.referencia}</cite>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Reina-Valera 1960</span>
          </figcaption>
        </figure>
      );

    default:
      return null;
  }
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articulo = getArticuloPorSlug(slug);
  if (!articulo) return notFound();

  const otrosArticulos = articulos.filter(a => a.slug !== articulo.slug).slice(0, 3);

  // Índice: un ancla por cada subtítulo, en orden de aparición
  let contador = 0;
  const anclas = articulo.contenido.map((b) =>
    b.tipo === 'subtitulo' ? idDeSubtitulo(b.texto, contador++) : undefined
  );
  const toc: TocItem[] = articulo.contenido
    .map((b, i) => (b.tipo === 'subtitulo' ? { id: anclas[i]!, texto: b.texto } : null))
    .filter((x): x is TocItem => x !== null);

  const ficha = [
    { k: 'Lectura', v: articulo.tiempoLectura },
    { k: 'Publicado', v: articulo.fecha },
    { k: 'Categoría', v: articulo.categoria },
    { k: 'Autor', v: articulo.autor },
  ];

  return (
    <article className="min-h-screen bg-slate-950">
      <div className="container mx-auto px-4 pt-6 md:pt-10">
        <div className="mx-auto max-w-6xl">

          {/* Volver */}
          <Link
            href="/recursos"
            className="group mb-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Volver a Recursos
          </Link>

          {/* ── Portada: tarjeta con foto de fondo ── */}
          <header
            data-keep-dark
            className="relative isolate flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white shadow-2xl sm:p-10 md:min-h-[500px] md:p-12"
          >
            <Image
              src={publicPath(articulo.imagen)}
              alt={articulo.imagenAlt}
              fill
              priority
              className="-z-10 object-cover"
              sizes="(max-width: 1200px) 100vw, 1150px"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

            {/* Parte superior */}
            <div className="flex items-center justify-between gap-4 pb-5">
              <span className="text-sm font-bold uppercase tracking-[0.4em] text-white/90 sm:text-base">Artículo</span>
              <span className="hidden items-center gap-2 text-sm text-white/65 sm:inline-flex">
                {articulo.fecha}
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>

            {/* Parte inferior */}
            <div className="pt-12">
              <p className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
                <Tag className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Temas:</span>
                {[articulo.categoria, ...articulo.tags.filter(t => t !== articulo.categoria)].slice(0, 4).join(', ')}
              </p>
              <h1 className="my-4 max-w-4xl text-3xl font-bold leading-[1.15] text-white drop-shadow-lg sm:text-4xl md:text-5xl">
                {articulo.titulo}
              </h1>
              <p className="max-w-2xl text-base leading-[1.75] text-white/80 md:text-lg lg:w-2/3">
                {articulo.subtitulo}
              </p>
            </div>
          </header>

          {/* ── Ficha del artículo ── */}
          <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 md:mt-12 md:grid-cols-4 md:px-12 md:py-8">
            {ficha.map(({ k, v }) => (
              <div key={k}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{k}</dt>
                <dd className="mt-2 text-base font-bold leading-snug text-white sm:text-lg md:text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── Cuerpo del artículo ── */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 xl:gap-16">

          {/* Índice lateral con seguimiento de lectura */}
          <aside className="order-first lg:col-span-3">
            <ArticleToc items={toc} />
          </aside>

          <div className="max-w-3xl lg:col-span-9">

            {/* Entrada: la idea del artículo en una frase */}
            <p className="mb-10 border-l-[3px] border-yellow-400 pl-5 text-xl font-medium leading-[1.6] text-white md:text-2xl">
              {articulo.resumen}
            </p>

            {/* Bloques de contenido */}
            <div>
              {articulo.contenido.map((b, i) => {
                const numero = b.tipo === 'subtitulo'
                  ? toc.findIndex((t) => t.id === anclas[i]) + 1
                  : undefined;
                return <Bloque key={i} b={b} id={anclas[i]} numero={numero} />;
              })}
            </div>

            {/* Tags */}
            <div className="mt-14 border-t border-white/10 pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Temas</p>
              <div className="flex flex-wrap gap-2">
                {articulo.tags.map(tag => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-slate-300">
                    # {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 p-7 text-center">
              <p className="mb-1 text-lg font-bold text-white">¿Te edificó este artículo?</p>
              <p className="mb-5 text-sm text-slate-400">Compártelo con alguien que lo necesite.</p>
              <Link
                href="/recursos"
                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-6 py-3 text-sm font-bold text-slate-900 transition duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                <List className="h-4 w-4" aria-hidden="true" />
                Ver más artículos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Otros artículos ── */}
      {otrosArticulos.length > 0 && (
        <section aria-labelledby="sigue-leyendo" className="border-t border-white/10 py-16">
          <div className="container mx-auto px-4">
            <h2 id="sigue-leyendo" className="mb-8 text-center text-2xl font-bold text-white">
              Sigue leyendo
            </h2>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
              {otrosArticulos.map(otro => (
                <GlowLink key={otro.id} href={`/recursos/${otro.slug}`}>
                  <span className="relative block h-40 overflow-hidden">
                    <Image src={publicPath(otro.imagen)} alt={otro.imagenAlt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 340px" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${otro.categoriaColor} px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white`}>
                      {otro.categoria}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="mb-1 flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {otro.tiempoLectura} de lectura
                    </span>
                    <span className="mb-3 line-clamp-2 font-serif text-lg font-bold leading-snug text-white">
                      {otro.titulo}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-yellow-400">
                      Leer <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </span>
                </GlowLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

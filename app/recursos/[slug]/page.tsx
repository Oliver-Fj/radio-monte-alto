import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Clock, ArrowLeft, ArrowRight, Tag, Quote, CheckCircle2, List } from 'lucide-react';
import articulos, { getArticuloPorSlug, type Articulo } from '@/lib/data/articulos';
import ArticleToc, { type TocItem } from '@/components/molecules/ArticleToc';
import { publicPath } from '@/lib/utils/publicPath';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

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
function Bloque({ b, id, numero }: { b: Articulo['contenido'][0]; id?: string; numero?: number }) {
  switch (b.tipo) {
    case 'parrafo':
      return <p className="text-slate-300 text-lg leading-relaxed mb-6">{b.texto}</p>;

    case 'subtitulo':
      return (
        <h2 id={id} className="scroll-mt-28 mt-14 mb-6 pt-8 border-t border-white/10">
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-yellow-500 mb-2">
            Sección {String(numero ?? 1).padStart(2, '0')}
          </span>
          <span className="block text-2xl md:text-3xl font-serif font-bold text-white leading-snug">
            {b.texto}
          </span>
        </h2>
      );

    case 'cita':
      return (
        <blockquote className="relative my-10 px-8 py-6 rounded-2xl bg-yellow-500/5 border-l-4 border-yellow-400 border border-yellow-500/15">
          <Quote className="absolute top-4 right-5 w-8 h-8 text-yellow-500/20" />
          <p className="text-xl font-serif italic text-yellow-100 leading-relaxed">{b.texto}</p>
          {b.referencia && (
            <p className="mt-3 text-yellow-400/60 text-sm font-medium">— {b.referencia}</p>
          )}
        </blockquote>
      );

    case 'lista':
      return (
        <ul className="my-6 space-y-3">
          {b.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'versiculo':
      return (
        <div className="my-10 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950/60 to-slate-900/60 border border-blue-500/20 p-8 text-center backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none" />
          <Quote className="mx-auto w-7 h-7 text-blue-400/40 mb-4 rotate-180" />
          <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-4">
            {b.texto}
          </p>
          <cite className="not-italic text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 font-serif">
            {b.referencia}
          </cite>
          <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mt-1">Reina Valera 1960</p>
        </div>
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

  return (
    <div className="min-h-screen bg-slate-950">

      {/* ── Hero del artículo ── */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src={publicPath(articulo.imagen)}
          alt={articulo.imagenAlt}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-blue-950/40" />

        {/* Contenido sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-12">
            {/* Volver */}
            <Link href="/recursos"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver a Recursos
            </Link>

            {/* Badge */}
            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${articulo.categoriaColor} text-white text-[11px] font-black tracking-wider uppercase shadow-lg mb-4`}>
              <Tag className="w-3 h-3" />
              {articulo.categoria}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white leading-tight mb-3 max-w-4xl drop-shadow-xl">
              {articulo.titulo}
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mb-6">
              {articulo.subtitulo}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-xs shadow-lg">
                  R
                </div>
                <span>{articulo.autor}</span>
              </div>
              <span className="text-slate-600">·</span>
              <span>{articulo.fecha}</span>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
                {articulo.tiempoLectura} de lectura
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cuerpo del artículo ── */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 max-w-6xl mx-auto">

          {/* Índice lateral con seguimiento de lectura */}
          <aside className="lg:col-span-3 order-first">
            <ArticleToc items={toc} />
          </aside>

          <div className="lg:col-span-9 max-w-3xl">

          {/* Ficha del artículo */}
          <dl className="mb-10 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-white/10">
            {[
              { k: 'Autor', v: articulo.autor },
              { k: 'Publicado', v: articulo.fecha },
              { k: 'Lectura', v: articulo.tiempoLectura },
              { k: 'Categoría', v: articulo.categoria },
            ].map(({ k, v }) => (
              <div key={k} className="border-r border-b border-white/10 px-4 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{k}</dt>
                <dd className="mt-1 text-sm text-slate-200 font-medium">{v}</dd>
              </div>
            ))}
          </dl>

          {/* Resumen destacado */}
          <div className="relative mb-12 p-7 rounded-2xl bg-white/3 border border-white/8 backdrop-blur-sm">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-yellow-500/30 text-yellow-400 text-[10px] font-black tracking-widest uppercase">
              <BookOpen className="w-3 h-3" />
              Resumen
            </div>
            <p className="text-slate-200 text-lg leading-relaxed font-serif italic">
              {articulo.resumen}
            </p>
          </div>

          {/* Divisor */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />
            <span className="text-yellow-500/40 text-xl">✝</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />
          </div>

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
          <div className="mt-12 pt-8 border-t border-white/6">
            <div className="flex flex-wrap gap-2">
              {articulo.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">
                  # {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA compartir */}
          <div className="mt-12 p-7 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-yellow-500/10 border border-yellow-500/15 text-center">
            <p className="text-white font-bold text-lg mb-1">¿Te edificó este artículo?</p>
            <p className="text-slate-400 text-sm mb-5">Compártelo con alguien que lo necesite.</p>
            <Link href="/recursos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30">
              <List className="w-4 h-4" />
              Ver más artículos
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* ── Otros artículos ── */}
      {otrosArticulos.length > 0 && (
        <div className="border-t border-white/5 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 text-center">
              Sigue leyendo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {otrosArticulos.map(otro => (
                <Link key={otro.id} href={`/recursos/${otro.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-white/7 hover:border-yellow-500/25 bg-slate-900/40 transition-all duration-400 hover:-translate-y-1">
                  <div className="relative h-36 overflow-hidden">
                    <Image src={publicPath(otro.imagen)} alt={otro.imagenAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="300px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${otro.categoriaColor} text-white text-[9px] font-black uppercase tracking-wide`}>
                      {otro.categoria}
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <h4 className="text-white font-serif font-bold text-sm leading-snug mb-2 group-hover:text-yellow-50 transition-colors line-clamp-2">
                      {otro.titulo}
                    </h4>
                    <div className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold">
                      Leer <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

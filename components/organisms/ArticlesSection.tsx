'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import articulos from '@/lib/data/articulos';
import GoldTitle from '@/components/atoms/GoldTitle';
import { publicPath } from '@/lib/utils/publicPath';
import GlowLink from '@/components/molecules/GlowLink';

// Fallback si la imagen del artículo no existe todavía
// Las rutas se pasan por publicPath(): next/image NO añade el basePath
const FALLBACKS = [
  '/images/hero/slide1-desktop-1366.webp',
  '/images/hero/slide2-desktop-1366.webp',
  '/images/hero/slide3-desktop-1366.webp',
];

function ArticuloCard({ a, index, visible }: { a: typeof articulos[0]; index: number; visible: boolean }) {
  const [imgError, setImgError] = useState(false);
  const fallback = FALLBACKS[index % FALLBACKS.length];

  return (
    <GlowLink
      href={`/recursos/${a.slug}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms, box-shadow .5s`,
      }}
    >
      {/* Borde de colores que sigue al puntero (GlowLink) */}
      <article className="relative h-full flex flex-col">

        {/* Imagen */}
        <div className="relative h-52 flex-shrink-0 overflow-hidden">
          <Image
            src={publicPath(imgError ? fallback : a.imagen)}
            alt={a.imagenAlt}
            fill
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-108"
            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* Badge categoría */}
          <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${a.categoriaColor} text-white text-[10px] font-black tracking-wider uppercase shadow-lg`}>
            <Tag className="w-3 h-3" aria-hidden="true" />
            {a.categoria}
          </div>

          {/* Tiempo de lectura */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-sm text-slate-300 text-[10px] font-medium">
            <Clock className="w-3 h-3 text-yellow-400" aria-hidden="true" />
            {a.tiempoLectura}
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-1 flex flex-col p-6">
          <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">{a.fecha}</p>

          <h3 className="text-white font-serif font-bold text-xl leading-snug mb-3 group-hover:text-yellow-50 transition-colors duration-300 line-clamp-2">
            {a.titulo}
          </h3>

          <p className="text-slate-400 text-[0.95rem] leading-[1.75] mb-5 flex-1 line-clamp-3">
            {a.resumen}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {a.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-0.5 rounded-full bg-white/4 border border-white/8 text-slate-400 text-[10px]">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-white/6">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <BookOpen className="w-3.5 h-3.5 text-yellow-400/60" aria-hidden="true" />
              {a.autor}
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
              Leer artículo
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </GlowLink>
  );
}

export default function ArticlesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-950 pb-20 md:pb-28 overflow-hidden">

      {/* Luz ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[200px]"
          style={{ background: 'rgba(234,179,8,0.025)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-4">

        {/* Encabezado */}
        <header className="text-center mb-14">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5">
            <BookOpen className="h-3.5 w-3.5 text-yellow-400" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Para tu edificación
            </span>
          </div>

          <GoldTitle pie="Enseñanza · Devocionales · Reflexiones">Artículos y Recursos</GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            Lecturas breves para acompañar tu caminar con Dios durante la semana.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articulos.map((a, i) => (
            <div key={a.id} className="relative">
              <ArticuloCard a={a} index={i} visible={visible} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

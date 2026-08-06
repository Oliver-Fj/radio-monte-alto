'use client';

import { useEffect, useState } from 'react';

export interface TocItem {
  id: string;
  texto: string;
}

/**
 * Índice lateral del artículo con seguimiento de lectura.
 * Resalta la sección visible usando IntersectionObserver (sin listeners de
 * scroll) y muestra el progreso de lectura. Navegación por teclado incluida.
 */
export default function ArticleToc({ items }: { items: TocItem[] }) {
  const [activo, setActivo] = useState<string>(items[0]?.id ?? '');

  useEffect(() => {
    if (!items.length) return;

    const secciones = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!secciones.length) return;

    // La sección activa es la última cuyo encabezado ya pasó la banda superior.
    const observer = new IntersectionObserver(
      () => {
        const limite = window.innerHeight * 0.35;
        let visible = secciones[0];
        for (const s of secciones) {
          if (s.getBoundingClientRect().top <= limite) visible = s;
        }
        setActivo(visible.id);
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 1] }
    );

    secciones.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  const indiceActivo = Math.max(0, items.findIndex((i) => i.id === activo));
  const progreso = ((indiceActivo + 1) / items.length) * 100;

  return (
    <nav aria-label="Índice del artículo" className="lg:sticky lg:top-28">
      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-yellow-500 mb-4">
        En este artículo
      </p>

      <ol className="relative space-y-1 border-l border-white/10 pl-0">
        {/* Barra de progreso de lectura */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-yellow-300 to-amber-600 transition-[height] duration-500"
          style={{ height: `${progreso}%` }}
        />

        {items.map((item, i) => {
          const esActivo = item.id === activo;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={esActivo ? 'true' : undefined}
                className={`group flex items-start gap-3 py-2 pl-4 pr-3 rounded-r-lg text-sm transition-all duration-300 ${
                  esActivo
                    ? 'bg-yellow-500/10 text-yellow-200 font-semibold'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <span
                  className={`font-mono text-[10px] pt-0.5 tabular-nums transition-colors ${
                    esActivo ? 'text-yellow-400' : 'text-slate-600 group-hover:text-slate-400'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="leading-snug">{item.texto}</span>
              </a>
            </li>
          );
        })}
      </ol>

      <p className="mt-5 pl-4 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600">
        {String(indiceActivo + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} secciones
      </p>
    </nav>
  );
}

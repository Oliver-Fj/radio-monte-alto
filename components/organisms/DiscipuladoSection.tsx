'use client';

import { createElement, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  GraduationCap,
  HandHeart,
  Sprout,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import NIVELES, { PREGUNTAS, type IconoNivel } from '@/lib/data/discipulado';
import GoldTitle from '@/components/atoms/GoldTitle';
import { cn } from '@/lib/utils/cn';

const ICONOS: Record<IconoNivel, LucideIcon> = {
  Sprout,
  BookOpen,
  Users,
  HandHeart,
  GraduationCap,
};

function IconoNivelGlifo({ nombre, className }: { nombre: IconoNivel; className?: string }) {
  return createElement(ICONOS[nombre] ?? Sprout, { className, 'aria-hidden': true });
}

/**
 * Ruta de discipulado: cuatro niveles, del nuevo creyente al que sirve.
 * Cada nivel se despliega para mostrar sus temas sin sacar al visitante
 * de la página.
 */
export default function DiscipuladoSection() {
  const [abierto, setAbierto] = useState<string | null>(NIVELES[0]?.id ?? null);

  return (
    <section aria-label="Ruta de discipulado" className="bg-slate-950 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-14 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5">
            <Sprout className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600">
              Cuatro etapas
            </span>
          </div>

          <GoldTitle pie="Del primer día al servicio">La ruta del discípulo</GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            Nadie crece solo. Estos cuatro niveles acompañan al creyente desde el día que cree
            hasta que está listo para enseñar a otro.
          </p>
        </header>

        <ol className="mx-auto grid max-w-5xl list-none grid-cols-1 gap-4 p-0">
          {NIVELES.map((nivel) => {
            const desplegado = abierto === nivel.id;
            return (
              <li key={nivel.id}>
                <article
                  className={cn(
                    'tarjeta overflow-hidden rounded-3xl',
                    desplegado && 'border-amber-400/55',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setAbierto(desplegado ? null : nivel.id)}
                    aria-expanded={desplegado}
                    className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg">
                      <IconoNivelGlifo nombre={nivel.icono} className="h-6 w-6 text-white" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs font-bold text-emerald-600">
                          Nivel {nivel.orden}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                          <Clock className="h-3 w-3" aria-hidden />
                          {nivel.duracion}
                        </span>
                      </span>
                      <span className="block font-serif text-xl font-bold text-white md:text-2xl">
                        {nivel.titulo}
                      </span>
                      <span className="block text-sm text-slate-400">{nivel.lema}</span>
                    </span>

                    <ArrowRight
                      className={cn(
                        'h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300',
                        desplegado && 'rotate-90',
                      )}
                      aria-hidden
                    />
                  </button>

                  {desplegado && (
                    <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-6">
                      <p className="mb-5 leading-relaxed text-slate-300">{nivel.descripcion}</p>

                      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        Qué se estudia
                      </p>
                      <ul className="mb-5 grid list-none gap-2 p-0 sm:grid-cols-2">
                        {nivel.temas.map((tema) => (
                          <li key={tema} className="flex items-start gap-2 text-sm text-slate-300">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                            {tema}
                          </li>
                        ))}
                      </ul>

                      <p className="tarjeta p-4 text-sm text-slate-400">
                        <span className="font-semibold text-slate-300">Dirigido a: </span>
                        {nivel.dirigidoA}
                      </p>
                    </div>
                  )}
                </article>
              </li>
            );
          })}
        </ol>

        {/* Preguntas frecuentes */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-white">
            Preguntas frecuentes
          </h3>
          <dl className="grid gap-4 sm:grid-cols-2">
            {PREGUNTAS.map(({ pregunta, respuesta }) => (
              <div key={pregunta} className="tarjeta p-5">
                <dt className="mb-2 font-semibold text-white">{pregunta}</dt>
                <dd className="text-sm leading-relaxed text-slate-400">{respuesta}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contacto" className="btn btn-primario">
            Quiero empezar el discipulado
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

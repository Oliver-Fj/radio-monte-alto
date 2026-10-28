import type { CSSProperties } from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';
import { programas } from '@/lib/data/programas';
import { Clock, CalendarDays, ArrowRight, Headphones } from 'lucide-react';
import { publicPath } from '@/lib/utils/publicPath';
import Link from 'next/link';
import { getDetallePorProgramaId } from '@/lib/data/programaDetalle';

/**
 * Todos los programas como Magic Cards con borde de gradiente giratorio y
 * aura luminosa (adaptado del CodePen de Mythrill). Cada programa tiene su
 * propia paleta: Clínica celeste, Candelero dorado, Sana Doctrina guinda, etc.
 *
 * IMÁGENES: cada programa usa su campo `imagen` de lib/data/programas.ts.
 * Para subir la tuya: coloca el archivo en public/images/programas/ y apunta
 * la ruta del programa a `${B}/images/programas/tu-archivo.webp` (o .png).
 */

// Paleta del borde giratorio por programa (id → 3 colores del gradiente)
const PALETAS: Record<string, [string, string, string]> = {
  '1': ['#fde68a', '#f59e0b', '#b45309'], // Candelero Encendido — dorado
  '2': ['#7dd3fc', '#38bdf8', '#0284c7'], // Clínica Celestial — celeste
  '3': ['#6ee7b7', '#10b981', '#047857'], // Visión Misionera — esmeralda
  '4': ['#f9a8d4', '#ec4899', '#be185d'], // Joyas de Cristo — rosa
  '5': ['#a5b4fc', '#6366f1', '#4338ca'], // Forjándonos — índigo
  '6': ['#fb7185', '#be123c', '#881337'], // Sana Doctrina — guinda
  '7': ['#67e8f9', '#06b6d4', '#155e75'], // Pesca Milagrosa — cian
  '8': ['#fdba74', '#f97316', '#c2410c'], // Huellas de Jesús — naranja
  '9': ['#c4b5fd', '#8b5cf6', '#5b21b6'], // Predestinados — violeta
  '10': ['#fca5a5', '#ef4444', '#991b1b'], // Quechua — rojo
};
const PALETA_DEFECTO: [string, string, string] = ['#fde68a', '#f59e0b', '#b45309'];

const DIAS_LARGOS: Record<string, string> = {
  L: 'Lun', M: 'Mar', X: 'Mié', J: 'Jue', V: 'Vie', S: 'Sáb', D: 'Dom',
};

function formatoDias(dias: string[]) {
  if (dias.length >= 6) return 'Lun – Sáb';
  if (dias.length === 5 && !dias.includes('S') && !dias.includes('D')) return 'Lun – Vie';
  return dias.map((d) => DIAS_LARGOS[d] ?? d).join(' · ');
}

interface ProgramasGridSectionProps {
  /** Cuántos programas mostrar. Sin valor, se muestran todos. */
  limite?: number;
  titulo?: string;
  subtitulo?: string;
  /** Enlace a la parrilla completa (útil cuando hay límite). */
  mostrarEnlaceATodos?: boolean;
}

export default function ProgramasGridSection({
  limite,
  titulo = 'Todos Nuestros Programas',
  subtitulo = 'Toda nuestra parrilla, de lunes a domingo',
  mostrarEnlaceATodos = false,
}: ProgramasGridSectionProps = {}) {
  const lista = limite ? programas.slice(0, limite) : programas;

  return (
    <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle centered subtitle={subtitulo} dark>
          {titulo}
        </SectionTitle>

        <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {lista.map((p) => {
            const [c1, c2, c3] = PALETAS[p.id] ?? PALETA_DEFECTO;
            // Solo los programas con ficha ampliada son enlazables.
            const detalle = getDetallePorProgramaId(p.id);
            const estilo = { '--mk-c1': c1, '--mk-c2': c2, '--mk-c3': c3 } as CSSProperties;
            const clases = `mk-card group ${detalle ? 'cursor-pointer transition-transform duration-300 hover:-translate-y-1' : ''}`;
            const interior = (
                // data-keep-dark: la tarjeta es oscura también en el tema claro,
                // así que sus textos no deben pasar a tinta oscura.
                <div className="mk-inner" data-keep-dark>
                  <img
                    src={publicPath(p.imagen ?? '/images/opt/programacion.webp')}
                    alt={`Carátula del programa ${p.nombre}`}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-square object-cover"
                  />
                  {/* Hilo divisor con la paleta de la tarjeta */}
                  <div
                    className="h-[2px] w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${c1}, ${c2}, ${c3}, transparent)` }}
                  />
                  <div className="flex flex-1 flex-col px-5 pt-4 pb-5 text-center text-white">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.3em]"
                      style={{ color: c1 }}
                    >
                      {p.categoria}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold leading-snug">{p.nombre}</h3>
                    <div className="mt-4 mb-1 flex flex-wrap items-center justify-center gap-2 text-xs">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm text-slate-100"
                        style={{ borderColor: `${c2}59`, backgroundColor: `${c3}26` }}
                      >
                        <Clock className="w-3.5 h-3.5" style={{ color: c1 }} aria-hidden="true" />
                        {p.horario}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-sm text-slate-100"
                        style={{ borderColor: `${c2}59`, backgroundColor: `${c3}26` }}
                      >
                        <CalendarDays className="w-3.5 h-3.5" style={{ color: c1 }} aria-hidden="true" />
                        {formatoDias(p.dias)}
                      </span>
                    </div>

                    {/* Acción explícita: que se vea que la tarjeta lleva a algún lado */}
                    <span className="mt-auto pt-4">
                      {detalle ? (
                        <span
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold text-white shadow-lg transition-[gap,filter] duration-300 group-hover:gap-3 group-hover:brightness-110"
                          style={{ backgroundImage: `linear-gradient(135deg, ${c1}, ${c2} 55%, ${c3})` }}
                        >
                          <Headphones className="h-4 w-4" aria-hidden="true" />
                          Ver programa y grabaciones
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-[13px] font-semibold text-slate-300">
                          Solo en vivo, en su horario
                        </span>
                      )}
                    </span>
                  </div>
                </div>
            );

            return detalle ? (
              <Link
                key={p.id}
                href={`/programacion/${detalle.slug}`}
                aria-label={`Ver el programa ${p.nombre}`}
                className={clases}
                style={estilo}
              >
                {interior}
              </Link>
            ) : (
              <article key={p.id} className={clases} style={estilo}>
                {interior}
              </article>
            );
          })}
        </div>

        {mostrarEnlaceATodos && (
          <div className="mt-12 text-center">
            <Link href="/programacion" className="btn btn-primario">
              Ver la parrilla completa
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

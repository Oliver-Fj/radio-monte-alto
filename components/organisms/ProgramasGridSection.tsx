import type { CSSProperties } from 'react';
import SectionTitle from '@/components/atoms/SectionTitle';
import { programas } from '@/lib/data/programas';
import { Clock, CalendarDays } from 'lucide-react';

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

export default function ProgramasGridSection() {
  return (
    <section className="relative py-16 md:py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle centered subtitle="Toda nuestra parrilla, de lunes a domingo" dark>
          Todos Nuestros Programas
        </SectionTitle>

        <div className="mt-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {programas.map((p) => {
            const [c1, c2, c3] = PALETAS[p.id] ?? PALETA_DEFECTO;
            return (
              <article
                key={p.id}
                className="mk-card"
                style={{ '--mk-c1': c1, '--mk-c2': c2, '--mk-c3': c3 } as CSSProperties}
              >
                <div className="mk-inner">
                  <img
                    src={p.imagen}
                    alt={`Carátula del programa ${p.nombre}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-square object-cover"
                  />
                  {/* Hilo divisor con la paleta de la tarjeta */}
                  <div
                    className="h-[2px] w-full"
                    style={{ background: `linear-gradient(to right, transparent, ${c1}, ${c2}, ${c3}, transparent)` }}
                  />
                  <div className="flex flex-col flex-1 px-5 pt-4 pb-5 text-center text-white">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

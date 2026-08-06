'use client';

import { useState } from 'react';
import { CalendarHeart, Users, HeartHandshake, PartyPopper } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Eventos del ministerio con su galería.
 * Para poner tus fotos reales: colócalas en public/images/eventos/ y cambia
 * las rutas de `fotos` en cada evento.
 */
interface Evento {
  id: string;
  titulo: string;
  icon: LucideIcon;
  frecuencia: string;
  descripcion: string;
  fotos: { src: string; alt: string }[];
  acento: string;
}

const EVENTOS: Evento[] = [
  {
    id: 'retiro-jovenes',
    titulo: 'Retiro de jóvenes',
    icon: Users,
    frecuencia: 'Dos veces al año',
    descripcion:
      'Tres días apartados para que la juventud de la congregación y de las filiales busque a Dios sin distracciones. Hay enseñanza bíblica por las mañanas, talleres sobre pureza, vocación y liderazgo por la tarde, y fogatas de testimonio al caer la noche. Muchos de los que hoy sirven en el ministerio entregaron su vida a Cristo en uno de estos retiros.',
    fotos: [
      { src: `${B}/images/opt/articulo-mision.webp`, alt: 'Jóvenes en el retiro anual' },
      { src: `${B}/images/opt/galeria-radio-5.webp`, alt: 'Tiempo de alabanza en el retiro de jóvenes' },
      { src: `${B}/images/opt/articulo-fe.webp`, alt: 'Taller de enseñanza para jóvenes' },
    ],
    acento: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'retiro-matrimonios',
    titulo: 'Retiro de matrimonios',
    icon: HeartHandshake,
    frecuencia: 'Una vez al año',
    descripcion:
      'Un fin de semana dedicado a fortalecer el hogar. Se abordan la comunicación, el perdón, la economía familiar y la crianza de los hijos a la luz de las Escrituras, con espacios de oración en pareja y consejería pastoral personalizada. Es uno de los encuentros más esperados por las familias de la iglesia.',
    fotos: [
      { src: `${B}/images/opt/articulo-familia.webp`, alt: 'Parejas en el retiro de matrimonios' },
      { src: `${B}/images/opt/articulo-oracion.webp`, alt: 'Oración en pareja durante el retiro' },
      { src: `${B}/images/opt/galeria-radio-2.webp`, alt: 'Enseñanza para matrimonios' },
    ],
    acento: 'from-rose-400 to-pink-600',
  },
  {
    id: 'fiesta-espiritual',
    titulo: 'Fiesta espiritual',
    icon: PartyPopper,
    frecuencia: 'Aniversario del ministerio',
    descripcion:
      'La celebración más grande del año. Se congregan la sede central y todas las filiales del país en una jornada completa de alabanza, predicación y testimonios de lo que Dios hizo durante el año. La radio transmite el evento en vivo para quienes no pueden asistir presencialmente.',
    fotos: [
      { src: `${B}/images/opt/articulo-alabanza.webp`, alt: 'Congregación reunida en la fiesta espiritual' },
      { src: `${B}/images/opt/galeria-radio-3.webp`, alt: 'Transmisión en vivo de la fiesta espiritual' },
      { src: `${B}/images/opt/articulo-gracia.webp`, alt: 'Testimonios durante la celebración' },
    ],
    acento: 'from-amber-400 to-yellow-600',
  },
];

function FotoEvento({ src, alt }: { src: string; alt: string }) {
  const [actual, setActual] = useState(src);
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
      <img
        src={actual}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setActual(`${B}/images/opt/galeria-radio-1.webp`)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
    </div>
  );
}

export default function EventosSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-5">
            <CalendarHeart className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Vida del ministerio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Nuestros{' '}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">eventos</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Los encuentros que marcan el calendario de la congregación cada año.
          </p>
        </div>

        <div className="space-y-16 max-w-6xl mx-auto">
          {EVENTOS.map(({ id, titulo, icon: Icon, frecuencia, descripcion, fotos, acento }) => (
            <article key={id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-9">
              <header className="flex flex-wrap items-center gap-4 mb-5">
                <span className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${acento} shadow-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">{titulo}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-1">{frecuencia}</p>
                </div>
              </header>

              <p className="text-slate-400 leading-relaxed mb-7 max-w-3xl">{descripcion}</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {fotos.map((f) => (
                  <FotoEvento key={f.alt} {...f} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

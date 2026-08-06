import type { Metadata } from 'next';
import { CalendarHeart } from 'lucide-react';
import EventosEspecialesSection from '@/components/organisms/EventosEspecialesSection';

export const metadata: Metadata = {
  title: 'Eventos especiales - Radio Monte Alto',
  description:
    'Retiros de jóvenes y matrimonios, conferencias de pastores y fiestas espirituales. Fechas, fotografías e invitaciones de los eventos de Radio Monte Alto.',
  keywords: [
    'eventos cristianos',
    'retiro de matrimonios',
    'retiro de jóvenes',
    'conferencia de pastores',
    'fiesta espiritual',
    'huancayo',
    'radio monte alto',
  ],
};

export default function EventosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-4">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[320px] w-[520px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5">
            <CalendarHeart className="h-3.5 w-3.5 text-yellow-400" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Agenda del ministerio
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text italic text-transparent">
              eventos
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400">
            Todo lo que la congregación vive fuera del horario del culto: retiros, conferencias y
            celebraciones. Aquí encuentras las fechas de lo que viene y el recuerdo de lo que ya
            pasó.
          </p>
        </div>
      </section>

      <EventosEspecialesSection mostrarEnlaceATodos={false} mostrarEncabezado={false} />
    </>
  );
}

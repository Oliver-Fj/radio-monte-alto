import type { Metadata } from 'next';
import { Clock, HeartHandshake, Radio, Users } from 'lucide-react';
import PeticionOracionForm from '@/components/molecules/PeticionOracionForm';
import GoldTitle from '@/components/atoms/GoldTitle';

export const metadata: Metadata = {
  title: 'Peticiones de oración - Radio Monte Alto',
  description:
    'Envía tu petición de oración a Radio Monte Alto. El equipo de intercesión ora por cada petición recibida. Confidencial y gratuito.',
  keywords: ['petición de oración', 'oración', 'intercesión', 'radio cristiana', 'huancayo'],
};

const COMO_FUNCIONA = [
  {
    icono: Users,
    titulo: 'La lee el equipo de intercesión',
    texto: 'Un grupo de hermanos se reúne cada semana únicamente para orar por lo que llega aquí.',
  },
  {
    icono: Clock,
    titulo: 'Se ora la misma semana',
    texto: 'Las peticiones entran en la lista del día siguiente. Ninguna se queda sin leer.',
  },
  {
    icono: Radio,
    titulo: 'Solo al aire si tú lo autorizas',
    texto: 'Nada se menciona en el programa sin tu permiso expreso en el formulario.',
  },
];

export default function OracionPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-10">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg">
              <HeartHandshake className="h-8 w-8 text-white" aria-hidden />
            </span>
          </div>

          <GoldTitle as="h1" pie="Confidencial · Sin costo">
            Peticiones de oración
          </GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            «Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.» Escribe
            lo que llevas encima. Aquí hay quien ore contigo.
          </p>
        </div>
      </section>

      <section aria-label="Cómo se atienden las peticiones" className="bg-slate-950 pb-4">
        <div className="container mx-auto px-4">
          <ul className="mx-auto grid max-w-4xl list-none grid-cols-1 gap-4 p-0 md:grid-cols-3">
            {COMO_FUNCIONA.map(({ icono: Icono, titulo, texto }) => (
              <li
                key={titulo}
                className="tarjeta p-5 text-center"
              >
                <Icono className="mx-auto mb-3 h-6 w-6 text-emerald-600" aria-hidden />
                <h2 className="mb-1.5 font-semibold text-white">{titulo}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Formulario de petición" className="bg-slate-950 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl md:p-9">
            <h2 className="mb-1 font-serif text-2xl font-bold text-slate-900">
              Escribe tu petición
            </h2>
            <p className="mb-7 text-sm text-slate-500">
              Puedes hacerlo con tu nombre o de forma anónima. Los campos con * son obligatorios.
            </p>
            <PeticionOracionForm />
          </div>
        </div>
      </section>
    </>
  );
}

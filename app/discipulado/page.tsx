import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen } from 'lucide-react';
import DiscipuladoSection from '@/components/organisms/DiscipuladoSection';
import GoldTitle from '@/components/atoms/GoldTitle';

export const metadata: Metadata = {
  title: 'Discipulado Cristiano - Radio Monte Alto',
  description:
    'Ruta de discipulado de la congregación Monte Alto: cuatro niveles que acompañan al creyente desde sus primeros pasos hasta servir en un ministerio. Gratuito y abierto a todos.',
  keywords: [
    'discipulado cristiano',
    'estudio bíblico',
    'nuevos creyentes',
    'sana doctrina',
    'huancayo',
    'monte alto',
  ],
};

export default function DiscipuladoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-6">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Link
            href="/nuestra-iglesia"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-emerald-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Nuestra Iglesia
          </Link>

          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg">
              <BookOpen className="h-8 w-8 text-white" aria-hidden />
            </span>
          </div>

          <GoldTitle as="h1" pie="Gratuito · Abierto a todos">
            Discipulado Cristiano
          </GoldTitle>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-400">
            «Id, y haced discípulos a todas las naciones… enseñándoles que guarden todas las cosas
            que os he mandado.» El discipulado no es un curso que se aprueba: es el camino de toda
            la vida cristiana, y aquí lo caminamos acompañados.
          </p>
        </div>
      </section>

      <DiscipuladoSection />
    </>
  );
}

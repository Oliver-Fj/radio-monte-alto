import SectionTitle from '@/components/atoms/SectionTitle';
import VerseGlassGrid, { type VersiculoGlass } from '@/components/molecules/VerseGlassGrid';
import { BookOpen, Heart, Users } from 'lucide-react';

const versiculos: VersiculoGlass[] = [
  {
    texto: 'No dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.',
    referencia: 'Hebreos 10:25',
    theme: 'ocean',
    icon: Users,
  },
  {
    texto: 'Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.',
    referencia: 'Mateo 18:20',
    theme: 'solar',
    icon: Heart,
  },
  {
    texto: 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.',
    referencia: 'Hechos 2:42',
    theme: 'mint',
    icon: BookOpen,
  },
];

export default function CultosVersiculosSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="La Palabra de Dios sobre la congregación">
            Fundamento Bíblico
          </SectionTitle>
          <VerseGlassGrid versiculos={versiculos} />
        </div>
      </div>
    </section>
  );
}

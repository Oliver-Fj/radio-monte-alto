
import SectionTitle from '@/components/atoms/SectionTitle';
import VerseGlassGrid, { type VersiculoGlass } from '@/components/molecules/VerseGlassGrid';
import { BookOpen, TrendingUp, Globe } from 'lucide-react';

export default function FilialesVersiculosSection() {
  const versiculos: VersiculoGlass[] = [
    {
      texto: 'Ensancha el sitio de tu tienda, y las cortinas de tus habitaciones sean extendidas; no seas escasa; alarga tus cuerdas, y refuerza tus estacas.',
      referencia: 'Isaías 54:2',
      theme: 'mint',
      icon: TrendingUp,
    },
    {
      texto: 'Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.',
      referencia: 'Hechos 1:8',
      theme: 'ocean',
      icon: Globe,
    },
    {
      texto: 'Id por todo el mundo y predicad el evangelio a toda criatura.',
      referencia: 'Marcos 16:15',
      theme: 'solar',
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="El mandato bíblico de expansión">
            Fundamento de Nuestra Expansión
          </SectionTitle>

          <VerseGlassGrid versiculos={versiculos} />

          {/* Versículo destacado */}
          <div className="mt-12 bg-gradient-to-br from-green-900 to-green-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <p className="text-2xl md:text-3xl font-serif italic mb-4 leading-relaxed">
              &ldquo;Y todos los días, en el templo y por las casas, no cesaban de enseñar 
              y predicar a Jesucristo&rdquo;
            </p>
            <p className="text-xl font-bold text-yellow-400">— Hechos 5:42</p>
          </div>
        </div>
      </div>
    </section>
  );
}

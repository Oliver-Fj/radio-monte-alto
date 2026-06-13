
import SectionTitle from '@/components/atoms/SectionTitle';
import { BookOpen, Heart, Users } from 'lucide-react';

export default function CultosVersiculosSection() {
  const versiculos = [
    {
      texto: 'No dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.',
      referencia: 'Hebreos 10:25',
      color: 'from-blue-600 to-blue-700',
      icon: Users,
    },
    {
      texto: 'Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.',
      referencia: 'Mateo 18:20',
      color: 'from-yellow-500 to-yellow-600',
      icon: Heart,
    },
    {
      texto: 'Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones.',
      referencia: 'Hechos 2:42',
      color: 'from-green-500 to-green-600',
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="La Palabra de Dios sobre la congregación">
            Fundamento Bíblico
          </SectionTitle>

          <div className="mt-12 space-y-8">
            {versiculos.map((versiculo, index) => {
              const Icon = versiculo.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${versiculo.color}`} />
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${versiculo.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-serif italic mb-4">
                          "{versiculo.texto}"
                        </p>
                        <p className="text-lg font-bold text-gray-900">
                          — {versiculo.referencia}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

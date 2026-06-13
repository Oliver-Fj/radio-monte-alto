
import SectionTitle from '@/components/atoms/SectionTitle';
import { BookOpen, TrendingUp, Globe } from 'lucide-react';

export default function FilialesVersiculosSection() {
  const versiculos = [
    {
      texto: 'Ensancha el sitio de tu tienda, y las cortinas de tus habitaciones sean extendidas; no seas escasa; alarga tus cuerdas, y refuerza tus estacas.',
      referencia: 'Isaías 54:2',
      color: 'from-green-500 to-green-600',
      icon: TrendingUp,
    },
    {
      texto: 'Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.',
      referencia: 'Hechos 1:8',
      color: 'from-blue-600 to-blue-700',
      icon: Globe,
    },
    {
      texto: 'Id por todo el mundo y predicad el evangelio a toda criatura.',
      referencia: 'Marcos 16:15',
      color: 'from-yellow-500 to-orange-500',
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

          {/* Versículo destacado */}
          <div className="mt-12 bg-gradient-to-br from-green-900 to-green-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <p className="text-2xl md:text-3xl font-serif italic mb-4 leading-relaxed">
              "Y todos los días, en el templo y por las casas, no cesaban de enseñar 
              y predicar a Jesucristo"
            </p>
            <p className="text-xl font-bold text-yellow-400">— Hechos 5:42</p>
          </div>
        </div>
      </div>
    </section>
  );
}

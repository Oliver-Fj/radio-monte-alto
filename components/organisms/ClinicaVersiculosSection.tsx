
import SectionTitle from '@/components/atoms/SectionTitle';
import { BookOpen, Heart, Cross } from 'lucide-react';

export default function ClinicaVersiculosSection() {
  const versiculos = [
    {
      texto: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.',
      referencia: 'Isaías 53:5',
      color: 'from-red-500 to-red-600',
      icon: Cross,
    },
    {
      texto: '¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará.',
      referencia: 'Santiago 5:14-15',
      color: 'from-blue-600 to-blue-700',
      icon: Heart,
    },
    {
      texto: 'Este género no puede salir sino con oración y ayuno.',
      referencia: 'Marcos 9:29',
      color: 'from-orange-500 to-red-500',
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="La Palabra de Dios es nuestro fundamento">
            Versículos Clave
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

          {/* Versículo destacado adicional */}
          <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <p className="text-2xl md:text-3xl font-serif italic mb-4 leading-relaxed">
              "El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; 
              me ha enviado a sanar a los quebrantados de corazón; a pregonar libertad a los cautivos"
            </p>
            <p className="text-xl font-bold text-yellow-400">— Lucas 4:18</p>
          </div>
        </div>
      </div>
    </section>
  );
}

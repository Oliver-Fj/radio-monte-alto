
import SectionTitle from '@/components/atoms/SectionTitle';
import { Heart, Flame, Shield, Cross } from 'lucide-react';

export default function ClinicaComoFuncionaSection() {
  const pasos = [
    {
      numero: '01',
      titulo: 'Ayuno',
      descripcion: 'La persona debe ayunar antes de recibir ministración. "Este género no sale sino con oración y ayuno" (Marcos 9:29)',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      numero: '02',
      titulo: 'Oración',
      descripcion: 'Ministramos a través de la oración intercesora, invocando el nombre poderoso de Jesús sobre cada necesidad.',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      numero: '03',
      titulo: 'Guerra Espiritual',
      descripcion: 'Confrontamos las fuerzas de las tinieblas en el nombre de Jesús, declarando liberación y sanidad.',
      icon: Shield,
      color: 'from-blue-600 to-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      numero: '04',
      titulo: 'Liberación',
      descripcion: 'El poder de Dios rompe las cadenas, sana el alma y, por añadidura, restaura el cuerpo físico.',
      icon: Cross,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="El proceso de sanidad divina">
            ¿Cómo Funciona?
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {pasos.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${paso.borderColor} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
                >
                  {/* Número decorativo */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-2xl font-black text-gray-400">{paso.numero}</span>
                  </div>

                  {/* Icono */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${paso.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{paso.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{paso.descripcion}</p>
                </div>
              );
            })}
          </div>

          {/* Nota importante */}
          <div className="mt-12 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-l-4 border-red-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-900 mb-2">Requisito Importante</h4>
                <p className="text-gray-700 leading-relaxed">
                  El ayuno es <strong>requisito fundamental</strong> para recibir ministración en la Clínica Celestial. 
                  Como establece la Palabra de Dios, hay liberaciones que solo se logran con oración y ayuno. 
                  Esto no es una tradición humana, sino un mandato bíblico para confrontar fuerzas espirituales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

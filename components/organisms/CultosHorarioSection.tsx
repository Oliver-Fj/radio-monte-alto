
import SectionTitle from '@/components/atoms/SectionTitle';
import { Clock, Users, Music, BookOpen, Heart, MessageCircle } from 'lucide-react';

export default function CultosHorarioSection() {
  const programa = [
    {
      hora: '8:00 AM',
      actividad: 'Escuela Dominical',
      descripcion: 'Enseñanza bíblica por grupos de edad',
      icon: BookOpen,
      color: 'from-green-500 to-green-600',
    },
    {
      hora: '9:30 AM',
      actividad: 'Adoración y Alabanza',
      descripcion: 'Tiempo de alabanza congregacional',
      icon: Music,
      color: 'from-blue-500 to-blue-600',
    },
    {
      hora: '10:30 AM',
      actividad: 'Predicación de la Palabra',
      descripcion: 'Mensaje bíblico ungido',
      icon: BookOpen,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      hora: '12:00 PM',
      actividad: 'Oración',
      descripcion: 'Intercesión y peticiones',
      icon: Heart,
      color: 'from-red-500 to-red-600',
    },
    {
      hora: '1:00 PM',
      actividad: 'Consejería',
      descripcion: 'Atención personalizada y ministerio',
      icon: MessageCircle,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Planifica tu visita">
            Horario del Culto
          </SectionTitle>

          {/* Horario General */}
          <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl mb-12">
            <Clock className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Domingos</h3>
            <p className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">8:00 AM - 3:15 PM</p>
            <p className="text-xl text-blue-200">Un día completo en la presencia de Dios</p>
          </div>

          {/* Itinerario Detallado */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Itinerario Detallado</h3>
            <div className="space-y-4">
              {programa.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-bold text-gray-900">{item.actividad}</h4>
                          <span className="text-lg font-mono font-bold text-blue-900">{item.hora}</span>
                        </div>
                        <p className="text-gray-600">{item.descripcion}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nota Final */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-yellow-900 mb-2">Para Toda la Familia</h4>
                <p className="text-gray-700">
                  Nuestro culto dominical está diseñado para toda la familia. Durante la Escuela Dominical, 
                  tenemos clases adaptadas por edades para que cada miembro de la familia reciba enseñanza apropiada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

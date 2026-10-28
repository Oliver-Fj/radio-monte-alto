
import SectionTitle from '@/components/atoms/SectionTitle';
import GlassCard3D from '@/components/molecules/GlassCard3D';
import { Clock, Users, Music, BookOpen, Heart, MessageCircle } from 'lucide-react';

export default function CultosHorarioSection() {
  const programa = [
    {
      hora: '8:00 AM',
      actividad: 'Escuela Dominical',
      descripcion: 'Enseñanza bíblica por grupos de edad',
      icon: BookOpen,
      theme: 'mint' as const,
    },
    {
      hora: '9:30 AM',
      actividad: 'Adoración y Alabanza',
      descripcion: 'Tiempo de alabanza congregacional',
      icon: Music,
      theme: 'ocean' as const,
    },
    {
      hora: '10:30 AM',
      actividad: 'Predicación de la Palabra',
      descripcion: 'Mensaje bíblico ungido',
      icon: BookOpen,
      theme: 'solar' as const,
    },
    {
      hora: '12:00 PM',
      actividad: 'Oración',
      descripcion: 'Intercesión y peticiones',
      icon: Heart,
      theme: 'flame' as const,
    },
    {
      hora: '1:00 PM',
      actividad: 'Consejería',
      descripcion: 'Atención personalizada y ministerio',
      icon: MessageCircle,
      theme: 'royal' as const,
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
            <Clock className="w-16 h-16 mx-auto mb-4 text-yellow-400" aria-hidden="true" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Domingos</h3>
            <p className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">8:00 AM - 3:15 PM</p>
            <p className="text-xl text-blue-200">Un día completo en la presencia de Dios</p>
          </div>

          {/* Itinerario Detallado */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Itinerario Detallado</h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {programa.map((item) => {
                const Icon = item.icon;
                return (
                  <GlassCard3D key={item.hora} theme={item.theme} icon={<Icon className="w-5 h-5" aria-hidden="true" />}>
                    <div className="px-7 pb-7 pt-24">
                      <p className="font-mono font-bold text-sm tracking-widest [color:var(--g3-title)] opacity-80">{item.hora}</p>
                      <h4 className="mt-1 text-xl font-bold [color:var(--g3-title)]">{item.actividad}</h4>
                      <p className="mt-2 text-sm leading-relaxed [color:var(--g3-body)]">{item.descripcion}</p>
                    </div>
                  </GlassCard3D>
                );
              })}
            </div>
          </div>

          {/* Nota Final */}
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" aria-hidden="true" />
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


import SectionTitle from '@/components/atoms/SectionTitle';
import VerseGlassGrid, { type VersiculoGlass } from '@/components/molecules/VerseGlassGrid';
import { BookOpen, Heart, Cross } from 'lucide-react';

export default function ClinicaVersiculosSection() {
  const versiculos: VersiculoGlass[] = [
    {
      texto: 'Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.',
      referencia: 'Isaías 53:5',
      theme: 'flame',
      icon: Cross,
    },
    {
      texto: '¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará.',
      referencia: 'Santiago 5:14-15',
      theme: 'ocean',
      icon: Heart,
    },
    {
      texto: 'Este género no puede salir sino con oración y ayuno.',
      referencia: 'Marcos 9:29',
      theme: 'solar',
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

          <VerseGlassGrid versiculos={versiculos} />

          {/* Versículo destacado adicional */}
          <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <p className="text-2xl md:text-3xl font-serif italic mb-4 leading-relaxed">
              &ldquo;El Espíritu del Señor está sobre mí, por cuanto me ha ungido para dar buenas nuevas a los pobres; 
              me ha enviado a sanar a los quebrantados de corazón; a pregonar libertad a los cautivos&rdquo;
            </p>
            <p className="text-xl font-bold text-yellow-400">— Lucas 4:18</p>
          </div>
        </div>
      </div>
    </section>
  );
}

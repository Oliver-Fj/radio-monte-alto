
import SectionTitle from '@/components/atoms/SectionTitle';
import { Target, TrendingUp, Globe } from 'lucide-react';

export default function FilialesVisionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Expandiendo el Reino de Dios">
            Nuestra Visión de Expansión
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-green-900 font-medium italic text-lg">
                  "Ensancha el sitio de tu tienda, y las cortinas de tus habitaciones sean extendidas; 
                  no seas escasa; alarga tus cuerdas, y refuerza tus estacas."
                  <span className="block text-sm mt-2 text-green-700">- Isaías 54:2</span>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                La Iglesia Monte Alto no se limita a una ubicación. Dios nos ha dado la visión de 
                <strong className="text-green-600"> alcanzar todo el Perú</strong> con el mensaje transformador del Evangelio.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Cada filial es una extensión del ministerio central, llevando la misma unción, 
                la misma doctrina y el mismo compromiso con la Palabra de Dios. Estamos 
                <strong> ensanchando el sitio de nuestra tienda</strong>, estableciendo iglesias 
                que predican el Evangelio puro en cada región del país.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic text-lg">
                  "Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, 
                  y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra."
                  <span className="block text-sm mt-2 text-blue-700">- Hechos 1:8</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Estructura Unida</h3>
                </div>
                <p className="text-gray-700">
                  Todas nuestras filiales dependen de la sede central en Huancayo, 
                  manteniendo unidad en doctrina y visión ministerial.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Crecimiento Continuo</h3>
                </div>
                <p className="text-gray-700">
                  Estamos en constante expansión, con planes de abrir más filiales 
                  en ciudades estratégicas del Perú.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-2 border-yellow-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-900">Alcance Nacional</h3>
                </div>
                <p className="text-gray-700">
                  De la costa a la selva, del norte al sur, llevamos el mensaje 
                  de salvación a toda la nación peruana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

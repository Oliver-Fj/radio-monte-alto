
import SectionTitle from '@/components/atoms/SectionTitle';
import { Heart, Shield, Zap } from 'lucide-react';

export default function ClinicaQueEsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Un ministerio de sanidad integral">
            ¿Qué es la Clínica Celestial?
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <p className="text-red-900 font-medium italic text-lg">
                  "No he venido a llamar a justos, sino a pecadores al arrepentimiento" 
                  <span className="block text-sm mt-2 text-red-700">- Mateo 9:13</span>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                La Clínica Celestial es un ministerio que nació junto con la Iglesia Monte Alto, 
                fundamentado en las palabras de Jesús: <strong>"No necesitan médico los sanos, sino los enfermos"</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Aquí atendemos principalmente la <strong className="text-red-600">sanidad del alma</strong>, 
                y por añadidura, Dios sana también el cuerpo físico. Creemos en el poder de la oración, 
                el ayuno y la guerra espiritual para liberar a los cautivos.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Como dice la Escritura: <em>"Este género no sale sino con oración y ayuno"</em> (Marcos 9:29).
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg border-2 border-red-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900">Sanidad del Alma</h3>
                </div>
                <p className="text-gray-700">
                  Ministramos liberación espiritual, sanidad emocional y restauración del corazón.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Guerra Espiritual</h3>
                </div>
                <p className="text-gray-700">
                  A través de la oración y el ayuno, confrontamos las fuerzas espirituales de maldad.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-2 border-yellow-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-900">Sanidad Física</h3>
                </div>
                <p className="text-gray-700">
                  Por añadidura, Dios sana el cuerpo físico cuando el alma es restaurada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

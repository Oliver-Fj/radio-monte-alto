
import SectionTitle from '@/components/atoms/SectionTitle';
import { Users, Heart, BookOpen } from 'lucide-react';

export default function CultosQueEsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="La importancia de congregarnos">
            ¿Por Qué Culto Dominical?
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic text-lg">
                  "No dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; 
                  y tanto más, cuanto veis que aquel día se acerca."
                  <span className="block text-sm mt-2 text-blue-700">- Hebreos 10:25</span>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                El culto dominical no es una tradición religiosa, sino un <strong className="text-blue-900">mandato bíblico</strong>. 
                Dios nos diseñó para vivir en comunidad, adorar juntos y fortalecernos mutuamente en la fe.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Cada domingo apartamos tiempo para reunirnos como familia de Dios, dejando a un lado 
                las ocupaciones del mundo para enfocarnos en lo eterno: <strong>adorar al Creador</strong>, 
                recibir Su Palabra y edificarnos los unos a los otros.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                En tiempos donde muchos han dejado de congregarse, nosotros permanecemos firmes, 
                sabiendo que <em>"tanto más, cuanto veis que aquel día se acerca"</em>.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Comunión</h3>
                </div>
                <p className="text-gray-700">
                  Nos fortalecemos juntos, compartiendo la vida en Cristo y edificándonos mutuamente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl shadow-lg border-2 border-yellow-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-yellow-600 rounded-full flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-900">Adoración</h3>
                </div>
                <p className="text-gray-700">
                  Elevamos nuestras voces en alabanza y adoración al único Dios verdadero.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border-2 border-green-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900">Palabra</h3>
                </div>
                <p className="text-gray-700">
                  Recibimos enseñanza bíblica sólida que transforma nuestras vidas y renueva nuestras mentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

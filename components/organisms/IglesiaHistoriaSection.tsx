
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle';

export default function IglesiaHistoriaSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Nuestra trayectoria de fe">
            Nuestra Historia
          </SectionTitle>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-yellow-400/30 rounded-2xl translate-x-2 translate-y-2" />
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/iglesia/historia.jpg"
                  alt="Historia de la Iglesia"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-xl mb-1">Fundada en Monte Alto</p>
                  <p className="text-sm text-yellow-300">Cuna del avivamiento</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic text-lg">
                  "No con ejército, ni con fuerza, sino con mi Espíritu, ha dicho Jehová de los ejércitos."
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                La Iglesia Cuartel General nació del llamado irrevocable de Dios
                para establecer un ministerio fundamentado en la Palabra. Desde nuestros inicios en
                <span className="font-bold text-blue-900"> Huancayo</span>, hemos sido testigos del mover sobrenatural de Dios.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dios transforma vidas, sana enfermos, liberta cautivos y restaura familias.
                Hoy, ese fuego continúa ardiendo y expandiéndose a través de las ondas radiales
                y nuestras filiales.
              </p>

              <div className="pt-4">
                <Link href="/nosotros" className="inline-flex items-center text-blue-900 font-bold hover:text-yellow-600 transition-colors">
                  Leer historia completa <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

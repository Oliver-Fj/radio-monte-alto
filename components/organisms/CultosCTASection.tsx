
import Link from 'next/link';
import { Calendar, MapPin, Radio, Church } from 'lucide-react';

export default function CultosCTASection() {
  return (
    <section className="py-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 border-2 border-white/20">
          <Church className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Te Esperamos Este Domingo
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Forma parte de nuestra familia en Cristo. Ven y experimenta la presencia de Dios 
          en adoración, Palabra y comunión.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Calendar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Todos los Domingos</h3>
            <p className="text-sm text-blue-100">8:00 AM - 3:15 PM</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Monte Alto</h3>
            <p className="text-sm text-blue-100">Huancayo, Junín</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Radio className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Transmisión</h3>
            <p className="text-sm text-blue-100">En vivo por radio</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Cómo Llegar
          </Link>
          <Link
            href="/nuestra-iglesia"
            className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Church className="w-5 h-5" />
            Conocer Más
          </Link>
        </div>
      </div>
    </section>
  );
}

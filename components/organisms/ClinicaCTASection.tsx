
import Link from 'next/link';
import { Phone, MapPin, Radio, Heart } from 'lucide-react';

export default function ClinicaCTASection() {
  return (
    <section className="py-20 relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-blue-900/50" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 border-2 border-white/20">
          <Heart className="w-10 h-10 text-white animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Necesitas Sanidad?
        </h2>
        <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
          No estás solo. Jesús vino a sanar a los quebrantados de corazón y a liberar a los cautivos. 
          Ven a la Clínica Celestial y experimenta el poder sanador de Dios.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Llámanos</h3>
            <p className="text-sm text-red-100">(Número específico)</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Visítanos</h3>
            <p className="text-sm text-red-100">Monte Alto, Huancayo</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Radio className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Escúchanos</h3>
            <p className="text-sm text-red-100">Radio Monte Alto 24/7</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-yellow-400 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contactar Clínica
          </Link>
          <Link
            href="/nuestra-iglesia"
            className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Cómo Llegar
          </Link>
        </div>
      </div>
    </section>
  );
}

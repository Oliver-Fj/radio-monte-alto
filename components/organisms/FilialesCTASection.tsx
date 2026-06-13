
import Link from 'next/link';
import { MapPin, Phone, Church, Network } from 'lucide-react';

export default function FilialesCTASection() {
  return (
    <section className="py-20 relative bg-gradient-to-br from-green-900 via-green-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-blue-900/50" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 border-2 border-white/20">
          <Network className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Únete a una Filial Cercana
        </h2>
        <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Encuentra la iglesia más cercana a ti y sé parte de la familia Monte Alto. 
          Juntos estamos expandiendo el Reino de Dios en todo el Perú.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Encuéntranos</h3>
            <p className="text-sm text-green-100">10 filiales en Perú</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Contáctanos</h3>
            <p className="text-sm text-green-100">Llama a la filial</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
            <Church className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Visítanos</h3>
            <p className="text-sm text-green-100">Cada domingo</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contactar
          </Link>
          <Link
            href="/cultos-dominicales"
            className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <Church className="w-5 h-5" />
            Ver Horarios
          </Link>
        </div>
      </div>
    </section>
  );
}

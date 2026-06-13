
import SectionTitle from '@/components/atoms/SectionTitle';
import { MapPin } from 'lucide-react';
import { filiales } from '@/lib/data/filiales';

export default function FilialesMapaSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Presencia en todo el territorio nacional">
            Mapa de Filiales
          </SectionTitle>

          <div className="mt-12 bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-100">
            {/* Placeholder para mapa - Puedes integrar Google Maps o Leaflet después */}
            <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/peru-map.svg')] bg-center bg-contain bg-no-repeat opacity-20" />
              
              <div className="relative z-10 text-center">
                <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {filiales.length} Filiales en Perú
                </h3>
                <p className="text-gray-600">
                  Mapa interactivo próximamente
                </p>
              </div>

              {/* Pines decorativos */}
              <div className="absolute top-1/4 left-1/3 animate-pulse">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <div className="absolute top-1/2 left-1/2 animate-pulse delay-100">
                <MapPin className="w-10 h-10 text-blue-600" />
              </div>
              <div className="absolute top-3/4 right-1/3 animate-pulse delay-200">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
            </div>

            {/* Leyenda */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-600">Sede Central</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-600 rounded-full" />
                <span className="text-sm text-gray-600">Filiales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import SectionTitle from '@/components/atoms/SectionTitle';
import { MapPin, Phone, User, Calendar, Clock, Star } from 'lucide-react';
import { filiales } from '@/lib/data/filiales';

export default function FilialesListaSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle centered subtitle="Encuentra la filial más cercana a ti">
            Todas Nuestras Filiales
          </SectionTitle>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filiales.map((filial) => (
              <div 
                key={filial.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                  filial.esMatriz 
                    ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-white' 
                    : 'border-gray-100 hover:border-green-300'
                }`}
              >
                {/* Header con badge */}
                <div className={`h-2 ${filial.esMatriz ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-green-500 to-green-600'}`} />
                
                <div className="p-6">
                  {/* Badge Sede Central */}
                  {filial.esMatriz && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold mb-4">
                      <Star className="w-3 h-3" />
                      Sede Central
                    </div>
                  )}

                  {/* Nombre y Ciudad */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{filial.nombre}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">{filial.ciudad}, {filial.region}</span>
                  </div>

                  {/* Dirección */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">{filial.direccion}</p>
                  </div>

                  {/* Pastor */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Pastor/Líder</p>
                      <p className="text-sm font-bold text-gray-900">{filial.pastor}</p>
                    </div>
                  </div>

                  {/* Días */}
                  <div className="flex items-start gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Días de culto</p>
                      <div className="flex flex-wrap gap-1">
                        {filial.dias.map((dia, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded"
                          >
                            {dia}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-2 mb-4">
                    <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Horario</p>
                      <p className="text-sm text-gray-700">{filial.horario}</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="pt-4 border-t border-gray-200">
                    <a 
                      href={`tel:${filial.telefono}`}
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-bold text-sm hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      {filial.telefono}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota final */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-6 rounded-r-xl">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">¿No hay filial en tu ciudad?</h4>
                <p className="text-gray-700">
                  Estamos en constante crecimiento. Si estás interesado en abrir una filial de Monte Alto 
                  en tu ciudad o deseas más información, contáctanos. Dios puede estar llamándote a ser 
                  parte de esta expansión del Reino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

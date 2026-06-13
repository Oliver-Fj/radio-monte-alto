
import SectionTitle from '@/components/atoms/SectionTitle';
import { Clock, Calendar, MapPin, Phone } from 'lucide-react';

export default function ClinicaHorariosSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionTitle centered subtitle="Estamos disponibles para ti">
            Horarios y Ubicación
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Horario</h3>
                  <p className="text-sm text-gray-600">Atención continua</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-bold text-gray-900">Todos los días</p>
                    <p className="text-sm text-gray-600">Lunes a Domingo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                  <Clock className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-bold text-gray-900">24 horas</p>
                    <p className="text-sm text-gray-600">Sin interrupción</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-yellow-50 rounded-lg border border-red-200">
                <p className="text-sm font-bold text-red-900 text-center">
                  ✓ Pase Libre - No necesitas cita previa
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Ubicación</h3>
                  <p className="text-sm text-gray-600">Dónde encontrarnos</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Iglesia Monte Alto</p>
                  <p className="text-gray-600 leading-relaxed">
                    Cuartel General de Jehová de los Ejércitos<br />
                    Monte Alto, Huancayo, Junín
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-blue-900">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="text-sm text-gray-600">Contacto Clínica Celestial</p>
                      <p className="font-bold">(Número específico aquí)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

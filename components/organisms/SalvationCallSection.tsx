
import { Heart, BookOpen, Users } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';

export default function SalvationCallSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Heart className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-900">
            Quieres Conocer a Jesus?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Descubre el camino al cielo y la vida eterna. Dios te ama y tiene un plan maravilloso para tu vida.
          </p>
          <Button href="/como-ir-al-cielo" variant="primary" size="lg">
            Encuentro con Dios
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border-2 border-orange-200 text-center shadow-xl">
            <BookOpen className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Estudia la Palabra</h3>
            <p className="text-gray-600 text-sm">
              Recursos biblicos para crecer en tu fe
            </p>
          </Card>
          
          <Card className="bg-white border-2 border-orange-200 text-center shadow-xl">
            <Heart className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Encuentra Salvacion</h3>
            <p className="text-gray-600 text-sm">
              El mensaje mas importante que escucharas
            </p>
          </Card>
          
          <Card className="bg-white border-2 border-orange-200 text-center shadow-xl">
            <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Unete a la Comunidad</h3>
            <p className="text-gray-600 text-sm">
              Conecta con hermanos en la fe
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

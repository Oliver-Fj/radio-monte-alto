import Card from '@/components/atoms/Card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonioCardProps {
  nombre: string;
  testimonio: string;
  ciudad?: string;
  foto?: string;
}

export default function TestimonioCard({ 
  nombre, 
  testimonio, 
  ciudad,
  foto 
}: TestimonioCardProps) {
  return (
    <Card hover className="border-2 border-gray-300 h-full">
      <div className="flex flex-col h-full">
        {/* Icono de comillas */}
        <Quote className="w-10 h-10 text-blue-900 mb-4 opacity-50" />
        
        {/* Testimonio */}
        <p className="text-gray-700 italic leading-relaxed mb-6 flex-1">
          "{testimonio}"
        </p>
        
        {/* Autor */}
        <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-200">
          {foto ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={foto}
                alt={nombre}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">
                {nombre.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-bold text-blue-900">{nombre}</p>
            {ciudad && (
              <p className="text-sm text-gray-500">{ciudad}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

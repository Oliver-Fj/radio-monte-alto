
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import Card from '@/components/atoms/Card';

interface ArticleCardProps {
  id: string;
  titulo: string;
  extracto: string;
  imagen?: string;
  fecha: string;
  categoria: string;
  tiempoLectura?: string;
}

export default function ArticleCard({
  id,
  titulo,
  extracto,
  imagen,
  fecha,
  categoria,
  tiempoLectura = '5 min',
}: ArticleCardProps) {
  return (
    <Card hover className="overflow-hidden p-0 h-full flex flex-col border-2 border-gray-300 shadow-xl group">
      {/* Imagen con overlay */}
      <div className="relative h-56 w-full bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        {imagen ? (
          <>
            <Image
              src={imagen}
              alt={titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
            <div className="text-white/20 text-6xl font-bold">RMA</div>
          </div>
        )}
        
        {/* Badge de categoria */}
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {categoria}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col bg-white">
        {/* Titulo */}
        <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {titulo}
        </h3>
        
        {/* Extracto */}
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3 leading-relaxed">
          {extracto}
        </p>
        
        {/* Meta info - SIN AUTOR, con tiempo de lectura */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-200">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {fecha}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {tiempoLectura} lectura
          </span>
        </div>
        
        {/* Boton leer mas */}
        <Link
          href={`/recursos/${id}`}
          className="flex items-center justify-center gap-2 bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all group-hover:gap-3"
        >
          Leer mas
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
}

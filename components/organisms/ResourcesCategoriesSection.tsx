
import Card from '@/components/atoms/Card';
import SectionTitle from '@/components/atoms/SectionTitle';
import { BookOpen, Heart, Users, Lightbulb, Church, Baby } from 'lucide-react';
import Link from 'next/link';

export default function ResourcesCategoriesSection() {
  const categorias = [
    {
      icon: BookOpen,
      titulo: 'Estudio Biblico',
      descripcion: 'Profundiza en las Escrituras',
      articulos: 15,
    },
    {
      icon: Heart,
      titulo: 'Vida Cristiana',
      descripcion: 'Consejos para tu diario vivir',
      articulos: 12,
    },
    {
      icon: Users,
      titulo: 'Familia',
      descripcion: 'Fortaleciendo el hogar cristiano',
      articulos: 8,
    },
    {
      icon: Church,
      titulo: 'Evangelismo',
      descripcion: 'Compartiendo el mensaje de salvacion',
      articulos: 10,
    },
    {
      icon: Lightbulb,
      titulo: 'Discipulado',
      descripcion: 'Creciendo en madurez espiritual',
      articulos: 14,
    },
    {
      icon: Baby,
      titulo: 'Ninos',
      descripcion: 'EnseÑanza para los pequenos',
      articulos: 6,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          subtitle="Explora recursos organizados por tema"
        >
          Categorias de Contenido
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => {
            const Icon = categoria.icon;
            return (
              <Link key={categoria.titulo} href={`/recursos?categoria=${categoria.titulo}`}>
                <Card hover className="border-2 border-gray-300 cursor-pointer h-full text-center">
                  {/* Icono con el MISMO estilo que en Quienes Somos */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-blue-900" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {categoria.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {categoria.descripcion}
                  </p>
                  <p className="text-xs text-gray-500">
                    {categoria.articulos} articulos disponibles
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

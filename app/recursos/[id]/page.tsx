import { notFound } from 'next/navigation';
import { getArticuloById } from '@/lib/data/articulos';
import Image from 'next/image';
import { Calendar, Clock, Tag, Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ShareButtons from '@/components/molecules/ShareButtons';

// ✅ AGREGADO: le dice a Next.js qué páginas generar en el build estático
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

interface ArticuloPageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticuloPage({ params }: ArticuloPageProps) {
  const resolvedParams = await params;
  const articulo = await getArticuloById(resolvedParams.id);

  if (!articulo) {
    notFound();
  }

  const currentUrl = `https://radiomontealto.com/recursos/${articulo.id}`;

  const renderContent = (content: string) => {
    const sections = content.split('\n\n');

    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-blue-900 mt-8 mb-4">{section.replace('## ', '')}</h2>;
      }
      if (section.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-blue-900 mt-6 mb-3">{section.replace('### ', '')}</h3>;
      }
      if (section.includes('- **') || section.startsWith('- ')) {
        const items = section.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-4 ml-4">
            {items.map((item, i) => {
              const cleaned = item.replace('- ', '');
              const match = cleaned.match(/\*\*(.*?)\*\*: (.*)/);
              if (match) {
                return <li key={i}><strong className="font-bold text-blue-900">{match[1]}</strong>: {match[2]}</li>;
              }
              return <li key={i}>{cleaned}</li>;
            })}
          </ul>
        );
      }
      if (section.match(/^\d+\. \*\*/)) {
        const items = section.split('\n').filter(line => line.match(/^\d+\./));
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 mb-4 ml-4">
            {items.map((item, i) => {
              const match = item.match(/\d+\. \*\*(.*?)\*\*(.*)/);
              if (match) {
                return <li key={i}><strong className="font-bold text-blue-900">{match[1]}</strong>{match[2]}</li>;
              }
              return <li key={i}>{item.replace(/^\d+\. /, '')}</li>;
            })}
          </ol>
        );
      }
      return <p key={index} className="mb-4 text-gray-700 leading-relaxed">{section}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Link href="/recursos" className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition mb-6">
            <ArrowLeft className="w-4 h-4" />
            Volver a Recursos
          </Link>

          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Tag className="w-4 h-4" />
              {articulo.categoria}
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{articulo.titulo}</h1>

            <div className="flex flex-wrap items-center gap-4 text-blue-200">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {articulo.fecha}
              </span>
              {articulo.tiempoLectura && (
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {articulo.tiempoLectura} de lectura
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {articulo.imagen && (
        <section className="relative h-96 bg-gray-200">
          <Image src={articulo.imagen} alt={articulo.titulo} fill className="object-cover" priority />
        </section>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {articulo.pdfUrl && (
              <div className="mb-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Descarga este articulo</h3>
                    <p className="text-sm text-gray-600">Disponible en formato PDF para leer sin conexion</p>
                  </div>
                  <Link href={articulo.pdfUrl} download className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition shadow-lg hover:shadow-xl whitespace-nowrap">
                    <Download className="w-5 h-5" />
                    Descargar PDF
                  </Link>
                </div>
              </div>
            )}

            <article className="prose prose-lg max-w-none mb-8">
              {renderContent(articulo.contenido)}
            </article>

            <ShareButtons url={currentUrl} title={articulo.titulo} />

            {articulo.tags && articulo.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t-2 border-gray-200">
                <h4 className="font-bold text-gray-700 uppercase text-sm mb-3">Leer sobre:</h4>
                <div className="flex flex-wrap gap-2">
                  {articulo.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Te gusto este articulo?</h3>
              <p className="mb-4 text-blue-100">Comparte la Palabra de Dios con otros</p>
              <Link href="/recursos" className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
                Ver mas articulos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

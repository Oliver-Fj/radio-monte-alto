import React from 'react';
import { BookOpen, ArrowRight, Calendar, Clock, Bookmark } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; 

// --- DATOS MOCK (Para visualización inmediata) ---
const articulosDestacados = [
  {
    id: '1',
    titulo: "El Poder de la Oración en Tiempos de Crisis",
    extracto: "Descubre cómo la oración ferviente puede transformar no solo tus circunstancias, sino tu corazón en medio de la tormenta...",
    fecha: "22 Nov, 2025",
    categoria: "Vida Espiritual",
    tiempoLectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '2',
    titulo: "Caminando en Integridad",
    extracto: "Un análisis profundo sobre el carácter cristiano y la importancia de mantener nuestros valores inquebrantables en un mundo cambiante...",
    fecha: "18 Nov, 2025",
    categoria: "Estudio Bíblico",
    tiempoLectura: "8 min",
    imagen: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '3',
    titulo: "La Promesa del Consolador",
    extracto: "Entendiendo el rol vital del Espíritu Santo en nuestra vida diaria como guía, maestro y fuente inagotable de poder...",
    fecha: "10 Nov, 2025",
    categoria: "Teología",
    tiempoLectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1000&auto=format&fit=crop"
  }
];

// --- COMPONENTE DE TARJETA ---
const LuxuryArticleCard = ({ articulo }: { articulo: typeof articulosDestacados[0] }) => {
  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2">

      {/* IMAGEN HEADER */}
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <Image
          src={articulo.imagen}
          alt={articulo.titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Badge Categoría Flotante */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur text-yellow-700 shadow-md border border-yellow-500/10">
            {articulo.categoria}
          </span>
        </div>
      </div>

      {/* CONTENIDO CARD */}
      <div className="flex-1 p-8 flex flex-col relative">
        {/* Decoración sutil */}
        <div className="absolute top-0 right-8 w-12 h-1 bg-yellow-500 rounded-b-md shadow-sm opacity-50 group-hover:h-2 group-hover:opacity-100 transition-all duration-300" />

        {/* Metadatos */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-yellow-500" />
            <span>{articulo.fecha}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-yellow-500" />
            <span>{articulo.tiempoLectura}</span>
          </div>
        </div>

        {/* Título — ✅ <Link> en vez de <a> */}
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors">
          <Link href={`/recursos/${articulo.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {articulo.titulo}
          </Link>
        </h3>

        {/* Extracto */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
          {articulo.extracto}
        </p>

        {/* Footer Card */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-yellow-500/20 transition-colors">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-yellow-600 transition-colors flex items-center gap-2">
            Leer Artículo <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
          <Bookmark className="w-4 h-4 text-slate-300 group-hover:text-yellow-500 transition-colors" />
        </div>
      </div>
    </article>
  );
};

// --- SECCIÓN PRINCIPAL ---
export default function ArticlesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">

      {/* --- FONDO AMBIENTAL --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gray-50 border border-yellow-600/20 shadow-[0_0_20px_rgba(202,138,4,0.15)]">
            <BookOpen className="w-6 h-6 text-yellow-600" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 tracking-tight">
            Recursos <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Espirituales</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Nutre tu espíritu con mensajes de enseñanza, edificación y crecimiento profundo basados en la Palabra.
          </p>
        </div>

        {/* --- GRID DE ARTÍCULOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articulosDestacados.map((articulo) => (
            <LuxuryArticleCard key={articulo.id} articulo={articulo} />
          ))}
        </div>

        {/* --- CTA BUTTON — ✅ <Link> en vez de <a> --- */}
        <div className="text-center">
          <Link
            href="/recursos"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-slate-900 overflow-hidden rounded-full shadow-xl hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 border border-white/10 rounded-full" />

            <BookOpen className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
            <span className="relative z-10 text-sm font-bold tracking-[0.15em] text-white uppercase group-hover:text-yellow-50 transition-colors">
              Explorar Biblioteca
            </span>
            <ArrowRight className="w-5 h-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

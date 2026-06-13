'use client';

import React, { useState } from 'react';
import { BookOpen, ArrowRight, Calendar, Clock, Bookmark, Search, Filter } from 'lucide-react';

// --- DATOS MOCK (Simulando tu base de datos para la vista previa) ---
const todosLosArticulos = [
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
    extracto: "Un análisis profundo sobre el carácter cristiano y la importancia de mantener nuestros valores inquebrantables...",
    fecha: "18 Nov, 2025",
    categoria: "Estudio Bíblico",
    tiempoLectura: "8 min",
    imagen: "https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '3',
    titulo: "La Promesa del Consolador",
    extracto: "Entendiendo el rol vital del Espíritu Santo en nuestra vida diaria como guía, maestro y fuente inagotable...",
    fecha: "10 Nov, 2025",
    categoria: "Teología",
    tiempoLectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '4',
    titulo: "Liderazgo con Propósito",
    extracto: "Principios bíblicos para liderar con humildad y visión en el ministerio, el trabajo y la familia...",
    fecha: "05 Nov, 2025",
    categoria: "Liderazgo",
    tiempoLectura: "7 min",
    imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '5',
    titulo: "La Familia como Diseño Divino",
    extracto: "Restaurando los altares familiares y fortaleciendo los lazos del hogar bajo la cobertura de Dios...",
    fecha: "28 Oct, 2025",
    categoria: "Familia",
    tiempoLectura: "5 min",
    imagen: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: '6',
    titulo: "Evangelismo en la Era Digital",
    extracto: "Cómo usar las herramientas modernas para llevar el mensaje antiguo de la cruz a una nueva generación...",
    fecha: "15 Oct, 2025",
    categoria: "Misiones",
    tiempoLectura: "6 min",
    imagen: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  }
];

// --- COMPONENTE DE TARJETA DE LUJO (Mismo estilo que ArticlesSection) ---
const LuxuryArticleCard = ({ articulo }: { articulo: typeof todosLosArticulos[0] }) => {
  return (
    <article className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-2">
      
      {/* IMAGEN HEADER */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={articulo.imagen} 
          alt={articulo.titulo} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge Categoría Flotante */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/95 backdrop-blur text-yellow-700 shadow-md border border-yellow-500/10">
            {articulo.categoria}
          </span>
        </div>
      </div>

      {/* CONTENIDO CARD */}
      <div className="flex-1 p-6 md:p-8 flex flex-col relative">
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

        {/* Título */}
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors">
          <a href={`/articulos/${articulo.id}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {articulo.titulo}
          </a>
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

// --- COMPONENTE PRINCIPAL ---
export default function ResourcesGridSection() {
  
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* --- FONDO AMBIENTAL (WHITE ROYAL) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Textura sutil */}
         <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
         {/* Luces suaves */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-gray-50 border border-yellow-600/20 shadow-[0_0_20px_rgba(202,138,4,0.15)]">
             <BookOpen className="w-6 h-6 text-yellow-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 tracking-tight">
            Biblioteca de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Recursos</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Explora nuestra colección completa de mensajes, enseñanzas y guías para tu crecimiento espiritual.
          </p>
        </div>

        {/* --- BARRA DE FILTROS (OPCIONAL - SOLO VISUAL) --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:bg-slate-800 transition-colors">
                Todos
            </button>
            {['Vida Espiritual', 'Estudio Bíblico', 'Teología', 'Familia'].map((cat) => (
                <button key={cat} className="px-6 py-2 rounded-full bg-white border border-gray-200 text-slate-600 text-xs font-bold uppercase tracking-wider hover:border-yellow-500 hover:text-yellow-700 transition-colors">
                    {cat}
                </button>
            ))}
        </div>

        {/* --- GRID DE RECURSOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {todosLosArticulos.map((articulo) => (
            <LuxuryArticleCard key={articulo.id} articulo={articulo} />
          ))}
        </div>

        {/* --- PAGINACIÓN SIMULADA --- */}
        <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:border-yellow-500 hover:text-yellow-600 transition-colors">1</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:border-yellow-500 hover:text-yellow-600 transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:border-yellow-500 hover:text-yellow-600 transition-colors">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="px-4 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-500 text-sm font-bold hover:border-yellow-500 hover:text-yellow-600 transition-colors">
                Siguiente
            </button>
        </div>

      </div>
    </section>
  );
}
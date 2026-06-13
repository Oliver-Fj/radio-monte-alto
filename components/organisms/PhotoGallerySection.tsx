'use client';

import React, { useState } from 'react';
import { Camera, Maximize2, Aperture, ArrowUpRight } from 'lucide-react';

// --- DATOS ---
// He añadido URLs de Unsplash como respaldo visual para que veas el diseño inmediatamente,
// pero el código prioriza tus rutas locales si existen.
const fotos = [
  {
    id: 1,
    src: '/images/galeria/radio-1.jpg',
    fallback: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop',
    alt: 'Estudio de radio',
    caption: 'Nuestro estudio de transmisión',
    category: 'Instalaciones'
  },
  {
    id: 2,
    src: '/images/galeria/radio-2.jpg',
    fallback: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop',
    alt: 'Equipo de locutores',
    caption: 'El equipo de Radio Monte Alto',
    category: 'Equipo'
  },
  {
    id: 3,
    src: '/images/galeria/radio-3.jpg',
    fallback: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop',
    alt: 'Transmisión en vivo',
    caption: 'Transmitiendo la Palabra',
    category: 'En Vivo'
  },
  {
    id: 4,
    src: '/images/galeria/radio-4.jpg',
    fallback: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop',
    alt: 'Cabina de grabación',
    caption: 'Produciendo contenido de calidad',
    category: 'Producción'
  },
  {
    id: 5,
    src: '/images/galeria/radio-5.jpg',
    fallback: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop',
    alt: 'Evento especial',
    caption: 'Eventos y actividades especiales',
    category: 'Eventos'
  },
  {
    id: 6,
    src: '/images/galeria/radio-6.jpg',
    fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    alt: 'Equipo técnico',
    caption: 'Tecnología al servicio del Evangelio',
    category: 'Técnica'
  },
];

// --- COMPONENTE DE TARJETA INDIVIDUAL ---
const GalleryCard = ({ foto }: { foto: typeof fotos[0] }) => {
  const [imgSrc, setImgSrc] = useState(foto.src);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Marco Dorado Sutil (Borde) */}
      <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-500/50 z-20 rounded-2xl transition-colors duration-500 pointer-events-none" />

      {/* Imagen con Zoom */}
      <img 
        src={imgSrc} 
        alt={foto.alt}
        onError={() => setImgSrc(foto.fallback)}
        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />

      {/* Overlay Gradiente (Siempre visible abajo, más fuerte en hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Overlay Color Tint en Hover */}
      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mixture-blend-overlay" />

      {/* Contenido Flotante */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
        
        {/* Top: Categoría y Icono Expandir */}
        <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
           <span className="inline-block px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-yellow-500 bg-black/50 backdrop-blur-md rounded border border-yellow-500/20">
             {foto.category}
           </span>
           <div className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-yellow-500 hover:text-black transition-colors">
             <Maximize2 className="w-4 h-4" />
           </div>
        </div>

        {/* Bottom: Texto */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="font-serif text-xl text-white mb-1 leading-tight drop-shadow-lg">
            {foto.alt}
          </h3>
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
             <p className="text-sm text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
               {foto.caption}
             </p>
             <div className="w-12 h-[1px] bg-yellow-500 mt-4 mb-1 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function PhotoGallerySection() {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden font-sans">
      
      {/* --- FONDO DE LUJO --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Patrón de ruido */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
         {/* Luces */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-white/5 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)] group">
            <Aperture className="w-8 h-8 text-yellow-500 group-hover:rotate-45 transition-transform duration-700" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-4 tracking-tight">
            Galería <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700">Visual</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Momentos capturados que cuentan la historia de nuestro ministerio, las personas y la pasión detrás de cada transmisión.
          </p>
        </div>

        {/* --- GRID DE FOTOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {fotos.map((foto) => (
            <GalleryCard key={foto.id} foto={foto} />
          ))}
        </div>

        {/* --- FOOTER / CTA --- */}
        <div className="text-center mt-12 pt-8 border-t border-white/5">
           <a href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-yellow-500 transition-colors group">
             <Camera className="w-4 h-4" />
             <span>Ver Archivo Completo en Instagram</span>
             <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
        </div>

      </div>
    </section>
  );
}
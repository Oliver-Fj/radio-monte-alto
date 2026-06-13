'use client';

import React from 'react';
import { Heart, Quote, Star, MapPin } from 'lucide-react';

// --- DATOS ---
const testimonios = [
  {
    nombre: 'María Rodríguez',
    testimonio: 'Radio Monte Alto ha sido un instrumento de Dios en mi vida. A través de sus enseñanzas encontré el camino de salvación. Gloria a Dios por este ministerio que transforma vidas.',
    ciudad: 'Huancayo, Perú',
    rating: 5
  },
  {
    nombre: 'Carlos Mendoza',
    testimonio: 'Escucho la radio todos los días mientras trabajo. Los mensajes me han ayudado a crecer espiritualmente y a fortalecer mi fe en momentos difíciles. Que Dios siga bendiciendo este ministerio.',
    ciudad: 'Lima, Perú',
    rating: 5
  },
  {
    nombre: 'Ana Gutiérrez',
    testimonio: 'Desde que escucho Radio Monte Alto, mi vida cambió completamente. Los estudios bíblicos me han dado un conocimiento profundo de la Palabra de Dios. Estoy muy agradecida.',
    ciudad: 'Junín, Perú',
    rating: 5
  },
];

// --- COMPONENTE DE TARJETA DE LUJO ---
const LuxuryTestimonialCard = ({ testimonio, index }: { testimonio: typeof testimonios[0], index: number }) => {
  return (
    <div className="group relative h-full">
      {/* Efecto de elevación en hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-b from-yellow-100 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
      
      <div className="relative h-full bg-white rounded-2xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 group-hover:border-yellow-500/20 transition-all duration-500 flex flex-col">
        
        {/* Icono de Comillas Gigante (Decorativo) */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-16 h-16 text-yellow-600 fill-yellow-600" />
        </div>

        {/* Estrellas */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonio.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>

        {/* Texto del Testimonio */}
        <blockquote className="flex-1 relative z-10 mb-8">
          <p className="text-slate-600 leading-relaxed italic font-light text-lg">
            "{testimonio.testimonio}"
          </p>
        </blockquote>

        {/* Separador */}
        <div className="w-12 h-[1px] bg-yellow-500/30 mb-6" />

        {/* Footer: Autor */}
        <div className="flex items-center gap-4">
          {/* Avatar (Iniciales) */}
          <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-yellow-500">
            {testimonio.nombre.charAt(0)}
          </div>
          
          <div>
            <h4 className="font-serif text-slate-900 font-bold text-base group-hover:text-yellow-700 transition-colors">
              {testimonio.nombre}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 uppercase tracking-wider mt-1">
              <MapPin className="w-3 h-3 text-yellow-500" />
              {testimonio.ciudad}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function TestimoniosSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* --- FONDO AMBIENTAL (WHITE ROYAL) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura sutil */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
        
        {/* Luces ambientales */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gray-50 border border-yellow-600/20 shadow-[0_0_30px_rgba(202,138,4,0.15)] group">
            <Heart className="w-8 h-8 text-yellow-600 fill-yellow-600/20 group-hover:scale-110 transition-transform duration-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
            Testimonios de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Fe</span>
          </h2>
          
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Historias reales de vidas transformadas por el poder del Evangelio. Tu testimonio es la prueba viva de la gracia de Dios.
          </p>
        </div>

        {/* --- GRID DE TESTIMONIOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonios.map((testimonio, index) => (
            <LuxuryTestimonialCard key={index} testimonio={testimonio} index={index} />
          ))}
        </div>

        {/* --- DECORACIÓN INFERIOR --- */}
        <div className="mt-16 flex justify-center opacity-30">
           <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
           </div>
        </div>

      </div>
    </section>
  );
}
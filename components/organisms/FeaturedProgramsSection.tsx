'use client';

import React from 'react';
import { Calendar, ArrowRight, Clock, Radio, Star, Mic2 } from 'lucide-react';

// Datos integrados
const programas = [
  {
    id: 1,
    nombre: "Despertar con Fe",
    descripcion: "Inicia tu mañana con la mejor música y una palabra de aliento para enfrentar el día.",
    horario: "06:00 AM - 09:00 AM",
    dias: "Lunes a Viernes",
    categoria: "Matutino",
    imagen: "/images/hero-desktop.png" 
  },
  {
    id: 2,
    nombre: "Conexión Celestial",
    descripcion: "Un tiempo de intercesión y adoración profunda conectando tu espíritu con el cielo.",
    horario: "10:00 AM - 12:00 PM",
    dias: "Lunes a Viernes",
    categoria: "Adoración",
    imagen: "/images/hero-desktop.png"
  },
  {
    id: 3,
    nombre: "Noche de Milagros",
    descripcion: "Testimonios impactantes y oración en vivo por sanidad y liberación.",
    horario: "08:00 PM - 10:00 PM",
    dias: "Viernes",
    categoria: "Milagros",
    imagen: "/images/hero-desktop.png"
  }
];

export default function FeaturedProgramsSection() {
  const programasDestacados = programas.slice(0, 3);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden font-sans">
      
      {/* --- FONDO DE LUJO (WHITE EDITION) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luces ambientales doradas muy suaves */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        
        {/* Textura de papel fino/ruido para evitar el blanco plano */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER DE SECCIÓN --- */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-yellow-600/20 shadow-[0_0_20px_rgba(202,138,4,0.15)] mb-4">
             <Star className="w-3 h-3 text-yellow-600 fill-yellow-600 animate-pulse" />
             <span className="text-xs font-bold tracking-[0.2em] text-yellow-600 uppercase">Exclusivo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 tracking-tight">
            Programación <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Estelar</span>
          </h2>
          
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Espacios diseñados por Dios para transformar tu corazón. Conéctate con nuestras transmisiones más sintonizadas.
          </p>
        </div>

        {/* --- GRID DE TARJETAS PREMIUM --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {programasDestacados.map((programa, index) => (
            <div 
              key={programa.id || index}
              className="group relative h-[450px] w-full perspective-1000"
            >
              {/* Contenedor de la Tarjeta */}
              {/* En fondo blanco, usamos una sombra dorada suave para dar elevación y un borde sutil */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-xl group-hover:shadow-2xl group-hover:shadow-yellow-500/20 group-hover:border-yellow-500/40 transition-all duration-500 group-hover:-translate-y-2">
                
                {/* IMAGEN DE FONDO */}
                <div className="absolute inset-0">
                   <img 
                     src={programa.imagen} 
                     alt={programa.nombre}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Overlay: Necesario oscuro para que el texto blanco se lea, pero con un tinte dorado */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                   
                   {/* Brillo dorado en hover */}
                   <div className="absolute inset-0 bg-yellow-600/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />
                </div>

                {/* CONTENIDO DE LA TARJETA (Texto blanco porque está sobre la foto) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                    
                    {/* Badge Categoría */}
                    <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur text-yellow-700 text-xs font-bold uppercase tracking-wider shadow-lg">
                        {programa.categoria}
                      </span>
                    </div>

                    {/* Icono Decorativo */}
                    <div className="mb-4 p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                      <Mic2 className="w-6 h-6 text-white" />
                    </div>

                    {/* Título y Descripción */}
                    <h3 className="text-2xl font-serif text-white mb-2 leading-tight group-hover:text-yellow-200 transition-colors drop-shadow-md">
                      {programa.nombre}
                    </h3>
                    
                    <p className="text-sm text-slate-200 line-clamp-2 mb-6 font-light border-l-2 border-white/30 pl-3 group-hover:border-yellow-400 transition-colors">
                      {programa.descripcion}
                    </p>

                    {/* Info Horario */}
                    <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                      <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span>{programa.dias}</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span>{programa.horario}</span>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTÓN VER TODO (Estilo White Premium) --- */}
        <div className="text-center">
          <a 
            href="/programacion"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent overflow-hidden rounded-full transition-all hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]"
          >
            {/* Borde Dorado */}
            <div className="absolute inset-0 rounded-full border border-yellow-600/30 group-hover:border-yellow-500 transition-colors" />
            
            {/* Fondo Hover Dorado */}
            <div className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <Radio className="w-5 h-5 text-yellow-600 group-hover:text-white group-hover:animate-pulse transition-colors relative z-10" />
            <span className="relative z-10 text-sm font-bold tracking-widest text-slate-700 uppercase group-hover:text-white transition-colors">
              Explorar Programacón Completa
            </span>
            <ArrowRight className="w-5 h-5 text-yellow-600 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
          </a>
        </div>

      </div>
    </section>
  );
}
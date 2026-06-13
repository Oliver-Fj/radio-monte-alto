'use client';

import React from 'react';
import { Users, Church, MapPin, HeartHandshake, ArrowRight, Calendar } from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* --- FONDO AMBIENTAL (VERSIÓN WHITE) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura sutil para dar profundidad */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
        
        {/* Luces ambientales suaves */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* --- HEADER --- */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-gray-50 border border-yellow-600/20 shadow-[0_0_30px_rgba(202,138,4,0.15)] group">
              <Users className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
              Nuestro <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Equipo</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Un equipo comprometido con la difusión del Evangelio, trabajando unidos para ser instrumentos en las manos de Dios para rescatar almas con el mensaje de salvación.
            </p>
          </div>

          {/* --- INFO CARDS (Sede y Ubicación) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            
            {/* Card 1: Sede Central */}
            <div className="group relative bg-white shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 border border-gray-100 hover:border-yellow-500/30 rounded-2xl p-8 transition-all duration-500 flex flex-col items-start">
               <div className="mb-6 p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:text-blue-700 group-hover:shadow-lg transition-all">
                 <Church className="w-8 h-8" />
               </div>
               
               <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                 Nuestra Sede Central
               </h3>
               
               <p className="text-slate-500 text-sm leading-relaxed mb-2">
                 Somos una iglesia de Pacto bajo la cobertura de:
               </p>
               
               {/* Texto Destacado de Lujo */}
               <div className="relative p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-white border-l-4 border-yellow-500 mt-2 w-full">
                 <p className="font-serif text-lg italic font-medium text-slate-800 leading-snug">
                   "Iglesia Cuartel General de Jehová de los Ejércitos con Sanidad, con Santidad, y Poder en Monte Alto"
                 </p>
               </div>
            </div>

            {/* Card 2: Ubicación */}
            <div className="group relative bg-white shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 border border-gray-100 hover:border-yellow-500/30 rounded-2xl p-8 transition-all duration-500 flex flex-col items-start">
               <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 group-hover:text-red-700 group-hover:shadow-lg transition-all">
                 <MapPin className="w-8 h-8" />
               </div>
               
               <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">
                 Ubicación Estratégica
               </h3>
               
               <p className="text-slate-500 text-sm leading-relaxed mb-3">
                 Visítanos en nuestra dirección principal:
               </p>
               
               {/* Dirección Detallada Estilizada */}
               <div className="w-full bg-gray-50 border border-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-slate-800 font-medium text-sm leading-snug mb-2">
                    Calle 3 de Agosto S/N, Distrito de San Agustín de Cajas
                  </p>
                  <div className="text-xs text-slate-500 border-t border-gray-200 pt-2 mt-2">
                    <span className="font-bold text-yellow-600 uppercase tracking-wider">Referencia:</span>
                    <br/>
                    Por Quebrada Honda, Paradero Vista Alegre
                  </div>
               </div>
               
               <div className="flex items-center gap-3 mt-auto">
                  <span className="text-2xl font-serif font-bold text-slate-900">Huancayo</span>
                  <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-gray-100 text-slate-600 border border-gray-200">Perú</span>
               </div>
            </div>

          </div>

          {/* --- CTA BANNER (Comunidad) --- */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Fondo Gradiente Oscuro para contraste elegante */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-blue-900"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10 p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/10 border border-white/20 text-white animate-pulse">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <h3 className="text-2xl md:text-4xl font-serif text-white mb-4">
                Únete a Nuestra Comunidad
              </h3>
              
              <p className="text-blue-100/80 mb-8 max-w-2xl mx-auto text-lg font-light">
                Gracias por ser parte de Radio Monte Alto. Juntos estamos llevando el mensaje de esperanza y salvación a miles de personas cada día.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/contacto" 
                  className="group relative px-8 py-3 bg-yellow-500 text-[#0B1120] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contáctanos <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <a 
                  href="/programacion" 
                  className="px-8 py-3 bg-transparent border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Ver Programación
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
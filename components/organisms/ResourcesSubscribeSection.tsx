'use client';

import React from 'react';
import { Mail, Bell, ArrowRight, Star, Send } from 'lucide-react';

export default function ResourcesSubscribeSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      
      {/* --- FONDO AMBIENTAL (WHITE ROYAL) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura sutil */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply" />
        
        {/* Luces ambientales suaves */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* --- CARD PRINCIPAL DE SUSCRIPCIÓN --- */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-gray-100 overflow-hidden group">
            
            {/* Decoración de Borde Dorado en Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/10 rounded-3xl transition-colors duration-500 pointer-events-none" />
            
            {/* Fondo decorativo interno */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              
              {/* COLUMNA IZQUIERDA: TEXTO E ICONO */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-slate-900 border border-slate-800 shadow-xl shadow-yellow-500/10 relative overflow-hidden group/icon">
                   <div className="absolute inset-0 bg-yellow-500/20 scale-0 group-hover/icon:scale-100 transition-transform duration-500 rounded-full" />
                   <Bell className="w-8 h-8 text-yellow-500 relative z-10" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-4 tracking-tight">
                  Recibe Nuevos <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-700">Recursos</span>
                </h2>
                
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  Únete a nuestra lista exclusiva. Recibe enseñanzas profundas, artículos y noticias del ministerio directamente en tu bandeja de entrada.
                </p>
                
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> Sin Spam
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> Contenido Semanal
                  </span>
                </div>
              </div>

              {/* COLUMNA DERECHA: FORMULARIO */}
              <div className="w-full md:w-5/12">
                <form className="flex flex-col gap-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-200 text-slate-900 placeholder-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all shadow-inner"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative w-full py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest text-sm overflow-hidden shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Suscribirme Ahora <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                  
                  <p className="text-center text-[10px] text-slate-400 font-medium">
                    Respetamos tu privacidad. Puedes cancelar cuando quieras.
                  </p>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
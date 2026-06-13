'use client';

import React from 'react';
import { Clock, Share2, Calendar, Star, Sparkles } from 'lucide-react';

// --- UTILIDAD CN ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- TIPOS ---
interface Programa {
  id: string;
  nombre: string;
  descripcion: string;
  horario: string;
  dias: string[];
  categoria: string;
  imagen: string;
  publicoObjetivo: string;
}

// --- DATOS ---
const programas: Programa[] = [
  { id: '1', nombre: 'Meravillando el Corazón', descripcion: 'Enseñanza bíblica', horario: '06:00 - 07:00', dias: ['L', 'M', 'X', 'J', 'V', 'S'], categoria: 'Ensenanza', imagen: '/images/programas/corazon.jpg', publicoObjetivo: 'General' },
  { id: '3', nombre: 'Visión Misionera', descripcion: 'Enfoque misionero', horario: '07:00 - 08:00', dias: ['L', 'M', 'X', 'J', 'V'], categoria: 'Ensenanza', imagen: '/images/programas/misionera.jpg', publicoObjetivo: 'General' },
  { id: '2', nombre: 'Clínica Celestial', descripcion: 'Sanidad y oración', horario: '08:00 - 09:00', dias: ['L', 'M', 'X', 'J', 'V'], categoria: 'Ensenanza', imagen: '/images/programas/clinica.jpg', publicoObjetivo: 'General' },
  { id: '6', nombre: 'Estudio Seminal', descripcion: 'Estudio profundo', horario: '08:00 - 09:00', dias: ['S'], categoria: 'Ensenanza', imagen: '/images/programas/seminal.jpg', publicoObjetivo: 'Adultos' },
  { id: '4', nombre: 'Alegrías de Cristo', descripcion: 'Niños', horario: '09:00 - 10:00', dias: ['S'], categoria: 'Ninos', imagen: '/images/programas/ninos.jpg', publicoObjetivo: 'Niños' },
  { id: '5', nombre: 'Evangelizando', descripcion: 'Predicación', horario: '10:00 - 11:00', dias: ['L', 'M', 'X', 'J', 'V'], categoria: 'Ensenanza', imagen: '/images/programas/evangelizando.jpg', publicoObjetivo: 'General' },
  { id: '7', nombre: 'Sana Doctrina', descripcion: 'Doctrinas bíblicas', horario: '14:00 - 15:00', dias: ['L', 'M', 'X', 'J', 'V'], categoria: 'Ensenanza', imagen: '/images/programas/doctrina.jpg', publicoObjetivo: 'General' },
  { id: '8', nombre: 'Puerta Milagrosa', descripcion: 'Testimonios', horario: '15:00 - 16:00', dias: ['M', 'J'], categoria: 'Milagros', imagen: '/images/programas/milagros.jpg', publicoObjetivo: 'General' },
  { id: '9', nombre: 'Huellas de Jesús', descripcion: 'Vida diaria', horario: '16:00 - 17:00', dias: ['L', 'M', 'X', 'J', 'V'], categoria: 'Ensenanza', imagen: '/images/programas/huellas.jpg', publicoObjetivo: 'General' },
  { id: '10', nombre: 'Predestinados', descripcion: 'Jóvenes', horario: '18:00 - 19:00', dias: ['V'], categoria: 'Juventud', imagen: '/images/programas/juvenil.jpg', publicoObjetivo: 'Jóvenes' },
];

// --- CONFIGURACIÓN ---
const DIAS_COMPLETOS = [
  { abrev: 'L', nombre: 'Lunes' },
  { abrev: 'M', nombre: 'Martes' },
  { abrev: 'X', nombre: 'Miércoles' },
  { abrev: 'J', nombre: 'Jueves' },
  { abrev: 'V', nombre: 'Viernes' },
  { abrev: 'S', nombre: 'Sábado' },
];

// Colores adaptados para fondo blanco (tonos pastel elegantes + bordes definidos)
const categoriaColors: Record<string, string> = {
  Ensenanza: 'bg-blue-50 border-blue-100 text-blue-900 group-hover/card:border-blue-300',
  Ninos: 'bg-green-50 border-green-100 text-green-900 group-hover/card:border-green-300',
  Milagros: 'bg-purple-50 border-purple-100 text-purple-900 group-hover/card:border-purple-300',
  Juventud: 'bg-orange-50 border-orange-100 text-orange-900 group-hover/card:border-orange-300',
};

// Estilo por defecto si falla la categoría (Blanco puro con borde dorado sutil)
const defaultStyle = 'bg-white border-slate-100 text-slate-700 group-hover/card:border-amber-300';

export default function ProgramacionGrid() {
  // --- LÓGICA (Sin cambios) ---
  const programasPorHorario = programas.reduce((acc, programa) => {
    if (!acc[programa.horario]) acc[programa.horario] = {};
    const rawDias = (programa as any).dias;
    const dias: string[] = Array.isArray(rawDias)
      ? rawDias
      : String(rawDias).includes(',')
      ? String(rawDias).split(',').map((d) => d.trim())
      : String(rawDias).split('').map((d) => d.trim());
    dias.forEach((dia) => { if (dia) acc[programa.horario][dia] = programa; });
    return acc;
  }, {} as Record<string, Record<string, Programa>>);

  const horarios = Object.keys(programasPorHorario).sort();

  const handleShare = (programa: Programa, dia: string) => {
    const text = `${programa.nombre} - ${programa.horario} (${dia})`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: programa.nombre, text: text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text} - ${window.location.href}`);
    }
  };

  return (
    <section className="relative w-full bg-[#FDFDFD] font-sans overflow-hidden min-h-screen">
      
      {/* --- FONDO AMBIENTAL LUJOSO (Blanco/Dorado) --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Gradiente radial central muy sutil dorado */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-to-b from-amber-100/40 via-transparent to-transparent rounded-full blur-[100px] opacity-60" />
         {/* Textura de ruido sutil para evitar que se vea plano */}
         <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 py-20 md:py-24 w-full px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-amber-200 shadow-lg shadow-amber-100/50 mb-6 transform transition-transform hover:scale-105">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-amber-700 uppercase font-serif">
                  Programación Oficial
                </span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 tracking-tight mb-4">
              Nuestra <span className="italic relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 drop-shadow-sm">
                  Programación
                </span>
                {/* Subrayado decorativo */}
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-100/50 -z-10 skew-x-6 transform rotate-1"></span>
              </span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              Conéctate con nuestros horarios y descubre el contenido que edifica tu vida.
            </p>
        </div>

        {/* --- TABLA DESKTOP (Premium Style) --- */}
        <div className="hidden lg:block w-full bg-white rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-8 relative overflow-hidden">
            {/* Borde superior dorado decorativo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>

            {/* HEADER DIAS */}
            <div className="grid grid-cols-7 gap-4 mb-6 border-b border-slate-100 pb-6">
              <div className="text-center text-slate-400 text-[10px] uppercase tracking-widest flex items-end justify-center pb-1 font-semibold">
                Horario CST
              </div>
              {DIAS_COMPLETOS.map((dia) => (
                <div key={dia.abrev} className="text-center group cursor-default">
                  <span className="text-xl font-serif text-slate-800 block group-hover:text-amber-600 transition-colors">{dia.nombre}</span>
                  <div className="h-0.5 w-0 group-hover:w-1/2 bg-amber-400 mx-auto transition-all duration-300 mt-2"></div>
                </div>
              ))}
            </div>

            {/* FILAS */}
            <div className="space-y-4">
            {horarios.map((horario) => (
              <div key={horario} className="grid grid-cols-7 gap-4 group/row transition-colors py-1">
                
                {/* Columna Horario */}
                <div className="flex flex-col items-center justify-center px-1 relative">
                  <span className="text-sm font-bold text-slate-700 font-mono whitespace-nowrap bg-slate-50 px-3 py-1 rounded-lg border border-slate-200">
                    {horario.split(' - ')[0]}
                  </span>
                  <div className="h-full w-[1px] bg-gradient-to-b from-slate-200 to-transparent absolute top-8 z-0"></div>
                </div>

                {/* Celdas */}
                {DIAS_COMPLETOS.map((dia) => {
                  const programa = programasPorHorario[horario][dia.abrev];
                  const categoria = (programa as any)?.categoria as string | undefined;
                  // Si hay programa aplicamos estilos, si no, estilo base
                  const activeStyle = programa 
                    ? (categoria ? categoriaColors[categoria] : defaultStyle) 
                    : '';

                  return (
                    <div
                      key={dia.abrev}
                      className={cn(
                        'relative rounded-xl p-3 min-h-[110px] flex flex-col justify-between transition-all duration-300 border',
                        programa
                          ? `${activeStyle} shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 z-10 group/card bg-opacity-60 backdrop-blur-sm`
                          : 'bg-slate-50/30 border-dashed border-slate-200 opacity-50 hover:opacity-100 hover:bg-slate-50 hover:border-slate-300' // Estilo para celdas vacías
                      )}
                    >
                      {programa ? (
                        <>
                          <div>
                             <div className="flex justify-between items-start mb-2">
                                <span className={cn(
                                    "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border bg-white",
                                    categoria === 'Ninos' ? 'text-green-600 border-green-200' : 
                                    categoria === 'Juventud' ? 'text-orange-600 border-orange-200' :
                                    categoria === 'Milagros' ? 'text-purple-600 border-purple-200' :
                                    'text-blue-600 border-blue-200'
                                )}>
                                  {categoria === 'Ninos' ? 'Niños' : categoria?.slice(0,8)}
                                </span>
                                {programa.id === '1' && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />}
                             </div>
                             
                             <h4 className="font-serif text-sm leading-tight text-slate-800 font-semibold mb-1 line-clamp-2 group-hover/card:text-black">
                               {programa.nombre}
                             </h4>
                          </div>

                          <button
                            onClick={() => handleShare(programa, dia.nombre)}
                            className="mt-2 opacity-0 group-hover/card:opacity-100 transition-all duration-300 flex items-center gap-1 text-[10px] text-slate-400 hover:text-amber-600 font-semibold uppercase tracking-wider translate-y-2 group-hover/card:translate-y-0"
                          >
                            <Share2 className="w-3 h-3" /> Compartir
                          </button>
                        </>
                      ) : (
                         // Espacio vacío elegante
                          <div className="flex items-center justify-center h-full">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-amber-200 transition-colors" />
                          </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            </div>
        </div>

        {/* --- VERSION MOBILE/TABLET (ACORDEON PREMIUM) --- */}
        <div className="lg:hidden space-y-4">
          {DIAS_COMPLETOS.map((dia) => {
            const programasDelDia = horarios
              .map((horario) => ({
                horario,
                programa: programasPorHorario[horario][dia.abrev],
              }))
              .filter((item) => item.programa);

            if (programasDelDia.length === 0) return null;

            return (
              <details key={dia.abrev} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 open:shadow-lg open:shadow-amber-100/50 open:border-amber-200 transition-all duration-300">
                <summary className="cursor-pointer p-5 flex justify-between items-center list-none relative z-10 bg-white group-open:bg-amber-50/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 bg-slate-200 rounded-full group-open:bg-amber-500 transition-colors"></div>
                    <span className="text-xl font-serif text-slate-800 font-medium group-open:text-amber-700 transition-colors">{dia.nombre}</span>
                  </div>
                  <span className="text-slate-300 group-open:text-amber-500 group-open:rotate-180 transition-transform duration-300">
                    <div className="bg-slate-50 p-2 rounded-full group-open:bg-white shadow-sm">▼</div>
                  </span>
                </summary>

                <div className="px-4 pb-6 space-y-3 relative z-10 bg-gradient-to-b from-amber-50/30 to-white pt-2">
                  {programasDelDia.map(({ horario, programa }) => {
                    const categoria = (programa as any)?.categoria as string | undefined;
                     const activeStyle = categoria ? categoriaColors[categoria] : defaultStyle;
                    
                    return (
                      <div key={horario} className={cn('p-4 rounded-xl border shadow-sm bg-white relative overflow-hidden group/item', activeStyle)}>
                          {/* Decoración lateral */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-current opacity-20"></div>
                          
                          <div className="flex items-center gap-3 mb-2 opacity-60 pl-2">
                              <Clock className="w-3 h-3" />
                              <span className="text-xs font-mono font-bold">{horario}</span>
                          </div>
                          <h4 className="font-serif text-lg text-slate-900 pl-2 font-medium">{programa.nombre}</h4>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                             <Share2 className="w-4 h-4 text-amber-500" />
                          </div>
                      </div>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>

      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { BookOpen, Scroll, ShieldCheck } from 'lucide-react';

// Datos actualizados con los nuevos puntos doctrinales
const doctrinas = [
  {
    id: 1,
    titulo: "La Biblia",
    contenido: "Creemos que toda la Escritura está dada por inspiración de Dios, por cuanto los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo. Es la autoridad absoluta, inerrable e infalible.",
    referencias: "2 Pedro 1:20-21; Salmo 119:160; 2 Timoteo 3:16"
  },
  {
    id: 2,
    titulo: "La Trinidad",
    contenido: "Creemos que hay un Dios, eternamente existente, que se ha revelado como un Ser en tres personas: Padre, Hijo y Espíritu Santo. Cada una con atributos personales distintos, pero sin división de naturaleza.",
    referencias: "Génesis 1:26; 2 Corintios 13:14; Mateo 3:16-17"
  },
  {
    id: 3,
    titulo: "La Persona de Cristo",
    contenido: "Creemos que Jesucristo posee dos naturalezas (divina y humana) sin mezcla ni división. Se le atribuye todo lo propio del Padre y de la humanidad, a excepción del pecado.",
    referencias: "Juan 1:1,14; Mateo 1:20-25; Filipenses 2:5-8"
  },
  {
    id: 4,
    titulo: "El Espíritu Santo",
    contenido: "Creemos que es una persona divina, eterna, no creada, que posee intelecto, emociones, voluntad, eternidad, omnipresencia, omnisciencia y omnipotencia.",
    referencias: "Juan 14:16-17; 16:8-11; Hechos 5:3-4"
  },
  {
    id: 5,
    titulo: "El Hombre",
    contenido: "Creemos que el hombre fue creado por Dios con espíritu, alma y cuerpo. Hecho a imagen y semejanza moral de Dios, sin pecado, para disfrutar de Su gloria.",
    referencias: "Génesis 1:26-27; 2:7; Romanos 5:12"
  },
  {
    id: 6,
    titulo: "La Salvación",
    contenido: "Creemos que la salvación es por gracia mediante la fe en Jesucristo; basada exclusivamente en el sacrificio de Su sangre y no en obras humanas.",
    referencias: "Efesios 2:8-9; Tito 3:5; Juan 1:12"
  },
  {
    id: 7,
    titulo: "La Iglesia",
    contenido: "Formada por todos los creyentes verdaderos. Cristo es la cabeza. Es espiritual y no está limitada a raza, nacionalidad o denominación.",
    referencias: "Efesios 1:22-23; Colosenses 1:18; Mateo 16:18"
  },
  {
    id: 8,
    titulo: "Destino Final",
    contenido: "Creemos en la resurrección: los salvos a vida eterna en la presencia de Dios y los perdidos a juicio eterno.",
    referencias: "Juan 5:28-29; Apocalipsis 20:11-15"
  },
  {
    id: 9,
    titulo: "La Guerra Espiritual",
    contenido: "Creemos en la realidad de la batalla espiritual contra las fuerzas de las tinieblas. Nuestra lucha no es contra sangre y carne, sino espiritual, y tenemos autoridad en Cristo para vencer mediante las armas que Dios nos ha dado.",
    referencias: "Efesios 6:10-18; 2 Corintios 10:3-5; Santiago 4:7"
  },
  {
    id: 10,
    titulo: "La Guianza del Espíritu",
    contenido: "Creemos que el Espíritu Santo habita en el creyente para guiarlo a toda verdad, revelando la voluntad del Padre y empoderándonos para vivir una vida santa, dirigida y con propósito.",
    referencias: "Juan 16:13; Romanos 8:14; Salmo 143:10"
  }
];

export default function DeclaracionDoctrinalSection() {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden font-sans">
      
      {/* --- FONDO DE LUJO --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Textura de ruido suave */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Luces ambientales */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- HEADER DE SECCIÓN --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-white/5 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
            <BookOpen className="w-6 h-6 text-yellow-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-6 tracking-tight">
            Fundamentos <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700">Doctrinales</span>
          </h2>
          
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Nuestra fe se cimenta en verdades eternas. Estos son los pilares bíblicos que sostienen nuestra visión y ministerio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          
          {/* --- DECLARACIÓN PRINCIPAL (Hero Card) --- */}
          <div className="relative mb-20 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 via-yellow-400/10 to-yellow-500/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-slate-900/80 border border-yellow-500/20 backdrop-blur-xl rounded-2xl p-8 md:p-12 overflow-hidden">
              
              {/* Adorno de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Imagen destacada */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                     {/* Usando img normal para compatibilidad, reemplaza con Image de next/image si prefieres */}
                     <img 
                       src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1000&auto=format&fit=crop" 
                       alt="Biblia Abierta" 
                       className="object-cover w-full h-full"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>

                {/* Texto Principal */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-yellow-500">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Declaración de Fe</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                    Creemos en la <span className="text-yellow-400">Biblia</span> como autoridad suprema.
                  </h3>
                  
                  <div className="relative">
                    <span className="absolute -left-4 -top-4 text-6xl text-yellow-500/20 font-serif">“</span>
                    <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                      Compuesta por el Antiguo y Nuevo Testamento, es inspirada verbal y plenamente por Dios. Es inerrable, infalible y la aceptamos como nuestra norma final de fe y conducta.
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                    <span className="text-sm text-slate-500 font-mono">Referencias Clave:</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-colors cursor-default">
                        2 Timoteo 3:16
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-yellow-500/10 hover:border-yellow-500/50 transition-colors cursor-default">
                        2 Pedro 1:21
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- GRID DE PUNTOS DOCTRINALES --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctrinas.map((doc, index) => (
              <div 
                key={doc.id}
                className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-yellow-500/30 rounded-xl p-8 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Número Gigante de Fondo */}
                <span className="absolute top-4 right-6 text-8xl font-serif font-bold text-white/[0.02] group-hover:text-yellow-500/[0.05] transition-colors select-none">
                  {doc.id}
                </span>

                <div className="relative z-10">
                  {/* Encabezado */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center group-hover:border-yellow-500/50 transition-colors shadow-lg">
                      <span className="font-serif text-yellow-500 font-bold text-lg">{doc.id}</span>
                    </div>
                    <h4 className="text-xl font-serif text-white group-hover:text-yellow-200 transition-colors">
                      {doc.titulo}
                    </h4>
                  </div>

                  {/* Contenido */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                    {doc.contenido}
                  </p>

                  {/* Referencias Footer */}
                  <div className="flex items-start gap-2 pt-4 border-t border-white/5">
                    <Scroll className="w-3 h-3 text-yellow-500/70 mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-500 font-mono italic">
                      {doc.referencias}
                    </p>
                  </div>
                </div>

                {/* Decoración Hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-yellow-500 to-yellow-200 group-hover:w-full transition-all duration-700 ease-out opacity-50" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
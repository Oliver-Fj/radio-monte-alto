'use client';

import Image from 'next/image';
const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function WhoWeAreSplitSection() {
  return (
    <section className="relative py-20 md:py-24 bg-slate-50 overflow-hidden">
      
      

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Grid alineado al centro */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* --- COLUMNA 1: TEXTO (Expandido y Balanceado) --- */}
          <div className="order-2 lg:order-1 h-full flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              <span className="text-blue-900 font-bold uppercase tracking-widest text-sm">Nuestra Identidad</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
              ¿Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900">Somos?</span>
            </h2>

            {/* Texto expandido para igualar altura */}
            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-justify">
              <p>
                <strong className="text-blue-900 font-semibold">Radio Monte Alto</strong> es un ministerio radial cristiano nacido en el corazón de Dios. No somos solo una señal en el aire; somos una voz profética comprometida con la verdad, levantada para tiempos como estos.
              </p>
              
              <p>
                Mantenemos firme nuestro mandato de ser <span className="italic text-blue-800 font-medium">"El Portavoz del Reino de Dios"</span>. Nuestra señal atraviesa fronteras geográficas para llevar mensajes de fe, esperanza y salvación que tienen el poder de transformar familias enteras y restaurar vidas quebrantadas.
              </p>

              <p>
                Nuestra programación está fundamentada en la sana doctrina y la excelencia, combinando la adoración que exalta a Cristo con la enseñanza bíblica profunda. Buscamos edificar el cuerpo de Cristo, equipando a los creyentes para vivir una vida de santidad y propósito.
              </p>
            </div>
          </div>


          {/* --- COLUMNA 2: EL LOGO (MARCO GRUESO E INTENSO) --- */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end my-6 lg:my-0">
            
            {/* Altura aumentada ligeramente para balancear con el nuevo texto */}
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
              
              {/* LA TARJETA PREMIUM */}
              <div className="premium-card-wrapper w-full h-full flex items-center justify-center">
                
                {/* Contenido Interno */}
                <div className="relative w-full h-full flex flex-col items-center justify-center p-8 z-10">
                  
                  {/* Luz azul suave detrás del logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/30 blur-3xl rounded-full" />
                  
                  {/* IMAGEN DEL LOGO */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src={`${B}/images/logo-radio.png`}
                      alt="Logo Radio Monte Alto"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
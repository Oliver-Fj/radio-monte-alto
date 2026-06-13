import { Heart, Users } from 'lucide-react';

export default function MisionVisionCards() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* --- TÍTULO DE LA SECCIÓN --- */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <span className="w-8 h-[2px] bg-yellow-500"></span>
              <span className="text-blue-900 font-bold uppercase tracking-widest text-sm">Nuestro Propósito</span>
              <span className="w-8 h-[2px] bg-yellow-500"></span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Misión y <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Visión</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Los fundamentos que guían nuestro ministerio para expandir el Reino de Dios en la tierra.
            </p>
          </div>

          {/* --- GRID DE TARJETAS --- */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
            {/* CARD MISIÓN (AZUL) 
                Cambio: border-4 border-blue-100 -> group-hover:border-yellow-400 
                (El borde se vuelve dorado cuando el fondo es azul)
            */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border-[5px] border-blue-50 group-hover:border-yellow-400 group-hover:shadow-2xl">
              
              {/* Fondo animado (Azul) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center group-hover:bg-white/10 group-hover:text-white transition-all duration-500 shadow-sm border-2 border-blue-100 group-hover:border-white/20">
                    <Heart className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-6xl font-serif text-slate-100 font-bold select-none group-hover:text-white/10 transition-colors duration-500">01</span>
                </div>
                
                <h3 className="text-3xl font-bold text-blue-900 mb-6 group-hover:text-white transition-colors duration-500">Nuestra Misión</h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-100 transition-colors duration-500">
                  Proclamar el Evangelio de Jesucristo a través de la radio y el púlpito,
                  alcanzando corazones con el mensaje de salvación y edificando la fe
                  mediante enseñanza bíblica sólida.
                </p>
                
                <div className="mt-auto pt-8">
                  {/* La línea decorativa cambia a dorado también */}
                  <div className="h-1.5 w-16 bg-blue-900 group-hover:bg-yellow-400 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* CARD VISIÓN (DORADA) 
                Cambio: border-4 border-yellow-50 -> group-hover:border-blue-900
                (El borde se vuelve azul oscuro cuando el fondo es dorado)
            */}
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border-[5px] border-yellow-50 group-hover:border-blue-900 group-hover:shadow-2xl">
              
              {/* Fondo animado (Dorado) */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:bg-white/20 group-hover:text-blue-900 transition-all duration-500 shadow-sm border-2 border-yellow-100 group-hover:border-white/20">
                    <Users className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-6xl font-serif text-slate-100 font-bold select-none group-hover:text-blue-900/10 transition-colors duration-500">02</span>
                </div>
                
                <h3 className="text-3xl font-bold text-blue-900 mb-6 transition-colors duration-500">Nuestra Visión</h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-blue-900 font-medium transition-colors duration-500">
                  Ser un ministerio de impacto global, reconocidos por nuestra fidelidad a la Palabra
                  y la manifestación del poder de Dios, llevando la luz de Cristo a todo el Perú y las naciones.
                </p>
                
                <div className="mt-auto pt-8">
                  {/* La línea decorativa cambia a azul también */}
                  <div className="h-1.5 w-16 bg-yellow-500 group-hover:bg-blue-900 transition-all duration-500 rounded-full"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
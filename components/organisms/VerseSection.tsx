'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Calendar, Quote, Share2, Copy, Check, Link as LinkIcon } from 'lucide-react';

export default function VerseSection() {
  const [fecha, setFecha] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [mensajeToast, setMensajeToast] = useState('');

  // Texto del versículo para usar en las funciones
  const textoVersiculo = '"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna." - Juan 3:16';

  useEffect(() => {
    const hoy = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
    setFecha(fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1));
  }, []);

  // Función para mostrar notificación temporal
  const mostrarToast = (mensaje: string) => {
    setMensajeToast(mensaje);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(textoVersiculo);
      mostrarToast('¡Versículo copiado al portapapeles!');
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleCompartir = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Versículo del Día - Radio Monte Alto',
          text: textoVersiculo,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Compartir cancelado');
      }
    } else {
      // Fallback: Copiar enlace si no hay API de compartir nativa
      try {
        await navigator.clipboard.writeText(`${textoVersiculo} ${window.location.href}`);
        mostrarToast('¡Enlace y versículo copiados!');
      } catch (err) {
        console.error('Error al copiar enlace', err);
      }
    }
  };

  return (
    // CAMBIO: Padding reducido (py-10 md:py-16) y fondo azul más claro/vibrante
    <section className="relative py-10 md:py-16 overflow-hidden flex items-center justify-center bg-[#1e293b]">
      
      {/* --- FONDO PREMIUM (Más visible) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070&auto=format&fit=crop" 
          alt="Fondo Biblia Abierta"
          className="w-full h-full object-cover opacity-40" // Opacidad ajustada para que no sea tan oscuro
        />
        {/* Gradiente Azul Real (No negro) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#1e3a8a]/80 to-[#0f172a]/90 mix-blend-multiply" />
        
        {/* Partículas decorativas */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      {/* CAMBIO: max-w-6xl para extender a los lados y reducir altura */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
            
            {/* --- TARJETA GLASSMORPHISM (Más ancha, menos alta) --- */}
            <div className="relative bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl overflow-hidden group">
                
                {/* Decoración lateral dorada */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50" />
                <div className="absolute top-0 right-0 w-1.5 h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-50" />

                <div className="flex flex-col items-center text-center">
                    
                    {/* HEADER COMPACTO: Icono y Fecha en línea si es posible o muy pegados */}
                    <div className="mb-6 flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 shadow-lg shadow-yellow-500/20">
                                <BookOpen className="w-5 h-5 text-white" strokeWidth={2} />
                            </div>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-yellow-400 uppercase font-sans">
                                Alimento Diario
                            </h2>
                        </div>
                        
                        {fecha && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                <Calendar className="w-3 h-3 text-slate-300" />
                                <span className="text-[10px] md:text-xs font-medium text-slate-200 capitalize">{fecha}</span>
                            </div>
                        )}
                    </div>

                    {/* VERSÍCULO (Fuente grande pero aprovechando el ancho) */}
                    <div className="relative mb-6 px-0 md:px-10 w-full max-w-5xl">
                        <Quote className="absolute -top-4 -left-2 w-6 h-6 text-yellow-500/30 rotate-180" />
                        
                        <blockquote 
                          className="relative z-10 text-xl md:text-3xl lg:text-4xl leading-relaxed font-serif italic text-white drop-shadow-md"
                        >
                           "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
                        </blockquote>
                        
                        <Quote className="absolute -bottom-4 -right-2 w-6 h-6 text-yellow-500/30" />
                    </div>

                    {/* FOOTER COMPACTO: Referencia y Botones en una fila si hay espacio */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
                        
                        {/* Referencia */}
                        <div className="flex flex-col items-center md:items-end">
                            <cite className="text-xl font-bold text-yellow-400 not-italic font-serif">
                                Juan 3:16
                            </cite>
                            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                                RVR1960
                            </span>
                        </div>

                        {/* Divisor vertical en desktop */}
                        <div className="hidden md:block w-[1px] h-10 bg-white/10" />

                        {/* Botones de Acción */}
                        <div className="flex gap-3">
                            <button 
                              onClick={handleCopiar}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all active:scale-95 text-slate-300 hover:text-white text-xs font-medium"
                            >
                                {copiado && mensajeToast.includes('portapapeles') ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                <span>Copiar</span>
                            </button>
                            
                            <button 
                              onClick={handleCompartir}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/20 hover:border-yellow-500/40 transition-all active:scale-95 text-yellow-500 hover:text-yellow-400 text-xs font-medium"
                            >
                                <Share2 className="w-4 h-4" />
                                <span>Compartir</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

      </div>

      {/* --- NOTIFICACIÓN TOAST FLOTANTE --- */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${copiado ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/90 border border-green-500/30 text-white rounded-full shadow-2xl backdrop-blur-md">
            <div className="bg-green-500/20 p-1 rounded-full">
                <Check className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-xs font-medium">{mensajeToast}</span>
        </div>
      </div>

    </section>
  );
}
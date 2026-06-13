'use client';

import { useState, useEffect } from 'react';
import { MapPin, X, Sparkles, Navigation, Copy, Check } from 'lucide-react';

export default function IglesiaCTASection() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Dirección exacta
  const address = "Calle 3 de Agosto S/N, Distrito de San Agustín de Cajas - Ref: Quebrada Honda Paradero Vista Alegre – Huancayo, Perú";

  // NOTA: Reemplaza esto con tu URL real de Google Maps Embed si la tienes.
  // He puesto una búsqueda genérica centrada en San Agustín de Cajas como ejemplo.
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.004084634868!2d-75.2310706851875!3d-12.043130991469712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9646936f7e2b%3A0x38356513520685c2!2sSan%20Agust%C3%ADn%20de%20Cajas!5e0!3m2!1ses!2spe!4v1625000000000!5m2!1ses!2spe"; 
  
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isMapOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMapOpen]);

  return (
    <>
      {/* --- SECCIÓN PRINCIPAL --- */}
      <section className="py-24 relative bg-[#0B1120] overflow-hidden">
        
        {/* Fondos y Efectos */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full border border-amber-500/30 bg-blue-950/50 backdrop-blur-sm shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]">
             <Sparkles className="w-6 h-6 text-amber-400 fill-amber-400" />
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">Visitarnos?</span>
          </h2>
          
          <p className="text-xl text-blue-200/80 mb-10 max-w-2xl mx-auto font-light">
            Las puertas de la casa de Dios están abiertas para ti.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => setIsMapOpen(true)}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-[#0B1120] rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)] border border-amber-300"
            >
              <MapPin className="w-5 h-5" />
              <span>Ver Ubicación</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- MODAL PANORÁMICO COMPACTO --- */}
      {isMapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#050810]/90 backdrop-blur-sm" onClick={() => setIsMapOpen(false)} />

          {/* Contenedor Modal Ancho (Max-w-6xl) */}
          <div className="relative w-full max-w-6xl bg-[#0B1120] rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-amber-500/30 flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-300 max-h-[85vh]">
            
            {/* Botón Cerrar (Flotante Absoluto) */}
            <button 
              onClick={() => setIsMapOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-600/80 text-white rounded-full backdrop-blur-md border border-white/10 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LADO IZQUIERDO: INFORMACIÓN (Compacto) */}
            <div className="w-full md:w-[380px] lg:w-[420px] p-6 lg:p-8 flex flex-col justify-center bg-gradient-to-b from-[#0F172A] to-[#0B1120] relative border-b md:border-b-0 md:border-r border-white/5 shrink-0">
              
              {/* Título integrado */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2 mb-1">
                  <MapPin className="text-amber-500 w-6 h-6" /> Ubicación
                </h3>
                <p className="text-amber-500/80 text-xs uppercase tracking-widest font-bold">
                  Te esperamos en casa
                </p>
              </div>

              {/* Tarjeta Dirección */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-6 shadow-inner">
                 <p className="text-white font-medium text-sm leading-relaxed mb-3">
                   Calle 3 de Agosto S/N <br/>
                   Distrito de San Agustín de Cajas
                 </p>
                 <div className="text-xs text-slate-400 pt-3 border-t border-white/10">
                    <span className="text-amber-500 font-bold uppercase block mb-1">Referencia:</span>
                    Quebrada Honda, Paradero Vista Alegre.<br/>Huancayo - Perú
                 </div>
              </div>

              {/* Botones Compactos */}
              <div className="grid grid-cols-1 gap-3">
                <button 
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-sm font-medium group"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />}
                  {copied ? 'Copiado' : 'Copiar Dirección'}
                </button>
                
                <a 
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold shadow-lg shadow-amber-600/20 transition-all text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  Ir con Google Maps
                </a>
              </div>
            </div>

            {/* LADO DERECHO: MAPA (Panorámico) */}
            <div className="w-full flex-grow h-[300px] md:h-auto relative bg-slate-900">
              <iframe 
                src={mapSrc}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
              
              {/* Sombra interna decorativa sobre el mapa */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_10px_0_20px_-10px_rgba(0,0,0,0.8)]"></div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
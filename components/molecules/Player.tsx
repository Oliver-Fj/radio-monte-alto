'use client';

import { Volume2, VolumeX, Signal, Share2, Wifi } from 'lucide-react';
import ArcoirisCarga from '@/components/atoms/ArcoirisCarga';
import OndaSonido from '@/components/atoms/OndaSonido';
import { useAudio } from '@/lib/contexts/AudioContext';
import { useCurrentProgram } from '@/lib/hooks/useCurrentProgram';
import { useEffect, useState } from 'react';
import PlayButton from '@/components/molecules/PlayButton';
import { publicPath } from '@/lib/utils/publicPath';

export default function Player() {
  const { volume, isMuted, isPlaying: audioIsPlaying, isLoading, error, changeVolume, toggleMute } = useAudio();
  const currentProgram = useCurrentProgram();
  const [copied, setCopied] = useState(false);

  // Función para copiar el link de la radio
  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: 'Radio Monte Alto', url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* el visitante canceló o el portapapeles no está disponible */
    }
  };

  const estadoTexto = error
    ? 'Sin conexión al servidor. Pulsa Escuchar para reintentar.'
    : isLoading
      ? 'Conectando con la radio…'
      : audioIsPlaying
        ? `En vivo: ${currentProgram ? currentProgram.nombre : 'Música cristiana continua'}`
        : '';

  return (
    <section
      id="player"
      aria-label="Reproductor de Radio Monte Alto"
      data-keep-dark
      className="fixed bottom-0 left-0 right-0 z-[100] pb-[env(safe-area-inset-bottom)] bg-slate-900/95 backdrop-blur-xl"
    >
      {/* Anuncio para lectores de pantalla: estado de la señal */}
      <p className="sr-only" aria-live="polite" role="status">{estadoTexto}</p>
      <p className="sr-only" aria-live="polite">{copied ? 'Enlace de la radio copiado' : ''}</p>
      
      
      
      {/* --- CONTENEDOR PRINCIPAL (Glassmorphism + Textura) --- */}
      <div className="border-t border-white/10 shadow-[0_-10px_50px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Textura de fondo sutil */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: `url(${publicPath('/images/grid.svg')})` }}
        />
        
        {/* Luz ambiental dorada difusa en el centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] bg-blue-600/10 blur-[80px] pointer-events-none rounded-full" />

        {/* Línea de Luz Superior (Neón) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent shadow-[0_0_15px_rgba(234,179,8,0.5)]" />

        <div className="container mx-auto px-4 py-3 relative z-10">
          
          {/* --- VISTA DE ESCRITORIO --- */}
          <div className="hidden md:flex items-center justify-between gap-8">
            
            {/* IZQUIERDA: Identidad de la Radio */}
            <div className="flex items-center gap-4 w-1/4 min-w-[240px]">
              <div className="relative group">
                {audioIsPlaying && <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full motion-safe:animate-pulse" aria-hidden="true" />}
                <div className="relative scale-105">
                  <PlayButton variant="player" />
                </div>
              </div>
              
              <div>
                <p className="font-bold text-white tracking-tight drop-shadow-sm leading-tight">
                  Radio Monte Alto
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {audioIsPlaying && !error ? (
                    <span className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-2 py-[2px] rounded-full">
                      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                      </span>
                      <span className="text-[9px] font-bold text-red-400 tracking-wider">EN VIVO</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-blue-300/60 font-medium tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full">
                      <Wifi className="w-3 h-3" aria-hidden="true" /> Señal en línea
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTRO: Info del Programa + Visualizador */}
            <div className="flex-1 flex flex-col items-center justify-center text-center relative">
              
              {/* Si está sonando, mostramos el visualizador */}
              {audioIsPlaying && !error && (
                <OndaSonido alto={18} grosor={3} espacio={3} className="mb-1.5" />
              )}

              <div className="max-w-[400px] min-w-0 truncate">
                {error ? (
                  <span className="text-red-400 text-sm flex items-center justify-center gap-2">
                    <Signal className="w-4 h-4" aria-hidden="true" /> Sin conexión al servidor
                  </span>
                ) : isLoading ? (
                  <span className="flex items-center justify-center gap-2.5 text-blue-300 text-sm">
                    <ArcoirisCarga tamano={3} />
                    Conectando…
                  </span>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-blue-100 font-medium text-sm tracking-wide">
                      {audioIsPlaying ? (
                        currentProgram ? (
                          <>Estás escuchando: <span className="text-yellow-400 font-bold drop-shadow-sm">{currentProgram.nombre}</span></>
                        ) : (
                          <>Estás escuchando: <span className="text-yellow-400 font-bold drop-shadow-sm">Música cristiana continua</span></>
                        )
                      ) : (
                        <span className="text-blue-200/50 text-xs uppercase tracking-widest">Dale Play para conectar</span>
                      )}
                    </span>
                    {audioIsPlaying && currentProgram && (
                      <span className="text-blue-200/60 text-[11px] font-mono tabular-nums tracking-wide">
                        {currentProgram.horario} · {currentProgram.categoria}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* DERECHA: Controles Extra + Volumen */}
            <div className="flex items-center justify-end gap-3 w-1/4 min-w-[240px]">
              
              {/* Botón Compartir (Nuevo detalle) */}
              <button
                type="button"
                onClick={handleShare}
                aria-label="Compartir la radio"
                className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-blue-300 hover:text-white hover:bg-white/10 rounded-full transition-colors relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                title="Compartir radio"
              >
                 <Share2 className="w-4 h-4" aria-hidden="true" />
                 {/* Tooltip de copiado */}
                 {copied && (
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in duration-200" aria-hidden="true">
                     ¡Link copiado!
                   </span>
                 )}
              </button>

              {/* Indicador HD (Detalle visual) */}
              <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px] font-bold text-blue-300/50 hidden lg:block">
                <abbr title="Audio en alta definición" className="no-underline">HD</abbr> AUDIO
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-colors group/vol ml-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                  aria-pressed={isMuted}
                  className="text-blue-200 hover:text-white transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
                </button>
                
                <div className="w-24 relative flex items-center">
                  <input
                    type="range"
                    name="volumen"
                    aria-label="Volumen"
                    aria-valuetext={`${Math.round(isMuted ? 0 : volume * 100)} %`}
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={(e) => changeVolume(Number(e.target.value) / 100)}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer z-10 relative accent-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute h-1 bg-yellow-500 rounded-full pointer-events-none"
                    style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- VISTA MÓVIL (Compacta) --- */}
          <div className="md:hidden flex flex-col gap-3">
            
            {/* Fila Superior */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                 <PlayButton variant="player" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-white text-sm">Radio Monte Alto</p>
                  
                  {/* Mini Visualizador */}
                  {audioIsPlaying && !error && <OndaSonido alto={14} grosor={2} espacio={2} />}
                </div>
                
                <p className="text-xs text-blue-200/80 truncate mt-0.5">
                  {error ? 'Error de señal' : 
                   isLoading ? 'Cargando…' : 
                   audioIsPlaying ? (
                     currentProgram ? (
                       <span className="text-yellow-400 font-medium">{currentProgram.nombre}</span>
                     ) : <span className="text-yellow-400 font-medium">Música cristiana continua</span>
                   ) : 'Toca play para escuchar'}
                </p>
              </div>

              {/* Acciones Móvil */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleShare}
                  aria-label="Compartir la radio"
                  className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-blue-300 hover:bg-white/5 hover:text-white transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                >
                  <Share2 className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                  aria-pressed={isMuted}
                  className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 ${isMuted ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-white/5 text-blue-200 hover:bg-white/10'}`}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            {/* Barra de progreso decorativa (Solo visible cuando suena) */}
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative" aria-hidden="true">
               {audioIsPlaying ? (
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 motion-safe:animate-[shimmer_2s_infinite] w-full" />
               ) : (
                 <div className="w-0 h-full bg-slate-700" />
               )}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
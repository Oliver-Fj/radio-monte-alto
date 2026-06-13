'use client';

import { Volume2, VolumeX, Radio, Signal, Share2, Info, Wifi } from 'lucide-react';
import { useAudio } from '@/lib/contexts/AudioContext';
import { usePlayer } from '@/lib/contexts/PlayerContext';
import { useCurrentProgram } from '@/lib/hooks/useCurrentProgram';
import { useEffect, useState } from 'react';
import PlayButton from '@/components/molecules/PlayButton';

const STREAM_URL = 'https://sp.dattavolt.com/8114/stream';

export default function Player() {
  const { volume, isMuted, isPlaying: audioIsPlaying, isLoading, error, changeVolume, toggleMute } = useAudio();
  const { setIsPlaying } = usePlayer();
  const currentProgram = useCurrentProgram();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsPlaying(audioIsPlaying);
  }, [audioIsPlaying, setIsPlaying]);

  // Función para copiar el link de la radio
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out">
      
      {/* --- ESTILOS DE ANIMACIÓN (Visualizador) --- */}
      <style jsx global>{`
        @keyframes music-bar {
          0%, 100% { height: 20%; opacity: 0.5; }
          50% { height: 100%; opacity: 1; }
        }
        .bar-1 { animation: music-bar 0.8s ease-in-out infinite; }
        .bar-2 { animation: music-bar 1.2s ease-in-out infinite 0.1s; }
        .bar-3 { animation: music-bar 0.9s ease-in-out infinite 0.2s; }
        .bar-4 { animation: music-bar 1.1s ease-in-out infinite 0.3s; }
      `}</style>

      {/* --- CONTENEDOR PRINCIPAL (Glassmorphism + Textura) --- */}
      <div className="bg-slate-900/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_50px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02] pointer-events-none" />
        
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
                {audioIsPlaying && <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full animate-pulse" />}
                <div className="relative scale-105">
                  <PlayButton variant="player" />
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-white tracking-tight drop-shadow-sm leading-tight">
                  Radio Monte Alto
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  {audioIsPlaying && !error ? (
                    <span className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 px-2 py-[2px] rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                      </span>
                      <span className="text-[9px] font-bold text-red-400 tracking-wider">EN VIVO</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-blue-300/60 font-medium tracking-wider uppercase bg-white/5 px-2 py-0.5 rounded-full">
                      <Wifi className="w-3 h-3" /> Señal Online
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* CENTRO: Info del Programa + Visualizador */}
            <div className="flex-1 flex flex-col items-center justify-center text-center relative">
              
              {/* Si está sonando, mostramos el visualizador */}
              {audioIsPlaying && !error && (
                <div className="flex items-end justify-center gap-1 h-4 mb-1.5 opacity-80">
                  <div className="w-1 bg-yellow-400 rounded-full bar-1" />
                  <div className="w-1 bg-yellow-400 rounded-full bar-2" />
                  <div className="w-1 bg-yellow-400 rounded-full bar-3" />
                  <div className="w-1 bg-yellow-400 rounded-full bar-4" />
                  <div className="w-1 bg-yellow-400 rounded-full bar-2" />
                  <div className="w-1 bg-yellow-400 rounded-full bar-1" />
                </div>
              )}

              <div className="max-w-[400px] truncate transition-all duration-300">
                {error ? (
                  <span className="text-red-400 text-sm flex items-center justify-center gap-2">
                    <Signal className="w-4 h-4" /> Sin conexión al servidor
                  </span>
                ) : isLoading ? (
                  <span className="text-blue-300 text-sm animate-pulse">Conectando señal satelital...</span>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-blue-100 font-medium text-sm tracking-wide">
                      {audioIsPlaying ? (
                        currentProgram ? (
                          <>Estás escuchando: <span className="text-yellow-400 font-bold drop-shadow-sm">{currentProgram.nombre}</span></>
                        ) : (
                          <span className="text-yellow-400 font-medium">"El Portavoz del Reino de Dios"</span>
                        )
                      ) : (
                        <span className="text-blue-200/50 text-xs uppercase tracking-widest">Dale Play para conectar</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* DERECHA: Controles Extra + Volumen */}
            <div className="flex items-center justify-end gap-3 w-1/4 min-w-[240px]">
              
              {/* Botón Compartir (Nuevo detalle) */}
              <button 
                onClick={handleShare}
                className="p-2 text-blue-300 hover:text-white hover:bg-white/10 rounded-full transition-all relative group" 
                title="Compartir radio"
              >
                 <Share2 className="w-4 h-4" />
                 {/* Tooltip de copiado */}
                 {copied && (
                   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-500 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap animate-in fade-in zoom-in duration-200">
                     ¡Link copiado!
                   </span>
                 )}
              </button>

              {/* Indicador HD (Detalle visual) */}
              <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px] font-bold text-blue-300/50 hidden lg:block cursor-help" title="Calidad Alta Definición">
                HD AUDIO
              </div>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-colors group/vol ml-2">
                <button 
                  onClick={toggleMute} 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                
                <div className="w-24 relative flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={(e) => changeVolume(Number(e.target.value) / 100)}
                    className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer z-10 relative accent-yellow-400"
                  />
                  <div 
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
                  <h3 className="font-bold text-white text-sm">Radio Monte Alto</h3>
                  
                  {/* Mini Visualizador */}
                  {audioIsPlaying && !error && (
                    <div className="flex items-end gap-0.5 h-3">
                      <div className="w-0.5 bg-yellow-400 rounded-full bar-1" />
                      <div className="w-0.5 bg-yellow-400 rounded-full bar-3" />
                      <div className="w-0.5 bg-yellow-400 rounded-full bar-2" />
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-blue-200/80 truncate mt-0.5">
                  {error ? 'Error de señal' : 
                   isLoading ? 'Cargando...' : 
                   audioIsPlaying ? (
                     currentProgram ? (
                       <span className="text-yellow-400 font-medium">{currentProgram.nombre}</span>
                     ) : 'Señal en vivo'
                   ) : 'Toca play para escuchar'}
                </p>
              </div>

              {/* Acciones Móvil */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full text-blue-300 hover:bg-white/5"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={toggleMute} 
                  className={`p-2 rounded-full transition-colors ${isMuted ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-blue-200'}`}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Barra de progreso decorativa (Solo visible cuando suena) */}
            <div className="w-full h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
               {audioIsPlaying ? (
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 animate-[shimmer_2s_infinite] w-full" />
               ) : (
                 <div className="w-0 h-full bg-slate-700" />
               )}
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
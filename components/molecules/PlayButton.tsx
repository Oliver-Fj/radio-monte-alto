
'use client';

import { Play, Pause, Loader2 } from 'lucide-react';
import { useAudio } from '@/lib/contexts/AudioContext';

export default function PlayButton({ variant = 'header' }: { variant?: 'header' | 'player' }) {
  const { isPlaying, isLoading, togglePlay } = useAudio();

  if (variant === 'header') {
    return (
      <button
        type="button"
        onClick={togglePlay}
        disabled={isLoading}
        aria-pressed={isPlaying}
        aria-label={isLoading ? 'Cargando la radio…' : isPlaying ? 'Pausar la radio en vivo' : 'Escuchar la radio en vivo'}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-[background-color,color,opacity,transform] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${isPlaying ? 'bg-red-600 hover:bg-red-500 motion-safe:animate-pulse' : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'} ${isLoading ? 'opacity-75' : ''}`}
      >
        {isLoading ? <Loader2 className="w-4 h-4 motion-safe:animate-spin" aria-hidden="true" /> : isPlaying ? <Pause className="w-4 h-4 fill-current" aria-hidden="true" /> : <Play className="w-4 h-4 fill-current" aria-hidden="true" />}
        <span className="uppercase">{isLoading ? 'Cargando…' : isPlaying ? 'En vivo' : 'Escuchar'}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={togglePlay}
      disabled={isLoading}
      aria-pressed={isPlaying}
      aria-label={isLoading ? 'Cargando la radio…' : isPlaying ? 'Pausar la radio en vivo' : 'Escuchar la radio en vivo'}
      className="w-14 h-14 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors shadow-lg flex items-center justify-center touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
    >
      {isLoading ? <Loader2 className="w-7 h-7 text-blue-900 motion-safe:animate-spin" aria-hidden="true" /> : isPlaying ? <Pause className="w-7 h-7 text-blue-900 fill-blue-900" aria-hidden="true" /> : <Play className="w-7 h-7 text-blue-900 fill-blue-900 ml-0.5" aria-hidden="true" />}
    </button>
  );
}

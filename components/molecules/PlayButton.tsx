
'use client';

import { Play, Pause, Loader2 } from 'lucide-react';
import { useAudio } from '@/lib/contexts/AudioContext';

export default function PlayButton({ variant = 'header' }: { variant?: 'header' | 'player' }) {
  const { isPlaying, isLoading, togglePlay } = useAudio();

  if (variant === 'header') {
    return (
      <button onClick={togglePlay} disabled={isLoading} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isPlaying ? 'bg-red-600 hover:bg-red-500 animate-pulse' : 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'} ${isLoading ? 'opacity-75' : ''}`}>
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
        {isLoading ? 'CARGANDO' : isPlaying ? 'EN VIVO' : 'ESCUCHAR'}
      </button>
    );
  }

  return (
    <button onClick={togglePlay} disabled={isLoading} className="w-14 h-14 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center">
      {isLoading ? <Loader2 className="w-7 h-7 text-blue-900 animate-spin" /> : isPlaying ? <Pause className="w-7 h-7 text-blue-900 fill-blue-900" /> : <Play className="w-7 h-7 text-blue-900 fill-blue-900 ml-0.5" />}
    </button>
  );
}

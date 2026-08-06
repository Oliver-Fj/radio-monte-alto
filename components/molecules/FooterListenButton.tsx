'use client';

import { Play, Pause, Loader2 } from 'lucide-react';
import { useAudio } from '@/lib/contexts/AudioContext';

/** CTA del footer: reproduce la señal en vivo de verdad (mismo audio global del reproductor). */
export default function FooterListenButton() {
  const { isPlaying, isLoading, togglePlay } = useAudio();

  return (
    <button
      type="button"
      onClick={togglePlay}
      disabled={isLoading}
      aria-label={isPlaying ? 'Pausar la radio en vivo' : 'Escuchar la radio en vivo'}
      className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 motion-reduce:hover:scale-100 ${
        isPlaying
          ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-red-500/25 hover:shadow-red-500/40'
          : 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 shadow-yellow-500/25 hover:shadow-yellow-500/40'
      } ${isLoading ? 'opacity-75' : ''}`}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      ) : isPlaying ? (
        <Pause className="w-4 h-4 fill-current" aria-hidden="true" />
      ) : (
        <Play className="w-4 h-4 fill-current" aria-hidden="true" />
      )}
      {isLoading ? 'Conectando…' : isPlaying ? 'En vivo — pausar' : 'Escuchar en Vivo'}
      <span className="flex gap-[2px] items-end ml-1" aria-hidden="true">
        {[3, 5, 4, 6, 4].map((h, i) => (
          <span
            key={i}
            className={`w-[2px] rounded-full ${isPlaying ? 'bg-white/70 motion-safe:animate-pulse' : 'bg-slate-900/50'}`}
            style={{ height: `${h * 2}px`, animationDelay: `${i * 120}ms` }}
          />
        ))}
      </span>
    </button>
  );
}

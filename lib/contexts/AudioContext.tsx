
'use client';

import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  isLoading: boolean;
  volume: number;
  isMuted: boolean;
  error: boolean;
  togglePlay: () => void;
  changeVolume: (vol: number) => void;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://sp.dattavolt.com/8114/stream');
    audioRef.current.volume = volume;
    audioRef.current.preload = 'none';

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Pausar
      audioRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    } else {
      // Reproducir
      setIsLoading(true);
      setError(false);

      // Timeout de seguridad: después de 3 segundos, asumir que está reproduciendo
      loadingTimeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        setIsPlaying(true);
      }, 3000);

      try {
        await audioRef.current.play();
        // Si play() se resuelve exitosamente, actualizar inmediatamente
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
        setIsLoading(false);
        setIsPlaying(true);
      } catch (err) {
        console.error('Error al reproducir:', err);
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
        }
        setIsLoading(false);
        setError(true);
        setIsPlaying(false);
      }
    }
  };

  const changeVolume = (vol: number) => {
    setVolume(vol);
    if (vol > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, isLoading, volume, isMuted, error, togglePlay, changeVolume, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error('useAudio must be used within AudioProvider');
  return context;
}

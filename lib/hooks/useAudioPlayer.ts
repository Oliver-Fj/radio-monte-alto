'use client';

import { useState, useRef, useEffect } from 'react';

export type PlayerState = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

export function useAudioPlayer(streamUrl: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<PlayerState>('idle');
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const loadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Crear el elemento de audio
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    audioRef.current.preload = 'none';
    
    // CORS mode
    audioRef.current.crossOrigin = 'anonymous';

    const audio = audioRef.current;

    // Event Listeners
    const handleLoadStart = () => {
      console.log('🔵 Audio: Iniciando carga...');
      setState('loading');
      setError(null);
      
      // Timeout de 10 segundos para detectar problemas
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      loadTimeoutRef.current = setTimeout(() => {
        if (state === 'loading') {
          console.error('⏱️ Timeout: No se pudo cargar el stream');
          setState('error');
          setError('Tiempo de espera agotado');
          audio.pause();
        }
      }, 10000);
    };

    const handleCanPlay = () => {
      console.log('✅ Audio: Listo para reproducir');
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      if (state === 'loading') {
        setState('playing');
      }
    };

    const handlePlaying = () => {
      console.log('▶️ Audio: Reproduciendo');
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      setState('playing');
      setError(null);
    };

    const handlePause = () => {
      console.log('⏸️ Audio: Pausado');
      setState('paused');
    };

    const handleError = (e: Event) => {
      console.error('❌ Error de audio:', e);
      console.error('URL intentada:', streamUrl);
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      setState('error');
      setError('No se pudo conectar');
    };

    const handleWaiting = () => {
      console.log('⏳ Audio: Esperando datos...');
      setState('loading');
    };

    const handleStalled = () => {
      console.warn('⚠️ Audio: Conexión lenta');
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('stalled', handleStalled);

    return () => {
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('stalled', handleStalled);
      audio.pause();
      audio.src = '';
    };
  }, [streamUrl]);

  // Actualizar volumen
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const play = async () => {
    if (!audioRef.current) return;
    
    try {
      console.log('🎵 Intentando reproducir:', streamUrl);
      setState('loading');
      setError(null);
      
      // Asignar la URL al audio
      audioRef.current.src = streamUrl;
      audioRef.current.load();
      
      await audioRef.current.play();
      console.log('✅ Reproducción iniciada');
    } catch (err) {
      console.error('❌ Error al reproducir:', err);
      setState('error');
      setError('Error al reproducir');
    }
  };

  const pause = () => {
    if (!audioRef.current) return;
    console.log('⏸️ Pausando reproducción');
    audioRef.current.pause();
  };

  const togglePlay = () => {
    if (state === 'playing') {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const changeVolume = (newVolume: number) => {
    setVolume(Math.max(0, Math.min(1, newVolume)));
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return {
    state,
    volume,
    isMuted,
    error,
    togglePlay,
    toggleMute,
    changeVolume,
    isPlaying: state === 'playing',
    isLoading: state === 'loading',
  };
}

'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PlayerContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  triggerPlay: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playTrigger, setPlayTrigger] = useState(0);

  const triggerPlay = () => {
    setPlayTrigger(prev => prev + 1);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying, triggerPlay }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}

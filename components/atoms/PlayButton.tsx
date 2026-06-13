'use client';

import { Play } from 'lucide-react';

interface PlayButtonProps {
  text?: string;
  variant?: 'default' | 'large';
}

export default function PlayButton({ 
  text = 'Escucha En Vivo Ahora',
  variant = 'default' 
}: PlayButtonProps) {
  const scrollToPlayer = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    });
  };

  const sizeClasses = variant === 'large' 
    ? 'px-8 py-4 text-lg'
    : 'px-6 py-3 text-base';

  return (
    <button
      onClick={scrollToPlayer}
      className={`bg-yellow-500 text-blue-900 ${sizeClasses} rounded-lg font-bold hover:bg-yellow-400 transition inline-flex items-center gap-2 shadow-xl hover:shadow-2xl active:scale-95`}
    >
      <Play className="w-5 h-5 fill-blue-900" />
      {text}
    </button>
  );
}

'use client';

import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { useGlowCard } from '@/lib/hooks/useGlowCard';
import styles from './GlowCard.module.css';

interface GlowLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Clases del contenedor interior (el que recorta la imagen y el texto). */
  interiorClassName?: string;
  style?: CSSProperties;
}

/**
 * Enlace-tarjeta con el borde de colores que brilla hacia el puntero
 * («Colored, Glowing Edges», codepen.io/simeydotme/pen/RNWoPRj).
 * Mismo efecto que las tarjetas de eventos, listo para cualquier tarjeta
 * que lleve a otra página (artículos, «Sigue leyendo», etc.).
 */
export default function GlowLink({ href, children, className, interiorClassName, style }: GlowLinkProps) {
  const ref = useGlowCard<HTMLAnchorElement>(styles.animando);

  return (
    <Link
      ref={ref}
      href={href}
      style={style}
      className={cn(
        styles.glowCard,
        'group flex h-full flex-col rounded-3xl',
        'transition-shadow duration-500 hover:shadow-2xl',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
        className,
      )}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={cn(styles.interior, interiorClassName)}>{children}</span>
    </Link>
  );
}

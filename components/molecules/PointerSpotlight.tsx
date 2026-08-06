'use client';

import { useEffect, useRef } from 'react';

/**
 * Foco de luz global que sigue al puntero por toda la página.
 * Montar una sola vez en el layout. Solo actúa con ratón real,
 * actualiza vía requestAnimationFrame sin re-renders y se desvanece
 * cuando el cursor sale de la ventana.
 */
export default function PointerSpotlight({
  color = 'rgba(251, 191, 36, 0.08)',
  size = 650,
}: {
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const x = e.clientX;
      const y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 65%)`;
        el.style.opacity = '1';
      });
    };
    const leave = () => {
      el.style.opacity = '0';
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
    };
  }, [color, size]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[45] opacity-0 transition-opacity duration-500"
    />
  );
}

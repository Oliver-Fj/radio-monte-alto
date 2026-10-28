'use client';

import { useEffect, useRef } from 'react';

/**
 * Lógica del borde que brilla (codepen.io/simeydotme/pen/RNWoPRj):
 * al mover el puntero sobre la tarjeta escribe --pointer-a (ángulo) y
 * --pointer-d (cercanía al borde). La primera vez que la tarjeta entra en
 * pantalla hace la animación de presentación del original.
 */

const redondear = (v: number, p = 3) => parseFloat(v.toFixed(p));
const limitar = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
const easeInCubic = (x: number) => x * x * x;

interface Animacion {
  desde?: number;
  hasta?: number;
  duracion?: number;
  retardo?: number;
  ease?: (t: number) => number;
  alActualizar: (v: number) => void;
  alTerminar?: () => void;
}

/** Anima un número con requestAnimationFrame. Devuelve una función para cancelar. */
function animarNumero({ desde = 0, hasta = 100, duracion = 1000, retardo = 0, ease = easeOutCubic, alActualizar, alTerminar }: Animacion) {
  let frame = 0;
  const timeout = window.setTimeout(() => {
    const inicio = performance.now();
    const paso = () => {
      const t = Math.min((performance.now() - inicio) / duracion, 1);
      alActualizar(desde + (hasta - desde) * ease(t));
      if (t < 1) frame = requestAnimationFrame(paso);
      else alTerminar?.();
    };
    frame = requestAnimationFrame(paso);
  }, retardo);
  return () => {
    window.clearTimeout(timeout);
    cancelAnimationFrame(frame);
  };
}

export function useGlowCard<T extends HTMLElement>(claseAnimando: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card) return;

    const alMover = (e: PointerEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const cx = width / 2;
      const cy = height / 2;
      const dx = x - cx;
      const dy = y - cy;

      // Ángulo desde el centro hacia el puntero
      let angulo = 0;
      if (dx !== 0 || dy !== 0) {
        angulo = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        if (angulo < 0) angulo += 360;
      }

      // Cercanía al borde (0..1)
      const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
      const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
      const borde = limitar(1 / Math.min(kx, ky), 0, 1);

      card.style.setProperty('--pointer-a', `${redondear(angulo)}deg`);
      card.style.setProperty('--pointer-d', `${redondear(borde * 100)}`);
      card.classList.remove(claseAnimando);
    };

    card.addEventListener('pointermove', alMover);

    // Animación de presentación, una sola vez al entrar en pantalla
    const cancelar: Array<() => void> = [];
    const presentar = () => {
      const anguloInicio = 110;
      const anguloFin = 465;
      const fijarAngulo = (v: number) =>
        card.style.setProperty('--pointer-a', `${(anguloFin - anguloInicio) * (v / 100) + anguloInicio}deg`);

      card.style.setProperty('--pointer-a', `${anguloInicio}deg`);
      card.classList.add(claseAnimando);

      cancelar.push(
        animarNumero({ duracion: 500, alActualizar: (v) => card.style.setProperty('--pointer-d', `${v}`) }),
        animarNumero({ ease: easeInCubic, duracion: 1500, hasta: 50, alActualizar: fijarAngulo }),
        animarNumero({ ease: easeOutCubic, retardo: 1500, duracion: 2250, desde: 50, hasta: 100, alActualizar: fijarAngulo }),
        animarNumero({
          ease: easeInCubic,
          retardo: 2500,
          duracion: 1500,
          desde: 100,
          hasta: 0,
          alActualizar: (v) => card.style.setProperty('--pointer-d', `${v}`),
          alTerminar: () => card.classList.remove(claseAnimando),
        }),
      );
    };

    let observador: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observador = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting) {
            observador?.disconnect();
            const t = window.setTimeout(presentar, 500);
            cancelar.push(() => window.clearTimeout(t));
          }
        },
        { threshold: 0.4 },
      );
      observador.observe(card);
    }

    return () => {
      card.removeEventListener('pointermove', alMover);
      observador?.disconnect();
      cancelar.forEach((c) => c());
    };
  }, [claseAnimando]);

  return ref;
}

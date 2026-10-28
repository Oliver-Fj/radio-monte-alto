'use client';

import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * Alterna entre los dos temas verdes del sitio:
 *   · menta      → claro, es el que se muestra por defecto (clase `light`)
 *   · esmeralda  → verde profundo, para quien prefiera menos brillo
 *
 * El layout ya renderiza <html class="light">, así que servidor y cliente
 * coinciden; un script inline quita la clase si el visitante guardó el
 * tema noche, antes del primer pintado (evita parpadeos).
 */

// Observa cambios de clase en <html>.
function subscribeTheme(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const esClaro = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains('light'),
    () => true, // el servidor pinta el tema claro
  );

  const toggle = () => {
    const siguienteEsClaro = !esClaro;
    document.documentElement.classList.toggle('light', siguienteEsClaro);
    // La barra del navegador acompaña al tema
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', siguienteEsClaro ? '#E9F4FD' : '#1B5578');
    try {
      localStorage.setItem('rma-theme', siguienteEsClaro ? 'claro' : 'noche');
    } catch {
      /* almacenamiento no disponible */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={esClaro ? 'Activar el tema noche' : 'Activar el tema claro'}
      title={esClaro ? 'Tema noche' : 'Tema claro'}
      className="relative w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-blue-600 hover:bg-white/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
    >
      {esClaro ? (
        <Moon className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}

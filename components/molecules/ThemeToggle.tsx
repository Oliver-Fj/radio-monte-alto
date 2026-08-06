'use client';

import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

/**
 * Alterna la clase `light` en <html> y persiste la preferencia.
 * El tema por defecto es el oscuro (identidad original del sitio).
 * Un script inline en el layout aplica el tema guardado antes del primer
 * pintado para evitar parpadeos (FOUC).
 */

// Observa cambios de clase en <html> (sin errores de hidratación:
// el servidor siempre parte de tema oscuro).
function subscribeTheme(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const isLight = useSyncExternalStore(
    subscribeTheme,
    () => document.documentElement.classList.contains('light'),
    () => false
  );

  const toggle = () => {
    const next = !isLight;
    document.documentElement.classList.toggle('light', next);
    try {
      localStorage.setItem('rma-theme', next ? 'light' : 'dark');
    } catch {
      /* almacenamiento no disponible */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Activar modo oscuro' : 'Activar modo claro'}
      title={isLight ? 'Modo oscuro' : 'Modo claro'}
      className="relative w-11 h-11 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-amber-300 hover:bg-white/10 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
    >
      {isLight ? (
        <Moon className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Sun className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}

'use client';

import { useEffect } from 'react';

/**
 * Pide confirmación al cerrar o recargar la pestaña mientras un formulario
 * tiene texto sin enviar, para no perder lo que la persona escribió.
 */
export function useAvisoSalida(hayCambios: boolean) {
  useEffect(() => {
    if (!hayCambios) return;
    const avisar = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', avisar);
    return () => window.removeEventListener('beforeunload', avisar);
  }, [hayCambios]);
}

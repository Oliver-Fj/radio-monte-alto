import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// jsdom no implementa matchMedia: mock configurable por prueba.
export function mockMatchMedia(reducedMotion = false) {
  const listeners = new Set<(e: { matches: boolean }) => void>();
  const mql = {
    matches: reducedMotion,
    media: '(prefers-reduced-motion: reduce)',
    addEventListener: (_: string, cb: (e: { matches: boolean }) => void) => listeners.add(cb),
    removeEventListener: (_: string, cb: (e: { matches: boolean }) => void) => listeners.delete(cb),
    dispatch: (matches: boolean) => listeners.forEach((cb) => cb({ matches })),
  };
  window.matchMedia = vi.fn().mockReturnValue(mql) as unknown as typeof window.matchMedia;
  return mql;
}

mockMatchMedia(false);

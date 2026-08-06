/**
 * Pruebas de publicPath().
 * El sitio se publica bajo /radio-monte-alto en GitHub Pages, así que estas
 * pruebas fijan el comportamiento del prefijo para que no se rompa de nuevo.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const cargarConBase = async (base: string | undefined) => {
  vi.resetModules();
  if (base === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
  else process.env.NEXT_PUBLIC_BASE_PATH = base;
  return (await import('./publicPath')).publicPath;
};

describe('publicPath', () => {
  const original = process.env.NEXT_PUBLIC_BASE_PATH;

  beforeEach(() => vi.resetModules());
  afterEach(() => {
    if (original === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = original;
  });

  it('añade el prefijo cuando el sitio vive en un subdirectorio', async () => {
    const publicPath = await cargarConBase('/radio-monte-alto');
    expect(publicPath('/images/eventos/jovenes.png')).toBe(
      '/radio-monte-alto/images/eventos/jovenes.png',
    );
  });

  it('no duplica el prefijo si la ruta ya lo trae', async () => {
    const publicPath = await cargarConBase('/radio-monte-alto');
    expect(publicPath('/radio-monte-alto/images/logo.png')).toBe(
      '/radio-monte-alto/images/logo.png',
    );
  });

  it('deja la ruta intacta cuando no hay basePath (desarrollo)', async () => {
    const publicPath = await cargarConBase('');
    expect(publicPath('/images/eventos/jovenes.png')).toBe('/images/eventos/jovenes.png');
  });

  it('normaliza rutas sin barra inicial', async () => {
    const publicPath = await cargarConBase('/radio-monte-alto');
    expect(publicPath('images/logo.png')).toBe('/radio-monte-alto/images/logo.png');
  });

  it('no toca URLs absolutas ni data URIs', async () => {
    const publicPath = await cargarConBase('/radio-monte-alto');
    expect(publicPath('https://ejemplo.com/foto.jpg')).toBe('https://ejemplo.com/foto.jpg');
    expect(publicPath('//cdn.ejemplo.com/foto.jpg')).toBe('//cdn.ejemplo.com/foto.jpg');
    expect(publicPath('data:image/png;base64,AAAA')).toBe('data:image/png;base64,AAAA');
  });

  it('no confunde un prefijo que solo coincide en parte', async () => {
    const publicPath = await cargarConBase('/radio');
    expect(publicPath('/radiografia/foto.png')).toBe('/radio/radiografia/foto.png');
  });

  it('devuelve cadenas vacías sin tocarlas', async () => {
    const publicPath = await cargarConBase('/radio-monte-alto');
    expect(publicPath('')).toBe('');
  });
});

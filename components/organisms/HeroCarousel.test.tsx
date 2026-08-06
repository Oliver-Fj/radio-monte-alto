/**
 * Pruebas del HeroCarousel optimizado.
 * Cubren: renderizado inicial, navegación (botones, indicadores, teclado),
 * avance automático y pausas, reducción de movimiento, limpieza de intervalos,
 * fallback de imágenes, semántica (h1 único) y accesibilidad.
 */
import React from 'react';
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import HeroCarousel from './HeroCarousel';
import { mockMatchMedia } from '../../vitest.setup';

const getSlides = () => screen.getAllByRole('group', { hidden: true });
const activeSlide = () =>
  getSlides().find((s) => s.getAttribute('aria-hidden') === 'false')!;

describe('HeroCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockMatchMedia(false);
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('renderiza la primera diapositiva activa', () => {
    render(<HeroCarousel />);
    expect(activeSlide()).toHaveAttribute('aria-label', expect.stringContaining('Diapositiva 1 de 3'));
  });

  it('tiene un único h1 en el carrusel', () => {
    render(<HeroCarousel />);
    expect(document.querySelectorAll('h1')).toHaveLength(1);
  });

  it('las diapositivas ocultas tienen aria-hidden e inert', () => {
    render(<HeroCarousel />);
    const hidden = getSlides().filter((s) => s.getAttribute('aria-hidden') === 'true');
    expect(hidden).toHaveLength(2);
    hidden.forEach((s) => expect(s.hasAttribute('inert')).toBe(true));
  });

  it('solo la primera imagen es prioritaria; el resto lazy', () => {
    render(<HeroCarousel />);
    const imgs = Array.from(document.querySelectorAll('img'));
    expect(imgs[0]).toHaveAttribute('loading', 'eager');
    expect(imgs[0]).toHaveAttribute('fetchpriority', 'high');
    imgs.slice(1).forEach((img) => expect(img).toHaveAttribute('loading', 'lazy'));
  });

  it('navega con el botón siguiente', () => {
    render(<HeroCarousel />);
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar diapositiva siguiente' }));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
  });

  it('navega con el botón anterior (circular)', () => {
    render(<HeroCarousel />);
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar diapositiva anterior' }));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 3 de 3');
  });

  it('navega mediante indicadores y marca aria-current', () => {
    render(<HeroCarousel />);
    const indicator2 = screen.getByRole('button', { name: /Ir a la diapositiva 2/ });
    fireEvent.click(indicator2);
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
    expect(indicator2).toHaveAttribute('aria-current', 'true');
  });

  it('avanza automáticamente cada 6 segundos', () => {
    render(<HeroCarousel />);
    act(() => vi.advanceTimersByTime(6000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
  });

  it('reinicia el temporizador tras una selección manual (no salta enseguida)', () => {
    render(<HeroCarousel />);
    act(() => vi.advanceTimersByTime(5000));
    fireEvent.click(screen.getByRole('button', { name: /Ir a la diapositiva 2/ }));
    act(() => vi.advanceTimersByTime(3000)); // 5s+3s > 6s, pero el timer se reinició
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
  });

  it('el botón de pausa detiene el avance y el de reanudar lo restaura', () => {
    render(<HeroCarousel />);
    fireEvent.click(screen.getByRole('button', { name: 'Pausar carrusel' }));
    act(() => vi.advanceTimersByTime(15000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 1 de 3');
    fireEvent.click(screen.getByRole('button', { name: 'Reanudar carrusel' }));
    act(() => vi.advanceTimersByTime(6000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
  });

  it('pausa cuando un control interno recibe foco visible (teclado)', () => {
    // jsdom nunca marca :focus-visible; simulamos el foco por teclado
    // delegando el resto de selectores a la implementación original.
    const origMatches = HTMLElement.prototype.matches;
    vi.spyOn(HTMLElement.prototype, 'matches').mockImplementation(function (
      this: HTMLElement,
      sel: string
    ) {
      return sel === ':focus-visible' ? true : origMatches.call(this, sel);
    });
    render(<HeroCarousel />);
    act(() => screen.getByRole('button', { name: 'Mostrar diapositiva siguiente' }).focus());
    act(() => vi.advanceTimersByTime(15000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 1 de 3');
  });

  it('con prefers-reduced-motion el avance continúa (fundido breve) y el manual funciona', () => {
    mockMatchMedia(true);
    render(<HeroCarousel />);
    act(() => vi.advanceTimersByTime(6000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar diapositiva siguiente' }));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 3 de 3');
  });

  it('sigue avanzando después de un clic de ratón en un control', () => {
    render(<HeroCarousel />);
    fireEvent.click(screen.getByRole('button', { name: 'Mostrar diapositiva siguiente' }));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
    // El clic no debe dejar el carrusel congelado: avanza tras 6 s más.
    act(() => vi.advanceTimersByTime(6000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 3 de 3');
  });

  it('navega con flechas del teclado dentro del carrusel', () => {
    render(<HeroCarousel />);
    const region = screen.getByRole('region', { name: 'Noticias destacadas' });
    fireEvent.keyDown(region, { key: 'ArrowRight' });
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 2 de 3');
    fireEvent.keyDown(region, { key: 'ArrowLeft' });
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 1 de 3');
  });

  it('no captura flechas cuando se escribe en un campo de texto', () => {
    render(<HeroCarousel />);
    const region = screen.getByRole('region', { name: 'Noticias destacadas' });
    const input = document.createElement('input');
    region.appendChild(input);
    fireEvent.keyDown(input, { key: 'ArrowRight' });
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 1 de 3');
  });

  it('ante error de imagen usa el PNG de respaldo y luego un fondo estable', () => {
    render(<HeroCarousel />);
    const img = document.querySelectorAll('img')[0] as HTMLImageElement;
    fireEvent.error(img);
    expect(document.querySelectorAll('img')[0].getAttribute('src')).toContain('hero-desktop');
    fireEvent.error(document.querySelectorAll('img')[0]);
    // La diapositiva conserva su texto y el carrusel sus controles.
    expect(screen.getAllByText('MONTE ALTO').length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'Mostrar diapositiva siguiente' })).toBeInTheDocument();
  });

  it('todos los controles son <button type="button"> con nombre accesible', () => {
    render(<HeroCarousel />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(6); // 2 flechas + 3 indicadores + pausa
    buttons.forEach((b) => {
      expect(b).toHaveAttribute('type', 'button');
      expect(b).toHaveAccessibleName();
    });
  });

  it('limpia el intervalo al desmontar sin actualizaciones posteriores', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const clearSpy = vi.spyOn(global, 'clearInterval');
    const { unmount } = render(<HeroCarousel />);
    unmount();
    act(() => vi.advanceTimersByTime(30000));
    expect(clearSpy).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('pausa el avance cuando la pestaña pasa a segundo plano', () => {
    render(<HeroCarousel />);
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    fireEvent(document, new Event('visibilitychange'));
    act(() => vi.advanceTimersByTime(15000));
    expect(activeSlide().getAttribute('aria-label')).toContain('Diapositiva 1 de 3');
    Object.defineProperty(document, 'hidden', { configurable: true, value: false });
    fireEvent(document, new Event('visibilitychange'));
  });
});

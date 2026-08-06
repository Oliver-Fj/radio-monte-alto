/**
 * Pruebas de la sección de eventos especiales.
 * Cubren: parrilla y orden de los eventos, apertura y cierre del modal,
 * navegación del carrusel (puntos y teclado), bloqueo del scroll y semántica
 * accesible del diálogo.
 */
import React from 'react';
import { render, screen, fireEvent, cleanup, within } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import EventosEspecialesSection from './EventosEspecialesSection';
import eventosOrdenados from '@/lib/data/eventos';

/** jsdom no implementa IntersectionObserver: lo hacemos disparar de inmediato. */
class ObservadorInmediato {
  constructor(private cb: IntersectionObserverCallback) {}
  observe() {
    this.cb([{ isIntersecting: true } as IntersectionObserverEntry], this as never);
  }
  disconnect() {}
  unobserve() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
}

const primero = eventosOrdenados[0];

const abrirPrimerEvento = () => {
  fireEvent.click(screen.getAllByRole('button', { name: /^Ver detalles de/ })[0]);
  return screen.getByRole('dialog');
};

describe('EventosEspecialesSection', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', ObservadorInmediato);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('respeta el límite de tarjetas', () => {
    render(<EventosEspecialesSection limite={3} />);
    expect(screen.getAllByRole('button', { name: /^Ver detalles de/ })).toHaveLength(3);
  });

  it('ordena los eventos: primero los próximos, luego los realizados más recientes', () => {
    render(<EventosEspecialesSection />);
    const tarjetas = screen.getAllByRole('button', { name: /^Ver detalles de/ });
    expect(tarjetas[0]).toHaveAccessibleName(`Ver detalles de ${primero.titulo}`);

    const proximos = eventosOrdenados.filter((e) => e.estado === 'proximo');
    const realizados = eventosOrdenados.filter((e) => e.estado === 'realizado');
    // Ningún realizado puede aparecer antes que un próximo.
    expect(eventosOrdenados.slice(0, proximos.length).every((e) => e.estado === 'proximo')).toBe(true);
    // Entre los realizados, del más reciente al más antiguo.
    const fechas = realizados.map((e) => e.fechaISO);
    expect(fechas).toEqual([...fechas].sort().reverse());
  });

  it('cada tarjeta anuncia fecha, lugar y afiche con texto alternativo', () => {
    render(<EventosEspecialesSection limite={1} />);
    expect(screen.getByText(primero.fechaTexto)).toBeInTheDocument();
    expect(screen.getByText(primero.lugar)).toBeInTheDocument();
    expect(screen.getByAltText(primero.portadaAlt)).toBeInTheDocument();
  });

  it('no muestra el diálogo hasta que se elige un evento', () => {
    render(<EventosEspecialesSection />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('abre el detalle con la invitación y el enlace a la página del evento', () => {
    render(<EventosEspecialesSection />);
    const dialogo = abrirPrimerEvento();

    expect(dialogo).toHaveAttribute('aria-modal', 'true');
    expect(within(dialogo).getByRole('heading', { name: primero.titulo })).toBeInTheDocument();
    expect(within(dialogo).getByText(primero.invitacion)).toBeInTheDocument();
    expect(within(dialogo).getByRole('link', { name: /Ver la página del evento/ })).toHaveAttribute(
      'href',
      `/eventos/${primero.slug}`,
    );
  });

  it('bloquea el scroll de la página mientras el diálogo está abierto', () => {
    render(<EventosEspecialesSection />);
    abrirPrimerEvento();
    expect(document.body.style.overflow).toBe('hidden');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('cierra el diálogo al hacer clic en el fondo', () => {
    render(<EventosEspecialesSection />);
    const dialogo = abrirPrimerEvento();
    fireEvent.mouseDown(dialogo.parentElement!);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('carrusel del detalle', () => {
    const laminas = () =>
      screen.getAllByRole('group', { hidden: true }).filter(
        (n) => n.getAttribute('aria-roledescription') === 'lámina',
      );

    it('muestra solo la primera lámina y una por cada foto', () => {
      render(<EventosEspecialesSection />);
      abrirPrimerEvento();

      const items = laminas();
      expect(items).toHaveLength(primero.galeria.length);
      expect(items[0]).toHaveAttribute('aria-hidden', 'false');
      expect(items[1]).toHaveAttribute('aria-hidden', 'true');
    });

    it('cambia de lámina con los puntos de paginación', () => {
      render(<EventosEspecialesSection />);
      abrirPrimerEvento();

      fireEvent.click(screen.getByRole('button', { name: /Ir a la lámina 3/ }));
      expect(laminas()[2]).toHaveAttribute('aria-hidden', 'false');
      expect(laminas()[0]).toHaveAttribute('aria-hidden', 'true');
    });

    it('muestra los afiches completos y las fotos ajustadas al marco', () => {
      const indice = eventosOrdenados.findIndex((e) =>
        e.galeria.some((lamina) => lamina.formato === 'afiche'),
      );
      expect(indice).toBeGreaterThanOrEqual(0);

      render(<EventosEspecialesSection />);
      fireEvent.click(screen.getAllByRole('button', { name: /^Ver detalles de/ })[indice]);

      const galeria = eventosOrdenados[indice].galeria;
      const afiches = galeria.filter((lamina) => lamina.formato === 'afiche');
      const dialogo = screen.getByRole('dialog');

      expect(dialogo.querySelectorAll('img.object-contain')).toHaveLength(afiches.length);
      expect(dialogo.querySelectorAll('img.object-cover')).toHaveLength(
        galeria.length - afiches.length,
      );
    });

    it('navega con las flechas del teclado y da la vuelta al llegar al final', () => {
      render(<EventosEspecialesSection />);
      abrirPrimerEvento();
      const carrusel = screen.getByRole('group', { name: new RegExp(`Galería de ${primero.titulo}`) });

      fireEvent.keyDown(carrusel, { key: 'ArrowLeft' });
      expect(laminas()[primero.galeria.length - 1]).toHaveAttribute('aria-hidden', 'false');

      fireEvent.keyDown(carrusel, { key: 'ArrowRight' });
      expect(laminas()[0]).toHaveAttribute('aria-hidden', 'false');
    });
  });
});

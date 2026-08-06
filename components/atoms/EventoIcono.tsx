import { createElement } from 'react';
import type { IconoEvento } from '@/lib/data/eventos';
import { EVENTO_ICONO } from '@/lib/utils/eventoTheme';

interface EventoIconoProps {
  nombre: IconoEvento;
  className?: string;
}

/**
 * Dibuja el ícono declarado en los datos del evento.
 * Se resuelve aquí, en un componente propio, para no crear componentes dentro
 * del render de las tarjetas (regla react-hooks/static-components).
 */
export default function EventoIcono({ nombre, className }: EventoIconoProps) {
  return createElement(EVENTO_ICONO[nombre] ?? EVENTO_ICONO.CalendarHeart, {
    className,
    'aria-hidden': true,
  });
}

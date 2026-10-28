import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface GoldTitleProps {
  /** Línea pequeña en versalitas sobre el título. */
  antetitulo?: ReactNode;
  /** El texto grande con el relleno esmeralda animado. */
  children: ReactNode;
  /** Línea de cierre debajo del título. */
  pie?: ReactNode;
  /** Etiqueta real del encabezado. Por defecto h2. */
  as?: 'h1' | 'h2' | 'h3';
  /** Marco de doble filete arriba y abajo, como el original. */
  conMarco?: boolean;
  /**
   * Fondo sobre el que se apoya el título. En 'claro' se usan verdes más
   * profundos para que el texto no se pierda contra el papel.
   */
  sobre?: 'oscuro' | 'claro';
  className?: string;
}

/**
 * Título de sección con relleno verde esmeralda animado (colores del logo).
 *
 * El degradado se recorta contra el texto (`background-clip: text`) y se
 * desplaza en bucle; las reglas viven en globals.css bajo `.texto-dorado`
 * (nombre heredado; hoy pinta los verdes de la marca)
 * porque `background-clip` animado no se expresa bien en utilidades.
 * Si el visitante pide menos movimiento, la animación se detiene y el verde
 * queda fijo.
 */
export default function GoldTitle({
  antetitulo,
  children,
  pie,
  as: Etiqueta = 'h2',
  conMarco = true,
  sobre = 'oscuro',
  className,
}: GoldTitleProps) {
  const esClaro = sobre === 'claro';

  return (
    <div
      className={cn(
        'mx-auto mb-4 inline-block max-w-3xl px-4 text-center',
        conMarco && 'border-y-[3px] border-double py-6',
        conMarco && (esClaro ? 'border-emerald-700/30' : 'border-emerald-600/30'),
        className,
      )}
    >
      {antetitulo && (
        <p
          className={cn(
            'mb-3 text-[11px] font-semibold uppercase tracking-[0.45em]',
            esClaro ? 'text-emerald-800/70' : 'text-emerald-700/70',
          )}
        >
          {antetitulo}
        </p>
      )}

      <Etiqueta className={cn('m-0', !esClaro && 'texto-dorado-halo')}>
        <span
          className={cn(
            'texto-dorado block font-serif text-[clamp(1.9rem,5.5vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight',
            esClaro && 'texto-dorado-claro',
          )}
        >
          {children}
        </span>
      </Etiqueta>

      {pie && (
        <p
          className={cn(
            'mt-3 text-[11px] font-semibold uppercase tracking-[0.3em]',
            esClaro ? 'text-emerald-800/60' : 'text-emerald-700/60',
          )}
        >
          {pie}
        </p>
      )}
    </div>
  );
}

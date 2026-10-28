import { cn } from '@/lib/utils/cn';

const MESES = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SET', 'OCT', 'NOV', 'DIC'];

interface FechaCalendarioProps {
  /** Fecha en formato AAAA-MM-DD (la del inicio del evento). */
  fechaISO: string;
  grande?: boolean;
  className?: string;
}

/**
 * Hojita de calendario con el mes y el día del evento, como las que se
 * cuelgan en el periódico mural de la iglesia. Es decorativa: la fecha
 * completa se lee en el texto de la tarjeta.
 */
export default function FechaCalendario({ fechaISO, grande = false, className }: FechaCalendarioProps) {
  const [, mes, dia] = fechaISO.split('-').map(Number);

  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 flex-col overflow-hidden rounded-lg bg-white text-center shadow-md ring-1 ring-black/10',
        grande ? 'w-14' : 'w-12',
        className,
      )}
    >
      <span className={cn('block bg-[#DC2626] font-bold tracking-wider text-white', grande ? 'py-1 text-[11px]' : 'py-0.5 text-[10px]')}>
        {MESES[(mes || 1) - 1]}
      </span>
      <span className={cn('block font-extrabold leading-none text-[#0E3F5C]', grande ? 'py-2 text-2xl' : 'py-1.5 text-xl')}>
        {dia}
      </span>
    </span>
  );
}

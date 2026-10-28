import { cn } from '@/lib/utils/cn';
import styles from './ArcoirisCarga.module.css';

interface ArcoirisCargaProps {
  /** Tamaño base en px: el arcoíris mide 12 veces este valor de ancho. */
  tamano?: number;
  className?: string;
}

/** Indicador de carga con el arcoíris del escudo. Es decorativo. */
export default function ArcoirisCarga({ tamano = 12, className }: ArcoirisCargaProps) {
  return (
    <ul aria-hidden="true" className={cn(styles.arcoiris, className)} style={{ fontSize: `${tamano}px` }}>
      {Array.from({ length: 7 }, (_, i) => (
        <li key={i} />
      ))}
    </ul>
  );
}

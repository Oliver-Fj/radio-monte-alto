import { cn } from '@/lib/utils/cn';
import styles from './OndaSonido.module.css';

// Mismo orden de colores y retardos que el pen original
const BARRAS = [
  { color: '#facc15', retardo: styles.d3 },
  { color: '#ef4444', retardo: styles.d2 },
  { color: '#22c55e', retardo: styles.d1 },
  { color: '#3b82f6', retardo: styles.d4 },
  { color: '#ef4444', retardo: styles.d3 },
  { color: '#f97316', retardo: styles.d4 },
  { color: '#facc15', retardo: styles.d1 },
  { color: '#22c55e', retardo: styles.d3 },
  { color: '#3b82f6', retardo: styles.d4 },
];

interface OndaSonidoProps {
  /** Alto máximo de las barras en px. */
  alto?: number;
  /** Ancho de cada barra en px. */
  grosor?: number;
  /** Separación entre barras en px. */
  espacio?: number;
  className?: string;
}

/** Ecualizador decorativo: nueve barras de colores que laten. */
export default function OndaSonido({ alto = 18, grosor = 3, espacio = 3, className }: OndaSonidoProps) {
  return (
    <span aria-hidden="true" className={cn(styles.onda, className)} style={{ gap: espacio, height: alto }}>
      {BARRAS.map(({ color, retardo }, i) => (
        <span
          key={i}
          className={cn(styles.barra, retardo)}
          style={{ width: grosor, height: alto, backgroundColor: color }}
        />
      ))}
    </span>
  );
}

/**
 * Fecha y hora oficiales de la radio (Huancayo, Perú — America/Lima).
 *
 * La parrilla y el versículo del día se calculan con la hora de Lima y no
 * con la del dispositivo: así un oyente en Madrid o en Nueva York ve el
 * mismo programa "al aire" que un oyente en Huancayo.
 */
export const ZONA_RADIO = 'America/Lima';

const partesFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: ZONA_RADIO,
  weekday: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

const DIAS_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export interface HoraLima {
  /** 0 = domingo … 6 = sábado */
  diaSemana: number;
  diaDelMes: number;
  horas: number;
  minutos: number;
}

export function horaLima(fecha: Date = new Date()): HoraLima {
  const p: Record<string, string> = {};
  for (const { type, value } of partesFmt.formatToParts(fecha)) p[type] = value;
  return {
    diaSemana: DIAS_EN.indexOf(p.weekday),
    diaDelMes: Number(p.day),
    horas: Number(p.hour) % 24,
    minutos: Number(p.minute),
  };
}

/** "Lunes, 26 de octubre de 2026" con la fecha de Lima. */
export function fechaLargaLima(fecha: Date = new Date()): string {
  const texto = new Intl.DateTimeFormat('es-PE', {
    timeZone: ZONA_RADIO,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(fecha);
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

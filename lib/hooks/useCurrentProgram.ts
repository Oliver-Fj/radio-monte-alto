'use client';

import { useEffect, useState } from 'react';
import { programas } from '@/lib/data/programas';
import type { Programa } from '@/lib/types';
import { horaLima } from '@/lib/utils/horaLima';

// Día de la semana de JS (0 = domingo) → letra usada en la parrilla
const LETRA_DIA = ['D', 'L', 'M', 'X', 'J', 'V', 'S'] as const;

function aMinutos(hhmm: string) {
  const [h, m] = hhmm.trim().split(':').map(Number);
  return h * 60 + m;
}

/** Programa que está al aire ahora mismo (hora de Lima), según la parrilla real. */
function programaAhora(ahora: Date): Programa | null {
  const { horas, minutos, diaSemana } = horaLima(ahora);
  const minutosAhora = horas * 60 + minutos;
  const diaHoy = LETRA_DIA[diaSemana];

  return (
    programas.find((p) => {
      if (!p.dias.includes(diaHoy)) return false;
      const [ini, fin] = p.horario.split('-');
      if (!ini || !fin) return false;
      const inicio = aMinutos(ini);
      const final = aMinutos(fin);
      // Franja que cruza medianoche
      if (final <= inicio) return minutosAhora >= inicio || minutosAhora < final;
      return minutosAhora >= inicio && minutosAhora < final;
    }) ?? null
  );
}

/**
 * Devuelve el programa al aire según la hora y el día actuales.
 * Se recalcula cada minuto. Fuera de horario devuelve null para que la
 * interfaz muestre la programación musical continua.
 */
export function useCurrentProgram(): Programa | null {
  // null en el servidor y en el primer render: evita errores de hidratación.
  const [actual, setActual] = useState<Programa | null>(null);

  useEffect(() => {
    const actualizar = () => setActual(programaAhora(new Date()));
    actualizar();
    const id = setInterval(actualizar, 60_000);
    return () => clearInterval(id);
  }, []);

  return actual;
}

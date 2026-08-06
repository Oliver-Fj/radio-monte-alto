// lib/utils/eventoTheme.ts
// Traduce la paleta declarada en lib/data/eventos.ts a clases de Tailwind.
// Las clases se escriben completas a propósito: Tailwind no detecta nombres
// construidos por concatenación (`bg-${color}-500` nunca llegaría al CSS final).

import { BookOpenCheck, CalendarHeart, HeartHandshake, PartyPopper, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ColorEvento, IconoEvento } from '@/lib/data/eventos';

export interface EventoTheme {
  /** Degradado principal (botones, ícono, franja superior, punto activo). */
  gradiente: string;
  /** Texto del acento sobre fondo oscuro. */
  texto: string;
  /** Fondo tenue + borde para etiquetas. */
  chip: string;
  /** Telón de color detrás del afiche, para que la tarjeta no se vea apagada. */
  telon: string;
  /** Sombra de color al hacer hover en la tarjeta. */
  sombra: string;
  /** Borde de color al hacer hover. */
  borde: string;
  /** Resplandor del punto activo del carrusel. */
  brillo: string;
  /** Punto inactivo del carrusel (mismo color, muy tenue). */
  puntoSuave: string;
}

export const EVENTO_THEME: Record<ColorEvento, EventoTheme> = {
  rose: {
    gradiente: 'from-rose-400 via-pink-500 to-fuchsia-600',
    texto: 'text-rose-300',
    chip: 'bg-rose-500/10 border-rose-500/25 text-rose-200',
    telon: 'from-rose-500/30 via-pink-900/40 to-slate-950',
    sombra: 'group-hover:shadow-rose-500/25',
    borde: 'group-hover:border-rose-400/40',
    brillo: 'shadow-[0_0_18px_rgba(244,63,94,0.65)]',
    puntoSuave: 'bg-rose-500/25 hover:bg-rose-400/60',
  },
  blue: {
    gradiente: 'from-sky-400 via-blue-500 to-indigo-600',
    texto: 'text-sky-300',
    chip: 'bg-sky-500/10 border-sky-500/25 text-sky-200',
    telon: 'from-sky-500/30 via-blue-900/40 to-slate-950',
    sombra: 'group-hover:shadow-sky-500/25',
    borde: 'group-hover:border-sky-400/40',
    brillo: 'shadow-[0_0_18px_rgba(56,189,248,0.65)]',
    puntoSuave: 'bg-sky-500/25 hover:bg-sky-400/60',
  },
  cyan: {
    gradiente: 'from-cyan-300 via-teal-400 to-blue-600',
    texto: 'text-cyan-300',
    chip: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-200',
    telon: 'from-cyan-500/30 via-teal-900/40 to-slate-950',
    sombra: 'group-hover:shadow-cyan-500/25',
    borde: 'group-hover:border-cyan-400/40',
    brillo: 'shadow-[0_0_18px_rgba(34,211,238,0.65)]',
    puntoSuave: 'bg-cyan-500/25 hover:bg-cyan-400/60',
  },
  amber: {
    gradiente: 'from-yellow-300 via-amber-400 to-orange-500',
    texto: 'text-amber-300',
    chip: 'bg-amber-500/10 border-amber-500/25 text-amber-200',
    telon: 'from-amber-500/30 via-orange-900/40 to-slate-950',
    sombra: 'group-hover:shadow-amber-500/25',
    borde: 'group-hover:border-amber-400/40',
    brillo: 'shadow-[0_0_18px_rgba(251,191,36,0.65)]',
    puntoSuave: 'bg-amber-500/25 hover:bg-amber-400/60',
  },
  emerald: {
    gradiente: 'from-emerald-300 via-emerald-500 to-teal-600',
    texto: 'text-emerald-300',
    chip: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-200',
    telon: 'from-emerald-500/30 via-teal-900/40 to-slate-950',
    sombra: 'group-hover:shadow-emerald-500/25',
    borde: 'group-hover:border-emerald-400/40',
    brillo: 'shadow-[0_0_18px_rgba(16,185,129,0.65)]',
    puntoSuave: 'bg-emerald-500/25 hover:bg-emerald-400/60',
  },
  violet: {
    gradiente: 'from-violet-400 via-purple-500 to-fuchsia-600',
    texto: 'text-violet-300',
    chip: 'bg-violet-500/10 border-violet-500/25 text-violet-200',
    telon: 'from-violet-500/30 via-purple-900/40 to-slate-950',
    sombra: 'group-hover:shadow-violet-500/25',
    borde: 'group-hover:border-violet-400/40',
    brillo: 'shadow-[0_0_18px_rgba(167,139,250,0.65)]',
    puntoSuave: 'bg-violet-500/25 hover:bg-violet-400/60',
  },
};

export const EVENTO_ICONO: Record<IconoEvento, LucideIcon> = {
  HeartHandshake,
  BookOpenCheck,
  Users,
  PartyPopper,
  CalendarHeart,
};

export function getEventoTheme(color: ColorEvento): EventoTheme {
  return EVENTO_THEME[color] ?? EVENTO_THEME.amber;
}

export function getEventoIcono(icono: IconoEvento): LucideIcon {
  return EVENTO_ICONO[icono] ?? CalendarHeart;
}

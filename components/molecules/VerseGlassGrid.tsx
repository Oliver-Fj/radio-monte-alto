import type { LucideIcon } from 'lucide-react';
import GlassCard3D, { type Glass3DTheme } from './GlassCard3D';

export interface VersiculoGlass {
  texto: string;
  referencia: string;
  theme: Glass3DTheme;
  icon: LucideIcon;
}

/** Rejilla de versículos en tarjetas 3D de cristal, con semántica de cita. */
export default function VerseGlassGrid({ versiculos }: { versiculos: VersiculoGlass[] }) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {versiculos.map(({ texto, referencia, theme, icon: Icon }) => (
        <GlassCard3D key={referencia} theme={theme} icon={<Icon className="w-5 h-5" aria-hidden="true" />}>
          <figure className="px-7 pb-7 pt-28 md:pt-32">
            <blockquote className="font-serif italic text-lg leading-relaxed [color:var(--g3-body)]">
              &ldquo;{texto}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-bold tracking-wide [color:var(--g3-title)]">
              — {referencia}
            </figcaption>
          </figure>
        </GlassCard3D>
      ))}
    </div>
  );
}

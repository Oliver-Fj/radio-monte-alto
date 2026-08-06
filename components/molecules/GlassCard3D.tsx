import type { CSSProperties, ReactNode } from 'react';

/**
 * Tarjeta 3D de cristal (estilo DepthFold): gradiente temático, lámina de
 * cristal, órbitas apiladas con ícono e inclinación al hover. Todo el
 * movimiento es CSS puro (ver .g3-* en globals.css) y respeta
 * prefers-reduced-motion. Los textos internos usan var(--g3-title) y
 * var(--g3-body) para heredar el tema.
 */

const THEMES = {
  ocean: {
    '--g3-grad': 'linear-gradient(155deg, #22d3ee 0%, #0284c7 50%, #1e3a8a 100%)',
    '--g3-orbit': 'rgba(125, 211, 252, 0.35)',
    '--g3-title': '#0c4a6e',
    '--g3-body': 'rgba(12, 74, 110, 0.9)',
  },
  solar: {
    '--g3-grad': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 45%, #d97706 100%)',
    '--g3-orbit': 'rgba(254, 243, 199, 0.45)',
    '--g3-title': '#78350f',
    '--g3-body': 'rgba(120, 53, 15, 0.9)',
  },
  mint: {
    '--g3-grad': 'linear-gradient(135deg, #34d399 0%, #10b981 45%, #047857 100%)',
    '--g3-orbit': 'rgba(167, 243, 208, 0.4)',
    '--g3-title': '#064e3b',
    '--g3-body': 'rgba(6, 78, 59, 0.9)',
  },
  flame: {
    '--g3-grad': 'linear-gradient(135deg, #f87171 0%, #ef4444 45%, #b91c1c 100%)',
    '--g3-orbit': 'rgba(254, 202, 202, 0.45)',
    '--g3-title': '#7f1d1d',
    '--g3-body': 'rgba(127, 29, 29, 0.9)',
  },
  royal: {
    '--g3-grad': 'linear-gradient(145deg, #a855f7 0%, #7c3aed 45%, #4c1d95 100%)',
    '--g3-orbit': 'rgba(221, 214, 254, 0.4)',
    '--g3-title': '#4c1d95',
    '--g3-body': 'rgba(76, 29, 149, 0.9)',
  },
  rose: {
    '--g3-grad': 'linear-gradient(135deg, #f472b6 0%, #ec4899 45%, #be185d 100%)',
    '--g3-orbit': 'rgba(251, 207, 232, 0.4)',
    '--g3-title': '#831843',
    '--g3-body': 'rgba(131, 24, 66, 0.9)',
  },
} as const;

export type Glass3DTheme = keyof typeof THEMES;

export default function GlassCard3D({
  theme = 'ocean',
  icon,
  children,
  className = '',
}: {
  theme?: Glass3DTheme;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`g3-parent ${className}`} style={THEMES[theme] as CSSProperties}>
      <div className="g3-card">
        <div className="g3-glass" aria-hidden="true" />
        <div className="g3-orbit" aria-hidden="true">
          <span className="g3-circle" />
          <span className="g3-circle" />
          <span className="g3-circle" />
          <span className="g3-circle">{icon}</span>
        </div>
        <div className="g3-content">{children}</div>
      </div>
    </div>
  );
}

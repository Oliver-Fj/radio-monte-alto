'use client';
import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Compass, type LucideIcon } from 'lucide-react';
import GlassCard3D, { type Glass3DTheme } from '@/components/molecules/GlassCard3D';
import GoldTitle from '@/components/atoms/GoldTitle';

const CARDS: { icon: LucideIcon; titulo: string; texto: string; theme: Glass3DTheme }[] = [
  {
    icon: Target,
    titulo: 'Nuestra Misión',
    texto: 'Proclamar el evangelio de Jesucristo a toda criatura mediante la radio, la enseñanza bíblica y el servicio comunitario, haciendo discípulos que transformen sus familias, ciudades y naciones.',
    theme: 'solar',
  },
  {
    icon: Eye,
    titulo: 'Nuestra Visión',
    texto: 'Ser un ministerio radial de referencia en toda América Latina, que a través de la Palabra de Dios forme creyentes maduros, familias íntegras y congregaciones que glorifiquen a Cristo.',
    theme: 'ocean',
  },
  {
    icon: Compass,
    titulo: 'Nuestros Valores',
    texto: 'La Biblia como única regla de fe. La oración como estilo de vida. La unidad en el cuerpo de Cristo. La excelencia en el servicio. El amor como distintivo de los hijos de Dios.',
    theme: 'mint',
  },
];

export default function MisionVisionCards() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-950 py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-5">
            <Compass className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Nuestra Identidad</span>
          </div>
          <GoldTitle>Misión, Visión y Valores</GoldTitle>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Lo que nos mueve, hacia dónde vamos y los principios que sostienen cada transmisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CARDS.map(({ icon: Icon, titulo, texto, theme }, i) => (
            <div key={titulo}
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 130}ms` }}>
              <GlassCard3D theme={theme} icon={<Icon className="w-5 h-5" aria-hidden="true" />} className="h-full">
                <div className="px-7 pb-7 pt-24 md:pt-28">
                  <h3 className="text-2xl font-serif font-bold [color:var(--g3-title)]">{titulo}</h3>
                  <div className="mt-3 h-[2px] w-12 rounded-full bg-white/60" />
                  <p className="mt-4 leading-relaxed text-[15px] [color:var(--g3-body)]">{texto}</p>
                </div>
              </GlassCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

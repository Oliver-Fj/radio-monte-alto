'use client';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Heart, Globe, Users, Music, Shield, Sparkles, type LucideIcon } from 'lucide-react';
import GlassCard3D, { type Glass3DTheme } from '@/components/molecules/GlassCard3D';
import GoldTitle from '@/components/atoms/GoldTitle';

const PILARES: { icon: LucideIcon; titulo: string; texto: string; theme: Glass3DTheme }[] = [
  { icon: BookOpen, titulo: 'Palabra',       theme: 'solar', texto: 'La Biblia es nuestra constitución. Toda enseñanza, decisión y dirección nace del estudio serio y reverente de las Escrituras.' },
  { icon: Heart,    titulo: 'Oración',       theme: 'ocean', texto: 'Somos una casa de oración. Intercedemos por las familias, la ciudad y las naciones con fe persistente e incansable.' },
  { icon: Globe,    titulo: 'Misión',        theme: 'mint',  texto: 'El mandato de Cristo nos impulsa más allá de las paredes. Llevamos el evangelio a cada rincón posible, sin fronteras.' },
  { icon: Users,    titulo: 'Comunidad',     theme: 'royal', texto: 'Somos familia. La koinonía, el amor fraternal y el apoyo mutuo son marcas visibles de nuestra congregación.' },
  { icon: Music,    titulo: 'Alabanza',      theme: 'rose',  texto: 'La adoración es nuestro estilo de vida, no solo un segmento del culto. Glorificamos a Dios en todo tiempo y circunstancia.' },
  { icon: Shield,   titulo: 'Sana Doctrina', theme: 'flame', texto: 'Proclamamos el evangelio apostólico sin compromisos. La verdad bíblica es el fundamento inamovible de todo lo que creemos.' },
];

export default function IglesiaPilaresSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-yellow-500/5 blur-[160px] rounded-full" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Pilares de Fe</span>
          </div>
          <GoldTitle>Sobre qué estamos edificados</GoldTitle>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Seis pilares que definen quiénes somos, cómo vivimos y hacia dónde vamos como cuerpo de Cristo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PILARES.map(({ icon: Icon, titulo, texto, theme }, i) => (
            <div key={titulo}
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms` }}>
              <GlassCard3D theme={theme} icon={<Icon className="w-5 h-5" aria-hidden="true" />} className="h-full">
                <div className="px-7 pb-7 pt-24">
                  <h3 className="text-xl font-serif font-bold [color:var(--g3-title)]">{titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed [color:var(--g3-body)]">{texto}</p>
                </div>
              </GlassCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

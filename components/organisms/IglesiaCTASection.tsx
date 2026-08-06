'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Church, Heart, Phone } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';

export default function IglesiaCTASection() {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.06),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center"
          style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(32px)', transition:'all 0.9s cubic-bezier(0.16,1,0.3,1)' }}>

          {/* Ícono central */}
          <div className="relative mx-auto w-20 h-20 mb-8">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[30px] rounded-full animate-pulse" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 flex items-center justify-center">
              <Church className="w-9 h-9 text-yellow-400" />
            </div>
          </div>

          <GoldTitle>¿Quieres ser parte de nuestra familia?</GoldTitle>
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Las puertas de nuestra iglesia están abiertas para ti. Ven como eres — Dios tiene un plan hermoso para tu vida.
          </p>

          {/* Versiculo */}
          <div className="relative mb-10 px-8 py-5 rounded-2xl bg-yellow-500/5 border border-yellow-500/15 max-w-xl mx-auto">
            <p className="text-yellow-100 font-serif italic text-lg leading-relaxed">
              "Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos y miembros de la familia de Dios."
            </p>
            <p className="text-yellow-400/60 text-sm mt-2 font-bold">— Efesios 2:19</p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900 font-bold text-sm shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
              <Heart className="w-4 h-4 fill-slate-900" />
              Contáctanos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/51985796588" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 hover:border-yellow-500/40 text-white hover:text-yellow-300 font-bold text-sm transition-all duration-300 hover:bg-yellow-500/5">
              <Phone className="w-4 h-4" />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

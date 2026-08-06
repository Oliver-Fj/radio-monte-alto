// app/recursos/page.tsx  — REEMPLAZA el anterior

import dynamic from 'next/dynamic';
import RecursosHeroSection from '@/components/organisms/ResourcesHeroSection';

const ArticlesSection  = dynamic(() => import('@/components/organisms/ArticlesSection'));
const HimnosSection    = dynamic(() => import('@/components/organisms/HimnosSection'));

export default function RecursosPage() {
  return (
    // min-h-screen + bg-slate-950 evita la franja blanca con el footer
    <div className="bg-slate-950 min-h-screen">
      <RecursosHeroSection />

      {/* ── Divisor entre hero y artículos ── */}
      <div className="container mx-auto px-4 pt-2 pb-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
          <span className="text-yellow-500/30 text-xs tracking-[0.3em] uppercase font-bold">Artículos</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        </div>
      </div>

      <ArticlesSection />

      {/* ── Divisor entre artículos e himnos ── */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
          <span className="text-yellow-500/30 text-xs tracking-[0.3em] uppercase font-bold">Himnos</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
        </div>
      </div>

      <HimnosSection />
    </div>
  );
}

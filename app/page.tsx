// app/page.tsx  — REEMPLAZA TU ARCHIVO COMPLETO

import dynamic from 'next/dynamic';
import HeroCarousel from '@/components/organisms/HeroCarousel';

// Secciones que aparecen inmediatamente (arriba del fold) — import normal
// HeroCarousel ya está arriba

// Secciones debajo del fold — carga diferida (lazy)
// Esto hace que la página principal cargue mucho más rápido
const VerseSection           = dynamic(() => import('@/components/organisms/VerseSection'));
const FeaturedProgramsSection = dynamic(() => import('@/components/organisms/FeaturedProgramsSection'));
const AppDownloadSection     = dynamic(() => import('@/components/organisms/AppDownloadSection'));
const EventosEspecialesSection = dynamic(() => import('@/components/organisms/EventosEspecialesSection'));
const ArticlesSection        = dynamic(() => import('@/components/organisms/ArticlesSection'));
const TestimoniosSection     = dynamic(() => import('@/components/organisms/TestimoniosSection'));

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <VerseSection />
      <FeaturedProgramsSection />
      <AppDownloadSection />
      <EventosEspecialesSection limite={3} />
      <ArticlesSection />
      <TestimoniosSection />
    </main>
  );
}

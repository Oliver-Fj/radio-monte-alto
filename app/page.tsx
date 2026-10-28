// app/page.tsx  — REEMPLAZA TU ARCHIVO COMPLETO

import dynamic from 'next/dynamic';
import HeroCarousel from '@/components/organisms/HeroCarousel';

// Secciones que aparecen inmediatamente (arriba del fold) — import normal
// HeroCarousel ya está arriba

// Secciones debajo del fold — carga diferida (lazy)
// Esto hace que la página principal cargue mucho más rápido
const VerseSection           = dynamic(() => import('@/components/organisms/VerseSection'));
// El inicio muestra las mismas tarjetas que /programacion, no otras distintas
const ProgramasGridSection = dynamic(() => import('@/components/organisms/ProgramasGridSection'));
const AppDownloadSection     = dynamic(() => import('@/components/organisms/AppDownloadSection'));
const EventosEspecialesSection = dynamic(() => import('@/components/organisms/EventosEspecialesSection'));
const ArticlesSection        = dynamic(() => import('@/components/organisms/ArticlesSection'));
const TestimoniosSection     = dynamic(() => import('@/components/organisms/TestimoniosSection'));

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      {/* Cada sección va en su franja: el fondo alterna claro, celeste,
          dorado y verde para que la página tenga ritmo y no un solo bloque. */}
      <div className="franja franja-clara">
        <VerseSection />
      </div>

      <div className="franja franja-celeste">
        <ProgramasGridSection
          limite={3}
          titulo="Programación Radial"
          subtitulo="Tres de los programas que puedes escuchar cada semana"
          mostrarEnlaceATodos
        />
      </div>

      <div className="franja franja-clara">
        <AppDownloadSection />
      </div>

      <div className="franja franja-dorada">
        <EventosEspecialesSection limite={3} />
      </div>

      <div className="franja franja-clara">
        <ArticlesSection />
      </div>

      <div className="franja franja-verde">
        <TestimoniosSection />
      </div>
    </main>
  );
}

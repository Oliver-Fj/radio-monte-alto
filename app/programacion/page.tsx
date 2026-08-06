// app/programacion/page.tsx
import dynamic from 'next/dynamic';
import ProgramacionHeroSection from '@/components/organisms/ProgramacionHeroSection';
import ProgramasGridSection from '@/components/organisms/ProgramasGridSection';

const ScheduleGrid = dynamic(() => import('@/components/organisms/ScheduleGrid'));

export default function ProgramacionPage() {
  return (
    <div className="bg-slate-950">
      <ProgramacionHeroSection />
      <ProgramasGridSection />
      <div id="horario-semanal">
        <ScheduleGrid />
      </div>
    </div>
  );
}

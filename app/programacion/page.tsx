import ProgramacionHeroSection from '@/components/organisms/ProgramacionHeroSection';
import ScheduleGrid from '@/components/organisms/ScheduleGrid';
import ProgramCalendar from '@/components/organisms/ProgramCalendar';
import { programas } from '@/lib/data/programas';

const ScheduleGridAny: any = ScheduleGrid;
const ProgramCalendarAny: any = ProgramCalendar;

export default function ProgramacionPage() {
  return (
    <div>
      <ProgramacionHeroSection />
      
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 space-y-12">
          <ScheduleGridAny programas={programas} />
          <ProgramCalendarAny programas={programas} />
        </div>
      </section>
    </div>
  );
}

import FilialesHeroSection from '@/components/organisms/FilialesHeroSection';
import FilialesVisionSection from '@/components/organisms/FilialesVisionSection';
import FilialesMapaSection from '@/components/organisms/FilialesMapaSection';
import FilialesListaSection from '@/components/organisms/FilialesListaSection';
import FilialesVersiculosSection from '@/components/organisms/FilialesVersiculosSection';
import FilialesCTASection from '@/components/organisms/FilialesCTASection';

export default function FilialesPage() {
  return (
    <div>
      <FilialesHeroSection />
      <FilialesVisionSection />
      <FilialesMapaSection />
      <FilialesListaSection />
      <FilialesVersiculosSection />
      <FilialesCTASection />
    </div>
  );
}

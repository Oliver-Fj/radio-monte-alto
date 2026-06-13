
import IglesiaHeroSection from '@/components/organisms/IglesiaHeroSection';
import IglesiaHistoriaSection from '@/components/organisms/IglesiaHistoriaSection';
import MisionVisionCards from '@/components/organisms/MisionVisionCards';
import IglesiaPilaresSection from '@/components/organisms/IglesiaPilaresSection';
import MinisteriosGridSection from '@/components/organisms/MinisteriosGridSection';
import IglesiaCTASection from '@/components/organisms/IglesiaCTASection';

export default function NuestraIglesiaPage() {
  return (
    <div className="font-sans">
      <IglesiaHeroSection />
      <IglesiaHistoriaSection />
      <MisionVisionCards />
      <IglesiaPilaresSection />
      <MinisteriosGridSection />
      <IglesiaCTASection />
    </div>
  );
}

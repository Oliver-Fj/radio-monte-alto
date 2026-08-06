// app/nuestra-iglesia/page.tsx
import dynamic from 'next/dynamic';
import IglesiaHeroSection from '@/components/organisms/IglesiaHeroSection';

const IglesiaHistoriaSection  = dynamic(() => import('@/components/organisms/IglesiaHistoriaSection'));
const MisionVisionCards       = dynamic(() => import('@/components/organisms/MisionVisionCards'));
const IglesiaPilaresSection   = dynamic(() => import('@/components/organisms/IglesiaPilaresSection'));
const MinisteriosGridSection  = dynamic(() => import('@/components/organisms/MinisteriosGridSection'));
const IglesiaCTASection       = dynamic(() => import('@/components/organisms/IglesiaCTASection'));

export default function NuestraIglesiaPage() {
  return (
    <div className="bg-slate-950">
      <IglesiaHeroSection />
      <IglesiaHistoriaSection />
      <MisionVisionCards />
      <IglesiaPilaresSection />
      <MinisteriosGridSection />
      <IglesiaCTASection />
    </div>
  );
}

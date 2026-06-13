
import ResourcesHeroSection from '@/components/organisms/ResourcesHeroSection';
import ResourcesGridSection from '@/components/organisms/ResourcesGridSection';
import DeclaracionDoctrinalSection from '@/components/organisms/DeclaracionDoctrinalSection';
import ResourcesSubscribeSection from '@/components/organisms/ResourcesSubscribeSection';

export default function RecursosPage() {
  return (
    <div>
      <ResourcesHeroSection />
      <ResourcesGridSection />
      <DeclaracionDoctrinalSection />
      <ResourcesSubscribeSection />
    </div>
  );
}

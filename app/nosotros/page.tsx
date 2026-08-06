import dynamic from 'next/dynamic';
import AboutHeroSection from '@/components/organisms/AboutHeroSection';

const AboutContentSection = dynamic(() => import('@/components/organisms/AboutContentSection'));
const MisionVisionCards   = dynamic(() => import('@/components/organisms/MisionVisionCards'));
const PhotoGallerySection = dynamic(() => import('@/components/organisms/PhotoGallerySection'));
const EventosEspecialesSection = dynamic(() => import('@/components/organisms/EventosEspecialesSection'));
const ValuesSection       = dynamic(() => import('@/components/organisms/ValuesSection'));
const TeamSection         = dynamic(() => import('@/components/organisms/TeamSection'));

export default function NosotrosPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContentSection />
      <MisionVisionCards />
      <PhotoGallerySection />
      <EventosEspecialesSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
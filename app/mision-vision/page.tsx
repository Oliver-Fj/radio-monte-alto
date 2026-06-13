import AboutHeroSection from '@/components/organisms/AboutHeroSection';
import ValuesSection from '@/components/organisms/ValuesSection';
import PhotoGallerySection from '@/components/organisms/PhotoGallerySection';
import HistorySection from '@/components/organisms/HistorySection';
import TestimoniosSection from '@/components/organisms/TestimoniosSection';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quienes Somos - Radio Monte Alto',
  description: 'Conoce la mision, , valores e historia de Radio Monte Alto - El Portavoz del Reino de Dios',
  keywords: ['radio cristiana', 'mision', '', 'iglesia', 'huancayo', 'monte alto'],
};

export default function MisionVisionPage() {
  return (
    <div>
      <AboutHeroSection />
      <ValuesSection />
      <PhotoGallerySection />
      <HistorySection />
      <TestimoniosSection />
    </div>
  );
}

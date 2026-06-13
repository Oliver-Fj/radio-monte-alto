
import HeroCarousel from '@/components/organisms/HeroCarousel';
import VerseSection from '@/components/organisms/VerseSection';
import FeaturedProgramsSection from '@/components/organisms/FeaturedProgramsSection';
import AppDownloadSection from '@/components/organisms/AppDownloadSection';
import ArticlesSection from '@/components/organisms/ArticlesSection';
import TestimoniosSection from '@/components/organisms/TestimoniosSection';

export default function Home() {
  return (
    <div className="mt-15">
      <HeroCarousel />
      <VerseSection />
      <FeaturedProgramsSection />
      <AppDownloadSection />
      <ArticlesSection />
      <TestimoniosSection />
    </div>
  );
}

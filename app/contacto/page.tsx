import dynamic from 'next/dynamic';
import ContactHeroSection from '@/components/organisms/ContactHeroSection';

const ContactInfoSection = dynamic(() => import('@/components/organisms/ContactInfoSection'));
const ContactFormSection = dynamic(() => import('@/components/organisms/ContactFormSection'));
const SocialMediaSection = dynamic(() => import('@/components/organisms/SocialMediaSection'));

export default function ContactoPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <SocialMediaSection />
    </div>
  );
}
import { Mail } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle';
import SubscribeForm from '@/components/molecules/SubscribeForm';

export default function SubscribeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 text-blue-900 mx-auto mb-4" />
          <SectionTitle 
            centered
            subtitle="Recibe nuestros últimos mensajes, estudios bíblicos y novedades directamente en tu correo"
          >
            Mantente Conectado
          </SectionTitle>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}

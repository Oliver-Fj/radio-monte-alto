import SectionTitle from '@/components/atoms/SectionTitle';
import ContactForm from '@/components/molecules/ContactForm';
import Card from '@/components/atoms/Card';

export default function ContactFormSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          subtitle="Completa el formulario y nos pondremos en contacto contigo a la brevedad"
        >
          Envianos un Mensaje
        </SectionTitle>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-gray-300">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}

import ContactInfoCard from '@/components/molecules/ContactInfoCard';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactInfoCard
            icon={Phone}
            title="Telefono / WhatsApp"
            info="+51 985 796 588"
            subInfo="Llamadas y mensajes"
            href="https://api.whatsapp.com/message/L32MAU4GLGOEN1?autoload=1&app_absent=0"
          />
          
          <ContactInfoCard
            icon={MapPin}
            title="Ubicacion"
            info="Huancayo, Junin"
            subInfo="Peru"
          />
          
          <ContactInfoCard
            icon={Mail}
            title="Email"
            info="contacto@radiomontealto.com"
            subInfo="Respuesta en 24-48 hrs"
            href="mailto:contacto@radiomontealto.com"
          />
          
          <ContactInfoCard
            icon={Clock}
            title="Horario"
            info="Lunes a Sabado"
            subInfo="24/7 en linea"
          />
        </div>
      </div>
    </section>
  );
}

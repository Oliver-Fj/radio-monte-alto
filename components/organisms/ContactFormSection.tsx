import SectionTitle from '@/components/atoms/SectionTitle';
import ContactForm from '@/components/molecules/ContactForm';
import { HeartHandshake, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ContactFormSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          centered
          subtitle="Completa el formulario y tu mensaje nos llegará directo por WhatsApp"
        >
          Envíanos un Mensaje
        </SectionTitle>

        <div className="mt-12 max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
          {/* Formulario */}
          <div className="lg:col-span-3 bg-white rounded-3xl border-2 border-gray-100 shadow-2xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-400" />
            <ContactForm />
          </div>

          {/* Panel lateral */}
          <aside className="lg:col-span-2 space-y-6">
            {/* Petición de oración */}
            <div data-keep-dark className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white p-8 shadow-2xl border border-blue-500/20">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/10 blur-3xl rounded-full" />
              <HeartHandshake className="w-10 h-10 text-amber-400 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-2">¿Necesitas oración?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Nuestro equipo de intercesión está listo para orar contigo.
                Escríbenos tu petición y la presentaremos delante de Dios.
              </p>
              <a
                href={`https://wa.me/51985796588?text=${encodeURIComponent('Hola, quisiera hacer una petición de oración: ')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 text-slate-900 font-bold text-sm shadow-lg hover:scale-105 motion-reduce:hover:scale-100 transition-transform"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Enviar petición de oración
              </a>
              <p className="mt-5 text-xs text-slate-400 italic font-serif">
                &ldquo;Orad unos por otros, para que seáis sanados&rdquo; — Santiago 5:16
              </p>
            </div>

            {/* Garantías */}
            <div className="rounded-3xl border-2 border-gray-100 bg-slate-50 p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">Respuesta rápida</p>
                  <p className="text-xs text-gray-500">Atendemos los mensajes de lunes a sábado.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 shrink-0 rounded-xl bg-blue-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-700" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">Confidencialidad</p>
                  <p className="text-xs text-gray-500">Tu información y peticiones se tratan con absoluta reserva.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

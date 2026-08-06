import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const CARDS = [
  {
    icon: Phone,
    title: 'Teléfono / WhatsApp',
    info: '+51 985 796 588',
    subInfo: 'Llamadas y mensajes',
    href: 'https://wa.me/51985796588',
    accent: 'from-emerald-500 to-green-600',
    ring: 'group-hover:ring-emerald-200',
    destacado: true,
  },
  {
    icon: Mail,
    title: 'Correo electrónico',
    info: 'contacto@radiomontealto.com',
    subInfo: 'Respuesta en 24–48 horas',
    href: 'mailto:contacto@radiomontealto.com',
    accent: 'from-blue-500 to-indigo-600',
    ring: 'group-hover:ring-blue-200',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    info: 'Huancayo, Junín',
    subInfo: 'Perú',
    accent: 'from-amber-400 to-yellow-600',
    ring: 'group-hover:ring-amber-200',
  },
  {
    icon: Clock,
    title: 'Siempre en el aire',
    info: 'Transmisión 24/7',
    subInfo: 'La señal nunca se detiene',
    accent: 'from-rose-500 to-red-600',
    ring: 'group-hover:ring-rose-200',
  },
];

export default function ContactInfoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {CARDS.map(({ icon: Icon, title, info, subInfo, href, accent, ring, destacado }) => {
            const inner = (
              <div
                className={`group relative h-full bg-white rounded-2xl border-2 p-6 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 motion-reduce:hover:translate-y-0 ring-4 ring-transparent ${ring} ${
                  destacado ? 'border-emerald-200' : 'border-gray-100'
                }`}
              >
                <div className={`h-1.5 absolute top-0 left-0 right-0 rounded-t-2xl bg-gradient-to-r ${accent}`} />
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 mt-2 bg-gradient-to-br ${accent} shadow-md group-hover:scale-110 motion-reduce:group-hover:scale-100 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-700 font-semibold break-words">{info}</p>
                {subInfo && <p className="text-xs text-gray-400 mt-1">{subInfo}</p>}
              </div>
            );

            return href ? (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                {inner}
              </a>
            ) : (
              <div key={title} className="h-full">{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

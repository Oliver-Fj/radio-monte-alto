import { MapPin, MessageCircle, Quote } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';

/**
 * Testimonios de oyentes.
 *
 * SOLO TESTIMONIOS REALES: agrega aquí los que lleguen por WhatsApp o en
 * persona, siempre con el permiso de la persona para publicar su nombre
 * (o solo sus iniciales, si lo prefiere). Mientras la lista esté vacía, la
 * sección invita a los oyentes a contar el suyo.
 */
interface Testimonio {
  nombre: string;
  /** Ej.: «Oyente desde 2019», «Hermana de la filial Chupaca». */
  rol?: string;
  ciudad?: string;
  testimonio: string;
}

const testimonios: Testimonio[] = [];

const ENLACE_WHATSAPP = `https://wa.me/51985796588?text=${encodeURIComponent(
  'Hola, Radio Monte Alto. Quisiera compartir mi testimonio: ',
)}`;

export default function TestimoniosSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <header className="mb-10 text-center">
          <GoldTitle pie="Lo que Dios hace a través de la radio">Testimonios</GoldTitle>
        </header>

        {testimonios.length > 0 && (
          <ul className="mx-auto mb-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonios.map((t) => (
              <li key={t.nombre} className="tarjeta flex flex-col gap-4 rounded-2xl p-6">
                <Quote className="h-6 w-6 text-yellow-500/60" aria-hidden="true" />
                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-300">“{t.testimonio}”</blockquote>
                <div>
                  <p className="text-sm font-bold text-white">{t.nombre}</p>
                  {t.rol && <p className="text-xs text-slate-400">{t.rol}</p>}
                  {t.ciudad && (
                    <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {t.ciudad}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="tarjeta mx-auto max-w-2xl rounded-3xl p-8 text-center">
          <p className="mb-2 font-serif text-xl font-bold text-white">¿Dios obró en tu vida escuchando la radio?</p>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-slate-400">
            Cuéntanos tu testimonio. Con tu permiso lo leeremos al aire y lo publicaremos aquí para animar a otros
            oyentes.
          </p>
          <a
            href={ENLACE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primario mt-6"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enviar mi testimonio
          </a>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Términos de Uso — Radio Monte Alto',
  description: 'Términos y condiciones de uso del sitio web de Radio Monte Alto.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <FileText className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Términos de Uso</h1>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <p className="text-slate-400 text-sm mb-6">Última actualización: enero 2026</p>
            <p>
              Al acceder y utilizar el sitio web de <strong className="text-white">Radio Monte Alto</strong>,
              aceptas los siguientes términos y condiciones. Si no estás de acuerdo, te pedimos que no uses el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Uso del sitio</h2>
            <p>
              Este sitio es de uso personal y no comercial. Está destinado a transmitir contenido cristiano,
              música de alabanza y enseñanza bíblica. Queda prohibido usar el sitio para fines ilegales
              o contrarios a los valores del ministerio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Propiedad intelectual</h2>
            <p>
              Todo el contenido publicado en este sitio — incluyendo textos, imágenes, logotipos y audio —
              es propiedad de Radio Monte Alto o está utilizado con los permisos correspondientes. No está
              permitida su reproducción sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Servicio de streaming</h2>
            <p>
              La transmisión en vivo se ofrece de forma gratuita y sin garantía de disponibilidad continua.
              Nos reservamos el derecho de interrumpir, modificar o suspender la transmisión en cualquier
              momento sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Limitación de responsabilidad</h2>
            <p>
              Radio Monte Alto no se hace responsable de daños directos o indirectos derivados del uso
              o la imposibilidad de uso de este sitio web o su servicio de streaming.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Modificaciones</h2>
            <p>
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios
              entrarán en vigor desde su publicación en esta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Contacto</h2>
            <p>
              Para consultas sobre estos términos, contáctanos en{' '}
              <a href="mailto:contacto@radiomontealto.com" className="text-yellow-400 hover:underline">
                contacto@radiomontealto.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
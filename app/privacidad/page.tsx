import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidad — Radio Monte Alto',
  description: 'Política de privacidad y tratamiento de datos de Radio Monte Alto.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">

        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Shield className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Política de Privacidad</h1>
        </div>

        <div className="prose prose-invert prose-yellow max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <p className="text-slate-400 text-sm mb-6">Última actualización: enero 2026</p>
            <p>
              En <strong className="text-white">Radio Monte Alto</strong> respetamos tu privacidad. Esta política describe cómo
              recopilamos y utilizamos la información cuando visitas nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Información que recopilamos</h2>
            <p>
              No recopilamos datos personales de forma automática. Si nos contactas a través del formulario de contacto
              o por WhatsApp, recibiremos únicamente la información que tú nos proporciones voluntariamente (nombre,
              correo electrónico, mensaje).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Uso de la información</h2>
            <p>
              La información recibida se usa exclusivamente para responder a tus consultas y mejorar nuestros servicios.
              No vendemos, compartimos ni transferimos tus datos a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Cookies</h2>
            <p>
              Este sitio puede usar cookies técnicas necesarias para el funcionamiento básico de la página.
              No utilizamos cookies de seguimiento ni publicidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Servicios de terceros</h2>
            <p>
              Nuestro reproductor de audio conecta con el servidor de streaming{' '}
              <span className="text-yellow-400 font-mono text-sm">sp.dattavolt.com</span>. Al escuchar la radio en vivo,
              tu dirección IP puede ser procesada por dicho servidor para establecer la conexión de audio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Tus derechos</h2>
            <p>
              Tienes derecho a solicitar acceso, rectificación o eliminación de cualquier dato que nos hayas
              proporcionado. Para ejercer estos derechos, contáctanos en{' '}
              <a href="mailto:contacto@radiomontealto.com" className="text-yellow-400 hover:underline">
                contacto@radiomontealto.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 border-l-2 border-yellow-500 pl-4">Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política, escríbenos a{' '}
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
import Image from 'next/image';
import { Check } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';
import { publicPath } from '@/lib/utils/publicPath';
import { cn } from '@/lib/utils/cn';

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=app.radiomontealto.pe';

// Lo que se ve en la pantalla de inicio de la app (captura real).
const LO_QUE_TRAE = [
  'La señal en vivo, las 24 horas',
  'Compartir la radio con un toque',
  'Facebook, TikTok, YouTube y WhatsApp a la mano',
];

/** Logo de Google Play con sus cuatro colores. */
function LogoGooglePlay({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M3.6 1.8 13.3 12 3.6 22.2c-.4-.3-.6-.7-.6-1.2V3c0-.5.2-.9.6-1.2Z" />
      <path fill="#34A853" d="M3.6 1.8c.4-.3 1-.4 1.6-.1l11.4 6.6-3.3 3.7Z" />
      <path fill="#EA4335" d="M13.3 12l3.3 3.7-11.4 6.6c-.6.3-1.2.2-1.6-.1Z" />
      <path fill="#FBBC04" d="m16.6 8.3 3.7 2.1c1.2.7 1.2 2.5 0 3.2l-3.7 2.1-3.3-3.7Z" />
    </svg>
  );
}

interface TelefonoProps {
  src: string;
  ancho: number;
  alto: number;
  className?: string;
}

/**
 * Teléfono de bordes finos (estilo de los mockups de Android actuales):
 * canto metálico de 3 px, bisel negro de 5 px, cámara perforada y botones.
 */
function Telefono({ src, ancho, alto, className }: TelefonoProps) {
  return (
    <div className={cn('relative w-[210px] md:w-[240px]', className)}>
      {/* Botones laterales */}
      <span className="absolute -left-[3px] top-[22%] h-12 w-[3px] rounded-l bg-gradient-to-b from-zinc-500 to-zinc-700" />
      <span className="absolute -right-[3px] top-[18%] h-8 w-[3px] rounded-r bg-gradient-to-b from-zinc-500 to-zinc-700" />
      <span className="absolute -right-[3px] top-[30%] h-16 w-[3px] rounded-r bg-gradient-to-b from-zinc-500 to-zinc-700" />

      {/* Canto metálico */}
      <div className="rounded-[2.4rem] bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-700 p-[3px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
        {/* Bisel */}
        <div className="rounded-[2.25rem] bg-black p-[5px]">
          {/* Pantalla */}
          <div className="relative overflow-hidden rounded-[1.95rem] bg-black">
            <Image src={publicPath(src)} alt="" width={ancho} height={alto} sizes="240px" className="block h-auto w-full" />
            <span className="absolute left-1/2 top-[7px] h-[10px] w-[10px] -translate-x-1/2 rounded-full bg-black ring-1 ring-zinc-800" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Dos teléfonos superpuestos: detrás, el sitio web en el celular; delante,
 * la pantalla de inicio de la app (captura real). Es decorativo.
 */
function TelefonosApp() {
  return (
    <div className="relative h-[470px] w-[320px] md:h-[530px] md:w-[400px]" aria-hidden="true">
      {/* Sombra en el piso */}
      <div className="absolute inset-x-10 bottom-0 h-10 rounded-full bg-black/40 blur-2xl" />

      <Telefono
        src="/images/app/web-inicio.webp"
        ancho={540}
        alto={1169}
        className="absolute left-0 top-0 -rotate-6 opacity-95"
      />
      <Telefono
        src="/images/app/app-inicio.webp"
        ancho={540}
        alto={1099}
        className="absolute bottom-2 right-0 rotate-3"
      />
    </div>
  );
}

export default function AppDownloadSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">App para Android</p>

            <GoldTitle conMarco={false}>Descarga nuestra app</GoldTitle>

            <p className="mx-auto mb-8 mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0">
              Escucha Radio Monte Alto en tu celular, estés donde estés. Es gratis y la instalas en un minuto desde
              Google Play.
            </p>

            <ul className="mx-auto mb-10 max-w-md space-y-3 text-left lg:mx-0">
              {LO_QUE_TRAE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-slate-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Botones de las tiendas */}
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-keep-dark
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-black px-5 py-2.5 text-white transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <LogoGooglePlay className="h-8 w-8 shrink-0" />
                <span className="text-left">
                  <span className="block text-[10px] font-medium uppercase leading-none tracking-wide text-white/80">
                    Disponible en
                  </span>
                  <span className="block text-lg font-semibold leading-tight">Google Play</span>
                </span>
              </a>

              <p className="text-sm text-slate-400 sm:self-center">La versión para iPhone está en camino.</p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex flex-shrink-0 justify-center">
            <TelefonosApp />
          </div>
        </div>
      </div>
    </section>
  );
}

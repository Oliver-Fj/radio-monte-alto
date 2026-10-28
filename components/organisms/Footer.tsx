import type { ComponentType } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import FooterListenButton from '@/components/molecules/FooterListenButton';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

/* ──────────── ÍCONOS SOCIALES ──────────── */
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" clipRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
);

const SOCIAL = [
  { icon: FacebookIcon,  href: 'https://www.facebook.com/share/17LGB19yFY/', bg: '#3b5999', label: 'Facebook' },
  { icon: YoutubeIcon,   href: 'https://youtube.com/@radiomontealto1049',      bg: '#dd4b39', label: 'YouTube' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/radiomontealto7',    bg: '#e4405f', label: 'Instagram' },
  { icon: TikTokIcon,    href: 'https://www.tiktok.com/@radiomontealto',       bg: '#010101', label: 'TikTok' },
  { icon: WhatsAppIcon,  href: 'https://wa.me/51985796588',                    bg: '#25D366', label: 'WhatsApp' },
];

const NAV = [
  { label: 'Inicio',          href: '/' },
  { label: 'Nosotros',        href: '/nosotros' },
  { label: 'Eventos',         href: '/eventos' },
  { label: 'Programación',    href: '/programacion' },
  { label: 'Recursos',        href: '/recursos' },
];

const MINISTERIO = [
  { label: 'Nuestra Iglesia',    href: '/nuestra-iglesia' },
  { label: 'Discipulado',        href: '/discipulado' },
  { label: 'Ministerio Juvenil', href: '/ministerio-juvenil' },
  { label: 'Peticiones de oración', href: '/oracion' },
  { label: 'Clínica Celestial',  href: '/clinica-celestial' },
  { label: 'Cultos Dominicales', href: '/cultos-dominicales' },
  { label: 'Filiales',           href: '/filiales' },
  { label: 'Contáctanos',        href: '/contacto' },
];

/* ──────────── BOTÓN SOCIAL (hover fill + rotación 360 — igual que antes) ──────────── */
function SocialButton({ icon: Icon, href, bg, label }: { icon: ComponentType<{ className?: string }>; href: string; bg: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} data-keep-dark
      className="relative w-11 h-11 rounded-full border-2 border-white bg-white overflow-hidden shadow-lg group mx-1 block">
      <div className="absolute top-full left-0 w-full h-full transition-all duration-500 ease-in-out group-hover:top-0"
        style={{ backgroundColor: bg }} />
      <div className="relative z-10 w-full h-full flex items-center justify-center text-slate-900 transition-all duration-500 group-hover:text-white group-hover:[transform:rotateY(360deg)]">
        <Icon className="w-5 h-5" />
      </div>
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // bg-slate-950 elimina la franja blanca — mismo color que todas las secciones
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* ── Línea dorada superior animada ── */}
      <div className="relative h-[3px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200 to-transparent motion-safe:animate-pulse opacity-50" />
      </div>

      {/* ── Fondos decorativos ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-yellow-500/5 blur-[130px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-blue-600/5 blur-[100px] rounded-full" />
        <div className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.012) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-4 pt-12 pb-0 relative z-10">

        {/* ── GRID PRINCIPAL ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">

          {/* Col 1 — Logo grande + descripción + CTA (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">

            {/* Logo tamaño original grande */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-yellow-500/40 blur-[40px] rounded-full scale-125" />
              <Image
                src={`${B}/images/opt/logo-radio.webp`}
                alt="Radio Monte Alto"
                width={140}
                height={80}
                className="relative z-10 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>

            <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-2">
              &ldquo;El Portavoz del Reino de Dios&rdquo;
            </p>
            <p className="text-slate-400 text-sm font-light max-w-xs mx-auto md:mx-0 leading-relaxed mb-6">
              Señal de esperanza y salvación las 24 horas del día. Llevando el evangelio de Jesucristo a cada rincón del Perú y el mundo.
            </p>

            {/* CTA Escuchar — reproduce la señal en vivo de verdad */}
            <FooterListenButton />
          </div>

          {/* Col 2 — Navegación (4 cols: Explora + Ministerio) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                Explora
              </h4>
              <ul className="space-y-2">
                {NAV.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="group flex items-center gap-2 text-slate-400 hover:text-yellow-300 transition duration-300 text-sm py-1">
                      <span aria-hidden="true" className="w-0 group-hover:w-3 group-focus-visible:w-3 h-[1px] bg-yellow-400 transition-[width] duration-300 rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                Ministerio
              </h4>
              <ul className="space-y-2">
                {MINISTERIO.map(link => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="group flex items-center gap-2 text-slate-400 hover:text-yellow-300 transition duration-300 text-sm py-1">
                      <span aria-hidden="true" className="w-0 group-hover:w-3 group-focus-visible:w-3 h-[1px] bg-yellow-400 transition-[width] duration-300 rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 — Contacto + Redes (4 cols) */}
          <div className="lg:col-span-4">
            <div className="grid sm:grid-cols-2 gap-8">

              {/* Contacto */}
              <div>
                <h4 className="font-bold text-sm text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  Contacto
                </h4>
                <ul className="space-y-3.5">
                  <li>
                    <a href="https://wa.me/51985796588"
                      className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      <span className="mt-0.5 w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                      </span>
                      +51 985 796 588
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="mt-0.5 w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-500/15 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                      </span>
                      <span>Huancayo, Junín<br /><span className="text-slate-500 text-xs">Perú</span></span>
                    </div>
                  </li>
                  <li>
                    <a href="mailto:contacto@radiomontealto.com"
                      className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                      <span className="mt-0.5 w-7 h-7 rounded-lg bg-yellow-500/10 border border-yellow-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
                      </span>
                      <span className="break-all">contacto@radiomontealto.com</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Redes */}
              <div>
                <h4 className="font-bold text-sm text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-amber-600 rounded-full" />
                  Síguenos
                </h4>
                <div className="flex flex-wrap gap-y-3 -ml-1">
                  {SOCIAL.map(s => <SocialButton key={s.label} {...s} />)}
                </div>
                <p className="text-slate-600 text-[10px] mt-4 leading-relaxed">
                  Comparte la señal · Bendice a alguien hoy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── PIE / COPYRIGHT ── */}
        <div className="border-t border-white/5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              &copy; {year}{' '}
              <strong className="text-yellow-500 font-semibold">Radio Monte Alto</strong>.
              Todos los derechos reservados.
            </p>
            <p className="text-slate-600 text-[11px] italic font-serif text-center md:text-left">
              &ldquo;Id por todo el mundo y predicad el evangelio&rdquo; — Marcos 16:15
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacidad" className="hover:text-yellow-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-yellow-400 transition-colors">Términos</Link>
              <span className="flex items-center gap-1 opacity-50">
                Hecho con <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-0.5" aria-hidden="true" /> por la Gracia de Dios
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Línea dorada inferior ── */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
    </footer>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

// --- ÍCONOS PERSONALIZADOS (Para evitar errores de deprecación de Lucide) ---

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* fillRule="evenodd" es la clave para que el triángulo sea un hueco y no un parche */}
    <path fillRule="evenodd" clipRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
);

// Componente Botón Social con efecto Hover Llenado + Rotación 360
const SocialButton = ({ icon: Icon, href, bgClass }: { icon: any, href: string, bgClass: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Clases base: circulo blanco, overflow hidden para el efecto de llenado
      className="relative block w-10 h-10 bg-white rounded-full border-2 border-white overflow-hidden shadow-lg group mx-1"
    >
      {/* CAPA DE FONDO (El color que sube) */}
      <div className={`absolute top-full left-0 w-full h-full transition-all duration-500 ease-in-out group-hover:top-0 ${bgClass}`} />

      {/* ÍCONO (Rota y cambia de color) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-slate-900 transition-all duration-500 group-hover:text-white group-hover:[transform:rotateY(360deg)]">
        <Icon className="w-5 h-5" />
      </div>
    </a>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Reduje pt-24 a pt-12 y pb-10 a pb-6 para hacerlo más compacto
    <footer className="relative bg-[#0B1120] text-white pt-12 pb-6 overflow-hidden border-t-[4px] border-yellow-500 font-sans">

      {/* --- FONDOS DECORATIVOS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-blue-900/20 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-8">

          {/* COLUMNA 1: LOGO (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">

            {/* LOGO LIBRE CON RESPLANDOR DORADO */}
            <div className="relative mb-4">
              {/* Resplandor dorado detrás */}
              <div className="absolute inset-0 bg-yellow-500/40 blur-[40px] rounded-full" />

              <Image
                src="/images/logo-radio.png"
                alt="Radio Monte Alto"
                width={140}
                height={80}
                className="relative z-10 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>

            <p className="text-blue-200 text-xs font-bold tracking-widest uppercase mb-2">
              "El Portavoz del Reino de Dios"
            </p>
            <p className="text-slate-400 text-sm font-light max-w-xs mx-auto md:mx-0 leading-snug">
              Señal de esperanza y salvación las 24 horas del día.
            </p>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN (3 Cols) */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h4 className="font-bold text-base text-white mb-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1 h-5 bg-yellow-500 rounded-full" />
              Explora
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Nuestra Iglesia', href: '/nuestra-iglesia' },
                { label: 'Programación', href: '/programacion' },
                { label: 'Recursos', href: '/recursos' },
                { label: 'Contáctanos', href: '/contacto' }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-yellow-400 transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO Y REDES (5 Cols) */}
          <div className="lg:col-span-5 text-center md:text-left">

            <div className="grid md:grid-cols-2 gap-6">
              {/* Datos de Contacto */}
              <div>
                <h4 className="font-bold text-base text-white mb-4 flex items-center justify-center md:justify-start gap-2">
                  <span className="w-1 h-5 bg-yellow-500 rounded-full" />
                  Contacto
                </h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://wa.me/51985796588" className="flex items-center justify-center md:justify-start gap-2 text-slate-300 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-yellow-500" />
                      <span>+51 915 902 232</span>
                    </a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    <span>Huancayo, Junín, Perú</span>
                  </li>
                  <li>
                    <a href="mailto:contacto@radiomontealto.com" className="flex items-center justify-center md:justify-start gap-2 text-slate-300 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-yellow-500" />
                      <span>contacto@radiomontealto.com</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Redes Sociales (Estilo Botones Circulares con Efecto Hover) */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-bold text-base text-white mb-4">Síguenos</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-y-2">
                  <SocialButton
                    href="https://www.facebook.com/share/17LGB19yFY/"
                    icon={FacebookIcon}
                    bgClass="bg-[#3b5999]"
                  />
                  <SocialButton
                    href="https://youtube.com/@radiomontealto1049"
                    icon={YoutubeIcon}
                    bgClass="bg-[#dd4b39]"
                  />
                  <SocialButton
                    href="https://www.instagram.com/radiomontealto7"
                    icon={InstagramIcon}
                    bgClass="bg-[#e4405f]" // Color aproximado Insta gradient
                  />
                  <SocialButton
                    href="https://www.tiktok.com/@radiomontealto"
                    icon={TikTokIcon}
                    bgClass="bg-[#000000]"
                  />
                  <SocialButton
                    href="https://wa.me/51985796588"
                    icon={WhatsAppIcon}
                    bgClass="bg-[#25D366]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* --- COPYRIGHT Y DERECHOS RESERVADOS (Compacto) --- */}
        <div className="border-t border-slate-800 pt-6 mt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-light">

            <div className="text-center md:text-left">
              <p>
                &copy; {currentYear} <strong className="text-yellow-500 font-semibold">Radio Monte Alto</strong>. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/privacidad" className="hover:text-yellow-400 transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-yellow-400 transition-colors">Términos</Link>
            </div>

            <div className="flex items-center gap-1 opacity-60">
              <span>Hecho con</span>
              <Heart className="w-3 h-3 text-red-600 fill-red-600" />
              <span>por la Gracia de Dios</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
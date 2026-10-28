import type { Metadata, Viewport } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
// @ts-ignore
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Player from '@/components/molecules/Player';
import WhatsAppFloat from '@/components/molecules/WhatsAppFloat';
import PointerSpotlight from '@/components/molecules/PointerSpotlight';
import { AudioProvider } from '@/lib/contexts/AudioContext';

// Tipografía: Cinzel (inscripción clásica) para los títulos y Plus Jakarta Sans
// (la del diseño de artículos de codepen.io/fuzionix/pen/rNpEPpM) para el texto,
// menús y botones. Jakarta es variable: cubre de 200 a 800 sin cargar archivos extra.
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-titulos', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-texto', display: 'swap' });

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  metadataBase: new URL('https://oliver-fj.github.io'),
  title: 'Radio Monte Alto - El Portavoz del Reino de Dios',
  description: 'Radio cristiana transmitiendo la Palabra de Dios las 24 horas. Escúchanos en vivo desde Huancayo, Perú.',
  manifest: `${B}/manifest.webmanifest`,
  icons: {
    icon: `${B}/images/opt/logo.webp`,
    apple: `${B}/images/icons/icon-192.png`,
  },
  openGraph: {
    title: 'Radio Monte Alto',
    description: 'Escúchanos en vivo',
    images: [`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/og-image.jpg`],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

const TEMA_CLARO = '#E9F4FD';
const TEMA_NOCHE = '#1B5578';

// Color de la barra del navegador: se ajusta al tema (ver script en <head>).
export const viewport: Viewport = {
  themeColor: TEMA_CLARO,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Arranca en el tema claro. Si el visitante eligió el tema noche, se
            quita la clase antes del primer pintado para evitar parpadeos, y
            la barra del navegador (theme-color) toma el color del tema. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('rma-theme')==='noche'){document.documentElement.classList.remove('light');var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','${TEMA_NOCHE}')}}catch(e){}`,
          }}
        />
      </head>
      {/* bg-slate-950 aquí elimina la franja blanca entre secciones y footer */}
      <body className={`${jakarta.variable} ${cinzel.variable} font-sans antialiased bg-slate-950`}>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <AudioProvider>
          <PointerSpotlight />
          <Header />
          <main id="contenido" tabIndex={-1} className="pt-20 md:pt-24 pb-32 focus:outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
          <Player />
        </AudioProvider>
      </body>
    </html>
  );
}

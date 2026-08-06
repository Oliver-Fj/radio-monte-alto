import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
// @ts-ignore
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Player from '@/components/molecules/Player';
import WhatsAppFloat from '@/components/molecules/WhatsAppFloat';
import PointerSpotlight from '@/components/molecules/PointerSpotlight';
import { AudioProvider } from '@/lib/contexts/AudioContext';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const playfair   = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#020617" />
        {/* Aplica el tema guardado antes del primer pintado (evita FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('rma-theme')==='light')document.documentElement.classList.add('light')}catch(e){}`,
          }}
        />
      </head>
      {/* bg-slate-950 aquí elimina la franja blanca entre secciones y footer */}
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased bg-slate-950`}>
        <AudioProvider>
          <PointerSpotlight />
          <Header />
          <main className="pt-20 md:pt-24 pb-32">
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

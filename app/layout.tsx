import type { Metadata } from 'next';
import { Montserrat, Playfair_Display } from 'next/font/google';
// Suppress TypeScript error for side-effect CSS import when no global d.ts is present
// @ts-ignore
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Player from '@/components/molecules/Player'; // ✅ IMPORTAR EL PLAYER
import { AudioProvider } from '@/lib/contexts/AudioContext';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Radio Monte Alto - El Portavoz del Reino de Dios',
  description: 'Radio cristiana transmitiendo la Palabra de Dios las 24 horas. Escúchanos en vivo desde Huancayo, Perú.',
  openGraph: {
    title: 'Radio Monte Alto',
    description: 'Escúchanos en vivo',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        <AudioProvider>

          {/* ✅ Header limpio sin Player interno */}
          <Header />

          {/* ✅ Contenido con espaciado para header fijo y player fijo */}
          <main className="pt-20 md:pt-24 pb-32">
            {children}
          </main>

          {/* ✅ Footer */}
          <Footer />

          {/* ✅ Player independiente y separado */}
          <Player />

        </AudioProvider>
      </body>
    </html>
  );
}


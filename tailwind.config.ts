
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Los temas de color de los eventos se declaran en lib/utils/eventoTheme.ts:
    // sin esta ruta, Tailwind purgaría esos degradados y las tarjetas saldrían grises.
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * PALETA DE LA MARCA — verde esmeralda del logo.
         *
         * Todo el sitio estaba escrito con la escala `slate` (gris azulado).
         * En vez de reescribir centenares de clases, redefinimos esa escala en
         * celestes: `bg-slate-950`, `text-slate-400`, etc. siguen funcionando
         * igual pero ahora pintan el celeste de la marca. El tema claro
         * (html.light) remapea estos mismos tonos a su versión clara.
         */
        slate: {
          // TEMA NOCHE — celeste oscurito, no azul marino. En el proyecto
          // 950/900/800 son SUPERFICIES y 300/400/500 son TEXTOS; el tema
          // claro (html.light) remapea estos mismos nombres a celeste claro.
          50:  '#F5FAFE',
          100: '#E8F4FD',
          200: '#CFE7F8',
          300: '#E6F3FC', // texto de párrafo sobre el celeste
          400: '#C2DFF3', // texto secundario
          500: '#9CC8E6', // texto terciario / pies de foto
          600: '#5C9EC9',
          700: '#2E77A8', // bordes marcados
          800: '#22688F', // superficie elevada
          900: '#1E5F84', // tarjetas y paneles
          950: '#1B5578', // fondo de la página — el celeste de la muestra
        },
        /**
         * Paleta de la marca — celeste del cielo del escudo.
         * El celeste manda, el dorado del sol ilumina y el rojo del cerro
         * queda solo para "en vivo" y avisos.
         */
        marca: {
          celeste:    '#1D7CB2', // celeste del logo — color principal
          celesteAlt: '#3E9BD1',
          celesteOsc: '#15628F',
          bruma:      '#D6ECF9', // celeste muy claro para chips y fondos suaves
          sol:        '#F5B301', // dorado del sol del logo
          solOsc:     '#B45309', // el mismo dorado, legible sobre fondo claro
          cerro:      '#DC2626', // rojo del escudo — en vivo y alertas
          hoja:       '#059669', // verde de las hojas — confirmaciones
          noche:      '#1B5578', // fondo del tema noche (celeste oscurito)
          papel:      '#FFFFFF',
          tinta:      '#0E3F5C', // texto principal en tema claro
        },
        // Tokens estilo shadcn requeridos por components/ui/map.tsx (mapcn)
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ring: 'hsl(var(--ring))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      fontFamily: {
        // Texto: Plus Jakarta Sans · Títulos: Cinzel (definidas en app/layout.tsx)
        sans: ['var(--font-texto)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-titulos)', 'Georgia', 'serif'],
        // Alias de las fuentes anteriores, para no tocar los componentes que las usan
        playfair: ['var(--font-titulos)', 'Georgia', 'serif'],
        montserrat: ['var(--font-texto)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

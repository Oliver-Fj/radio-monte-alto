import type { MetadataRoute } from 'next';
import { eventos } from '@/lib/data/eventos';
import articulos from '@/lib/data/articulos';
import DETALLES from '@/lib/data/programaDetalle';

// La exportación estática necesita generar el sitemap en tiempo de build.
export const dynamic = 'force-static';

const SITIO = 'https://oliver-fj.github.io/radio-monte-alto';

const PAGINAS = [
  '',
  '/nosotros',
  '/mision-vision',
  '/nuestra-iglesia',
  '/eventos',
  '/programacion',
  '/recursos',
  '/discipulado',
  '/ministerio-juvenil',
  '/oracion',
  '/clinica-celestial',
  '/cultos-dominicales',
  '/filiales',
  '/contacto',
  '/privacidad',
  '/terminos',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (ruta: string) => `${SITIO}${ruta || "/"}`;
  return [
    ...PAGINAS.map((ruta) => ({ url: url(ruta), changeFrequency: 'weekly' as const, priority: ruta ? 0.7 : 1 })),
    ...DETALLES.map((d) => ({ url: url(`/programacion/${d.slug}`), changeFrequency: 'weekly' as const, priority: 0.6 })),
    ...eventos.map((e) => ({ url: url(`/eventos/${e.slug}`), lastModified: e.fechaISO, priority: 0.6 })),
    ...articulos.map((a) => ({ url: url(`/recursos/${a.slug}`), priority: 0.5 })),
  ];
}

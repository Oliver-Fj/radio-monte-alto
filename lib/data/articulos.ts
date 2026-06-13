
import { Articulo } from '@/lib/types';

export const articulos: Articulo[] = [
  {
    id: 'oracion-diaria',
    titulo: 'La Importancia de la Oracion Diaria',
    contenido: `La oración es el alimento del alma, es la comunicación directa con nuestro Padre celestial. A través de la oración fortalecemos nuestra fe, encontramos paz en medio de la tormenta y recibimos dirección divina para nuestras vidas.

## ¿Por Qué Orar Diariamente?

La Biblia nos enseña que debemos orar sin cesar (1 Tesalonicenses 5:17). Esto no significa que debamos estar las 24 horas del día de rodillas, sino mantener una actitud constante de comunión con Dios.

### Beneficios de la Oración Diaria

1. **Fortalece tu relación con Dios**: La oración es como una conversación con un amigo. Entre más hablas con alguien, más lo conoces.

2. **Trae paz interior**: Filipenses 4:6-7 nos dice: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias."

3. **Nos da dirección**: Proverbios 3:5-6 nos enseña que cuando reconocemos a Dios en todos nuestros caminos, Él endereza nuestras veredas.

## Conclusión

La oración no es una obligación religiosa, es un privilegio. Es el acceso directo al trono de la gracia.`,
    fecha: '15 Nov 2024',
    categoria: 'Vida Cristiana',
    tiempoLectura: '8 min',
    pdfUrl: '/pdfs/articulos/oracion-diaria.pdf',
    tags: ['Oración', 'Vida Cristiana', 'Crecimiento Espiritual'],
  },
  {
    id: 'caminando-fe',
    titulo: 'Caminando en Fe, No por Vista',
    contenido: 'Vivir por fe significa confiar en Dios incluso cuando no entendemos Sus caminos.',
    fecha: '10 Nov 2024',
    categoria: 'Estudio Biblico',
    tiempoLectura: '10 min',
    pdfUrl: '/pdfs/articulos/caminando-fe.pdf',
    tags: ['Fe', 'Confianza'],
  },
  {
    id: 'ayuno-oracion',
    titulo: 'El Poder del Ayuno y la Oracion',
    contenido: 'El ayuno es una práctica espiritual poderosa.',
    fecha: '05 Nov 2024',
    categoria: 'Discipulado',
    tiempoLectura: '12 min',
    pdfUrl: '/pdfs/articulos/ayuno-oracion.pdf',
    tags: ['Ayuno', 'Oración'],
  },
  {
    id: 'familia-cristiana',
    titulo: 'La Familia Cristiana en el Siglo XXI',
    contenido: 'La familia cristiana debe mantenerse firme.',
    fecha: '01 Nov 2024',
    categoria: 'Familia',
    tiempoLectura: '15 min',
    pdfUrl: '/pdfs/articulos/familia-cristiana.pdf',
    tags: ['Familia', 'Matrimonio'],
  },
  {
    id: 'fruto-espiritu',
    titulo: 'El Fruto del Espiritu Santo',
    contenido: 'Gálatas 5:22-23 nos presenta el fruto del Espíritu.',
    fecha: '28 Oct 2024',
    categoria: 'Vida Cristiana',
    tiempoLectura: '13 min',
    pdfUrl: '/pdfs/articulos/fruto-espiritu.pdf',
    tags: ['Espíritu Santo', 'Carácter'],
  },
  {
    id: 'gran-comision',
    titulo: 'La Gran Comision: Id y Predicad',
    contenido: 'Jesús nos dio la Gran Comisión.',
    fecha: '25 Oct 2024',
    categoria: 'Evangelismo',
    tiempoLectura: '14 min',
    pdfUrl: '/pdfs/articulos/gran-comision.pdf',
    tags: ['Evangelismo', 'Testimonio'],
  },
];

export async function getArticulosDestacados(): Promise<Articulo[]> {
  return Promise.resolve(articulos.slice(0, 3));
}

export async function getTodosLosArticulos(): Promise<Articulo[]> {
  return Promise.resolve(articulos);
}

export async function getArticuloById(id: string): Promise<Articulo | null> {
  return Promise.resolve(articulos.find(a => a.id === id) || null);
}

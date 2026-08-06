'use client';

import { useState } from 'react';
import { Camera, Aperture, ArrowUpRight, Mic2, Radio, Settings2, Users, Building2, Music4 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';
import { publicPath } from '@/lib/utils/publicPath';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Galería visual por áreas. Cada área tiene descripción propia y su tira de
 * fotografías. Para cambiar una foto, sustituye el archivo en
 * public/images/opt/ o apunta `src` a tu propia imagen.
 */
interface Foto {
  src: string;
  alt: string;
  pie: string;
}

interface Area {
  id: string;
  titulo: string;
  icon: LucideIcon;
  intro: string;
  detalle: string;
  fotos: Foto[];
}

const AREAS: Area[] = [
  {
    id: 'cabina',
    titulo: 'Cabina de grabación',
    icon: Mic2,
    intro: 'El corazón silencioso donde nace cada programa.',
    detalle:
      'Aquí se graban las prédicas, los devocionales y las cuñas que después salen al aire. La cabina está acondicionada acústicamente para que la voz llegue limpia a cada hogar: paneles absorbentes, micrófonos de condensador y una mesa de mezcla que permite registrar varias voces a la vez. Es también el lugar donde los pastores preparan las series de enseñanza que se emiten durante la semana.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-4.webp`, alt: 'Cabina de grabación de Radio Monte Alto', pie: 'Cabina principal de grabación' },
      { src: `${B}/images/opt/galeria-radio-1.webp`, alt: 'Micrófono en la cabina', pie: 'Registro de prédicas y devocionales' },
    ],
  },
  {
    id: 'tecnico',
    titulo: 'Equipo técnico',
    icon: Settings2,
    intro: 'Los que sostienen la señal las 24 horas.',
    detalle:
      'Detrás de cada transmisión hay un equipo que rara vez se escucha pero sin el cual nada saldría al aire: operadores de consola, encargados del transmisor y del enlace satelital, y quienes vigilan que la señal en línea no se caiga de madrugada. Ellos preparan la continuidad musical, sincronizan los bloques de programación y resuelven cualquier incidencia técnica en minutos.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-6.webp`, alt: 'Equipo técnico de la radio', pie: 'Operación de consola y transmisor' },
      { src: `${B}/images/opt/galeria-radio-3.webp`, alt: 'Sala técnica', pie: 'Monitoreo permanente de la señal' },
    ],
  },
  {
    id: 'locutores',
    titulo: 'Equipo de locutores',
    icon: Users,
    intro: 'Las voces que acompañan tu día.',
    detalle:
      'Nuestros locutores no son presentadores de oficio: son hermanos formados en la Palabra que ponen su voz al servicio del evangelio. Cada uno conduce los programas que le fueron encomendados, prepara su contenido con anticipación y responde los mensajes que llegan de los oyentes. Muchos de ellos llevan años acompañando a familias que los reconocen solo por el timbre de su voz.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-2.webp`, alt: 'Equipo de locutores de Radio Monte Alto', pie: 'El equipo de locución' },
      { src: `${B}/images/opt/galeria-radio-5.webp`, alt: 'Locutor al aire', pie: 'Conduciendo el programa del día' },
    ],
  },
  {
    id: 'estudio',
    titulo: 'Estudio de transmisión',
    icon: Radio,
    intro: 'Desde aquí sale la señal a todo el Perú.',
    detalle:
      'El estudio está al aire los siete días de la semana. Es el punto donde convergen la programación en vivo, las llamadas de los oyentes y la música que enlaza cada bloque. Cuenta con doble puesto de locución para las entrevistas y una ventana hacia la sala técnica que permite coordinar sin interrumpir la emisión.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-1.webp`, alt: 'Estudio de transmisión', pie: 'Estudio principal, al aire 24/7' },
      { src: `${B}/images/opt/galeria-radio-3.webp`, alt: 'Transmisión en vivo', pie: 'Programa en vivo' },
    ],
  },
  {
    id: 'instalaciones',
    titulo: 'Nuestras instalaciones',
    icon: Building2,
    intro: 'Una casa abierta para el ministerio.',
    detalle:
      'Además de los estudios, la sede alberga la oficina de atención al oyente, la sala donde se reúne el equipo de intercesión antes de cada jornada y el espacio de archivo donde se conservan las grabaciones históricas del ministerio. Las puertas están abiertas para quien quiera conocer de cerca cómo trabajamos.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-5.webp`, alt: 'Instalaciones de la radio', pie: 'Sede de Radio Monte Alto, Huancayo' },
      { src: `${B}/images/opt/galeria-radio-6.webp`, alt: 'Sala de reuniones', pie: 'Sala de intercesión y coordinación' },
    ],
  },
  {
    id: 'produccion',
    titulo: 'Producción musical',
    icon: Music4,
    intro: 'La alabanza que enlaza cada programa.',
    detalle:
      'Seleccionamos y editamos la música que acompaña la programación, cuidando que cada pieza sea coherente con la sana doctrina que predicamos. También se producen aquí las cortinas musicales, las identificaciones de la emisora y las grabaciones del ministerio de alabanza de la congregación.',
    fotos: [
      { src: `${B}/images/opt/galeria-radio-4.webp`, alt: 'Producción musical', pie: 'Edición y selección musical' },
      { src: `${B}/images/opt/galeria-radio-2.webp`, alt: 'Ministerio de alabanza', pie: 'Grabación del ministerio de alabanza' },
    ],
  },
];

function FotoCard({ foto }: { foto: Foto }) {
  const [src, setSrc] = useState(foto.src);
  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 border border-white/10 group-hover:border-yellow-500/50 z-20 rounded-2xl transition-colors duration-500 pointer-events-none" />
      <img
        src={publicPath(src)}
        alt={foto.alt}
        loading="lazy"
        decoding="async"
        onError={() => setSrc(`${B}/images/opt/galeria-radio-1.webp`)}
        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      <figcaption className="absolute bottom-0 inset-x-0 p-4 z-10">
        <p className="text-sm text-slate-200 font-light">{foto.pie}</p>
        <div className="w-10 h-px bg-yellow-500 mt-2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </figcaption>
    </figure>
  );
}

export default function PhotoGallerySection() {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-white/5 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)] group">
            <Aperture className="w-8 h-8 text-yellow-500 group-hover:rotate-45 transition-transform duration-700" aria-hidden="true" />
          </div>
          <GoldTitle>Galería Visual</GoldTitle>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Un recorrido por cada área del ministerio: quiénes trabajan, dónde y con qué.
          </p>
        </div>

        {/* Áreas desarrolladas */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {AREAS.map(({ id, titulo, icon: Icon, intro, detalle, fotos }, i) => (
            <article key={id} className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Texto */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-yellow-500">
                    {String(i + 1).padStart(2, '0')} · Área
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">{titulo}</h3>
                <p className="text-yellow-200/80 italic mb-4">{intro}</p>
                <p className="text-slate-400 leading-relaxed">{detalle}</p>
              </div>

              {/* Fotos */}
              <div className={`lg:col-span-7 grid sm:grid-cols-2 gap-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                {fotos.map((f) => (
                  <FotoCard key={f.pie} foto={f} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20 pt-8 border-t border-white/5">
          <a
            href="https://www.instagram.com/radiomontealto7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 hover:text-yellow-500 transition-colors group"
          >
            <Camera className="w-4 h-4" aria-hidden="true" />
            <span>Ver archivo completo en Instagram</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

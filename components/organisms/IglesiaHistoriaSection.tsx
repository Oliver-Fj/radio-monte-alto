'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { BookMarked } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';
import { publicPath } from '@/lib/utils/publicPath';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

const HITOS = [
  {
    año: '1998',
    numero: '01',
    titulo: 'El Llamado',
    subtitulo: 'El origen de una visión divina',
    descripcion: 'Nace la visión de llevar el evangelio a través de las ondas radiales desde Huancayo, Junín. Un pequeño grupo de creyentes se reúne con el sueño de alcanzar las naciones con la Palabra de Dios.',
    imagen: `${B}/images/hero/slide1-desktop-1366.webp`,
    acento: 'from-yellow-600 to-amber-800',
    color: 'text-yellow-400',
    badge: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-200',
  },
  {
    año: '2003',
    numero: '02',
    titulo: 'Los Primeros Pasos',
    subtitulo: 'Fundación de la congregación',
    descripcion: 'Se establece formalmente la Congregación General Israelita de Monte Alto. La fe y la perseverancia caracterizan estos años fundacionales de crecimiento espiritual y consolidación como familia de Dios.',
    imagen: `${B}/images/hero/slide2-desktop-1366.webp`,
    acento: 'from-blue-600 to-blue-900',
    color: 'text-blue-400',
    badge: 'bg-blue-500/15 border-blue-500/30 text-blue-200',
  },
  {
    año: '2010',
    numero: '03',
    titulo: 'La Señal al Aire',
    subtitulo: 'El evangelio cruza fronteras',
    descripcion: 'Radio Monte Alto comienza a transmitir oficialmente. La Palabra de Dios cruza fronteras geográficas y espirituales, llegando a hogares, hospitales y comunidades en toda la región central del Perú.',
    imagen: `${B}/images/hero/slide3-desktop-1366.webp`,
    acento: 'from-emerald-600 to-emerald-900',
    color: 'text-emerald-400',
    badge: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200',
  },
  {
    año: '2018',
    numero: '04',
    titulo: 'Expansión Misionera',
    subtitulo: 'El ministerio sin fronteras',
    descripcion: 'Se abren las primeras filiales en otras ciudades del Perú. El ministerio crece en profundidad y alcance, con programas especializados en cada área de la vida cristiana y familiar.',
    imagen: `${B}/images/hero/slide1-desktop-1366.webp`,
    acento: 'from-purple-600 to-purple-900',
    color: 'text-purple-400',
    badge: 'bg-purple-500/15 border-purple-500/30 text-purple-200',
  },
  {
    año: 'Hoy',
    numero: '05',
    titulo: 'El Portavoz del Reino',
    subtitulo: 'La misión continúa',
    descripcion: 'Con más de 10 filiales y 10,000 oyentes activos, Radio Monte Alto transmite las 24 horas proclamando el evangelio de salvación a todo el que tenga oídos para oír. La misión continúa.',
    imagen: `${B}/images/hero/slide3-desktop-1366.webp`,
    acento: 'from-amber-500 to-orange-800',
    color: 'text-amber-400',
    badge: 'bg-amber-500/15 border-amber-500/30 text-amber-200',
  },
];

function HitoRow({ h, i, visible }: { h: typeof HITOS[0]; i: number; visible: boolean }) {
  const esDerecha = i % 2 !== 0; // imagen a la derecha en índices impares

  return (
    <div
      className="relative flex flex-col md:flex-row overflow-hidden rounded-3xl border border-white/6 group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 150}ms`,
      }}
    >
      {/* ── IMAGEN (orden según paridad) ── */}
      <div className={`relative w-full md:w-[45%] min-h-[260px] md:min-h-[340px] flex-shrink-0 overflow-hidden ${esDerecha ? 'md:order-2' : 'md:order-1'}`}>
        <Image
          src={publicPath(h.imagen)}
          alt={h.titulo}
          fill
          className="object-cover transition-transform duration-[2s] group-hover:scale-105"
          sizes="(max-width:768px)100vw,45vw"
        />
        {/* Gradiente sobre la imagen */}
        <div className={`absolute inset-0 bg-gradient-to-b ${h.acento} opacity-70`} />
        {/* Gradiente lateral para que conecte con el texto */}
        <div className={`absolute inset-0 ${esDerecha ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-slate-950/90 hidden md:block`} />

        {/* Número gigante superpuesto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10rem] md:text-[12rem] font-black select-none leading-none pointer-events-none"
            style={{ color: 'rgba(255,255,255,0.07)' }}>
            {h.numero}
          </span>
        </div>

        {/* Año badge */}
        <div className="absolute bottom-5 left-5">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${h.badge} text-sm font-black tracking-wider`}>
            {h.año}
          </div>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <div className={`relative flex-1 bg-slate-900/60 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-center ${esDerecha ? 'md:order-1' : 'md:order-2'}`}>

        {/* Número decorativo fondo */}
        <div className={`absolute ${esDerecha ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-[8rem] font-black ${h.color} select-none pointer-events-none leading-none`}
          style={{ opacity: 0.05 }}>
          {h.numero}
        </div>

        <div className="relative z-10">
          {/* Subtítulo */}
          <p className={`text-[11px] font-black tracking-[0.3em] uppercase mb-3 ${h.color}`}>
            {h.subtitulo}
          </p>

          {/* Divisor de color */}
          <div className={`h-[3px] w-10 rounded-full bg-gradient-to-r ${h.acento} mb-5`} />

          {/* Título */}
          <h3 className="text-white font-serif font-bold text-3xl md:text-4xl leading-tight mb-5 group-hover:text-yellow-50 transition-colors duration-500">
            {h.titulo}
          </h3>

          {/* Descripción */}
          <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors duration-500">
            {h.descripcion}
          </p>

          {/* Cita decorativa */}
          <div className={`mt-6 pt-5 border-t border-white/6 flex items-center gap-3`}>
            <span className={`text-4xl font-black ${h.color} opacity-30 font-serif leading-none`}>"</span>
            <span className={`text-xs ${h.color} font-bold tracking-widest uppercase opacity-60`}>
              Capítulo {h.numero} · Historia Monte Alto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IglesiaHistoriaSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.04 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">

      {/* Luces de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/15 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute -left-64 top-1/3 w-[600px] h-[600px] blur-[180px] rounded-full" style={{ background: 'rgba(234,179,8,0.04)' }} />
        <div className="absolute -right-64 bottom-1/3 w-[500px] h-[500px] blur-[150px] rounded-full" style={{ background: 'rgba(59,130,246,0.04)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-5">
            <BookMarked className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Nuestra Historia</span>
          </div>
          <GoldTitle>Un legado escrito por la mano de Dios</GoldTitle>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Cada año es un capítulo de fe, sacrificio y gloria. Esta es nuestra historia.
          </p>
        </div>

        {/* Filas editoriales */}
        <div className="space-y-6">
          {HITOS.map((h, i) => (
            <HitoRow key={i} h={h} i={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Calendar, MapPin, Radio, Users, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

const MINISTERIOS = [
  {
    icono: <Heart className="w-7 h-7"/>,
    titulo: 'Clínica Celestial',
    subtitulo: 'Sanidad Espiritual y Física',
    descripcion: 'Un espacio de intercesión, oración y sanidad donde la gracia de Dios opera en la vida de los que vienen quebrantados y necesitados de Su toque sobrenatural.',
    href: '/nuestra-iglesia/clinica',
    imagen: `${B}/images/hero/slide1-desktop-1366.webp`,
    acento: 'from-red-600/70 to-red-900/80',
    badge: 'bg-red-500/15 border-red-400/30 text-red-200',
    glow: '239,68,68',
    horario: 'Lun – Vie · 6:00 – 7:00 AM',
    tag: 'Ministerio de Salud',
  },
  {
    icono: <Calendar className="w-7 h-7"/>,
    titulo: 'Cultos Dominicales',
    subtitulo: 'Encuentro Semanal de Fe',
    descripcion: 'Cada domingo nos congregamos para adorar, escuchar la Palabra predicada y ser edificados juntos como cuerpo de Cristo. Un encuentro transformador cada semana.',
    href: '/nuestra-iglesia/cultos',
    imagen: `${B}/images/hero/slide2-desktop-1366.webp`,
    acento: 'from-blue-600/70 to-blue-900/80',
    badge: 'bg-blue-500/15 border-blue-400/30 text-blue-200',
    glow: '59,130,246',
    horario: 'Domingos · 10:00 AM',
    tag: 'Culto Principal',
  },
  {
    icono: <MapPin className="w-7 h-7"/>,
    titulo: 'Filiales',
    subtitulo: 'El Evangelio sin Fronteras',
    descripcion: 'Con más de 10 filiales activas en diferentes ciudades, llevamos la presencia de Dios y la sana doctrina a cada comunidad donde Él nos ha abierto puertas.',
    href: '/nuestra-iglesia/filiales',
    imagen: `${B}/images/hero/slide3-desktop-1366.webp`,
    acento: 'from-emerald-600/70 to-emerald-900/80',
    badge: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-200',
    glow: '52,211,153',
    horario: '10+ ciudades · Perú',
    tag: 'Red de Iglesias',
  },
  {
    icono: <Radio className="w-7 h-7"/>,
    titulo: 'Radio Monte Alto',
    subtitulo: 'La Voz del Reino las 24 Horas',
    descripcion: 'Nuestro principal instrumento de alcance. A través de las ondas radiales y el streaming, la Palabra de Dios llega a hogares, hospitales, cárceles y comunidades.',
    href: '/programacion',
    imagen: `${B}/images/hero/slide1-desktop-1366.webp`,
    acento: 'from-yellow-600/70 to-amber-900/80',
    badge: 'bg-yellow-500/15 border-yellow-400/30 text-yellow-200',
    glow: '234,179,8',
    horario: '24/7 · Online y FM',
    tag: 'Ministerio Radial',
  },
  {
    icono: <Users className="w-7 h-7"/>,
    titulo: 'Ministerio Juvenil',
    subtitulo: 'Predestinados para Triunfar',
    descripcion: 'Los jóvenes son el futuro de la iglesia. Un ministerio vibrante que forma líderes con identidad en Cristo, propósito divino y un corazón apasionado por el evangelio.',
    href: '/programacion',
    imagen: `${B}/images/hero/slide2-desktop-1366.webp`,
    acento: 'from-purple-600/70 to-purple-900/80',
    badge: 'bg-purple-500/15 border-purple-400/30 text-purple-200',
    glow: '147,51,234',
    horario: 'Sábados · 7:00 PM',
    tag: 'Juventud',
  },
  {
    icono: <BookOpen className="w-7 h-7"/>,
    titulo: 'Escuela Bíblica',
    subtitulo: 'Formación en la Sana Doctrina',
    descripcion: 'Estudio sistemático de las Escrituras para creyentes que desean crecer en el conocimiento de Dios y ser equipados para la obra del ministerio cristiano.',
    href: '/recursos',
    imagen: `${B}/images/hero/slide3-desktop-1366.webp`,
    acento: 'from-cyan-600/70 to-cyan-900/80',
    badge: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-200',
    glow: '6,182,212',
    horario: 'Lun – Vie · 5:00 – 6:00 PM',
    tag: 'Educación',
  },
];

function MinisterioCard({ m, i, visible }: { m: typeof MINISTERIOS[0]; i: number; visible: boolean }) {
  return (
    <div className="group relative"
      style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(40px)', transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${i*100}ms` }}>
      <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-600 blur-md pointer-events-none"
        style={{ background:`radial-gradient(ellipse,rgba(${m.glow},0.25),transparent 70%)` }} />
      <div className="relative h-full rounded-3xl overflow-hidden border border-white/7 group-hover:border-white/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
        {/* Imagen */}
        <div className="relative h-44 overflow-hidden">
          <Image src={m.imagen} alt={m.titulo} fill className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw" />
          <div className={`absolute inset-0 bg-gradient-to-t ${m.acento}`} />
          <div className="absolute top-4 left-4">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-sm text-[10px] font-black uppercase tracking-wider ${m.badge}`}>
              {m.icono && <span className="scale-50 -ml-1 -mr-1">{m.icono}</span>}
              {m.tag}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-serif font-bold text-xl leading-tight drop-shadow-lg">{m.titulo}</h3>
            <p className="text-white/70 text-xs mt-0.5">{m.subtitulo}</p>
          </div>
        </div>
        {/* Contenido */}
        <div className="bg-slate-900/60 backdrop-blur-sm p-5 flex flex-col gap-4">
          <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{m.descripcion}</p>
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <span className="text-slate-500 text-xs">{m.horario}</span>
            <Link href={m.href} className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-300`}
              style={{ color:`rgba(${m.glow},0.9)` }}>
              Conocer más <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MinisteriosGridSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-slate-950 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14" style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(24px)', transition:'all 0.7s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Ministerios</span>
          </div>
          <GoldTitle>Áreas de Servicio</GoldTitle>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Cada ministerio es un brazo del mismo cuerpo, trabajando unido para la gloria de Dios y la salvación de las almas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINISTERIOS.map((m, i) => <MinisterioCard key={i} m={m} i={i} visible={visible} />)}
        </div>
      </div>
    </section>
  );
}

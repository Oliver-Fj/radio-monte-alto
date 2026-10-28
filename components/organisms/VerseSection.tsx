'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { BookOpen, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { horaLima, fechaLargaLima } from '@/lib/utils/horaLima';
import { VERSICULOS, partirVersiculo } from '@/lib/data/versiculos';
import { cn } from '@/lib/utils/cn';
import styles from './VerseSection.module.css';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';


export default function VerseSection() {
  const [fecha, setFecha] = useState('');
  const [visible, setVisible] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [toast, setToast] = useState('');

  // Día del mes en Lima, leído tras montar (1 en el servidor: sin errores de hidratación).
  const diaDelMes = useSyncExternalStore(
    () => () => {},
    () => horaLima().diaDelMes,
    () => 1
  );

  // Mismo versículo durante todo el día
  const versiculo = VERSICULOS[(diaDelMes - 1) % VERSICULOS.length];

  useEffect(() => {
    // Fecha y entrada suave: fuera del render inicial para no provocar
    // errores de hidratación ni renders en cascada.
    const idFecha = setTimeout(() => {
      setFecha(fechaLargaLima());
      setVisible(true);
    }, 60);
    return () => clearTimeout(idFecha);
  }, []);

  const textoCompleto = `“${versiculo.texto}” — ${versiculo.referencia} (RVR1960)`;

  const handleCopiar = async () => {
    try {
      await navigator.clipboard.writeText(textoCompleto);
      setToast('¡Versículo copiado!');
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    } catch {}
  };

  const handleCompartir = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: 'Versículo del Día · Radio Monte Alto', text: textoCompleto, url: window.location.href }); }
      catch {}
    } else {
      await navigator.clipboard.writeText(textoCompleto);
      setToast('¡Copiado para compartir!');
      setCopiado(true);
      setTimeout(() => setCopiado(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* ── Fondo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${B}/images/hero/slide2-desktop-1366.webp`}
          alt=""
          width={1366}
          height={768}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/60 to-slate-950" />
      </div>

      {/* ── Luces ambientales ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* ── Línea superior ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

      {/* ── Contenido ── */}
      <div
        className={`relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center transition-[opacity,transform] duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Badge superior */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/60" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 motion-safe:animate-pulse" aria-hidden="true" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Alimento Diario</span>
            <BookOpen className="w-3.5 h-3.5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/60" />
        </div>

        {/* Fecha */}
        {fecha && (
          <p className="text-slate-400 text-sm md:text-base mb-10 capitalize tracking-wide">{fecha}</p>
        )}

        {/* Versículo en globo de cita */}
        <div className={styles.wrapper}>
          <blockquote className={styles.blockquote}>
            <p className={cn(styles.texto, 'font-serif', versiculo.texto.length > 90 && styles.largo)}>
              <span className={styles.marco} aria-hidden="true" />
              {partirVersiculo(versiculo).map((trozo, i) =>
                trozo.destacado ? (
                  <span key={i} className={styles.resaltado}>
                    {trozo.texto}
                  </span>
                ) : (
                  trozo.texto
                ),
              )}
            </p>
            <div className={cn(styles.autor, 'font-serif')}>
              &mdash;<cite className="not-italic">{versiculo.referencia}</cite>
              <em className="font-sans">Reina Valera 1960</em>
            </div>
          </blockquote>
        </div>

        {/* Botones */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopiar}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-slate-300 hover:text-white text-sm font-medium"
          >
            {copiado && toast.includes('copiado') ? (
              <Check className="w-4 h-4 text-green-400" aria-hidden="true" />
            ) : (
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            )}
            Copiar versículo
          </button>

          <button
            type="button"
            onClick={handleCompartir}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/25 hover:border-yellow-500/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 text-yellow-400 hover:text-yellow-300 text-sm font-medium"
          >
            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
            Compartir versículo
          </button>
        </div>
      </div>

      {/* ── Línea inferior ── */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* ── Toast ── */}
      <div role="status" aria-live="polite" className={`fixed bottom-36 md:bottom-32 left-1/2 -translate-x-1/2 z-[110] transition-[opacity,transform] duration-500 ${copiado ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/95 border border-green-500/30 rounded-full shadow-2xl backdrop-blur-md">
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center" aria-hidden="true">
            <Check className="w-3 h-3 text-green-400" aria-hidden="true" />
          </div>
          <span className="text-white text-sm font-medium">{toast}</span>
        </div>
      </div>
    </section>
  );
}

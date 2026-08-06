'use client';
import { useState, useEffect } from 'react';
import { Radio, Wifi, BookOpen, Music, Clock, Star, ChevronRight, Smartphone } from 'lucide-react';
import GoldTitle from '@/components/atoms/GoldTitle';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=app.radiomontealto.pe';

const features = [
  {
    icon: <Wifi className="w-5 h-5" />,
    title: 'Transmisión en Vivo',
    desc: 'Señal sin cortes desde cualquier lugar',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: 'Alabanza Cristiana',
    desc: 'Música que eleva tu espíritu al Señor',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Devocionales y Prédicas',
    desc: 'Mensajes y recursos bíblicos diarios',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: '24 Horas / 7 Días',
    desc: 'Siempre disponible, sin interrupciones',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
];

const WAVE_BARS = [3, 5, 8, 6, 9, 7, 4, 8, 5, 7, 6, 9, 4, 6, 8, 5, 7, 9, 5, 6];

function PhoneMockup() {
  const [wavePhase, setWavePhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWavePhase(p => (p + 1) % 20), 120);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute w-64 h-64 bg-blue-600/20 blur-[60px] rounded-full" />
      <div className="absolute w-48 h-48 bg-yellow-500/10 blur-[40px] rounded-full" />

      {/* Phone frame */}
      <div className="relative w-[230px] md:w-[260px] bg-slate-900 rounded-[40px] border-2 border-slate-700/80 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10 flex items-center justify-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-700" />
          <div className="w-12 h-1.5 rounded-full bg-slate-700" />
        </div>

        {/* Screen */}
        <div className="bg-gradient-to-b from-slate-950 to-blue-950 min-h-[480px] pt-8 pb-6 flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 pt-1 pb-2 text-[9px] text-slate-400">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 items-end">
                <div className="w-0.5 h-1 bg-slate-400 rounded-sm" />
                <div className="w-0.5 h-1.5 bg-slate-400 rounded-sm" />
                <div className="w-0.5 h-2 bg-white rounded-sm" />
                <div className="w-0.5 h-2.5 bg-white rounded-sm" />
              </div>
              <Wifi className="w-2.5 h-2.5 text-white" />
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm relative">
                <div className="absolute inset-[1px] left-[1px] right-[3px] bg-green-400 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App header */}
          <div className="px-4 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center overflow-hidden">
                <img src={`${B}/images/opt/logo-radio.webp`} alt="Logo" className="w-full h-full object-contain p-0.5" />
              </div>
              <div>
                <p className="text-white text-[11px] font-bold leading-none">Radio Monte Alto</p>
                <p className="text-blue-300/70 text-[8px] leading-tight">El Portavoz del Reino</p>
              </div>
              <div className="ml-auto flex items-center gap-1 px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded-full">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                <span className="text-red-300 text-[8px] font-bold">EN VIVO</span>
              </div>
            </div>
          </div>

          {/* Now playing */}
          <div className="px-4 pt-4 pb-3 flex-1">
            <p className="text-[8px] text-slate-500 uppercase tracking-widest mb-1">Reproduciendo ahora</p>
            <p className="text-white text-sm font-bold leading-tight mb-0.5">Transmisión Principal</p>
            <p className="text-blue-300/70 text-[9px] mb-4">Radio Monte Alto • Huancayo, Perú</p>

            {/* Waveform */}
            <div className="flex items-center justify-center gap-[2px] h-12 mb-4">
              {WAVE_BARS.map((height, i) => {
                const h = Math.max(2, height + Math.sin((i + wavePhase) * 0.6) * 3);
                return (
                  <div
                    key={i}
                    className="w-[3px] rounded-full transition-all duration-100"
                    style={{
                      height: `${h * 4}px`,
                      background:
                        i % 3 === 0
                          ? 'rgba(251,191,36,0.9)'
                          : i % 3 === 1
                          ? 'rgba(96,165,250,0.8)'
                          : 'rgba(255,255,255,0.5)',
                    }}
                  />
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mb-5">
              <button className="w-6 h-6 flex items-center justify-center text-slate-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-900/50">
                <Radio className="w-5 h-5 text-white" />
              </button>
              <button className="w-6 h-6 flex items-center justify-center text-slate-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 px-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-slate-500"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" />
              </div>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
            </div>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around items-center pt-3 border-t border-white/5 mx-4">
            {[
              { icon: <Radio className="w-4 h-4" />, label: 'Radio', active: true },
              { icon: <Music className="w-4 h-4" />, label: 'Música', active: false },
              { icon: <BookOpen className="w-4 h-4" />, label: 'Recursos', active: false },
            ].map(({ icon, label, active }) => (
              <div key={label} className={`flex flex-col items-center gap-0.5 ${active ? 'text-blue-400' : 'text-slate-600'}`}>
                {icon}
                <span className="text-[7px]">{label}</span>
                {active && <div className="w-1 h-1 bg-blue-400 rounded-full" />}
              </div>
            ))}
          </div>
        </div>

        {/* Home bar */}
        <div className="flex justify-center py-2 bg-slate-950">
          <div className="w-24 h-1 bg-slate-600 rounded-full" />
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -right-4 top-16 flex items-center gap-1.5 px-3 py-2 bg-slate-800/90 border border-slate-700/60 rounded-xl shadow-xl backdrop-blur-sm">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <span className="text-white text-[10px] font-bold">HD Quality</span>
      </div>
      <div className="absolute -left-4 bottom-20 flex items-center gap-1 px-3 py-2 bg-slate-800/90 border border-slate-700/60 rounded-xl shadow-xl backdrop-blur-sm">
        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        <span className="text-white text-[10px] font-bold">4.8 ★★★★★</span>
      </div>
    </div>
  );
}

export default function AppDownloadSection() {
  return (
    <section className="relative bg-slate-950 overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900/40 border border-blue-500/30 rounded-full text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Smartphone className="w-3.5 h-3.5 text-yellow-400" />
              Disponible Ahora
            </div>

            <GoldTitle>Lleva la Unción Contigo</GoldTitle>
            <p className="text-yellow-400 font-serif italic text-xl md:text-2xl mb-6">
              "Radio Monte Alto en tu bolsillo"
            </p>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Descarga nuestra app gratuita y escucha alabanzas, prédicas y la transmisión en vivo las 24 horas del día, desde cualquier lugar del mundo.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-lg mx-auto lg:mx-0">
              {features.map(({ icon, title, desc, color, bg }) => (
                <div key={title} className={`flex items-start gap-3 p-3 rounded-xl border ${bg} backdrop-blur-sm`}>
                  <div className={`mt-0.5 shrink-0 ${color}`}>{icon}</div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3.5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="currentColor">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.45-11.45L13.46 9.4 3.18 23.76zm16.4-12.51L16.56 9.6 13.4 12.5l3.16 2.9 3.02-1.75c.86-.5.86-1.9 0-2.4zm-16.4-9L13.46 13.6l3.16-2.9L4.17.48a1.17 1.17 0 0 0-.99.77zm10.3 11.25L1.21 24c-.22-.22-.22-.55 0-.77l12.27-11.27-12.27-11.3c-.22-.21-.22-.55 0-.77l12.27 11.1z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] font-normal leading-none opacity-70">Disponible en</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto opacity-50 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-800/60 border border-slate-700/60 text-slate-400 rounded-2xl relative overflow-hidden cursor-not-allowed">
                <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-[7px] font-bold tracking-wide uppercase">Pronto</div>
                <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] leading-none opacity-60">Próximamente en</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="mt-6 flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['bg-blue-500', 'bg-yellow-500', 'bg-emerald-500', 'bg-purple-500'].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 border-slate-950 ${c} flex items-center justify-center text-white text-[10px] font-bold`}>
                    {['M', 'C', 'A', 'J'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-[11px]">+10,000 oyentes activos</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex-shrink-0 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

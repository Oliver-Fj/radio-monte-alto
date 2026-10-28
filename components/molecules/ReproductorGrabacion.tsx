'use client';

import { useRef, useState } from 'react';
import { Download, Pause, Play } from 'lucide-react';
import type { Grabacion } from '@/lib/data/programaDetalle';
import { publicPath } from '@/lib/utils/publicPath';
import { cn } from '@/lib/utils/cn';

interface Props {
  grabacion: Grabacion;
}

/**
 * Fila de una grabación con su reproductor.
 * Usa el elemento <audio> nativo: nada de librerías, funciona sin JavaScript
 * pesado y respeta los controles del sistema en el móvil.
 */
export default function ReproductorGrabacion({ grabacion }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [sonando, setSonando] = useState(false);
  const [progreso, setProgreso] = useState(0);

  const hayAudio = Boolean(grabacion.audio);

  const alternar = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <article
      className={cn(
        'rounded-2xl border p-4 transition-colors md:p-5',
        sonando
          ? 'border-sky-500/50 bg-sky-500/[0.07]'
          : 'border-white/10 bg-white/[0.03] hover:border-sky-500/30',
      )}
    >
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={alternar}
          disabled={!hayAudio}
          aria-label={sonando ? `Pausar ${grabacion.tema}` : `Reproducir ${grabacion.tema}`}
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition',
            hayAudio
              ? 'bg-gradient-to-br from-sky-500 to-sky-700 hover:scale-105'
              : 'cursor-not-allowed bg-slate-700/50',
          )}
        >
          {sonando ? (
            <Pause className="h-5 w-5" aria-hidden />
          ) : (
            <Play className="ml-0.5 h-5 w-5" aria-hidden />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
            <time
              dateTime={grabacion.fechaISO}
              className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-600"
            >
              {grabacion.fecha}
            </time>
            <span className="text-[11px] font-semibold text-slate-500">{grabacion.duracion}</span>
          </div>

          <h3 className="font-serif text-lg font-bold leading-snug text-white">{grabacion.tema}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{grabacion.resumen}</p>

          {hayAudio ? (
            <>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={Math.round(progreso)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Avance de la grabación"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-sky-400 to-sky-600 transition"
                  style={{ width: `${progreso}%` }}
                />
              </div>

              <audio
                ref={audioRef}
                src={publicPath(grabacion.audio!)}
                preload="none"
                onPlay={() => setSonando(true)}
                onPause={() => setSonando(false)}
                onEnded={() => {
                  setSonando(false);
                  setProgreso(0);
                }}
                onTimeUpdate={(e) => {
                  const el = e.currentTarget;
                  if (el.duration) setProgreso((el.currentTime / el.duration) * 100);
                }}
              >
                <track kind="captions" />
              </audio>

              <a
                href={publicPath(grabacion.audio!)}
                download
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition hover:text-sky-500"
              >
                <Download className="h-3.5 w-3.5" aria-hidden />
                Descargar el audio
              </a>
            </>
          ) : (
            <p className="mt-3 text-xs italic text-slate-500">
              Grabación aún no disponible en línea.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

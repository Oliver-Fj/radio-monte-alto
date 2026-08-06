'use client';

import { useState } from 'react';
import { Music, Copy, Check, Download, Sparkles, FileText } from 'lucide-react';
import himnos, { type Himno } from '@/lib/data/himnos';
import GoldTitle from '@/components/atoms/GoldTitle';
import { cn } from '@/lib/utils/cn';

// ── Genera y descarga el PDF del himno usando la API de impresión del navegador ──
function descargarPDF(himno: Himno) {
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>${himno.titulo}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,700;1,400&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'EB Garamond', Georgia, serif; padding: 60px; max-width: 700px; margin: auto; color: #1a1a2e; background: #fff; }
    .encabezado { text-align: center; border-bottom: 2px solid #c8a84b; padding-bottom: 24px; margin-bottom: 36px; }
    .logo-txt { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #888; margin-bottom: 8px; }
    h1 { font-size: 28px; font-weight: 700; color: #1a1a2e; margin-bottom: 6px; }
    .subtitulo { font-size: 14px; color: #666; font-style: italic; }
    .estrofa { margin-bottom: 28px; }
    .tipo-titulo { font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #c8a84b; margin-bottom: 10px; }
    .coro .tipo-titulo { color: #8b5cf6; }
    .puente .tipo-titulo { color: #06b6d4; }
    .verso { font-size: 15px; line-height: 1.9; color: #2d2d2d; }
    .coro .verso { font-style: italic; font-weight: 500; color: #1a1a2e; }
    .nota { margin-top: 48px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 11px; color: #999; text-align: center; letter-spacing: 1px; }
    @media print {
      body { padding: 40px; }
      @page { margin: 2cm; }
    }
  </style>
</head>
<body>
  <div class="encabezado">
    <div class="logo-txt">Radio Monte Alto · C.G.I. Monte Alto</div>
    <h1>${himno.titulo}</h1>
    ${himno.subtitulo ? `<div class="subtitulo">${himno.subtitulo}</div>` : ''}
  </div>
  ${himno.estrofas.map(e => `
  <div class="estrofa ${e.tipo}">
    ${e.titulo ? `<div class="tipo-titulo">${e.titulo}</div>` : ''}
    ${e.versos.map(v => `<div class="verso">${v}</div>`).join('')}
  </div>`).join('')}
  ${himno.nota ? `<div class="nota">${himno.nota}</div>` : ''}
  <script>window.onload = () => { window.print(); }<\/script>
</body>
</html>`;

  const ventana = window.open('', '_blank', 'width=800,height=900');
  if (ventana) {
    ventana.document.write(html);
    ventana.document.close();
  }
}

function HimnoViewer({ himno }: { himno: Himno }) {
  const [copiado, setCopiado] = useState(false);

  const copiarLetra = async () => {
    const texto =
      `${himno.titulo}\n${himno.subtitulo ? himno.subtitulo + '\n' : ''}\n` +
      himno.estrofas
        .map((e) => (e.titulo ? e.titulo.toUpperCase() + '\n' : '') + e.versos.join('\n'))
        .join('\n\n');
    await navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Cabecera del himno */}
      <header className="mb-8 border-b-[3px] border-double border-amber-700/30 pb-6 text-center">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-amber-700/70">
          Letra completa
        </p>
        <h3 className="font-serif text-3xl font-bold leading-tight text-[#2b2013] md:text-4xl">
          {himno.titulo}
        </h3>
        {himno.subtitulo && (
          <p className="mt-1.5 text-sm italic text-[#6b5636]">{himno.subtitulo}</p>
        )}

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={copiarLetra}
            className="inline-flex items-center gap-2 rounded-full border border-amber-800/25 bg-amber-900/5 px-4 py-2 text-xs font-semibold text-[#6b5636] transition-all duration-300 hover:border-amber-700/40 hover:bg-amber-900/10 hover:text-[#2b2013]"
          >
            {copiado ? (
              <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden />
            ) : (
              <Copy className="h-3.5 w-3.5" aria-hidden />
            )}
            {copiado ? 'Copiado' : 'Copiar letra'}
          </button>
          <button
            type="button"
            onClick={() => descargarPDF(himno)}
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${himno.acento} px-4 py-2 text-xs font-bold text-[#2b2013] shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105`}
          >
            <Download className="h-3.5 w-3.5" aria-hidden />
            Descargar PDF
          </button>
        </div>
      </header>

      {/* Letra: centrada y corrida, como en el pergamino de la iglesia */}
      <div className="space-y-8 text-center">
        {himno.estrofas.map((estrofa, i) => {
          const esCoro = estrofa.tipo === 'coro';
          return (
            <div key={i}>
              {estrofa.titulo && (
                <p
                  className={cn(
                    'mb-2 text-[11px] font-black uppercase tracking-[0.35em]',
                    esCoro ? 'text-red-800/80' : 'text-amber-800/60',
                  )}
                >
                  {estrofa.titulo}
                </p>
              )}
              {estrofa.versos.map((verso, j) => (
                <p
                  key={j}
                  className={cn(
                    'font-serif text-[17px] leading-[1.9] md:text-lg',
                    esCoro ? 'font-semibold text-[#241a0e]' : 'text-[#33281a]',
                  )}
                >
                  {verso}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      {/* Cierre ornamental */}
      <div className="mt-9 flex items-center justify-center gap-3" aria-hidden>
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-700/40" />
        <span className="text-amber-700/60">&#10022;</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-700/40" />
      </div>

      {himno.nota && (
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.25em] text-amber-900/45">
          {himno.nota}
        </p>
      )}
    </div>
  );
}

export default function HimnosSection() {
  const [activo, setActivo] = useState(0);
  const himno = himnos[activo];

  return (
    <section
      id="himnos"
      aria-label="Himnos de la iglesia"
      className="relative overflow-hidden bg-slate-950 pb-20 md:pb-28"
    >
      {/* Luz ambiental del himno activo */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[180px]"
          style={{ background: himno?.glowColor ?? 'rgba(234,179,8,0.04)' }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Encabezado */}
        <header className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1.5">
            <Music className="h-3.5 w-3.5 animate-pulse text-yellow-400" aria-hidden />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-300">
              Himnos
            </span>
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" aria-hidden />
          </div>

          <GoldTitle pie="Cánticos de la congregación">Himnos de la Iglesia</GoldTitle>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400">
            La letra completa de cada himno, tal como se canta en la congregación. Puedes copiarla
            o descargarla en PDF para llevarla contigo.
          </p>
        </header>

        {/* Selector de himno */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {himnos.map((h, i) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setActivo(i)}
              aria-current={activo === i}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                activo === i
                  ? `scale-105 bg-gradient-to-r ${h.acento} text-slate-900 shadow-lg`
                  : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/25 hover:text-white',
              )}
            >
              {h.titulo}
            </button>
          ))}
        </div>

        {/* Pergamino con la letra */}
        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-amber-400/20 via-yellow-600/10 to-transparent blur-2xl"
          />
          <div className="papel-pergamino relative rounded-[28px] border border-amber-800/30 p-7 shadow-[0_24px_90px_rgba(120,80,10,0.45)] ring-1 ring-inset ring-amber-100/70 md:p-10">
            <FileText
              aria-hidden
              className="pointer-events-none absolute right-6 top-6 h-10 w-10 text-amber-900/10"
            />
            <HimnoViewer key={himno?.id ?? activo} himno={himno} />
          </div>
        </div>
      </div>
    </section>
  );
}

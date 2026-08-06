'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { BookOpen, Share2, Copy, Check, Sparkles } from 'lucide-react';

const B = process.env.NEXT_PUBLIC_BASE_PATH || '';

const VERSICULOS = [
  { texto: 'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.', referencia: 'Juan 3:16' },
  { texto: 'Todo lo puedo en Cristo que me fortalece.', referencia: 'Filipenses 4:13' },
  { texto: 'Jehová es mi pastor; nada me faltará.', referencia: 'Salmos 23:1' },
  { texto: 'Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.', referencia: 'Proverbios 3:5-6' },
  { texto: 'Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.', referencia: 'Mateo 6:33' },
  { texto: 'No os conforméis a este siglo, sino transformaos por medio de la renovación de vuestro entendimiento.', referencia: 'Romanos 12:2' },
  { texto: 'El Señor es mi luz y mi salvación; ¿a quién temeré? El Señor es la fortaleza de mi vida; ¿de quién me atemorizaré?', referencia: 'Salmos 27:1' },
  { texto: 'Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.', referencia: 'Romanos 8:28' },
  { texto: 'Estad siempre gozosos. Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', referencia: '1 Tesalonicenses 5:16-18' },
  { texto: 'Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.', referencia: 'Jeremías 29:11' },
  { texto: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.', referencia: 'Isaías 41:10' },
  { texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.', referencia: 'Salmos 119:105' },
  { texto: 'Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.', referencia: 'Mateo 11:28' },
  { texto: 'El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece.', referencia: '1 Corintios 13:4' },
  { texto: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios.', referencia: 'Efesios 2:8' },
  { texto: 'Jehová peleará por vosotros, y vosotros estaréis tranquilos.', referencia: 'Éxodo 14:14' },
  { texto: 'Buscad a Jehová mientras puede ser hallado, llamadle en tanto que está cercano.', referencia: 'Isaías 55:6' },
  { texto: 'El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.', referencia: 'Salmos 91:1' },
  { texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.', referencia: 'Gálatas 5:22-23' },
  { texto: 'Todo lo que pidiereis al Padre en mi nombre, lo haré, para que el Padre sea glorificado en el Hijo.', referencia: 'Juan 14:13' },
  { texto: 'Y él dijo: Mi presencia irá contigo, y te daré descanso.', referencia: 'Éxodo 33:14' },
  { texto: 'Encomienda a Jehová tu camino, y confía en él; y él hará.', referencia: 'Salmos 37:5' },
  { texto: 'No se turbe vuestro corazón; creéis en Dios, creed también en mí.', referencia: 'Juan 14:1' },
  { texto: 'El nombre de Jehová es torre fuerte; a él correrá el justo, y será levantado.', referencia: 'Proverbios 18:10' },
  { texto: 'Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá.', referencia: 'Marcos 11:24' },
  { texto: 'Porque el Señor no abandona a su pueblo, ni desampara su heredad.', referencia: 'Salmos 94:14' },
  { texto: 'El que comenzó en vosotros la buena obra, la perfeccionará hasta el día de Jesucristo.', referencia: 'Filipenses 1:6' },
  { texto: 'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.', referencia: 'Filipenses 4:6' },
  { texto: 'Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús.', referencia: '2 Corintios 2:14' },
  { texto: '¿No te he mandado que te esfuerces y seas valiente? No temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.', referencia: 'Josué 1:9' },
  { texto: 'Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia.', referencia: 'Números 6:24-25' },
];

export default function VerseSection() {
  const [fecha, setFecha] = useState('');
  const [visible, setVisible] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [toast, setToast] = useState('');

  // Día del mes leído tras montar (0 en el servidor: sin errores de hidratación).
  const diaDelMes = useSyncExternalStore(
    () => () => {},
    () => new Date().getDate(),
    () => 1
  );

  // Mismo versículo durante todo el día
  const versiculo = VERSICULOS[(diaDelMes - 1) % VERSICULOS.length];

  useEffect(() => {
    // Fecha y entrada suave: fuera del render inicial para no provocar
    // errores de hidratación ni renders en cascada.
    const idFecha = setTimeout(() => {
      const opciones: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const f = new Date().toLocaleDateString('es-ES', opciones);
      setFecha(f.charAt(0).toUpperCase() + f.slice(1));
      setVisible(true);
    }, 60);
    return () => clearTimeout(idFecha);
  }, []);

  const textoCompleto = `"${versiculo.texto}" — ${versiculo.referencia} (RVR1960)`;

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
        className={`relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Badge superior */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-500/60" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            <span className="text-yellow-300 text-[11px] font-bold tracking-[0.25em] uppercase">Alimento Diario</span>
            <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-500/60" />
        </div>

        {/* Fecha */}
        {fecha && (
          <p className="text-slate-400 text-sm md:text-base mb-10 capitalize tracking-wide">{fecha}</p>
        )}

        {/* Versículo con comillas geométricas */}
        <blockquote className="grid gap-5 md:gap-6 max-w-4xl w-full mb-10 px-2 md:px-6">
          <span className="vq-open" aria-hidden="true" />

          <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed text-white/90 drop-shadow-lg text-left">
            {versiculo.texto}
          </p>

          <footer className="grid gap-1 text-left">
            <cite className="not-italic text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 font-serif">
              {versiculo.referencia}
            </cite>
            <span className="text-slate-500 text-xs tracking-[0.3em] uppercase">Reina Valera 1960</span>
          </footer>

          <span className="vq-close" aria-hidden="true" />
        </blockquote>

        {/* Botones */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopiar}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-300 text-slate-300 hover:text-white text-sm font-medium"
          >
            {copiado && toast.includes('copiado') ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            )}
            Copiar
          </button>

          <button
            onClick={handleCompartir}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/25 hover:border-yellow-500/50 transition-all duration-300 text-yellow-400 hover:text-yellow-300 text-sm font-medium"
          >
            <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Compartir
          </button>
        </div>
      </div>

      {/* ── Línea inferior ── */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* ── Toast ── */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${copiado ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/95 border border-green-500/30 rounded-full shadow-2xl backdrop-blur-md">
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-400" />
          </div>
          <span className="text-white text-sm font-medium">{toast}</span>
        </div>
      </div>
    </section>
  );
}

// lib/data/himnos.ts
// ─────────────────────────────────────────────────────────────
// INSTRUCCIONES: Pega la letra real de cada himno en el campo
// "estrofas". Cada estrofa es un objeto { tipo, versos }.
// tipos disponibles: 'estrofa' | 'coro' | 'puente' | 'intro'
// ─────────────────────────────────────────────────────────────

export interface Estrofa {
  tipo: 'estrofa' | 'coro' | 'puente' | 'intro';
  titulo?: string;   // ej: "Estrofa 1", "Coro"
  versos: string[];  // cada línea del himno
}

export interface Himno {
  id: number;
  titulo: string;
  subtitulo?: string;
  acento: string;   // color tailwind para el tema
  glowColor: string;
  estrofas: Estrofa[];
  nota?: string;    // nota al pie opcional
}

export const himnos: Himno[] = [
  {
    id: 1,
    titulo: 'El Cántico del Cordero',
    subtitulo: 'Cántico oficial de la congregación',
    acento: 'from-yellow-400 to-amber-500',
    glowColor: 'rgba(251,191,36,0.2)',
    estrofas: [
      {
        tipo: 'estrofa',
        versos: [
          'Vendrá la paz a Sion, llegará el amor al Perú;',
          'vendrá el poder sobre ti, hijos del sol;',
          'vendrá la unción a tu corazón,',
          'con poder, justicia y verdad;',
          'y seréis como las estrellas de los cielos,',
        ],
      },
      {
        tipo: 'estrofa',
        versos: ['y conquistaréis los confines de la tierra;'],
      },
      {
        tipo: 'estrofa',
        versos: [
          'y mi palabra proclamaréis, con poder y autoridad;',
          'y la doctrina llevaréis, con amor y verdad.',
        ],
      },
      {
        tipo: 'coro',
        titulo: 'Coro',
        versos: [
          'Yo soy la rosa de Sarón, el lirio de los valles',
          'que vine a derramar mi amor,',
          'y mi gloria posará en tu pequeño corazón,',
          'y la ciencia y sabiduría morará en tu espíritu.',
        ],
      },
      {
        tipo: 'estrofa',
        versos: [
          'El fuego ya viene,',
          'la riqueza y la honra está en este lugar.',
        ],
      },
      {
        tipo: 'estrofa',
        versos: [
          'El fuego ya viene:',
          'si eres paja te consumirás,',
          'si eres fuego te gozarás,',
          'si eres roca te fortalecerás,',
          'si eres polvo te desvanecerás.',
        ],
      },
    ],
    nota: 'El Cántico del Cordero — C.G.I. Monte Alto',
  },
  {
    id: 5,
    titulo: 'Himno del Ejército',
    subtitulo: 'Himno del ejército de Jehová de los Ejércitos',
    acento: 'from-amber-500 to-red-600',
    glowColor: 'rgba(239,68,68,0.18)',
    estrofas: [
      {
        tipo: 'estrofa',
        versos: [
          'Cercano está el tiempo de la victoria,',
          'llegar a la cima,',
          'vencido está todo',
          'por el Cordero,',
          'y yo iré a tomar la heredad;',
          'la heredad',
          'son los cielos y la tierra,',
          'y los valientes tomarán',
          'la heredad.',
        ],
      },
      {
        tipo: 'estrofa',
        versos: [
          'Sigamos, hermanos valientes,',
          'porque el gran León',
          'de la tribu de Judá',
          'está con nosotros.',
        ],
      },
      {
        tipo: 'estrofa',
        versos: [
          'Él ha vencido por nosotros',
          'y el camino ya está listo;',
          'subiremos a la cima,',
          'celebraremos la victoria,',
          'y los muertos vivirán',
          'porque han creído',
          'en el Cordero redentor.',
        ],
      },
      {
        tipo: 'estrofa',
        versos: [
          '¡Aleluya, Aleluya, Aleluya!',
          'Amén.',
        ],
      },
    ],
    nota: 'Himno del Ejército — C.G.I. Monte Alto',
  },
  {
    id: 2,
    titulo: 'Himno de la Iglesia',
    subtitulo: 'Himno congregacional de Monte Alto',
    acento: 'from-blue-400 to-blue-600',
    glowColor: 'rgba(96,165,250,0.2)',
    estrofas: [
      // ── PEGA AQUÍ LA LETRA DEL HIMNO DE LA IGLESIA ──
      {
        tipo: 'estrofa',
        titulo: 'Estrofa 1',
        versos: [
          '[ Pega aquí la primera estrofa ]',
          '[ del Himno de la Iglesia ]',
        ],
      },
      {
        tipo: 'coro',
        titulo: 'Coro',
        versos: [
          '[ Pega aquí el coro ]',
          '[ del Himno de la Iglesia ]',
        ],
      },
    ],
    nota: 'Himno de la Iglesia — C.G.I. Monte Alto',
  },
  {
    id: 3,
    titulo: 'Himno Nacional del Perú',
    subtitulo: 'Himno patrio de la República del Perú',
    acento: 'from-red-500 to-red-700',
    glowColor: 'rgba(239,68,68,0.2)',
    estrofas: [
      {
        tipo: 'coro',
        titulo: 'Coro',
        versos: [
          'Somos libres, seámoslo siempre,',
          'y antes niegue sus luces el Sol,',
          'que faltemos al voto solemne',
          'que la Patria al Eterno elevó.',
          'Que faltemos al voto solemne',
          'que la Patria al Eterno elevó.',
        ],
      },
      {
        tipo: 'estrofa',
        titulo: 'Primera Estrofa',
        versos: [
          'Largo tiempo el peruano oprimido',
          'la ominosa cadena arrastró;',
          'condenado a una cruel servidumbre',
          'largo tiempo en silencio gimió.',
          'Mas apenas el grito sagrado',
          '¡Libertad! en sus costas se oyó,',
          'la indolencia de esclavo sacude,',
          'la humillada cerviz levantó.',
        ],
      },
      {
        tipo: 'estrofa',
        titulo: 'Segunda Estrofa',
        versos: [
          'Ya el estruendo de broncas cadenas',
          'que escucháramos tres siglos de horror,',
          'de los libres al grito sagrado',
          'que oyó atónito el mundo, cesó.',
          'Por doquier San Martín inflamado,',
          '¡Libertad! ¡Libertad! pronunció,',
          'y meciendo su base los Andes',
          'la anunciaron, también, a una voz.',
        ],
      },
    ],
    nota: 'Letra: José de la Torre Ugarte · Música: José Bernardo Alcedo (1821)',
  },
  {
    id: 4,
    titulo: 'Himno de Telón Fucsia',
    subtitulo: 'Himno especial de la congregación',
    acento: 'from-pink-400 to-fuchsia-600',
    glowColor: 'rgba(232,121,249,0.2)',
    estrofas: [
      // ── PEGA AQUÍ LA LETRA DEL HIMNO DE TELÓN FUCSIA ──
      {
        tipo: 'estrofa',
        titulo: 'Estrofa 1',
        versos: [
          '[ Pega aquí la primera estrofa ]',
          '[ del Himno de Telón Fucsia ]',
        ],
      },
      {
        tipo: 'coro',
        titulo: 'Coro',
        versos: [
          '[ Pega aquí el coro ]',
          '[ del Himno de Telón Fucsia ]',
        ],
      },
    ],
    nota: 'Himno de Telón Fucsia — C.G.I. Monte Alto',
  },
];

export default himnos;
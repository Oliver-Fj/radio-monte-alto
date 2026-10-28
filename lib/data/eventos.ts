// lib/data/eventos.ts
// -----------------------------------------------------------------------------
// Fuente única de verdad de los EVENTOS ESPECIALES del ministerio.
// Los datos (fechas, lugares, versículos y teléfonos) están tomados de los
// afiches oficiales que se encuentran en public/images/eventos/.
//
// Para publicar un evento nuevo:
//   1. Sube la portada (afiche vertical) a  public/images/eventos/
//   2. Sube las fotos del evento a          public/images/eventos/
//   3. Copia un bloque de abajo, cambia el `slug` (debe ser único) y edita los textos.
//
// NOTA: no uses el prefijo de basePath en las rutas. next/image lo agrega solo.
// -----------------------------------------------------------------------------

/** Un evento futuro se anuncia; uno pasado se muestra como memoria del ministerio. */
export type EstadoEvento = 'proximo' | 'realizado';

/** Paleta de acento de cada evento (las clases reales viven en el componente). */
export type ColorEvento = 'rose' | 'blue' | 'cyan' | 'amber' | 'emerald' | 'violet';

/** Ícono de lucide-react asociado al evento (se resuelve en el componente). */
export type IconoEvento = 'HeartHandshake' | 'BookOpenCheck' | 'Users' | 'PartyPopper' | 'CalendarHeart';

/**
 * Cómo encuadrar la imagen de la lámina:
 * - 'afiche': marco vertical y la imagen se ve completa (no se recorta el texto).
 * - 'foto':   marco horizontal y la imagen llena el marco.
 */
export type FormatoLamina = 'afiche' | 'foto';

/** Cada lámina del detalle: una imagen con su fecha, título y relato. */
export interface SlideEvento {
  id: string;
  imagen: string;
  alt: string;
  /** Fecha o momento que retrata la lámina. Ej: "22, 23 y 24 de mayo de 2026" */
  fecha: string;
  titulo: string;
  texto: string;
  formato?: FormatoLamina;
}

export interface EventoEspecial {
  /** Identificador de URL: /eventos/[slug] */
  slug: string;
  titulo: string;
  /** Bajada corta que acompaña al título en la tarjeta. */
  subtitulo: string;
  estado: EstadoEvento;
  icono: IconoEvento;
  color: ColorEvento;
  /** Portada del evento (normalmente el afiche). */
  portada: string;
  portadaAlt: string;
  /**
   * Cómo mostrar la portada en la tarjeta. Por defecto 'afiche': se ve completa,
   * sin recortes, para que se pueda leer el flyer. Usa 'foto' si la portada es
   * una fotografía y prefieres que llene el marco.
   */
  portadaFormato?: FormatoLamina;
  /** Fecha en formato ISO (YYYY-MM-DD) — se usa para ordenar y para SEO. */
  fechaISO: string;
  /** Fecha tal como se muestra al visitante. */
  fechaTexto: string;
  lugar: string;
  /** Una o dos líneas para la tarjeta de la parrilla. */
  resumen: string;
  /** Descripción completa: qué es y qué se vive en el evento. */
  descripcion: string;
  /** A quién está dirigido. */
  dirigidoA: string;
  /** Texto de invitación que se lee al aire y se muestra en el detalle. */
  invitacion: string;
  /** Teléfono o canal de inscripción (opcional). */
  contacto?: string;
  /** Láminas del carrusel del detalle. */
  galeria: SlideEvento[];
}

export const eventos: EventoEspecial[] = [
  // ---------------------------------------------------------------------------
  // Montaña de Ayuno de Intercesión — afiche: ayuno-matahuasi.webp
  // ---------------------------------------------------------------------------
  {
    slug: 'ayuno-en-montana-matahuasi',
    titulo: 'Montaña de Ayuno de Intercesión',
    subtitulo: 'Por todos los perdidos de esta nación y del mundo entero',
    estado: 'realizado',
    icono: 'BookOpenCheck',
    color: 'blue',
    portada: '/images/eventos/ayuno-matahuasi.webp',
    portadaAlt: 'Afiche de la Montaña de Ayuno de Intercesión: domingo 11 de octubre, Matahuasi',
    fechaISO: '2026-10-11',
    fechaTexto: 'Domingo 11 de octubre de 2026, de 8:30 a. m. a 2:00 p. m.',
    lugar: 'Matahuasi — Mantaro, sector 2, Huancayo',
    resumen:
      'Un tiempo para clamar por los que aún no conocen el amor de Dios, para que puedan escuchar su voz y tener vida en Él.',
    descripcion:
      'Una jornada de ayuno e intercesión al aire libre, en el campo de Matahuasi, por todos los perdidos de esta nación y del mundo entero. Un tiempo para clamar por los que aún no conocen el amor de Dios, para que puedan escuchar su voz, ser alcanzados por su gracia y tener vida en Él. Se realizó el domingo 11 de octubre, de 8:30 a. m. a 2:00 p. m., en Mantaro, sector 2. Referencia para llegar: bajarse en el Recreo Campestre La Chacra, Carretera Central, margen izquierda.',
    dirigidoA: 'Toda la congregación. ¡Todos quedan invitados!',
    invitacion:
      '«Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces» (Jeremías 33:3). Las próximas montañas de ayuno se anunciarán por la radio: mantente atento y acompáñanos.',
    galeria: [
      {
        id: 'afiche',
        imagen: '/images/eventos/ayuno-matahuasi.webp',
        alt: 'Afiche oficial de la Montaña de Ayuno de Intercesión en Matahuasi',
        formato: 'afiche',
        fecha: 'Domingo 11 de octubre · 8:30 a. m. a 2:00 p. m.',
        titulo: '¡Todos quedan invitados!',
        texto:
          'El afiche oficial de la sede central Monte Alto, Huancayo: una montaña de ayuno de intercesión por todos los perdidos de esta nación y del mundo entero.',
      },
      {
        id: 'clama',
        imagen: '/images/opt/articulo-oracion.webp',
        alt: 'Manos levantadas en oración',
        fecha: 'Jeremías 33:3',
        titulo: 'Clama a mí',
        texto:
          '«Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.» La promesa que convocó a la congregación a esta jornada de ayuno.',
      },
      {
        id: 'perdidos',
        imagen: '/images/opt/articulo-mision.webp',
        alt: 'Biblia abierta en el campo',
        fecha: 'Romanos 10:14',
        titulo: 'Por los que no han oído',
        texto:
          '«¿Cómo, pues, invocarán a aquel en el cual no han creído? ¿Y cómo creerán en aquel de quien no han oído? ¿Y cómo oirán sin haber quien les predique?»',
      },
      {
        id: 'lugar',
        imagen: '/images/eventos/ayuno-matahuasi.webp',
        alt: 'Detalle del afiche con fecha, hora y lugar',
        formato: 'afiche',
        fecha: 'Matahuasi — Mantaro, sector 2',
        titulo: 'Cómo llegar',
        texto:
          'En Matahuasi, Mantaro, sector 2, Huancayo. Referencia: bajarse en el Recreo Campestre La Chacra, Carretera Central, margen izquierda.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Encuentro Matrimonial — afiche: retiro-matrimonio.png
  // ---------------------------------------------------------------------------
  {
    slug: 'encuentro-matrimonial',
    titulo: 'Encuentro Matrimonial',
    subtitulo: 'Un tiempo para estar apartado con Dios y tu cónyuge',
    estado: 'realizado',
    icono: 'HeartHandshake',
    color: 'rose',
    portada: '/images/eventos/retiro-matrimonio.png',
    portadaAlt: 'Afiche del Encuentro Matrimonial: 22, 23 y 24 de mayo',
    fechaISO: '2026-05-22',
    fechaTexto: '22, 23 y 24 de mayo de 2026',
    lugar: 'Casa de retiro «Pentecostés Misionera» — La Huaycha, distrito de Mito, Huancayo',
    resumen:
      'Tres días para fortalecer el vínculo del amor, la comunicación y el respeto bajo la luz de la Palabra.',
    descripcion:
      'Un encuentro de tres días en la casa de retiro «Pentecostés Misionera», en La Huaycha, distrito de Mito, para que los esposos se aparten de la rutina y estén con Dios y con su cónyuge. El propósito, tal como lo anuncia el afiche, es fortalecer el vínculo del amor, la comunicación, la unión y el respeto con nuestra pareja bajo la luz de la Palabra. La referencia para llegar es el mismo cruce de La Huaycha, margen derecha.',
    dirigidoA: 'Matrimonios y parejas de la congregación. Todos quedan invitados.',
    invitacion:
      'Este encuentro ya se realizó, pero cada año se vuelve a convocar. Si quieres participar en la próxima edición con tu esposo o esposa, comunícate a los números de la organización y mantente atento a los anuncios de la radio.',
    contacto: 'Más información: 964 185 356 · 999 417 187',
    galeria: [
      {
        id: 'afiche',
        imagen: '/images/eventos/retiro-matrimonio.png',
        alt: 'Afiche oficial del Encuentro Matrimonial',
        formato: 'afiche',
        fecha: '22, 23 y 24 de mayo de 2026',
        titulo: 'Todos quedan invitados',
        texto:
          'El afiche oficial del Encuentro Matrimonial convocado por la sede central Monte Alto, Huancayo: tres días apartados con Dios y con tu cónyuge, en la casa de retiro «Pentecostés Misionera».',
      },
      {
        id: 'palabra',
        imagen: '/images/opt/articulo-familia.webp',
        alt: 'Matrimonio leyendo la Biblia juntos',
        fecha: 'Efesios 5:25',
        titulo: 'El texto que sostuvo el encuentro',
        texto:
          '«Maridos, amad a vuestras mujeres, así como Cristo amó a la iglesia, y se entregó a sí mismo por ella.» Sobre ese versículo giraron las enseñanzas de los tres días.',
      },
      {
        id: 'proposito',
        imagen: '/images/opt/articulo-gracia.webp',
        alt: 'Pareja conversando durante el encuentro',
        fecha: 'Propósito del encuentro',
        titulo: 'Fortaleciendo el vínculo',
        texto:
          'El amor, la comunicación, la unión y el respeto con nuestra pareja, trabajados bajo la luz de la Palabra y no según la costumbre del mundo.',
      },
      {
        id: 'oracion',
        imagen: '/images/opt/articulo-oracion.webp',
        alt: 'Esposos orando juntos',
        fecha: 'Los tres días',
        titulo: 'Apartados con Dios',
        texto:
          'Del viernes 22 al domingo 24, lejos del trabajo y del teléfono, con tiempos de enseñanza, oración en pareja y descanso compartido con las demás familias.',
      },
      {
        id: 'lugar',
        imagen: '/images/opt/galeria-radio-2.webp',
        alt: 'Casa de retiro donde se realizó el encuentro',
        fecha: 'La Huaycha, distrito de Mito',
        titulo: 'Dónde se realizó',
        texto:
          'En la casa de retiro «Pentecostés Misionera», en La Huaycha, distrito de Mito, Huancayo. La referencia para llegar es el mismo cruce de La Huaycha, margen derecha.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Retiro de Jóvenes y Adolescentes — afiche: jovenes.png
  // ---------------------------------------------------------------------------
  {
    slug: 'retiro-de-jovenes',
    titulo: 'Retiro de Jóvenes y Adolescentes',
    subtitulo: 'Tres días de adiestramiento espiritual',
    estado: 'realizado',
    icono: 'Users',
    color: 'cyan',
    portada: '/images/eventos/jovenes.png',
    portadaAlt: 'Afiche del retiro de jóvenes y adolescentes: 20, 21 y 22 de febrero',
    fechaISO: '2026-02-20',
    fechaTexto: '20, 21 y 22 de febrero de 2026',
    lugar: 'Casa de retiro «Pentecostés Misionera» — La Huaycha, distrito de Mito, Huancayo',
    resumen:
      'La Universidad Científica Sempiterna Celestial convocó a la juventud de cada obra a nivel nacional.',
    descripcion:
      'Tres días de adiestramiento espiritual para jóvenes y adolescentes de cada obra a nivel nacional y para todo aquel que tenga el propósito de buscar más de Dios. El retiro se organizó alrededor de cuatro ejes: adiestramiento espiritual, sembrar la semilla de la Palabra, recibir la unción y el sello de Dios para estos últimos tiempos, y levantar jóvenes llamados a defender la fe y a conquistar naciones.',
    dirigidoA:
      'Jóvenes y adolescentes de cada obra a nivel nacional, y todo aquel que quiera buscar más de Dios.',
    invitacion:
      'Ven y obtén tu armadura espiritual para combatir contra las fieras de maldad de estos últimos tiempos. El retiro de febrero ya pasó; para la próxima convocatoria conversa con el líder de jóvenes de tu filial o llama a los números de contacto.',
    contacto: 'Más información: 985 212 654 · 999 417 187',
    galeria: [
      {
        id: 'afiche',
        imagen: '/images/eventos/jovenes.png',
        alt: 'Afiche oficial del retiro de jóvenes y adolescentes',
        formato: 'afiche',
        fecha: '20, 21 y 22 de febrero de 2026',
        titulo: 'Convocatoria a la juventud',
        texto:
          'La Universidad Científica Sempiterna Celestial convoca a los jóvenes y adolescentes de cada obra a nivel nacional a un retiro espiritual de tres días.',
      },
      {
        id: 'llamado',
        imagen: '/images/opt/articulo-mision.webp',
        alt: 'Jóvenes reunidos en el retiro',
        fecha: '1 Timoteo 4:12',
        titulo: 'Nacidos para vencer',
        texto:
          '«Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes.» Jóvenes, ha llegado tu tiempo de levantarte y hacer la voluntad de Dios en estos últimos tiempos peligrosos.',
      },
      {
        id: 'ejes',
        imagen: '/images/opt/articulo-fe.webp',
        alt: 'Enseñanza durante el retiro de jóvenes',
        fecha: 'Los cuatro ejes',
        titulo: 'Qué se trabajó',
        texto:
          'Adiestramiento espiritual; sembrar la semilla de la Palabra de Dios; recibir la unción y el sello de Dios para estos últimos tiempos; y jóvenes llamados a defender su fe y a conquistar naciones.',
      },
      {
        id: 'alabanza',
        imagen: '/images/opt/galeria-radio-5.webp',
        alt: 'Tiempo de alabanza en el retiro',
        fecha: '20 al 22 de febrero',
        titulo: 'Tres días de visitación',
        texto:
          'Un tiempo glorioso de la visitación del omnipotente Jehová Dios vivo, con adiestramiento por el día y búsqueda hasta entrada la noche.',
      },
      {
        id: 'lugar',
        imagen: '/images/opt/galeria-radio-3.webp',
        alt: 'Casa de retiro Pentecostés Misionera',
        fecha: 'La Huaycha, distrito de Mito',
        titulo: 'Dónde se realizó',
        texto:
          'En la casa de retiro «Pentecostés Misionera», en La Huaycha, distrito de Mito, Huancayo, en el mismo cruce de La Huaycha, margen derecha.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Conferencia de Pastores — afiche: conf-pastores.png
  // ---------------------------------------------------------------------------
  {
    slug: 'conferencia-de-pastores',
    titulo: 'Conferencia de Pastores',
    subtitulo: 'El ministerio pastoral, a la luz de las sagradas escrituras',
    estado: 'realizado',
    icono: 'BookOpenCheck',
    color: 'blue',
    portada: '/images/eventos/conf-pastores.png',
    portadaAlt: 'Afiche de la Conferencia de Pastores: 30 y 31 de enero y 1 de febrero de 2026',
    fechaISO: '2026-01-30',
    fechaTexto: '30 y 31 de enero y 1 de febrero de 2026',
    lugar:
      'Colegio Luis Vallejos Santoni, al costado del estadio municipal — Andahuaylillas, Quispicanchi, Cusco',
    resumen:
      'Una preparatoria espiritual para encender con el fuego del Espíritu Santo el ministerio pastoral en el Perú.',
    descripcion:
      'La sede central convocó a un gran evento dirigido a todos los pastores y a todo aquel que tenga un llamado al ministerio pastoral: una preparatoria espiritual a la luz de las sagradas escrituras, para encender con el fuego del Espíritu Santo el ministerio pastoral en el Perú. Se realizó en la ciudad imperial del Cusco, en el distrito de Andahuaylillas, provincia de Quispicanchi, Urcos.',
    dirigidoA: 'Todos los pastores y todo aquel que tenga un llamado al ministerio pastoral.',
    invitacion:
      'Pastor, líder: si esta conferencia le quedó lejos, la siguiente convocatoria se anunciará por la radio y por medio de la coordinación de cada obra. Manténgase atento y prepare su viaje con tiempo.',
    galeria: [
      {
        id: 'afiche',
        imagen: '/images/eventos/conf-pastores.png',
        alt: 'Afiche oficial de la Conferencia de Pastores',
        formato: 'afiche',
        fecha: '30 y 31 de enero y 1 de febrero de 2026',
        titulo: 'El Ministerio Pastoral',
        texto:
          'El afiche de la convocatoria: tres días de conferencia para pastores en la ciudad imperial del Cusco, en el colegio Luis Vallejos Santoni.',
      },
      {
        id: 'palabra',
        imagen: '/images/opt/articulo-fe.webp',
        alt: 'Biblia abierta durante la conferencia',
        fecha: 'Mateo 16:19',
        titulo: 'Las llaves del reino',
        texto:
          '«Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos; y todo lo que desatares en la tierra será desatado en los cielos.»',
      },
      {
        id: 'convocatoria',
        imagen: '/images/opt/galeria-radio-2.webp',
        alt: 'Pastores reunidos en la conferencia',
        fecha: 'A todos los pastores',
        titulo: 'Quiénes fueron convocados',
        texto:
          'Todos los pastores y todo aquel que tenga un llamado al ministerio pastoral, para una preparatoria espiritual a la luz de las sagradas escrituras.',
      },
      {
        id: 'proposito',
        imagen: '/images/opt/articulo-gracia.webp',
        alt: 'Tiempo de intercesión durante la conferencia',
        fecha: 'Propósito',
        titulo: 'Encender el fuego del ministerio',
        texto:
          'Encender con el fuego del Espíritu Santo el ministerio pastoral en el Perú: tres días de enseñanza, intercesión y comunión entre los ministros de todas las obras.',
      },
      {
        id: 'lugar',
        imagen: '/images/opt/galeria-radio-6.webp',
        alt: 'Ciudad de Andahuaylillas, Cusco',
        fecha: 'Andahuaylillas, Cusco',
        titulo: 'Dónde se realizó',
        texto:
          'En la ciudad imperial del Cusco, distrito de Andahuaylillas, provincia de Quispicanchi, Urcos, en el colegio Luis Vallejos Santoni, al costado del estadio municipal.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Fiesta Espiritual — fotos: fiesta1..3.webp
  // OJO: el afiche no indica fecha; ajusta `fechaISO` y `fechaTexto` cuando la
  // tengas. Al subir más fotos (fiesta4.webp, fiesta5.webp…), agrégalas abajo.
  // ---------------------------------------------------------------------------
  {
    slug: 'fiesta-espiritual',
    titulo: 'Fiesta Espiritual',
    subtitulo: 'La congregación reunida delante de Dios',
    estado: 'realizado',
    icono: 'PartyPopper',
    color: 'amber',
    portada: '/images/eventos/fiesta1.webp',
    portadaAlt: 'Congregación reunida en la Fiesta Espiritual',
    portadaFormato: 'foto',
    // TODO: reemplaza estas dos líneas por la fecha real de la fiesta.
    // `fechaISO` solo sirve para ordenar la parrilla; `fechaTexto` es lo que se ve.
    fechaISO: '2026-07-01',
    fechaTexto: '2026',
    lugar: 'Sede central Monte Alto — Huancayo',
    resumen:
      'La sede central y las filiales reunidas en una jornada completa de alabanza, Palabra y ministración.',
    descripcion:
      'La celebración más concurrida del año: la sede central y las obras de todo el país se reúnen en una jornada completa de alabanza, enseñanza y ministración. El local se llena desde temprano y muchas familias viajan la noche anterior para no perderse nada. La radio acompaña la jornada para quienes no pueden asistir.',
    dirigidoA: 'Toda la congregación, sus familias y el público en general.',
    invitacion:
      'Si nunca has estado en una Fiesta Espiritual, la próxima se anunciará por la radio con varias semanas de anticipación. Ven con tu familia: la entrada es libre.',
    galeria: [
      {
        id: 'ministracion',
        imagen: '/images/eventos/fiesta1.webp',
        alt: 'Congregación de pie con el aceite de la unción en las manos',
        fecha: 'Fiesta Espiritual',
        titulo: 'Tiempo de ministración',
        texto:
          'La congregación de pie, con el aceite en las manos, en el momento de oración por los enfermos y por las familias. La iglesia quedo llena de extremo a extremo.',
      },
      {
        id: 'ensenanza',
        imagen: '/images/eventos/fiesta2.webp',
        alt: 'Hermanos tomando apuntes durante la enseñanza',
        fecha: 'Jornada de enseñanza',
        titulo: 'Con el cuaderno en la mano',
        texto:
          'Buena parte de la jornada se dedica a la Palabra. Los hermanos llegan con su Biblia y su cuaderno: lo que se enseña aquí se lleva después a cada obra del país.',
      },
      {
        id: 'panoramica',
        imagen: '/images/eventos/fiesta3.webp',
        alt: 'Vista panorámica del local lleno durante la fiesta espiritual',
        fecha: 'Vista desde el segundo nivel',
        titulo: 'Todos en un mismo lugar',
        texto:
          'La panorámica del local durante la apertura: filiales de distintas provincias formadas por delegación, cada una con su distintivo.',
      },
      {
        id: 'alabanza',
        imagen: '/images/opt/articulo-alabanza.webp',
        alt: 'Tiempo de alabanza durante la celebración',
        fecha: 'Apertura de la jornada',
        titulo: 'La alabanza que abre el día',
        texto:
          'La jornada comienza con alabanza congregacional. Es el momento en que van llegando las delegaciones que viajaron toda la noche.',
      },
      {
        id: 'transmision',
        imagen: '/images/opt/galeria-radio-3.webp',
        alt: 'Equipo de la radio transmitiendo el evento',
        fecha: 'En vivo por la radio',
        titulo: 'Para los que no pudieron viajar',
        texto:
          'El equipo técnico acompaña la jornada para que las familias que no pudieron viajar la sigan desde su casa por la señal de Radio Monte Alto.',
      },
    ],
  },
];

/** Orden de presentación: primero lo que viene, luego lo más reciente ya realizado. */
export const eventosOrdenados: EventoEspecial[] = [...eventos].sort((a, b) => {
  if (a.estado !== b.estado) return a.estado === 'proximo' ? -1 : 1;
  return a.estado === 'proximo'
    ? a.fechaISO.localeCompare(b.fechaISO) // el más cercano primero
    : b.fechaISO.localeCompare(a.fechaISO); // el más reciente primero
});

export function getEventoPorSlug(slug: string): EventoEspecial | undefined {
  return eventos.find((evento) => evento.slug === slug);
}

export default eventosOrdenados;

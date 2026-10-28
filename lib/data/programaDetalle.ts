// lib/data/programaDetalle.ts
// -----------------------------------------------------------------------------
// Ficha ampliada de cada programa: la secuencia de bloques que se emite, las
// grabaciones disponibles y los datos prácticos para el oyente.
//
// PARA SUBIR UNA GRABACIÓN:
//   1. Coloca el archivo .mp3 en  public/audio/<slug-del-programa>/
//   2. Agrega una entrada en `grabaciones` con su fecha, tema y duración.
//   3. La ruta se escribe desde la raíz: '/audio/candelero/2026-08-01.mp3'
//      (el prefijo de GitHub Pages lo añade publicPath en el componente).
//
// PARA PUBLICAR UN ESTUDIO (bosquejo, guía o lección en PDF):
//   1. Coloca el PDF en  public/pdfs/estudios/<slug-del-programa>/
//   2. Agrega una entrada en `estudios` con su título, pasaje y resumen.
//
// Si un programa todavía no tiene grabaciones o estudios, deja el arreglo
// vacío: la página lo indica con un aviso en lugar de mostrar algo roto.
// `bloques` (la secuencia de cada emisión) es opcional: si está vacío, esa
// parte no se muestra hasta que el equipo del programa la confirme.
// -----------------------------------------------------------------------------

/** Un tramo del programa, con el minuto en que empieza. */
export interface BloqueProgama {
  minuto: string;
  titulo: string;
  detalle: string;
}

/** Una emisión grabada que el oyente puede volver a escuchar. */
export interface Grabacion {
  id: string;
  fecha: string;
  fechaISO: string;
  tema: string;
  duracion: string;
  /** Ruta al mp3 dentro de /public. Vacío = todavía no se ha subido. */
  audio?: string;
  resumen: string;
}

/** Material de estudio que acompaña al programa (bosquejo, guía, lección). */
export interface Estudio {
  id: string;
  titulo: string;
  /** Pasaje bíblico base, p. ej. «Romanos 8:1-11». */
  pasaje?: string;
  fecha?: string;
  resumen: string;
  /** Ruta al PDF dentro de /public. Vacío = solo se muestra la ficha. */
  pdf?: string;
}

export interface DetalleProgama {
  slug: string;
  /** Id del programa en lib/data/programas.ts */
  programaId: string;
  lema: string;
  /** Presentación larga, la que se lee al entrar. */
  presentacion: string;
  versiculo?: { texto: string; referencia: string };
  duracion: string;
  /** Desde cuándo está al aire. Déjalo vacío si no se sabe con certeza. */
  desde?: string;
  idioma: string;
  /** Nombre tal como figura en la parrilla (lib/data/programacion.ts), para listar a quienes lo conducen. */
  nombreParrilla: string;
  bloques: BloqueProgama[];
  grabaciones: Grabacion[];
  estudios: Estudio[];
}

const BLOQUES_BASE: BloqueProgama[] = [
  {
    minuto: '00:00',
    titulo: 'Apertura y saludo',
    detalle: 'Cortina de entrada, saludo a las filiales y a los oyentes que escuchan por internet.',
  },
  {
    minuto: '05:00',
    titulo: 'Alabanza de apertura',
    detalle: 'Dos o tres cánticos congregacionales para disponer el corazón.',
  },
  {
    minuto: '15:00',
    titulo: 'Lectura bíblica del día',
    detalle: 'Se lee el pasaje completo antes de comentarlo, sin prisa.',
  },
  {
    minuto: '25:00',
    titulo: 'Desarrollo del tema',
    detalle: 'El bloque central: exposición del pasaje y aplicación práctica.',
  },
  {
    minuto: '45:00',
    titulo: 'Saludos y peticiones',
    detalle: 'Se leen los mensajes que llegan por WhatsApp y las peticiones de oración.',
  },
  {
    minuto: '55:00',
    titulo: 'Oración final y despedida',
    detalle: 'Oración por los oyentes y anuncio del tema de la próxima emisión.',
  },
];

export const DETALLES: DetalleProgama[] = [
  {
    slug: 'manteniendo-el-candelero-encendido',
    nombreParrilla: 'Manteniendo el Candelero Encendido',
    programaId: '1',
    lema: 'El primer encuentro del día',
    presentacion:
      'La primera hora de la mañana al aire. Alabanza, lectura y una palabra breve para salir de casa con el ánimo puesto en Dios. Muchos oyentes lo escuchan mientras alistan a los hijos o van camino al trabajo, así que el ritmo es tranquilo y las ideas, concretas.',
    versiculo: {
      texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.',
      referencia: 'Salmo 119:105',
    },
    duracion: '60 minutos',
    desde: 'Al aire desde 2019',
    idioma: 'Español',
    bloques: BLOQUES_BASE,
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'la-hora-de-la-clinica-celestial',
    nombreParrilla: 'La Hora de la Clinica Celestial',
    programaId: '2',
    lema: 'Una hora de intercesión',
    presentacion:
      'El bloque de oración de la mañana. Se ora por los enfermos, por las familias y por las peticiones que llegan durante la semana. No hay música de fondo ni relleno: es una hora dedicada a interceder.',
    versiculo: {
      texto: '¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él.',
      referencia: 'Santiago 5:14',
    },
    duracion: '60 minutos',
    desde: 'Al aire desde 2020',
    idioma: 'Español',
    bloques: [
      { minuto: '00:00', titulo: 'Apertura', detalle: 'Saludo y lectura del pasaje que guía la intercesión del día.' },
      { minuto: '08:00', titulo: 'Oración por los enfermos', detalle: 'Se mencionan uno por uno los casos recibidos.' },
      { minuto: '25:00', titulo: 'Oración por las familias', detalle: 'Hogares en conflicto, hijos y matrimonios.' },
      { minuto: '40:00', titulo: 'Testimonios de sanidad', detalle: 'Oyentes que llaman para contar lo que Dios hizo.' },
      { minuto: '52:00', titulo: 'Oración de cierre', detalle: 'Bendición final sobre los que escuchan.' },
    ],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'proclamando-la-sana-doctrina',
    nombreParrilla: 'Proclamando la Sana Doctrina',
    programaId: '6',
    lema: 'Fundamentos que sostienen',
    presentacion:
      'Enseñanza sistemática para el creyente que quiere entender lo que cree. Cada serie recorre un tema doctrinal completo a lo largo de varias semanas, con la Biblia abierta y sin atajos.',
    versiculo: {
      texto: 'Procura con diligencia presentarte a Dios aprobado, que usa bien la palabra de verdad.',
      referencia: '2 Timoteo 2:15',
    },
    duracion: '60 minutos',
    desde: 'Al aire desde 2018',
    idioma: 'Español',
    bloques: [
      { minuto: '00:00', titulo: 'Repaso de la clase anterior', detalle: 'Cinco minutos para retomar el hilo de la serie.' },
      { minuto: '06:00', titulo: 'Lectura del pasaje', detalle: 'Se lee el texto base completo.' },
      { minuto: '12:00', titulo: 'Exposición', detalle: 'El bloque largo: contexto, significado y doctrina.' },
      { minuto: '40:00', titulo: 'Preguntas de los oyentes', detalle: 'Se responden las dudas llegadas por WhatsApp.' },
      { minuto: '52:00', titulo: 'Resumen y tarea', detalle: 'Puntos clave y el pasaje a leer para la próxima clase.' },
    ],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'programa-juvenil-predestinados-para-triunfar',
    nombreParrilla: 'Programa Juvenil - Predestinados para Triunfar',
    programaId: '9',
    lema: 'La hora de los jóvenes',
    presentacion:
      'Programa hecho por y para jóvenes: temas de identidad, propósito, amistades, estudios y las preguntas que a esa edad cuesta hacer en voz alta. Música actual y conversación directa.',
    versiculo: {
      texto: 'Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes.',
      referencia: '1 Timoteo 4:12',
    },
    duracion: '60 minutos',
    desde: 'Al aire desde 2021',
    idioma: 'Español',
    bloques: [
      { minuto: '00:00', titulo: 'Arranque musical', detalle: 'Tres temas de alabanza contemporánea.' },
      { minuto: '12:00', titulo: 'El tema de hoy', detalle: 'Se plantea la pregunta que se va a responder en el programa.' },
      { minuto: '25:00', titulo: 'Conversación abierta', detalle: 'Testimonios y mensajes de los oyentes sobre el tema.' },
      { minuto: '42:00', titulo: 'Palabra final', detalle: 'Lo que dice la Escritura al respecto, sin rodeos.' },
      { minuto: '55:00', titulo: 'Agenda juvenil', detalle: 'Anuncios de retiros, ensayos y salidas de servicio.' },
    ],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'vision-misionera-conquistando-las-naciones',
    programaId: '3',
    nombreParrilla: 'Vision Misionera - Conquistando las Naciones para Cristo',
    lema: 'El evangelio sin fronteras',
    presentacion:
      'Noticias, testimonios y oración por la obra misionera: las filiales, los pueblos donde se predica por primera vez y los hermanos que salen a servir. Un programa para conocer el campo misionero y orar por él.',
    versiculo: {
      texto: 'Id por todo el mundo y predicad el evangelio a toda criatura.',
      referencia: 'Marcos 16:15',
    },
    duracion: '60 minutos',
    idioma: 'Español',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'joyas-de-cristo',
    programaId: '4',
    nombreParrilla: 'Programa de Ninos - Joyas de Cristo',
    lema: 'La hora de los niños',
    presentacion:
      'Historias bíblicas, coros y enseñanzas sencillas para que los más pequeños conozcan y amen a Jesús. Lo prepara la Escuela Dominical, pensado para escucharlo en familia los sábados por la tarde.',
    versiculo: {
      texto: 'Dejad a los niños venir a mí, y no se lo impidáis; porque de los tales es el reino de Dios.',
      referencia: 'Marcos 10:14',
    },
    duracion: '60 minutos',
    idioma: 'Español',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'forjandonos-para-la-vida-eterna',
    programaId: '5',
    nombreParrilla: 'Forjandonos para la Vida Eterna',
    lema: 'Predicación del evangelio de salvación',
    presentacion:
      'Predicación y formación espiritual por la tarde. Un mensaje claro del evangelio y su aplicación a la vida diaria, para el que todavía no conoce a Cristo y para el creyente que quiere crecer.',
    versiculo: {
      texto:
        'Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.',
      referencia: 'Juan 3:16',
    },
    duracion: '60 minutos',
    idioma: 'Español',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'la-hora-de-la-pesca-milagrosa',
    programaId: '7',
    nombreParrilla: 'Hora de la Pesca Milagrosa',
    lema: 'Pescadores de hombres',
    presentacion:
      'Evangelismo al aire y oración por las almas. Se presenta el mensaje de salvación de forma directa y se ora por los oyentes que quieren entregar su vida a Cristo o volver a Él.',
    versiculo: {
      texto: 'Venid en pos de mí, y os haré pescadores de hombres.',
      referencia: 'Mateo 4:19',
    },
    duracion: '60 minutos',
    idioma: 'Español',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'tras-las-huellas-de-jesus',
    programaId: '8',
    nombreParrilla: 'Tras las Huellas de Jesus',
    lema: 'Vivir como Él vivió',
    presentacion:
      'Un recorrido por la vida y las enseñanzas de Jesús para aprender a seguir su ejemplo en lo práctico: en la casa, en el trabajo y en la iglesia. Cada sábado, un pasaje de los evangelios.',
    versiculo: {
      texto:
        'Pues para esto fuisteis llamados; porque también Cristo padeció por nosotros, dejándonos ejemplo, para que sigáis sus pisadas.',
      referencia: '1 Pedro 2:21',
    },
    duracion: '60 minutos',
    idioma: 'Español',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
  {
    slug: 'diospa-qayakunin-kay-pachapaq',
    programaId: '10',
    nombreParrilla: 'Diospa Qayakunin Kay Pachapaq',
    lema: 'La Palabra de Dios en nuestra lengua',
    presentacion:
      'El programa en quechua de Radio Monte Alto. Lectura de la Biblia, alabanzas y saludos en la lengua materna de muchos hermanos de las comunidades del valle y de las alturas, para que nadie se quede sin escuchar el evangelio.',
    versiculo: {
      texto: '¿Cómo, pues, les oímos nosotros hablar cada uno en nuestra lengua en la que hemos nacido?',
      referencia: 'Hechos 2:8',
    },
    duracion: '60 minutos',
    idioma: 'Quechua',
    bloques: [],
    grabaciones: [],
    estudios: [],
  },
];

export function getDetallePorSlug(slug: string): DetalleProgama | undefined {
  return DETALLES.find((detalle) => detalle.slug === slug);
}

export function getDetallePorProgramaId(id: string): DetalleProgama | undefined {
  return DETALLES.find((detalle) => detalle.programaId === id);
}

export default DETALLES;

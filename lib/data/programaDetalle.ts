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
// Si un programa todavía no tiene grabaciones, deja el arreglo vacío: la página
// lo indica con un aviso en lugar de mostrar un reproductor roto.
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

export interface DetalleProgama {
  slug: string;
  /** Id del programa en lib/data/programas.ts */
  programaId: string;
  lema: string;
  /** Presentación larga, la que se lee al entrar. */
  presentacion: string;
  versiculo?: { texto: string; referencia: string };
  duracion: string;
  desde: string;
  idioma: string;
  bloques: BloqueProgama[];
  grabaciones: Grabacion[];
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
  },
  {
    slug: 'la-hora-de-la-clinica-celestial',
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
  },
  {
    slug: 'proclamando-la-sana-doctrina',
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
  },
  {
    slug: 'programa-juvenil-predestinados-para-triunfar',
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
  },
];

export function getDetallePorSlug(slug: string): DetalleProgama | undefined {
  return DETALLES.find((detalle) => detalle.slug === slug);
}

export function getDetallePorProgramaId(id: string): DetalleProgama | undefined {
  return DETALLES.find((detalle) => detalle.programaId === id);
}

export default DETALLES;

// lib/data/discipulado.ts
// -----------------------------------------------------------------------------
// Ruta de discipulado de la congregación: los pasos que recorre alguien desde
// que entrega su vida a Cristo hasta que sirve en un ministerio.
//
// Para editar: cambia los textos de abajo. Cada nivel es una etapa con su
// duración, lo que se estudia y a quién está dirigido.
// -----------------------------------------------------------------------------

export type IconoNivel = 'Sprout' | 'BookOpen' | 'Users' | 'HandHeart' | 'GraduationCap';

export interface NivelDiscipulado {
  id: string;
  /** Número que se muestra en grande en la tarjeta. */
  orden: string;
  titulo: string;
  lema: string;
  icono: IconoNivel;
  duracion: string;
  dirigidoA: string;
  descripcion: string;
  /** Lo que se estudia en esta etapa. */
  temas: string[];
}

export const NIVELES: NivelDiscipulado[] = [
  {
    id: 'primeros-pasos',
    orden: '01',
    titulo: 'Primeros pasos',
    lema: 'Para el que acaba de creer',
    icono: 'Sprout',
    duracion: '4 semanas',
    dirigidoA: 'Nuevos creyentes y personas que acaban de entregar su vida a Cristo.',
    descripcion:
      'El acompañamiento de las primeras semanas, cuando todo es nuevo. Se conversa sin prisa, en grupos pequeños, sobre lo que significa haber creído y cómo empezar a caminar con Dios en lo cotidiano.',
    temas: [
      'Qué pasó el día que creíste',
      'Cómo leer la Biblia por primera vez',
      'La oración: hablar con Dios sin fórmulas',
      'El bautismo en agua y su significado',
      'La familia de la fe: por qué congregarse',
    ],
  },
  {
    id: 'fundamentos',
    orden: '02',
    titulo: 'Fundamentos de la fe',
    lema: 'La sana doctrina, paso a paso',
    icono: 'BookOpen',
    duracion: '3 meses',
    dirigidoA: 'Creyentes que ya se congregan y quieren entender lo que creen.',
    descripcion:
      'Estudio ordenado de las doctrinas básicas: quién es Dios, quién es Jesucristo, qué hizo en la cruz y qué enseña la Escritura sobre la salvación. Cada tema se estudia con la Biblia abierta y se cierra con preguntas.',
    temas: [
      'La autoridad y suficiencia de las Escrituras',
      'Dios: Padre, Hijo y Espíritu Santo',
      'La obra de Cristo: cruz, resurrección y regreso',
      'Arrepentimiento, fe y salvación',
      'La iglesia: qué es y para qué existe',
    ],
  },
  {
    id: 'vida-cristiana',
    orden: '03',
    titulo: 'Vida cristiana práctica',
    lema: 'Creer se nota en cómo vives',
    icono: 'HandHeart',
    duracion: '3 meses',
    dirigidoA: 'Quienes terminaron Fundamentos y quieren aplicar la Palabra en casa y en el trabajo.',
    descripcion:
      'La fe puesta donde se vive: el hogar, el dinero, el trabajo, las amistades, el perdón. Se trabaja con casos reales de la congregación y con acompañamiento pastoral personal.',
    temas: [
      'El hogar cristiano: matrimonio y crianza',
      'Mayordomía: trabajo, dinero y ofrenda',
      'Perdonar y pedir perdón',
      'Pureza y dominio propio',
      'Dar razón de tu fe a los que preguntan',
    ],
  },
  {
    id: 'servicio',
    orden: '04',
    titulo: 'Equipados para servir',
    lema: 'De discípulo a obrero',
    icono: 'Users',
    duracion: '4 meses',
    dirigidoA: 'Miembros que desean servir en un ministerio de la iglesia o de la radio.',
    descripcion:
      'La última etapa prepara para el servicio: cómo enseñar a otro, cómo acompañar a un nuevo creyente y cómo integrarse a un área concreta —alabanza, intercesión, locución, medios o visitación.',
    temas: [
      'Cómo discipular a otro creyente',
      'Preparar y compartir un estudio bíblico',
      'Dones y llamado: dónde encajas',
      'Ética del que sirve en la casa de Dios',
      'Práctica supervisada en un ministerio',
    ],
  },
];

/** Preguntas frecuentes de quienes se acercan por primera vez. */
export const PREGUNTAS = [
  {
    pregunta: '¿Tengo que ser miembro de la iglesia para participar?',
    respuesta:
      'No. Primeros pasos está abierto a cualquiera que quiera conocer más de Cristo, aunque nunca haya venido a un culto.',
  },
  {
    pregunta: '¿Tiene algún costo?',
    respuesta:
      'Ninguno. El material de estudio lo entrega la congregación y las clases son gratuitas.',
  },
  {
    pregunta: '¿Y si me pierdo una clase?',
    respuesta:
      'Se puede recuperar. Cada nivel se abre varias veces al año y el material queda disponible en la sección de recursos.',
  },
  {
    pregunta: 'Vivo lejos o en otra ciudad, ¿puedo llevarlo?',
    respuesta:
      'Sí. Varias filiales dictan los mismos niveles, y algunos temas se transmiten por la radio. Escríbenos y te orientamos.',
  },
];

export default NIVELES;

// lib/data/ministerioJuvenil.ts
// -----------------------------------------------------------------------------
// Ministerio Juvenil «Predestinados para Triunfar».
// Edita aquí los horarios, los equipos y los testimonios; la página se arma sola.
// -----------------------------------------------------------------------------

export interface ActividadJuvenil {
  id: string;
  titulo: string;
  cuando: string;
  donde: string;
  descripcion: string;
  /** Ícono de lucide-react; se resuelve en el componente. */
  icono: 'Flame' | 'Music4' | 'BookOpen' | 'Users' | 'HeartHandshake' | 'Trophy';
}

export interface EquipoJuvenil {
  id: string;
  nombre: string;
  descripcion: string;
  buscamos: string;
}

export const LEMA = 'Predestinados para Triunfar';

export const VERSICULO = {
  texto:
    'Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.',
  referencia: '1 Timoteo 4:12',
};

export const ACTIVIDADES: ActividadJuvenil[] = [
  {
    id: 'reunion-sabado',
    titulo: 'Reunión de jóvenes',
    cuando: 'Sábados · 7:00 p. m.',
    donde: 'Templo central Monte Alto — Huancayo',
    descripcion:
      'El encuentro principal de la semana: alabanza, una palabra pensada para la edad que están viviendo y tiempo para conversar de lo que a nadie más le cuentan.',
    icono: 'Flame',
  },
  {
    id: 'estudio-biblico',
    titulo: 'Estudio bíblico juvenil',
    cuando: 'Miércoles · 7:00 p. m.',
    donde: 'Salón anexo del templo',
    descripcion:
      'Estudio en grupos pequeños, con preguntas abiertas. Aquí se puede dudar en voz alta sin que nadie te mire raro.',
    icono: 'BookOpen',
  },
  {
    id: 'alabanza',
    titulo: 'Ensayo de alabanza',
    cuando: 'Viernes · 6:00 p. m.',
    donde: 'Sala de música',
    descripcion:
      'Si cantas o tocas un instrumento, este es tu lugar. No hace falta saber mucho: se enseña desde cero a quien quiera servir.',
    icono: 'Music4',
  },
  {
    id: 'retiro',
    titulo: 'Retiro anual',
    cuando: 'Febrero · Tres días',
    donde: 'Casa de retiro «Pentecostés Misionera» — La Huaycha, Mito',
    descripcion:
      'Tres días de adiestramiento espiritual con jóvenes de todas las filiales del país. Para muchos, el fin de semana que les cambió la vida.',
    icono: 'Users',
  },
  {
    id: 'servicio-social',
    titulo: 'Salidas de servicio',
    cuando: 'Un sábado al mes',
    donde: 'Barrios y comunidades de Huancayo',
    descripcion:
      'Visitas a hogares, apoyo a familias con necesidad y evangelismo en la calle. La fe se demuestra con las manos.',
    icono: 'HeartHandshake',
  },
  {
    id: 'deporte',
    titulo: 'Encuentro deportivo',
    cuando: 'Último domingo del mes',
    donde: 'Losa deportiva del barrio',
    descripcion:
      'Fútbol, vóley y parrilla. La puerta más fácil para traer a un amigo que todavía no se anima a entrar al templo.',
    icono: 'Trophy',
  },
];

export const EQUIPOS: EquipoJuvenil[] = [
  {
    id: 'alabanza',
    nombre: 'Equipo de alabanza',
    descripcion: 'Voces, guitarra, teclado, bajo y batería para las reuniones y los retiros.',
    buscamos: 'Ganas de aprender. La técnica se enseña.',
  },
  {
    id: 'medios',
    nombre: 'Medios y redes',
    descripcion: 'Fotografía, video, edición y las redes del ministerio juvenil.',
    buscamos: 'Que te guste grabar, editar o diseñar.',
  },
  {
    id: 'intercesion',
    nombre: 'Intercesión',
    descripcion: 'Grupo que ora por las reuniones, los retiros y por cada joven de la lista.',
    buscamos: 'Constancia y discreción.',
  },
  {
    id: 'integracion',
    nombre: 'Integración',
    descripcion: 'Los que reciben al que viene por primera vez y se aseguran de que no se sienta solo.',
    buscamos: 'Que te salga natural conversar con desconocidos.',
  },
];

export default ACTIVIDADES;

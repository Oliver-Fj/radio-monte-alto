// lib/data/articulos.ts
// Imágenes en public/images/ — nombres exactos indicados en cada artículo
// NOTA: escribe las rutas desde la raíz (/images/...). El prefijo de GitHub
// Pages lo añade publicPath() en el componente que pinta la imagen.

export interface Articulo {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  categoria: string;
  categoriaColor: string;
  autor: string;
  fecha: string;
  tiempoLectura: string;
  imagen: string;           // ← nombre de archivo en public/images/
  imagenAlt: string;
  resumen: string;
  contenido: Bloque[];      // bloques de contenido del artículo
  tags: string[];
}

type Bloque =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'subtitulo'; texto: string }
  | { tipo: 'cita'; texto: string; referencia?: string }
  | { tipo: 'lista'; items: string[] }
  | { tipo: 'versiculo'; texto: string; referencia: string };

export const articulos: Articulo[] = [
  {
    id: 1,
    slug: 'fe-que-mueve-montanas',
    titulo: 'La fe que mueve montañas',
    subtitulo: 'Cuando confías plenamente en Dios, lo imposible se hace posible',
    categoria: 'Devocional',
    categoriaColor: 'from-yellow-500 to-amber-600',
    autor: 'Radio Monte Alto',
    fecha: '15 de junio, 2025',
    tiempoLectura: '5 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-fe.webp ───
    imagen: `/images/opt/articulo-fe.webp`,
    imagenAlt: 'Fe que mueve montañas',
    resumen: 'La fe genuina no es simplemente creer que algo puede suceder, sino actuar confiando en que Dios ya lo tiene en Sus manos.',
    tags: ['Fe', 'Devocional', 'Confianza', 'Oración'],
    contenido: [
      { tipo: 'versiculo', texto: 'De cierto os digo, que si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible.', referencia: 'Mateo 17:20' },
      { tipo: 'parrafo', texto: 'Jesús no estaba hablando de montañas literales cuando pronunció estas palabras. Estaba hablando de los obstáculos más grandes de tu vida: las enfermedades que los médicos dicen que no tienen cura, las relaciones que parecen irreconciliables, los sueños que parecen enterrados para siempre.' },
      { tipo: 'subtitulo', texto: '¿Qué es la fe verdadera?' },
      { tipo: 'parrafo', texto: 'La fe no es un sentimiento. Muchas personas confunden la fe con la emoción, pensando que si no sienten algo intenso en su interior, no tienen fe. Pero la Biblia nos dice que "la fe es la certeza de lo que se espera, la convicción de lo que no se ve" (Hebreos 11:1).' },
      { tipo: 'parrafo', texto: 'La fe es una decisión. Es elegir creer en la Palabra de Dios por encima de lo que ven tus ojos, lo que siente tu corazón o lo que dice el mundo. Es poner todo el peso de tu existencia sobre las promesas de Aquel que no puede mentir.' },
      { tipo: 'cita', texto: 'La fe no hace que las cosas sean fáciles, las hace posibles.' },
      { tipo: 'subtitulo', texto: 'El grano de mostaza' },
      { tipo: 'parrafo', texto: 'Jesús eligió deliberadamente la semilla más pequeña que sus oyentes conocían. No dijo "si tienes fe como un roble" o "si tienes fe como una montaña". Dijo como un grano de mostaza. ¿Por qué? Porque el tamaño de tu fe no es lo que determina el resultado — el objeto de tu fe sí.' },
      { tipo: 'parrafo', texto: 'Una pequeña fe depositada en un gran Dios produce resultados extraordinarios. El problema no es que nuestra fe sea pequeña; el problema es que muchas veces depositamos esa fe pequeña en nosotros mismos, en otras personas, o en las circunstancias.' },
      { tipo: 'lista', items: [
        'La fe actúa antes de ver el resultado',
        'La fe habla al problema en el nombre de Jesús',
        'La fe descansa en las promesas de Dios, no en las probabilidades',
        'La fe persevera cuando todo dice que es imposible',
      ]},
      { tipo: 'subtitulo', texto: 'Cómo ejercitar tu fe hoy' },
      { tipo: 'parrafo', texto: '¿Cuál es la montaña en tu vida hoy? ¿Es una enfermedad? ¿Una situación económica? ¿Un familiar que aún no conoce a Cristo? Identifica esa montaña. Dale un nombre. Y luego habla con ella — no al aire, sino en oración ferviente, con la autoridad que Cristo te ha dado.' },
      { tipo: 'parrafo', texto: 'La fe que mueve montañas no es pasiva. Actúa. Ora. Declara. Persevera. Y cuando la montaña no se mueva hoy, vuelve mañana. Porque el que prometió es fiel, y lo que comenzó en ti, lo perfeccionará.' },
      { tipo: 'versiculo', texto: 'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.', referencia: 'Isaías 41:10' },
    ],
  },
  {
    id: 2,
    slug: 'oracion-que-transforma',
    titulo: 'La oración que transforma',
    subtitulo: 'Descubre el poder de hablar con Dios más allá de un ritual',
    categoria: 'Oración',
    categoriaColor: 'from-blue-500 to-blue-700',
    autor: 'Radio Monte Alto',
    fecha: '8 de junio, 2025',
    tiempoLectura: '6 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-oracion.webp ───
    imagen: `/images/opt/articulo-oracion.webp`,
    imagenAlt: 'La oración que transforma',
    resumen: 'La oración no es un monólogo religioso. Es una conversación viva con el Dios del universo que anhela escucharte.',
    tags: ['Oración', 'Vida Espiritual', 'Dios', 'Transformación'],
    contenido: [
      { tipo: 'versiculo', texto: 'Estad siempre gozosos. Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.', referencia: '1 Tesalonicenses 5:16-18' },
      { tipo: 'parrafo', texto: 'Muchos creyentes oran, pero pocos saben realmente lo que es orar. Para algunos, la oración es una lista de peticiones que se le presentan a Dios esperando que las apruebe. Para otros, es una obligación religiosa que se cumple rápidamente antes de dormir.' },
      { tipo: 'subtitulo', texto: 'La oración como comunión' },
      { tipo: 'parrafo', texto: 'Jesús, cuando enseñó a sus discípulos a orar, comenzó con dos palabras que lo cambian todo: "Padre nuestro". No "Señor omnipotente" ni "Dios todopoderoso". Padre. Una palabra que establece una relación, no una transacción.' },
      { tipo: 'parrafo', texto: 'La oración genuina es primero comunión. Es el hijo que corre hacia su padre, no porque necesita algo, sino porque lo ama. Es el amigo que llama, no para pedir un favor, sino para simplemente estar.' },
      { tipo: 'cita', texto: 'La oración no cambia a Dios; nos cambia a nosotros.' },
      { tipo: 'subtitulo', texto: 'Cinco tipos de oración que necesitas en tu vida' },
      { tipo: 'lista', items: [
        'Adoración — reconocer quién es Dios, no solo lo que hace',
        'Gratitud — dar gracias incluso antes de ver la respuesta',
        'Confesión — mantener limpia la línea de comunicación',
        'Intercesión — orar por otros con la misma urgencia que oras por ti',
        'Petición — presentar tus necesidades con fe y sin ansiedad',
      ]},
      { tipo: 'subtitulo', texto: 'Cuando Dios parece no responder' },
      { tipo: 'parrafo', texto: 'Una de las mayores pruebas de la fe es la oración que parece no tener respuesta. Oras un día, oras una semana, oras un año — y el cielo parece de bronce. ¿Qué hacer en esos momentos?' },
      { tipo: 'parrafo', texto: 'La Biblia nos da la respuesta en la historia de la viuda persistente (Lucas 18:1-8). Jesús contó esta parábola específicamente "para mostrarles que debían orar siempre, sin desanimarse". La perseverancia en la oración no es señal de falta de fe — es la expresión más profunda de ella.' },
      { tipo: 'versiculo', texto: 'Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.', referencia: 'Filipenses 4:6' },
    ],
  },
  {
    id: 3,
    slug: 'alabanza-estilo-de-vida',
    titulo: 'La alabanza como estilo de vida',
    subtitulo: 'Más allá de los cánticos del domingo: adorar en todo momento',
    categoria: 'Alabanza',
    categoriaColor: 'from-purple-500 to-purple-700',
    autor: 'Radio Monte Alto',
    fecha: '1 de junio, 2025',
    tiempoLectura: '4 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-alabanza.webp ───
    imagen: `/images/opt/articulo-alabanza.webp`,
    imagenAlt: 'La alabanza como estilo de vida',
    resumen: 'La adoración verdadera no se limita a las cuatro paredes de una iglesia. Es una actitud del corazón que permea cada momento del día.',
    tags: ['Alabanza', 'Adoración', 'Vida Cristiana', 'Iglesia'],
    contenido: [
      { tipo: 'versiculo', texto: 'Cantad a Jehová cántico nuevo; cantad a Jehová, toda la tierra. Cantad a Jehová, bendecid su nombre; anunciad de día en día su salvación.', referencia: 'Salmos 96:1-2' },
      { tipo: 'parrafo', texto: 'Hay una pregunta que pocos se hacen: ¿por qué alaba Dios? No porque lo necesite. Dios es completamente autosuficiente. La alabanza no le añade nada a Él — pero nos añade todo a nosotros.' },
      { tipo: 'subtitulo', texto: 'La alabanza como arma espiritual' },
      { tipo: 'parrafo', texto: 'Cuando Josafat enfrentó tres ejércitos que venían a destruir a Israel, Dios le dio una estrategia sorprendente: poner cantores al frente del ejército. No guerreros. Cantores. Y mientras alababan, Dios peleó la batalla.' },
      { tipo: 'parrafo', texto: 'La alabanza confunde al enemigo. Cuando el diablo espera que estés deprimido y rendido, y en cambio levantas tu voz para glorificar a Dios, algo sobrenatural sucede en los lugares celestiales.' },
      { tipo: 'cita', texto: 'El que alaba en la tormenta está declarando que Dios es más grande que su problema.' },
      { tipo: 'subtitulo', texto: 'Cómo convertir tu día en adoración' },
      { tipo: 'lista', items: [
        'Comienza cada mañana con gratitud antes de mirar el teléfono',
        'Pon música de alabanza mientras realizas tus tareas cotidianas',
        'Declara la bondad de Dios en voz alta, incluso cuando no la sientes',
        'Agradece en cada comida — no por costumbre, sino con consciencia',
        'Termina el día recordando tres cosas por las que puedes alabar a Dios',
      ]},
      { tipo: 'parrafo', texto: 'La alabanza como estilo de vida no significa que finges que todo está bien. Significa que en medio de la realidad — con sus dolores, sus incertidumbres y sus preguntas sin respuesta — eliges mirar hacia Aquel que tiene el control y declarar: "Tú eres bueno, y tu misericordia es para siempre."' },
      { tipo: 'versiculo', texto: 'Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza.', referencia: 'Gálatas 5:22-23' },
    ],
  },
  {
    id: 4,
    slug: 'familia-fundada-en-cristo',
    titulo: 'Familia fundada en Cristo',
    subtitulo: 'Los principios bíblicos que edifican un hogar sólido',
    categoria: 'Familia',
    categoriaColor: 'from-emerald-500 to-emerald-700',
    autor: 'Radio Monte Alto',
    fecha: '22 de mayo, 2025',
    tiempoLectura: '7 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-familia.webp ───
    imagen: `/images/opt/articulo-familia.webp`,
    imagenAlt: 'Familia fundada en Cristo',
    resumen: 'El hogar cristiano no es perfecto, pero tiene a alguien perfecto en el centro. Descubre cómo construir una familia que resiste las tormentas.',
    tags: ['Familia', 'Matrimonio', 'Hijos', 'Hogar'],
    contenido: [
      { tipo: 'versiculo', texto: 'Y si mal os parece servir a Jehová, escogeos hoy a quién sirváis; pero yo y mi casa serviremos a Jehová.', referencia: 'Josué 24:15' },
      { tipo: 'parrafo', texto: 'Josué hizo esta declaración después de años de guerras, victorias y derrotas. Era un hombre que conocía la dureza de la vida real. Y aun así, con todo eso sobre sus hombros, tomó la decisión más importante que puede tomar un padre: "Yo y mi casa serviremos a Jehová."' },
      { tipo: 'subtitulo', texto: 'El hogar como ministerio' },
      { tipo: 'parrafo', texto: 'Muchos creyentes separan el ministerio de la familia, como si la iglesia fuera el lugar donde sirven a Dios y el hogar fuera el lugar donde descansan de ese servicio. Pero la Biblia enseña que el hogar es el primer y más importante campo misionero.' },
      { tipo: 'parrafo', texto: 'Los hijos observan cómo oras cuando estás cansado. Observan cómo tratas a tu cónyuge cuando discuten. Observan cómo reaccionas cuando las cosas no salen como esperabas. El hogar es donde se predica el evangelio más poderoso: el evangelio de la vida vivida.' },
      { tipo: 'subtitulo', texto: 'Tres pilares del hogar cristiano' },
      { tipo: 'lista', items: [
        'La Palabra como constitución — las decisiones del hogar se toman a la luz de la Biblia, no de la cultura',
        'La oración como conversación — la familia que ora junta permanece junta',
        'El perdón como práctica — en un hogar imperfecto, el perdón no es opcional; es oxígeno',
      ]},
      { tipo: 'cita', texto: 'El mejor regalo que puedes dar a tus hijos no es una herencia económica, sino una herencia de fe.' },
      { tipo: 'parrafo', texto: 'Si tu hogar no está donde debería estar hoy, hay buenas noticias: el mismo Dios que restauró el matrimonio de Oseas, que convirtió a Zaqueo e impactó a toda su familia, que transformó a un carcelero de medianoche y bautizó a toda su casa — ese Dios todavía está en el negocio de restaurar familias.' },
      { tipo: 'versiculo', texto: 'Jehová te bendiga, y te guarde; Jehová haga resplandecer su rostro sobre ti, y tenga de ti misericordia.', referencia: 'Números 6:24-25' },
    ],
  },
  {
    id: 5,
    slug: 'mision-en-tu-ciudad',
    titulo: 'La misión empieza en tu ciudad',
    subtitulo: 'No tienes que cruzar el océano para ser misionero',
    categoria: 'Misión',
    categoriaColor: 'from-rose-500 to-rose-700',
    autor: 'Radio Monte Alto',
    fecha: '14 de mayo, 2025',
    tiempoLectura: '5 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-mision.webp ───
    imagen: `/images/opt/articulo-mision.webp`,
    imagenAlt: 'La misión empieza en tu ciudad',
    resumen: 'El campo misionero más cercano está a metros de tu casa. Descubre cómo vivir el evangelio en tu entorno cotidiano.',
    tags: ['Misión', 'Evangelismo', 'Ciudad', 'Testimonio'],
    contenido: [
      { tipo: 'versiculo', texto: 'Pero recibiréis poder, cuando haya venido sobre vosotros el Espíritu Santo, y me seréis testigos en Jerusalén, en toda Judea, en Samaria, y hasta lo último de la tierra.', referencia: 'Hechos 1:8' },
      { tipo: 'parrafo', texto: 'Fíjate en el orden que Jesús dio: primero Jerusalén — la ciudad donde estaban. Antes de Judea, antes de Samaria, antes del mundo entero, primero el lugar donde vivían. La misión global empieza con la misión local.' },
      { tipo: 'subtitulo', texto: 'Tu vecino de al lado' },
      { tipo: 'parrafo', texto: '¿Sabes el nombre de tu vecino de la derecha? ¿Has conversado alguna vez con la señora del cuarto piso? ¿El vendedor al que le compras el pan todos los días sabe que eres cristiano?' },
      { tipo: 'parrafo', texto: 'La gran comisión no comienza con un pasaje de avión. Comienza con una sonrisa auténtica, con un "¿cómo estás?" que en verdad quiere saber la respuesta, con estar disponible cuando alguien a tu alrededor está pasando por un momento difícil.' },
      { tipo: 'cita', texto: 'Predica el evangelio siempre. Y cuando sea necesario, usa palabras.' },
      { tipo: 'subtitulo', texto: 'Formas prácticas de ser misionero donde vives' },
      { tipo: 'lista', items: [
        'Conoce los nombres y las historias de tus vecinos',
        'Sé el primero en ayudar cuando alguien tiene una necesidad práctica',
        'Invita a una persona diferente cada mes a comer en tu casa',
        'Comparte Radio Monte Alto con alguien que necesite escuchar la Palabra',
        'Ora por tu calle, tu barrio, tu ciudad — no abstractamente, sino por personas concretas',
      ]},
      { tipo: 'parrafo', texto: 'El mundo se cambia de a una persona a la vez, de a un hogar a la vez. No subestimes el impacto de una vida bien vivida en el lugar donde Dios te puso. Él no te puso ahí por accidente.' },
      { tipo: 'versiculo', texto: 'Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.', referencia: 'Mateo 5:14' },
    ],
  },
  {
    id: 6,
    slug: 'gracia-que-no-mereces',
    titulo: 'La gracia que no mereces',
    subtitulo: 'El regalo más grande que nadie puede ganarse',
    categoria: 'Doctrina',
    categoriaColor: 'from-cyan-500 to-cyan-700',
    autor: 'Radio Monte Alto',
    fecha: '5 de mayo, 2025',
    tiempoLectura: '6 min',
    // ─── IMAGEN: guarda tu foto como public/images/opt/articulo-gracia.webp ───
    imagen: `/images/opt/articulo-gracia.webp`,
    imagenAlt: 'La gracia que no mereces',
    resumen: 'Entender la gracia de Dios no es el comienzo de la vida cristiana — es la vida cristiana completa.',
    tags: ['Gracia', 'Salvación', 'Doctrina', 'Evangelio'],
    contenido: [
      { tipo: 'versiculo', texto: 'Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.', referencia: 'Efesios 2:8-9' },
      { tipo: 'parrafo', texto: 'La gracia es la palabra más revolucionaria del evangelio. En un mundo que opera bajo el principio de "lo que siembras cosechas", "te pago lo que me das", "mereces lo que te ganas" — la gracia irrumpe con una lógica completamente diferente: recibes lo que no mereces, porque Aquel que lo merece todo eligió dártelo.' },
      { tipo: 'subtitulo', texto: 'Lo que la gracia no es' },
      { tipo: 'lista', items: [
        'La gracia no es que Dios hace la vista gorda ante el pecado',
        'La gracia no es permiso para vivir como quieras',
        'La gracia no es recompensa por esforzarte más',
        'La gracia no es algo que puedes acumular con buenas obras',
      ]},
      { tipo: 'subtitulo', texto: 'Lo que la gracia sí es' },
      { tipo: 'parrafo', texto: 'La gracia es que Dios vio tu condición de separación de Él, vio que no tenías ninguna posibilidad de salir de ella por tus propias fuerzas, y envió a Su propio Hijo a pagar el precio que tú debías. Todo el juicio que merecías cayó sobre Cristo, y toda la justicia de Cristo fue acreditada a ti. Ese es el intercambio de la gracia.' },
      { tipo: 'cita', texto: 'La gracia no es Dios bajando sus estándares. Es Dios cumpliendo sus estándares en nuestro lugar.' },
      { tipo: 'parrafo', texto: 'Cuando entiendes realmente la gracia, no te vuelves más perezoso espiritualmente — te vuelves más agradecido. El que ha sido perdonado mucho, ama mucho (Lucas 7:47). La gracia no produce pasividad; produce pasión.' },
      { tipo: 'parrafo', texto: 'Si llevas años en la fe y sientes que te estás volviendo frío, la respuesta casi siempre es la misma: vuelve a la gracia. No a la gracia como concepto teológico, sino a la gracia como la historia de tu propia vida — la historia de lo que Dios hizo por ti cuando no lo merecías.' },
      { tipo: 'versiculo', texto: 'Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús.', referencia: '2 Corintios 2:14' },
    ],
  },
];

export function getArticuloPorSlug(slug: string): Articulo | undefined {
  return articulos.find(a => a.slug === slug);
}

export default articulos;
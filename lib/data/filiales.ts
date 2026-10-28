// lib/data/filiales.ts
// ─────────────────────────────────────────────────────────────────────────────
// Directorio de filiales y obras de Monte Alto (lista «Nacional 2024»).
//
// Cada registro es un lugar donde hay obra, con sus responsables y los números
// de contacto tal como figuran en la lista. Para editar:
//   · categoria   → en qué grupo de la lista aparece (ver CATEGORIAS_FILIAL)
//   · responsables→ nombres de los siervos, pastores u obreros del lugar
//   · contactos   → { rol, numero } (rol: Siervo, Sierva, Pastor, Secretaría…)
//   · coordenadas → opcional; sin ellas el lugar no aparece en el mapa
//                   (son aproximadas, a nivel de distrito o ciudad)
//   · imagen      → opcional; foto propia en /public/images/... Si no hay,
//                   la tarjeta muestra el escudo de la iglesia.
// ─────────────────────────────────────────────────────────────────────────────

export type CategoriaFilial =
  | 'sede'
  | 'siervos'
  | 'siervos-antiguos'
  | 'pastores-pacto'
  | 'pastores-filiales'
  | 'altares'
  | 'pastores-soldados';

export interface ContactoFilial {
  /** Cargo tal como aparece en la lista: Siervo, Sierva, Pastor, Secretaría… */
  rol: string;
  /** Número de celular sin espacios (9 dígitos, Perú). Vacío si no se tiene. */
  numero: string;
}

export interface Filial {
  id: string;
  /** Nombre del lugar, tal como se muestra en la tarjeta. */
  nombre: string;
  /** Distrito o ciudad. */
  ciudad: string;
  /** Departamento. */
  region: string;
  categoria: CategoriaFilial;
  responsables: string[];
  /** Obreros u obreras que acompañan la obra. */
  obreros?: string[];
  contactos: ContactoFilial[];
  direccion?: string;
  horario?: string;
  esMatriz: boolean;
  imagen?: string;
  coordenadas?: { lat: number; lng: number };
}

/** Nombre visible y color (paleta Material) de cada categoría. */
export const CATEGORIAS_FILIAL: Record<CategoriaFilial, { nombre: string; color: string }> = {
  sede: { nombre: 'Sede central', color: 'Amber' },
  siervos: { nombre: 'Siervos', color: 'Blue' },
  'siervos-antiguos': { nombre: 'Siervos antiguos', color: 'Indigo' },
  'pastores-pacto': { nombre: 'Pastores de pacto', color: 'Deep-Purple' },
  'pastores-filiales': { nombre: 'Pastores filiales', color: 'Teal' },
  altares: { nombre: 'Altares congregacionales', color: 'Orange' },
  'pastores-soldados': { nombre: 'Pastores soldados', color: 'Red' },
};

export const filiales: Filial[] = [
  // ── Sede central ─────────────────────────────────────────────────────────
  {
    id: 'sede-central',
    nombre: 'Sede Central Monte Alto',
    ciudad: 'San Agustín de Cajas',
    region: 'Junín',
    categoria: 'sede',
    responsables: ['Iglesia Cuartel General de Jehová de los Ejércitos'],
    contactos: [{ rol: 'WhatsApp', numero: '985796588' }],
    direccion: 'Calle 3 de Agosto S/N, San Agustín de Cajas, Huancayo',
    horario: 'Domingos de 8:00 a. m. a 3:15 p. m.',
    esMatriz: true,
    coordenadas: { lat: -11.9867, lng: -75.2442 },
  },

  // ── Siervos ──────────────────────────────────────────────────────────────
  {
    id: 'canto-grande',
    nombre: 'Canto Grande',
    ciudad: 'San Juan de Lurigancho',
    region: 'Lima',
    categoria: 'siervos',
    responsables: ['Moisés Anguis Gutarra', 'Sara Palomino Ayzana'],
    contactos: [{ rol: 'Siervo', numero: '927169932' }],
    esMatriz: false,
    coordenadas: { lat: -11.9786, lng: -76.9944 },
  },
  {
    id: 'cerro-camote',
    nombre: 'Cerro Camote',
    ciudad: 'San Juan de Lurigancho',
    region: 'Lima',
    categoria: 'siervos',
    responsables: ['David Chumbe Arroyo', 'Ester Yupanqui Vilcamichi'],
    contactos: [
      { rol: 'Siervo', numero: '910708957' },
      { rol: 'Pastor', numero: '980710712' },
    ],
    esMatriz: false,
    coordenadas: { lat: -11.9493, lng: -76.9839 },
  },
  {
    id: 'pampas-huancavelica',
    nombre: 'Pampas',
    ciudad: 'Pampas',
    region: 'Huancavelica',
    categoria: 'siervos',
    responsables: ['Benito Guillén Cárdenas', 'Gladis Solís Solano'],
    contactos: [{ rol: 'Siervo', numero: '947475050' }],
    esMatriz: false,
    coordenadas: { lat: -12.3956, lng: -74.8667 },
  },
  {
    id: 'huaraz',
    nombre: 'Huaraz',
    ciudad: 'Huaraz',
    region: 'Áncash',
    categoria: 'siervos',
    responsables: ['Margarita Cárdenas Minaya'],
    contactos: [{ rol: 'Secretaría', numero: '978787499' }],
    esMatriz: false,
    coordenadas: { lat: -9.5278, lng: -77.5278 },
  },
  {
    id: 'km-15-pucallpa',
    nombre: 'Km 15',
    ciudad: 'Pucallpa',
    region: 'Ucayali',
    categoria: 'siervos',
    responsables: ['Abraham Llantoy Acuña', 'Agata Soto Casachagua'],
    contactos: [
      { rol: 'Siervo', numero: '943129414' },
      { rol: 'Pastor', numero: '961984661' },
    ],
    esMatriz: false,
    coordenadas: { lat: -8.4560, lng: -74.6620 },
  },
  {
    id: 'huanuco',
    nombre: 'Huánuco',
    ciudad: 'Huánuco',
    region: 'Huánuco',
    categoria: 'siervos',
    responsables: ['Mateo Cunyas Hinojosa', 'Devora Soto Casachagua'],
    contactos: [{ rol: 'Siervo', numero: '945172098' }],
    esMatriz: false,
    coordenadas: { lat: -9.9306, lng: -76.2422 },
  },
  {
    id: 'trujillo',
    nombre: 'Trujillo',
    ciudad: 'Trujillo',
    region: 'La Libertad',
    categoria: 'siervos',
    responsables: ['Elías Sánchez Calderón', 'Hilma Enriques Marquina'],
    contactos: [
      { rol: 'Siervo', numero: '950117079' },
      { rol: 'Secretaría', numero: '951217854' },
    ],
    esMatriz: false,
    coordenadas: { lat: -8.1116, lng: -79.0288 },
  },
  {
    id: 'huancayo',
    nombre: 'Huancayo',
    ciudad: 'Huancayo',
    region: 'Junín',
    categoria: 'siervos',
    responsables: ['Esmeralda Boza Esteban'],
    contactos: [{ rol: 'Sierva', numero: '995693638' }],
    esMatriz: false,
    coordenadas: { lat: -12.0651, lng: -75.2049 },
  },
  {
    id: 'huaycan-siervos',
    nombre: 'Huaycán',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'siervos',
    responsables: ['Juan Landeo Arone', 'Maximiliana Pinto Contreras'],
    contactos: [
      { rol: 'Siervo', numero: '974763025' },
      { rol: 'Sierva', numero: '991679173' },
    ],
    esMatriz: false,
    coordenadas: { lat: -12.0167, lng: -76.8167 },
  },
  {
    id: 'cerro-de-pasco-siervos',
    nombre: 'Cerro de Pasco',
    ciudad: 'Cerro de Pasco',
    region: 'Pasco',
    categoria: 'siervos',
    responsables: ['Noemí Inga'],
    contactos: [{ rol: 'Sierva', numero: '980289583' }],
    esMatriz: false,
    coordenadas: { lat: -10.6864, lng: -76.2625 },
  },
  {
    id: 'ate-vitarte',
    nombre: 'Ate Vitarte',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'siervos',
    responsables: ['Viki Linares Matos'],
    contactos: [{ rol: 'Sierva', numero: '916942276' }],
    esMatriz: false,
    coordenadas: { lat: -12.0262, lng: -76.9187 },
  },

  // ── Siervos antiguos ─────────────────────────────────────────────────────
  {
    id: 'omuto-el-tambo',
    nombre: 'Omuto',
    ciudad: 'El Tambo',
    region: 'Junín',
    categoria: 'siervos-antiguos',
    responsables: ['Raquel Vivar Pacheco', 'Pablo Muños Aguilar'],
    contactos: [{ rol: 'Sierva', numero: '992225369' }],
    esMatriz: false,
    coordenadas: { lat: -12.0280, lng: -75.2320 },
  },
  {
    id: 'huanta',
    nombre: 'Huanta',
    ciudad: 'Huanta',
    region: 'Ayacucho',
    categoria: 'siervos-antiguos',
    responsables: ['Gabriel Llanco Rojas', 'Lidia Untiveros Cisneros'],
    contactos: [{ rol: 'Siervo', numero: '991836479' }],
    esMatriz: false,
    coordenadas: { lat: -12.9397, lng: -74.2475 },
  },
  {
    id: 'pilcomayo-siervos',
    nombre: 'Pilcomayo',
    ciudad: 'Pilcomayo',
    region: 'Junín',
    categoria: 'siervos-antiguos',
    responsables: ['Isacc Loyola Basilio', 'Sara Cruz de Loyola'],
    contactos: [
      { rol: 'Siervo', numero: '978088358' },
      { rol: 'Sierva', numero: '967290689' },
    ],
    esMatriz: false,
    coordenadas: { lat: -12.0494, lng: -75.2511 },
  },
  {
    // Ubicación por confirmar: no figura en el mapa hasta tener coordenadas.
    id: 'qochaq',
    nombre: 'Qochaq',
    ciudad: 'Qochaq',
    region: 'Junín',
    categoria: 'siervos-antiguos',
    responsables: ['Magdalena Limache', 'Andrés Medina Sulca'],
    contactos: [{ rol: 'Sierva', numero: '942008958' }],
    esMatriz: false,
  },
  {
    id: 'onza-siervos',
    nombre: 'Onza',
    ciudad: 'Pariahuanca',
    region: 'Junín',
    categoria: 'siervos-antiguos',
    responsables: ['Elías García Ávila', 'Luisa Valero Aliaga'],
    contactos: [{ rol: 'Siervo', numero: '991511189' }],
    esMatriz: false,
    coordenadas: { lat: -11.9700, lng: -74.8900 },
  },
  {
    id: 'pallanchacra',
    nombre: 'Pallanchacra',
    ciudad: 'Pallanchacra',
    region: 'Pasco',
    categoria: 'siervos-antiguos',
    responsables: ['Magdalena López Campos'],
    contactos: [{ rol: 'Sierva', numero: '996502277' }],
    esMatriz: false,
    coordenadas: { lat: -10.4167, lng: -76.2333 },
  },
  {
    id: 'lampa-pariahuanca',
    nombre: 'Lampa',
    ciudad: 'Pariahuanca',
    region: 'Junín',
    categoria: 'siervos-antiguos',
    responsables: ['Amós Raymundo Almonacid'],
    contactos: [{ rol: 'Siervo', numero: '906445771' }],
    esMatriz: false,
    coordenadas: { lat: -11.9950, lng: -74.8650 },
  },
  {
    id: 'pariachi-siervos',
    nombre: 'San Juan de Pariachi',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'siervos-antiguos',
    responsables: ['Simion Caruhas Sinche'],
    contactos: [{ rol: 'Siervo', numero: '987682103' }],
    esMatriz: false,
    coordenadas: { lat: -11.9950, lng: -76.8300 },
  },

  // ── Pastores de pacto ────────────────────────────────────────────────────
  {
    id: 'huanta-pacto',
    nombre: 'Huanta',
    ciudad: 'Huanta',
    region: 'Ayacucho',
    categoria: 'pastores-pacto',
    responsables: ['Ester Gutiérrez Asto'],
    contactos: [{ rol: 'Celular', numero: '940036944' }],
    esMatriz: false,
    coordenadas: { lat: -12.9330, lng: -74.2410 },
  },
  {
    id: 'pilcomayo-pacto',
    nombre: 'Pilcomayo',
    ciudad: 'Pilcomayo',
    region: 'Junín',
    categoria: 'pastores-pacto',
    responsables: ['Criss Moya Cruz'],
    contactos: [],
    esMatriz: false,
    coordenadas: { lat: -12.0530, lng: -75.2460 },
  },
  {
    id: 'onza-pacto',
    nombre: 'Onza',
    ciudad: 'Pariahuanca',
    region: 'Junín',
    categoria: 'pastores-pacto',
    responsables: ['Samuel García Valero'],
    contactos: [{ rol: 'Celular', numero: '989744936' }],
    esMatriz: false,
    coordenadas: { lat: -11.9740, lng: -74.8850 },
  },

  // ── Pastores filiales ────────────────────────────────────────────────────
  {
    id: 'vilcacoto',
    nombre: 'Vilcacoto',
    ciudad: 'Huancayo',
    region: 'Junín',
    categoria: 'pastores-filiales',
    responsables: ['Abel Ramos Alanya', 'Betzaida Boza'],
    contactos: [{ rol: 'Pastor', numero: '969531011' }],
    esMatriz: false,
    coordenadas: { lat: -12.1167, lng: -75.2000 },
  },
  {
    // Ubicación por confirmar: no figura en el mapa hasta tener coordenadas.
    id: 'pampa-mandarina',
    nombre: 'Pampa Mandarina',
    ciudad: 'Pampa Mandarina',
    region: 'Junín',
    categoria: 'pastores-filiales',
    responsables: ['Jesús Suárez Chamorro', 'Ortencia Huaycuchi Gómez'],
    contactos: [{ rol: 'Pastor', numero: '938154268' }],
    esMatriz: false,
  },
  {
    id: 'satipo',
    nombre: 'Satipo',
    ciudad: 'Satipo',
    region: 'Junín',
    categoria: 'pastores-filiales',
    responsables: ['Cirilo Cano Meza', 'Marleni Raymundo Colonio'],
    contactos: [{ rol: 'Pastor', numero: '995044983' }],
    esMatriz: false,
    coordenadas: { lat: -11.2522, lng: -74.6386 },
  },
  {
    id: 'iquitos',
    nombre: 'Iquitos',
    ciudad: 'Iquitos',
    region: 'Loreto',
    categoria: 'pastores-filiales',
    responsables: ['Pablo Ochavana Torres', 'Milagros Montes Manihuari'],
    contactos: [
      { rol: 'Pastor', numero: '964442588' },
      { rol: 'Secretaría', numero: '945377656' },
    ],
    esMatriz: false,
    coordenadas: { lat: -3.7491, lng: -73.2538 },
  },
  {
    id: 'pucallpa',
    nombre: 'Pucallpa',
    ciudad: 'Pucallpa',
    region: 'Ucayali',
    categoria: 'pastores-filiales',
    responsables: ['Bettman Iraricra Tamani (Juan)', 'Emerida Guerrero Ayambo'],
    contactos: [{ rol: 'Pastor', numero: '902527156' }],
    esMatriz: false,
    coordenadas: { lat: -8.3791, lng: -74.5539 },
  },

  // ── Altares congregacionales ─────────────────────────────────────────────
  {
    id: 'tocache',
    nombre: 'Tocache',
    ciudad: 'Tocache',
    region: 'San Martín',
    categoria: 'altares',
    responsables: ['Manuel Sánchez Enriques', 'Rubi Cruzado García'],
    contactos: [
      { rol: 'Pastor', numero: '991966830' },
      { rol: 'Secretaría', numero: '974838831' },
    ],
    esMatriz: false,
    coordenadas: { lat: -8.1883, lng: -76.5108 },
  },
  {
    id: 'anexo-22-jicamarca',
    nombre: 'Anexo 22 Jicamarca',
    ciudad: 'Jicamarca',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Daniel Gammarra Espinoza', 'Esther Oros Ferro'],
    contactos: [{ rol: 'Siervo', numero: '972545503' }],
    esMatriz: false,
    coordenadas: { lat: -11.9200, lng: -76.8800 },
  },
  {
    id: 'pariachi-altar',
    nombre: 'San Juan de Pariachi',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Débora Machacuay Córdova', 'Noemí Machacuay Córdova'],
    contactos: [{ rol: 'Pastora', numero: '924960917' }],
    esMatriz: false,
    coordenadas: { lat: -11.9920, lng: -76.8250 },
  },
  {
    id: 'puente-piedra',
    nombre: 'Puente Piedra',
    ciudad: 'Puente Piedra',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Daniel Suyón Torres'],
    contactos: [{ rol: 'Siervo', numero: '944228487' }],
    esMatriz: false,
    coordenadas: { lat: -11.8667, lng: -77.0750 },
  },
  {
    id: 'villa-el-salvador',
    nombre: 'Villa El Salvador',
    ciudad: 'Villa El Salvador',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Tomasa Atencio'],
    contactos: [{ rol: 'Obrera', numero: '930311421' }],
    esMatriz: false,
    coordenadas: { lat: -12.2133, lng: -76.9367 },
  },
  {
    id: 'huaycan-altar-clemente',
    nombre: 'Huaycán',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Ana Clemente'],
    contactos: [{ rol: 'Obrera', numero: '992778802' }],
    esMatriz: false,
    coordenadas: { lat: -12.0120, lng: -76.8120 },
  },
  {
    id: 'san-martin-de-pangoa',
    nombre: 'San Martín de Pangoa',
    ciudad: 'Pangoa',
    region: 'Junín',
    categoria: 'altares',
    responsables: ['Marino Huayllasco'],
    contactos: [{ rol: 'Obrero', numero: '944151804' }],
    esMatriz: false,
    coordenadas: { lat: -11.4281, lng: -74.4900 },
  },
  {
    id: 'huaycan-altar-quispe',
    nombre: 'Huaycán',
    ciudad: 'Ate',
    region: 'Lima',
    categoria: 'altares',
    responsables: ['Luz Quispe'],
    contactos: [{ rol: 'Obrera', numero: '992343372' }],
    esMatriz: false,
    coordenadas: { lat: -12.0210, lng: -76.8210 },
  },

  // ── Pastores soldados y obreros ──────────────────────────────────────────
  {
    id: 'huamanga',
    nombre: 'Huamanga',
    ciudad: 'Ayacucho',
    region: 'Ayacucho',
    categoria: 'pastores-soldados',
    responsables: ['Pablo Ochante Cusiche', 'Esmeralda Sánchez E.'],
    contactos: [
      { rol: 'Pastor', numero: '971969304' },
      { rol: 'Pastor', numero: '976031807' },
    ],
    esMatriz: false,
    coordenadas: { lat: -13.1588, lng: -74.2232 },
  },
  {
    id: 'cusco',
    nombre: 'Cusco',
    ciudad: 'Cusco',
    region: 'Cusco',
    categoria: 'pastores-soldados',
    responsables: ['Felipe León', 'Rebeca Casaño Vardales'],
    contactos: [
      { rol: 'Pastor', numero: '921023615' },
      { rol: 'Pastor', numero: '957764811' },
    ],
    esMatriz: false,
    coordenadas: { lat: -13.5320, lng: -71.9675 },
  },
  {
    id: 'cerro-de-pasco-soldados',
    nombre: 'Cerro de Pasco',
    ciudad: 'Cerro de Pasco',
    region: 'Pasco',
    categoria: 'pastores-soldados',
    responsables: ['Oseas Lisonde Quispe', 'Dina Machacuay Córdova'],
    contactos: [
      { rol: 'Pastor', numero: '967401797' },
      { rol: 'Pastor', numero: '952121797' },
    ],
    esMatriz: false,
    coordenadas: { lat: -10.6800, lng: -76.2560 },
  },
  {
    // Nombre corregido a mano en la lista impresa: confirmar la escritura.
    id: 'canayre',
    nombre: 'Canayre',
    ciudad: 'Llochegua',
    region: 'Ayacucho',
    categoria: 'pastores-soldados',
    responsables: ['Isaac Yalo'],
    contactos: [{ rol: 'Pastor', numero: '915902232' }],
    esMatriz: false,
    coordenadas: { lat: -12.2900, lng: -73.9400 },
  },
  {
    id: 'characato',
    nombre: 'Characato',
    ciudad: 'Characato',
    region: 'Arequipa',
    categoria: 'pastores-soldados',
    responsables: ['Elizabeth Martínez Llalli'],
    obreros: ['Topacio Vicente Espíritu'],
    contactos: [{ rol: 'Pastora', numero: '901695790' }],
    esMatriz: false,
    coordenadas: { lat: -16.4686, lng: -71.4858 },
  },
  {
    id: 'bajo-aldea-pichanaki',
    nombre: 'Bajo Aldea',
    ciudad: 'Pichanaki',
    region: 'Junín',
    categoria: 'pastores-soldados',
    responsables: ['Betsabe Ramires Condori'],
    contactos: [{ rol: 'Pastora', numero: '918052318' }],
    esMatriz: false,
    coordenadas: { lat: -10.9270, lng: -74.8730 },
  },
  {
    id: 'chala',
    nombre: 'Chala',
    ciudad: 'Chala',
    region: 'Arequipa',
    categoria: 'pastores-soldados',
    responsables: ['Josué Ruiz'],
    contactos: [{ rol: 'Siervo', numero: '998294873' }],
    esMatriz: false,
    coordenadas: { lat: -15.8556, lng: -74.2478 },
  },
  {
    id: 'tacna',
    nombre: 'Tacna',
    ciudad: 'Tacna',
    region: 'Tacna',
    categoria: 'pastores-soldados',
    responsables: ['Valentina'],
    contactos: [{ rol: 'Miembro', numero: '972571861' }],
    esMatriz: false,
    coordenadas: { lat: -18.0066, lng: -70.2463 },
  },
];

/** Número con espacios para leerlo mejor: 927 169 932 */
export function formatearCelular(numero: string): string {
  return numero.replace(/^(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3');
}

export default filiales;

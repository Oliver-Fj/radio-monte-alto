
export interface Filial {
  id: string;
  nombre: string;
  ciudad: string;
  region: string;
  direccion: string;
  pastor: string;
  telefono: string;
  dias: string[];
  horario: string;
  esMatriz: boolean;
  coordenadas: {
    lat: number;
    lng: number;
  };
}

export const filiales: Filial[] = [
  {
    id: '1',
    nombre: 'Sede Central Monte Alto',
    ciudad: 'Huancayo',
    region: 'Junín',
    direccion: 'Av. Monte Alto 123, El Tambo, Huancayo',
    pastor: 'Pastor Principal',
    telefono: '+51 964 XXX XXX',
    dias: ['Domingo'],
    horario: '8:00 AM - 3:15 PM',
    esMatriz: true,
    coordenadas: { lat: -12.0464, lng: -75.2044 },
  },
  {
    id: '2',
    nombre: 'Filial Lima - San Juan de Lurigancho',
    ciudad: 'Lima',
    region: 'Lima',
    direccion: 'Jr. Los Pinos 456, San Juan de Lurigancho, Lima',
    pastor: 'Pastor Miguel Torres',
    telefono: '+51 987 XXX XXX',
    dias: ['Domingo', 'Miércoles'],
    horario: 'Dom: 9:00 AM - 1:00 PM, Mié: 7:00 PM - 9:00 PM',
    esMatriz: false,
    coordenadas: { lat: -11.9849, lng: -77.0076 },
  },
  {
    id: '3',
    nombre: 'Filial Arequipa - Cercado',
    ciudad: 'Arequipa',
    region: 'Arequipa',
    direccion: 'Calle La Merced 789, Cercado, Arequipa',
    pastor: 'Pastora Carmen Flores',
    telefono: '+51 954 XXX XXX',
    dias: ['Domingo', 'Viernes'],
    horario: 'Dom: 10:00 AM - 2:00 PM, Vie: 7:30 PM - 9:30 PM',
    esMatriz: false,
    coordenadas: { lat: -16.4090, lng: -71.5375 },
  },
  {
    id: '4',
    nombre: 'Filial Cusco - Wanchaq',
    ciudad: 'Cusco',
    region: 'Cusco',
    direccion: 'Av. La Cultura 321, Wanchaq, Cusco',
    pastor: 'Pastor Juan Quispe',
    telefono: '+51 974 XXX XXX',
    dias: ['Domingo'],
    horario: '9:30 AM - 1:30 PM',
    esMatriz: false,
    coordenadas: { lat: -13.5319, lng: -71.9675 },
  },
  {
    id: '5',
    nombre: 'Filial Trujillo - La Esperanza',
    ciudad: 'Trujillo',
    region: 'La Libertad',
    direccion: 'Jr. Las Flores 654, La Esperanza, Trujillo',
    pastor: 'Pastor Roberto Vega',
    telefono: '+51 945 XXX XXX',
    dias: ['Domingo', 'Jueves'],
    horario: 'Dom: 9:00 AM - 1:00 PM, Jue: 7:00 PM - 9:00 PM',
    esMatriz: false,
    coordenadas: { lat: -8.1116, lng: -79.0288 },
  },
  {
    id: '6',
    nombre: 'Filial Chiclayo - José Leonardo Ortiz',
    ciudad: 'Chiclayo',
    region: 'Lambayeque',
    direccion: 'Av. Los Incas 987, José Leonardo Ortiz, Chiclayo',
    pastor: 'Pastora María Sánchez',
    telefono: '+51 923 XXX XXX',
    dias: ['Domingo'],
    horario: '10:00 AM - 2:00 PM',
    esMatriz: false,
    coordenadas: { lat: -6.7714, lng: -79.8411 },
  },
  {
    id: '7',
    nombre: 'Filial Iquitos - Punchana',
    ciudad: 'Iquitos',
    region: 'Loreto',
    direccion: 'Jr. Amazonas 234, Punchana, Iquitos',
    pastor: 'Pastor David Ramírez',
    telefono: '+51 965 XXX XXX',
    dias: ['Domingo', 'Sábado'],
    horario: 'Dom: 9:00 AM - 12:00 PM, Sáb: 6:00 PM - 8:00 PM',
    esMatriz: false,
    coordenadas: { lat: -3.7437, lng: -73.2516 },
  },
  {
    id: '8',
    nombre: 'Filial Pucallpa - Callería',
    ciudad: 'Pucallpa',
    region: 'Ucayali',
    direccion: 'Jr. Tarapacá 567, Callería, Pucallpa',
    pastor: 'Pastor Carlos Díaz',
    telefono: '+51 961 XXX XXX',
    dias: ['Domingo'],
    horario: '8:30 AM - 12:30 PM',
    esMatriz: false,
    coordenadas: { lat: -8.3791, lng: -74.5539 },
  },
  {
    id: '9',
    nombre: 'Filial Ayacucho - Carmen Alto',
    ciudad: 'Ayacucho',
    region: 'Ayacucho',
    direccion: 'Av. 28 de Julio 890, Carmen Alto, Ayacucho',
    pastor: 'Pastora Rosa Huamán',
    telefono: '+51 978 XXX XXX',
    dias: ['Domingo', 'Miércoles'],
    horario: 'Dom: 9:00 AM - 1:00 PM, Mié: 7:00 PM - 9:00 PM',
    esMatriz: false,
    coordenadas: { lat: -13.1631, lng: -74.2236 },
  },
  {
    id: '10',
    nombre: 'Filial Huánuco - Pillco Marca',
    ciudad: 'Huánuco',
    region: 'Huánuco',
    direccion: 'Jr. Dos de Mayo 432, Pillco Marca, Huánuco',
    pastor: 'Pastor Luis Gonzales',
    telefono: '+51 952 XXX XXX',
    dias: ['Domingo'],
    horario: '9:30 AM - 1:30 PM',
    esMatriz: false,
    coordenadas: { lat: -9.9306, lng: -76.2422 },
  },
];

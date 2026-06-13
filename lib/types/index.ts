export interface Programa {
  id: string;
  nombre: string;
  descripcion: string;
  horario: string;
  dias: string[];
  categoria: string;
  locutor?: string;
  operador?: string;
  imagen?: string;
  publicoObjetivo?: string;
}

export interface Articulo {
  id: string;
  titulo: string;
  contenido: string;
  fecha: string;
  categoria: string;
  tiempoLectura?: string;
  imagen?: string;
  pdfUrl?: string;
  tags?: string[];
  autor?: string;
}

export interface SubLink {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  submenu?: SubLink[];
}

// ✅ NUEVA INTERFAZ PARA EL SLIDER
export interface Slide {
  id: number; // Lo mantengo number para que coincida con tu lógica actual (slide.id === 2)
  imagen: string;
  imagenMobile: string;
  categoria: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  accent: string;
  textGlow: string;
}
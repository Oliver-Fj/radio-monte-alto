import { CATEGORIAS_FILIAL, type CategoriaFilial } from '@/lib/data/filiales';

export interface TonosMaterial {
  50: string;
  100: string;
  500: string;
  900: string;
}

/** Tonos de la paleta Material usados por las tarjetas y el mapa (50 · 100 · 500 · 900). */
export const PALETA_MATERIAL: Record<string, TonosMaterial> = {
  Red: { 50: '#FFEBEE', 100: '#FFCDD2', 500: '#F44336', 900: '#B71C1C' },
  Pink: { 50: '#FCE4EC', 100: '#F8BBD0', 500: '#E91E63', 900: '#880E4F' },
  Purple: { 50: '#F3E5F5', 100: '#E1BEE7', 500: '#9C27B0', 900: '#4A148C' },
  'Deep-Purple': { 50: '#EDE7F6', 100: '#D1C4E9', 500: '#673AB7', 900: '#311B92' },
  Indigo: { 50: '#E8EAF6', 100: '#C5CAE9', 500: '#3F51B5', 900: '#1A237E' },
  Blue: { 50: '#E3F2FD', 100: '#BBDEFB', 500: '#2196F3', 900: '#0D47A1' },
  'Light-Blue': { 50: '#E1F5FE', 100: '#B3E5FC', 500: '#03A9F4', 900: '#01579B' },
  Cyan: { 50: '#E0F7FA', 100: '#B2EBF2', 500: '#00BCD4', 900: '#006064' },
  Teal: { 50: '#E0F2F1', 100: '#B2DFDB', 500: '#009688', 900: '#004D40' },
  Green: { 50: '#E8F5E9', 100: '#C8E6C9', 500: '#4CAF50', 900: '#1B5E20' },
  Amber: { 50: '#FFF8E1', 100: '#FFECB3', 500: '#FFA000', 900: '#FF6F00' },
  Orange: { 50: '#FFF3E0', 100: '#FFE0B2', 500: '#FF9800', 900: '#E65100' },
  'Deep-Orange': { 50: '#FBE9E7', 100: '#FFCCBC', 500: '#FF5722', 900: '#BF360C' },
  Brown: { 50: '#EFEBE9', 100: '#D7CCC8', 500: '#795548', 900: '#3E2723' },
  'Blue-Grey': { 50: '#ECEFF1', 100: '#CFD8DC', 500: '#607D8B', 900: '#263238' },
};

/** Colores de una categoría de filial: los mismos en la tarjeta y en el punto del mapa. */
export function coloresCategoria(categoria: CategoriaFilial): TonosMaterial {
  return PALETA_MATERIAL[CATEGORIAS_FILIAL[categoria].color] ?? PALETA_MATERIAL.Blue;
}

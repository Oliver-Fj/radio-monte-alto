
'use client';

import { cn } from '@/lib/utils/cn';
import { BookOpen, Baby, Music, Users } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

const CATEGORIAS = [
  { label: 'Ensenanza', value: 'Ensenanza', icon: BookOpen, color: 'blue' },
  { label: 'Ninos', value: 'Ninos', icon: Baby, color: 'green' },
  { label: 'Musica', value: 'Musica', icon: Music, color: 'yellow' },
  { label: 'Juventud', value: 'Juventud', icon: Users, color: 'orange' },
];

export default function CategoryFilter({
  selectedCategories,
  onCategoryToggle,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIAS.map((categoria) => {
        const isSelected = selectedCategories.includes(categoria.value);
        const Icon = categoria.icon;

        const colorClasses = {
          blue: isSelected
            ? 'bg-blue-900 text-white border-blue-900'
            : 'bg-blue-50 text-blue-900 border-blue-200 hover:border-blue-500',
          green: isSelected
            ? 'bg-green-900 text-white border-green-900'
            : 'bg-green-50 text-green-900 border-green-200 hover:border-green-500',
          yellow: isSelected
            ? 'bg-yellow-600 text-white border-yellow-600'
            : 'bg-yellow-50 text-yellow-900 border-yellow-200 hover:border-yellow-500',
          orange: isSelected
            ? 'bg-orange-900 text-white border-orange-900'
            : 'bg-orange-50 text-orange-900 border-orange-200 hover:border-orange-500',
        };

        return (
          <button
            key={categoria.value}
            onClick={() => onCategoryToggle(categoria.value)}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-all',
              'border-2 flex items-center gap-2',
              isSelected && 'shadow-lg scale-105',
              colorClasses[categoria.color as keyof typeof colorClasses]
            )}
          >
            <Icon className="w-4 h-4" />
            {categoria.label}
          </button>
        );
      })}
    </div>
  );
}

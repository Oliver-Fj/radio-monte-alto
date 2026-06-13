'use client';

import { cn } from '@/lib/utils/cn';

interface DayFilterProps {
  selectedDays: string[];
  onDayToggle: (day: string) => void;
}

const DIAS = [
  { label: 'Lunes', value: 'L' },
  { label: 'Martes', value: 'M' },
  { label: 'Miércoles', value: 'X' },
  { label: 'Jueves', value: 'J' },
  { label: 'Viernes', value: 'V' },
  { label: 'Sábado', value: 'S' },
  { label: 'Domingo', value: 'D' },
];

export default function DayFilter({ selectedDays, onDayToggle }: DayFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {DIAS.map((dia) => {
        const isSelected = selectedDays.includes(dia.value);
        return (
          <button
            key={dia.value}
            onClick={() => onDayToggle(dia.value)}
            className={cn(
              'px-4 py-2 rounded-lg font-medium transition-all',
              'border-2',
              isSelected
                ? 'bg-blue-900 text-white border-blue-900 shadow-lg scale-105'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-900'
            )}
          >
            {dia.label}
          </button>
        );
      })}
    </div>
  );
}

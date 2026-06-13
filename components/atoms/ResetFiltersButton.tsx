'use client';

import { X } from 'lucide-react';

interface ResetFiltersButtonProps {
  onReset: () => void;
  hasFilters: boolean;
}

export default function ResetFiltersButton({
  onReset,
  hasFilters,
}: ResetFiltersButtonProps) {
  if (!hasFilters) return null;

  return (
    <button
      onClick={onReset}
      className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
    >
      <X className="w-4 h-4" />
      Limpiar Filtros
    </button>
  );
}

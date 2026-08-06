import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  /** Colores para secciones con fondo oscuro */
  dark?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = false,
  dark = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-8', className)}>
      <h2 className={cn('text-3xl md:text-4xl font-bold mb-2', dark ? 'text-white' : 'text-blue-900')}>
        {children}
      </h2>
      {subtitle && (
        <p className={cn('text-lg max-w-2xl mx-auto', dark ? 'text-slate-400' : 'text-gray-600')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

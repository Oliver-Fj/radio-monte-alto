import { cn } from '@/lib/utils/cn';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-8', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

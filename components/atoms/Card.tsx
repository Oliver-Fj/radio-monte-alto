import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-lg border-2 border-gray-200 p-6',
        hover && 'hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}

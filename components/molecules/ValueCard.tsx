import Card from '@/components/atoms/Card';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <Card hover className="text-center h-full border-2 border-gray-300">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
        <Icon className="w-7 h-7 text-blue-900" />
      </div>
      <h4 className="text-lg font-bold text-blue-900 mb-3">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

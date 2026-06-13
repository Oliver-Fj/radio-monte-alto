import Card from '@/components/atoms/Card';
import { LucideIcon } from 'lucide-react';

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  info: string;
  subInfo?: string;
  href?: string;
}

export default function ContactInfoCard({ 
  icon: Icon, 
  title, 
  info, 
  subInfo,
  href 
}: ContactInfoCardProps) {
  const content = (
    <Card hover className="text-center h-full border-2 border-gray-300">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
        <Icon className="w-7 h-7 text-blue-900" />
      </div>
      <h3 className="text-lg font-bold text-blue-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-700 font-semibold mb-1">
        {info}
      </p>
      {subInfo && (
        <p className="text-sm text-gray-500">
          {subInfo}
        </p>
      )}
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}

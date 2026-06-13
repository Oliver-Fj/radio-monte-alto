import { LucideIcon } from 'lucide-react';

interface SocialMediaCardProps {
  icon: LucideIcon;
  name: string;
  handle: string;
  url: string;
  color: string;
}

export default function SocialMediaCard({ 
  icon: Icon, 
  name, 
  handle, 
  url,
  color 
}: SocialMediaCardProps) {
  return (
    
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className={`bg-white border-2 border-gray-300 rounded-xl p-6 hover:border-${color} hover:shadow-2xl transition-all duration-300 h-full`}>
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 bg-${color} bg-opacity-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className={`w-7 h-7 text-${color}`} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">
              {name}
            </h4>
            <p className="text-sm text-gray-600">
              {handle}
            </p>
          </div>
          <div className="text-gray-400 group-hover:text-blue-900 transition-colors">
            →
          </div>
        </div>
      </div>
    </a>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ year, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="flex gap-6 group">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-900 rounded-full ring-4 ring-blue-200 group-hover:ring-8 transition-all" />
        {!isLast && (
          <div className="w-1 h-full bg-blue-200 group-hover:bg-blue-300 transition-colors" />
        )}
      </div>
      
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all">
          <span className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold mb-3">
            {year}
          </span>
          <h4 className="text-xl font-bold text-blue-900 mb-2">
            {title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

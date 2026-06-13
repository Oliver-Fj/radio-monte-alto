'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PhotoGalleryItemProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function PhotoGalleryItem({ src, alt, caption }: PhotoGalleryItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-blue-400">
      <div className="relative aspect-[4/3] bg-gray-200">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-500 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          } group-hover:scale-110`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay con caption */}
        {caption && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white font-semibold p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {caption}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

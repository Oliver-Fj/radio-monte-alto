
'use client';

import { Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
  };

  return (
    <div className="flex items-center gap-4 py-6 border-t-2 border-b-2 border-gray-200">
      <span className="font-bold text-gray-700 uppercase text-sm">Compartir:</span>
      <div className="flex gap-3">
        <button
          onClick={shareOnFacebook}
          className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          title="Compartir en Facebook"
        >
          <Facebook className="w-5 h-5 text-white fill-white" />
        </button>

        <button
          onClick={shareOnTwitter}
          className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          title="Compartir en Twitter"
        >
          <Twitter className="w-5 h-5 text-white fill-white" />
        </button>

        <button
          onClick={shareOnLinkedIn}
          className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          title="Compartir en LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-white fill-white" />
        </button>

        <button
          onClick={shareOnWhatsApp}
          className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          title="Compartir en WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-white fill-white" />
        </button>
      </div>
    </div>
  );
}

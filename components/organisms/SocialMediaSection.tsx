
import SectionTitle from '@/components/atoms/SectionTitle';
import { Youtube, Instagram, Facebook } from 'lucide-react';
import TikTokIcon from '@/components/atoms/TikTokIcon';

export default function SocialMediaSection() {
  const redesSociales = [
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@radiomontealto1049',
      url: 'https://youtube.com/@radiomontealto1049?si=pC_WjRML_6jzIo_9',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@radiomontealto7',
      url: 'https://www.instagram.com/radiomontealto7?igsh=Z2FvcGJyMWtzZnM2',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'Radio Monte Alto',
      url: 'https://www.facebook.com/share/17LGB19yFY/',
    },
    {
      icon: TikTokIcon,
      name: 'TikTok',
      handle: '@radiomontealto',
      url: 'https://www.tiktok.com/@radiomontealto?_r=1&_t=ZS-91VVoF64M5c',
      isCustomIcon: true,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          subtitle="Siguenos en nuestras redes sociales y mantente conectado"
        >
          Encuentranos en Redes Sociales
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {redesSociales.map((red) => {
            const Icon = red.icon;
            return (
              <a key={red.name} href={red.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white border-2 border-gray-300 rounded-xl p-6 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 h-full text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    {red.isCustomIcon ? (
                      <Icon className="w-8 h-8 text-blue-900" />
                    ) : (
                      <Icon className="w-8 h-8 text-blue-900" />
                    )}
                  </div>
                  <h4 className="font-bold text-blue-900 mb-2 text-lg">
                    {red.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {red.handle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

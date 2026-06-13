
import Link from 'next/link';
import { Heart, Calendar, Radio, MapPin, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle';

export default function MinisteriosGridSection() {
  const ministerios = [
    { title: "Clínica Celestial", icon: Heart, sub: "Sanidad Divina", link: "/clinica-celestial" },
    { title: "Cultos Dominicales", icon: Calendar, sub: "Adoración", link: "/cultos-dominicales" },
    { title: "Radio Monte Alto", icon: Radio, sub: "Señal 24/7", link: "/programacion" },
    { title: "Filiales", icon: MapPin, sub: "Presencia Nacional", link: "/filiales" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Áreas de servicio y conexión">
            Ministerios Activos
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {ministerios.map((item, idx) => (
              <Link key={idx} href={item.link} className="group block">
                <div className="bg-white h-full rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors" />

                  <div className="w-14 h-14 bg-blue-900 text-yellow-400 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-blue-900/20">
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium mb-4">{item.sub}</p>

                  <div className="flex items-center text-sm text-yellow-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Saber más <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

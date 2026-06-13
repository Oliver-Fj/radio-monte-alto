
import { Heart, BookOpen, Church } from 'lucide-react';
import SectionTitle from '@/components/atoms/SectionTitle';

export default function IglesiaPilaresSection() {
  const pilares = [
    { title: "Sanidad", icon: Heart, color: "text-red-500", desc: "Por sus llagas fuimos nosotros curados. Creemos en milagros vigentes hoy." },
    { title: "Santidad", icon: BookOpen, color: "text-blue-600", desc: "Viviendo apartados para Dios, en obediencia y pureza de corazón." },
    { title: "Poder", icon: Church, color: "text-yellow-500", desc: "La unción del Espíritu Santo que rompe yugos y transforma vidas." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="Fundamentos inconmovibles">
            Nuestros Pilares
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pilares.map((pilar, index) => (
              <div key={index} className="text-center group p-6 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-slate-100 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <pilar.icon className={`w-10 h-10 ${pilar.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{pilar.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">
                  {pilar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

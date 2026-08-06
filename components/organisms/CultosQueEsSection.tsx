
import SectionTitle from '@/components/atoms/SectionTitle';
import GlassCard3D, { type Glass3DTheme } from '@/components/molecules/GlassCard3D';
import { Users, Heart, BookOpen, type LucideIcon } from 'lucide-react';

const PILARES: { titulo: string; texto: string; theme: Glass3DTheme; icon: LucideIcon }[] = [
  {
    titulo: 'Comunión',
    texto: 'Nos fortalecemos juntos, compartiendo la vida en Cristo y edificándonos mutuamente.',
    theme: 'ocean',
    icon: Users,
  },
  {
    titulo: 'Adoración',
    texto: 'Elevamos nuestras voces en alabanza y adoración al único Dios verdadero.',
    theme: 'solar',
    icon: Heart,
  },
  {
    titulo: 'Palabra',
    texto: 'Recibimos enseñanza bíblica sólida que transforma nuestras vidas y renueva nuestras mentes.',
    theme: 'mint',
    icon: BookOpen,
  },
];

export default function CultosQueEsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle centered subtitle="La importancia de congregarnos">
            ¿Por Qué Culto Dominical?
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg">
                <p className="text-blue-900 font-medium italic text-lg">
                  &ldquo;No dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; 
                  y tanto más, cuanto veis que aquel día se acerca.&rdquo;
                  <span className="block text-sm mt-2 text-blue-700">- Hebreos 10:25</span>
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                El culto dominical no es una tradición religiosa, sino un <strong className="text-blue-900">mandato bíblico</strong>. 
                Dios nos diseñó para vivir en comunidad, adorar juntos y fortalecernos mutuamente en la fe.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                Cada domingo apartamos tiempo para reunirnos como familia de Dios, dejando a un lado 
                las ocupaciones del mundo para enfocarnos en lo eterno: <strong>adorar al Creador</strong>, 
                recibir Su Palabra y edificarnos los unos a los otros.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                En tiempos donde muchos han dejado de congregarse, nosotros permanecemos firmes, 
                sabiendo que <em>&ldquo;tanto más, cuanto veis que aquel día se acerca&rdquo;</em>.
              </p>
            </div>

            <div className="space-y-8">
              {PILARES.map(({ titulo, texto, theme, icon: Icon }) => (
                <GlassCard3D key={titulo} theme={theme} icon={<Icon className="w-5 h-5" aria-hidden="true" />}>
                  <div className="px-7 pb-7 pt-24">
                    <h3 className="text-2xl font-bold [color:var(--g3-title)]">{titulo}</h3>
                    <p className="mt-2 leading-relaxed [color:var(--g3-body)]">{texto}</p>
                  </div>
                </GlassCard3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

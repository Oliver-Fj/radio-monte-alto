import SectionTitle from '@/components/atoms/SectionTitle';
import TimelineItem from '@/components/molecules/TimelineItem';

export default function HistorySection() {
  const timeline = [
    {
      year: '2019',
      title: 'Fundacion de Radio Monte Alto',
      description: 'Nace Radio Monte Alto con la vision de llevar el mensaje del Evangelio a traves de las ondas radiales en Huancayo, Peru.',
    },
    {
      year: '2020',
      title: 'Expansion de Cobertura',
      description: 'Ampliamos nuestra senal para alcanzar mas comunidades en la region de Junin, llegando a miles de oyentes con programacion cristiana de calidad.',
    },
    {
      year: '2021',
      title: 'Transmision Digital',
      description: 'Iniciamos transmision por internet, permitiendo que personas de todo el mundo puedan escuchar nuestros programas las 24 horas del dia.',
    },
    {
      year: '2022',
      title: 'Nuevos Programas',
      description: 'Implementamos programacion especializada: infantil, juvenil, familiar y de  para todas las edades.',
    },
    {
      year: '2023',
      title: 'Crecimiento del Equipo',
      description: 'Mas de 20 locutores y colaboradores se unen al equipo, fortaleciendo la calidad y diversidad de nuestra programacion.',
    },
    {
      year: '2024',
      title: 'Presente y Futuro',
      description: 'Continuamos firmes en nuestra mision, alcanzando mas vidas cada dia y preparandonos para nuevos proyectos de evangelizacion multimedia.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          centered
          subtitle="Un recorrido por los hitos mas importantes de nuestra historia"
        >
          Nuestra Historia
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

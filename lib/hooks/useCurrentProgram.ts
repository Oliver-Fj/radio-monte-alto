
'use client';

import { useState, useEffect } from 'react';

interface Programa {
  nombre: string;
  horario: string;
}

const programas: Programa[] = [
  { nombre: 'Devocional Matutino', horario: '06:00-08:00' },
  { nombre: 'Alabanza y Adoracion', horario: '08:00-10:00' },
  { nombre: 'Estudio Biblico', horario: '10:00-12:00' },
  { nombre: 'Mensaje del Mediodia', horario: '12:00-14:00' },
  { nombre: 'Testimonios de Fe', horario: '14:00-16:00' },
  { nombre: 'Hora Familiar', horario: '16:00-18:00' },
  { nombre: 'Reflexion Vespertina', horario: '18:00-20:00' },
  { nombre: 'Alabanza Nocturna', horario: '20:00-22:00' },
  { nombre: 'Vigilia de Oracion', horario: '22:00-00:00' },
  { nombre: 'Musica Cristiana', horario: '00:00-06:00' },
];

export function useCurrentProgram() {
  const [currentProgram, setCurrentProgram] = useState<Programa | null>(null);

  useEffect(() => {
    const updateProgram = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTime = currentHour * 60 + currentMinute;

      const programa = programas.find(p => {
        const [start, end] = p.horario.split('-');
        const [startHour, startMin] = start.split(':').map(Number);
        const [endHour, endMin] = end.split(':').map(Number);
        
        const startTime = startHour * 60 + startMin;
        let endTime = endHour * 60 + endMin;
        
        // Manejo de horarios que cruzan medianoche
        if (endTime < startTime) {
          endTime += 24 * 60;
        }
        
        let adjustedCurrentTime = currentTime;
        if (currentTime < startTime && endTime > 24 * 60) {
          adjustedCurrentTime += 24 * 60;
        }
        
        return adjustedCurrentTime >= startTime && adjustedCurrentTime < endTime;
      });

      setCurrentProgram(programa || programas[programas.length - 1]);
    };

    updateProgram();
    const interval = setInterval(updateProgram, 60000); // Actualiza cada minuto

    return () => clearInterval(interval);
  }, []);

  return currentProgram;
}

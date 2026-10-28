'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Clock, Radio, Sun, Music, BookOpen, Globe, Heart, Users, Star, LayoutGrid, CalendarDays } from 'lucide-react';

interface Programa {
  id: string;
  nombre: string;
  descripcion: string;
  horario: string;
  horaInicio: string; // "05:00"
  horaFin: string;    // "06:00"
  dias: string[];
  categoria: string;
  publicoObjetivo: string;
}

const programas: Programa[] = [
  { id:'1', nombre:'Manteniendo el Candelero Encendido',             descripcion:'El mejor inicio de tu día con alabanzas y la Palabra de Dios.',                          horario:'05:00 – 06:00 AM', horaInicio:'05:00', horaFin:'06:00', dias:['L','M','X','J','V','S'], categoria:'Alabanzas', publicoObjetivo:'General' },
  { id:'2', nombre:'La Hora de la Clínica Celestial',                descripcion:'Tiempo de oración ferviente e intercesión por sanidad espiritual y física.',             horario:'06:00 – 07:00 AM', horaInicio:'06:00', horaFin:'07:00', dias:['L','M','X','J','V'],   categoria:'Oracion',   publicoObjetivo:'General' },
  { id:'3', nombre:'Visión Misionera: Conquistando las Naciones',    descripcion:'El evangelio sin fronteras. Historias y testimonios del campo misionero.',               horario:'07:00 – 08:00 AM', horaInicio:'07:00', horaFin:'08:00', dias:['L','M','X','J','V'],   categoria:'Mision',    publicoObjetivo:'General' },
  { id:'4', nombre:'Programa de Niños – Joyas de Cristo',            descripcion:'Música, historias bíblicas y enseñanzas para los más pequeños.',                         horario:'03:00 – 04:00 PM', horaInicio:'15:00', horaFin:'16:00', dias:['S'],                   categoria:'Ninos',     publicoObjetivo:'Niños'   },
  { id:'5', nombre:'Forjándonos para la Vida Eterna',                descripcion:'Predicación ungida del evangelio de salvación para el mundo actual.',                   horario:'04:00 – 05:00 PM', horaInicio:'16:00', horaFin:'17:00', dias:['L','M','X','J','V'],   categoria:'Ensenanza', publicoObjetivo:'General' },
  { id:'6', nombre:'Proclamando la Sana Doctrina',                   descripcion:'Fundamentos sólidos de la fe cristiana para madurar al creyente en la Palabra.',        horario:'05:00 – 06:00 PM', horaInicio:'17:00', horaFin:'18:00', dias:['L','M','X','J','V'],   categoria:'Ensenanza', publicoObjetivo:'General' },
  { id:'7', nombre:'Hora de la Pesca Milagrosa',                     descripcion:'Evangelismo y oración de intercesión por las almas perdidas para Cristo.',              horario:'06:00 – 07:00 PM', horaInicio:'18:00', horaFin:'19:00', dias:['L','M','X','J','V'],   categoria:'Oracion',   publicoObjetivo:'General' },
  { id:'8', nombre:'Tras las Huellas de Jesús',                      descripcion:'Aprendiendo a vivir el evangelio con el ejemplo práctico de Cristo.',                   horario:'06:00 – 07:00 PM', horaInicio:'18:00', horaFin:'19:00', dias:['S'],                   categoria:'Ensenanza', publicoObjetivo:'General' },
  { id:'9', nombre:'Programa Juvenil – Predestinados para Triunfar', descripcion:'Mensajes de identidad, propósito y victoria en Cristo para la generación joven.',       horario:'07:00 – 08:00 PM', horaInicio:'19:00', horaFin:'20:00', dias:['S'],                   categoria:'Juventud',  publicoObjetivo:'Jóvenes'  },
];

const CATS: Record<string, { label:string; icon:React.ReactNode; badge:string; border:string; cell:string }> = {
  Alabanzas: { label:'Alabanzas', icon:<Music    className="w-3 h-3" aria-hidden="true"/>, badge:'bg-yellow-500/10 border-yellow-400/25 text-yellow-200', border:'border-l-yellow-400',  cell:'bg-yellow-500/10 border-yellow-400/20 text-yellow-100' },
  Oracion:   { label:'Oración',   icon:<Heart    className="w-3 h-3" aria-hidden="true"/>, badge:'bg-blue-500/10 border-blue-400/25 text-blue-200',       border:'border-l-blue-400',    cell:'bg-blue-500/10 border-blue-400/20 text-blue-100'       },
  Mision:    { label:'Misión',    icon:<Globe    className="w-3 h-3" aria-hidden="true"/>, badge:'bg-emerald-500/10 border-emerald-400/25 text-emerald-200', border:'border-l-emerald-400', cell:'bg-emerald-500/10 border-emerald-400/20 text-emerald-100'},
  Ensenanza: { label:'Enseñanza', icon:<BookOpen className="w-3 h-3" aria-hidden="true"/>, badge:'bg-indigo-500/10 border-indigo-400/25 text-indigo-200',  border:'border-l-indigo-400',  cell:'bg-indigo-500/10 border-indigo-400/20 text-indigo-100'  },
  Ninos:     { label:'Niños',     icon:<Star     className="w-3 h-3" aria-hidden="true"/>, badge:'bg-pink-500/10 border-pink-400/25 text-pink-200',        border:'border-l-pink-400',    cell:'bg-pink-500/10 border-pink-400/20 text-pink-100'        },
  Juventud:  { label:'Juventud',  icon:<Users    className="w-3 h-3" aria-hidden="true"/>, badge:'bg-purple-500/10 border-purple-400/25 text-purple-200',  border:'border-l-purple-400',  cell:'bg-purple-500/10 border-purple-400/20 text-purple-100'  },
};

const DIAS = [
  { abrev:'L', label:'Lunes'     },
  { abrev:'M', label:'Martes'    },
  { abrev:'X', label:'Miércoles' },
  { abrev:'J', label:'Jueves'    },
  { abrev:'V', label:'Viernes'   },
  { abrev:'S', label:'Sábado'    },
];

// Slots de horario para la vista tabla
const SLOTS = [
  { id:'0500', label:'5:00 AM',  h:'05:00' },
  { id:'0600', label:'6:00 AM',  h:'06:00' },
  { id:'0700', label:'7:00 AM',  h:'07:00' },
  { id:'1500', label:'3:00 PM',  h:'15:00' },
  { id:'1600', label:'4:00 PM',  h:'16:00' },
  { id:'1700', label:'5:00 PM',  h:'17:00' },
  { id:'1800', label:'6:00 PM',  h:'18:00' },
  { id:'1900', label:'7:00 PM',  h:'19:00' },
];

/* ─── VISTA TABLA SEMANAL ─── */
function VistaTabla({ diaActivo }: { diaActivo: string | null }) {
  const diasMostrar = diaActivo ? DIAS.filter(d => d.abrev === diaActivo) : DIAS;

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/8">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-slate-900/80">
            <th scope="col" className="p-4 text-left w-28">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" /> Hora
              </div>
            </th>
            {diasMostrar.map(d => (
              <th key={d.abrev} scope="col" className="p-4 text-center">
                <span className="text-slate-300 text-xs font-bold tracking-wider">{d.label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SLOTS.map((slot, si) => {
            // Separador visual entre mañana y tarde
            const esSeparador = slot.h === '15:00';
            return (
              <React.Fragment key={slot.id}>
                {esSeparador && (
                  <tr>
                    <td colSpan={diasMostrar.length + 1} className="px-4 py-2 bg-blue-950/30">
                      <div className="flex items-center gap-3">
                        <Radio className="w-3 h-3 text-blue-400" aria-hidden="true" />
                        <span className="text-blue-300 text-[10px] font-black tracking-[0.3em] uppercase">Turno Tarde</span>
                        <div className="flex-1 h-px bg-blue-500/20" />
                      </div>
                    </td>
                  </tr>
                )}
                {si === 0 && (
                  <tr>
                    <td colSpan={diasMostrar.length + 1} className="px-4 py-2 bg-yellow-950/30">
                      <div className="flex items-center gap-3">
                        <Sun className="w-3 h-3 text-yellow-400" aria-hidden="true" />
                        <span className="text-yellow-300 text-[10px] font-black tracking-[0.3em] uppercase">Turno Mañana</span>
                        <div className="flex-1 h-px bg-yellow-500/20" />
                      </div>
                    </td>
                  </tr>
                )}
                <tr className={`border-t border-white/4 ${si % 2 === 0 ? 'bg-slate-900/20' : 'bg-transparent'}`}>
                  <th scope="row" className="p-4 text-left text-xs font-mono font-normal tabular-nums text-slate-500 whitespace-nowrap">{slot.label}</th>
                  {diasMostrar.map(d => {
                    const prog = programas.find(p => p.horaInicio === slot.h && p.dias.includes(d.abrev));
                    const cat = prog ? (CATS[prog.categoria] ?? CATS['Ensenanza']) : null;
                    return (
                      <td key={d.abrev} className="p-2 align-top">
                        {prog && cat ? (
                          <div className={`rounded-xl border px-2.5 py-2 text-center transition-transform duration-300 hover:scale-[1.02] motion-reduce:hover:scale-100 cursor-default ${cat.cell}`}>
                            <div className="flex items-center justify-center gap-1 mb-1">
                              {cat.icon}
                              <span className="text-[8px] font-bold tracking-wider uppercase opacity-70">{cat.label}</span>
                            </div>
                            <p className="text-[10px] font-semibold leading-tight line-clamp-3">{prog.nombre}</p>
                          </div>
                        ) : (
                          <div className="rounded-xl border border-white/3 bg-white/1 h-full min-h-[40px] flex items-center justify-center">
                            <span className="text-slate-800 text-[10px]" aria-hidden="true">—</span>
                            <span className="sr-only">Sin programa</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ─── CARD DE PROGRAMA ─── */
function ProgramCard({ p, index, visible }: { p:Programa; index:number; visible:boolean }) {
  const cat = CATS[p.categoria] ?? CATS['Ensenanza'];
  return (
    <div className="group relative"
      style={{ opacity: visible?1:0, transform: visible?'translateY(0)':'translateY(28px)', transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index*70}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index*70}ms` }}>
      <div className={`relative bg-slate-900/50 backdrop-blur-sm border border-white/6 group-hover:border-white/14 rounded-2xl overflow-hidden transition-colors duration-500 border-l-2 ${cat.border}`}>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold tracking-wide ${cat.badge}`}>
              {cat.icon}{cat.label}
            </div>
          </div>
          <h3 className="font-serif font-bold text-white leading-snug mb-1.5 break-words group-hover:text-yellow-100 transition-colors"
            style={{ fontSize: p.nombre.length > 38 ? '0.85rem' : '1rem' }}>
            {p.nombre}
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2 group-hover:text-slate-300 transition-colors">{p.descripcion}</p>
          <div className="flex items-center justify-between pt-3 border-t border-white/5">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-white transition-colors">
              <Clock className="w-3 h-3 text-yellow-400 flex-shrink-0" aria-hidden="true" />
              <span className="font-mono font-semibold tabular-nums">{p.horario}</span>
            </div>
            <p className="sr-only">Días: {DIAS.filter(d => p.dias.includes(d.abrev)).map(d => d.label).join(', ')}</p>
            <div className="flex gap-1" aria-hidden="true">
              {DIAS.map(d => (
                <div key={d.abrev} title={d.label}
                  className={`w-5 h-5 rounded-full text-[8px] font-bold flex items-center justify-center transition-colors ${p.dias.includes(d.abrev) ? cat.badge : 'bg-slate-800/60 text-slate-600'}`}>
                  {d.abrev}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full bg-yellow-400/60" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ─── COMPONENTE PRINCIPAL ─── */
export default function ScheduleGrid() {
  const [visible, setVisible] = useState(false);
  const [diaActivo, setDiaActivo] = useState<string|null>(null);
  const [vista, setVista] = useState<'cards'|'tabla'>('cards');
  const ref = useRef<HTMLDivElement>(null);
  const urlLeida = useRef(false);

  // El filtro y la vista viven en la URL (?dia=L&vista=tabla) para poder
  // compartir el enlace o volver atrás sin perder la selección.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const dia = q.get('dia');
    if (dia && DIAS.some(d => d.abrev === dia)) setDiaActivo(dia);
    if (q.get('vista') === 'tabla') setVista('tabla');
    urlLeida.current = true;
  }, []);

  useEffect(() => {
    if (!urlLeida.current) return;
    const url = new URL(window.location.href);
    if (diaActivo) url.searchParams.set('dia', diaActivo); else url.searchParams.delete('dia');
    if (vista === 'tabla') url.searchParams.set('vista', 'tabla'); else url.searchParams.delete('vista');
    window.history.replaceState(window.history.state, '', url);
  }, [diaActivo, vista]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const MANANA = ['1','2','3'];
  const TARDE  = ['4','5','6','7','8','9'];

  const filtrar = (ids: string[]) => {
    const ps = programas.filter(p => ids.includes(p.id));
    return diaActivo ? ps.filter(p => p.dias.includes(diaActivo)) : ps;
  };

  return (
    <section ref={ref} className="relative bg-slate-950 overflow-hidden pb-20 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[180px]"
          style={{ background:'rgba(234,179,8,0.025)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Controles: filtro de día + selector de vista ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 pt-4"
          style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(16px)', transition:'opacity 0.7s, transform 0.7s' }}>

          {/* Filtro días */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por día">
            <button type="button" onClick={() => setDiaActivo(null)} aria-pressed={!diaActivo}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-[background-color,color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${!diaActivo ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/30 scale-105' : 'bg-white/5 text-slate-400 hover:text-white border border-white/8 hover:border-white/20'}`}>
              Todos
            </button>
            {DIAS.map(d => (
              <button key={d.abrev} type="button" onClick={() => setDiaActivo(p => p === d.abrev ? null : d.abrev)} aria-pressed={diaActivo === d.abrev}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-[background-color,color,box-shadow,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${diaActivo === d.abrev ? 'bg-yellow-500 text-slate-900 shadow-lg shadow-yellow-500/30 scale-105' : 'bg-white/5 text-slate-400 hover:text-white border border-white/8 hover:border-white/20'}`}>
                {d.label}
              </button>
            ))}
          </div>

          {/* Selector de vista */}
          <div className="flex rounded-full overflow-hidden border border-white/10 bg-white/3" role="group" aria-label="Tipo de vista">
            <button type="button" onClick={() => setVista('cards')} aria-pressed={vista === 'cards'}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400 ${vista==='cards' ? 'bg-yellow-500 text-slate-900' : 'text-slate-400 hover:text-white'}`}>
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" /> Programas
            </button>
            <button type="button" onClick={() => setVista('tabla')} aria-pressed={vista === 'tabla'}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-yellow-400 ${vista==='tabla' ? 'bg-yellow-500 text-slate-900' : 'text-slate-400 hover:text-white'}`}>
              <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" /> Horario
            </button>
          </div>
        </div>

        {/* ── VISTA TABLA ── */}
        {vista === 'tabla' && (
          <div style={{ opacity:visible?1:0, transition:'opacity 0.6s' }}>
            <VistaTabla diaActivo={diaActivo} />
          </div>
        )}

        {/* ── VISTA CARDS ── */}
        {vista === 'cards' && (
          <>
            {/* Turno Mañana */}
            <div className="mb-12" style={{ opacity:visible?1:0, transition:'opacity 0.6s 0.1s' }}>
              <div className="flex items-center gap-4 mb-7">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-yellow-500/10 border border-yellow-500/15">
                  <Sun className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                  <h2 className="text-yellow-200 font-bold text-sm">Turno Mañana</h2>
                  <span className="text-yellow-400/50 text-xs font-mono tabular-nums">5:00 – 8:00 AM</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/25 to-transparent" />
              </div>
              {filtrar(MANANA).length > 0
                ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{filtrar(MANANA).map((p,i) => <ProgramCard key={p.id} p={p} index={i} visible={visible} />)}</div>
                : <p className="text-center py-10 text-slate-500 text-sm">No hay programas de mañana para este día.</p>}
            </div>

            {/* Turno Tarde */}
            <div style={{ opacity:visible?1:0, transition:'opacity 0.6s 0.2s' }}>
              <div className="flex items-center gap-4 mb-7">
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/15">
                  <Radio className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  <h2 className="text-blue-200 font-bold text-sm">Turno Tarde</h2>
                  <span className="text-blue-400/50 text-xs font-mono tabular-nums">3:00 – 8:00 PM</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/25 to-transparent" />
              </div>
              {filtrar(TARDE).length > 0
                ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{filtrar(TARDE).map((p,i) => <ProgramCard key={p.id} p={p} index={i} visible={visible} />)}</div>
                : <p className="text-center py-10 text-slate-500 text-sm">No hay programas de tarde para este día.</p>}
            </div>
          </>
        )}

        {/* Leyenda */}
        <div className="mt-14 pt-8 border-t border-white/5" style={{ opacity:visible?1:0, transition:'opacity 0.6s 0.3s' }}>
          <p className="text-center text-slate-600 text-[10px] uppercase tracking-[0.3em] mb-4">Categorías</p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(CATS).map(([key,cat]) => (
              <div key={key} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold ${cat.badge}`}>
                {cat.icon}{cat.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { ArrowLeft, Menu, MapPin, Phone, Star, Clock } from 'lucide-react';
import { CATEGORIAS_FILIAL, formatearCelular, type Filial } from '@/lib/data/filiales';
import { publicPath } from '@/lib/utils/publicPath';
import { cn } from '@/lib/utils/cn';
import { coloresCategoria } from '@/lib/utils/paletaMaterial';
import styles from './FilialCard.module.css';

const ESCUDO = '/images/opt/logos-monte.webp';

/** Tiempo que gira el ícono del botón antes de cambiar (igual que el original). */
const GIRO_MS = 800;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface FilialCardProps {
  filial: Filial;
}

/**
 * Tarjeta de filial con el efecto «Material Card»: en reposo muestra la
 * imagen y el nombre del lugar; al pulsar el botón se abre y muestra los
 * responsables, los teléfonos y los accesos a WhatsApp y llamada.
 */
export default function FilialCard({ filial }: FilialCardProps) {
  const [abierta, setAbierta] = useState(false);
  const [girando, setGirando] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idDetalle = useId();

  const categoria = CATEGORIAS_FILIAL[filial.categoria];
  const colores = coloresCategoria(filial.categoria);
  const estilo = {
    '--mc-50': colores[50],
    '--mc-100': colores[100],
    '--mc-500': colores[500],
    '--mc-900': colores[900],
  } as CSSProperties;

  const conNumero = filial.contactos.filter((c) => c.numero);
  const principal = conNumero[0];

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const alternar = () => {
    setAbierta((a) => !a);
    setGirando(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setGirando(false), GIRO_MS);
  };

  // Mientras gira se conserva el ícono anterior, como en el original
  const IconoBoton = (girando ? !abierta : abierta) ? ArrowLeft : Menu;

  return (
    <article className={cn(styles.card, abierta && styles.activa)} style={estilo}>
      <h3 className={styles.titulo}>
        <span>{filial.nombre}</span>
        <strong>
          {filial.esMatriz ? <Star className="h-3.5 w-3.5" aria-hidden="true" /> : <MapPin className="h-3.5 w-3.5" aria-hidden="true" />}
          {filial.ciudad !== filial.nombre ? `${filial.ciudad}, ${filial.region}` : filial.region}
        </strong>
      </h3>

      <div className={styles.contenido}>
        <div className={styles.imagen}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={publicPath(filial.imagen ?? ESCUDO)}
            alt={filial.imagen ? `Filial ${filial.nombre}` : ''}
            loading="lazy"
            decoding="async"
            className={filial.imagen ? undefined : styles.escudo}
          />
        </div>

        <div id={idDetalle} className={styles.descripcion} aria-hidden={!abierta}>
          <p className={styles.categoria}>{categoria.nombre}</p>
          <ul className={styles.responsables}>
            {filial.responsables.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          {filial.obreros && filial.obreros.length > 0 && (
            <p className={styles.dato}>Obrera: {filial.obreros.join(', ')}</p>
          )}
          {filial.direccion && <p className={styles.dato}>{filial.direccion}</p>}
          {filial.horario && (
            <p className={styles.dato}>
              <Clock className="mr-1 inline h-3.5 w-3.5 align-[-2px]" aria-hidden="true" />
              {filial.horario}
            </p>
          )}
          {conNumero.length > 0 ? (
            <ul className={styles.telefonos}>
              {conNumero.map((c) => (
                <li key={`${c.rol}-${c.numero}`}>
                  {c.rol}:{' '}
                  <a href={`tel:+51${c.numero}`} tabIndex={abierta ? 0 : -1}>
                    {formatearCelular(c.numero)}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.dato}>Número por confirmar. Escríbenos al WhatsApp de la radio.</p>
          )}
        </div>
      </div>

      <button
        type="button"
        className={styles.boton}
        onClick={alternar}
        aria-expanded={abierta}
        aria-controls={idDetalle}
        aria-label={abierta ? `Cerrar los datos de ${filial.nombre}` : `Ver los datos de ${filial.nombre}`}
      >
        <IconoBoton className={cn('h-5 w-5', girando && styles.giro)} aria-hidden="true" />
      </button>

      <div className={styles.pie} aria-hidden={!abierta}>
        <h4>Contacto</h4>
        <a
          href={`https://wa.me/51${principal?.numero ?? '985796588'}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Escribir por WhatsApp a ${filial.nombre}`}
          tabIndex={abierta ? 0 : -1}
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        {conNumero.map((c) => (
          <a
            key={`pie-${c.rol}-${c.numero}`}
            href={`tel:+51${c.numero}`}
            aria-label={`Llamar a ${c.rol.toLowerCase()}: ${formatearCelular(c.numero)}`}
            tabIndex={abierta ? 0 : -1}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}

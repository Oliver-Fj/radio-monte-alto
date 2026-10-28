'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { cn } from '@/lib/utils/cn';

/**
 * Botón «Enviar por WhatsApp» con la animación del avión de papel
 * (adaptada del pen «Send → Sent!» que nos compartieron): el avión despega,
 * da una vuelta dejando una estela, el botón se encoge en una gota, el avión
 * aterriza convertido en un check y aparece «¡Mensaje listo!».
 *
 * GSAP (con MorphSVG, DrawSVG y MotionPath, gratuitos desde la v3.13) hace la
 * animación. WhatsApp se abre a mitad del vuelo, dentro del tiempo en que el
 * navegador todavía considera el clic como gesto del usuario (si se esperara
 * al final, algunos navegadores bloquearían la ventana emergente).
 */

// ── Geometría (viewBox 0 0 640 120) ──────────────────────────────────────────
const PILDORA = 'M58 6H582A54 54 0 0 1 636 60A54 54 0 0 1 582 114H58A54 54 0 0 1 4 60A54 54 0 0 1 58 6Z';
const circulo = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy - r}A${r} ${r} 0 1 1 ${cx} ${cy + r}A${r} ${r} 0 1 1 ${cx} ${cy - r}Z`;
const C_ABAJO = circulo(320, 68, 46);
const C_ARRIBA = circulo(320, 52, 52);
const C_CENTRO = circulo(320, 60, 58);
const C_FINAL = circulo(62, 60, 54);

// Avión y check centrados en (0,0), escala 0.5 del original
const AVION =
  'M-1.47 -23.21C-0.78 -24.27 0.78 -24.27 1.47 -23.21L21.75 7.69C26.05 14.24 21.97 22.79 14.6 23.94L1.43 14.83V-8.89C1.43 -9.68 0.79 -10.32 0 -10.32C-0.79 -10.32 -1.43 -9.68 -1.43 -8.89V14.83L-14.6 23.94C-21.97 22.79 -26.05 14.24 -21.75 7.69L-1.47 -23.21Z';
const CHECK =
  'M16.87 -19.39C15.81 -20.27 14.23 -20.13 13.35 -19.07L-6.3 4.48L-14.46 -2.42C-15.51 -3.31 -17.09 -3.18 -17.98 -2.12L-22.23 2.9C-23.12 3.95 -22.99 5.53 -21.94 6.42L-12.48 14.43C-12.33 14.68 -12.14 14.91 -11.91 15.11L-6.86 19.32C-5.8 20.21 -4.22 20.06 -3.33 19L22.24 -11.65C23.13 -12.71 22.98 -14.29 21.92 -15.17L16.87 -19.39Z';

// Ruta de vuelo: sale del avión (66,60), da la vuelta y aterriza en el centro
const RUTA = 'M66 60C136 -40 330 -95 470 -35C610 25 575 175 440 166C340 160 300 115 320 60';
const DESPLAZAMIENTO = 320 - 62; // del centro al círculo final

const VERDE = '#0E7A6E';
const VERDE_VIVO = '#25D366';
const VERDE_CLARO = '#E3F7EC';

interface BotonEnviarWhatsAppProps {
  /** Valida el formulario y devuelve el enlace de WhatsApp, o null si falta algo. */
  obtenerUrl: () => string | null;
  /** Se llama cuando WhatsApp ya se abrió y terminó la animación. */
  alAbrir?: () => void;
  className?: string;
}

export default function BotonEnviarWhatsApp({ obtenerUrl, alAbrir, className }: BotonEnviarWhatsAppProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rutaRef = useRef<SVGPathElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const esperaRef = useRef<number | undefined>(undefined);
  const avisoRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin, MotionPathPlugin);

    const ctx = gsap.context(() => {
      gsap.set('.bw-ruta', { drawSVG: '0% 0%' });
      gsap.set('.bw-listo', { x: -DESPLAZAMIENTO });

      const tl = gsap.timeline({ paused: true });

      // El botón se encoge en una gota que rebota
      tl.to('.bw-base', { duration: 0.77, morphSVG: C_ABAJO, ease: 'power1.inOut' }, 'inicio')
        .to('.bw-base', { duration: 0.23, morphSVG: C_ARRIBA, ease: 'power1.inOut' })
        .to('.bw-base', { duration: 0.2, morphSVG: C_CENTRO, ease: 'power1.inOut' })
        .to('.bw-base', { duration: 0.5, morphSVG: C_FINAL, ease: 'power1.inOut' }, 'revelar')
        // Aparece «¡Mensaje listo!»
        .to('.bw-listo', { x: 0, duration: 0.5 }, 'revelar')
        .to('.bw-mascara', { attr: { x: -20 }, duration: 0.5, ease: 'power1.inOut' }, 'revelar')
        .to('.bw-avion', { x: `-=${DESPLAZAMIENTO}`, duration: 0.5, ease: 'power1.inOut' }, 'revelar')
        // El avión aterriza convertido en check
        .to('.bw-avion-forma', { duration: 0.43, morphSVG: CHECK }, 'inicio+=0.77')
        .to('.bw-texto', { duration: 0.6, scale: 0, transformOrigin: '50% 50%' }, 'inicio')
        // Estela del vuelo
        .to('.bw-ruta', { drawSVG: '80% 100%', duration: 0.7, ease: 'power1.inOut' }, 'inicio+=0.3')
        .to('.bw-ruta', { drawSVG: '100% 100%', duration: 0.2, ease: 'power1.inOut' }, 'inicio+=1')
        .to(
          '.bw-avion',
          {
            duration: 1,
            ease: 'power1.inOut',
            immediateRender: true,
            motionPath: {
              path: rutaRef.current!,
              align: rutaRef.current!,
              alignOrigin: [0.5, 0.5],
              autoRotate: 90,
            },
          },
          'inicio',
        )
        // Blanco sobre el botón, verde en el aire, blanco de nuevo sobre el círculo
        .to('.bw-avion-forma', { duration: 0.15, attr: { fill: VERDE_VIVO } }, 'inicio')
        .to('.bw-avion-forma', { duration: 0.15, attr: { fill: '#ffffff' } }, 'inicio+=0.77');

      tlRef.current = tl;
    }, svgRef);

    return () => {
      window.clearTimeout(esperaRef.current);
      window.clearTimeout(avisoRef.current);
      ctx.revert();
    };
  }, []);

  const presionar = () => {
    if (svgRef.current) gsap.to(svgRef.current.querySelector('.bw-grupo'), { duration: 0.1, scale: 0.94, transformOrigin: '50% 50%' });
  };
  const soltar = () => {
    if (svgRef.current) gsap.to(svgRef.current.querySelector('.bw-grupo'), { duration: 0.2, scale: 1, transformOrigin: '50% 50%' });
  };

  const enviar = () => {
    soltar();
    const url = obtenerUrl();
    if (!url) return;

    const abrir = () => window.open(url, '_blank', 'noopener,noreferrer');

    const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (sinMovimiento || !tlRef.current) {
      abrir();
      alAbrir?.();
      return;
    }

    tlRef.current.restart();
    window.clearTimeout(esperaRef.current);
    window.clearTimeout(avisoRef.current);
    // WhatsApp se abre en pleno vuelo; el aviso del formulario aparece cuando
    // la animación termina, para que no empuje el botón mientras se mueve.
    esperaRef.current = window.setTimeout(abrir, 750);
    avisoRef.current = window.setTimeout(() => alAbrir?.(), 1800);
  };

  return (
    <button
      type="button"
      onClick={enviar}
      onPointerDown={presionar}
      onPointerLeave={soltar}
      aria-label="Enviar por WhatsApp"
      className={cn(
        'group relative block h-[52px] w-full overflow-visible rounded-full',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2',
        className,
      )}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 640 120"
        className="pointer-events-none h-full w-full overflow-visible"
        aria-hidden="true"
        focusable="false"
      >
        {/* Estela del avión */}
        <path
          ref={rutaRef}
          className="bw-ruta"
          d={RUTA}
          fill="none"
          stroke={VERDE_VIVO}
          strokeWidth="4"
          strokeLinecap="round"
          style={{ strokeDasharray: '0px 999999px' }}
        />

        {/* Estado final: «¡Mensaje listo!» */}
        <g clipPath="url(#bw-recorte)">
          <g className="bw-listo">
            <path d={PILDORA} fill={VERDE_CLARO} stroke={VERDE_VIVO} strokeOpacity="0.55" strokeWidth="2" />
            <text x="372" y="74" textAnchor="middle" fill={VERDE} fontSize="40" fontWeight="800">
              ¡Mensaje listo!
            </text>
          </g>
        </g>

        {/* Botón */}
        <g className="bw-grupo">
          <path className="bw-base transition-[fill] duration-200 group-hover:fill-[#0B6A5F]" d={PILDORA} fill={VERDE} />
          <text className="bw-texto" x="372" y="73" textAnchor="middle" fill="#ffffff" fontSize="38" fontWeight="800" letterSpacing="0.5">
            Enviar por WhatsApp
          </text>
          <g className="bw-avion" transform="translate(66 60) rotate(35)">
            <path className="bw-avion-forma" d={AVION} fill="#ffffff" />
          </g>
        </g>

        <defs>
          <clipPath id="bw-recorte">
            <rect className="bw-mascara" x="320" y="-10" width="700" height="140" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

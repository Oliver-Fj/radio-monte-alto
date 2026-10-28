'use client';

import { useState } from 'react';
import BotonEnviarWhatsApp from '@/components/molecules/BotonEnviarWhatsApp';
import { useAvisoSalida } from '@/lib/hooks/useAvisoSalida';
import { AlertCircle, CheckCircle, HeartHandshake, Loader2, Lock, Send } from 'lucide-react';

const WHATSAPP = '51985796588';
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

const MOTIVOS: Record<string, string> = {
  salud: 'Salud y sanidad',
  familia: 'Familia y hogar',
  trabajo: 'Trabajo y provisión',
  espiritual: 'Vida espiritual',
  duelo: 'Pérdida o duelo',
  gratitud: 'Acción de gracias',
  otro: 'Otro motivo',
};

type Estado = 'inactivo' | 'enviando' | 'correo-ok' | 'whatsapp-ok' | 'error';

const INICIAL = { nombre: '', contacto: '', motivo: '', peticion: '', privada: false, alAire: false };

/**
 * Formulario de peticiones de oración.
 *
 * Se envía por correo (Web3Forms, sin servidor propio) o por WhatsApp. Incluye
 * dos casillas que importan mucho aquí: si la petición es reservada solo para
 * el equipo pastoral, y si la persona autoriza que se mencione al aire.
 */
export default function PeticionOracionForm() {
  const [datos, setDatos] = useState(INICIAL);
  const [estado, setEstado] = useState<Estado>('inactivo');
  const [detalleError, setDetalleError] = useState('');

  const hayCorreo = WEB3FORMS_KEY.length > 0;
  useAvisoSalida(
    estado !== 'correo-ok' &&
      [datos.nombre, datos.contacto, datos.peticion].some((v) => v.trim() !== ''),
  );

  const cambiar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const valor = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setDatos((previo) => ({ ...previo, [name]: valor }));
    if (estado === 'error') setEstado('inactivo');
  };

  const resumen = () =>
    [
      '*Petición de oración*',
      `Nombre: ${datos.nombre || 'Anónimo'}`,
      datos.contacto && `Contacto: ${datos.contacto}`,
      `Motivo: ${MOTIVOS[datos.motivo] ?? datos.motivo}`,
      datos.privada ? 'Reservada: solo para el equipo pastoral' : null,
      datos.alAire ? 'Autoriza mencionarla al aire' : 'NO autoriza mencionarla al aire',
      '',
      datos.peticion,
    ]
      .filter(Boolean)
      .join('\n');

  const enviarPorCorreo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hayCorreo) return;

    setEstado('enviando');
    setDetalleError('');

    try {
      const respuesta = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Petición de oración — ${MOTIVOS[datos.motivo] ?? 'Sin clasificar'}`,
          from_name: 'Peticiones de oración · Radio Monte Alto',
          nombre: datos.nombre || 'Anónimo',
          contacto: datos.contacto || 'No dejó contacto',
          motivo: MOTIVOS[datos.motivo] ?? datos.motivo,
          peticion: datos.peticion,
          reservada: datos.privada ? 'Sí, solo equipo pastoral' : 'No',
          autoriza_al_aire: datos.alAire ? 'Sí' : 'No',
        }),
      });

      const resultado = await respuesta.json();
      if (!respuesta.ok || !resultado.success) {
        throw new Error(resultado.message || 'El servicio de correo no aceptó la petición.');
      }

      setEstado('correo-ok');
      setDatos(INICIAL);
    } catch (error) {
      setEstado('error');
      setDetalleError(error instanceof Error ? error.message : 'Error desconocido.');
    }
  };

  const urlWhatsApp = (): string | null => {
    if (!datos.peticion.trim()) {
      setEstado('error');
      setDetalleError('Escribe tu petición antes de enviarla.');
      return null;
    }
    if (estado === 'error') setEstado('inactivo');
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(resumen())}`;
  };

  const campo =
    'w-full rounded-xl border-2 border-emerald-100 bg-white px-4 py-3 text-slate-900 transition-[border-color,box-shadow] ' +
    'placeholder:text-slate-400 focus-visible:border-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100';
  const etiqueta = 'mb-2 block text-sm font-semibold text-slate-700';

  return (
    <form onSubmit={enviarPorCorreo} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="peticion-nombre" className={etiqueta}>
            Tu nombre (opcional)
          </label>
          <input
            type="text"
            id="peticion-nombre"
            name="nombre"
            value={datos.nombre}
            onChange={cambiar}
            autoComplete="name"
            className={campo}
            placeholder="Puedes dejarlo en blanco…"
          />
        </div>

        <div>
          <label htmlFor="peticion-contacto" className={etiqueta}>
            Correo o teléfono (opcional)
          </label>
          <input
            type="text"
            id="peticion-contacto"
            name="contacto"
            value={datos.contacto}
            onChange={cambiar}
            autoComplete="email"
            spellCheck={false}
            autoCapitalize="none"
            className={campo}
            placeholder="Ej.: tu@correo.com o +51 999 999 999…"
          />
        </div>
      </div>

      <div>
        <label htmlFor="peticion-motivo" className={etiqueta}>
          Motivo *
        </label>
        <select
          id="peticion-motivo"
          name="motivo"
          value={datos.motivo}
          onChange={cambiar}
          required
          autoComplete="off"
          className={campo}
        >
          <option value="">Elige un motivo</option>
          {Object.entries(MOTIVOS).map(([valor, texto]) => (
            <option key={valor} value={valor}>
              {texto}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="peticion-texto" className={etiqueta}>
          Tu petición *
        </label>
        <textarea
          id="peticion-texto"
          name="peticion"
          value={datos.peticion}
          onChange={cambiar}
          required
          autoComplete="off"
          rows={5}
          className={`${campo} resize-none`}
          placeholder="Cuéntanos con confianza por qué quieres que oremos…"
        />
      </div>

      {/* Consentimientos */}
      <fieldset className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-4">
        <legend className="px-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          Privacidad
        </legend>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="privada"
            checked={datos.privada}
            onChange={cambiar}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-emerald-300 text-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
          />
          <span>
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <Lock className="h-3.5 w-3.5" aria-hidden />
              Reservada
            </span>
            <span className="mt-0.5 block text-slate-500">
              Que la lea únicamente el equipo pastoral.
            </span>
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
          <input
            type="checkbox"
            name="alAire"
            checked={datos.alAire}
            onChange={cambiar}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-emerald-300 text-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
          />
          <span>
            <span className="font-semibold">Pueden mencionarla al aire</span>
            <span className="mt-0.5 block text-slate-500">
              Autorizo que se lea durante el programa de oración. Sin esta casilla, nunca se
              menciona.
            </span>
          </span>
        </label>
      </fieldset>

      {/* Avisos */}
      <div aria-live="polite">
        {(estado === 'correo-ok' || estado === 'whatsapp-ok') && (
          <div
            className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
            role="status"
          >
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-medium">
              {estado === 'correo-ok' ? (
                'Recibimos tu petición. El equipo de intercesión ora por cada una de ellas.'
              ) : (
                <>
                  Se abrió WhatsApp con tu petición lista — solo pulsa enviar. Si no se abrió,{' '}
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(resumen())}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline"
                  >
                    toca aquí
                  </a>
                  .
                </>
              )}
            </p>
          </div>
        )}

        {estado === 'error' && (
          <div
            className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800"
            role="alert"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-medium">
              No se pudo enviar. {detalleError} Revisa tu conexión e inténtalo de nuevo, o usa el botón “Enviar por WhatsApp”.
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {hayCorreo && (
          <button type="submit" className="btn btn-primario btn-bloque" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? (
              <>
                <Loader2 className="h-5 w-5 motion-safe:animate-spin" aria-hidden />
                Enviando…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" aria-hidden />
                Enviar petición
              </>
            )}
          </button>
        )}

        <BotonEnviarWhatsApp
          obtenerUrl={urlWhatsApp}
          alAbrir={() => setEstado('whatsapp-ok')}
          className={hayCorreo ? undefined : 'sm:col-span-2 sm:mx-auto sm:max-w-sm'}
        />
      </div>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <HeartHandshake className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden />
        Tu petición se trata con confidencialidad. Oramos por todas, aunque no respondamos cada una.
      </p>
    </form>
  );
}

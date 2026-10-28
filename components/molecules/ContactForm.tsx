'use client';

import { useState } from 'react';
import BotonEnviarWhatsApp from '@/components/molecules/BotonEnviarWhatsApp';
import { useAvisoSalida } from '@/lib/hooks/useAvisoSalida';
import { AlertCircle, CheckCircle, Loader2, Mail, MessageSquare, Send, User } from 'lucide-react';

const WHATSAPP = '51985796588';

/**
 * Clave pública de Web3Forms (https://web3forms.com).
 * Se obtiene gratis poniendo el correo de la radio: llega un "access key".
 * Guárdala en .env.local y en el workflow como NEXT_PUBLIC_WEB3FORMS_KEY.
 * Si no está configurada, el formulario sigue funcionando por WhatsApp.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

const ASUNTOS: Record<string, string> = {
  'consulta-general': 'Consulta general',
  'pregunta-espiritual': 'Pregunta espiritual',
  oracion: 'Petición de oración',
  programacion: 'Sobre la programación',
  donacion: 'Donaciones y apoyo',
  otro: 'Otro',
};

type Estado = 'inactivo' | 'enviando' | 'correo-ok' | 'whatsapp-ok' | 'error';

const DATOS_INICIALES = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };

export default function ContactForm() {
  const [datos, setDatos] = useState(DATOS_INICIALES);
  const [estado, setEstado] = useState<Estado>('inactivo');
  const [detalleError, setDetalleError] = useState('');

  const hayCorreo = WEB3FORMS_KEY.length > 0;
  useAvisoSalida(
    estado !== 'correo-ok' && Object.values(datos).some((v) => v.trim() !== ''),
  );

  const cambiar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
    if (estado === 'error') setEstado('inactivo');
  };

  const textoPlano = () =>
    [
      `Hola, soy *${datos.nombre}*`,
      `Asunto: ${ASUNTOS[datos.asunto] ?? datos.asunto}`,
      datos.email && `Correo: ${datos.email}`,
      datos.telefono && `Teléfono: ${datos.telefono}`,
      '',
      datos.mensaje,
    ]
      .filter(Boolean)
      .join('\n');

  /** Envío por correo a través de Web3Forms (no necesita servidor propio). */
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
          subject: `Radio Monte Alto — ${ASUNTOS[datos.asunto] ?? 'Mensaje del sitio'}`,
          from_name: 'Web Radio Monte Alto',
          nombre: datos.nombre,
          email: datos.email,
          telefono: datos.telefono || 'No indicado',
          asunto: ASUNTOS[datos.asunto] ?? datos.asunto,
          mensaje: datos.mensaje,
        }),
      });

      const resultado = await respuesta.json();
      if (!respuesta.ok || !resultado.success) {
        throw new Error(resultado.message || 'El servicio de correo no aceptó el mensaje.');
      }

      setEstado('correo-ok');
      setDatos(DATOS_INICIALES);
    } catch (error) {
      setEstado('error');
      setDetalleError(error instanceof Error ? error.message : 'Error desconocido.');
    }
  };

  /** Alternativa inmediata: abre WhatsApp con el mensaje ya redactado. */
  const urlWhatsApp = (): string | null => {
    if (!datos.nombre || !datos.mensaje) {
      setEstado('error');
      setDetalleError('Completa al menos tu nombre y el mensaje.');
      return null;
    }
    if (estado === 'error') setEstado('inactivo');
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(textoPlano())}`;
  };

  const campo =
    'w-full rounded-xl border-2 border-emerald-100 bg-white px-4 py-3 text-slate-900 transition-[border-color,box-shadow] ' +
    'placeholder:text-slate-400 focus-visible:border-emerald-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100';
  const campoConIcono = `${campo} pl-10`;
  const etiqueta = 'mb-2 block text-sm font-semibold text-slate-700';

  return (
    <form onSubmit={enviarPorCorreo} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className={etiqueta}>
          Nombre completo *
        </label>
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500"
            aria-hidden
          />
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={cambiar}
            required
            autoComplete="name"
            className={campoConIcono}
            placeholder="Ej.: Juan Pérez…"
          />
        </div>
      </div>

      {/* Correo y teléfono */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className={etiqueta}>
            Correo electrónico {hayCorreo && '*'}
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500"
              aria-hidden
            />
            <input
              type="email"
              id="email"
              name="email"
              value={datos.email}
              onChange={cambiar}
              required={hayCorreo}
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              autoCapitalize="none"
              className={campoConIcono}
              placeholder="Ej.: tu@correo.com…"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className={etiqueta}>
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={datos.telefono}
            onChange={cambiar}
            autoComplete="tel"
            inputMode="tel"
            className={campo}
            placeholder="Ej.: +51 999 999 999…"
          />
        </div>
      </div>

      {/* Asunto */}
      <div>
        <label htmlFor="asunto" className={etiqueta}>
          Asunto *
        </label>
        <select
          id="asunto"
          name="asunto"
          value={datos.asunto}
          onChange={cambiar}
          required
          autoComplete="off"
          className={campo}
        >
          <option value="">Selecciona un asunto</option>
          {Object.entries(ASUNTOS).map(([valor, texto]) => (
            <option key={valor} value={valor}>
              {texto}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className={etiqueta}>
          Mensaje *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-emerald-500" aria-hidden />
          <textarea
            id="mensaje"
            name="mensaje"
            value={datos.mensaje}
            onChange={cambiar}
            required
            autoComplete="off"
            rows={6}
            className={`${campoConIcono} resize-none`}
            placeholder="Escribe tu mensaje aquí…"
          />
        </div>
      </div>

      {/* Avisos */}
      <div aria-live="polite">
        {estado === 'correo-ok' && (
          <div
            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
            role="status"
          >
            <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-medium">
              Mensaje enviado. Te responderemos al correo que dejaste.
            </p>
          </div>
        )}

        {estado === 'whatsapp-ok' && (
          <div
            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800"
            role="status"
          >
            <CheckCircle className="h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm font-medium">
              Se abrió WhatsApp con tu mensaje listo — solo pulsa enviar. Si no se abrió,{' '}
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(textoPlano())}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                toca aquí
              </a>
              .
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

      {/* Acciones */}
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
                Enviar por correo
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

      <p className="text-center text-xs text-slate-500">
        * Campos obligatorios. Tu información será tratada con confidencialidad.
      </p>
    </form>
  );
}

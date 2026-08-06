'use client';

import { useState } from 'react';
import { Send, CheckCircle, User, Mail, MessageSquare } from 'lucide-react';
import Button from '@/components/atoms/Button';

const WHATSAPP = '51985796588';

const ASUNTOS: Record<string, string> = {
  'consulta-general': 'Consulta general',
  'pregunta-espiritual': 'Pregunta espiritual',
  'oracion': 'Petición de oración',
  'programacion': 'Sobre la programación',
  'donacion': 'Donaciones y apoyo',
  'otro': 'Otro',
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  // El sitio se publica como exportación estática (sin servidor), así que el
  // formulario arma el mensaje y lo entrega directamente por WhatsApp.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = [
      `Hola, soy *${formData.nombre}*`,
      `Asunto: ${ASUNTOS[formData.asunto] ?? formData.asunto}`,
      formData.email && `Correo: ${formData.email}`,
      formData.telefono && `Teléfono: ${formData.telefono}`,
      '',
      formData.mensaje,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer');
    setEnviado(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre completo *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Juan Pérez"
          />
        </div>
      </div>

      {/* Email y Teléfono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo electrónico
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className={inputClass}
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            autoComplete="tel"
            className={`${inputClass} pl-4`}
            placeholder="+51 999 999 999"
          />
        </div>
      </div>

      {/* Asunto */}
      <div>
        <label htmlFor="asunto" className="block text-sm font-semibold text-gray-700 mb-2">
          Asunto *
        </label>
        <select
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          required
          className={`${inputClass} pl-4`}
        >
          <option value="">Selecciona un asunto</option>
          {Object.entries(ASUNTOS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" aria-hidden="true" />
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={6}
            className={`${inputClass} resize-none`}
            placeholder="Escribe tu mensaje aquí…"
          />
        </div>
      </div>

      {/* Confirmación */}
      {enviado && (
        <div className="p-4 rounded-xl flex items-center gap-2 bg-green-50 border border-green-200 text-green-800" role="status">
          <CheckCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">
            Se abrió WhatsApp con tu mensaje listo — solo pulsa enviar. Si no se abrió,{' '}
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              toca aquí
            </a>.
          </p>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send className="w-5 h-5" aria-hidden="true" />
        Enviar por WhatsApp
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Campos obligatorios. Tu información será tratada con confidencialidad.
      </p>
    </form>
  );
}

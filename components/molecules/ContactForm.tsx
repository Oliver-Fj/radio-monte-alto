
'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle, User, Mail, MessageSquare } from 'lucide-react';
import Button from '@/components/atoms/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Gracias por contactarnos! Te responderemos pronto.');
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Ocurrio un error. Intenta de nuevo.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexion. Intenta mas tarde.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre Completo *
        </label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-50 transition-colors text-gray-900 placeholder:text-gray-400"
            placeholder="Juan Perez"
          />
        </div>
      </div>

      {/* Email y Telefono */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Correo Electronico *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-50 transition-colors text-gray-900 placeholder:text-gray-400"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
            Telefono (Opcional)
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-50 transition-colors text-gray-900 placeholder:text-gray-400"
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
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-50 transition-colors text-gray-900"
        >
          <option value="">Selecciona un asunto</option>
          <option value="consulta-general">Consulta General</option>
          <option value="pregunta-espiritual">Pregunta Espiritual</option>
          <option value="oracion">Peticion de Oracion</option>
          <option value="programacion">Sobre Programacion</option>
          <option value="donacion">Donaciones y Apoyo</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje *
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            rows={6}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-50 transition-colors resize-none text-gray-900 placeholder:text-gray-400"
            placeholder="Escribe tu mensaje aqui..."
          />
        </div>
      </div>

      {/* Mensaje de estado */}
      {message && (
        <div className={`p-4 rounded-lg flex items-center gap-2 ${
          status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status === 'success' && <CheckCircle className="w-5 h-5" />}
          <p className="text-sm font-medium">{message}</p>
        </div>
      )}

      {/* Boton de envio */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        * Campos obligatorios. Tu informacion sera tratada con confidencialidad.
      </p>
    </form>
  );
}

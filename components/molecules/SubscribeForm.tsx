'use client';

import { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import Button from '@/components/atoms/Button';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('¡Gracias por suscribirte! Revisa tu correo.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Ocurrió un error. Intenta de nuevo.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Intenta más tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            disabled={status === 'loading'}
            className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none disabled:opacity-50"
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="sm:w-auto w-full"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Suscribirse'
          )}
        </Button>
      </div>
      
      {message && (
        <p className={`mt-3 text-sm flex items-center gap-2 ${
          status === 'success' ? 'text-green-600' : 'text-red-600'
        }`}>
          {status === 'success' && <CheckCircle className="w-4 h-4" />}
          {message}
        </p>
      )}
    </form>
  );
}

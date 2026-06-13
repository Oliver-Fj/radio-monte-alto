import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validar email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // TODO: Aquí integrarías con tu servicio de email
    // Por ejemplo: Mailchimp, SendGrid, etc.
    console.log('Nueva suscripción:', email);

    // Simular guardado exitoso
    return NextResponse.json(
      { message: 'Suscripción exitosa', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en suscripción:', error);
    return NextResponse.json(
      { error: 'Error del servidor' },
      { status: 500 }
    );
  }
}

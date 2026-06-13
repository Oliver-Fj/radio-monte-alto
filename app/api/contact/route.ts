import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, asunto, mensaje } = await request.json();

    // Validar campos requeridos
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben estar completos' },
        { status: 400 }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalido' },
        { status: 400 }
      );
    }

    // TODO: Aqui integras con tu servicio de email
    // Ejemplos: SendGrid, Resend, Nodemailer, etc.
    console.log('Nuevo mensaje de contacto:', {
      nombre,
      email,
      telefono,
      asunto,
      mensaje,
      fecha: new Date().toISOString(),
    });

    // Simulacion de envio exitoso
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente', nombre, email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en contacto:', error);
    return NextResponse.json(
      { error: 'Error del servidor' },
      { status: 500 }
    );
  }
}

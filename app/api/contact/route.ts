import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Andy Goheen <hello@andrewgoheen.com>',
      to: ['andrewtgoheen@gmail.com'],
      replyTo: email,
      subject: `New Project Inquiry: ${name} (${service})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Inquiry from ${name}</h2>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}

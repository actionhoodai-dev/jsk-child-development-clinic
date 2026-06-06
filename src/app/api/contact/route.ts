import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields on server side
    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    // Send email to JSK business email
    const { data, error } = await resend.emails.send({
      from: 'JSK Clinic Website <onboarding@resend.dev>',
      to: ['jskrehab@gmail.com'],
      subject: `New Appointment Request — ${service} — ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0D7377; padding: 24px 30px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Appointment Request</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0; font-size: 14px;">Received from JSK Clinic Website Contact Form</p>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #0A1628; width: 140px; vertical-align: top;">Patient / Parent Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #0A1628; vertical-align: top;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="tel:${phone}" style="color: #0D7377; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #0A1628; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">
                  ${email ? `<a href="mailto:${email}" style="color: #0D7377; text-decoration: none;">${email}</a>` : '<span style="color: #999;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 700; color: #0A1628; vertical-align: top;">Therapy Program</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                  <span style="background-color: #6B2FA0; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${service}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: 700; color: #0A1628; vertical-align: top;">Symptoms / Notes</td>
                <td style="padding: 12px 0; color: #333; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #0A1628; padding: 20px 30px; text-align: center;">
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">
              © ${new Date().getFullYear()} JSK Child Development & Physiotherapy Center | Karaikudi, Tamil Nadu
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

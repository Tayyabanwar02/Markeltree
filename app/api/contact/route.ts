import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, comment } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'info@markeltree.com',      // replace with your email
      pass: 'zqit rlby qcwf anaz',         // use App Password (not your Gmail password)
    },
  });

  const mailOptions = {
    from: email,
    to: 'info@markeltree.com',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/>${comment}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to send email', error }, { status: 500 });
  }
}

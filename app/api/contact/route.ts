// @ts-ignore
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hamzahamani2004@gmail.com",
    pass: process.env.mail_password, // Replace with your Gmail App Password
  },
});

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, subject, message } = await req.json();

    const mailOptions = {
      from: "hamzahamani2004@gmail.com",
      to: "hamzahamani2004@gmail.com",
      subject: `Contact Form: ${subject}`,
      text: `
New message from your website contact form:

Full Name: ${fullName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

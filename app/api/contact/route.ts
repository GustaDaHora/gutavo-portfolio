// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail", // or "hotmail", etc.
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Contact Form: ${subject}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }
}

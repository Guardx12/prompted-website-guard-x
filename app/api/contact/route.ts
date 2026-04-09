import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    console.log("[v0] Contact form - Attempting to send email with form data:", formData)

    const transporter = nodemailer.createTransporter({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: "info@guardxnetwork.com",
        pass: "Bigla1212!",
      },
      tls: {
        ciphers: "SSLv3", // Add specific cipher for Outlook compatibility
        rejectUnauthorized: false,
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    })

    console.log("[v0] Testing SMTP connection...")
    try {
      await transporter.verify()
      console.log("[v0] SMTP connection successful")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed:", verifyError)
      return NextResponse.json(
        {
          success: false,
          error: "SMTP connection failed",
          details: verifyError.message,
        },
        { status: 500 },
      )
    }

    const mailOptions = {
      from: "info@guardxnetwork.com",
      to: "info@guardxnetwork.com",
      subject: `Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Business Name:</strong> ${formData.businessName || "Not provided"}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="background-color: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${formData.message}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the GuardX contact form.</p>
            <p>Submission time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    console.log("[v0] Sending contact form email...")
    const result = await transporter.sendMail(mailOptions)
    console.log("[v0] Contact form email sent successfully:", result.messageId)

    return NextResponse.json({ success: true, messageId: result.messageId })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    console.error("[v0] Error name:", error.name)
    console.error("[v0] Error message:", error.message)
    console.error("[v0] Error code:", error.code)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send contact form email",
        details: error.message,
        code: error.code,
      },
      { status: 500 },
    )
  }
}

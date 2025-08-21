import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    console.log("[v0] Attempting to send email with form data:", formData)

    const transporter = nodemailer.createTransporter({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "info@guardxnetwork.com",
        pass: "Bigla1212!",
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },
      debug: true, // Enable debug mode
      logger: true, // Enable logging
    })

    console.log("[v0] Testing SMTP connection...")
    try {
      await transporter.verify()
      console.log("[v0] SMTP connection successful")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed:", verifyError)
    }

    const mailOptions = {
      from: "info@guardxnetwork.com",
      to: "info@guardxnetwork.com",
      subject: "New Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
            <p><strong>Email Address:</strong> ${formData.email}</p>
            <p><strong>Phone Number:</strong> ${formData.phone || "Not provided"}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Service Details</h3>
            <p><strong>Plan Selected:</strong> ${formData.planSelected}</p>
            <p><strong>Number of Locations:</strong> ${formData.numberOfLocations}</p>
          </div>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Monitoring Requirements</h3>
            <p><strong>Keywords / Brand Names to Monitor:</strong></p>
            <p style="background-color: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${formData.keywords}</p>
            
            ${
              formData.notes
                ? `
              <p><strong>Notes or Special Instructions:</strong></p>
              <p style="background-color: white; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${formData.notes}</p>
            `
                : ""
            }
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the GuardX onboarding form.</p>
            <p>Submission time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    }

    console.log("[v0] Sending email...")
    const result = await transporter.sendMail(mailOptions)
    console.log("[v0] Email sent successfully:", result.messageId)

    return NextResponse.json({ success: true, messageId: result.messageId })
  } catch (error) {
    console.error("[v0] Full error object:", error)
    console.error("[v0] Error name:", error.name)
    console.error("[v0] Error message:", error.message)
    console.error("[v0] Error code:", error.code)
    console.error("[v0] Error response:", error.response)

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message,
        code: error.code,
      },
      { status: 500 },
    )
  }
}

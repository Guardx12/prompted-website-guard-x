import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const transporter = nodemailer.createTransporter({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.verify()

    const emailContent = `
New GuardX Onboarding Submission

Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Plan Selected: ${formData.planSelected}
Number of Locations: ${formData.numberOfLocations}
Keywords / Brand Names to Monitor: ${formData.keywords}
Notes / Special Instructions: ${formData.notes || "None"}

Submitted at: ${new Date().toLocaleString()}
IP Address: ${request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "Unknown"}
    `

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@guardxnetwork.com",
      subject: `New GuardX Onboarding - ${formData.companyName}`,
      text: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

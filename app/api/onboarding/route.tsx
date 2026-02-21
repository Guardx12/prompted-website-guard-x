import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

const submissions = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxSubmissions = 3

  if (!submissions.has(ip)) {
    submissions.set(ip, [])
  }

  const ipSubmissions = submissions.get(ip)!
  // Remove old submissions outside the window
  const recentSubmissions = ipSubmissions.filter((time) => now - time < windowMs)
  submissions.set(ip, recentSubmissions)

  return recentSubmissions.length >= maxSubmissions
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required fields validation
  if (!data.fullName?.trim()) errors.push("Full name is required")
  if (!data.companyName?.trim()) errors.push("Company name is required")
  if (!data.companyWebsite?.trim()) errors.push("Company website is required")
  if (!data.email?.trim()) errors.push("Email is required")
  if (!data.keywords?.trim()) errors.push("Keywords are required")
  if (!data.numberOfLocations) errors.push("Number of locations is required")

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Invalid email format")
  }

  // Basic spam detection
  const spamKeywords = ["viagra", "casino", "lottery", "winner", "congratulations", "click here", "free money"]
  const textToCheck = `${data.fullName} ${data.companyName} ${data.keywords} ${data.notes}`.toLowerCase()

  if (spamKeywords.some((keyword) => textToCheck.includes(keyword))) {
    errors.push("Submission contains prohibited content")
  }

  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try again later." },
        { status: 429 },
      )
    }

    const formData = await request.json()

    const validation = validateFormData(formData)
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validation.errors },
        { status: 400 },
      )
    }

    console.log("[v0] Processing valid form submission from IP:", ip)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-mail.outlook.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.SMTP_USER || "info@guardxnetwork.com",
        pass: process.env.SMTP_PASSWORD || "Bigla1212!!!", // Using provided password
      },
      tls: {
        ciphers: "SSLv3",
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
          error: "Email service temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      )
    }

    const mailOptions = {
      from: process.env.SMTP_USER || "info@guardxnetwork.com",
      to: "info@guardxnetwork.com",
      subject: `New GuardX Onboarding - ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
            New GuardX Onboarding Submission
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
            <p>This email was sent from the GuardX onboarding form at guardxnetwork.com</p>
            <p>Submission time: ${new Date().toLocaleString()}</p>
            <p>Client IP: ${ip}</p>
          </div>
        </div>
      `,
    }

    console.log("[v0] Sending email...")
    const result = await transporter.sendMail(mailOptions)
    console.log("[v0] Email sent successfully:", result.messageId)

    const now = Date.now()
    if (!submissions.has(ip)) {
      submissions.set(ip, [])
    }
    submissions.get(ip)!.push(now)

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: "Your submission has been received successfully!",
    })
  } catch (error) {
    console.error("[v0] Email sending error:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Unable to process your submission at this time. Please try again later or contact us directly.",
      },
      { status: 500 },
    )
  }
}

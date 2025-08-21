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
  const recentSubmissions = ipSubmissions.filter((time) => now - time < windowMs)
  submissions.set(ip, recentSubmissions)

  return recentSubmissions.length >= maxSubmissions
}

function validateFormData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.fullName?.trim()) errors.push("Full name is required")
  if (!data.companyName?.trim()) errors.push("Company name is required")
  if (!data.companyWebsite?.trim()) errors.push("Company website is required")
  if (!data.email?.trim()) errors.push("Email is required")
  if (!data.keywords?.trim()) errors.push("Keywords are required")
  if (!data.numberOfLocations) errors.push("Number of locations is required")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push("Invalid email format")
  }

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.office365.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    await transporter.verify()

    const mailOptions = {
      from: `"GuardX Onboarding" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New GuardX Onboarding - ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">New GuardX Onboarding Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Information</h3>
            <p><strong>Full Name:</strong> ${formData.fullName}</p>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Service Details</h3>

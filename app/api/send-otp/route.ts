import { type NextRequest, NextResponse } from "next/server"
import { generateOTP, storeOTP } from "@/lib/otp"
import { sendOTPEmail, createEmailTransporter } from "@/lib/email"

const otpRequests = new Map<string, number[]>()

function isOTPRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 5 * 60 * 1000 // 5 minutes
  const maxRequests = 3

  if (!otpRequests.has(ip)) {
    otpRequests.set(ip, [])
  }

  const ipRequests = otpRequests.get(ip)!
  const recentRequests = ipRequests.filter((time) => now - time < windowMs)
  otpRequests.set(ip, recentRequests)

  return recentRequests.length >= maxRequests
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

  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    if (isOTPRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many verification requests. Please try again later." },
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

    console.log("[v0] Generating OTP for email:", formData.email)

    // Test email connection first
    const transporter = createEmailTransporter()
    try {
      await transporter.verify()
      console.log("[v0] SMTP connection verified for OTP")
    } catch (verifyError) {
      console.error("[v0] SMTP verification failed for OTP:", verifyError)
      return NextResponse.json(
        { success: false, error: "Email service temporarily unavailable. Please try again later." },
        { status: 503 },
      )
    }

    const otpCode = generateOTP()
    const sessionId = storeOTP(formData.email, otpCode, formData)

    console.log("[v0] Sending OTP email to:", formData.email)
    await sendOTPEmail(formData.email, otpCode, formData.companyName)
    console.log("[v0] OTP email sent successfully")

    // Track the request
    const now = Date.now()
    if (!otpRequests.has(ip)) {
      otpRequests.set(ip, [])
    }
    otpRequests.get(ip)!.push(now)

    return NextResponse.json({
      success: true,
      sessionId,
      message: "Verification code sent to your email address",
    })
  } catch (error) {
    console.error("[v0] OTP sending error:", error)
    return NextResponse.json(
      { success: false, error: "Unable to send verification code. Please try again later." },
      { status: 500 },
    )
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { verifyOTP } from "@/lib/otp"

const verificationAttempts = new Map<string, number[]>()

function isVerificationRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxAttempts = 10

  if (!verificationAttempts.has(ip)) {
    verificationAttempts.set(ip, [])
  }

  const ipAttempts = verificationAttempts.get(ip)!
  const recentAttempts = ipAttempts.filter((time) => now - time < windowMs)
  verificationAttempts.set(ip, recentAttempts)

  return recentAttempts.length >= maxAttempts
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    if (isVerificationRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many verification attempts. Please try again later." },
        { status: 429 },
      )
    }

    const { sessionId, code } = await request.json()

    if (!sessionId || !code) {
      return NextResponse.json(
        { success: false, error: "Session ID and verification code are required" },
        { status: 400 },
      )
    }

    console.log("[v0] Verifying OTP for session:", sessionId)

    const verification = verifyOTP(sessionId, code.trim())

    // Track the attempt
    const now = Date.now()
    if (!verificationAttempts.has(ip)) {
      verificationAttempts.set(ip, [])
    }
    verificationAttempts.get(ip)!.push(now)

    if (!verification.success) {
      console.log("[v0] OTP verification failed:", verification.error)
      return NextResponse.json({ success: false, error: verification.error }, { status: 400 })
    }

    console.log("[v0] OTP verified successfully")

    return NextResponse.json({
      success: true,
      message: "Email verified successfully! Please proceed to select your plan.",
    })
  } catch (error) {
    console.error("[v0] OTP verification error:", error)
    return NextResponse.json({ success: false, error: "Unable to verify code. Please try again." }, { status: 500 })
  }
}

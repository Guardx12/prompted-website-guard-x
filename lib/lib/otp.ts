interface OTPData {
  code: string
  email: string
  formData: any
  expiresAt: number
  attempts: number
}

// In-memory storage for OTP codes (in production, use Redis or database)
const otpStorage = new Map<string, OTPData>()

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export function storeOTP(email: string, code: string, formData: any): string {
  const sessionId = crypto.randomUUID()
  const expiresAt = Date.now() + 10 * 60 * 1000 // 10 minutes

  otpStorage.set(sessionId, {
    code,
    email,
    formData,
    expiresAt,
    attempts: 0,
  })

  // Clean up expired OTPs
  cleanupExpiredOTPs()

  return sessionId
}

export function verifyOTP(
  sessionId: string,
  inputCode: string,
): {
  success: boolean
  error?: string
  formData?: any
} {
  const otpData = otpStorage.get(sessionId)

  if (!otpData) {
    return { success: false, error: "Invalid or expired verification session" }
  }

  if (Date.now() > otpData.expiresAt) {
    otpStorage.delete(sessionId)
    return { success: false, error: "Verification code has expired" }
  }

  if (otpData.attempts >= 3) {
    otpStorage.delete(sessionId)
    return { success: false, error: "Too many failed attempts" }
  }

  if (otpData.code !== inputCode) {
    otpData.attempts++
    return { success: false, error: "Invalid verification code" }
  }

  const formData = otpData.formData
  otpStorage.delete(sessionId)
  return { success: true, formData }
}

function cleanupExpiredOTPs() {
  const now = Date.now()
  for (const [sessionId, otpData] of otpStorage.entries()) {
    if (now > otpData.expiresAt) {
      otpStorage.delete(sessionId)
    }
  }
}

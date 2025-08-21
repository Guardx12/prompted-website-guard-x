import nodemailer from "nodemailer"

export function createEmailTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

export async function sendOTPEmail(email: string, code: string, companyName: string) {
  const transporter = createEmailTransporter()

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "GuardX - Email Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Email Verification Required</h2>
        <p>Hello ${companyName},</p>
        <p>To complete your GuardX onboarding, please enter the following verification code:</p>
        <div style="background: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0;">
          <h1 style="color: #007bff; font-size: 32px; margin: 0; letter-spacing: 5px;">${code}</h1>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this verification, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">GuardX Network Protection Services</p>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendOnboardingNotification(formData: any, clientIP: string) {
  const transporter = createEmailTransporter()

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "info@guardxnetwork.com",
    subject: "New Onboarding Submission - Email Verified",
    html: `
      <h2>New Verified Onboarding Submission</h2>
      <p><strong>Email Verification:</strong> ✅ Verified via MFA</p>
      <p><strong>Client IP:</strong> ${clientIP}</p>
      
      <h3>Business Information:</h3>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>Contact Name:</strong> ${formData.contactName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Website:</strong> ${formData.website}</p>
      <p><strong>Industry:</strong> ${formData.industry}</p>
      <p><strong>Company Size:</strong> ${formData.companySize}</p>
      <p><strong>Current Challenges:</strong> ${formData.challenges}</p>
      <p><strong>Goals:</strong> ${formData.goals}</p>
      
      <p><em>This submission was verified through our MFA system.</em></p>
    `,
  }

  await transporter.sendMail(mailOptions)
}

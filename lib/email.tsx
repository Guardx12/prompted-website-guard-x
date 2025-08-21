import nodemailer from "nodemailer"

export function createEmailTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp-mail.outlook.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  })
}

export async function sendOTPEmail(email: string, code: string, companyName: string) {
  const transporter = createEmailTransporter()

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "GuardX Email Verification Code",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #d4af37; margin: 0;">GuardX</h1>
          <p style="color: #666; margin: 5px 0;">Reputation Management & Protection</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 30px; border-radius: 8px; text-align: center;">
          <h2 style="color: #333; margin-bottom: 20px;">Email Verification Required</h2>
          <p style="color: #666; margin-bottom: 30px;">
            Hello ${companyName},<br>
            Please use the verification code below to complete your GuardX onboarding:
          </p>
          
          <div style="background-color: #000; color: #d4af37; font-size: 32px; font-weight: bold; padding: 20px; border-radius: 8px; letter-spacing: 8px; margin: 20px 0;">
            ${code}
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This code will expire in 10 minutes.<br>
            If you didn't request this verification, please ignore this email.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; color: #999; font-size: 12px;">
          <p>This email was sent from GuardX onboarding system</p>
        </div>
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
    subject: `New GuardX Onboarding - ${formData.companyName} (Email Verified)`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
          New GuardX Onboarding Submission (Email Verified ✓)
        </h2>
        
        <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #d4af37;">
          <p style="margin: 0; color: #333; font-weight: bold;">✓ Email Address Verified via MFA</p>
          <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">This submission has been authenticated through our multi-factor verification process.</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Full Name:</strong> ${formData.fullName}</p>
          <p><strong>Company Name:</strong> ${formData.companyName}</p>
          <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
          <p><strong>Email Address:</strong> ${formData.email} ✓ <span style="color: #28a745;">Verified</span></p>
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
          <p>Client IP: ${clientIP}</p>
          <p><strong>Security:</strong> Email verified through MFA process</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

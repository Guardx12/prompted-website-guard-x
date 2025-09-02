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
            Please use the verification code below to complete your GuardX setup:
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
          <p>This email was sent from GuardX system</p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

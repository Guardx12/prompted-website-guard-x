import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@guardxnetwork.com",
        pass: "Bigla1212!",
      },
    })

    await transporter.sendMail({
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
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}

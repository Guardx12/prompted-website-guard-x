import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const businessEmailContent = `
      <h2>New Onboarding Form Submission</h2>
      <p><strong>Full Name:</strong> ${formData.fullName}</p>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>Company Website:</strong> ${formData.companyWebsite}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Plan Selected:</strong> ${formData.planSelected}</p>
      <p><strong>Number of Locations:</strong> ${formData.numberOfLocations}</p>
      <p><strong>Keywords/Brand Names:</strong> ${formData.keywords}</p>
      <p><strong>Notes:</strong> ${formData.notes || "None provided"}</p>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `

    const userEmailContent = `
      <h2>Welcome to GuardX!</h2>
      <p>Dear ${formData.fullName},</p>
      <p>Thank you for onboarding with GuardX. Our team will now set up your account and be in touch shortly.</p>
      
      <h3>Your submission details:</h3>
      <ul>
        <li><strong>Company:</strong> ${formData.companyName}</li>
        <li><strong>Plan:</strong> ${formData.planSelected}</li>
        <li><strong>Locations:</strong> ${formData.numberOfLocations}</li>
      </ul>
      
      <p>We'll contact you at ${formData.email} within 24 hours to complete your setup.</p>
      
      <p>Best regards,<br>The GuardX Team</p>
    `

    try {
      // Send email to business
      await resend.emails.send({
        from: "GuardX Onboarding <noreply@guardxnetwork.com>",
        to: ["info@guardxnetwork.com"],
        subject: `New Onboarding: ${formData.companyName}`,
        html: businessEmailContent,
      })

      // Send confirmation email to user
      await resend.emails.send({
        from: "GuardX Team <noreply@guardxnetwork.com>",
        to: [formData.email],
        subject: "Welcome to GuardX - Account Setup in Progress",
        html: userEmailContent,
      })

      return NextResponse.json({
        success: true,
        message: "Form submitted successfully and emails sent",
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return NextResponse.json(
        {
          success: false,
          message: "Form submitted but email delivery failed",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form",
      },
      { status: 500 },
    )
  }
}

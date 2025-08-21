import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create email content for business
    const businessEmailContent = `
New Onboarding Form Submission:

Full Name: ${formData.fullName}
Company Name: ${formData.companyName}
Company Website: ${formData.companyWebsite}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Plan Selected: ${formData.planSelected}
Number of Locations: ${formData.numberOfLocations}
Keywords/Brand Names: ${formData.keywords}
Notes: ${formData.notes || "None provided"}

Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Create confirmation email content for user
    const userEmailContent = `
Dear ${formData.fullName},

Thank you for onboarding with GuardX. Our team will now set up your account and be in touch shortly.

Your submission details:
- Company: ${formData.companyName}
- Plan: ${formData.planSelected}
- Locations: ${formData.numberOfLocations}

We'll contact you at ${formData.email} within 24 hours to complete your setup.

Best regards,
The GuardX Team
    `.trim()

    // In a real implementation, you would use a service like SendGrid, Resend, or similar
    // For now, we'll simulate the email sending and return success

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Form submission error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit form" }, { status: 500 })
  }
}

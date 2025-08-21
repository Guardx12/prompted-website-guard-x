import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" })
  }

  const { fullName, companyName, companyWebsite, email, phone, planSelected, numberOfLocations, keywords, notes } = req.body

  try {
    // Set up email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    await transporter.sendMail({
      from: `"GuardX Onboarding" <${process.env.SMTP_USER}>`,
      to: "info@guardxnetwork.com",
      subject: `New Onboarding: ${companyName}`,
      html: `
        <h2>New GuardX Onboarding</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Website:</strong> ${companyWebsite}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Plan:</strong> ${planSelected}</p>
        <p><strong>Locations:</strong> ${numberOfLocations}</p>
        <p><strong>Keywords:</strong> ${keywords}</p>
        <p><strong>Notes:</strong> ${notes || "N/A"}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ success: false, message: "Error sending email" })
  }
}

import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

type Data = {
  success: boolean
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" })
  }

  const {
    fullName,
    companyName,
    companyWebsite,
    email,
    phone,
    planSelected,
    numberOfLocations,
    keywords,
    notes,
  } = req.body

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // use TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"GuardX Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Onboarding with GuardX!",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for onboarding with GuardX. Our team will now set up your account and be in touch shortly.</p>
        <p>You should receive a confirmation email at ${email} within the next few minutes.</p>
        <p>Here’s what we received from you:</p>
        <ul>
          <li>Company Name: ${companyName}</li>
          <li>Company Website: ${companyWebsite}</li>
          <li>Plan Selected: ${planSelected}</li>
          <li>Number of Locations: ${numberOfLocations}</li>
          <li>Keywords: ${keywords}</li>
          <li>Notes: ${notes}</li>
        </ul>
        <p>Thanks,<br/>GuardX Team</p>
      `,
    })

    // Send notification email to your business email
    await transporter.sendMail({
      from: `"GuardX Onboarding" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `New Onboarding Submission: ${companyName}`,
      html: `
        <p>New onboarding submission received:</p>
        <ul>
          <li>Full Name: ${fullName}</li>
          <li>Company Name: ${companyName}</li>
          <li>Company Website: ${companyWebsite}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Plan Selected: ${planSelected}</li>
          <li>Number of Locations: ${numberOfLocations}</li>
          <li>Keywords: ${keywords}</li>
          <li>Notes: ${notes}</li>
        </ul>

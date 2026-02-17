import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    console.log("Sending email to info@guardxnetwork.com");

    await resend.emails.send({
      from: "Website Form <onboarding@resend.dev>",
      to: "info@guardxnetwork.com",
      subject: "New Form Submission",
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });

    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}

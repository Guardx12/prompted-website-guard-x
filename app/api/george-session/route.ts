export const runtime = "nodejs"

const GEORGE_INSTRUCTIONS = `You are George, the friendly AI receptionist built into GuardX websites.

Speak directly to the business owner you are talking to. Use plain English, not jargon.

Your job is to help them understand that GuardX builds modern, fast business websites with you built in as the AI receptionist.

What you do:
- answer visitor questions
- explain services and pricing clearly
- keep people engaged instead of letting them quietly leave the site
- help turn more website visitors into genuine enquiries
- save the owner time by handling the same early questions customers ask again and again
- collect details and pass serious enquiries through to the GuardX team

GuardX websites are typically around £99 per month depending on the setup. That includes the website, hosting, and you as the AI receptionist built into the site.

GuardX is best for trades, local service businesses, carpet and flooring shops, scaffolders, builders, contractors, and similar businesses that get repetitive questions.

GuardX does not focus on large ecommerce stores, custom software systems, or complex booking platforms.

If someone asks whether £99 is expensive, calmly explain that they are not just getting a website that sits there. They are getting a professional website plus an assistant that can answer questions, keep visitors engaged, and help turn more of that traffic into enquiries. If it helps bring in one extra customer, it often pays for itself.

Keep your answers conversational, warm, upbeat, and concise. Sound like a sharp, cheerful receptionist rather than a pushy salesperson.

Use little phrases like:
- That's a really good question.
- A lot of business owners ask that.
- Out of curiosity...

Ask natural questions back when helpful, such as:
- What type of business do you run?
- Do you currently have a website?
- Do customers often ask the same questions about your services?
- What would you want a website assistant like me to help with most?

If the user gives their name, use it naturally later.

When someone is clearly interested, invite them to leave their details so GuardX can follow up.

Important lead handling rule:
- collect their name
- collect their business name
- collect either their phone number or their email address
- once you have those, read the details back clearly
- then ask them to confirm the details are correct
- only after they confirm should the enquiry be treated as complete
- do not act as though the lead is complete before that confirmation step.`

const SESSION_CONFIG = {
  session: {
    type: "realtime",
    model: "gpt-realtime",
    output_modalities: ["audio"],
    instructions: GEORGE_INSTRUCTIONS,
    audio: {
      input: {
        transcription: {
          model: "gpt-4o-mini-transcribe",
          language: "en",
        },
        turn_detection: {
          type: "semantic_vad",
          eagerness: "high",
          create_response: true,
          interrupt_response: true,
        },
      },
      output: {
        voice: "cedar",
        speed: 1.1,
      },
    },
  },
} as const

export async function GET() {
  try {
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return Response.json({ error: "Missing OpenAI API key." }, { status: 500 })
    }

    const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SESSION_CONFIG),
      cache: "no-store",
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      console.error("Realtime client secret error", data)
      const message =
        typeof data?.error?.message === "string"
          ? data.error.message
          : "Could not create a secure live voice session."

      return Response.json({ error: message }, { status: response.status })
    }

    const value = data?.client_secret?.value ?? data?.value

    if (typeof value !== "string" || !value) {
      console.error("Realtime client secret missing value", data)
      return Response.json({ error: "Live voice token was missing from OpenAI." }, { status: 500 })
    }

    return Response.json(
      {
        value,
        expires_at: data?.client_secret?.expires_at ?? data?.expires_at ?? null,
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    )
  } catch (error) {
    console.error("Realtime client secret route error", error)
    return Response.json({ error: "Could not start live voice right now." }, { status: 500 })
  }
}

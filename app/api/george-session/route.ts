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

When someone is clearly interested, invite them to leave their details so GuardX can follow up.`

export async function POST(request: Request) {
  try {
    const sdp = await request.text()
    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return new Response("Missing OpenAI API key.", { status: 500 })
    }

    if (!sdp) {
      return new Response("Missing SDP offer.", { status: 400 })
    }

    const formData = new FormData()
    formData.set("sdp", sdp)
    formData.set(
      "session",
      JSON.stringify({
        type: "realtime",
        model: "gpt-realtime",
        output_modalities: ["audio", "text"],
        instructions: GEORGE_INSTRUCTIONS,
        audio: {
          input: {
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
      }),
    )

    const response = await fetch("https://api.openai.com/v1/realtime/calls", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Realtime session error", errorText)
      return new Response(errorText || "Could not start realtime session.", { status: response.status })
    }

    const answerSdp = await response.text()
    return new Response(answerSdp, {
      status: 200,
      headers: {
        "Content-Type": "application/sdp",
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("Realtime session route error", error)
    return new Response("Could not start realtime session.", { status: 500 })
  }
}

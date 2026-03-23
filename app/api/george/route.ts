import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ChatMessage = {
  role: "assistant" | "user"
  content: string
}

const georgeSystemPrompt = `You are George — a trained digital member of staff for this website.

Your job is to speak to visitors, understand their business, and show them how you help them get more customers, enquiries, and sales.

You are not just answering questions — you guide the conversation toward clear value and action.

Core behaviour:
- Start by understanding the visitor's business and what they want to improve
- Adapt to their type of business (ecommerce, service, garage, attraction, etc.)
- Explain how you would help THEM specifically
- Focus on outcomes: more enquiries, more conversions, better experience
- Keep responses natural, confident, and human (never robotic)

Important rules:
- Do not guess product data, stock, or pricing
- If product data is available, use it; if not, guide instead
- Do not lead with pricing — only discuss it if asked or at the end
- Keep answers concise and conversational (1–3 sentences where possible)

Positioning:
- You turn websites from something people browse into something that actively helps, guides, and converts visitors
- You work 24/7 and act like part of the business team
- You can be trained on any business, services, or products

Conversation goal:
- Move toward a next step (demo, setup, enquiry)
- Ask follow-up questions to keep momentum

Tone:
- Friendly
- Sharp
- Helpful
- Commercially aware
`

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const message = typeof body?.message === "string" ? body.message.trim() : ""
    const history = Array.isArray(body?.history) ? (body.history as ChatMessage[]) : []

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Missing OpenAI API key." }, { status: 500 })
    }

    const messages: Array<{ role: "system" | "assistant" | "user"; content: string }> = [
      { role: "system", content: georgeSystemPrompt },
      ...history
        .filter((item) => item && (item.role === "assistant" || item.role === "user") && typeof item.content === "string")
        .slice(-12)
        .map((item) => ({ role: item.role, content: item.content })),
      { role: "user", content: message },
    ]

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.5,
        max_tokens: 120,
        messages,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("George chat API error", data)
      return NextResponse.json(
        { error: data?.error?.message || "George couldn’t reply properly just now. Please try again in a moment." },
        { status: response.status },
      )
    }

    const reply =
      data?.choices?.[0]?.message?.content?.trim() ||
      "That’s a good question. I’m George, a trained digital guide and member of staff for the website. I help with website directions, directions to your location, and on-site directions, while also helping you get more people through the gate, improve their experience while they’re there, and increase how much they spend on site."

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("George chat error", error)
    return NextResponse.json(
      {
        error: "George couldn’t reply properly just now. Please try again in a moment.",
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ChatMessage = {
  role: "assistant" | "user"
  content: string
}

const georgeSystemPrompt = `You are George.

You are a trained digital member of staff for the website.

Your job is to talk to website visitors, answer their questions, explain how George works, and help guide visitors toward becoming customers.

You speak clearly, naturally, and professionally, like a warm, sharp, upbeat receptionist or sales assistant. You should sound human, helpful, confident, cheerful, easy to talk to, and genuinely conversational rather than robotic. Only ever reply in English. If a visitor uses another language, politely continue in English.

Always answer the visitor's actual question directly first. Then expand only as much as is helpful. Do not dodge questions. Do not give vague generic replies when a direct answer is possible.

Important things you understand:
- George is a trained digital member of staff for business websites.
- GuardX sets George up and trains him on the business.
- George answers questions, explains services, helps deal with repetitive customer conversations, and guides visitors toward becoming real enquiries.
- George saves time by handling the same early questions businesses usually answer again and again.
- George can help create more revenue by keeping more visitors engaged instead of letting them leave the site quietly.
- George can be trained on a business's services, pricing, areas covered, types of jobs, and common customer questions.
- George is £49 per month with no setup fee.

Important pricing rule:
- do not bring up pricing too early
- first explain how George helps and ask about the business where helpful
- only mention the £49 monthly price near the end of the conversation, or earlier if the visitor explicitly asks about price or cost

When people ask what George does, explain it in plain English as a digital member of staff on the website that answers customer questions, explains services, and captures enquiries.

If someone asks whether George saves more time or money, explain that it usually saves time first and money second, with the money benefit coming from better conversion of visitors into enquiries.

If someone asks how George makes a business more money, explain that the value comes from keeping visitors engaged, answering the first questions properly, and helping move more of the existing traffic toward becoming real enquiries.

If a visitor goes off topic, gently guide the conversation back toward George, websites, enquiries, and how businesses benefit. Do not be rude. Just gently steer the conversation back.

Keep replies concise, natural, and useful. Prefer 1 to 3 short sentences unless more detail is clearly needed. Avoid buzzwords like lead qualification or conversion funnels unless the visitor asks for more detail. Prefer natural business language like answering questions, explaining services, saving time, and turning visitors into customers. When it feels natural, end with one sensible next step or question so the conversation keeps moving.`

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
      "That’s a good question. I’m George, a trained digital member of staff for the website, and my job is to answer questions clearly and help visitors understand how I can turn more of your website traffic into real enquiries."

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

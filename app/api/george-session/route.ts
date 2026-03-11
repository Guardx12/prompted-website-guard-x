import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json({ error: "Missing OpenAI API key." }, { status: 500 })
  }

  const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-realtime-preview",
      voice: "cedar",
      instructions: `
You are George, the friendly digital sales assistant built into GuardX websites.

Speak naturally in a cheerful, warm, confident, masculine voice.
Keep answers conversational, concise, and useful.

Your job is to:
- talk to visitors naturally
- explain how GuardX websites turn websites into 24/7 salespeople
- answer questions clearly and quickly
- guide interested visitors toward contacting Luke about getting George on their own website

Never sound robotic. Speak like a helpful human assistant.
`,
      audio: {
        input: {
          noise_reduction: {
            type: "near_field",
          },
          turn_detection: {
            type: "server_vad",
            threshold: 0.5,
            prefix_padding_ms: 300,
            silence_duration_ms: 250,
            create_response: true,
            interrupt_response: true,
          },
        },
      },
    }),
  })

  const data = await response.json()
  return NextResponse.json(data, { status: response.status })
}

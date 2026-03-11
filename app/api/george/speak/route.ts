import OpenAI from "openai"

export const runtime = "nodejs"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const text = typeof body?.text === "string" ? body.text.trim() : ""

    if (!text) {
      return new Response(JSON.stringify({ error: "Text is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const speech = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: "onyx",
      input: text,
      instructions: "Speak in a calm, confident, natural male voice. Sound helpful, professional, and human.",
      format: "mp3",
    })

    const audioBuffer = Buffer.from(await speech.arrayBuffer())

    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    console.error("George speech error", error)
    return new Response(JSON.stringify({ error: "George couldn’t speak just now." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

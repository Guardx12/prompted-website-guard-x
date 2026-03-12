export const runtime = "nodejs"

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

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing OpenAI API key." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        voice: "cedar",
        input: text,
        instructions:
          "Speak in a warm, upbeat, confident, natural British male voice. Sound like a friendly receptionist who is sharp, reassuring, cheerful, and easy to talk to. Keep the pace slightly lively but still clear and professional.",
        speed: 1.12,
        response_format: "mp3",
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("George speech API error", error)
      return new Response(JSON.stringify({ error: "George couldn’t speak just now." }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      })
    }

    const audioBuffer = Buffer.from(await response.arrayBuffer())

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

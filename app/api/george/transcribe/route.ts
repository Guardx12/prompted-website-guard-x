import OpenAI from "openai"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file")

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Audio file is required." }, { status: 400 })
    }

    const transcript = await openai.audio.transcriptions.create({
      file,
      model: "gpt-4o-mini-transcribe",
    })

    return NextResponse.json({ text: transcript.text || "" })
  } catch (error) {
    console.error("George transcription error", error)
    return NextResponse.json({ error: "George couldn’t hear that properly." }, { status: 500 })
  }
}

import { NextResponse } from "next/server"

export const runtime = "nodejs"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const transcript = typeof body?.transcript === "string" ? body.transcript.trim() : ""
    const source = typeof body?.source === "string" ? body.source : "website"

    if (!transcript) {
      return NextResponse.json({ error: "Transcript is required." }, { status: 400 })
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        source,
        transcript,
        subject: "New George conversation transcript",
      }),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => "")
      console.error("George lead Formspree error", errorText)
      return NextResponse.json({ error: "Could not send transcript." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("George lead route error", error)
    return NextResponse.json({ error: "Could not send transcript." }, { status: 500 })
  }
}

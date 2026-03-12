import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const transcript = typeof body?.transcript === "string" ? body.transcript.trim() : ""
    if (!transcript) {
      return NextResponse.json({ error: "Transcript missing." }, { status: 400 })
    }

    const params = new URLSearchParams()
    params.set("source", typeof body?.source === "string" ? body.source : "Meet George live voice")
    params.set("submissionMode", typeof body?.submissionMode === "string" ? body.submissionMode : "message_snapshot")
    params.set("submittedAt", typeof body?.submittedAt === "string" ? body.submittedAt : new Date().toISOString())
    params.set("page", typeof body?.page === "string" ? body.page : "https://guardxnetwork.com/meet-george")
    params.set("userMessageCount", String(body?.userMessageCount ?? ""))
    params.set("transcript", transcript)

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    })

    const text = await response.text()

    if (!response.ok) {
      return NextResponse.json(
        { error: text || `Formspree error ${response.status}` },
        { status: response.status },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not send George transcript." },
      { status: 500 },
    )
  }
}

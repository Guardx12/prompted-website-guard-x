import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

function asString(value: unknown) {
  return typeof value === "string" ? value : ""
}

function asNumberString(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? String(value) : asString(value)
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    let body: Record<string, unknown> = {}

    if (contentType.includes("application/json")) {
      body = (await request.json()) as Record<string, unknown>
    } else {
      const text = await request.text()
      body = text ? (JSON.parse(text) as Record<string, unknown>) : {}
    }

    const form = new URLSearchParams()
    form.set("source", asString(body.source) || "Meet George live conversation")
    form.set("page", asString(body.page))
    form.set("sessionId", asString(body.sessionId))
    form.set("conversationEvent", asString(body.conversationEvent))
    form.set("userMessageCount", asNumberString(body.userMessageCount))
    form.set("name", asString(body.visitorName))
    form.set("surname", asString(body.surname))
    form.set("businessName", asString(body.businessName))
    form.set("email", asString(body.email))
    const email = asString(body.email)
    const shortMessage = asString(body.shortMessage)
    const transcript = asString(body.transcript)

    form.set("message", shortMessage || transcript || "George conversation captured")
    form.set("latestUserMessage", asString(body.latestUserMessage))
    form.set("transcript", transcript)
    form.set("submittedAt", asString(body.submittedAt))
    form.set("_subject", "George conversation update")
    form.set("_replyto", email)
    form.set("_to", "info@guardxnetwork.com")

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: form.toString(),
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
      { error: error instanceof Error ? error.message : "Could not send George conversation." },
      { status: 500 },
    )
  }
}

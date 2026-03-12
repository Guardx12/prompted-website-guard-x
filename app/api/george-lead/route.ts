import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

type GeorgeLeadBody = {
  name?: string
  phone?: string
  email?: string
  businessName?: string
  transcript?: string
  source?: string
  submittedAt?: string
  page?: string
  submissionMode?: string
  userMessageCount?: number
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function buildSummary(body: GeorgeLeadBody) {
  const transcript = typeof body.transcript === "string" ? body.transcript : ""
  const lines = transcript
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)

  const visitorLines = lines
    .filter((line) => line.startsWith("Visitor:"))
    .map((line) => normalizeWhitespace(line.replace(/^Visitor:\s*/, "")))

  const leadDetected = Boolean(body.phone || body.email || body.name)

  let likelyTopic = "General enquiry"
  if (visitorLines.length) {
    const firstUseful = visitorLines.find((line) => line.length >= 12) || visitorLines[0]
    likelyTopic = firstUseful.slice(0, 140)
  }

  const summaryBits = [
    leadDetected ? "Lead details were captured." : "No direct contact details were captured.",
    visitorLines.length ? `Visitor messages: ${visitorLines.length}.` : "Visitor messages were limited.",
  ]

  if (body.businessName) summaryBits.push(`Business mentioned: ${body.businessName}.`)
  if (body.phone) summaryBits.push(`Phone captured: ${body.phone}.`)
  if (body.email) summaryBits.push(`Email captured: ${body.email}.`)

  return {
    leadDetected: leadDetected ? "Yes" : "No",
    likelyTopic,
    summary: summaryBits.join(" "),
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GeorgeLeadBody
    const summary = buildSummary(body)

    const formData = new FormData()
    formData.append("subject", "New George conversation transcript")
    formData.append("source", body.source || "Meet George live voice")
    formData.append("submission_mode", body.submissionMode || "conversation_end")
    formData.append("submitted_at", body.submittedAt || new Date().toISOString())
    formData.append("page", body.page || "https://guardxnetwork.com/meet-george")
    formData.append("lead_detected", summary.leadDetected)
    formData.append("name", body.name || "Not provided")
    formData.append("phone", body.phone || "Not provided")
    formData.append("email", body.email || "Not provided")
    formData.append("business_name", body.businessName || "Not provided")
    formData.append("likely_topic", summary.likelyTopic)
    formData.append("conversation_summary", summary.summary)
    formData.append("user_message_count", String(body.userMessageCount ?? 0))
    formData.append("transcript", body.transcript || "No transcript captured")

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    })

    const text = await response.text()

    if (!response.ok) {
      return NextResponse.json(
        { error: text || `Formspree error ${response.status}` },
        { status: response.status },
      )
    }

    let data: unknown = null
    try {
      data = text ? JSON.parse(text) : null
    } catch {
      data = { ok: true }
    }

    return NextResponse.json({ ok: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not send George transcript." },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"

export const runtime = "nodejs"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

function extractFirstMatch(patterns: RegExp[], text: string) {
  for (const pattern of patterns) {
    const match = text.match(pattern)
    const value = match?.[1]?.trim()
    if (value) return value
  }
  return ""
}

function extractPhone(text: string) {
  const match = text.match(/(?:\+?44\s?7\d{3}|0\d{4}|07\d{3}|\+?\d{1,3})[\d\s()\-]{6,}/)
  return match?.[0]?.trim() ?? ""
}

function extractEmail(text: string) {
  const match = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
  return match?.[0]?.trim() ?? ""
}

function cleanTopic(text: string) {
  return text
    .replace(/^(visitor|george):\s*/i, "")
    .replace(/\b(my name is|i am|i'm|call me on|my number is|my phone number is|my email is)\b.*$/i, "")
    .replace(/\s+/g, " ")
    .trim()
}

function buildConversationSummary(transcript: string) {
  const compact = transcript.replace(/\r/g, "").trim()
  const lines = compact
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)

  const visitorLines = lines.filter((line) => /^visitor:/i.test(line))
  const joinedVisitorText = visitorLines.join("\n")

  const name = extractFirstMatch(
    [
      /\bmy name is\s+([A-Za-z][A-Za-z' -]{1,40})/i,
      /\bi am\s+([A-Za-z][A-Za-z' -]{1,40})/i,
      /\bi'm\s+([A-Za-z][A-Za-z' -]{1,40})/i,
    ],
    joinedVisitorText,
  )
  const phone = extractPhone(joinedVisitorText)
  const email = extractEmail(joinedVisitorText)

  const topicSource = visitorLines
    .map(cleanTopic)
    .filter(Boolean)
    .find((line) => line.length > 12)

  const topic = topicSource ? topicSource.slice(0, 160) : "General website enquiry"
  const leadDetected = Boolean(phone || email)

  const summaryLines = [
    "George Conversation Summary",
    "",
    `Lead Detected: ${leadDetected ? "Yes" : "No"}`,
    `Name: ${name || "Not detected"}`,
    `Phone: ${phone || "Not detected"}`,
    `Email: ${email || "Not detected"}`,
    `Topic: ${topic}`,
    "",
    "Full Transcript:",
    compact,
  ]

  return {
    leadDetected,
    name,
    phone,
    email,
    topic,
    summaryText: summaryLines.join("\n"),
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)
    const transcript = typeof body?.transcript === "string" ? body.transcript.trim() : ""
    const source = typeof body?.source === "string" ? body.source : "website"

    if (!transcript) {
      return NextResponse.json({ error: "Transcript is required." }, { status: 400 })
    }

    const summary = buildConversationSummary(transcript)

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        subject: summary.leadDetected ? "New George lead conversation" : "New George conversation transcript",
        source,
        lead_detected: summary.leadDetected ? "Yes" : "No",
        name: summary.name || "Not detected",
        phone: summary.phone || "Not detected",
        email: summary.email || "Not detected",
        topic: summary.topic,
        summary: summary.summaryText,
        transcript,
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

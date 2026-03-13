import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

function asString(value: unknown) {
  return typeof value === "string" ? value : ""
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    let body: any = {}

    if (contentType.includes("application/json")) {
      body = await request.json()
    } else {
      const text = await request.text()
      body = text ? JSON.parse(text) : {}
    }

    const name = asString(body.name)
    const phone = asString(body.phone)
    const email = asString(body.email)
    const businessName = asString(body.businessName)
    const source = asString(body.source)
    const page = asString(body.page)
    const submittedAt = asString(body.submittedAt)
    const submissionMode = asString(body.submissionMode)
    const userMessageCount = String(body.userMessageCount ?? "")
    const sessionId = asString(body.sessionId)
    const transcript = asString(body.transcript)

    const summary = [
      "New George enquiry",
      `Name: ${name || "Not provided"}`,
      `Business name: ${businessName || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Source: ${source || "Not provided"}`,
      `Page: ${page || "Not provided"}`,
      `Submitted at: ${submittedAt || "Not provided"}`,
      `Submission mode: ${submissionMode || "Not provided"}`,
      `User message count: ${userMessageCount || "Not provided"}`,
      `Session ID: ${sessionId || "Not provided"}`,
      "",
      "Transcript:",
      transcript || "Not provided",
    ].join("\n")

    const form = new URLSearchParams()
    form.set("name", name)
    form.set("phone", phone)
    form.set("email", email)
    form.set("businessName", businessName)
    form.set("source", source)
    form.set("page", page)
    form.set("submittedAt", submittedAt)
    form.set("submissionMode", submissionMode)
    form.set("userMessageCount", userMessageCount)
    form.set("sessionId", sessionId)
    form.set("message", summary)
    form.set("transcript", transcript)
    form.set("_replyto", email)
    form.set("_subject", `George enquiry${businessName ? ` - ${businessName}` : ""}`)

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
      { error: error instanceof Error ? error.message : "Could not send George transcript." },
      { status: 500 },
    )
  }
}

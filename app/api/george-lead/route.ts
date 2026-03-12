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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GeorgeLeadBody

    const formData = new FormData()
    formData.append("_subject", "New George conversation transcript")
    formData.append("name", body.name?.trim() || "")
    formData.append("phone", body.phone?.trim() || "")
    formData.append("email", body.email?.trim() || "")
    formData.append("businessName", body.businessName?.trim() || "")
    formData.append("source", body.source?.trim() || "Meet George")
    formData.append("submittedAt", body.submittedAt?.trim() || new Date().toISOString())
    formData.append("page", body.page?.trim() || "https://guardxnetwork.com/meet-george")
    formData.append("submissionMode", body.submissionMode?.trim() || "conversation")
    formData.append("userMessageCount", String(body.userMessageCount ?? 0))
    formData.append("transcript", body.transcript?.trim() || "")

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
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

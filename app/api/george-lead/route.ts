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

    const form = new URLSearchParams()
    form.set("name", asString(body.name))
    form.set("surname", asString(body.surname))
    form.set("email", asString(body.email))
    form.set("businessName", asString(body.businessName))
    form.set("message", asString(body.message))
    form.set("source", asString(body.source))
    form.set("page", asString(body.page))
    form.set("submittedAt", asString(body.submittedAt))
    form.set("submissionMode", asString(body.submissionMode))
    form.set("_subject", "New George enquiry")

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
      { error: error instanceof Error ? error.message : "Could not send George enquiry." },
      { status: 500 },
    )
  }
}

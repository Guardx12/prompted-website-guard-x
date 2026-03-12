import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
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

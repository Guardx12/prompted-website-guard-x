export const runtime = "nodejs"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const transcript = typeof body?.transcript === "string" ? body.transcript.trim() : ""
    const businessType = typeof body?.businessType === "string" ? body.businessType.trim() : ""
    const messageCount = typeof body?.messageCount === "number" ? body.messageCount : 0

    if (!transcript || messageCount < 2) {
      return new Response(JSON.stringify({ ok: true, skipped: true }), {
        headers: { "Content-Type": "application/json" },
      })
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        subject: "George conversation transcript",
        source: "Meet George page transcript",
        businessType,
        transcript,
      }),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error("George transcript forwarding error", text)
      return new Response(JSON.stringify({ ok: false }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("George transcript route error", error)
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

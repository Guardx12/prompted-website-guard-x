import { promises as fs } from "fs"
import path from "path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"
const STORE_DIR = path.join("/tmp", "guardx-george-transcripts")

type GeorgeLeadBody = {
  sessionId?: string
  action?: "snapshot" | "finalize"
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

type StoredTranscript = {
  sessionId: string
  name: string
  phone: string
  email: string
  businessName: string
  transcript: string
  source: string
  submittedAt: string
  page: string
  submissionMode: string
  userMessageCount: number
  finalized: boolean
  lastUpdatedAt: string
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function safeSessionId(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "")
}

async function ensureStoreDir() {
  await fs.mkdir(STORE_DIR, { recursive: true })
}

async function readSession(sessionId: string): Promise<StoredTranscript | null> {
  try {
    const filePath = path.join(STORE_DIR, `${safeSessionId(sessionId)}.json`)
    const raw = await fs.readFile(filePath, "utf8")
    return JSON.parse(raw) as StoredTranscript
  } catch {
    return null
  }
}

async function writeSession(session: StoredTranscript) {
  await ensureStoreDir()
  const filePath = path.join(STORE_DIR, `${safeSessionId(session.sessionId)}.json`)
  await fs.writeFile(filePath, JSON.stringify(session, null, 2), "utf8")
}

function mergeBody(existing: StoredTranscript | null, body: GeorgeLeadBody, sessionId: string): StoredTranscript {
  return {
    sessionId,
    name: normalize(body.name) || existing?.name || "",
    phone: normalize(body.phone) || existing?.phone || "",
    email: normalize(body.email) || existing?.email || "",
    businessName: normalize(body.businessName) || existing?.businessName || "",
    transcript: normalize(body.transcript) || existing?.transcript || "",
    source: normalize(body.source) || existing?.source || "Meet George live voice",
    submittedAt: normalize(body.submittedAt) || existing?.submittedAt || new Date().toISOString(),
    page: normalize(body.page) || existing?.page || "https://guardxnetwork.com/meet-george",
    submissionMode: normalize(body.submissionMode) || existing?.submissionMode || "snapshot",
    userMessageCount:
      typeof body.userMessageCount === "number"
        ? body.userMessageCount
        : typeof existing?.userMessageCount === "number"
          ? existing.userMessageCount
          : 0,
    finalized: existing?.finalized ?? false,
    lastUpdatedAt: new Date().toISOString(),
  }
}

async function sendToFormspree(session: StoredTranscript) {
  const form = new URLSearchParams()
  form.set("sessionId", session.sessionId)
  form.set("source", session.source)
  form.set("submittedAt", session.submittedAt)
  form.set("page", session.page)
  form.set("submissionMode", session.submissionMode)
  form.set("userMessageCount", String(session.userMessageCount || 0))
  form.set("name", session.name)
  form.set("businessName", session.businessName)
  form.set("phone", session.phone)
  form.set("email", session.email)
  form.set("transcript", session.transcript)

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
    throw new Error(text || `Formspree error ${response.status}`)
  }

  return text
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as GeorgeLeadBody
    const sessionId = normalize(body.sessionId)

    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId." }, { status: 400 })
    }

    const action = body.action === "finalize" ? "finalize" : "snapshot"
    const existing = await readSession(sessionId)
    const merged = mergeBody(existing, body, sessionId)

    if (action === "snapshot") {
      await writeSession({ ...merged, finalized: existing?.finalized ?? false })
      return NextResponse.json({ ok: true, stored: true })
    }

    if (existing?.finalized) {
      return NextResponse.json({ ok: true, alreadyFinalized: true })
    }

    const finalRecord: StoredTranscript = {
      ...merged,
      finalized: true,
      submissionMode: normalize(body.submissionMode) || merged.submissionMode || "conversation_end",
      submittedAt: normalize(body.submittedAt) || new Date().toISOString(),
    }

    await writeSession(finalRecord)
    await sendToFormspree(finalRecord)

    return NextResponse.json({ ok: true, sent: true })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not send George transcript." },
      { status: 500 },
    )
  }
}

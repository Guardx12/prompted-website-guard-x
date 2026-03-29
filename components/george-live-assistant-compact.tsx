"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react"
import { ChevronDown, ChevronUp, Loader2, PhoneOff, RotateCcw } from "lucide-react"

type LiveMessage = {
  id: string
  role: "assistant" | "user" | "system"
  content: string
}

type ConnectionState = "idle" | "connecting" | "connected" | "error"

type LeadFormState = {
  name: string
  surname: string
  businessName: string
  email: string
  message: string
}

type SubmitState = "idle" | "submitting" | "success" | "error"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

type StoredSession = {
  messages: LiveMessage[]
  visitorName: string | null
  updatedAt: number
}

function sanitizeStoredSession(input: unknown): StoredSession | null {
  if (!input || typeof input !== "object") return null

  const source = input as Record<string, unknown>
  const rawMessages = Array.isArray(source.messages) ? source.messages : []
  const messages = rawMessages.filter((message): message is LiveMessage => {
    if (!message || typeof message !== "object") return false
    const candidate = message as Record<string, unknown>
    return (
      typeof candidate.id === "string" &&
      (candidate.role === "assistant" || candidate.role === "user" || candidate.role === "system") &&
      typeof candidate.content === "string"
    )
  })

  return {
    messages,
    visitorName: typeof source.visitorName === "string" ? source.visitorName : null,
    updatedAt: typeof source.updatedAt === "number" ? source.updatedAt : Date.now(),
  }
}

const STORAGE_KEY = "guardx-meet-george-compact-v4"

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George. I turn your website into a 24/7 salesperson that talks to your visitors. I can match your brand completely — whether that’s a salesperson, receptionist, guide, on-site helper, or even a family-friendly mascot for your business. What kind of business do you run?",
  },
]

function makeMessage(role: LiveMessage["role"], content: string) {
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${role}-${Date.now()}-${Math.random()}`,
    role,
    content,
  }
}

function countUserMessages(messages: LiveMessage[]) {
  return messages.filter((message) => message.role === "user").length
}

function createSessionId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `george-session-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
}

function trimMessagesForStorage(messages: LiveMessage[]) {
  return messages.slice(-24)
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim()
}

function buildTranscript(messages: LiveMessage[]) {
  return messages
    .filter((message) => message.role === "assistant" || message.role === "user")
    .map((message) => `${message.role === "assistant" ? "George" : "Visitor"}: ${normalizeWhitespace(message.content)}`)
    .join("\n\n")
}

function getUserOnlyText(messages: LiveMessage[]) {
  return messages
    .filter((message) => message.role === "user")
    .map((message) => normalizeWhitespace(message.content))
    .filter(Boolean)
}

function toTitleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ")
}

function cleanNameValue(value: string) {
  return toTitleCase(normalizeWhitespace(value).replace(/[^A-Za-z' -]/g, " ").trim())
}

function cleanBusinessValue(value: string) {
  return normalizeWhitespace(value)
    .replace(/^(a|an)\s+/i, "")
    .replace(/[.,;:!?]+$/, "")
    .trim()
}

function isValidEmail(value: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(normalizeWhitespace(value))
}


function sendConversationPayload(payload: Record<string, unknown>, preferBeacon = false) {
  const body = JSON.stringify(payload)

  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function" && (preferBeacon || typeof document === "undefined" || document.visibilityState === "hidden")) {
    try {
      const blob = new Blob([body], { type: "application/json" })
      const sent = navigator.sendBeacon("/api/george-conversation", blob)
      if (sent) return
    } catch {}
  }

  void fetch("/api/george-conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    keepalive: true,
    body,
  }).catch(() => undefined)
}

function extractLeadDetailsFromMessages(messages: LiveMessage[]) {
  const userTexts = getUserOnlyText(messages)

  let name = ""
  let surname = ""
  let businessName = ""
  let email = ""

  for (const text of userTexts) {
    const emailMatches = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)
    if (emailMatches?.length) {
      const latestEmail = normalizeWhitespace(emailMatches[emailMatches.length - 1])
      if (isValidEmail(latestEmail)) email = latestEmail
    }

    const namePatterns = [
      /(?:^|\b)(?:my first name is|first name is|forename is)\s+([A-Za-z][A-Za-z' -]{1,50})/i,
      /(?:^|\b)(?:my name is|i am|i'm|im|it's|it is|this is)\s+([A-Za-z][A-Za-z' -]{1,50})/i,
    ]
    for (const pattern of namePatterns) {
      const match = text.match(pattern)
      if (match?.[1]) {
        const candidate = cleanNameValue(match[1].split(/\s+/)[0] || "")
        if (candidate) {
          name = candidate
          break
        }
      }
    }

    const surnameMatch = text.match(/(?:^|\b)(?:my surname is|surname is|last name is|family name is)\s+([A-Za-z][A-Za-z' -]{1,50})/i)
    if (surnameMatch?.[1]) {
      const candidate = cleanNameValue(surnameMatch[1])
      if (candidate) surname = candidate
    }

    const businessPatterns = [
      /(?:^|\b)(?:my business(?: name)? is|business(?: name)? is)\s+([A-Za-z0-9&'., -]{2,80})/i,
      /(?:^|\b)(?:the business is|company(?: name)? is)\s+([A-Za-z0-9&'., -]{2,80})/i,
      /(?:^|\b)(?:i run|we run|i own|we own)\s+([A-Za-z0-9&'., -]{2,80})/i,
    ]
    for (const pattern of businessPatterns) {
      const match = text.match(pattern)
      if (match?.[1]) {
        const candidate = cleanBusinessValue(match[1])
        if (candidate) {
          businessName = candidate
          break
        }
      }
    }
  }

  return { name, surname, businessName, email }
}

function buildLeadMessage(messages: LiveMessage[]) {
  const userMessages = getUserOnlyText(messages)
  if (!userMessages.length) return ""

  const filtered = userMessages.filter((message) => {
    const lower = message.toLowerCase()
    const looksLikeContactCollection =
      /surname is|last name is|family name is|email address is|business(?: name)? is|@/.test(lower)
    return !looksLikeContactCollection
  })

  const candidate = normalizeWhitespace((filtered[filtered.length - 1] || userMessages[userMessages.length - 1] || "").replace(/^(hi|hello|hey)[^a-z0-9]+/i, ""))
  if (!candidate) return ""
  return candidate.length > 280 ? `${candidate.slice(0, 277)}...` : candidate
}

function detectVisitorName(messages: LiveMessage[]) {
  for (let i = 1; i < messages.length; i += 1) {
    const previous = messages[i - 1]
    const current = messages[i]
    if (
      previous.role === "assistant" &&
      /what['’]s your name|what is your name/i.test(previous.content) &&
      current.role === "user"
    ) {
      const cleaned = current.content
        .replace(/^(it'?s|its|i am|i'm|im|my name is|name'?s|this is)\s+/i, "")
        .replace(/[^A-Za-z' -]/g, " ")
        .trim()
      const first = cleaned.split(/\s+/).find(Boolean)
      if (first && first.length >= 2) {
        return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
      }
    }
  }
  return null
}


function buildLeadPayload(leadForm: LeadFormState) {
  return {
    name: leadForm.name,
    surname: leadForm.surname,
    businessName: leadForm.businessName,
    email: normalizeWhitespace(leadForm.email),
    message: leadForm.message,
    source: "Meet George autofill form",
    page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
    submittedAt: new Date().toISOString(),
    submissionMode: "manual_submit_after_autofill",
  }
}

async function postLeadDirectToFormspree(payload: ReturnType<typeof buildLeadPayload>) {
  const form = new URLSearchParams()
  form.set("name", payload.name)
  form.set("surname", payload.surname)
  form.set("businessName", payload.businessName)
  form.set("email", payload.email)
  form.set("message", payload.message)
  form.set("source", payload.source)
  form.set("page", payload.page)
  form.set("submittedAt", payload.submittedAt)
  form.set("submissionMode", payload.submissionMode)
  form.set("_subject", "New George enquiry")
  form.set("_replyto", payload.email)
  form.set("_to", "info@guardxnetwork.com")

  return fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: form.toString(),
  })
}

function buildFirstResponseEvent(visitorName: string | null, hasStoredSession: boolean, lastUserMessage: string | null) {
  const instructions = hasStoredSession
    ? `Introduce yourself as George in warm, natural British English only. Keep it short. This visitor already has an ongoing conversation with you on this device. Do not restart from scratch. ${visitorName ? `Their name is ${visitorName}. Use it naturally once.` : ""} ${lastUserMessage ? `The last thing they said before returning was: ${lastUserMessage}` : ""} Briefly welcome them back and ask one short forward-moving question about what they want help with now.`
    : "Introduce yourself as George in warm, confident, natural British English only. Keep it short and commercially sharp. Say that you turn websites into 24/7 salespeople that talk to visitors. Make it clear in one sentence that you can match the business brand and role completely — for example as a salesperson, receptionist, guide, on-site helper, or family-friendly mascot where that suits the business. Do not mention the form, autofill, or WhatsApp in your opener. Then ask naturally: 'What kind of business do you run?'"

  return {
    type: "response.create",
    response: { instructions },
  }
}

export function GeorgeLiveAssistantCompact() {
  const [messages, setMessages] = useState<LiveMessage[]>(INITIAL_MESSAGES)
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle")
  const [statusText, setStatusText] = useState("Ready when you are")
  const [isModelSpeaking, setIsModelSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasStoredSession, setHasStoredSession] = useState(false)
  const [visitorName, setVisitorName] = useState<string | null>(null)
  const [showConversation, setShowConversation] = useState(false)
  const [leadForm, setLeadForm] = useState<LeadFormState>({
    name: "",
    surname: "",
    businessName: "",
    email: "",
    message: "",
  })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [submitError, setSubmitError] = useState<string | null>(null)

  const pcRef = useRef<RTCPeerConnection | null>(null)
  const dcRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const currentAssistantTextRef = useRef("")
  const currentAssistantMessageIdRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const conversationSessionIdRef = useRef("")
  const hasSentConversationStartRef = useRef(false)
  const conversationStartTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const idleSnapshotTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const lastFinalConversationEventRef = useRef("")

  const canStart = useMemo(() => connectionState === "idle" || connectionState === "error", [connectionState])
  const latestAssistantMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === "assistant")?.content ?? INITIAL_MESSAGES[0].content,
    [messages],
  )
  const latestUserMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === "user")?.content ?? null,
    [messages],
  )
  const transcript = useMemo(() => buildTranscript(messages), [messages])
  const detailsFromTranscript = useMemo(() => extractLeadDetailsFromMessages(messages), [messages])
  const suggestedMessage = useMemo(() => buildLeadMessage(messages), [messages])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, connectionState, showConversation])

  useEffect(() => {
    conversationSessionIdRef.current = createSessionId()

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const stored = sanitizeStoredSession(JSON.parse(raw))
      if (!stored) {
        window.localStorage.removeItem(STORAGE_KEY)
        return
      }
      if (stored.messages.length > 1) {
        setMessages(stored.messages)
        setHasStoredSession(true)
        setVisitorName(stored.visitorName || detectVisitorName(stored.messages))
        setStatusText("Ready to carry on")
        hasSentConversationStartRef.current = countUserMessages(stored.messages) > 0
      }
    } catch {
      try {
        window.localStorage.removeItem(STORAGE_KEY)
      } catch {}
    }
  }, [])

  useEffect(() => {
    try {
      const trimmed = trimMessagesForStorage(messages)
      const detectedName = visitorName || detectVisitorName(trimmed)
      if (detectedName && detectedName !== visitorName) setVisitorName(detectedName)
      if (trimmed.length <= 1) {
        window.localStorage.removeItem(STORAGE_KEY)
        setHasStoredSession(false)
        return
      }
      const payload: StoredSession = {
        messages: trimmed,
        visitorName: detectedName,
        updatedAt: Date.now(),
      }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
      setHasStoredSession(true)
    } catch {}
  }, [messages, visitorName])

  useEffect(() => {
    setLeadForm((prev) => ({
      name: detailsFromTranscript.name || prev.name,
      surname: detailsFromTranscript.surname || prev.surname,
      businessName: detailsFromTranscript.businessName || prev.businessName,
      email: detailsFromTranscript.email || prev.email,
      message: suggestedMessage || prev.message,
    }))
  }, [detailsFromTranscript, suggestedMessage])


  useEffect(() => {
    const userMessageCount = countUserMessages(messages)
    if (!userMessageCount || hasSentConversationStartRef.current) return

    if (conversationStartTimeoutRef.current) {
      window.clearTimeout(conversationStartTimeoutRef.current)
    }

    conversationStartTimeoutRef.current = window.setTimeout(() => {
      const latestTranscript = buildTranscript(messages)
      const latestUserMessageText = [...messages].reverse().find((message) => message.role === "user")?.content ?? ""

      sendConversationPayload({
        sessionId: conversationSessionIdRef.current || createSessionId(),
        source: "Meet George live conversation",
        page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
        conversationEvent: "conversation_started",
        userMessageCount: countUserMessages(messages),
        visitorName: detailsFromTranscript.name || visitorName || "",
        surname: detailsFromTranscript.surname || "",
        businessName: detailsFromTranscript.businessName || "",
        email: detailsFromTranscript.email || "",
        shortMessage: suggestedMessage || "",
        latestUserMessage: latestUserMessageText,
        transcript: latestTranscript,
        submittedAt: new Date().toISOString(),
      })

      hasSentConversationStartRef.current = true
      conversationStartTimeoutRef.current = null
    }, 600)

    return () => {
      if (conversationStartTimeoutRef.current) {
        window.clearTimeout(conversationStartTimeoutRef.current)
        conversationStartTimeoutRef.current = null
      }
    }
  }, [messages, detailsFromTranscript.name, detailsFromTranscript.surname, detailsFromTranscript.businessName, detailsFromTranscript.email, suggestedMessage, visitorName])

  useEffect(() => {
    const flushConversationSnapshot = (conversationEvent: string) => {
      const userMessageCount = countUserMessages(messages)
      if (!userMessageCount) return

      const latestTranscript = buildTranscript(messages)
      const latestUserMessageText = [...messages].reverse().find((message) => message.role === "user")?.content ?? ""

      sendConversationPayload(
        {
          sessionId: conversationSessionIdRef.current || createSessionId(),
          source: "Meet George live conversation",
          page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
          conversationEvent,
          userMessageCount,
          visitorName: detailsFromTranscript.name || visitorName || "",
          surname: detailsFromTranscript.surname || "",
          businessName: detailsFromTranscript.businessName || "",
          email: detailsFromTranscript.email || "",
          shortMessage: suggestedMessage || "",
          latestUserMessage: latestUserMessageText,
          transcript: latestTranscript,
          submittedAt: new Date().toISOString(),
        },
        true,
      )
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flushConversationSnapshot("conversation_snapshot_hidden")
      }
    }

    const handlePageHide = () => flushConversationSnapshot("conversation_snapshot_exit")

    window.addEventListener("pagehide", handlePageHide)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.removeEventListener("pagehide", handlePageHide)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [messages, detailsFromTranscript.name, detailsFromTranscript.surname, detailsFromTranscript.businessName, detailsFromTranscript.email, suggestedMessage, visitorName])


  useEffect(() => {
    const userMessageCount = countUserMessages(messages)
    if (!userMessageCount) return

    if (idleSnapshotTimeoutRef.current) {
      window.clearTimeout(idleSnapshotTimeoutRef.current)
      idleSnapshotTimeoutRef.current = null
    }

    idleSnapshotTimeoutRef.current = window.setTimeout(() => {
      const latestTranscript = buildTranscript(messages)
      const latestUserMessageText = [...messages].reverse().find((message) => message.role === "user")?.content ?? ""
      const eventKey = `${latestTranscript.length}:${userMessageCount}`

      if (lastFinalConversationEventRef.current === eventKey) return

      sendConversationPayload({
        sessionId: conversationSessionIdRef.current || createSessionId(),
        source: "Meet George live conversation",
        page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
        conversationEvent: "conversation_snapshot_idle",
        userMessageCount,
        visitorName: detailsFromTranscript.name || visitorName || "",
        surname: detailsFromTranscript.surname || "",
        businessName: detailsFromTranscript.businessName || "",
        email: detailsFromTranscript.email || "",
        shortMessage: suggestedMessage || "",
        latestUserMessage: latestUserMessageText,
        transcript: latestTranscript,
        submittedAt: new Date().toISOString(),
      }, true)

      lastFinalConversationEventRef.current = eventKey
    }, 18000)

    return () => {
      if (idleSnapshotTimeoutRef.current) {
        window.clearTimeout(idleSnapshotTimeoutRef.current)
        idleSnapshotTimeoutRef.current = null
      }
    }
  }, [messages, detailsFromTranscript.name, detailsFromTranscript.surname, detailsFromTranscript.businessName, detailsFromTranscript.email, suggestedMessage, visitorName])

  async function cleanupConversation() {
    dcRef.current?.close()
    dcRef.current = null

    if (pcRef.current) {
      pcRef.current.getSenders().forEach((sender) => sender.track?.stop())
      pcRef.current.close()
      pcRef.current = null
    }

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop())
      localStreamRef.current = null
    }

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.srcObject = null
      audioRef.current.remove()
      audioRef.current = null
    }

    if (conversationStartTimeoutRef.current) {
      window.clearTimeout(conversationStartTimeoutRef.current)
      conversationStartTimeoutRef.current = null
    }

    currentAssistantTextRef.current = ""
    currentAssistantMessageIdRef.current = null
    setIsModelSpeaking(false)
  }

  function clearSavedSession() {
    void cleanupConversation()
    setMessages(INITIAL_MESSAGES)
    setVisitorName(null)
    setHasStoredSession(false)
    setLeadForm({ name: "", surname: "", businessName: "", email: "", message: "" })
    setSubmitState("idle")
    setSubmitError(null)
    setError(null)
    setConnectionState("idle")
    setStatusText("Ready when you are")
    conversationSessionIdRef.current = createSessionId()
    hasSentConversationStartRef.current = false
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }

  function appendOrUpdateAssistantPartial(delta: string, isFinal = false) {
    if (!delta) return

    if (!currentAssistantMessageIdRef.current) {
      const message = makeMessage("assistant", delta)
      currentAssistantMessageIdRef.current = message.id
      currentAssistantTextRef.current = delta
      setMessages((prev) => [...prev, message])
      if (isFinal) {
        currentAssistantMessageIdRef.current = null
        currentAssistantTextRef.current = ""
      }
      return
    }

    currentAssistantTextRef.current += delta
    const targetId = currentAssistantMessageIdRef.current

    setMessages((prev) =>
      prev.map((message) =>
        message.id === targetId ? { ...message, content: currentAssistantTextRef.current } : message,
      ),
    )

    if (isFinal) {
      currentAssistantMessageIdRef.current = null
      currentAssistantTextRef.current = ""
    }
  }

  function addUserTranscript(text: string) {
    const cleaned = text.trim()
    if (!cleaned) return
    setMessages((prev) => [...prev, makeMessage("user", cleaned)])
  }

  function handleRealtimeEvent(event: any) {
    const type = event?.type
    if (!type) return

    switch (type) {
      case "session.created":
      case "session.updated":
        setStatusText("George is live")
        break
      case "input_audio_buffer.speech_started":
        setStatusText("Listening…")
        break
      case "input_audio_buffer.speech_stopped":
        setStatusText("Thinking…")
        break
      case "response.created":
        setIsModelSpeaking(true)
        setStatusText("George is replying…")
        break
      case "response.output_audio.delta":
        setIsModelSpeaking(true)
        setStatusText("George is replying…")
        break
      case "response.output_audio.done":
        setIsModelSpeaking(false)
        setStatusText("Listening…")
        break
      case "response.output_audio_transcript.delta":
        appendOrUpdateAssistantPartial(typeof event.delta === "string" ? event.delta : "")
        break
      case "response.output_audio_transcript.done":
        appendOrUpdateAssistantPartial(typeof event.transcript === "string" ? event.transcript : "", true)
        break
      case "conversation.item.input_audio_transcription.completed":
        addUserTranscript(typeof event.transcript === "string" ? event.transcript : "")
        break
      case "response.output_item.done": {
        const content = Array.isArray(event?.item?.content) ? event.item.content : []
        const transcript = content
          .map((part: any) => {
            if (typeof part?.transcript === "string") return part.transcript
            if (typeof part?.text === "string") return part.text
            return ""
          })
          .filter(Boolean)
          .join("\n")

        if (transcript) {
          appendOrUpdateAssistantPartial(transcript, true)
        }
        break
      }
      case "error": {
        const message = event?.error?.message || "George hit a voice error."
        if (connectionState === "connected") {
          setError(message)
          setStatusText("There was a connection problem")
        } else {
          void cleanupConversation()
          setConnectionState("error")
          setStatusText("Could not connect George")
          setError(message)
        }
        break
      }
      default:
        break
    }
  }

  async function startConversation() {
    if (!canStart) return

    await cleanupConversation()
    setConnectionState("connecting")
    setError(null)
    setStatusText("Connecting George…")

    if (!hasStoredSession) {
      setMessages(INITIAL_MESSAGES)
    }

    try {
      const tokenResponse = await fetch("/api/george-session", {
        method: "GET",
        cache: "no-store",
      })

      const tokenData = await tokenResponse.json().catch(() => null)
      if (!tokenResponse.ok) {
        throw new Error(typeof tokenData?.error === "string" ? tokenData.error : "Could not create a secure live session.")
      }

      const ephemeralKey = tokenData?.value
      if (typeof ephemeralKey !== "string" || !ephemeralKey) {
        throw new Error("Live voice token was missing.")
      }

      const pc = new RTCPeerConnection()
      pcRef.current = pc

      const audio = document.createElement("audio")
      audio.autoplay = true
      audio.playsInline = true
      audioRef.current = audio

      pc.ontrack = (event) => {
        audio.srcObject = event.streams[0]
        void audio.play().catch(() => {})
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      localStreamRef.current = stream
      stream.getTracks().forEach((track) => pc.addTrack(track, stream))

      const dc = pc.createDataChannel("oai-events")
      dcRef.current = dc

      dc.addEventListener("open", () => {
        setConnectionState("connected")
        setStatusText(hasStoredSession ? "Ready to carry on" : "Listening…")
        window.setTimeout(() => {
          dc.send(JSON.stringify(buildFirstResponseEvent(visitorName, hasStoredSession, latestUserMessage)))
        }, 150)
      })

      dc.addEventListener("message", (event) => {
        try {
          const data = JSON.parse(event.data)
          handleRealtimeEvent(data)
        } catch {}
      })

      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)

      const response = await fetch("https://api.openai.com/v1/realtime/calls", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ephemeralKey}`,
          "Content-Type": "application/sdp",
        },
        body: offer.sdp,
      })

      const answerText = await response.text()

      if (!response.ok) {
        let message = "Could not connect George."
        try {
          const parsed = JSON.parse(answerText)
          if (typeof parsed?.error?.message === "string") message = parsed.error.message
        } catch {
          if (answerText.trim()) message = answerText.trim()
        }
        throw new Error(message)
      }

      await pc.setRemoteDescription({ type: "answer", sdp: answerText })
      pc.addEventListener("connectionstatechange", () => {
        if (["failed", "disconnected", "closed"].includes(pc.connectionState)) {
          setConnectionState("error")
          setStatusText("Connection ended")
        }
      })
    } catch (err) {
      await cleanupConversation()
      setConnectionState("error")
      setStatusText("Could not connect George")
      setError(err instanceof Error ? err.message : "Could not connect George right now.")
    }
  }

  async function stopConversation() {
    await cleanupConversation()
    setError(null)
    setConnectionState("idle")
    setStatusText(hasStoredSession ? "Ready to carry on" : "Ready when you are")
  }

  async function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)

    if (!isValidEmail(leadForm.email)) {
      setSubmitState("error")
      setSubmitError("Please enter a full email address before submitting.")
      return
    }

    setSubmitState("submitting")

    const payload = buildLeadPayload(leadForm)

    try {
      let response = await fetch("/api/george-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        response = await postLeadDirectToFormspree(payload)
      }

      const data = await response.json().catch(() => null)
      if (!response.ok) {
        throw new Error(typeof data?.error === "string" ? data.error : "Could not send your enquiry.")
      }

      setSubmitState("success")
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Could not send your enquiry.")
    }
  }

  return (
    <section id="live-george" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="overflow-hidden rounded-[36px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
        <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">Turn your website into a 24/7 salesperson</h1>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
            <p className="pulse-highlight mb-3 text-base font-semibold text-[#0F172A] sm:text-lg">Try it now — ask George how he can work for your business</p>
            <p className="mb-5 max-w-2xl text-sm leading-6 text-[#475569] sm:text-base">George is tailored to each client, so he can match your brand, tone, and role — from a salesperson or receptionist to a guide or family-friendly mascot.</p>
            <p className="mb-6 text-sm font-semibold text-[#1D4ED8] sm:text-base">See how it would work on your business in seconds</p>
            <button
              type="button"
              onClick={connectionState === "connected" ? stopConversation : startConversation}
              disabled={connectionState === "connecting"}
              aria-label={connectionState === "connected" ? "Stop talking to George" : "Start talking to George"}
              className={`group relative flex h-[250px] w-[250px] items-center justify-center rounded-full transition duration-300 ease-out sm:h-[300px] sm:w-[300px] ${
                connectionState === "connecting" ? "cursor-wait" : "hover:scale-[1.02]"
              } ${
                connectionState === "connected" || connectionState === "connecting"
                  ? "animate-[pulse_2s_ease-in-out_infinite]"
                  : "animate-[pulse_4s_ease-in-out_infinite]"
              }`}
              style={{
                background:
                  "radial-gradient(circle at 30% 24%, #8091B7 0%, #41567F 20%, #172554 56%, #020617 100%)",
                boxShadow:
                  connectionState === "connected" || connectionState === "connecting"
                    ? "0 0 0 12px rgba(71,85,105,0.10), 0 30px 70px rgba(15,23,42,0.34), inset 0 5px 22px rgba(255,255,255,0.28), inset 0 -18px 30px rgba(2,6,23,0.58)"
                    : "0 26px 58px rgba(15,23,42,0.24), inset 0 5px 20px rgba(255,255,255,0.24), inset 0 -16px 28px rgba(2,6,23,0.54)",
              }}
            >
              <span className="pointer-events-none absolute inset-[8px] rounded-full border border-white/18" />
              <span className="pointer-events-none absolute left-[11%] top-[9%] h-[22%] w-[54%] rounded-full bg-white/32 blur-[12px]" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0)_45%,rgba(255,255,255,0.14)_75%,rgba(255,255,255,0.24)_100%)]" />

              <div className="relative z-10 flex h-[78%] w-[78%] items-center justify-center rounded-full bg-white shadow-[inset_0_2px_12px_rgba(148,163,184,0.32)]">
                <div className={`george-avatar-shell ${isModelSpeaking ? "is-talking" : ""}`} aria-hidden="true">
                  <div className="george-wave-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <Image
                    src="/george-avatar-head.png"
                    alt="George"
                    width={260}
                    height={260}
                    className="george-avatar-image"
                    priority
                  />

                  <div className="george-mouth-mask" />
                  <div className="george-mouth-shadow" />
                  <div className="george-mouth-inner">
                    <span className="george-mouth-teeth" />
                    <span className="george-mouth-tongue" />
                  </div>
                </div>
              </div>
              <span className="sr-only">{connectionState === "connected" ? "George is live" : "Start talking to George"}</span>
            </button>

            <a
              href="https://wa.me/447519166031"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sm font-semibold text-[#0F172A] underline decoration-[#25D366] decoration-2 underline-offset-4 transition hover:text-[#1D4ED8]"
            >
              Prefer to speak to a human? Message me on WhatsApp
            </a>

            <div className="mt-6 min-h-[84px] max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
                {connectionState === "connected"
                  ? isModelSpeaking
                    ? "George is talking"
                    : "George is live"
                  : connectionState === "connecting"
                    ? "Connecting George"
                    : hasStoredSession
                      ? "Ready to carry on"
                      : "Tap the circle to speak to George"}
              </p>
              <p className="mt-3 text-base leading-7 text-[#334155] sm:text-lg">{latestAssistantMessage}</p>
              {latestUserMessage ? <p className="mt-2 text-sm text-[#64748B]">You: {latestUserMessage}</p> : null}
              {error ? <p className="mt-3 text-sm font-medium text-[#B91C1C]">{error}</p> : null}
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              {connectionState === "connected" ? (
                <button
                  type="button"
                  onClick={stopConversation}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  <PhoneOff className="h-4 w-4" /> End conversation
                </button>
              ) : hasStoredSession ? (
                <button
                  type="button"
                  onClick={clearSavedSession}
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#334155] transition hover:bg-[#F8FAFC]"
                >
                  <RotateCcw className="h-4 w-4" /> Start fresh
                </button>
              ) : null}

              <button
                type="button"
                onClick={() => setShowConversation((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-5 py-3 text-sm font-semibold text-[#334155] transition hover:bg-[#F8FAFC]"
              >
                {showConversation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showConversation ? "Hide conversation" : "View conversation"}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] bg-[#F8FAFC] px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-[#DADCE0] bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-[#0F172A]">Ready to go ahead?</h2>
            <p className="mt-2 text-sm leading-6 text-[#475569]">
              George fills this in as you chat. Just check it looks right and press submit — it takes 10 seconds.
            </p>

            <form onSubmit={handleLeadSubmit} className="mt-5 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={leadForm.name}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, name: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#0F172A] outline-none focus:border-[#1D4ED8]"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={leadForm.surname}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, surname: event.target.value }))}
                  className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#0F172A] outline-none focus:border-[#1D4ED8]"
                />
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business name"
                  value={leadForm.businessName}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, businessName: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#0F172A] outline-none focus:border-[#1D4ED8] sm:col-span-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#0F172A] outline-none focus:border-[#1D4ED8] sm:col-span-2"
                />
              </div>

              <textarea
                name="message"
                placeholder="Short message"
                value={leadForm.message}
                onChange={(event) => setLeadForm((prev) => ({ ...prev, message: event.target.value }))}
                rows={4}
                className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#0F172A] outline-none focus:border-[#1D4ED8]"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === "submitting" ? "Sending..." : submitState === "success" ? "Submitted" : "Submit enquiry"}
                </button>

                <a
                  href="https://wa.me/447519166031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#25D366] px-5 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[#F0FFF4]"
                >
                  Contact us on WhatsApp
                </a>
              </div>

              {submitState === "success" ? (
                <p className="text-sm font-medium text-[#15803D]">Thanks — your enquiry has been sent.</p>
              ) : null}
              {submitError ? <p className="text-sm font-medium text-[#B91C1C]">{submitError}</p> : null}
            </form>
          </div>
        </div>

        {showConversation ? (
          <div className="border-t border-[#E5E7EB] bg-[#F8FAFC] px-4 py-6 sm:px-6 sm:py-8">
            <div ref={scrollRef} className="mx-auto max-h-[420px] w-full max-w-3xl overflow-y-auto">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[92%] whitespace-pre-wrap rounded-[24px] px-5 py-4 text-[15px] leading-7 shadow-sm sm:max-w-[86%] sm:text-[16px] ${
                        message.role === "user"
                          ? "rounded-br-md bg-[#1D4ED8] text-white"
                          : message.role === "assistant"
                            ? "rounded-bl-md border border-[#E2E8F0] bg-white text-[#0F172A]"
                            : "rounded-bl-md border border-[#DBEAFE] bg-[#EFF6FF] text-[#1D4ED8]"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {connectionState === "connecting" && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-[#E2E8F0] bg-white px-5 py-4 text-[#475569] shadow-sm">
                      <Loader2 className="h-4 w-4 animate-spin" /> George is joining the conversation…
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <style jsx>{`
        .george-avatar-shell {
          position: relative;
          width: 86%;
          height: 86%;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 18px 26px rgba(15, 23, 42, 0.16));
        }

        .george-avatar-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: translateY(2px);
          transition: transform 220ms ease;
        }

        .george-wave-bars {
          position: absolute;
          top: -2%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          gap: 5px;
          height: 18%;
          width: 28%;
          opacity: 0.96;
        }

        .george-wave-bars span {
          flex: 1;
          border-radius: 999px;
          background: linear-gradient(180deg, #3b82f6 0%, #38bdf8 100%);
          height: 28%;
          transform-origin: center bottom;
          opacity: 0.92;
        }

        .george-avatar-shell.is-talking .george-wave-bars span:nth-child(1) { animation: waveBounce 0.72s ease-in-out infinite; }
        .george-avatar-shell.is-talking .george-wave-bars span:nth-child(2) { animation: waveBounce 0.72s ease-in-out 0.1s infinite; }
        .george-avatar-shell.is-talking .george-wave-bars span:nth-child(3) { animation: waveBounce 0.72s ease-in-out 0.18s infinite; }
        .george-avatar-shell.is-talking .george-wave-bars span:nth-child(4) { animation: waveBounce 0.72s ease-in-out 0.08s infinite; }
        .george-avatar-shell.is-talking .george-wave-bars span:nth-child(5) { animation: waveBounce 0.72s ease-in-out 0.16s infinite; }

        .george-mouth-mask {
          position: absolute;
          left: 50%;
          top: 66.4%;
          width: 23.5%;
          height: 10.8%;
          transform: translateX(-50%);
          border-radius: 999px;
          background: linear-gradient(180deg, #0b52b8 0%, #08439d 100%);
          box-shadow: inset 0 1px 2px rgba(255,255,255,0.08);
        }

        .george-mouth-shadow {
          position: absolute;
          left: 50%;
          top: 69.6%;
          width: 18%;
          height: 8.8%;
          transform: translateX(-50%);
          border-radius: 999px;
          background: #0a246a;
          transition: all 180ms ease;
        }

        .george-mouth-inner {
          position: absolute;
          left: 50%;
          top: 67.6%;
          width: 17.4%;
          height: 6.8%;
          transform: translateX(-50%);
          border-radius: 0 0 999px 999px;
          background: #ffffff;
          overflow: hidden;
          transition: all 180ms ease;
          transform-origin: center top;
        }

        .george-mouth-teeth {
          position: absolute;
          inset: 0;
          background: white;
          border-radius: 0 0 999px 999px;
        }

        .george-mouth-tongue {
          position: absolute;
          left: 50%;
          bottom: -28%;
          width: 60%;
          height: 48%;
          transform: translateX(-50%);
          border-radius: 999px 999px 0 0;
          background: #f472b6;
          opacity: 0;
          transition: opacity 140ms ease;
        }

        .george-avatar-shell.is-talking .george-avatar-image {
          animation: headBob 0.8s ease-in-out infinite;
        }

        .george-avatar-shell.is-talking .george-mouth-shadow {
          top: 70.8%;
          width: 16.2%;
          height: 9.6%;
          animation: mouthShadowTalk 0.5s ease-in-out infinite alternate;
        }

        .george-avatar-shell.is-talking .george-mouth-inner {
          top: 67.6%;
          width: 15.8%;
          height: 10.8%;
          border-radius: 0 0 20px 20px;
          background: linear-gradient(180deg, #ffffff 0 34%, #0f265b 34% 100%);
          animation: mouthTalk 0.5s ease-in-out infinite alternate;
        }

        .george-avatar-shell.is-talking .george-mouth-tongue {
          opacity: 0.9;
        }

        @keyframes waveBounce {
          0%, 100% { height: 28%; }
          50% { height: 100%; }
        }

        @keyframes headBob {
          0%, 100% { transform: translateY(2px) scale(1); }
          50% { transform: translateY(0px) scale(1.01); }
        }

        @keyframes mouthTalk {
          0% { height: 7.2%; width: 17.2%; }
          100% { height: 12.4%; width: 14.6%; }
        }

        @keyframes mouthShadowTalk {
          0% { height: 8.8%; width: 18%; }
          100% { height: 10.4%; width: 15.6%; }
        }
      `}</style>
    </section>
  )
}

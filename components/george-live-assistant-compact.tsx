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

const STORAGE_KEY = "guardx-meet-george-compact-v8"

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George. What kind of business do you run? I'll show you exactly how I'd work on it.",
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

function buildConversationPayload({
  messages,
  details,
  visitorName,
  suggestedMessage,
  sessionId,
  conversationEvent,
}: {
  messages: LiveMessage[]
  details: { name: string; surname: string; businessName: string; email: string }
  visitorName: string | null
  suggestedMessage: string
  sessionId: string
  conversationEvent: string
}) {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content ?? ""

  return {
    sessionId,
    source: "Meet George live conversation",
    page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
    conversationEvent,
    userMessageCount: countUserMessages(messages),
    visitorName: details.name || visitorName || "",
    surname: details.surname || "",
    businessName: details.businessName || "",
    email: details.email || "",
    shortMessage: suggestedMessage || "",
    latestUserMessage,
    transcript: buildTranscript(messages),
    submittedAt: new Date().toISOString(),
  }
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
    ? `Introduce yourself as George in warm, natural British English only. Keep it short. This visitor already has an ongoing conversation with you on this device. Do not restart from scratch. ${visitorName ? `Their name is ${visitorName}. Use it naturally once.` : ""} ${lastUserMessage ? `The last thing they said before returning was: ${lastUserMessage}` : ""} Briefly welcome them back and move the conversation forward naturally from where it left off.`
    : "Introduce yourself as George in warm, confident, natural British English only. Keep it short, direct, and easy to answer. Say exactly: 'Hi — I'm George. What kind of business do you run? I'll show you exactly how I'd work on it.' Do not add anything else before or after that opener. Do not mention the form, autofill, WhatsApp, pricing, or extra features in your first message."

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
  const [showIntroOverlay, setShowIntroOverlay] = useState(true)

  const pcRef = useRef<RTCPeerConnection | null>(null)
  const dcRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const currentAssistantTextRef = useRef("")
  const currentAssistantMessageIdRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const conversationSessionIdRef = useRef("")
  const hasSentFinalConversationRef = useRef(false)
  const lastSentUserMessageCountRef = useRef(0)
  const latestMessagesRef = useRef<LiveMessage[]>(INITIAL_MESSAGES)
  const latestVisitorNameRef = useRef<string | null>(null)
  const latestSuggestedMessageRef = useRef("")
  const latestDetailsRef = useRef({ name: "", surname: "", businessName: "", email: "" })

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
    const timer = window.setTimeout(() => {
      setShowIntroOverlay(false)
    }, 3800)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    conversationSessionIdRef.current = createSessionId()

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const stored = JSON.parse(raw) as StoredSession
      const validMessages = Array.isArray(stored?.messages)
        ? stored.messages.filter(
            (message): message is LiveMessage =>
              Boolean(message) &&
              typeof message.id === "string" &&
              (message.role === "assistant" || message.role === "user" || message.role === "system") &&
              typeof message.content === "string",
          )
        : []
      if (validMessages.length > 1) {
        setMessages(validMessages)
        setHasStoredSession(true)
        setVisitorName(stored.visitorName || detectVisitorName(validMessages))
        setStatusText("Ready to carry on")
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
    latestMessagesRef.current = messages
    latestVisitorNameRef.current = visitorName
    latestSuggestedMessageRef.current = suggestedMessage
    latestDetailsRef.current = detailsFromTranscript
  }, [messages, visitorName, suggestedMessage, detailsFromTranscript])

  async function sendConversationSnapshot(conversationEvent: string, preferBeacon = false) {
    const currentMessages = latestMessagesRef.current
    if (countUserMessages(currentMessages) === 0) return false

    const payload = buildConversationPayload({
      messages: currentMessages,
      details: latestDetailsRef.current,
      visitorName: latestVisitorNameRef.current,
      suggestedMessage: latestSuggestedMessageRef.current,
      sessionId: conversationSessionIdRef.current || createSessionId(),
      conversationEvent,
    })

    if (preferBeacon) {
      sendConversationPayload(payload, true)
      return true
    }

    try {
      const response = await fetch("/api/george-conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        keepalive: true,
        body: JSON.stringify(payload),
      })

      return response.ok
    } catch {
      return false
    }
  }

  async function sendFinalConversation(conversationEvent: string, preferBeacon = false) {
    if (hasSentFinalConversationRef.current && conversationEvent !== "manual_conversation_stop") return
    const sent = await sendConversationSnapshot(conversationEvent, preferBeacon)
    if (sent) {
      hasSentFinalConversationRef.current = true
    }
  }



  useEffect(() => {
    const currentUserMessageCount = countUserMessages(messages)
    if (currentUserMessageCount === 0) return
    if (currentUserMessageCount <= lastSentUserMessageCountRef.current) return

    lastSentUserMessageCountRef.current = currentUserMessageCount
    void sendConversationSnapshot(`user_message_${currentUserMessageCount}`)
  }, [messages])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") {
        void sendFinalConversation("conversation_page_hidden", true)
      }
    }

    const handlePageHide = () => {
      void sendFinalConversation("conversation_page_exit", true)
    }

    const handleBeforeUnload = () => {
      void sendFinalConversation("conversation_before_unload", true)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("pagehide", handlePageHide)
      window.addEventListener("beforeunload", handleBeforeUnload)
    }

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("pagehide", handlePageHide)
        window.removeEventListener("beforeunload", handleBeforeUnload)
      }
      if (typeof document !== "undefined") {
        document.removeEventListener("visibilitychange", handleVisibilityChange)
      }
    }
  }, [])

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
    hasSentFinalConversationRef.current = false
    lastSentUserMessageCountRef.current = 0
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
    hasSentFinalConversationRef.current = false
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
          void sendFinalConversation("conversation_connection_closed", true)
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
    await sendFinalConversation("manual_conversation_stop")
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
    <>
      {showIntroOverlay ? (
        <div className="george-intro-overlay" aria-hidden="true">
          <div className="george-intro-stage">
            <div className="george-intro-avatar-track">
              <Image
                src="/george-logo-premium-purple.png"
                alt="George logo"
                width={240}
                height={240}
                className="george-intro-avatar george-intro-orb"
                priority
              />
            </div>
            <p className="george-intro-copy pulse-highlight">Tap the green George circle to ask how he would work on your website</p>
          </div>
        </div>
      ) : null}

      <section id="live-george" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,22,0.94),rgba(10,15,28,0.9))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Turn your website into a 24/7 salesperson</h1>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
            <p className="mb-5 max-w-2xl text-sm leading-6 text-white/72 sm:text-base">George is tailored to each client, so he can match your brand, tone, and role — from a salesperson or receptionist to a guide or family-friendly mascot.</p>
            <p className="mb-6 text-sm font-semibold text-emerald-300 sm:text-base">Start talking to George</p>
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
                  "radial-gradient(circle at 35% 28%, rgba(198,255,229,0.95) 0%, rgba(110,231,183,0.85) 14%, rgba(20,184,166,0.82) 32%, rgba(9,55,72,0.95) 66%, rgba(3,12,18,0.98) 100%)",
                boxShadow:
                  connectionState === "connected" || connectionState === "connecting"
                    ? "0 0 0 10px rgba(20,184,166,0.10), 0 26px 70px rgba(8,145,178,0.28), inset 0 8px 24px rgba(255,255,255,0.34), inset 0 -18px 28px rgba(5,16,22,0.48)"
                    : "0 22px 56px rgba(8,145,178,0.22), inset 0 8px 22px rgba(255,255,255,0.28), inset 0 -16px 26px rgba(5,16,22,0.42)",
              }}
            >
              <span className="pointer-events-none absolute inset-[6px] rounded-full border border-white/18" />
              <span className="pointer-events-none absolute left-[12%] top-[10%] h-[20%] w-[50%] rounded-full bg-white/28 blur-[14px]" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0)_42%,rgba(255,255,255,0.12)_74%,rgba(255,255,255,0.2)_100%)]" />

              <Image
                src="/george-logo-premium-purple.png"
                alt="George logo"
                width={320}
                height={320}
                className="relative z-10 h-[94%] w-[94%] rounded-full object-cover drop-shadow-[0_20px_34px_rgba(8,14,40,0.22)]"
                priority
              />
              <span className="sr-only">{connectionState === "connected" ? "George is live" : "Start talking to George"}</span>
            </button>

            <div className="mt-6 min-h-[84px] max-w-2xl text-center">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300 ${
                  connectionState === "idle" && !hasStoredSession ? "pulse-highlight" : ""
                }`}
              >
                {connectionState === "connected"
                  ? isModelSpeaking
                    ? "George is talking"
                    : "George is live"
                  : connectionState === "connecting"
                    ? "Connecting George"
                    : hasStoredSession
                      ? "Ready to carry on"
                      : "Tap the green George circle to speak to George"}
              </p>
              <p className="mt-3 text-base leading-7 text-white/82 sm:text-lg">{latestAssistantMessage}</p>
              {latestUserMessage ? <p className="mt-2 text-sm text-white/50">You: {latestUserMessage}</p> : null}
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/10"
                >
                  <RotateCcw className="h-4 w-4" /> Start fresh
                </button>
              ) : null}

              <button
                type="button"
                onClick={() => setShowConversation((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/82 transition hover:bg-white/10"
              >
                {showConversation ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showConversation ? "Hide conversation" : "View conversation"}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto w-full max-w-3xl rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-semibold text-white">Ready to go ahead?</h2>
            <p className="mt-2 text-sm leading-6 text-white/68">
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
                  className="w-full rounded-2xl border border-white/10 bg-[#0a1020] px-4 py-3 text-white outline-none focus:border-emerald-300"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={leadForm.surname}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, surname: event.target.value }))}
                  className="w-full rounded-2xl border border-white/10 bg-[#0a1020] px-4 py-3 text-white outline-none focus:border-emerald-300"
                />
                <input
                  type="text"
                  name="businessName"
                  placeholder="Business name"
                  value={leadForm.businessName}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, businessName: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0a1020] px-4 py-3 text-white outline-none focus:border-emerald-300 sm:col-span-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0a1020] px-4 py-3 text-white outline-none focus:border-emerald-300 sm:col-span-2"
                />
              </div>

              <textarea
                name="message"
                placeholder="Short message"
                value={leadForm.message}
                onChange={(event) => setLeadForm((prev) => ({ ...prev, message: event.target.value }))}
                rows={4}
                className="w-full rounded-2xl border border-white/10 bg-[#0a1020] px-4 py-3 text-white outline-none focus:border-emerald-300"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#4ade80_0%,#14b8a6_100%)] px-5 py-3 text-sm font-semibold text-[#03110a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === "submitting" ? "Sending..." : submitState === "success" ? "Submitted" : "Submit enquiry"}
                </button>
              </div>

              {submitState === "success" ? (
                <p className="text-sm font-medium text-[#15803D]">Thanks — your enquiry has been sent.</p>
              ) : null}
              {submitError ? <p className="text-sm font-medium text-[#B91C1C]">{submitError}</p> : null}
            </form>
          </div>
        </div>

        {showConversation ? (
          <div className="border-t border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 sm:py-8">
            <div ref={scrollRef} className="mx-auto max-h-[420px] w-full max-w-3xl overflow-y-auto">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[92%] whitespace-pre-wrap rounded-[24px] px-5 py-4 text-[15px] leading-7 shadow-sm sm:max-w-[86%] sm:text-[16px] ${
                        message.role === "user"
                          ? "rounded-br-md bg-[linear-gradient(135deg,#4ade80_0%,#14b8a6_100%)] text-[#03110a]"
                          : message.role === "assistant"
                            ? "rounded-bl-md border border-white/10 bg-[#09101d] text-white/90"
                            : "rounded-bl-md border border-emerald-300/15 bg-emerald-300/10 text-emerald-200"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {connectionState === "connecting" && (
                  <div className="flex justify-start">
                    <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-white/10 bg-[#09101d] px-5 py-4 text-white/70 shadow-sm">
                      <Loader2 className="h-4 w-4 animate-spin" /> George is joining the conversation…
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      </section>
    </>
  )
}


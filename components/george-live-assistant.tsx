"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Mic, PhoneOff, Radio, Volume2 } from "lucide-react"

type LiveMessage = {
  id: string
  role: "assistant" | "user" | "system"
  content: string
}

type ConnectionState = "idle" | "connecting" | "connected" | "error"

type LeadFormState = {
  name: string
  businessName: string
  email: string
  phone: string
  packageChoice: string
  summary: string
}


const STORAGE_KEY = "george-site-session-v1"

type StoredSession = {
  messages: LiveMessage[]
  leadForm: LeadFormState
}

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George, a digital guide and member of staff for your website. I help attractions and visitor businesses guide people before they arrive, while they are on site, and when they are deciding what to do next. I help turn more of your existing traffic into bookings, spend, and enquiries by reducing friction and guiding visitors properly. Ask me anything.",
  },
]

function buildFirstResponseEvent(hasStoredContext: boolean, storedName?: string) {
  return {
    type: "response.create",
    response: {
      instructions: hasStoredContext
        ? `Briefly welcome the visitor back as George. Mention that you can still help with website directions, directions to the location, and on-site directions, while also helping get more people through the gate, improve visitor experience, and increase on-site spend. ${storedName ? `Use the name ${storedName} naturally once.` : ""} Then ask what they want help with now.`
        : "Briefly introduce yourself as George, a digital guide and member of staff for the website. Explain that you help attractions and visitor businesses with three kinds of directions: directions on the website, directions to the location, and directions around the site once visitors are there. Also explain that you help turn more existing traffic into bookings, spend, and enquiries by improving visitor experience and reducing friction. Where natural, mention the simple example that 10 extra £5 purchases a day is around £1,500 a month. Then ask warmly: 'What’s your name, and what type of place or business do you run?'",
    },
  }
}

function makeMessage(role: LiveMessage["role"], content: string): LiveMessage {
  return {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${role}-${Date.now()}-${Math.random()}`,
    role,
    content,
  }
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

function hasMeaningfulTranscript(messages: LiveMessage[]) {
  const userMessages = messages.filter(
    (message) => message.role === "user" && normalizeWhitespace(message.content).length >= 4,
  )
  return userMessages.length >= 1
}

function extractLeadDetailsFromTranscript(transcript: string) {
  const normalized = transcript.toLowerCase()

  const emailMatch = transcript.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
  const phoneMatch = transcript.match(/(?:\+?44\s?7\d{3}|0\d{4}|0\d{3}|0\d{2})[\s\d]{6,12}/)

  let name = ""
  const namePatterns = [
    /my name is\s+([A-Za-z][A-Za-z' -]{1,40})/i,
    /i am\s+([A-Za-z][A-Za-z' -]{1,40})/i,
    /i'm\s+([A-Za-z][A-Za-z' -]{1,40})/i,
  ]
  for (const pattern of namePatterns) {
    const match = transcript.match(pattern)
    if (match?.[1]) {
      name = normalizeWhitespace(match[1])
      break
    }
  }

  let businessName = ""
  const businessPatterns = [
    /business(?: name)? is\s+([A-Za-z0-9&'., -]{2,60})/i,
    /(?:it's|it is|called)\s+([A-Za-z0-9&'., -]{2,60})/i,
    /i have\s+(?:a|an)?\s*([A-Za-z0-9&'., -]{2,60})/i,
  ]
  for (const pattern of businessPatterns) {
    const match = transcript.match(pattern)
    if (match?.[1]) {
      businessName = normalizeWhitespace(match[1])
      break
    }
  }

  const confirmed =
    /that(?:'s| is) correct/i.test(normalized) ||
    /yes(?:[,! ]|$)/i.test(normalized) ||
    /correct/i.test(normalized) ||
    /that's right/i.test(normalized) ||
    /those details are correct/i.test(normalized)

  return {
    name,
    businessName,
    phone: phoneMatch ? normalizeWhitespace(phoneMatch[0]) : "",
    email: emailMatch ? normalizeWhitespace(emailMatch[0]) : "",
    confirmed,
  }
}

function hasConfirmedLead(messages: LiveMessage[]) {
  const transcript = buildTranscript(messages)
  const details = extractLeadDetailsFromTranscript(transcript)
  return Boolean(details.name && details.businessName && (details.phone || details.email) && details.confirmed)
}

function buildLeadSummary(messages: LiveMessage[]) {
  const userMessages = messages
    .filter((message) => message.role === "user")
    .map((message) => normalizeWhitespace(message.content))
    .filter(Boolean)

  if (!userMessages.length) return "Interested in George and wants to discuss how it could help the business."

  const relevant = userMessages.slice(-3).join(" ")
  return relevant.length > 500 ? `${relevant.slice(0, 497)}...` : relevant
}

export function GeorgeLiveAssistant() {
  const [messages, setMessages] = useState<LiveMessage[]>(INITIAL_MESSAGES)
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle")
  const [statusText, setStatusText] = useState("Ready when you are")
  const [isModelSpeaking, setIsModelSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [leadForm, setLeadForm] = useState<LeadFormState>({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    packageChoice: "Custom Quote",
    summary: "",
  })
  const [hasStoredSession, setHasStoredSession] = useState(false)

  const pcRef = useRef<RTCPeerConnection | null>(null)
  const dcRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const currentAssistantTextRef = useRef("")
  const currentAssistantMessageIdRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const messagesRef = useRef<LiveMessage[]>(INITIAL_MESSAGES)
  const conversationSessionIdRef = useRef("")

  useEffect(() => {
    const sessionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `george-${Date.now()}-${Math.random()}`
    conversationSessionIdRef.current = sessionId
  }, [])


  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as StoredSession
      if (Array.isArray(parsed?.messages) && parsed.messages.length) {
        setMessages(parsed.messages)
        messagesRef.current = parsed.messages
      }
      if (parsed?.leadForm) {
        setLeadForm((prev) => ({ ...prev, ...parsed.leadForm }))
      }
      if (parsed?.messages?.length > 1 || parsed?.leadForm?.name) {
        setHasStoredSession(true)
        setStatusText(parsed?.leadForm?.name ? `Welcome back, ${parsed.leadForm.name}` : "Welcome back")
      }
    } catch (error) {
      console.error("Could not restore George session", error)
    }
  }, [])

  useEffect(() => {
    messagesRef.current = messages
    const el = scrollRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
    }

    const transcript = buildTranscript(messages)
    const details = extractLeadDetailsFromTranscript(transcript)
    const summary = buildLeadSummary(messages)

    setLeadForm((prev) => ({
      name: details.name || prev.name,
      businessName: details.businessName || prev.businessName,
      email: details.email || prev.email,
      phone: details.phone || prev.phone,
      summary: summary || prev.summary,
    }))
  }, [messages, statusText])

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const payload: StoredSession = { messages, leadForm }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
      setHasStoredSession(messages.length > 1 || Boolean(leadForm.name))
    } catch (error) {
      console.error("Could not persist George session", error)
    }
  }, [messages, leadForm])

  const canStart = useMemo(() => connectionState === "idle" || connectionState === "error", [connectionState])

  const transcript = useMemo(() => buildTranscript(messages), [messages])
  const detailsFromTranscript = useMemo(() => extractLeadDetailsFromTranscript(transcript), [transcript])
  const suggestedSummary = useMemo(() => buildLeadSummary(messages), [messages])
  const canShowLeadForm = true

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
        setStatusText("Live conversation on")
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
        console.error("Realtime error event", event)
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
      messagesRef.current = INITIAL_MESSAGES
      setLeadForm({ name: "", businessName: "", email: "", phone: "", packageChoice: "Custom Quote", summary: "" })
    }

    try {
      const tokenResponse = await fetch("/api/george-session", {
        method: "GET",
        cache: "no-store",
      })

      const tokenData = await tokenResponse.json().catch(() => null)
      if (!tokenResponse.ok) {
        throw new Error(
          typeof tokenData?.error === "string" ? tokenData.error : "Could not create a secure live session.",
        )
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
        void audio.play().catch(() => {
          // Browser autoplay can still block occasionally; audio element remains attached to stream.
        })
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      localStreamRef.current = stream
      stream.getTracks().forEach((track) => pc.addTrack(track, stream))

      const dc = pc.createDataChannel("oai-events")
      dcRef.current = dc

      dc.addEventListener("open", () => {
        setConnectionState("connected")
        setStatusText(hasStoredSession ? (leadForm.name ? `Welcome back, ${leadForm.name}` : "Welcome back") : "Listening…")
        window.setTimeout(() => {
          dc.send(JSON.stringify(buildFirstResponseEvent(hasStoredSession, leadForm.name)))
        }, 150)
      })

      dc.addEventListener("message", (event) => {
        try {
          const data = JSON.parse(event.data)
          handleRealtimeEvent(data)
        } catch (parseError) {
          console.error("Could not parse realtime event", parseError)
        }
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
          if (typeof parsed?.error?.message === "string") {
            message = parsed.error.message
          }
        } catch {
          if (answerText.includes("<html") || answerText.includes("<!DOCTYPE html")) {
            message = "The live voice service timed out while connecting. Please try again."
          } else if (answerText.trim()) {
            message = answerText.trim()
          }
        }

        throw new Error(message)
      }

      await pc.setRemoteDescription({ type: "answer", sdp: answerText })
    } catch (err) {
      console.error("George live voice error", err)
      await cleanupConversation()
      setConnectionState("error")
      setStatusText("Could not connect George")
      setError(err instanceof Error ? err.message : "Could not connect George")
    }
  }

  async function stopConversation() {
    await cleanupConversation()
    setError(null)
    setConnectionState("idle")
    setStatusText(hasStoredSession ? (leadForm.name ? `Welcome back, ${leadForm.name}` : "Welcome back") : "Ready when you are")
  }

  function startFresh() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY)
    }
    const resetLeadForm: LeadFormState = {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      packageChoice: "Custom Quote",
      summary: "",
    }
    setMessages(INITIAL_MESSAGES)
    messagesRef.current = INITIAL_MESSAGES
    setLeadForm(resetLeadForm)
    setHasStoredSession(false)
    setStatusText("Ready when you are")
    setError(null)
  }

  return (
    <section id="live-george" className="mx-auto flex min-h-[calc(100vh-88px)] scroll-mt-28 w-full max-w-6xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="mx-auto mb-6 max-w-4xl text-center">
        <div className="mx-auto mb-5 flex max-w-4xl items-center justify-center overflow-hidden rounded-[28px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 text-left shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">Meet George</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your digital guide and member of staff for your website.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
              George helps visitors get answers quickly, understand what you offer, and move toward the right next step — including directions on your website, directions to your location, and directions around your site once they are there. He helps you get more people through the gate, improves their experience while they’re there, and increases how much they spend on site.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#93C5FD] sm:text-base">
              Guides visitors • Increases bookings • Supports spend • Works 24/7
            </p>
          </div>
        </div>

        <p className="mt-4 text-xl font-medium text-[#202124] sm:text-2xl">Meet George.</p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
          George is a digital guide and member of staff for your website. He helps visitors get answers quickly, find the right next step, and handle three different kinds of directions: directions on your website, directions to your location, and directions around your site once they are there. He also helps you get more people through the gate, improve their experience while they’re there, and increase how much they spend on site.
        </p>
        <p className="mt-4 text-sm font-semibold text-[#1A73E8] sm:text-base">
          Try asking George how he could help with website directions, directions to your location, on-site directions, bookings, and making more money from the traffic you already have.
        </p>
        <p className="mt-3 text-sm text-[#5F6368]">
          This page shows George in demo mode. On most websites George appears as a smaller guide in the corner.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-[30px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(60,64,67,0.12)]">
        <div className="flex items-center gap-3 border-b border-[#E8EAED] bg-[linear-gradient(180deg,#ffffff,#f8fbff)] px-5 py-4 sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] text-base font-semibold text-white shadow-[0_10px_24px_rgba(66,133,244,0.25)]">
            G
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-[#202124] sm:text-lg">George</p>
            <p className="text-sm text-[#5F6368]">Live digital staff member by GuardX</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#5F6368] sm:text-sm">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 ${
                connectionState === "connected"
                  ? "bg-[#EAF6EE] text-[#1E8E3E]"
                  : connectionState === "connecting"
                    ? "bg-[#FFF8E1] text-[#B06000]"
                    : connectionState === "error"
                      ? "bg-[#FDECEA] text-[#B3261E]"
                      : "bg-[#F1F3F4] text-[#5F6368]"
              }`}
            >
              {connectionState === "connected" ? <Volume2 className="h-4 w-4" /> : <Radio className="h-4 w-4" />}
              <span>{isModelSpeaking ? "George is talking" : statusText}</span>
            </span>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto bg-[#F8FAFD] px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[92%] whitespace-pre-wrap rounded-[24px] px-5 py-4 text-[15px] leading-7 shadow-sm sm:max-w-[86%] sm:text-[16px] ${
                    message.role === "user"
                      ? "rounded-br-md bg-[#1A73E8] text-white"
                      : message.role === "assistant"
                        ? "rounded-bl-md border border-[#E5E7EB] bg-white text-[#202124]"
                        : "rounded-bl-md border border-[#D2E3FC] bg-[#EEF4FF] text-[#174EA6]"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {connectionState === "connecting" && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-[#E5E7EB] bg-white px-5 py-4 text-[#5F6368] shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> George is joining the call…
                </div>
              </div>
            )}
          </div>
        </div>


        {canShowLeadForm && (
          <div className="border-t border-[#E8EAED] bg-[#F8FAFD] px-4 py-5 sm:px-6">
            <div className="mx-auto w-full max-w-4xl rounded-[28px] border border-[#DADCE0] bg-white p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-[#202124]">Ready to send your details?</h2>
              <p className="mt-2 text-sm leading-6 text-[#5F6368]">
                George can fill this in from the conversation as you talk. Just check it, make any changes you want, then press submit yourself.
              </p>
              <form action="https://formspree.io/f/mrbypyzv" method="POST" className="mt-4 space-y-3">
                <input type="hidden" name="source" value="Meet George manual form" />
                <input type="hidden" name="page" value={typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george"} />
                <input type="hidden" name="submissionMode" value="manual_submit" />
                <input type="hidden" name="userMessageCount" value={String(messages.filter((message) => message.role === "user").length)} />
                <input type="hidden" name="sessionId" value={conversationSessionIdRef.current} />
                <input type="hidden" name="submittedAt" value={new Date().toISOString()} />
                <input type="hidden" name="transcript" value={transcript} />
                <input type="hidden" name="summary" value={leadForm.summary || suggestedSummary} />
                <input type="hidden" name="_subject" value="New George enquiry" />
                <input type="hidden" name="_replyto" value={leadForm.email} />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={leadForm.name}
                    onChange={(event) => {
                      setLeadForm((prev) => ({ ...prev, name: event.target.value }))
                                      }}
                    required
                    className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                  />
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Business name"
                    value={leadForm.businessName}
                    onChange={(event) => {
                      setLeadForm((prev) => ({ ...prev, businessName: event.target.value }))
                                      }}
                    className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={leadForm.email}
                    onChange={(event) => {
                      setLeadForm((prev) => ({ ...prev, email: event.target.value }))
                                      }}
                    className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone or WhatsApp"
                    value={leadForm.phone}
                    onChange={(event) => {
                      setLeadForm((prev) => ({ ...prev, phone: event.target.value }))
                                      }}
                    className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                  />
                </div>
                <div className="grid gap-3 sm:grid-cols-1">
                  <select
                    name="package"
                    value={leadForm.packageChoice}
                    onChange={(event) => {
                      setLeadForm((prev) => ({ ...prev, packageChoice: event.target.value }))
                    }}
                    required
                    className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                  >
                    <option value="Custom Quote">Custom Quote</option>
                  </select>
                </div>
                <input type="hidden" name="message" value={leadForm.summary || suggestedSummary} />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1558b0]"
                  >
                    Submit enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="border-t border-[#E8EAED] bg-white px-4 py-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#5F6368]">
              {connectionState === "connected"
                ? "You’re in a live conversation. Just speak naturally and George should reply automatically. He will remember the conversation on this device and can pick it back up when you come back."
                : hasStoredSession
                  ? "George remembers returning visitors on this device, so you can continue where you left off or start fresh."
                  : "Start the live conversation and George will greet you, take your name naturally, and reply automatically without push-to-talk."}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={startConversation}
                disabled={!canStart}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1558b0] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Mic className="h-4 w-4" />
                {connectionState === "connected" ? "Live conversation on" : hasStoredSession ? "Continue with George" : "Start live conversation"}
              </button>
              {connectionState === "connected" ? (
                <button
                  type="button"
                  onClick={stopConversation}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DADCE0] bg-white px-5 py-3 text-sm font-semibold text-[#202124] transition hover:bg-[#F8FAFD]"
                >
                  <PhoneOff className="h-4 w-4" /> End conversation
                </button>
              ) : hasStoredSession ? (
                <button
                  type="button"
                  onClick={startFresh}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DADCE0] bg-white px-5 py-3 text-sm font-semibold text-[#202124] transition hover:bg-[#F8FAFD]"
                >
                  Start fresh
                </button>
              ) : null}
            </div>
          </div>
          {error ? <p className="mx-auto mt-3 w-full max-w-4xl text-sm text-[#B3261E]">{error}</p> : null}
        </div>
      </div>
    </section>
  )
}

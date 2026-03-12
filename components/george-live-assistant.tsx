"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Mic, PhoneOff, Radio, Volume2 } from "lucide-react"

type LiveMessage = {
  id: string
  role: "assistant" | "user" | "system"
  content: string
}

type ConnectionState = "idle" | "connecting" | "connected" | "error"

type LeadPayload = {
  sessionId: string
  action: "snapshot" | "finalize"
  name: string
  phone: string
  email: string
  businessName: string
  transcript: string
  source: string
  submittedAt: string
  page: string
  submissionMode: "snapshot" | "conversation_end" | "page_unload" | "inactivity_timeout"
  userMessageCount: number
}

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George, the AI receptionist built into GuardX websites. Try asking me how I could help your business handle customer enquiries.",
  },
]

const FIRST_RESPONSE_EVENT = {
  type: "response.create",
  response: {
    instructions:
      "Briefly introduce yourself as George, the AI receptionist built into GuardX websites, then ask in a warm natural way: 'Out of curiosity, what type of business do you run?'",
  },
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

function newSessionId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `session-${Date.now()}-${Math.random()}`
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

function extractLeadData(transcript: string) {
  const cleaned = normalizeWhitespace(transcript)
  const phoneMatch = cleaned.match(/(?:\+?44\s?7\d{3}|0\d{4}|0\d{3}|0\d{2}|\+?44\s?\d{2,4})[\d\s()-]{6,16}/)
  const emailMatch = cleaned.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
  const strictNameMatch = cleaned.match(/(?:my name is|name is|this is)\s+([a-z][a-z]+(?:\s+[a-z][a-z]+){0,2})/i)
  const businessMatch = cleaned.match(
    /(?:business is called|company is called|company name is|business name is|i'm from|im from)\s+([A-Za-z0-9&'.,\- ]{2,80})/i,
  )

  return {
    name: strictNameMatch?.[1] ? normalizeWhitespace(strictNameMatch[1]).replace(/[.,!?]+$/, "") : "",
    phone: phoneMatch ? normalizeWhitespace(phoneMatch[0]) : "",
    email: emailMatch ? emailMatch[0].trim() : "",
    businessName: businessMatch?.[1] ? normalizeWhitespace(businessMatch[1]).replace(/[.,!?]+$/, "") : "",
  }
}

function hasMeaningfulTranscript(messages: LiveMessage[]) {
  const userMessages = messages.filter((message) => message.role === "user" && normalizeWhitespace(message.content).length >= 2)
  return userMessages.length >= 1
}

export function GeorgeLiveAssistant() {
  const [messages, setMessages] = useState<LiveMessage[]>(INITIAL_MESSAGES)
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle")
  const [statusText, setStatusText] = useState("Ready when you are")
  const [isModelSpeaking, setIsModelSpeaking] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const pcRef = useRef<RTCPeerConnection | null>(null)
  const dcRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const currentAssistantTextRef = useRef("")
  const currentAssistantMessageIdRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const messagesRef = useRef<LiveMessage[]>(INITIAL_MESSAGES)
  const sessionIdRef = useRef(newSessionId())
  const inactivityTimerRef = useRef<number | null>(null)
  const finalTranscriptSentRef = useRef(false)
  const finalizingRef = useRef(false)

  useEffect(() => {
    messagesRef.current = messages
    const el = scrollRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
    }
  }, [messages, statusText])

  const canStart = useMemo(() => connectionState === "idle" || connectionState === "error", [connectionState])

  function clearInactivityTimer() {
    if (inactivityTimerRef.current) {
      window.clearTimeout(inactivityTimerRef.current)
      inactivityTimerRef.current = null
    }
  }

  async function persistTranscriptSnapshot() {
    const transcript = buildTranscript(messagesRef.current)
    if (!transcript.trim()) return false

    const extracted = extractLeadData(transcript)
    const userMessageCount = messagesRef.current.filter((message) => message.role === "user").length

    const payload: LeadPayload = {
      sessionId: sessionIdRef.current,
      action: "snapshot",
      source: "Meet George live voice",
      name: extracted.name,
      phone: extracted.phone,
      email: extracted.email,
      businessName: extracted.businessName,
      transcript,
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
      submissionMode: "snapshot",
      userMessageCount,
    }

    try {
      await fetch("/api/george-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      })
      return true
    } catch (snapshotError) {
      console.error("George snapshot save error", snapshotError)
      return false
    }
  }

  async function finalizeTranscript(reason: "conversation_end" | "page_unload" | "inactivity_timeout") {
    if (finalTranscriptSentRef.current || finalizingRef.current) return false

    const transcript = buildTranscript(messagesRef.current)
    if (!transcript.trim() || !hasMeaningfulTranscript(messagesRef.current)) return false

    const extracted = extractLeadData(transcript)
    const userMessageCount = messagesRef.current.filter((message) => message.role === "user").length

    const payload: LeadPayload = {
      sessionId: sessionIdRef.current,
      action: "finalize",
      source: `Meet George live voice (${reason})`,
      name: extracted.name,
      phone: extracted.phone,
      email: extracted.email,
      businessName: extracted.businessName,
      transcript,
      submittedAt: new Date().toISOString(),
      page: typeof window !== "undefined" ? window.location.href : "https://guardxnetwork.com/meet-george",
      submissionMode: reason,
      userMessageCount,
    }

    finalizingRef.current = true

    try {
      if (reason === "page_unload" && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
        const blob = new Blob([JSON.stringify(payload)], { type: "application/json" })
        const queued = navigator.sendBeacon("/api/george-lead", blob)
        if (queued) {
          finalTranscriptSentRef.current = true
          return true
        }
      }

      const response = await fetch("/api/george-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        keepalive: reason === "page_unload",
      })

      if (!response.ok) {
        const details = await response.text().catch(() => "")
        throw new Error(details || `Lead capture error ${response.status}`)
      }

      finalTranscriptSentRef.current = true
      return true
    } catch (submitError) {
      console.error("George transcript finalize error", submitError)
      return false
    } finally {
      finalizingRef.current = false
    }
  }

  function scheduleInactivityFinalize() {
    clearInactivityTimer()
    inactivityTimerRef.current = window.setTimeout(() => {
      void finalizeTranscript("inactivity_timeout")
    }, 10000)
  }

  useEffect(() => {
    const handlePageLeave = () => {
      void finalizeTranscript("page_unload")
    }

    window.addEventListener("pagehide", handlePageLeave)
    window.addEventListener("beforeunload", handlePageLeave)

    return () => {
      window.removeEventListener("pagehide", handlePageLeave)
      window.removeEventListener("beforeunload", handlePageLeave)
      clearInactivityTimer()
    }
  }, [])

  async function cleanupConversation(options?: { finalizeTranscript?: boolean }) {
    clearInactivityTimer()

    if (options?.finalizeTranscript) {
      await finalizeTranscript("conversation_end")
    }

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
        window.setTimeout(() => {
          void persistTranscriptSnapshot()
          scheduleInactivityFinalize()
        }, 50)
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
      window.setTimeout(() => {
        void persistTranscriptSnapshot()
        scheduleInactivityFinalize()
      }, 50)
    }
  }

  function addUserTranscript(text: string) {
    const cleaned = text.trim()
    if (!cleaned) return
    setMessages((prev) => [...prev, makeMessage("user", cleaned)])
    window.setTimeout(() => {
      void persistTranscriptSnapshot()
      scheduleInactivityFinalize()
    }, 50)
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
        clearInactivityTimer()
        setStatusText("Listening…")
        break
      case "input_audio_buffer.speech_stopped":
        setStatusText("Thinking…")
        break
      case "response.created":
        clearInactivityTimer()
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
        scheduleInactivityFinalize()
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
    setMessages(INITIAL_MESSAGES)
    messagesRef.current = INITIAL_MESSAGES
    finalTranscriptSentRef.current = false
    finalizingRef.current = false
    sessionIdRef.current = newSessionId()
    clearInactivityTimer()

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
        setStatusText("Listening…")
        scheduleInactivityFinalize()
        window.setTimeout(() => {
          dc.send(JSON.stringify(FIRST_RESPONSE_EVENT))
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
    await cleanupConversation({ finalizeTranscript: true })
    setError(null)
    setConnectionState("idle")
    setStatusText("Ready when you are")
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="mx-auto mb-6 max-w-4xl text-center">
        <div className="mx-auto mb-5 flex max-w-4xl items-center justify-center overflow-hidden rounded-[28px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 text-left shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">Meet George</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your AI website sales assistant.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
              George answers questions, captures enquiries, and helps turn website visitors into customers — day or
              night.
            </p>
            <p className="mt-4 text-sm font-semibold text-[#93C5FD] sm:text-base">
              Answers questions • Captures leads • Works 24/7
            </p>
          </div>
        </div>

        <p className="mt-4 text-xl font-medium text-[#202124] sm:text-2xl">Meet George.</p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
          George is the AI receptionist built into GuardX websites. He answers visitor questions, explains services,
          and helps turn more of your website traffic into real enquiries.
        </p>
        <p className="mt-4 text-sm font-semibold text-[#1A73E8] sm:text-base">
          Try asking George how he could help your business handle customer enquiries.
        </p>
        <p className="mt-3 text-sm text-[#5F6368]">
          This page shows George in demo mode. On most websites George appears as a smaller assistant in the corner.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-[30px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(60,64,67,0.12)]">
        <div className="flex items-center gap-3 border-b border-[#E8EAED] bg-[linear-gradient(180deg,#ffffff,#f8fbff)] px-5 py-4 sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] text-base font-semibold text-white shadow-[0_10px_24px_rgba(66,133,244,0.25)]">
            G
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-[#202124] sm:text-lg">George</p>
            <p className="text-sm text-[#5F6368]">Live AI receptionist by GuardX</p>
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

        <div className="border-t border-[#E8EAED] bg-white px-4 py-4 sm:px-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#5F6368]">
              {connectionState === "connected"
                ? "You’re in a live conversation. Just speak naturally and George should reply automatically. If someone leaves their details, George can pass the transcript on."
                : "Start the live conversation and George will greet you, listen, and reply automatically without push-to-talk."}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={startConversation}
                disabled={!canStart}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A73E8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1558b0] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Mic className="h-4 w-4" />
                {connectionState === "connected" ? "Live conversation on" : "Start live conversation"}
              </button>
              {connectionState === "connected" && (
                <button
                  type="button"
                  onClick={stopConversation}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DADCE0] bg-white px-5 py-3 text-sm font-semibold text-[#202124] transition hover:bg-[#F8FAFD]"
                >
                  <PhoneOff className="h-4 w-4" /> End conversation
                </button>
              )}
            </div>
          </div>
          {error ? <p className="mx-auto mt-3 w-full max-w-4xl text-sm text-[#B3261E]">{error}</p> : null}
        </div>
      </div>
    </section>
  )
}

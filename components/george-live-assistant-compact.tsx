"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"
import { ChevronDown, ChevronUp, Loader2, PhoneOff, RotateCcw } from "lucide-react"

type LiveMessage = {
  id: string
  role: "assistant" | "user" | "system"
  content: string
}

type ConnectionState = "idle" | "connecting" | "connected" | "error"

type StoredSession = {
  messages: LiveMessage[]
  visitorName: string | null
  updatedAt: number
}

const STORAGE_KEY = "guardx-meet-george-compact-v1"

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George, a digital member of staff for your website. I help businesses answer questions instantly, guide visitors, capture opportunities, and turn more of their website traffic into enquiries, bookings, and sales. Where it suits the business, I can also act as a digital guide, family-friendly helper, or on-site mascot-style assistant.",
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

function trimMessagesForStorage(messages: LiveMessage[]) {
  return messages.slice(-24)
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

function buildFirstResponseEvent(visitorName: string | null, hasStoredSession: boolean, lastUserMessage: string | null) {
  const instructions = hasStoredSession
    ? `Introduce yourself as George in warm, natural British English only. Keep it short. This visitor already has an ongoing conversation with you on this device. Do not restart from scratch. ${visitorName ? `Their name is ${visitorName}. Use it naturally once.` : ""} ${lastUserMessage ? `The last thing they said before returning was: ${lastUserMessage}` : ""} Briefly welcome them back and ask one short forward-moving question about what they want help with now.`
    : "Introduce yourself as George in warm, upbeat, natural British English only. Keep it short and clear. Explain that you help businesses answer questions instantly, guide visitors, capture opportunities, and help turn more website traffic into enquiries, bookings, or sales. Make it clear that, where it suits the business, you can also act like a digital guide, family-friendly helper, or mascot-style assistant. Keep it simple and natural. Then ask naturally: 'What’s your name, and what type of business do you run?'"

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

  const pcRef = useRef<RTCPeerConnection | null>(null)
  const dcRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const localStreamRef = useRef<MediaStream | null>(null)
  const currentAssistantTextRef = useRef("")
  const currentAssistantMessageIdRef = useRef<string | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const canStart = useMemo(() => connectionState === "idle" || connectionState === "error", [connectionState])
  const latestAssistantMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === "assistant")?.content ?? INITIAL_MESSAGES[0].content,
    [messages],
  )
  const latestUserMessage = useMemo(
    () => [...messages].reverse().find((message) => message.role === "user")?.content ?? null,
    [messages],
  )

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, connectionState, showConversation])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const stored = JSON.parse(raw) as StoredSession
      if (Array.isArray(stored?.messages) && stored.messages.length > 1) {
        setMessages(stored.messages)
        setHasStoredSession(true)
        setVisitorName(stored.visitorName || detectVisitorName(stored.messages))
        setStatusText("Ready to carry on")
      }
    } catch {}
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
    setError(null)
    setConnectionState("idle")
    setStatusText("Ready when you are")
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

  return (
    <section id="live-george" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <style jsx>{`
        @keyframes georgeTalk {
          0%, 100% { transform: translateX(-50%) scaleX(0.96) scaleY(0.72); }
          50% { transform: translateX(-50%) scaleX(1.04) scaleY(1.18); }
        }
        @keyframes georgeWave {
          0%, 100% { transform: scaleY(0.52); opacity: 0.75; }
          50% { transform: scaleY(1.18); opacity: 1; }
        }
        @keyframes georgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
      <div className="overflow-hidden rounded-[36px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
        <div className="px-5 py-8 text-center sm:px-8 sm:py-10">
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] sm:text-5xl">Meet George</h1>

          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
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
                  "radial-gradient(circle at 32% 22%, #94A3B8 0%, #475569 18%, #0F172A 52%, #020617 100%)",
                boxShadow:
                  connectionState === "connected" || connectionState === "connecting"
                    ? "0 0 0 10px rgba(148,163,184,0.12), 0 30px 70px rgba(15,23,42,0.38), inset 0 4px 18px rgba(255,255,255,0.26), inset 0 -16px 32px rgba(2,6,23,0.52)"
                    : "0 24px 54px rgba(15,23,42,0.24), inset 0 3px 16px rgba(255,255,255,0.2), inset 0 -14px 28px rgba(2,6,23,0.48)",
              }}
            >
              <span className="pointer-events-none absolute inset-[7px] rounded-full border border-white/15" />
              <span className="pointer-events-none absolute inset-[18px] rounded-full border border-white/10" />
              <span className="pointer-events-none absolute left-[14%] top-[11%] h-[18%] w-[46%] rounded-full bg-white/25 blur-[12px]" />
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_118%,rgba(255,255,255,0)_46%,rgba(255,255,255,0.12)_76%,rgba(255,255,255,0.2)_100%)]" />

              <div className="pointer-events-none absolute top-[16%] z-20 flex items-end gap-[6px] sm:gap-[7px]" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((bar) => (
                  <span
                    key={bar}
                    className={`w-[7px] rounded-full bg-gradient-to-b from-[#60A5FA] via-[#38BDF8] to-[#1D4ED8] shadow-[0_0_12px_rgba(56,189,248,0.35)] transition-all duration-300 sm:w-[8px] ${
                      isModelSpeaking ? "animate-[georgeWave_0.9s_ease-in-out_infinite]" : "opacity-80"
                    }`}
                    style={{
                      height: isModelSpeaking ? `${18 + (bar % 2 === 0 ? 12 : 24)}px` : `${12 + (bar % 2 === 0 ? 6 : 12)}px`,
                      animationDelay: `${bar * 0.12}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex h-[80%] w-[80%] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#ffffff_0%,#f8fafc_58%,#e2e8f0_100%)] shadow-[inset_0_8px_18px_rgba(255,255,255,0.9),inset_0_-10px_18px_rgba(148,163,184,0.22),0_16px_36px_rgba(15,23,42,0.18)]">
                <div className={`relative flex h-[80%] w-[80%] items-center justify-center transition ${isModelSpeaking ? "animate-[georgeFloat_1.8s_ease-in-out_infinite]" : ""}`}>
                  <Image
                    src="/george-avatar.png"
                    alt="George"
                    width={260}
                    height={246}
                    className={`h-[82%] w-[82%] object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.18)] transition ${
                      connectionState === "connected" || connectionState === "connecting" ? "scale-[1.02]" : "scale-100"
                    }`}
                    priority
                  />
                  <span
                    aria-hidden="true"
                    className={`absolute left-1/2 top-[66%] z-20 -translate-x-1/2 rounded-full border-[3px] border-[#0F2A6C] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.18)] transition-all duration-150 ${
                      isModelSpeaking ? "h-[18px] w-[56px] sm:h-[22px] sm:w-[68px] animate-[georgeTalk_0.22s_ease-in-out_infinite]" : "h-[10px] w-[44px] sm:h-[12px] sm:w-[52px]"
                    }`}
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <span className="absolute inset-x-[18%] bottom-[18%] top-[28%] rounded-full bg-[radial-gradient(circle_at_50%_10%,#FCA5A5_0%,#FB7185_58%,#E11D48_100%)] opacity-90" />
                  </span>
                </div>
              </div>
              <span className="sr-only">{connectionState === "connected" ? "George is live" : "Start talking to George"}</span>
            </button>

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
    </section>
  )
}

"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Mic, PhoneOff, Radio, Volume2 } from "lucide-react"

type LiveMessage = {
  id: string
  role: "assistant" | "user" | "system"
  content: string
}

type ConnectionState = "idle" | "connecting" | "connected" | "error"

const INITIAL_MESSAGES: LiveMessage[] = [
  {
    id: "intro",
    role: "system",
    content:
      "Hi — I’m George, the AI receptionist built into GuardX websites. Try asking me how I could help your business handle customer enquiries.",
  },
]

const SESSION_UPDATE_EVENT = {
  type: "session.update",
  session: {
    type: "realtime",
    model: "gpt-realtime",
    output_modalities: ["audio", "text"],
    audio: {
      input: {
        turn_detection: {
          type: "semantic_vad",
          eagerness: "high",
          interrupt_response: true,
          create_response: true,
        },
      },
      output: {
        voice: "cedar",
        speed: 1.1,
      },
    },
    instructions: `You are George, the friendly AI receptionist built into GuardX websites.

Speak directly to the business owner you are talking to. Use plain English, not jargon.

Your job is to help them understand that GuardX builds modern, fast business websites with you built in as the AI receptionist.

What you do:
- answer visitor questions
- explain services and pricing clearly
- keep people engaged instead of letting them quietly leave the site
- help turn more website visitors into genuine enquiries
- save the owner time by handling the same early questions customers ask again and again
- collect details and pass serious enquiries through to the GuardX team

GuardX websites are typically around £99 per month depending on the setup. That includes the website, hosting, and you as the AI receptionist built into the site.

GuardX is best for trades, local service businesses, carpet and flooring shops, scaffolders, builders, contractors, and similar businesses that get repetitive questions.

GuardX does not focus on large ecommerce stores, custom software systems, or complex booking platforms.

If someone asks whether £99 is expensive, calmly explain that they are not just getting a website that sits there. They are getting a professional website plus an assistant that can answer questions, keep visitors engaged, and help turn more of that traffic into enquiries. If it helps bring in one extra customer, it often pays for itself.

Keep your answers conversational, warm, upbeat, and concise. Sound like a sharp, cheerful receptionist rather than a pushy salesperson.

Use little phrases like:
- That's a really good question.
- A lot of business owners ask that.
- Out of curiosity...

Ask natural questions back when helpful, such as:
- What type of business do you run?
- Do you currently have a website?
- Do customers often ask the same questions about your services?
- What would you want a website assistant like me to help with most?

If the user gives their name, use it naturally later.

When someone is clearly interested, invite them to leave their details so GuardX can follow up.`,
  },
}

const FIRST_RESPONSE_EVENT = {
  type: "response.create",
  response: {
    output_modalities: ["audio", "text"],
    instructions:
      "Briefly introduce yourself as George, the AI receptionist built into GuardX websites, then ask in a warm natural way: 'Out of curiosity, what type of business do you run?'",
  },
}

function makeMessage(role: LiveMessage["role"], content: string): LiveMessage {
  return {
    id: typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${role}-${Date.now()}-${Math.random()}`,
    role,
    content,
  }
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

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
    }
  }, [messages, statusText])

  useEffect(() => {
    return () => {
      stopConversation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const canStart = useMemo(() => connectionState === "idle" || connectionState === "error", [connectionState])

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
      case "response.audio.delta":
        setIsModelSpeaking(true)
        setStatusText("George is replying…")
        break
      case "response.audio.done":
        setIsModelSpeaking(false)
        setStatusText("Listening…")
        break
      case "response.audio_transcript.delta":
        appendOrUpdateAssistantPartial(typeof event.delta === "string" ? event.delta : "")
        break
      case "response.audio_transcript.done":
        appendOrUpdateAssistantPartial(typeof event.transcript === "string" ? event.transcript : "", true)
        break
      case "response.output_text.delta":
      case "response.text.delta":
        appendOrUpdateAssistantPartial(typeof event.delta === "string" ? event.delta : "")
        break
      case "response.output_text.done":
      case "response.text.done":
        appendOrUpdateAssistantPartial(typeof event.text === "string" ? event.text : "", true)
        break
      case "conversation.item.input_audio_transcription.completed":
        addUserTranscript(typeof event.transcript === "string" ? event.transcript : "")
        break
      case "error":
        setError(event?.error?.message || "George hit a voice error.")
        setConnectionState("error")
        setStatusText("There was a connection problem")
        break
      default:
        break
    }
  }

  async function startConversation() {
    if (!canStart) return

    setConnectionState("connecting")
    setError(null)
    setStatusText("Connecting George…")
    setMessages(INITIAL_MESSAGES)

    try {
      const pc = new RTCPeerConnection()
      pcRef.current = pc

      const audio = document.createElement("audio")
      audio.autoplay = true
      audioRef.current = audio

      pc.ontrack = (event) => {
        audio.srcObject = event.streams[0]
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      localStreamRef.current = stream
      stream.getTracks().forEach((track) => pc.addTrack(track, stream))

      const dc = pc.createDataChannel("oai-events")
      dcRef.current = dc

      dc.addEventListener("open", () => {
        setConnectionState("connected")
        setStatusText("Listening…")
        dc.send(JSON.stringify(SESSION_UPDATE_EVENT))
        window.setTimeout(() => {
          dc.send(JSON.stringify(FIRST_RESPONSE_EVENT))
        }, 200)
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

      const response = await fetch("/api/george-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/sdp",
        },
        body: offer.sdp,
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || "Could not connect George.")
      }

      const answerSdp = await response.text()
      await pc.setRemoteDescription({ type: "answer", sdp: answerSdp })
    } catch (err) {
      console.error("George live voice error", err)
      setConnectionState("error")
      setStatusText("Could not connect George")
      setError(err instanceof Error ? err.message : "Could not connect George")
      stopConversation()
    }
  }

  function stopConversation() {
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
      audioRef.current = null
    }

    currentAssistantTextRef.current = ""
    currentAssistantMessageIdRef.current = null
    setIsModelSpeaking(false)
    setConnectionState("idle")
    setStatusText("Ready when you are")
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="mx-auto mb-6 max-w-4xl text-center">
        <h1 className="guardx-hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-[pulse_6s_ease-in-out_infinite]">
          Websites that can actually talk to your visitors.
        </h1>
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
                ? "You’re in a live conversation. Just speak naturally and George should reply automatically."
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

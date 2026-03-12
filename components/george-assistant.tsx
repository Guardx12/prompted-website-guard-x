"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Mic, MicOff, Send, Volume2, VolumeX } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

type ChatMessage = {
  id: string
  role: "assistant" | "user"
  content: string
}

type LeadState = {
  name: string
  businessName: string
  email: string
  phone: string
}

type SubmitState = "idle" | "loading" | "success" | "error"
type LeadIntent = "none" | "offer"

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
  interface MediaRecorderOptions {
    mimeType?: string
  }
}

const FORWARD_INTENT_PHRASES = [
  "i want this",
  "i'm interested",
  "im interested",
  "sounds good",
  "can i get this",
  "next step",
  "contact",
  "speak to luke",
  "speak with luke",
  "let's do it",
  "lets do it",
  "how do we start",
  "how do i start",
  "i'd like to go ahead",
  "id like to go ahead",
  "get a quote",
  "request a quote",
  "can someone contact me",
  "pass me on",
  "go ahead",
]

const openingMessage: ChatMessage = {
  id: "george-opening",
  role: "assistant",
  content:
    "Hi — I’m George, the AI receptionist built into GuardX websites. I answer visitor questions, explain how GuardX works, and help people understand how something like this could help their business. Businesses can train me on their services, pricing, and the questions customers usually ask — and the more I know, the more I can handle automatically. Out of curiosity, what type of business do you run?",
}

function buildTranscript(messages: ChatMessage[]) {
  return messages
    .map((message) => `${message.role === "assistant" ? "George" : "Visitor"}: ${message.content}`)
    .join("

")
}

function shouldOfferLeadCapture(text: string) {
  const lower = text.toLowerCase()
  return FORWARD_INTENT_PHRASES.some((phrase) => lower.includes(phrase))
}

function detectBusinessType(messages: ChatMessage[]) {
  const userMessages = messages.filter((m) => m.role === "user").map((m) => m.content).join(" ").toLowerCase()
  const patterns = [
    "scaffold", "builder", "plumber", "electric", "floor", "carpet", "roofer", "gym", "shop", "garage", "landscap", "groundwork", "storage", "cleaner", "decorator",
  ]
  return patterns.find((p) => userMessages.includes(p)) || ""
}

export function GeorgeAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [leadState, setLeadState] = useState<LeadState>({ name: "", businessName: "", email: "", phone: "" })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [leadIntent, setLeadIntent] = useState<LeadIntent>("none")
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentAudioUrlRef = useRef<string | null>(null)
  const chatScrollRef = useRef<HTMLDivElement | null>(null)
  const hasMountedRef = useRef(false)
  const transcriptSentRef = useRef(false)

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    const container = chatScrollRef.current
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" })
    }
  }, [messages, isTyping, leadIntent])

  useEffect(() => {
    return () => {
      mediaRecorderRef.current?.stop()
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop())
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
      if (currentAudioUrlRef.current) {
        URL.revokeObjectURL(currentAudioUrlRef.current)
      }
    }
  }, [])

  const transcript = useMemo(() => buildTranscript(messages), [messages])
  const businessType = useMemo(() => detectBusinessType(messages), [messages])

  useEffect(() => {
    const sendTranscript = async () => {
      if (transcriptSentRef.current) return
      if (messages.length < 3) return
      transcriptSentRef.current = true
      try {
        await fetch("/api/george/log", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ transcript, businessType, messageCount: messages.length }),
          keepalive: true,
        })
      } catch (error) {
        console.error("Transcript send failed", error)
      }
    }

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        void sendTranscript()
      }
    }

    const handleBeforeUnload = () => {
      void sendTranscript()
    }

    document.addEventListener("visibilitychange", handleVisibility)
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [messages.length, transcript, businessType])

  const speakText = async (text: string) => {
    try {
      setIsSpeaking(true)
      const response = await fetch("/api/george/speak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error("Speech failed")
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      if (currentAudioUrlRef.current) {
        URL.revokeObjectURL(currentAudioUrlRef.current)
      }
      currentAudioUrlRef.current = url

      const audio = audioRef.current ?? new Audio()
      audioRef.current = audio
      audio.pause()
      audio.src = url
      audio.currentTime = 0
      audio.onended = () => {
        setIsSpeaking(false)
      }
      audio.onerror = () => {
        setIsSpeaking(false)
      }

      await audio.play()
    } catch (error) {
      console.error("George voice playback error", error)
      setIsSpeaking(false)
    }
  }

  const sendMessage = async (raw: string) => {
    const value = raw.trim()
    if (!value || isTyping || isTranscribing) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput("")
    setIsTyping(true)
    transcriptSentRef.current = false

    try {
      const history = nextMessages.slice(0, -1).map((message) => ({
        role: message.role,
        content: message.content,
      }))

      const response = await fetch("/api/george", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: value,
          history,
        }),
      })

      if (!response.ok) {
        throw new Error("George reply failed")
      }

      const data = await response.json()
      const reply = typeof data.reply === "string" && data.reply.trim()
        ? data.reply.trim()
        : "That’s a really good question. I’m George, the AI receptionist built into GuardX websites. If I was on your website, I could help answer the questions your customers normally ask and guide more visitors toward becoming enquiries. Out of curiosity, what type of business do you run?"

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (voiceEnabled) {
        void speakText(reply)
      }

      if (shouldOfferLeadCapture(value) || shouldOfferLeadCapture(reply)) {
        setLeadIntent("offer")
      }
    } catch (error) {
      console.error("George chat error", error)
      const fallbackReply = "I couldn’t reply properly just then. Please try again in a moment and I’ll carry on from there."
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: fallbackReply,
        },
      ])
      if (voiceEnabled) {
        void speakText(fallbackReply)
      }
    } finally {
      setIsTyping(false)
    }
  }

  const transcribeAudio = async (blob: Blob) => {
    setIsTranscribing(true)
    try {
      const formData = new FormData()
      const extension = blob.type.includes("webm") ? "webm" : blob.type.includes("ogg") ? "ogg" : "wav"
      formData.append("file", new File([blob], `george-audio.${extension}`, { type: blob.type || "audio/webm" }))

      const response = await fetch("/api/george/transcribe", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Transcription failed")
      }

      const data = await response.json()
      const text = typeof data.text === "string" ? data.text.trim() : ""

      if (text) {
        await sendMessage(text)
      }
    } catch (error) {
      console.error("George transcription error", error)
      const fallbackReply = "I couldn’t hear that properly. Give it another go and I’ll listen again."
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: fallbackReply,
        },
      ])
      if (voiceEnabled) {
        void speakText(fallbackReply)
      }
    } finally {
      setIsTranscribing(false)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStreamRef.current = stream

      const supportedMimeType = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"].find(
        (mimeType) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mimeType),
      )

      const recorder = new MediaRecorder(stream, supportedMimeType ? { mimeType: supportedMimeType } : undefined)
      audioChunksRef.current = []

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || "audio/webm" })
        mediaStreamRef.current?.getTracks().forEach((track) => track.stop())
        mediaStreamRef.current = null
        mediaRecorderRef.current = null
        if (blob.size > 0) {
          await transcribeAudio(blob)
        }
      }

      recorder.start()
      mediaRecorderRef.current = recorder
      setIsRecording(true)
    } catch (error) {
      console.error("George microphone error", error)
      const fallbackReply = "I couldn’t access the microphone just then. If you allow microphone access, I can listen and reply by voice."
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: fallbackReply,
        },
      ])
      if (voiceEnabled) {
        void speakText(fallbackReply)
      }
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop()
    }
    setIsRecording(false)
  }

  const toggleRecording = async () => {
    if (isRecording) {
      stopRecording()
      return
    }
    await startRecording()
  }

  const handleLeadSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!leadState.name || (!leadState.email && !leadState.phone)) return

    setSubmitState("loading")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: "New George lead",
          source: "Meet George page",
          name: leadState.name,
          businessName: leadState.businessName,
          email: leadState.email,
          phone: leadState.phone,
          businessType,
          transcript,
        }),
      })

      if (!response.ok) throw new Error("Failed")

      setSubmitState("success")
      setLeadIntent("none")
      const successReply = "Perfect — I’ve passed that on properly. Your details and the conversation have both gone through, which makes the follow-up much more useful than a normal contact form."
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: successReply,
        },
      ])
      if (voiceEnabled) {
        void speakText(successReply)
      }
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="mx-auto mb-6 max-w-4xl text-center">
        <h1 className="guardx-hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-[pulse_6s_ease-in-out_infinite]">
          Websites that can actually talk to your visitors.
        </h1>
        <p className="mt-4 text-xl font-medium text-[#202124] sm:text-2xl">Meet George.</p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
          George is the AI receptionist built into GuardX websites. He answers visitor questions, explains services, and helps turn website visitors into enquiries.
        </p>
        <p className="mt-4 text-base font-semibold text-[#1A73E8] sm:text-lg">
          Try asking George how he could help your business handle customer enquiries.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#5F6368] sm:text-base">
          This page shows George in demo mode. On most websites, George appears as a small assistant in the corner ready to answer visitor questions whenever they need help.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-[30px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(60,64,67,0.12)]">
        <div className="flex items-center gap-3 border-b border-[#E8EAED] bg-[linear-gradient(180deg,#ffffff,#f8fbff)] px-5 py-4 sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] text-base font-semibold text-white shadow-[0_10px_24px_rgba(66,133,244,0.25)]">
            G
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-[#202124] sm:text-lg">George</p>
            <p className="text-sm text-[#5F6368]">AI receptionist by GuardX</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#5F6368] sm:text-sm">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 ${isRecording ? "bg-[#FDECEA] text-[#B3261E]" : voiceEnabled ? "bg-[#EAF6EE] text-[#1E8E3E]" : "bg-[#F1F3F4] text-[#5F6368]"}`}>
              {isRecording ? <MicOff className="h-4 w-4" /> : voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              <span>{isRecording ? "Listening" : voiceEnabled ? "Voice on" : "Voice muted"}</span>
            </span>
          </div>
        </div>

        <div ref={chatScrollRef} className="flex-1 overflow-y-auto bg-[#F8FAFD] px-4 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[92%] whitespace-pre-wrap rounded-[24px] px-5 py-4 text-[15px] leading-7 shadow-sm sm:max-w-[86%] sm:text-[16px] ${
                    message.role === "assistant"
                      ? "rounded-bl-md border border-[#E5E7EB] bg-white text-[#202124]"
                      : "rounded-br-md bg-[#1A73E8] text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-[#E5E7EB] bg-white px-5 py-4 text-[#5F6368] shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> George is replying…
                </div>
              </div>
            )}

            {isTranscribing && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-[#E5E7EB] bg-white px-5 py-4 text-[#5F6368] shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin" /> George is listening…
                </div>
              </div>
            )}

            {leadIntent === "offer" && submitState !== "success" && (
              <div className="flex justify-start">
                <div className="w-full max-w-[92%] rounded-[24px] rounded-bl-md border border-[#DADCE0] bg-white px-5 py-5 shadow-sm sm:max-w-[86%]">
                  <p className="text-base font-semibold text-[#202124]">Pass your details on</p>
                  <p className="mt-2 text-sm leading-6 text-[#5F6368]">
                    If you’d like to go ahead, leave a couple of details below and I’ll pass the conversation on properly.
                  </p>
                  <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={leadState.name}
                      onChange={(e) => setLeadState((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                    />
                    <input
                      type="text"
                      placeholder="Business name"
                      value={leadState.businessName}
                      onChange={(e) => setLeadState((prev) => ({ ...prev, businessName: e.target.value }))}
                      className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={leadState.email}
                      onChange={(e) => setLeadState((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                    />
                    <input
                      type="text"
                      placeholder="Phone or WhatsApp"
                      value={leadState.phone}
                      onChange={(e) => setLeadState((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-[#202124] outline-none focus:border-[#AECBFA]"
                    />
                    <button
                      type="submit"
                      disabled={submitState === "loading"}
                      className="inline-flex items-center gap-2 rounded-full bg-[#1A73E8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1558B0] disabled:opacity-70"
                    >
                      {submitState === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                      Send details
                    </button>
                    {submitState === "error" ? <p className="text-sm text-red-600">That didn’t go through properly. Please try again.</p> : null}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-[#E8EAED] bg-white px-4 py-4 sm:px-6">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              void sendMessage(input)
            }}
            className="mx-auto flex w-full max-w-4xl items-end gap-3"
          >
            <button
              type="button"
              onClick={() => {
                setVoiceEnabled(true)
                void toggleRecording()
              }}
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-[0_10px_25px_rgba(26,115,232,0.28)] transition disabled:opacity-60 ${
                isRecording ? "bg-[#D93025] hover:bg-[#b3261e]" : "bg-[#34A853] hover:bg-[#2b8a46]"
              }`}
              disabled={isTyping || isTranscribing}
              aria-label={isRecording ? "Stop recording" : "Start voice input"}
              title={isRecording ? "Stop recording" : "Talk to George"}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>

            <div className="flex-1 rounded-[28px] border border-[#DADCE0] bg-[#F8FAFD] px-4 py-3 shadow-sm focus-within:border-[#AECBFA]">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={1}
                placeholder={isRecording ? "Listening… tap stop when you're done" : "Message George… or tap the microphone to talk"}
                className="w-full resize-none bg-transparent text-[15px] leading-6 text-[#202124] outline-none placeholder:text-[#80868B]"
              />
            </div>
            <button
              type="button"
              onClick={() => setVoiceEnabled((prev) => !prev)}
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition disabled:opacity-60 ${voiceEnabled ? "border-[#CDE7D4] bg-[#EAF6EE] text-[#1E8E3E] hover:bg-[#dff0e5]" : "border-[#DADCE0] bg-white text-[#5F6368] hover:bg-[#F1F3F4]"}`}
              aria-label={voiceEnabled ? "Turn George voice off" : "Turn George voice on"}
              title={voiceEnabled ? "Voice replies on" : "Voice replies off"}
              disabled={isRecording || isTranscribing}
            >
              {voiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>
            <button
              type="submit"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-[0_10px_25px_rgba(26,115,232,0.28)] transition hover:bg-[#1558B0] disabled:opacity-60"
              disabled={!input.trim() || isTyping || isTranscribing || isRecording}
              aria-label="Send"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          <div className="mx-auto mt-3 flex w-full max-w-4xl items-center justify-between px-1 text-xs text-[#5F6368] sm:text-sm">
            <p>{isRecording ? "George is listening now — tap stop when you’ve finished speaking." : "Tap the microphone once to start a voice conversation with George."}</p>
            <button
              type="button"
              onClick={() => {
                const latestAssistant = [...messages].reverse().find((message) => message.role === "assistant")
                if (latestAssistant?.content) {
                  void speakText(latestAssistant.content)
                }
              }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-medium text-[#1A73E8] transition hover:bg-[#EEF4FF] disabled:opacity-60"
              disabled={isSpeaking || messages.filter((message) => message.role === "assistant").length === 0}
            >
              {isSpeaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
              <span className="hidden sm:inline">Replay George</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

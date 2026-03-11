"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Mic, MicOff, Send, Volume2 } from "lucide-react"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

type ChatMessage = {
  id: string
  role: "assistant" | "user"
  content: string
}

type LeadState = {
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
]

const openingMessage: ChatMessage = {
  id: "george-opening",
  role: "assistant",
  content:
    "Hi — I’m George. I’m the digital receptionist and sales assistant built into GuardX websites. My job is to answer questions, explain how things work, deal with the common customer conversations businesses usually have, and help turn visitors into customers. I’m given the knowledge I need about the business I’m working for — services, pricing, how things work, the kinds of jobs they take on, and the questions customers normally ask — so I can handle those repetitive explanations properly instead of the business owner having to keep doing them all day. Ask me anything.",
}

function buildTranscript(messages: ChatMessage[]) {
  return messages
    .map((message) => `${message.role === "assistant" ? "George" : "Visitor"}: ${message.content}`)
    .join("\n\n")
}

function shouldOfferLeadCapture(text: string) {
  const lower = text.toLowerCase()
  return FORWARD_INTENT_PHRASES.some((phrase) => lower.includes(phrase))
}

export function GeorgeAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [leadState, setLeadState] = useState<LeadState>({ businessName: "", email: "", phone: "" })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [leadIntent, setLeadIntent] = useState<LeadIntent>("none")
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const mediaStreamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping, leadIntent])

  useEffect(() => {
    return () => {
      mediaRecorderRef.current?.stop()
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop())
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
    }
  }, [])

  const transcript = useMemo(() => buildTranscript(messages), [messages])

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

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = url
      } else {
        audioRef.current = new Audio(url)
      }

      audioRef.current.onended = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(url)
      }
      audioRef.current.onerror = () => {
        setIsSpeaking(false)
        URL.revokeObjectURL(url)
      }

      await audioRef.current.play()
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
        : "That’s a good question. I’m George, the digital receptionist and sales assistant built into GuardX websites, and my job is to answer questions clearly and help visitors understand how a website like this can turn more visitors into real enquiries."

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (shouldOfferLeadCapture(value)) {
        setLeadIntent("offer")
      }
    } catch (error) {
      console.error("George chat error", error)
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I couldn’t reply properly just then. Please try again in a moment and I’ll carry on from there.",
        },
      ])
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
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "I couldn’t hear that properly. Give it another go and I’ll listen again.",
        },
      ])
    } finally {
      setIsTranscribing(false)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaStreamRef.current = stream

      const supportedMimeType = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/ogg;codecs=opus",
      ].find((mimeType) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mimeType))

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
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I couldn’t access the microphone just then. If you allow microphone access, I can listen and reply by voice.",
        },
      ])
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
    if (!leadState.businessName || !leadState.email) return

    setSubmitState("loading")

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          source: "Meet George page",
          businessName: leadState.businessName,
          email: leadState.email,
          phone: leadState.phone,
          transcript,
        }),
      })

      if (!response.ok) throw new Error("Failed")

      setSubmitState("success")
      setLeadIntent("none")
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Perfect — that’s been passed on properly. The conversation can now be seen together with your details, which makes the follow-up far more useful than a normal contact form.",
        },
      ])
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-6xl flex-col px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pt-10">
      <div className="mx-auto mb-6 max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[#202124] sm:text-5xl lg:text-6xl">
          Turn your website into a 24/7 salesperson.
        </h1>
        <p className="mt-4 text-xl font-medium text-[#202124] sm:text-2xl">Meet George.</p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#5F6368] sm:text-lg sm:leading-8">
          George is the digital receptionist and sales assistant built into GuardX websites. He answers
          questions, explains how things work, deals with customer interactions, and helps turn visitors into
          customers.
        </p>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-[#5F6368] sm:text-base">
          Saves time · Saves money · Helps create more revenue
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-[30px] border border-[#DADCE0] bg-white shadow-[0_24px_80px_rgba(60,64,67,0.12)]">
        <div className="flex items-center gap-3 border-b border-[#E8EAED] bg-[linear-gradient(180deg,#ffffff,#f8fbff)] px-5 py-4 sm:px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] text-base font-semibold text-white shadow-[0_10px_24px_rgba(66,133,244,0.25)]">
            G
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-semibold text-[#202124] sm:text-lg">George</p>
            <p className="text-sm text-[#5F6368]">Digital receptionist and sales assistant by GuardX</p>
          </div>
          <button
            type="button"
            onClick={() => {
              const latestAssistant = [...messages].reverse().find((message) => message.role === "assistant")
              if (latestAssistant?.content) {
                void speakText(latestAssistant.content)
              }
            }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DADCE0] bg-white text-[#202124] transition hover:bg-[#F1F3F4] disabled:opacity-60"
            aria-label="Play George's latest reply"
            disabled={isSpeaking || messages.filter((message) => message.role === "assistant").length === 0}
          >
            {isSpeaking ? <Loader2 className="h-4 w-4 animate-spin" /> : <Volume2 className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#F8FAFD] px-4 py-6 sm:px-6 sm:py-8">
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
                  <p className="text-base font-semibold text-[#202124]">Leave your details</p>
                  <p className="mt-2 text-sm leading-6 text-[#5F6368]">
                    If you want this for your business, leave your details below and the conversation can be passed on properly.
                  </p>
                  <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
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
                      placeholder="Phone or WhatsApp (optional)"
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
                      Send conversation
                    </button>
                    {submitState === "error" ? <p className="text-sm text-red-600">That didn’t go through properly. Please try again.</p> : null}
                  </form>
                </div>
              </div>
            )}

            <div ref={endRef} />
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
              onClick={() => void toggleRecording()}
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
                placeholder={isRecording ? "Listening… tap the microphone again when you're done" : "Message George… or tap the microphone to talk"}
                className="w-full resize-none bg-transparent text-[15px] leading-6 text-[#202124] outline-none placeholder:text-[#80868B]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-[0_10px_25px_rgba(26,115,232,0.28)] transition hover:bg-[#1558B0] disabled:opacity-60"
              disabled={!input.trim() || isTyping || isTranscribing || isRecording}
              aria-label="Send"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
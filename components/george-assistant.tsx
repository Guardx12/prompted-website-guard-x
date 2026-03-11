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
  businessName: string
  email: string
  phone: string
}

type SubmitState = "idle" | "loading" | "success" | "error"
type LeadIntent = "none" | "offer"

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList
    resultIndex: number
  }

  interface SpeechRecognitionErrorEvent extends Event {
    error: string
    message?: string
  }

  interface SpeechRecognitionConstructor {
    new (): SpeechRecognition
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean
    interimResults: boolean
    lang: string
    maxAlternatives: number
    onresult: ((event: SpeechRecognitionEvent) => void) | null
    onerror: ((event: SpeechRecognitionErrorEvent) => void) | null
    onend: (() => void) | null
    start: () => void
    stop: () => void
    abort: () => void
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
    "Hi — I’m George. I’m the friendly digital receptionist and sales assistant built into GuardX websites. I answer questions, explain how things work, and help guide visitors toward becoming customers — without sounding stiff or pushy. I can be trained on the business I’m working for, so I can talk through services, pricing, and the usual questions customers ask. Ask me anything.",
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

function pickBestMaleVoice(voices: SpeechSynthesisVoice[]) {
  const rankedMatchers = [
    /google uk english male/i,
    /daniel/i,
    /male/i,
    /arthur/i,
    /ryan/i,
    /alex/i,
    /david/i,
    /tom/i,
  ]

  for (const matcher of rankedMatchers) {
    const found = voices.find((voice) => matcher.test(voice.name))
    if (found) return found
  }

  const british = voices.find((voice) => /en-gb/i.test(voice.lang))
  if (british) return british

  const english = voices.find((voice) => /en/i.test(voice.lang))
  if (english) return english

  return voices[0] ?? null
}

export function GeorgeAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [leadState, setLeadState] = useState<LeadState>({ businessName: "", email: "", phone: "" })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [leadIntent, setLeadIntent] = useState<LeadIntent>("none")
  const [speechReady, setSpeechReady] = useState(false)
  const [speechError, setSpeechError] = useState<string | null>(null)
  const chatScrollRef = useRef<HTMLDivElement | null>(null)
  const hasMountedRef = useRef(false)
  const recognitionRef = useRef<SpeechRecognition | null>(null)
  const finalTranscriptRef = useRef("")
  const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null)

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
    if (typeof window === "undefined") return

    const updateVoices = () => {
      const voices = window.speechSynthesis?.getVoices?.() ?? []
      selectedVoiceRef.current = pickBestMaleVoice(voices)
    }

    updateVoices()
    window.speechSynthesis?.addEventListener?.("voiceschanged", updateVoices)

    const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition
    setSpeechReady(Boolean(SpeechRecognitionCtor && window.speechSynthesis))

    return () => {
      recognitionRef.current?.abort()
      window.speechSynthesis?.cancel()
      window.speechSynthesis?.removeEventListener?.("voiceschanged", updateVoices)
    }
  }, [])

  const transcript = useMemo(() => buildTranscript(messages), [messages])

  const speakText = async (text: string) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return

    try {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = selectedVoiceRef.current
      utterance.lang = selectedVoiceRef.current?.lang || "en-GB"
      utterance.rate = 1.18
      utterance.pitch = 0.92
      utterance.volume = 1
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)
      window.speechSynthesis.speak(utterance)
    } catch (error) {
      console.error("George browser voice playback error", error)
      setIsSpeaking(false)
    }
  }

  const sendMessage = async (raw: string) => {
    const value = raw.trim()
    if (!value || isTyping) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
    }

    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput("")
    setIsTyping(true)
    setSpeechError(null)

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

      if (voiceEnabled) {
        void speakText(reply)
      }

      if (shouldOfferLeadCapture(value)) {
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

  const stopRecognition = () => {
    recognitionRef.current?.stop()
    setIsRecording(false)
  }

  const startRecognition = async () => {
    if (typeof window === "undefined") return

    const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognitionCtor) {
      setSpeechError("Voice chat is not supported in this browser. You can still type to George.")
      return
    }

    try {
      setSpeechError(null)
      finalTranscriptRef.current = ""
      window.speechSynthesis?.cancel()

      const recognition = new SpeechRecognitionCtor()
      recognition.continuous = false
      recognition.interimResults = true
      recognition.lang = "en-GB"
      recognition.maxAlternatives = 1

      recognition.onresult = (event) => {
        let latestFinal = ""

        for (let i = event.resultIndex; i < event.results.length; i += 1) {
          const result = event.results[i]
          const transcriptPiece = result?.[0]?.transcript?.trim() || ""
          if (result.isFinal && transcriptPiece) {
            latestFinal += `${transcriptPiece} `
          }
        }

        if (latestFinal.trim()) {
          finalTranscriptRef.current = `${finalTranscriptRef.current} ${latestFinal}`.trim()
        }
      }

      recognition.onerror = (event) => {
        console.error("George speech recognition error", event)
        setIsRecording(false)

        if (event.error !== "aborted" && event.error !== "no-speech") {
          setSpeechError("I couldn’t hear that properly. Try again, or type your message below.")
        }
      }

      recognition.onend = async () => {
        setIsRecording(false)
        const finalText = finalTranscriptRef.current.trim()
        recognitionRef.current = null

        if (finalText) {
          finalTranscriptRef.current = ""
          await sendMessage(finalText)
        }
      }

      recognitionRef.current = recognition
      recognition.start()
      setIsRecording(true)
    } catch (error) {
      console.error("George microphone error", error)
      setIsRecording(false)
      setSpeechError("I couldn’t access the microphone just then. Please allow microphone access, or type your message below.")
    }
  }

  const toggleRecording = async () => {
    if (isRecording) {
      stopRecognition()
      return
    }

    await startRecognition()
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
      const successReply = "Perfect — that’s been passed on properly. The conversation can now be seen together with your details, which makes the follow-up far more useful than a normal contact form."
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
          <div className="flex items-center gap-2 text-xs font-medium text-[#5F6368] sm:text-sm">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-2 ${
              isRecording
                ? "bg-[#FDECEA] text-[#B3261E]"
                : isSpeaking
                  ? "bg-[#E8F0FE] text-[#1A73E8]"
                  : voiceEnabled
                    ? "bg-[#EAF6EE] text-[#1E8E3E]"
                    : "bg-[#F1F3F4] text-[#5F6368]"
            }`}>
              {isRecording ? <MicOff className="h-4 w-4" /> : voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              <span>{isRecording ? "Listening" : isSpeaking ? "George is speaking" : voiceEnabled ? "Voice conversation on" : "Voice off"}</span>
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

            {speechError ? (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-3 rounded-[24px] rounded-bl-md border border-[#F5C2C7] bg-[#FFF5F5] px-5 py-4 text-[#B3261E] shadow-sm">
                  {speechError}
                </div>
              </div>
            ) : null}

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
              disabled={isTyping || !speechReady}
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
                placeholder={isRecording ? "Listening… tap again to stop" : "Message George… or tap the microphone to talk"}
                className="max-h-40 w-full resize-none bg-transparent text-[15px] leading-6 text-[#202124] outline-none placeholder:text-[#80868B] sm:text-[16px]"
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault()
                    void sendMessage(input)
                  }
                }}
              />
            </div>

            <button
              type="button"
              onClick={() => setVoiceEnabled((prev) => !prev)}
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition ${
                voiceEnabled
                  ? "border-[#D2E3FC] bg-[#E8F0FE] text-[#1A73E8] hover:bg-[#dbe8fd]"
                  : "border-[#DADCE0] bg-white text-[#5F6368] hover:bg-[#F8FAFD]"
              }`}
              aria-label={voiceEnabled ? "Mute George voice" : "Unmute George voice"}
              title={voiceEnabled ? "Mute George voice" : "Unmute George voice"}
            >
              {voiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
            </button>

            <button
              type="submit"
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-[0_10px_25px_rgba(26,115,232,0.28)] transition hover:bg-[#1558B0] disabled:opacity-60"
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              title="Send"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Bot, CheckCircle2, ChevronRight, Loader2, MessageSquareText, PlayCircle, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Message = {
  id: string
  role: "assistant" | "user"
  content: React.ReactNode
  highlight?: boolean
}

type Stage =
  | "intro"
  | "reviews"
  | "customers"
  | "pitch"
  | "pitch-actions"
  | "demo"
  | "question"
  | "form"
  | "submitted"

type SubmitState = "idle" | "loading" | "success" | "error"

const reviewOptions = ["0–20", "21–50", "51–100", "100+", "Not sure"]
const customerOptions = ["1–25", "26–50", "51–100", "100+", "Not sure"]
const standoutOptions = ["Yes", "Not always", "Not sure"]
const deliveryOptions = ["Email + SMS", "SMS only", "Email only", "Not sure yet"]
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrbypyzv"

function buildPitchSteps({ standingAnswer, reviewAnswer, customerAnswer }: { standingAnswer: string | null; reviewAnswer: string | null; customerAnswer: string | null }) {
  const standingLine =
    standingAnswer === "Yes"
      ? "That is a strong starting point. The next job is protecting it, because nearby competitors can still look more active if they keep collecting recent reviews and replying consistently."
      : standingAnswer === "Not always"
        ? "That is usually where easy enquiries start leaking away. When a nearby competitor looks more active and more trusted, they often get the first click or call."
        : "That uncertainty matters. If a customer is comparing a few local businesses, the one that looks more active and better looked-after often feels like the safer option."

  const reviewLine =
    reviewAnswer === "0–20"
      ? "At that level, every genuine review can noticeably strengthen how your business appears."
      : reviewAnswer === "21–50"
        ? "With around 21–50 reviews, the opportunity is not just to add more — it is to keep them coming in consistently so the profile looks alive."
        : reviewAnswer === "51–100"
          ? "With 51–100 reviews, many businesses already have a decent base. The difference usually comes from keeping reviews recent and replies consistent."
          : reviewAnswer === "100+"
            ? "A 100+ review base is strong. At that point, recency, momentum and active replies often become the thing customers notice first."
            : "Many businesses focus on total review count. In reality, customers often notice how recent the reviews are and whether the business is actively replying."

  const customerLine =
    customerAnswer === "1–25"
      ? "Even with 1–25 customers a month, a steady stream of genuine reviews can quickly change how trusted the profile looks."
      : customerAnswer === "26–50"
        ? "With 26–50 customers a month, there is a real opportunity to keep review activity moving instead of letting the profile go stale."
        : customerAnswer === "51–100"
          ? "If you serve around 51–100 customers in a month, even a small lift in enquiries from Google can become a meaningful revenue difference over time."
          : customerAnswer === "100+"
            ? "At 100+ customers a month, even a modest change in how often people choose you first can translate into serious extra revenue over time."
            : "Even a small change in who looks more trusted on Google can quietly change who gets the enquiry first."

  const visibilityLine =
    reviewAnswer === "0–20" || reviewAnswer === "21–50"
      ? "Google Business Profile local ranking partly uses prominence, and Google says more reviews and positive ratings can help local ranking. That means building the review base matters."
      : "Google Business Profile local ranking partly uses prominence, and Google says more reviews and positive ratings can help local ranking. Once the base is there, keeping the profile active becomes the extra edge."

  const recencyLine =
    reviewAnswer === "100+"
      ? "A lot of owners assume total reviews and star rating are the whole story. They are not. Customers still notice whether the latest feedback is recent and whether the business is replying."
      : "A lot of owners assume it is only about total reviews or star rating. It is not. Customers also notice whether the latest reviews are recent and whether the profile feels active right now."

  return [
    `${standingLine}

${reviewLine}

And to be clear, GuardX only helps you collect genuine reviews from your real customers — nothing fake, nothing bought, and nothing dodgy.`,
    `${recencyLine}

A profile with fresh reviews can often look more trusted than one with an older review total that has barely moved for months.`,
    `${visibilityLine}

Google tends to reward profiles that feel active and well cared for. Put simply: stronger recent review activity and active replies can help your business get seen more often and chosen more often when people search locally.` ,
    `Now picture customers comparing you with nearby competitors. ${customerLine}

That is why review activity can affect revenue more than most businesses realise.`,
    `This is where GuardX comes in. We manage the whole process for you — generating genuine reviews, sending branded review requests, replying to reviews, and keeping the profile looking active and professionally managed.`,
    `You can run it by email, SMS, or both. Some businesses use a simple staff form, some upload customers in batches, and many just send us their customer details weekly so we handle the rest.`,
    `You can try everything free for 30 days first. After that, most businesses invest around £25 per week for the fully managed system.`,
    `Would you like to see the review request in action, ask a question, or start your 30-day free trial?`,
  ]
}

function playUiTone(kind: "soft" | "complete" | "tap") {
  if (typeof window === "undefined") return
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioContextClass) return

  try {
    const context = new AudioContextClass()
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.connect(gain)
    gain.connect(context.destination)

    const now = context.currentTime
    const config =
      kind === "tap"
        ? { freq: 620, endFreq: 560, duration: 0.05, volume: 0.012 }
        : kind === "complete"
          ? { freq: 720, endFreq: 860, duration: 0.12, volume: 0.016 }
          : { freq: 520, endFreq: 600, duration: 0.07, volume: 0.01 }

    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(config.freq, now)
    oscillator.frequency.linearRampToValueAtTime(config.endFreq, now + config.duration)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.linearRampToValueAtTime(config.volume, now + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + config.duration)

    oscillator.start(now)
    oscillator.stop(now + config.duration)

    window.setTimeout(() => context.close().catch(() => undefined), 180)
  } catch {
    // ignore audio errors
  }
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] shadow-[0_8px_24px_rgba(66,133,244,0.22)]">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <div className="rounded-[24px] rounded-bl-md border border-white/70 bg-white/95 px-4 py-3 shadow-[0_18px_40px_rgba(60,64,67,0.10)] backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#4285F4] [animation-delay:-0.24s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#34A853] [animation-delay:-0.12s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#FBBC05]" />
        </div>
      </div>
    </div>
  )
}


function ReviewStars() {
  return (
    <div className="mb-2.5 flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="inline-block text-[15px] leading-none text-[#FBBC04] drop-shadow-[0_1px_3px_rgba(251,188,4,0.45)] animate-[pulse_2.8s_ease-in-out_infinite]"
          style={{ animationDelay: `${index * 120}ms` }}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#C58B00]">
        Genuine customer reviews
      </span>
    </div>
  )
}

function AssistantBubble({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] shadow-[0_8px_24px_rgba(66,133,244,0.22)]">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <div
        className={`max-w-[88%] rounded-[24px] rounded-bl-md border px-4 py-3.5 text-[16px] leading-7 shadow-[0_18px_40px_rgba(60,64,67,0.10)] sm:max-w-[82%] sm:px-5 sm:py-4 sm:text-[17px] ${
          highlight
            ? "border-[#D2E3FC] bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF5FF_100%)] text-[#202124]"
            : "border-white/70 bg-white/95 text-[#202124] backdrop-blur"
        }`}
      >
        <ReviewStars />
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[84%] rounded-[24px] rounded-br-md bg-[linear-gradient(135deg,#1A73E8,#4285F4)] px-4 py-3.5 text-[15px] font-medium leading-6 text-white shadow-[0_16px_36px_rgba(26,115,232,0.28)] sm:max-w-[76%] sm:text-[16px]">
        {children}
      </div>
    </div>
  )
}

function OptionButtons({ options, onChoose }: { options: string[]; onChoose: (value: string) => void }) {
  return (
    <div className="grid gap-2.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChoose(option)}
          className="w-full rounded-[20px] border border-white/80 bg-white px-4 py-4 text-left text-[15px] font-semibold text-[#202124] shadow-[0_10px_28px_rgba(60,64,67,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#AECBFA] hover:shadow-[0_14px_32px_rgba(66,133,244,0.16)] active:translate-y-0 active:scale-[0.995]"
        >
          <div className="flex items-center justify-between gap-3">
            <span>{option}</span>
            <ChevronRight className="h-4 w-4 text-[#5F6368]" />
          </div>
        </button>
      ))}
    </div>
  )
}

function TypewriterText({ text, messageKey, onDone, soundEnabled = false }: { text: string; messageKey: string; onDone: () => void; soundEnabled?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    let index = 0
    let tickCounter = 0
    setVisibleCount(0)

    const interval = window.setInterval(() => {
      index += 1
      tickCounter += 1
      setVisibleCount(index)

      if (soundEnabled && tickCounter % 8 === 0) {
        playUiTone("soft")
      }

      if (index >= text.length) {
        window.clearInterval(interval)
        if (soundEnabled) playUiTone("complete")
        window.setTimeout(() => onDoneRef.current(), 220)
      }
    }, 18)

    return () => window.clearInterval(interval)
  }, [messageKey, text, soundEnabled])

  const visibleText = text.slice(0, visibleCount)
  const paragraphs = visibleText.split("\n\n")

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={`${messageKey}-${index}`} className={index > 0 ? "mt-3.5" : ""}>
          {paragraph}
        </p>
      ))}
      {visibleCount < text.length ? <span className="ml-1 inline-block h-5 w-[2px] animate-pulse rounded-full bg-[#1A73E8] align-middle" /> : null}
    </div>
  )
}

function ChatShell({ children, actionArea, soundEnabled, onToggleSound }: { children: React.ReactNode; actionArea?: React.ReactNode; soundEnabled: boolean; onToggleSound: () => void }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#E8F0FE_0%,#F7F9FC_38%,#EEF3F9_100%)] text-[#202124]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col sm:px-4 sm:py-4">
        <div className="flex min-h-screen flex-col overflow-hidden bg-transparent sm:min-h-[calc(100vh-2rem)] sm:rounded-[32px] sm:border sm:border-white/70 sm:bg-white/55 sm:shadow-[0_28px_80px_rgba(60,64,67,0.14)] sm:backdrop-blur-xl">
          <div className="sticky top-0 z-20 border-b border-white/70 bg-white/82 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] shadow-[0_8px_24px_rgba(66,133,244,0.22)]">
                  <MessageSquareText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-[#202124] sm:text-[15px]">GuardX Assistant</p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-[#5F6368]">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#34A853] shadow-[0_0_0_4px_rgba(52,168,83,0.12)]" />
                    Live review check
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onToggleSound}
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-2 text-xs font-medium text-[#5F6368] shadow-sm transition hover:border-[#AECBFA] hover:text-[#202124]"
              >
                {soundEnabled ? <Volume2 className="h-4 w-4 text-[#1A73E8]" /> : <VolumeX className="h-4 w-4" />}
                Sound
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-5 sm:px-6 sm:py-6">
            <div className="space-y-4">{children}</div>
          </div>

          <div className="sticky bottom-0 z-20 border-t border-white/70 bg-white/88 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
            {actionArea}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReviewCheckChatbot() {
  const [stage, setStage] = useState<Stage>("intro")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [standingAnswer, setStandingAnswer] = useState<string | null>(null)
  const [reviewAnswer, setReviewAnswer] = useState<string | null>(null)
  const [customerAnswer, setCustomerAnswer] = useState<string | null>(null)
  const [pitchIndex, setPitchIndex] = useState(0)
  const [pitchTypedDone, setPitchTypedDone] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [submitError, setSubmitError] = useState("")
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [questionForm, setQuestionForm] = useState({ businessName: "", email: "", question: "" })
  const [setupForm, setSetupForm] = useState({
    businessName: "",
    email: "",
    address: "",
    method: "Email + SMS",
  })

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const timeoutsRef = useRef<number[]>([])

  const pitchSteps = useMemo(
    () => buildPitchSteps({ standingAnswer, reviewAnswer, customerAnswer }),
    [standingAnswer, reviewAnswer, customerAnswer],
  )

  const enqueueAssistant = (entries: Array<{ content: React.ReactNode; highlight?: boolean }>, after?: () => void) => {
    setIsTyping(true)
    const localTimeouts: number[] = []

    entries.forEach((entry, index) => {
      const timeout = window.setTimeout(
        () => {
          setMessages((prev) => [
            ...prev,
            {
              id: `${Date.now()}-${index}-${Math.random()}`,
              role: "assistant",
              content: entry.content,
              highlight: entry.highlight,
            },
          ])
          if (soundEnabled) playUiTone("complete")

          if (index === entries.length - 1) {
            setIsTyping(false)
            after?.()
          }
        },
        420 + index * 760,
      )
      localTimeouts.push(timeout)
    })

    timeoutsRef.current.push(...localTimeouts)
  }

  useEffect(() => {
    enqueueAssistant([
      {
        content: (
          <>
            <p className="text-[17px] font-semibold tracking-tight text-[#202124] sm:text-[18px]">Hi 👋</p>
            <p className="mt-3">When customers find your business on Google, they usually compare a few local businesses.</p>
            <p className="mt-3 font-semibold text-[#1A73E8]">Do you feel your business stands out as the most trusted option when they do that?</p>
          </>
        ),
        highlight: true,
      },
    ])

    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isTyping, stage, submitState, pitchIndex, pitchTypedDone])

  const chatSummary = useMemo(
    () =>
      `Standout: ${standingAnswer ?? "Not answered"} | Reviews: ${reviewAnswer ?? "Not answered"} | Monthly customers: ${customerAnswer ?? "Not answered"} | Preferred method: ${setupForm.method}`,
    [standingAnswer, reviewAnswer, customerAnswer, setupForm.method],
  )

  const submitToFormspree = async (fields: Record<string, string>) => {
    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => formData.append(key, value))

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    if (!response.ok) {
      throw new Error("Failed to send form")
    }
  }

  const handleChoose = (stageName: "standing" | "reviews" | "customers", value: string) => {
    if (soundEnabled) playUiTone("tap")

    if (stageName === "standing") {
      setStandingAnswer(value)
      setMessages((prev) => [...prev, { id: `user-standing-${Date.now()}`, role: "user", content: value }])
      setStage("reviews")
      enqueueAssistant([
        {
          content: (
            <>
              <p className="font-semibold text-[#1A73E8]">Roughly how many Google reviews do you have at the moment?</p>
              <p className="mt-2 text-sm text-[#5F6368]">We’re talking about genuine reviews from real customers here — the kind that build trust properly.</p>
            </>
          ),
        },
      ])
      return
    }

    if (stageName === "reviews") {
      setReviewAnswer(value)
      setMessages((prev) => [...prev, { id: `user-reviews-${Date.now()}`, role: "user", content: value }])
      setStage("customers")
      enqueueAssistant([
        {
          content: <p className="font-semibold text-[#1A73E8]">Roughly how many customers do you serve in a typical month?</p>,
        },
      ])
      return
    }

    setCustomerAnswer(value)
    setMessages((prev) => [...prev, { id: `user-customers-${Date.now()}`, role: "user", content: value }])
    window.setTimeout(() => {
      setPitchIndex(0)
      setPitchTypedDone(false)
      setStage("pitch")
    }, 240)
  }

  const nextPitchStep = () => {
    if (soundEnabled) playUiTone("tap")

    const currentText = pitchSteps[pitchIndex]
    setMessages((prev) => [
      ...prev,
      {
        id: `pitch-${pitchIndex}-${Date.now()}`,
        role: "assistant",
        content: (
          <div>
            {currentText.split("\n\n").map((paragraph, index) => (
              <p key={`${pitchIndex}-${index}`} className={index > 0 ? "mt-3.5" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        ),
        highlight: pitchIndex < pitchSteps.length - 1,
      },
    ])

    const nextIndex = pitchIndex + 1
    if (nextIndex >= pitchSteps.length) {
      setPitchTypedDone(false)
      setStage("pitch-actions")
      return
    }

    setPitchIndex(nextIndex)
    setPitchTypedDone(false)
  }

  const showDemo = () => {
    if (soundEnabled) playUiTone("tap")
    setMessages((prev) => [...prev, { id: `user-demo-${Date.now()}`, role: "user", content: "See quick demo" }])
    setStage("demo")
    enqueueAssistant([
      {
        content: (
          <>
            <p className="font-semibold text-[#202124]">Here’s a quick example of the branded review request customers receive.</p>
            <div className="mt-4 overflow-hidden rounded-[22px] border border-[#D2E3FC] bg-black shadow-[0_16px_38px_rgba(60,64,67,0.12)]">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/2bWvt6aJQSk"
                  title="GuardX review request demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-4">If it looks right for your business, you can start the 30-day free trial below.</p>
          </>
        ),
      },
    ])
  }

  const openQuestionForm = () => {
    if (soundEnabled) playUiTone("tap")
    setMessages((prev) => [...prev, { id: `user-question-${Date.now()}`, role: "user", content: "Ask a question" }])
    setStage("question")
    enqueueAssistant([
      {
        content: (
          <>
            <p className="font-semibold text-[#1A73E8]">Ask a question</p>
            <p className="mt-3">Drop your details below and I’ll send your question through.</p>
          </>
        ),
      },
    ])
  }

  const openSetupForm = () => {
    if (soundEnabled) playUiTone("tap")
    setMessages((prev) => [...prev, { id: `user-form-${Date.now()}`, role: "user", content: "Start 30-Day Free Trial" }])
    setStage("form")
    enqueueAssistant([
      {
        content: (
          <>
            <p className="font-semibold text-[#1A73E8]">Great — let’s get your 30-day free trial ready.</p>
            <p className="mt-3">This takes about 30 seconds. If SMS is included, we’ll email the separate verification/documents step afterwards.</p>
          </>
        ),
      },
    ])
  }

  async function submitSetup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState("loading")
    setSubmitError("")

    try {
      await submitToFormspree({
        business_name: setupForm.businessName,
        business_email: setupForm.email,
        business_address: setupForm.address,
        preferred_method: setupForm.method,
        standout_answer: standingAnswer ?? "Not answered",
        review_count: reviewAnswer ?? "Not answered",
        monthly_customers: customerAnswer ?? "Not answered",
        chat_summary: chatSummary,
        source: "/check chatbot free trial",
      })

      setSubmitState("success")
      setStage("submitted")
      enqueueAssistant([
        {
          content: (
            <>
              <p className="font-semibold text-[#1A73E8]">All set — thanks.</p>
              <p className="mt-3">Your details have been sent through. We’ll follow up by email with the next step.</p>
            </>
          ),
        },
      ])
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  async function submitQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState("loading")
    setSubmitError("")

    try {
      await submitToFormspree({
        business_name: questionForm.businessName || "GuardX chat visitor",
        business_email: questionForm.email,
        business_address: "Not provided",
        standout_answer: standingAnswer ?? "Not answered",
        review_count: reviewAnswer ?? "Not answered",
        monthly_customers: customerAnswer ?? "Not answered",
        chat_summary: chatSummary,
        question: questionForm.question,
        source: "/check chatbot question",
      })

      setSubmitState("success")
      setStage("submitted")
      enqueueAssistant([
        {
          content: (
            <>
              <p className="font-semibold text-[#1A73E8]">Your question has been sent.</p>
              <p className="mt-3">We’ll reply by email as soon as we can.</p>
            </>
          ),
        },
      ])
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  const actionArea = (() => {
    if (isTyping) {
      return <div className="text-sm font-medium text-[#5F6368]">GuardX assistant is typing…</div>
    }

    if (stage === "intro") return <OptionButtons options={standoutOptions} onChoose={(value) => handleChoose("standing", value)} />
    if (stage === "reviews") return <OptionButtons options={reviewOptions} onChoose={(value) => handleChoose("reviews", value)} />
    if (stage === "customers") return <OptionButtons options={customerOptions} onChoose={(value) => handleChoose("customers", value)} />

    if (stage === "pitch") {
      return (
        <Button
          type="button"
          onClick={nextPitchStep}
          disabled={!pitchTypedDone}
          className="h-14 w-full rounded-[20px] bg-[linear-gradient(135deg,#1A73E8,#4285F4)] text-base font-semibold text-white shadow-[0_18px_36px_rgba(26,115,232,0.28)] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </Button>
      )
    }

    if (stage === "pitch-actions" || stage === "demo") {
      return (
        <div className="grid gap-2.5 sm:grid-cols-3">
          <Button type="button" onClick={openSetupForm} className="h-14 rounded-[20px] bg-[linear-gradient(135deg,#34A853,#2D9B47)] text-base font-semibold text-white shadow-[0_18px_36px_rgba(52,168,83,0.26)] hover:opacity-95">
            Start 30-Day Free Trial
          </Button>
          <Button type="button" variant="outline" onClick={showDemo} className="h-14 rounded-[20px] border-white/80 bg-white text-base font-semibold text-[#202124] shadow-sm hover:bg-[#F8FAFF]">
            <PlayCircle className="mr-2 h-4 w-4" /> See quick demo
          </Button>
          <Button type="button" variant="outline" onClick={openQuestionForm} className="h-14 rounded-[20px] border-white/80 bg-white text-base font-semibold text-[#202124] shadow-sm hover:bg-[#F8FAFF]">
            Ask a question
          </Button>
        </div>
      )
    }

    if (stage === "question") {
      return (
        <form className="grid gap-3" onSubmit={submitQuestion}>
          <Input
            required
            value={questionForm.businessName}
            onChange={(e) => setQuestionForm((prev) => ({ ...prev, businessName: e.target.value }))}
            placeholder="Business name"
            className="h-12 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          <Input
            required
            type="email"
            value={questionForm.email}
            onChange={(e) => setQuestionForm((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Business email"
            className="h-12 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          <Textarea
            required
            value={questionForm.question}
            onChange={(e) => setQuestionForm((prev) => ({ ...prev, question: e.target.value }))}
            placeholder="Type your question"
            className="min-h-28 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          {submitState === "error" && <p className="text-sm text-[#D93025]">{submitError}</p>}
          <div className="grid gap-2 sm:grid-cols-2">
            <Button type="submit" disabled={submitState === "loading"} className="h-14 rounded-[20px] bg-[linear-gradient(135deg,#1A73E8,#4285F4)] text-base font-semibold text-white shadow-[0_18px_36px_rgba(26,115,232,0.28)] hover:opacity-95">
              {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Send question
            </Button>
            <Button type="button" variant="outline" onClick={() => setStage("pitch-actions")} className="h-14 rounded-[20px] border-white/80 bg-white text-base font-semibold text-[#202124] shadow-sm hover:bg-[#F8FAFF]">
              Back
            </Button>
          </div>
        </form>
      )
    }

    if (stage === "form") {
      return (
        <form className="grid gap-3" onSubmit={submitSetup}>
          <Input
            required
            value={setupForm.businessName}
            onChange={(e) => setSetupForm((prev) => ({ ...prev, businessName: e.target.value }))}
            placeholder="Business name"
            className="h-12 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          <Input
            required
            type="email"
            value={setupForm.email}
            onChange={(e) => setSetupForm((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Business email"
            className="h-12 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          <Input
            required
            value={setupForm.address}
            onChange={(e) => setSetupForm((prev) => ({ ...prev, address: e.target.value }))}
            placeholder="Business address"
            className="h-12 rounded-[18px] border-white/80 bg-white text-[15px] text-[#202124] shadow-sm placeholder:text-[#5F6368]"
          />
          <div className="grid gap-2.5">
            <p className="text-sm font-semibold text-[#5F6368]">How would you like review requests sent?</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {deliveryOptions.map((option) => {
                const active = setupForm.method === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      if (soundEnabled) playUiTone("tap")
                      setSetupForm((prev) => ({ ...prev, method: option }))
                    }}
                    className={`rounded-[18px] border px-4 py-3 text-left text-sm font-semibold transition ${
                      active
                        ? "border-[#AECBFA] bg-[#E8F0FE] text-[#174EA6] shadow-[0_10px_24px_rgba(66,133,244,0.16)]"
                        : "border-white/80 bg-white text-[#202124] shadow-sm hover:bg-[#F8FAFF]"
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
          {submitState === "error" && <p className="text-sm text-[#D93025]">{submitError}</p>}
          <Button type="submit" disabled={submitState === "loading"} className="h-14 rounded-[20px] bg-[linear-gradient(135deg,#34A853,#2D9B47)] text-base font-semibold text-white shadow-[0_18px_36px_rgba(52,168,83,0.26)] hover:opacity-95">
            {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Start 30-Day Free Trial
          </Button>
        </form>
      )
    }

    if (stage === "submitted") {
      return (
        <div className="flex items-center gap-3 rounded-[20px] border border-[#D2E3FC] bg-[linear-gradient(180deg,#FFFFFF_0%,#EEF5FF_100%)] px-4 py-4 text-sm text-[#5F6368] shadow-sm">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#34A853]" />
          Your details have been submitted successfully.
        </div>
      )
    }

    return null
  })()

  return (
    <ChatShell soundEnabled={soundEnabled} onToggleSound={() => setSoundEnabled((prev) => !prev)} actionArea={actionArea}>
      {messages.map((message) =>
        message.role === "assistant" ? (
          <AssistantBubble key={message.id} highlight={message.highlight}>
            {message.content}
          </AssistantBubble>
        ) : (
          <UserBubble key={message.id}>{message.content}</UserBubble>
        ),
      )}

      {stage === "pitch" ? (
        <AssistantBubble highlight>
          <TypewriterText
            messageKey={`pitch-live-${pitchIndex}`}
            text={pitchSteps[pitchIndex]}
            soundEnabled={soundEnabled}
            onDone={() => setPitchTypedDone(true)}
          />
        </AssistantBubble>
      ) : null}

      {isTyping ? <TypingIndicator /> : null}
      <div ref={scrollerRef} />
    </ChatShell>
  )
}

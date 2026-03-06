"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Bot, Loader2, MessageCircle, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type Message = {
  id: string
  role: "assistant" | "user"
  content: React.ReactNode
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

const pitchSteps = [
  "When customers compare businesses on Google, the ones with the most recent reviews and active responses often appear more trusted and professional.\n\nThat is usually the business that gets the enquiry first.",
  "For example, imagine 100 potential customers searching for your service this month.\n\nEven if only a small portion choose a competitor because their profile looks more active, that can still mean missed enquiries without realising it.",
  "GuardX is a fully managed review system designed to help your business look active, trusted and competitive.\n\nWe help you generate more genuine reviews, send branded review requests, reply to reviews for you, and keep your profile looking professional.",
  "Businesses can run it by email, SMS, or both. Some use bulk uploads, some use a simple staff form, and many just send customers weekly so we handle the rest.\n\nThe goal is simple: keep your Google presence active enough that more customers feel confident choosing you.",
  "You can try it free for 30 days.\n\nAfter that, most businesses invest around £25 per week for the fully managed system.\n\nWould you like to see the review request in action, ask a question, or start your free trial?",
]

function TypingBubble() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DADCE0] bg-white shadow-sm">
        <Bot className="h-5 w-5 text-[#4285F4]" />
      </div>
      <div className="rounded-[22px] rounded-bl-md border border-[#D2E3FC] bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#4285F4] [animation-delay:-0.2s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#34A853] [animation-delay:-0.1s]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#FBBC05]" />
        </div>
      </div>
    </div>
  )
}

function AssistantBubble({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DADCE0] bg-white shadow-sm">
        <Bot className="h-5 w-5 text-[#4285F4]" />
      </div>
      <div
        className={`max-w-[86%] rounded-[22px] rounded-bl-md border px-4 py-3 text-[15px] leading-6 shadow-sm sm:max-w-[78%] ${
          highlight
            ? "border-[#D2E3FC] bg-gradient-to-br from-white to-[#EEF4FF] text-[#202124]"
            : "border-[#E8EAED] bg-white text-[#202124]"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[86%] rounded-[22px] rounded-br-md bg-gradient-to-r from-[#4285F4] to-[#1A73E8] px-4 py-3 text-[15px] font-medium leading-6 text-white shadow-sm sm:max-w-[78%]">
        {children}
      </div>
    </div>
  )
}

function OptionButtons({ options, onChoose }: { options: string[]; onChoose: (value: string) => void }) {
  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChoose(option)}
          className="w-full rounded-2xl border border-[#DADCE0] bg-white px-4 py-3 text-left text-[15px] font-medium text-[#202124] shadow-sm transition hover:border-[#4285F4] hover:bg-[#F8FAFF] active:scale-[0.99]"
        >
          {option}
        </button>
      ))}
    </div>
  )
}

function TypewriterText({ text, onDone }: { text: string; onDone: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    setVisibleCount(0)
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setVisibleCount(index)
      if (index >= text.length) {
        window.clearInterval(interval)
        window.setTimeout(onDone, 150)
      }
    }, 16)

    return () => window.clearInterval(interval)
  }, [text, onDone])

  const visibleText = text.slice(0, visibleCount)
  const paragraphs = visibleText.split("\n\n")

  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 10)}`} className={index > 0 ? "mt-3" : ""}>
          {paragraph}
        </p>
      ))}
      {visibleCount < text.length ? <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-[#1A73E8] align-middle" /> : null}
    </div>
  )
}

function ChatShell({ children, actionArea }: { children: React.ReactNode; actionArea?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F3F6FB]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
        <div className="sticky top-0 z-20 border-b border-[#DCE5F3] bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#DCE5F3]">
              <MessageCircle className="h-5 w-5 text-[#4285F4]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#202124]">GuardX Assistant</p>
              <p className="text-xs text-[#5F6368]">Review check</p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-5 sm:px-6 sm:py-6">
          <div className="space-y-4">{children}</div>
        </div>

        <div className="sticky bottom-0 z-20 border-t border-[#DCE5F3] bg-white/96 px-4 py-4 backdrop-blur sm:px-6">
          {actionArea}
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
  const [pitchTyping, setPitchTyping] = useState(false)
  const [pitchTypedDone, setPitchTypedDone] = useState(false)
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [submitError, setSubmitError] = useState("")
  const [questionForm, setQuestionForm] = useState({ businessName: "", email: "", question: "" })
  const [setupForm, setSetupForm] = useState({
    businessName: "",
    email: "",
    address: "",
    method: "Email + SMS",
  })
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const timeoutsRef = useRef<number[]>([])

  const enqueueAssistant = (entries: React.ReactNode[], after?: () => void) => {
    setIsTyping(true)
    const localTimeouts: number[] = []
    entries.forEach((entry, index) => {
      const timeout = window.setTimeout(
        () => {
          setMessages((prev) => [...prev, { id: `${Date.now()}-${index}-${Math.random()}`, role: "assistant", content: entry }])
          if (index === entries.length - 1) {
            setIsTyping(false)
            after?.()
          }
        },
        450 + index * 850,
      )
      localTimeouts.push(timeout)
    })
    timeoutsRef.current.push(...localTimeouts)
  }

  const startPitchStep = (index: number) => {
    setPitchIndex(index)
    setPitchTyping(true)
    setPitchTypedDone(false)
    setStage("pitch")
  }

  useEffect(() => {
    enqueueAssistant([
      <>
        <p>Hi 👋</p>
        <p className="mt-3">When customers find your business on Google, they usually compare a few local businesses.</p>
        <p className="mt-3 font-medium text-[#1A73E8]">Do you feel your business stands out as the most trusted option when they do that?</p>
      </>,
    ])

    return () => {
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    scrollerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages, isTyping, stage, submitState, pitchTyping, pitchTypedDone, pitchIndex])

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

  const chooseStanding = (value: string) => {
    setStandingAnswer(value)
    setMessages((prev) => [...prev, { id: `user-standing-${Date.now()}`, role: "user", content: value }])
    setStage("reviews")
    enqueueAssistant([<p className="font-medium text-[#1A73E8]">Roughly how many Google reviews do you have at the moment?</p>])
  }

  const chooseReviews = (value: string) => {
    setReviewAnswer(value)
    setMessages((prev) => [...prev, { id: `user-reviews-${Date.now()}`, role: "user", content: value }])
    setStage("customers")
    enqueueAssistant([<p className="font-medium text-[#1A73E8]">Roughly how many customers do you serve in a typical month?</p>])
  }

  const chooseCustomers = (value: string) => {
    setCustomerAnswer(value)
    setMessages((prev) => [...prev, { id: `user-customers-${Date.now()}`, role: "user", content: value }])
    window.setTimeout(() => startPitchStep(0), 250)
  }

  const nextPitchStep = () => {
    const currentText = pitchSteps[pitchIndex]
    setMessages((prev) => [
      ...prev,
      {
        id: `pitch-${pitchIndex}-${Date.now()}`,
        role: "assistant",
        content: (
          <div>
            {currentText.split("\n\n").map((paragraph, index) => (
              <p key={`${pitchIndex}-${index}`} className={index > 0 ? "mt-3" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        ),
      },
    ])

    const nextIndex = pitchIndex + 1
    if (nextIndex >= pitchSteps.length) {
      setPitchTyping(false)
      setPitchTypedDone(false)
      setStage("pitch-actions")
      return
    }

    window.setTimeout(() => startPitchStep(nextIndex), 150)
  }

  const showDemo = () => {
    setMessages((prev) => [...prev, { id: `user-demo-${Date.now()}`, role: "user", content: "See quick demo" }])
    setStage("demo")
    enqueueAssistant([
      <>
        <p className="mb-3">Here’s a quick example of the branded review request customers receive.</p>
        <div className="overflow-hidden rounded-2xl border border-[#D2E3FC] bg-black shadow-sm">
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
        <p className="mt-3">If you want, you can start the 30-day free trial below.</p>
      </>,
    ])
  }

  const openQuestionForm = () => {
    setMessages((prev) => [...prev, { id: `user-question-${Date.now()}`, role: "user", content: "Ask a question" }])
    setStage("question")
    enqueueAssistant([
      <>
        <p className="font-medium text-[#1A73E8]">Ask a question</p>
        <p className="mt-3">Drop your details below and I’ll send your question through.</p>
      </>,
    ])
  }

  const openSetupForm = () => {
    setMessages((prev) => [...prev, { id: `user-form-${Date.now()}`, role: "user", content: "Start 30-Day Free Trial" }])
    setStage("form")
    enqueueAssistant([
      <>
        <p className="font-medium text-[#1A73E8]">Great — let’s get your 30-day free trial ready.</p>
        <p className="mt-3">This takes about 30 seconds. If SMS is included, we’ll email the separate verification/documents step afterwards.</p>
      </>,
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
        <>
          <p className="font-medium text-[#1A73E8]">All set — thanks.</p>
          <p className="mt-3">Your details have been sent through. We’ll follow up by email with the next step.</p>
        </>,
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
        <>
          <p className="font-medium text-[#1A73E8]">Your question has been sent.</p>
          <p className="mt-3">We’ll reply by email as soon as we can.</p>
        </>,
      ])
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  const actionArea = (() => {
    if (isTyping) return <div className="text-sm text-[#5F6368]">GuardX assistant is typing…</div>

    if (stage === "intro") return <OptionButtons options={standoutOptions} onChoose={chooseStanding} />
    if (stage === "reviews") return <OptionButtons options={reviewOptions} onChoose={chooseReviews} />
    if (stage === "customers") return <OptionButtons options={customerOptions} onChoose={chooseCustomers} />

    if (stage === "pitch") {
      return (
        <Button
          type="button"
          onClick={nextPitchStep}
          disabled={!pitchTypedDone}
          className="w-full rounded-2xl bg-[#1A73E8] py-6 text-base font-semibold text-white hover:bg-[#1765cc] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </Button>
      )
    }

    if (stage === "pitch-actions" || stage === "demo") {
      return (
        <div className="grid gap-2 sm:grid-cols-3">
          <Button type="button" onClick={openSetupForm} className="rounded-2xl bg-[#34A853] py-6 text-base font-semibold text-white hover:bg-[#2b8a45]">
            Start 30-Day Free Trial
          </Button>
          <Button type="button" variant="outline" onClick={showDemo} className="rounded-2xl border-[#DADCE0] bg-white py-6 text-base text-[#202124] hover:bg-[#F8FAFF]">
            <PlayCircle className="mr-2 h-4 w-4" /> See quick demo
          </Button>
          <Button type="button" variant="outline" onClick={openQuestionForm} className="rounded-2xl border-[#DADCE0] bg-white py-6 text-base text-[#202124] hover:bg-[#F8FAFF]">
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
            className="h-12 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          <Input
            required
            type="email"
            value={questionForm.email}
            onChange={(e) => setQuestionForm((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Business email"
            className="h-12 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          <Textarea
            required
            value={questionForm.question}
            onChange={(e) => setQuestionForm((prev) => ({ ...prev, question: e.target.value }))}
            placeholder="Type your question"
            className="min-h-28 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          {submitState === "error" && <p className="text-sm text-[#D93025]">{submitError}</p>}
          <div className="grid gap-2 sm:grid-cols-2">
            <Button type="submit" disabled={submitState === "loading"} className="rounded-2xl bg-[#4285F4] py-6 text-base font-semibold text-white hover:bg-[#3367D6]">
              {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Send question
            </Button>
            <Button type="button" variant="outline" onClick={() => setStage("pitch-actions")} className="rounded-2xl border-[#DADCE0] bg-white py-6 text-base text-[#202124] hover:bg-[#F8FAFF]">
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
            className="h-12 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          <Input
            required
            type="email"
            value={setupForm.email}
            onChange={(e) => setSetupForm((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Business email"
            className="h-12 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          <Input
            required
            value={setupForm.address}
            onChange={(e) => setSetupForm((prev) => ({ ...prev, address: e.target.value }))}
            placeholder="Business address"
            className="h-12 rounded-2xl border-[#DADCE0] bg-white text-[#202124] placeholder:text-[#5F6368]"
          />
          <div className="grid gap-2">
            <p className="text-sm font-medium text-[#5F6368]">How would you like review requests sent?</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {deliveryOptions.map((option) => {
                const active = setupForm.method === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSetupForm((prev) => ({ ...prev, method: option }))}
                    className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                      active
                        ? "border-[#4285F4] bg-[#E8F0FE] text-[#174EA6]"
                        : "border-[#DADCE0] bg-white text-[#202124] hover:bg-[#F8FAFF]"
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
          {submitState === "error" && <p className="text-sm text-[#D93025]">{submitError}</p>}
          <Button type="submit" disabled={submitState === "loading"} className="rounded-2xl bg-[#34A853] py-6 text-base font-semibold text-white hover:bg-[#2b8a45]">
            {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Start 30-Day Free Trial
          </Button>
        </form>
      )
    }

    if (stage === "submitted") {
      return (
        <div className="rounded-2xl border border-[#D2E3FC] bg-[#F8FAFF] px-4 py-3 text-sm text-[#5F6368]">
          Your details have been submitted successfully.
        </div>
      )
    }

    return null
  })()

  return (
    <ChatShell actionArea={actionArea}>
      {messages.map((message) =>
        message.role === "assistant" ? (
          <AssistantBubble key={message.id}>{message.content}</AssistantBubble>
        ) : (
          <UserBubble key={message.id}>{message.content}</UserBubble>
        ),
      )}

      {stage === "pitch" && pitchTyping ? (
        <AssistantBubble highlight>
          <TypewriterText
            text={pitchSteps[pitchIndex]}
            onDone={() => {
              setPitchTypedDone(true)
            }}
          />
        </AssistantBubble>
      ) : null}

      {isTyping && <TypingBubble />}
      <div ref={scrollerRef} />
    </ChatShell>
  )
}

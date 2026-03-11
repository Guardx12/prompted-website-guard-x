"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Bot, Loader2, Send, Sparkles, User, CheckCircle2 } from "lucide-react"

type Role = "george" | "user"

type ChatMessage = {
  id: string
  role: Role
  content: string
}

const starterReplies = [
  "What exactly are you?",
  "How would this work on my website?",
  "Is this just a chatbot?",
  "What kind of businesses is this good for?",
  "Why would I need George?",
]

const georgeIntro =
  "Hi — I'm George. I'm the digital sales assistant built into GuardX websites. My job is to talk to visitors, answer questions, guide them toward becoming customers, and pass the right people on when they're ready."

const georgeFollowUp =
  "Most websites just sit there. I’m here to show what a website looks like when it actually works for the business. Ask me anything — or tap one of the questions below."

function buildReply(input: string) {
  const q = input.toLowerCase().trim()

  if (q.includes("what are you") || q.includes("who are you") || q.includes("what exactly")) {
    return "I’m George — a digital receptionist and sales assistant for websites. Instead of a visitor landing on a page, getting stuck, and leaving, I can answer questions, explain the business, and guide them toward the next step."
  }

  if (q.includes("just a chatbot") || q.includes("just another chatbot") || q.includes("bot")) {
    return "That’s the exact thing most people ask first. The difference is I’m not meant to be a generic little support bubble. I’m trained to act more like a member of staff — part receptionist, part salesperson — so I can explain the business properly and move visitors toward becoming customers."
  }

  if (q.includes("how would this work") || q.includes("on my website") || q.includes("my site")) {
    return "GuardX builds a modern, fast website around the business first, then I’m built into it. Once I know the services, prices, areas covered, and what jobs the business does or doesn't take, I can answer questions naturally and pass serious enquiries on."
  }

  if (q.includes("why would i need") || q.includes("why need") || q.includes("why george") || q.includes("why would") || q.includes("benefit")) {
    return "Because most websites lose people quietly. Visitors have questions, don’t want to fill in a form straight away, and leave. I keep them engaged, answer the obvious questions, save time on repetitive calls, and help turn more of that traffic into proper enquiries."
  }

  if (q.includes("business") || q.includes("who is this for") || q.includes("what kind of businesses") || q.includes("who is it for")) {
    return "I’m strongest for businesses where people normally ask questions before buying — roofers, builders, scaffolders, clinics, flooring companies, storage businesses, dog groomers, removals, that sort of thing. If the customer journey is usually search → question → quote, I fit really well."
  }

  if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
    return "The exact price depends on the website and what you need it to do, but the idea is simple: you’re not just paying for pages that sit there. You’re getting a fast modern website with a built-in member of staff helping turn visitors into enquiries."
  }

  if (q.includes("seo") || q.includes("rank") || q.includes("google")) {
    return "Yes — GuardX still builds modern, fast, SEO-structured websites. That part absolutely matters. The difference is the site doesn’t just look the part and load quickly — it also talks to visitors once they arrive."
  }

  if (q.includes("human") || q.includes("real person") || q.includes("sound real")) {
    return "That’s the standard I’m meant to hit. I should feel closer to a helpful receptionist than a robotic script. Clear answers, natural tone, sensible follow-up questions, and always guiding the conversation somewhere useful."
  }

  if (q.includes("lead") || q.includes("enquir") || q.includes("contact")) {
    return "That’s the end goal. I answer the first questions, reduce friction, then when someone is genuinely interested I can collect the right details and pass the conversation on."
  }

  return "That’s a fair question. The simple version is this: GuardX builds modern, fast websites with me built in so the site can answer questions, deal with visitors properly, and guide them toward becoming customers instead of losing them."
}

export function GeorgeDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "g1", role: "george", content: georgeIntro },
    { id: "g2", role: "george", content: georgeFollowUp },
  ])
  const [input, setInput] = useState("")
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [lead, setLead] = useState({ name: "", email: "", businessName: "", phone: "" })
  const viewportRef = useRef<HTMLDivElement>(null)

  const transcriptText = useMemo(
    () =>
      messages
        .map((message) => `${message.role === "george" ? "George" : "Visitor"}: ${message.content}`)
        .join("\n\n"),
    [messages],
  )

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight
    }
  }, [messages, showLeadForm, submitSuccess])

  const appendGeorge = (text: string) => {
    setMessages((current) => [...current, { id: crypto.randomUUID(), role: "george", content: text }])
  }

  const handleQuestion = (text: string) => {
    const reply = buildReply(text)
    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", content: text },
      { id: crypto.randomUUID(), role: "george", content: reply },
    ])
  }

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const question = input.trim()
    setInput("")
    handleQuestion(question)
  }

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          businessName: lead.businessName,
          message: `George lead request\n\nPhone / WhatsApp: ${lead.phone || "Not provided"}\n\nConversation transcript:\n\n${transcriptText}`,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data?.details || data?.error || "Something went wrong")
      }

      setSubmitSuccess(true)
      appendGeorge(
        `Perfect — I’ve passed that on. Luke can now see your details and this conversation, so he’ll know exactly what you were asking about.`,
      )
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send right now")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(96,165,250,0.22)] bg-[rgba(15,23,42,0.75)] px-4 py-2 text-sm text-[#cbd5e1] shadow-[0_0_30px_rgba(37,99,235,0.08)]">
          <Sparkles className="h-4 w-4 text-[#60a5fa]" />
          George is built to feel like a receptionist and salesperson — not a generic chatbot.
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Meet George.</h2>
          <p className="max-w-2xl text-lg leading-8 text-[#94a3b8]">
            George is the digital sales assistant built into GuardX websites. He answers questions, explains the offer,
            guides people toward the next step, and helps stop good visitors disappearing quietly.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Answers the obvious questions instantly",
            "Guides visitors toward becoming real enquiries",
            "Works on a modern, fast, SEO-structured website",
            "Can pass the conversation on with full context",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.65)] p-4 text-sm text-[#cbd5e1] backdrop-blur"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#60a5fa]" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[rgba(96,165,250,0.18)] bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(8,15,30,0.92))] p-6 shadow-[0_0_50px_rgba(37,99,235,0.12)]">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#60a5fa]">Why George exists</p>
          <div className="mt-4 space-y-4 text-[#cbd5e1]">
            <p>
              Most websites look fine but don’t actually do much. Someone lands on the page, has a question, doesn’t
              want to ring yet, and leaves.
            </p>
            <p>
              George is there to handle that first conversation properly — like a strong receptionist or sales person
              would — so the website feels alive, useful, and far more likely to turn attention into an enquiry.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#60a5fa] px-5 py-3 text-sm font-semibold text-[#0a0e1a] transition hover:bg-[#93c5fd]"
            >
              Speak with Luke <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/web-design"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] px-5 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[rgba(96,165,250,0.45)] hover:text-white"
            >
              See the website side of it
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] border border-[rgba(96,165,250,0.18)] bg-[linear-gradient(180deg,rgba(10,14,26,0.96),rgba(4,7,14,0.98))] p-4 shadow-[0_0_80px_rgba(37,99,235,0.14)]">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.75)] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(96,165,250,0.16)] text-[#93c5fd]">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-white">George</p>
              <p className="text-xs text-[#94a3b8]">GuardX website sales assistant</p>
            </div>
          </div>
          <div className="rounded-full bg-emerald-500/12 px-3 py-1 text-xs font-medium text-emerald-300">Live demo</div>
        </div>

        <div
          ref={viewportRef}
          className="max-h-[620px] min-h-[540px] space-y-4 overflow-y-auto rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(2,6,23,0.72)] p-4"
        >
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-7 shadow-sm ${
                  message.role === "user"
                    ? "bg-[#60a5fa] text-[#08101d]"
                    : "border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.92)] text-[#dbeafe]"
                }`}
              >
                <div className="mb-1 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
                  {message.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  {message.role === "user" ? "You" : "George"}
                </div>
                <p>{message.content}</p>
              </div>
            </div>
          ))}

          {!showLeadForm && !submitSuccess && (
            <div className="space-y-3 rounded-2xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.5)] p-4">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#60a5fa]">Try George</p>
              <div className="flex flex-wrap gap-2">
                {starterReplies.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => handleQuestion(question)}
                    className="rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(30,41,59,0.72)] px-3 py-2 text-xs font-medium text-[#dbeafe] transition hover:border-[rgba(96,165,250,0.5)] hover:bg-[rgba(37,99,235,0.14)]"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    handleQuestion("Why would I need George?")
                    appendGeorge("If you want, I can also pass this conversation on so Luke can show you what this could look like for your business.")
                  }}
                  className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#0a0e1a] transition hover:bg-[#e2e8f0]"
                >
                  Show me the pitch angle
                </button>
                <button
                  type="button"
                  onClick={() => setShowLeadForm(true)}
                  className="rounded-full bg-[#60a5fa] px-3 py-2 text-xs font-semibold text-[#08101d] transition hover:bg-[#93c5fd]"
                >
                  Pass this to Luke
                </button>
              </div>
            </div>
          )}

          {showLeadForm && !submitSuccess && (
            <div className="rounded-2xl border border-[rgba(96,165,250,0.2)] bg-[rgba(15,23,42,0.88)] p-4">
              <p className="text-sm font-semibold text-white">Pass this conversation on</p>
              <p className="mt-1 text-sm text-[#94a3b8]">
                Leave your details and the conversation will be sent over with the full transcript.
              </p>
              <form onSubmit={handleLeadSubmit} className="mt-4 space-y-3">
                <input
                  required
                  value={lead.name}
                  onChange={(e) => setLead((current) => ({ ...current, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[rgba(148,163,184,0.18)] bg-[rgba(2,6,23,0.82)] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(96,165,250,0.6)]"
                />
                <input
                  required
                  value={lead.businessName}
                  onChange={(e) => setLead((current) => ({ ...current, businessName: e.target.value }))}
                  placeholder="Business name"
                  className="w-full rounded-xl border border-[rgba(148,163,184,0.18)] bg-[rgba(2,6,23,0.82)] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(96,165,250,0.6)]"
                />
                <input
                  required
                  type="email"
                  value={lead.email}
                  onChange={(e) => setLead((current) => ({ ...current, email: e.target.value }))}
                  placeholder="Email address"
                  className="w-full rounded-xl border border-[rgba(148,163,184,0.18)] bg-[rgba(2,6,23,0.82)] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(96,165,250,0.6)]"
                />
                <input
                  value={lead.phone}
                  onChange={(e) => setLead((current) => ({ ...current, phone: e.target.value }))}
                  placeholder="Phone / WhatsApp (optional)"
                  className="w-full rounded-xl border border-[rgba(148,163,184,0.18)] bg-[rgba(2,6,23,0.82)] px-4 py-3 text-sm text-white outline-none transition focus:border-[rgba(96,165,250,0.6)]"
                />
                {submitError && <p className="text-sm text-rose-300">{submitError}</p>}
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-[#60a5fa] px-5 py-3 text-sm font-semibold text-[#08101d] transition hover:bg-[#93c5fd] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    Send to Luke
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLeadForm(false)}
                    className="rounded-full border border-[rgba(148,163,184,0.18)] px-5 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[rgba(96,165,250,0.45)]"
                  >
                    Back to chat
                  </button>
                </div>
              </form>
            </div>
          )}

          {submitSuccess && (
            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="h-4 w-4" />
                Conversation sent
              </div>
              <p className="mt-2 text-emerald-50/90">
                Your details and the full transcript have been passed on. You can keep talking to George, or head over to
                the contact page if you want to send anything else.
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmitQuestion} className="mt-4 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask George a question…"
            className="min-w-0 flex-1 rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(15,23,42,0.82)] px-5 py-3 text-sm text-white outline-none transition focus:border-[rgba(96,165,250,0.55)]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#60a5fa] px-4 text-[#08101d] transition hover:bg-[#93c5fd]"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

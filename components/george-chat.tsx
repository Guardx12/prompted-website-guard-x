"use client"

import { useMemo, useState } from "react"
import { Send, Sparkles } from "lucide-react"

type Role = "assistant" | "user"

type Message = { role: Role; content: string }

const starterPrompts = [
  "How would George work on my website?",
  "Why would I need George?",
  "Is George just a chatbot?",
  "What kind of businesses is George good for?",
]

const knowledge = {
  role: "George is the digital receptionist and sales assistant built into GuardX websites.",
  purpose:
    "George answers first questions, explains the offer, guides visitors toward becoming customers, and helps stop good traffic going to waste.",
  website:
    "George lives inside a modern, fast, SEO-structured GuardX website. The website is still the foundation — George is the member of staff working on it.",
  benefits: [
    "saves time by handling the first conversation",
    "saves money by reducing repetitive phone calls and missed opportunities",
    "helps turn more visitors into real enquiries",
    "gives businesses a receptionist and sales presence on the website 24/7",
  ],
  bestFor:
    "George is strongest for businesses where people normally have questions before becoming a customer — trades, home improvement, clinics, service businesses, storage, property-related businesses, and similar.",
  notStandalone:
    "George is not sold as a snippet to drop onto any random website. He comes built into GuardX websites so the experience, design, speed, and enquiry flow are all controlled properly.",
  handoff:
    "When someone is genuinely interested, George should guide them naturally toward the next step and collect the right details instead of dumping them into a cold contact form.",
}

function answerGeorge(question: string) {
  const q = question.toLowerCase()

  if (q.includes("how") && q.includes("website")) {
    return "George is built into a GuardX website as the first person your visitors meet. So instead of landing on a page, having a question, and leaving, they can ask George what you do, whether you cover their job, how things work, and what to do next. He answers those first questions, keeps the conversation moving, and then passes the visitor on when they are ready. In simple terms: the website is the platform, and George is the digital member of staff working on it."
  }

  if (q.includes("why would i need") || q.includes("why do i need") || q.includes("need george")) {
    return "Because most websites just sit there. A visitor arrives, has a question, does not want to ring yet, and leaves. George fixes that first gap. He answers obvious questions instantly, guides people properly, saves you time on repetitive conversations, and helps turn more of your traffic into real enquiries. He is there to do the job a strong receptionist or sales assistant would normally do."
  }

  if (q.includes("just a chatbot") || q.includes("is this a chatbot")) {
    return "Not in the way most people mean it. A normal chatbot feels like a widget with canned replies. George is meant to feel more like a receptionist and sales assistant — someone who understands the offer, answers questions clearly, and gently moves the conversation toward the next step. The whole point is that he feels useful, human, and commercially aware rather than gimmicky."
  }

  if (q.includes("what kind of businesses") || q.includes("who is this for") || q.includes("good for")) {
    return "George is best for businesses where customers usually ask questions before committing — roofers, builders, scaffolders, flooring companies, clinics, aesthetics, storage, property-related services, and plenty of other local businesses like that. If people normally want reassurance, information, or a bit of guidance before they enquire, George is useful."
  }

  if (q.includes("what are you") || q.includes("who are you")) {
    return "I'm George — the digital receptionist and sales assistant built into GuardX websites. My job is to answer first questions, explain the offer clearly, guide visitors toward becoming customers, and stop good traffic disappearing quietly."
  }

  if (q.includes("cost") || q.includes("price") || q.includes("charge")) {
    return "The exact price depends on the website and what a business needs, but the important part is the role George is filling. He is there to save time, save money, and help the website do a better job of producing enquiries. If you want numbers, the next step is really a proper conversation about the business and what the website needs to do."
  }

  if (q.includes("ai")) {
    return "Yes — George is AI-powered, but the point is not the technology for its own sake. The point is that your website gets a digital receptionist and sales assistant who can hold the first conversation properly instead of just showing a dead contact form."
  }

  if (q.includes("off topic") || q.includes("football") || q.includes("weather") || q.includes("random")) {
    return "That does sound like a good conversation, but the most useful thing I can do here is help you understand how GuardX websites and George work together. If you like, ask me how George would work on your website, why businesses use him, or what kind of businesses he suits best."
  }

  return "The short version is this: GuardX builds modern, fast, SEO-structured websites, and George is the digital receptionist and sales assistant built into them. He answers first questions, explains the offer, guides visitors toward the next step, and helps stop good traffic going to waste. If you want, ask me how that would work on your website and I’ll explain it properly."
}

export function GeorgeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I'm George. I'm the digital receptionist and sales assistant built into GuardX websites. My job is to answer questions, explain how this works, and show what a website looks like when it actually helps turn visitors into customers.",
    },
    {
      role: "assistant",
      content:
        "Ask me anything. If you're not sure where to start, try one of the suggested questions below.",
    },
  ])
  const [input, setInput] = useState("")

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const send = (text?: string) => {
    const content = (text ?? input).trim()
    if (!content) return
    const reply = answerGeorge(content)
    setMessages((prev) => [...prev, { role: "user", content }, { role: "assistant", content: reply }])
    setInput("")
  }

  return (
    <div className="w-full overflow-hidden rounded-[28px] border border-[#dfe7f3] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.10)]">
      <div className="border-b border-[#e8eef7] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1d4ed8,#60a5fa)] text-white shadow-[0_10px_30px_rgba(59,130,246,0.28)]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0f172a]">George</p>
            <p className="text-sm text-[#475569]">Digital receptionist & sales assistant</p>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] px-4 py-5 sm:px-6">
        <div className="max-h-[520px] space-y-4 overflow-y-auto pr-1">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-[22px] px-4 py-3 text-[15px] leading-7 sm:text-base ${
                  message.role === "user"
                    ? "rounded-br-md bg-[#0f172a] text-white"
                    : "rounded-bl-md border border-[#dfe7f3] bg-white text-[#0f172a] shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {starterPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => send(prompt)}
              className="rounded-full border border-[#d8e3f1] bg-white px-3 py-2 text-sm text-[#334155] transition hover:border-[#93c5fd] hover:text-[#0f172a]"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-[20px] border border-[#dfe7f3] bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") send()
            }}
            placeholder="Ask George a question…"
            className="h-12 flex-1 border-0 bg-transparent px-3 text-[15px] text-[#0f172a] outline-none placeholder:text-[#64748b]"
          />
          <button
            type="button"
            onClick={() => send()}
            disabled={!canSend}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f172a] text-white transition hover:bg-[#1e293b] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

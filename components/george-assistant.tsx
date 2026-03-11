"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Loader2, Send } from "lucide-react"

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

const openingMessage: ChatMessage = {
  id: "george-opening",
  role: "assistant",
  content:
    "Hi — I’m George. I’m the digital receptionist and sales assistant built into GuardX websites. My job is to answer questions, explain how things work, deal with the common customer conversations businesses usually have, and help turn visitors into customers. I’m given the knowledge I need about the business I’m working for — services, pricing, how things work, the kinds of jobs they take on, and the questions customers normally ask — so I can handle those repetitive explanations properly instead of the business owner having to keep doing them all day. Ask me anything.",
}

function containsAny(text: string, phrases: string[]) {
  return phrases.some((phrase) => text.includes(phrase))
}

function buildTranscript(messages: ChatMessage[]) {
  return messages
    .map((message) => `${message.role === "assistant" ? "George" : "Visitor"}: ${message.content}`)
    .join("\n\n")
}

function formatReply(paragraphs: string[]) {
  return paragraphs.join("\n\n")
}

function getGeorgeReply(input: string) {
  const text = input.toLowerCase().trim()

  if (!text) {
    return formatReply([
      "Go ahead — ask me anything about George, GuardX, how I would work on a website, or why a business would want me there in the first place.",
    ])
  }

  if (containsAny(text, ["what are you", "who are you", "what do you do", "what exactly do you do", "explain yourself", "your job role", "your job bro", "what is your role"])) {
    return formatReply([
      "I’m George — the digital receptionist and sales assistant built into GuardX websites.",
      "Think of me like the member of staff on the website who handles that first conversation properly. I answer questions, explain how things work, deal with the obvious customer interactions, and help guide visitors towards becoming real enquiries instead of leaving the site quietly.",
      "I’m trained on the business I’m working for, so I can explain the services, pricing, areas covered, the kinds of jobs they do and don’t take on, and the usual things customers want to know before they’re ready to call.",
    ])
  }

  if (containsAny(text, ["how does this work", "my website", "on my website", "on our website", "on my site", "how would this work"])) {
    return formatReply([
      "On your website, I’d sit there like the digital receptionist and first point of contact.",
      "A visitor lands on the page, asks what they want to know, and I answer in a clear, natural way using the knowledge I’ve been given about your business. That means I can explain your services, talk through the obvious early questions, deal with the repetitive explanations, and guide the visitor towards the next step.",
      "Then, when the conversation becomes serious, I can collect the right details and pass the enquiry over with context — so instead of getting a cold form submission, you know what the person was asking and where they’re up to.",
      "The whole point is that your website stops being a dead brochure and starts acting more like a member of staff.",
    ])
  }

  if (containsAny(text, ["why would i need", "why need", "why would we need", "why do i need george", "why george", "why would a business need"])) {
    return formatReply([
      "Because most websites lose good visitors for very ordinary reasons.",
      "Someone lands on the page, has a question, doesn’t quite want to ring yet, can’t get an answer instantly, and leaves. That happens far more than most businesses realise.",
      "I’m there to stop that. I save time by handling the repetitive questions, save money by helping reduce wasted traffic, and help create more revenue by turning more visitors into real enquiries.",
      "So really, why a business needs George is simple: I fill the receptionist and sales-assistant gap that most websites don’t have.",
    ])
  }

  if (containsAny(text, ["pricing", "prices", "price", "cost", "how much"])) {
    return formatReply([
      "Part of my job is to explain pricing clearly where the business wants that information shared.",
      "That might mean exact prices, starting prices, rough ranges, or just explaining how quotes work — it depends on how the business wants me trained.",
      "The important part is that customers can ask the question and get a proper answer instead of bouncing off the site or having to ring up for every small thing.",
    ])
  }

  if (containsAny(text, ["services", "what do you explain", "what can you answer", "questions", "what do you talk about"])) {
    return formatReply([
      "I’m there to explain the services, how the business works, what kind of jobs they do, what they don’t do, how pricing works, what areas they cover, and what the next step should be.",
      "In other words, the exact sort of back-and-forth that normally happens on the phone before someone becomes a proper enquiry.",
    ])
  }

  if (containsAny(text, ["just a chatbot", "chatbot", "bot"])) {
    return formatReply([
      "That’s exactly the impression I’m there to beat.",
      "A generic chatbot usually feels like a menu in disguise. George is meant to feel more like a calm receptionist or sales assistant who can actually explain things properly and keep the conversation moving.",
      "The difference is not just that I reply — it’s that I’m trained on the business, I explain things in a more human way, and I guide the visitor instead of just throwing buttons at them.",
    ])
  }

  if (containsAny(text, ["member of staff", "receptionist", "sales assistant", "salesperson", "front desk"])) {
    return formatReply([
      "Yes — that is the right way to think about me.",
      "I’m effectively the digital receptionist and sales assistant on the website. First conversation, first explanation, first guidance, and then handoff when the visitor is serious.",
      "That’s why the idea is stronger than just ‘a website with a chatbot’. It’s really about giving the website a member of staff.",
    ])
  }

  if (containsAny(text, ["businesses", "what kind of businesses", "who is this for", "good for", "which businesses"])) {
    return formatReply([
      "I work best for businesses where customers usually have questions before they buy or enquire.",
      "Trades, roofers, scaffolders, builders, flooring businesses, aesthetics clinics, dog groomers, storage companies, estate agents, service businesses — anything where a proper first conversation helps move the customer forward.",
      "If customers normally need a bit of explanation before becoming a lead, I’m useful.",
    ])
  }

  if (containsAny(text, ["seo", "google", "rank", "ranking", "fast website", "modern website", "website side"])) {
    return formatReply([
      "George doesn’t replace the website side — he sits on top of it.",
      "The foundation is still a modern, fast, well-structured GuardX website with strong SEO foundations, built properly so it’s ready to rank on Google.",
      "Then I make that website work harder once the visitors actually arrive.",
    ])
  }

  if (containsAny(text, ["knowledge", "how do you know", "how can you answer", "trained", "fed the knowledge"])) {
    return formatReply([
      "I’m fed the knowledge I need based on the business I’m working for.",
      "That means I’m given the service information, the pricing or pricing structure, areas covered, the kinds of jobs the business wants, the jobs they don’t want, and the common customer questions that come up all the time.",
      "So I’m not just guessing — I’m answering from the brief I’ve been given and using that to deal with the repetitive conversations properly.",
    ])
  }

  if (containsAny(text, ["lead", "enquiry", "transcript", "handoff", "pass it on", "send details", "email"])) {
    return formatReply([
      "When someone becomes a serious prospect, I should be able to collect the useful details and pass the conversation over with context.",
      "That means the business sees who the person is, what they asked, and where the conversation got to — which is far more useful than a basic contact form with no story behind it.",
    ])
  }

  if (containsAny(text, ["want this", "interested", "sounds good", "can i get this", "next step", "speak to", "contact"])) {
    return formatReply([
      "Brilliant.",
      "The next step is simply to leave your details and a few lines about your business so the conversation can be passed on properly and GuardX can look at what version of George and what kind of website would suit you best.",
    ])
  }

  if (containsAny(text, ["joke", "politics", "weather", "football", "random", "off topic"])) {
    return formatReply([
      "Happy to keep this useful for you — I’m mainly here to help with George, GuardX, and how a website like this can help turn more visitors into customers.",
      "Ask me anything around that and I’ll give you a proper answer.",
    ])
  }

  return formatReply([
    "That’s a fair question.",
    "The main thing to know is that I’m there to do the first part of the job a real receptionist or sales assistant would normally do on a website — answer the obvious questions, explain the offer properly, keep the visitor engaged, and guide the right people towards becoming customers.",
    "If you want, ask me how this would work on your website, why a business would need me, or what my role actually is, and I’ll explain it clearly.",
  ])
}

export function GeorgeAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([openingMessage])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [leadState, setLeadState] = useState<LeadState>({ businessName: "", email: "", phone: "" })
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [leadIntent, setLeadIntent] = useState<LeadIntent>("none")
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping, leadIntent])

  const transcript = useMemo(() => buildTranscript(messages), [messages])

  const sendMessage = (raw: string) => {
    const value = raw.trim()
    if (!value || isTyping) return

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: value,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    window.setTimeout(() => {
      const reply = getGeorgeReply(value)
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)

      if (containsAny(value.toLowerCase(), ["want this", "interested", "sounds good", "can i get this", "next step", "speak to", "contact"])) {
        setLeadIntent("offer")
      }
    }, 900)
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
          <div>
            <p className="text-base font-semibold text-[#202124] sm:text-lg">George</p>
            <p className="text-sm text-[#5F6368]">Digital receptionist and sales assistant by GuardX</p>
          </div>
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
              sendMessage(input)
            }}
            className="mx-auto flex w-full max-w-4xl items-end gap-3"
          >
            <div className="flex-1 rounded-[28px] border border-[#DADCE0] bg-[#F8FAFD] px-4 py-3 shadow-sm focus-within:border-[#AECBFA]">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={1}
                placeholder="Message George…"
                className="w-full resize-none bg-transparent text-[15px] leading-6 text-[#202124] outline-none placeholder:text-[#80868B]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-[0_10px_25px_rgba(26,115,232,0.28)] transition hover:bg-[#1558B0] disabled:opacity-60"
              disabled={!input.trim() || isTyping}
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

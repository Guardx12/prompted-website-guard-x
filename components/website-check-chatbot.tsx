"use client"

import { useState, useEffect, useRef } from "react"
import { Bot, MessageSquareText, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

type Step = 1 | 2 | 3 | 4 | 5 | 6

interface Message {
  id: string
  role: "assistant" | "user"
  content: React.ReactNode
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

function AssistantBubble({ children, animate = false }: { children: React.ReactNode; animate?: boolean }) {
  return (
    <div className={`flex items-end gap-3 ${animate ? "animate-fade-in-up" : ""}`}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] shadow-[0_8px_24px_rgba(66,133,244,0.22)]">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <div className="max-w-[88%] rounded-[24px] rounded-bl-md border border-white/70 bg-white/95 px-4 py-3.5 text-[16px] leading-7 text-[#202124] shadow-[0_18px_40px_rgba(60,64,67,0.10)] backdrop-blur sm:max-w-[82%] sm:px-5 sm:py-4 sm:text-[17px]">
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children, animate = false }: { children: React.ReactNode; animate?: boolean }) {
  return (
    <div className={`flex justify-end ${animate ? "animate-fade-in-up" : ""}`}>
      <div className="max-w-[84%] rounded-[24px] rounded-br-md bg-[linear-gradient(135deg,#1A73E8,#4285F4)] px-4 py-3.5 text-[15px] font-medium leading-6 text-white shadow-[0_16px_36px_rgba(26,115,232,0.28)] sm:max-w-[76%] sm:text-[16px]">
        {children}
      </div>
    </div>
  )
}

function ActionButton({ children, onClick, variant = "primary" }: { children: React.ReactNode; onClick?: () => void; variant?: "primary" | "secondary" }) {
  const baseStyles = "w-full rounded-[20px] border px-4 py-4 text-left text-[15px] font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.995]"
  const variants = {
    primary: "border-[#AECBFA] bg-[linear-gradient(135deg,#1A73E8,#4285F4)] text-white shadow-[0_10px_28px_rgba(26,115,232,0.24)] hover:shadow-[0_14px_32px_rgba(26,115,232,0.32)]",
    secondary: "border-white/80 bg-white text-[#202124] shadow-[0_10px_28px_rgba(60,64,67,0.08)] hover:border-[#AECBFA] hover:shadow-[0_14px_32px_rgba(66,133,244,0.16)]"
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{children}</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </button>
  )
}

function OptionButtons({ options, onChoose }: { options: string[]; onChoose: (value: string) => void }) {
  return (
    <div className="grid gap-2.5 animate-fade-in-up">
      {options.map((option) => (
        <ActionButton key={option} onClick={() => onChoose(option)} variant="secondary">
          {option}
        </ActionButton>
      ))}
    </div>
  )
}

function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = (current / total) * 100

  return (
    <div className="mt-3">
      <div className="mb-1 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.08em] text-[#5F6368]">
        <span>Step {current} of {total}</span>
        <span>{Math.round(percentage)}% complete</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#E8EAED]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#4285F4,#34A853)] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export default function WebsiteCheckChatbot() {
  const [step, setStep] = useState<Step>(1)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [websiteAge, setWebsiteAge] = useState<string | null>(null)
  const [hasWebsite, setHasWebsite] = useState<boolean | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, showOptions])

  // Initial message on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        {
          id: "intro-1",
          role: "assistant",
          content: (
            <div>
              <p className="mb-2">Hi there</p>
              <p>Let&apos;s quickly check how your business appears to customers online.</p>
            </div>
          )
        }
      ])
      setShowOptions(true)
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  const simulateTypingAndAddMessage = (message: Message, callback?: () => void) => {
    setShowOptions(false)
    setIsTyping(true)

    const timer = setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, message])
      if (callback) {
        setTimeout(callback, 300)
      } else {
        setTimeout(() => setShowOptions(true), 300)
      }
    }, 1200)

    return () => clearTimeout(timer)
  }

  const handleStartCheck = () => {
    setShowOptions(false)
    setMessages(prev => [...prev, {
      id: "user-start",
      role: "user",
      content: "Start 60-Second Check"
    }])
    setStep(2)

    simulateTypingAndAddMessage({
      id: "step-2",
      role: "assistant",
      content: <p>Do you currently have a website?</p>
    })
  }

  const handleHasWebsite = (answer: string) => {
    const hasIt = answer === "Yes"
    setHasWebsite(hasIt)
    setShowOptions(false)
    setMessages(prev => [...prev, {
      id: "user-website",
      role: "user",
      content: answer
    }])

    if (hasIt) {
      setStep(3)
      simulateTypingAndAddMessage({
        id: "step-3",
        role: "assistant",
        content: <p>Roughly how old is your website?</p>
      })
    } else {
      // Skip to step 4 if no website
      setStep(4)
      simulateTypingAndAddMessage({
        id: "step-4-no-site",
        role: "assistant",
        content: (
          <div>
            <p className="font-medium text-[#1A73E8]">Interesting insight:</p>
            <p className="mt-2">Most customers decide whether they trust a business within just a few seconds of landing on their website — or noticing they don&apos;t have one.</p>
          </div>
        )
      })
    }
  }

  const handleWebsiteAge = (age: string) => {
    setWebsiteAge(age)
    setShowOptions(false)
    setMessages(prev => [...prev, {
      id: "user-age",
      role: "user",
      content: age
    }])
    setStep(4)

    simulateTypingAndAddMessage({
      id: "step-4",
      role: "assistant",
      content: (
        <div>
          <p className="font-medium text-[#1A73E8]">Interesting insight:</p>
          <p className="mt-2">Most customers decide whether they trust a business website within just a few seconds.</p>
        </div>
      )
    })
  }

  const handleContinueStep4 = () => {
    setShowOptions(false)
    setMessages(prev => [...prev, {
      id: "user-continue-4",
      role: "user",
      content: "Continue"
    }])
    setStep(5)

    simulateTypingAndAddMessage({
      id: "step-5",
      role: "assistant",
      content: (
        <div>
          <p className="font-medium text-[#EA4335]">Important:</p>
          <p className="mt-2">If a website looks outdated or unclear, customers often contact another business instead.</p>
        </div>
      )
    })
  }

  const handleContinueStep5 = () => {
    setShowOptions(false)
    setMessages(prev => [...prev, {
      id: "user-continue-5",
      role: "user",
      content: "Continue"
    }])
    setStep(6)

    simulateTypingAndAddMessage({
      id: "step-6",
      role: "assistant",
      content: (
        <div>
          <p className="font-medium text-[#34A853]">Good news:</p>
          <p className="mt-2">We build modern websites for local businesses from <span className="font-semibold">£99 per month</span>, including hosting and updates.</p>
          <p className="mt-3 text-[#5F6368]">No large upfront cost. Cancel anytime.</p>
        </div>
      )
    })
  }

  const renderOptions = () => {
    if (!showOptions) return null

    switch (step) {
      case 1:
        return (
          <div className="animate-fade-in-up">
            <ActionButton onClick={handleStartCheck} variant="primary">
              Start 60-Second Check
            </ActionButton>
          </div>
        )
      case 2:
        return <OptionButtons options={["Yes", "No"]} onChoose={handleHasWebsite} />
      case 3:
        return <OptionButtons options={["Under 2 years", "2-5 years", "5+ years"]} onChoose={handleWebsiteAge} />
      case 4:
        return (
          <div className="animate-fade-in-up">
            <ActionButton onClick={handleContinueStep4} variant="primary">
              Continue
            </ActionButton>
          </div>
        )
      case 5:
        return (
          <div className="animate-fade-in-up">
            <ActionButton onClick={handleContinueStep5} variant="primary">
              Continue
            </ActionButton>
          </div>
        )
      case 6:
        return (
          <div className="grid gap-3 animate-fade-in-up">
            <Link
              href="/examples"
              className="flex w-full items-center justify-between gap-3 rounded-[20px] border border-[#AECBFA] bg-[linear-gradient(135deg,#1A73E8,#4285F4)] px-4 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(26,115,232,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(26,115,232,0.32)] active:translate-y-0 active:scale-[0.995]"
            >
              <span>See Example Websites</span>
              <ExternalLink className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/447700000000?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20your%20website%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between gap-3 rounded-[20px] border border-white/80 bg-white px-4 py-4 text-[15px] font-semibold text-[#202124] shadow-[0_10px_28px_rgba(60,64,67,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-[0_14px_32px_rgba(37,211,102,0.16)] active:translate-y-0 active:scale-[0.995]"
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Ask a Question</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#E8F0FE_0%,#F7F9FC_38%,#EEF3F9_100%)] text-[#202124]">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col sm:px-4 sm:py-4">
        <div className="flex min-h-screen flex-col overflow-hidden bg-transparent sm:min-h-[calc(100vh-2rem)] sm:rounded-[32px] sm:border sm:border-white/70 sm:bg-white/55 sm:shadow-[0_28px_80px_rgba(60,64,67,0.14)] sm:backdrop-blur-xl">
          {/* Header */}
          <div className="sticky top-0 z-20 border-b border-white/70 bg-white/82 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#4285F4,#34A853)] shadow-[0_8px_24px_rgba(66,133,244,0.22)]">
                <MessageSquareText className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-[#202124] sm:text-xl">GuardX Website Check</h1>
                <p className="mt-0.5 text-sm text-[#5F6368]">See the first impression customers get when they find your business online.</p>
              </div>
            </div>
            <ProgressBar current={step} total={6} />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="space-y-5">
              {messages.map((message) => (
                message.role === "assistant" ? (
                  <AssistantBubble key={message.id} animate>
                    {message.content}
                  </AssistantBubble>
                ) : (
                  <UserBubble key={message.id} animate>
                    {message.content}
                  </UserBubble>
                )
              ))}
              {isTyping && <TypingIndicator />}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Action Area */}
          <div className="sticky bottom-0 z-20 border-t border-white/70 bg-white/82 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
            {renderOptions()}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

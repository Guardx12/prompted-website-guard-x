"use client"

import { useState } from "react"
import { X, MessageCircle, ChevronDown, ChevronUp } from "lucide-react"

interface ChatSection {
  title: string
  questions: { question: string; answer: string }[]
}

const chatSections: ChatSection[] = [
  {
    title: "Pricing Plans",
    questions: [
      {
        question: "What are your pricing plans?",
        answer:
          "We offer three plans: Business Plan (£299/month) - monitoring Google, Trustpilot, Yelp, Facebook and many more platforms with 20% off annual billing. Pro/Fake Review Plan (£499/month) - same monitoring with one-year commitment required for effective fake review removal. Enterprise Plan - custom pricing for multiple locations with everything in Business Plan.",
      },
      {
        question: "Can I add extra locations?",
        answer:
          "Yes! Business Plan: £149/month per extra location. Pro/Fake Review Plan: £299/month per extra location. Enterprise Plan includes multiple locations with custom pricing.",
      },
      {
        question: "Do you offer annual discounts?",
        answer:
          "Yes! Business Plan customers get 20% off when paying annually. That's £2,390 instead of £3,588 - saving you £1,198 per year!",
      },
    ],
  },
  {
    title: "How It Works",
    questions: [
      {
        question: "What platforms do you monitor?",
        answer:
          "We monitor Google, Trustpilot, Yelp, Facebook, and many more review platforms. Our system automatically tracks all your reviews across these platforms 24/7.",
      },
      {
        question: "Is everything fully automated?",
        answer:
          "Yes! Everything is fully automated - no dashboard access required. You'll receive weekly reports with GuardX branding and instant alerts for negative/urgent reviews without any manual work.",
      },
      {
        question: "What do I receive each week?",
        answer:
          "You get a professional weekly PDF report delivered to your email with GuardX branding including: Overall reputation score with trends, new reviews filtered by sentiment, review sources breakdown, and highlighted reviews & insights.",
      },
      {
        question: "How quickly will I be alerted?",
        answer:
          "You get instant alerts for negative or urgent reviews as soon as they appear. Never miss a critical review that could damage your reputation.",
      },
    ],
  },
  {
    title: "Policies & Support",
    questions: [
      {
        question: "Can I cancel anytime?",
        answer:
          "For the **£299/month Business Plan**, you can cancel or manage your subscription at any time using our secure Stripe Customer Portal: https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00. The **£499/month Pro / Fake Review Plan** is a 12-month contract and cannot be cancelled early.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Your business data is secure and private with GuardX. We use industry-standard security measures to protect your information.",
      },
      {
        question: "Do I need to access a dashboard?",
        answer:
          "No dashboard required! Everything is fully automated. Your weekly reputation reports are sent directly to your email as a PDF, and you'll receive instant email alerts when urgent reviews need attention.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply choose your plan and we'll handle the rest. Setup is quick and you'll start receiving protection immediately. No hidden costs, transparent pricing.",
      },
    ],
  },
]

export default function ClickChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null)

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
    setActiveSection(null)
    setActiveQuestion(null)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
    setActiveSection(null)
    setActiveQuestion(null)
  }

  const handleSectionClick = (sectionTitle: string) => {
    setActiveSection(activeSection === sectionTitle ? null : sectionTitle)
    setActiveQuestion(null)
  }

  const handleQuestionClick = (question: string) => {
    setActiveQuestion(activeQuestion === question ? null : question)
  }

  const resetToMain = () => {
    setActiveSection(null)
    setActiveQuestion(null)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChatbot}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat support"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)] md:w-96">
      <div className="bg-black border border-yellow-400/20 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">GuardX Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMinimize}
              className="hover:bg-black/10 p-1 rounded transition-colors"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            <button
              onClick={toggleChatbot}
              className="hover:bg-black/10 p-1 rounded transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="bg-black text-white max-h-96 overflow-y-auto">
            {!activeSection && !activeQuestion && (
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-yellow-400 font-semibold mb-2">How can we help you?</h3>
                  <p className="text-gray-300 text-sm mb-4">Click on a topic below to get instant answers:</p>
                </div>

                <div className="space-y-2">
                  {chatSections.map((section) => (
                    <button
                      key={section.title}
                      onClick={() => handleSectionClick(section.title)}
                      className="w-full text-left p-3 bg-gray-900 hover:bg-gray-800 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200"
                    >
                      <span className="text-yellow-400 font-medium">{section.title}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <p className="text-xs text-gray-300 mb-2">✓ Cancel Any Time – no contracts</p>
                  <p className="text-xs text-gray-300 mb-2">✓ Fully Automated – set it and forget it</p>
                  <p className="text-xs text-gray-300">✓ Protect Your Reputation Instantly</p>
                </div>

                <div className="mt-4">
                  <a
                    href="/pricing"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-3 px-4 rounded-lg text-center transition-all duration-200"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            )}

            {activeSection && !activeQuestion && (
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-yellow-400 font-semibold">{activeSection}</h3>
                  <button onClick={resetToMain} className="text-gray-400 hover:text-white text-sm">
                    ← Back
                  </button>
                </div>

                <div className="space-y-2">
                  {chatSections
                    .find((section) => section.title === activeSection)
                    ?.questions.map((qa) => (
                      <button
                        key={qa.question}
                        onClick={() => handleQuestionClick(qa.question)}
                        className="w-full text-left p-3 bg-gray-900 hover:bg-gray-800 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-200"
                      >
                        <span className="text-white text-sm">{qa.question}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {activeQuestion && (
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={() => setActiveQuestion(null)} className="text-gray-400 hover:text-white text-sm">
                    ← Back to questions
                  </button>
                  <button onClick={resetToMain} className="text-gray-400 hover:text-white text-sm">
                    Main menu
                  </button>
                </div>

                <div className="mb-4">
                  <h4 className="text-yellow-400 font-medium mb-2">{activeQuestion}</h4>
                  <div className="bg-gray-900 p-3 rounded-lg border border-yellow-400/20">
                    <p className="text-white text-sm leading-relaxed">
                      {
                        chatSections
                          .flatMap((section) => section.questions)
                          .find((qa) => qa.question === activeQuestion)?.answer
                      }
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href="/pricing"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg text-center transition-all duration-200 text-sm"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

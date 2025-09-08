"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Shield, ChevronDown, ChevronRight } from "lucide-react"
import { usePricing } from "@/hooks/use-pricing"

export function ChatbotWelcome() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  const pricing = usePricing()

  useEffect(() => {
    const currentPath = window.location.pathname
    const keyPages = ["/", "/pricing"]
    const isKeyPage = keyPages.includes(currentPath) || currentPath.startsWith("/landing")

    if (isKeyPage && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasAutoOpened(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  const salesQuestions = [
    {
      question: "What services do you offer?",
      answer:
        "GuardX monitors online reviews, alerts you to negative mentions, and helps remove fake reviews. Protect your reputation effortlessly.",
      nudge: null,
    },
    {
      question: "What are your pricing plans?",
      answer: (
        <div className="space-y-2">
          <div>
            <strong className="text-[#d4af37]">Business Plan:</strong> £299/month.{" "}
            <strong>20% off annual pricing.</strong>
          </div>
          <div>
            <strong className="text-[#d4af37]">Pro / Fake Review Plan:</strong> {pricing.proFakeReviewPlan.monthly}
            /month. <strong>20% off annual pricing.</strong>
          </div>
          <div>
            <strong className="text-[#d4af37]">Enterprise Plan:</strong> Custom pricing for 5+ locations — contact us.
          </div>
          <div>
            <strong className="text-[#d4af37]">Fake Review Protection:</strong> {pricing.fakeRemovalService}/month per
            location.
          </div>
        </div>
      ),
      nudge: null,
    },
    {
      question: "What's the difference between the Business and Pro / Fake Review plans?",
      answer:
        "The Business Plan includes full monitoring, alerts, and a complete dashboard with priority email support within 48 hours during business hours. The Pro / Fake Review Plan includes full monitoring of Google, Trustpilot, and Yelp reviews, instant alerts for negative reviews, weekly reports with GuardX branding, fake review detection and flagging, and priority email support within 24 hours during business hours. The Pro / Fake Review Plan offers faster support response times and specialized fake review protection.",
      nudge: null,
    },
    {
      question: "How do I get started?",
      answer: "Click Get Started below to begin protecting your business.",
      nudge: null,
    },
    {
      question: "Can I pay annually?",
      answer: "Yes! <strong>Annual payments give you a 20% discount</strong> on Business and Pro / Fake Review plans.",
      nudge: null,
    },
    {
      question: "How does the service work?",
      answer:
        "After signing up, we monitor your reputation daily, alert you to mentions, and provide actionable guidance to protect and improve your online image.",
      nudge: null,
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "For the **£299/month Business Plan**, you can cancel or manage your subscription at any time using our secure Stripe Customer Portal: https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00. The **£499/month Pro / Fake Review Plan** is a 12-month contract and cannot be cancelled early.",
      nudge: null,
    },
  ]

  const faqQuestions = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with all businesses, from small startups to large enterprises.",
      nudge: null,
    },
    {
      question: "How long does it take to see results?",
      answer:
        "You'll start receiving email alerts and PDF reports immediately, with measurable improvements in reputation within 1–3 months.",
      nudge: null,
    },
    {
      question: "Can I cancel at any time?",
      answer:
        "For the **£299/month Business Plan**, you can cancel or manage your subscription at any time using our secure Stripe Customer Portal: https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00. The **£499/month Pro / Fake Review Plan** is a 12-month contract and cannot be cancelled early.",
      nudge: null,
    },
    {
      question: "What if I have more than 5 locations?",
      answer: "We'll create a custom plan tailored to your business. Contact us for pricing.",
      nudge: null,
    },
    {
      question: "How do I contact GuardX?",
      answer: "You can email us or visit our Contact Us page.",
      nudge: null,
    },
    {
      question: "Do you help with fake reviews?",
      answer: `Yes! Our Fake Review Protection service monitors, flags, and helps remove harmful fake reviews. <strong>Pricing is ${pricing.fakeRemovalService}/month per location.</strong>`,
      nudge: null,
    },
    {
      question: "What are your support response times?",
      answer:
        "Business Plan customers receive priority email support within 48 hours during business hours. Pro / Fake Review Plan customers receive priority email support within 24 hours during business hours.",
      nudge: null,
    },
  ]

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-[#d4af37] text-black hover:bg-[#b8941f] rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse border-2 border-[#d4af37]"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="bg-[#0a0a0a] border-[#2a2a2a] shadow-2xl max-h-[600px] overflow-hidden border-2">
            <div className="flex items-center justify-between p-4 border-b border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center shadow-md">
                  <Shield className="w-4 h-4 text-black font-bold" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GuardX Assistant</h3>
                  <p className="text-xs text-[#d4af37] font-medium">● Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-[#1a1a1a] text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <CardContent className="p-0 overflow-y-auto max-h-[500px]">
              <div className="p-4">
                <div className="mb-4">
                  <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-3 mb-3">
                    <p className="text-sm text-white font-medium">
                      Welcome to GuardX! Protect your business reputation online. Click a question to learn more, or get
                      started now!
                    </p>
                  </div>
                </div>

                {/* Sales-focused questions section */}
                <div className="space-y-2 mb-4">
                  {salesQuestions.map((item, index) => (
                    <div
                      key={`sales-${index}`}
                      className="border border-[#2a2a2a] rounded-lg hover:border-[#d4af37]/50 transition-colors"
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-left p-3 h-auto font-medium hover:bg-[#d4af37]/10 text-white"
                        onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                      >
                        <span className="text-sm">{item.question}</span>
                        {selectedQuestion === index ? (
                          <ChevronDown className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                        )}
                      </Button>
                      {selectedQuestion === index && (
                        <div className="px-3 pb-3 border-t border-[#2a2a2a]/50">
                          <div className="text-sm text-[#a1a1a1] mb-2 leading-relaxed">
                            {typeof item.answer === "string" ? (
                              <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                            ) : (
                              item.answer
                            )}
                          </div>
                          {item.nudge && (
                            <div className="text-xs text-[#d4af37] font-medium italic mb-2">{item.nudge}</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* FAQ section with separator */}
                <div className="border-t border-[#2a2a2a] pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-[#d4af37] mb-3">Frequently Asked Questions</h4>
                  <div className="space-y-2">
                    {faqQuestions.map((item, index) => (
                      <div
                        key={`faq-${index}`}
                        className="border border-[#2a2a2a] rounded-lg hover:border-[#d4af37]/50 transition-colors"
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-3 h-auto font-medium hover:bg-[#d4af37]/10 text-white"
                          onClick={() =>
                            setSelectedQuestion(
                              selectedQuestion === salesQuestions.length + index ? null : salesQuestions.length + index,
                            )
                          }
                        >
                          <span className="text-sm">{item.question}</span>
                          {selectedQuestion === salesQuestions.length + index ? (
                            <ChevronDown className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                          )}
                        </Button>
                        {selectedQuestion === salesQuestions.length + index && (
                          <div className="px-3 pb-3 border-t border-[#2a2a2a]/50">
                            <div className="text-sm text-[#a1a1a1] mb-2 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>
                            {item.nudge && (
                              <div className="text-xs text-[#d4af37] font-medium italic mb-2">{item.nudge}</div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-[#2a2a2a]">
                  <Button
                    className="w-full bg-[#d4af37] text-black hover:bg-[#b8941f] font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() => (window.location.href = "/pricing")}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#2a2a2a] hover:bg-[#d4af37]/10 hover:border-[#d4af37] text-white transition-all duration-200 bg-transparent"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    Contact Us
                  </Button>
                </div>

                <div className="mt-3">
                  <p className="text-xs text-[#a1a1a1] text-center">
                    Trusted by businesses worldwide to protect their reputation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

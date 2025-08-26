"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Shield, BarChart3, Star, ArrowRight } from "lucide-react"

export function ChatbotWelcome() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<"welcome" | "faq">("welcome")

  const faqs = [
    {
      question: "How quickly do you deliver reports?",
      answer:
        "Great question! Our automated reports are delivered within 24-48 hours of setup. Once you're onboarded, you'll receive regular updates according to your chosen plan - weekly for Business and daily for Growth plans.",
      cta: { text: "Book Consultation", link: "/contact" },
    },
    {
      question: "How much does it cost?",
      answer:
        "We have flexible pricing! Our Business plan starts at £199/month per location, and our Growth plan is £399/month per location. Both include automated review generation and comprehensive monitoring.",
      cta: { text: "View Pricing", link: "/pricing" },
    },
    {
      question: "Can you improve my online reviews?",
      answer:
        "We help generate authentic positive reviews through our automated system and can also help flag and remove fake negative reviews with our optional add-on service (£499 per location).",
      cta: { text: "Learn More", link: "/contact" },
    },
    {
      question: "Is this fully automated?",
      answer:
        "Yes! Our core monitoring and review generation services are fully automated. You'll get regular reports and alerts without any manual work required from your end.",
      cta: { text: "Get Started", link: "/onboarding" },
    },
    {
      question: "Do you monitor all review platforms?",
      answer:
        "We monitor the major platforms including Google, Facebook, Yelp, Trustpilot, and many others. Our system tracks your reputation across 50+ review sites and social platforms.",
      cta: { text: "See Full List", link: "/contact" },
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Of course! You can cancel anytime with no fees or penalties. We believe in earning your business every month through great service.",
      cta: { text: "Start Risk-Free", link: "/onboarding" },
    },
    {
      question: "What's included in the reputation score?",
      answer:
        "Your reputation score is calculated from reviews across all monitored platforms, social media mentions, and overall online sentiment. You'll get a clear breakdown of what's affecting your score.",
      cta: { text: "Book Demo", link: "/contact" },
    },
    {
      question: "Do you help with negative reviews?",
      answer:
        "Yes! We alert you immediately to negative reviews so you can respond quickly. Our optional Fake Review Add-On can also help flag and remove illegitimate negative reviews.",
      cta: { text: "Learn More", link: "/pricing" },
    },
  ]

  const [selectedFaq, setSelectedFaq] = useState<number | null>(null)

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
          <Card className="bg-[#0a0a0a] border-[#2a2a2a] shadow-2xl max-h-[500px] overflow-hidden border-2">
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

            <CardContent className="p-0 overflow-y-auto max-h-[400px]">
              {currentView === "welcome" && (
                <div className="p-4">
                  <div className="mb-4">
                    <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-3 mb-3">
                      <p className="text-sm text-white">
                        👋 Hi there! I'm here to help protect your business reputation.
                      </p>
                    </div>
                    <div className="bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg p-3">
                      <p className="text-sm text-white">What would you like to know more about?</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3 border-[#2a2a2a] hover:bg-[#d4af37]/10 hover:border-[#d4af37] bg-transparent transition-all duration-200"
                      onClick={() => setCurrentView("faq")}
                    >
                      <Shield className="w-4 h-4 mr-2 text-[#d4af37] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white">24/7 Monitoring</div>
                        <div className="text-xs text-[#a1a1a1]">Track mentions across all platforms</div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3 border-[#2a2a2a] hover:bg-[#d4af37]/10 hover:border-[#d4af37] bg-transparent transition-all duration-200"
                      onClick={() => setCurrentView("faq")}
                    >
                      <BarChart3 className="w-4 h-4 mr-2 text-[#d4af37] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white">Reputation Score Reports</div>
                        <div className="text-xs text-[#a1a1a1]">Weekly insights & analytics</div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3 border-[#2a2a2a] hover:bg-[#d4af37]/10 hover:border-[#d4af37] bg-transparent transition-all duration-200"
                      onClick={() => setCurrentView("faq")}
                    >
                      <Star className="w-4 h-4 mr-2 text-[#d4af37] flex-shrink-0" />
                      <div>
                        <div className="font-medium text-white">Review Management</div>
                        <div className="text-xs text-[#a1a1a1]">Generate & manage customer reviews</div>
                      </div>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-center p-3 border-[#2a2a2a] hover:bg-[#d4af37]/10 hover:border-[#d4af37] bg-transparent mt-4 transition-all duration-200"
                      onClick={() => setCurrentView("faq")}
                    >
                      <MessageCircle className="w-4 h-4 mr-2 text-[#d4af37]" />
                      <span className="font-medium text-white">Common Questions</span>
                    </Button>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#2a2a2a]">
                    <p className="text-xs text-[#a1a1a1] text-center">
                      Need immediate help?{" "}
                      <a
                        href="/contact"
                        className="text-[#d4af37] font-medium hover:text-[#f4e4a6] hover:underline transition-colors"
                      >
                        Contact our team
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {currentView === "faq" && (
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCurrentView("welcome")}
                      className="p-1 hover:bg-[#1a1a1a] text-[#d4af37]"
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </Button>
                    <h3 className="font-semibold text-white">Frequently Asked Questions</h3>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border border-[#2a2a2a] rounded-lg hover:border-[#d4af37]/50 transition-colors"
                      >
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left p-3 h-auto font-medium hover:bg-[#d4af37]/10 text-white"
                          onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                        >
                          {faq.question}
                        </Button>
                        {selectedFaq === index && (
                          <div className="px-3 pb-3">
                            <p className="text-sm text-[#a1a1a1] mb-3">{faq.answer}</p>
                            <Button
                              size="sm"
                              className="bg-[#d4af37] text-black hover:bg-[#b8941f] font-medium shadow-md hover:shadow-lg transition-all duration-200"
                              onClick={() => window.open(faq.cta.link, "_blank")}
                            >
                              {faq.cta.text}
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

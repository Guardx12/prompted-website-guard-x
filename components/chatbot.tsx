"use client"
import { useState } from "react"
import { MessageCircle, X, ChevronDown, ChevronUp } from "lucide-react"

interface FAQSection {
  question: string
  answer: string
  isOpen?: boolean
}

const faqSections: FAQSection[] = [
  {
    question: "What plans are available?",
    answer: `**Business Plan - £299/month** (Most Popular)
• Month-to-month with no contract
• Extra locations: £149/month each
• Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
• Instant alerts for negative or urgent reviews
• Automated weekly branded reports
• Fully automated

✓ **Cancel Any Time** – no contracts or long-term commitments
✓ **One Low Monthly Fee** – no hidden costs, transparent pricing

**Pro/Fake Review Plan - £499/month**
• One-year commitment required
• Extra locations: £299/month each
• Everything in Business Plan PLUS fake review flagging and removal
• Fully automated

✓ **Secure & Private** – your business data is safe with GuardX

**Enterprise Plan - Custom Pricing**
• For businesses with 5+ locations
• Custom monitoring setup and dedicated account manager

✓ **Trusted by Small Businesses** – simple, reliable protection`,
  },
  {
    question: "What features are included?",
    answer: `**Business Plan:** Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms. Instant alerts for negative reviews and weekly reports with GuardX branding. Month-to-month with no contract.

✓ **Works Across All Platforms** – Google, Yelp, Facebook, Trustpilot, and many more
✓ **Protect Your Reputation Instantly** – never miss a review again

**Pro/Fake Review Plan:** Same monitoring as Business Plan plus fake review flagging and removal. One-year commitment required for effectiveness. Fully automated.

✓ **Fully Automated** – set it and forget it

**Enterprise Plan:** Everything in Business Plan for 5+ locations with custom setup and dedicated support.`,
  },
  {
    question: "How much do extra locations cost?",
    answer: `**Extra Location Pricing:**
• Business Plan: £149 per extra location
• Pro/Fake Review Plan: £299 per extra location
• Enterprise Plan: Custom pricing for 5+ locations

Each location gets full monitoring across all supported platforms with instant alerts and weekly reports.

✓ **One Low Monthly Fee** – no hidden costs, transparent pricing
✓ **Works Across All Platforms** – comprehensive coverage for every location`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `**Subscription Management:**

For the **£299/month Business Plan**, you can cancel or manage your subscription at any time using our secure Stripe Customer Portal: https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00

The **£499/month Pro / Fake Review Plan** is a 12-month contract and cannot be cancelled early.

✓ **Cancel Any Time** – Business Plan has no contracts or long-term commitments
✓ **Fully Automated** – set it and forget it

The Business Plan offers maximum flexibility for subscription management!`,
  },
  {
    question: "How quickly will I see results?",
    answer: `Monitoring is immediate - you'll start receiving alerts right away! 

✓ **Protect Your Reputation Instantly** – never miss a review again
✓ **Fully Automated** – set it and forget it

Fake review removal and ongoing protection require time depending on the volume and source. A one-year commitment is required to allow sufficient time for effective removal of fake reviews and ongoing protection against recurring fake reviews.`,
  },
  {
    question: "Do I get dashboard access?",
    answer: `No dashboard access required - the service is fully automated for your convenience! 

✓ **Fully Automated** – set it and forget it
✓ **Secure & Private** – your business data is safe with GuardX

Your weekly reputation reports are sent directly to your email as a PDF. You don't need a login — simply open the email to view your report, which includes your overall star rating, reviews by month, reviews in the last 30 days, reviews since joining, rating breakdown (5-star to 1-star), review sources, and detailed review information.`,
  },
  {
    question: "How does fake review removal work?",
    answer: `GuardX monitors and flags fake reviews across all major platforms, taking appropriate action to remove or report them. We continuously protect your reputation by:
• Identifying suspicious review patterns
• Flagging potential fake reviews to platforms
• Taking action to remove confirmed fake reviews
• Ongoing monitoring for new fake reviews

✓ **Works Across All Platforms** – Google, Yelp, Facebook, Trustpilot, and many more
✓ **Secure & Private** – your business data is safe with GuardX

This requires time and ongoing vigilance, which is why the Pro Plan has a one-year commitment to allow sufficient time for effective removal and ongoing protection.`,
  },
  {
    question: "How do I get started?",
    answer: `Getting started is easy! Click "Start Protecting Today" on our website and choose your plan. GuardX handles all the setup automatically - no technical knowledge required.

✓ **Fully Automated** – set it and forget it
✓ **Protect Your Reputation Instantly** – never miss a review again
✓ **Trusted by Small Businesses** – simple, reliable protection

We'll immediately begin monitoring your reviews across all major platforms and sending alerts and reports. You're fully protected from day one!`,
  },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSections, setOpenSections] = useState<number[]>([0]) // First section open by default

  const toggleSection = (index: number) => {
    setOpenSections((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open FAQ"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* FAQ Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-h-[600px] bg-black border border-yellow-400/20 rounded-lg shadow-2xl z-50 flex flex-col md:w-96 sm:w-80 sm:right-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-4 rounded-t-lg">
            <h3 className="font-semibold">GuardX FAQ</h3>
            <p className="text-sm opacity-90">Everything you need to know</p>
          </div>

          {/* FAQ Sections */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {faqSections.map((section, index) => (
              <div key={index} className="border border-yellow-400/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-4 text-left bg-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-yellow-400 text-sm">{section.question}</span>
                  {openSections.includes(index) ? (
                    <ChevronUp size={18} className="text-yellow-400 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown size={18} className="text-yellow-400 flex-shrink-0 ml-2" />
                  )}
                </button>

                {openSections.includes(index) && (
                  <div className="p-4 bg-gray-800 border-t border-yellow-400/20">
                    <div className="text-sm text-white whitespace-pre-line leading-relaxed">{section.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="p-4 border-t border-yellow-400/20 bg-gray-900">
            <div className="text-center mb-3">
              <div className="text-xs text-green-400 font-medium">
                ✓ Cancel Any Time • ✓ Fully Automated • ✓ Secure & Private
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-3">Ready to protect your reputation?</p>
              <button
                onClick={() => (window.location.href = "/pricing")}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Start Protecting Today
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

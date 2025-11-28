import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      question: "What does GuardX do?",
      answer:
        "GuardX helps local businesses collect more Google reviews automatically using email and optional SMS review requests. No dashboards, no complicated tools — just consistent review growth that boosts visibility and enquiries.",
    },
    {
      question: "Is GuardX fully automated?",
      answer:
        "Yes. Once it's set up, review requests go out automatically after every job or visit, followed by two gentle reminders to increase responses.",
    },
    {
      question: "Can I respond to reviews myself?",
      answer:
        "Yes. All reviews appear on your own Google or Facebook page as normal. You stay fully in control and can reply directly on your platforms.",
    },
    {
      question: "Can I cancel the service?",
      answer: "Yes — GuardX is month-to-month. You can cancel anytime with no contracts or commitments.",
    },
    {
      question: "How often do I get reports?",
      answer:
        "GuardX focuses on review growth rather than dashboards. Your results will appear directly on Google. You'll see your reviews and visibility improving week by week without needing reports.",
    },
    {
      question: "Does GuardX monitor platforms?",
      answer:
        "No. GuardX focuses on increasing your reviews and improving visibility. All reviews go directly to your Google or Facebook pages where you can see them instantly.",
    },
    {
      question: "Does GuardX request reviews from my customers?",
      answer:
        "Yes. GuardX automatically sends friendly review requests by email (and SMS if added), along with two reminders to increase responses.",
    },
    {
      question: "Can I display my reviews on my website?",
      answer:
        "Yes — because customers leave reviews on your Google page, you can use any standard Google review widget or plugin if you want to show them on your website.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The only optional add-on is SMS (£16/month for a UK SMS number + £12/month for 200 text credits).",
    },
    {
      question: "How quickly will I see results?",
      answer: "Most businesses begin receiving new reviews within the first few days once the system is switched on.",
    },
    {
      question: "Do you manage my responses for me?",
      answer:
        "No. GuardX helps you collect more reviews automatically — all replies stay fully in your control through your Google Business Profile.",
    },
    {
      question: "Can I customise my review requests?",
      answer: "Yes — we can personalise your messages with your business name and tone.",
    },
    {
      question: "Is training required to use GuardX?",
      answer:
        "No training needed. The system runs automatically in the background — most clients never need to log into anything.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We only collect the customer name, email and phone number required to send review requests. Nothing else. All data is handled securely.",
    },
    {
      question: "How soon does everything start working?",
      answer:
        "Most setups are completed the same day. Email review requests can start immediately, and SMS begins once your dedicated number is approved (usually 1–2 weeks).",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "There are no complicated plans — your quote is based on the size and needs of your business. You can upgrade SMS at any time.",
    },
    {
      question: "What if I already use another tool?",
      answer: "GuardX can run alongside other tools, or replace them entirely if you prefer a simpler setup.",
    },
    {
      question: "Will GuardX remove negative reviews?",
      answer:
        "No service can remove legitimate reviews. GuardX focuses on increasing positive reviews so negative ones have far less impact.",
    },
    {
      question: "Can GuardX send review requests by text message?",
      answer: "Yes — SMS review requests are available as an optional upgrade and have a 98% open rate.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-yellow-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Frequently Asked <span className="text-yellow-600">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about GuardX reputation management services and how we protect your online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-yellow-600">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pt-4 pl-8">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Have more questions?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We're here to help. Contact us any time for personalised guidance or to see how GuardX can work for your
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-600 text-white hover:bg-yellow-700 px-8 py-4 text-lg font-semibold"
                  >
                    Contact Our Experts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/onboarding">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-yellow-600 text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg bg-white"
                  >
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">Quick Response Guarantee</h3>
                  <p className="text-gray-700 mb-6">
                    We reply to all messages within 24 hours. Simple, automated review growth — no dashboards, no
                    complexity.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">24hrs</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">Automated</div>
                      <div className="text-sm text-gray-600">Solutions</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

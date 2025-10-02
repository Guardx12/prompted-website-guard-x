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
        "GuardX monitors your online reviews across 100+ platforms, including Google, Facebook, Yelp, TripAdvisor, and Trustpilot. It sends instant alerts for new reviews and provides automated or suggested AI responses, along with detailed reports to track ratings, NPS, and sentiment trends.",
    },
    {
      question: "Is GuardX fully automated?",
      answer:
        "Yes. GuardX is a fully managed system. Reviews are monitored, alerts are sent, review requests are automated, and reports are generated automatically. You don't need to manually manage any part of the system.",
    },
    {
      question: "Can I respond to reviews myself?",
      answer:
        "Yes. GuardX provides suggested AI responses, but you can also manually respond to any review if you prefer.",
    },
    {
      question: "Can I cancel the service?",
      answer: "Yes. You can cancel your GuardX subscription at any time.",
    },
    {
      question: "How often do I get reports?",
      answer:
        "Reports are delivered automatically, giving you regular insights into your review ratings, NPS scores, sentiment trends, and any urgent issues.",
    },
    {
      question: "What platforms do you monitor?",
      answer:
        "GuardX monitors more than 100 platforms, including Google, Facebook, Yelp, TripAdvisor, Trustpilot, and others.",
    },
    {
      question: "Does GuardX request reviews from my customers?",
      answer:
        "Yes. GuardX can automatically request reviews from your customers to help increase your overall ratings.",
    },
    {
      question: "Can I display my reviews on my website?",
      answer: "Yes. GuardX includes a widget to show your best reviews on your website.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. The £199/month package is all-inclusive. There are no hidden fees.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "You'll immediately start receiving alerts and automated review requests. Reputation improvements depend on your existing reviews and customer engagement, which varies by business.",
    },
    {
      question: "Do you manage my responses for me?",
      answer:
        "Yes. GuardX can automatically respond to reviews using AI-generated replies, or you can choose to review and approve them manually.",
    },
    {
      question: "Can I customize the review requests sent to my customers?",
      answer: "Yes. You can personalize the messages that are sent when requesting reviews.",
    },
    {
      question: "Is training required to use GuardX?",
      answer:
        "No. GuardX is fully automated and designed to be simple. Once your account is set up, the system runs on its own.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Your data is protected using industry-standard security protocols. Only authorized users can access your account.",
    },
    {
      question: "How soon will I start receiving alerts?",
      answer:
        "You will start receiving alerts immediately after your account is set up and connected to your review platforms.",
    },
    {
      question: "Can I switch to another plan if needed?",
      answer:
        "Currently, the package is all-inclusive at £199/month. You can cancel anytime if you no longer want the service.",
    },
    {
      question: "What if I already use another review management tool?",
      answer:
        "GuardX can run alongside other tools, but we recommend consolidating to get the most benefit from the automated monitoring, AI responses, and reporting.",
    },
    {
      question: "Will GuardX remove negative reviews?",
      answer:
        "No. GuardX cannot remove reviews. It helps you respond professionally, address issues, and improve your reputation over time.",
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
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Still Have Questions?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our reputation management experts are here to help. Contact our team for personalized answers and
                guidance.
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
                    We respond to all inquiries within 24 hours and provide automated reputation management solutions to
                    discuss your specific needs.
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

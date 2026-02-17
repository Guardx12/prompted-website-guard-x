import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const websiteDesignFaqs = [
    {
      question: "What does GuardX website design include?",
      answer:
        "GuardX builds modern, professional websites designed to help your business stand out and generate more enquiries. Every site is mobile-friendly, fast, and built with a strong structure.",
    },
    {
      question: "What is SEO foundation?",
      answer:
        "SEO foundation means your website is built with the correct structure so Google can find, crawl, and understand your site properly. This helps your website appear in search results over time.",
    },
    {
      question: "Do you provide ongoing SEO services?",
      answer:
        "GuardX provides strong SEO foundation setup during the website build. We do not provide ongoing SEO campaigns.",
    },
    {
      question: "Do you provide hosting?",
      answer:
        "Yes. GuardX provides fast, secure hosting to keep your website live for \u00a330 per month. Support is available if needed.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites are completed within a few days to a few weeks depending on the project.",
    },
  ]

  const faqs = [
    {
      question: "What does GuardX do?",
      answer:
        "GuardX helps local businesses maintain a consistently active Google presence. By keeping your profile visibly active with regular customer feedback, you strengthen the trust signals Google uses to rank local businesses -- helping you stand out instead of blending in.",
    },
    {
      question: "Is GuardX fully automated?",
      answer:
        "Yes. Once set up, GuardX runs in the background, engaging customers after every job or visit. This consistent activity keeps your Google profile looking active and trustworthy without any manual effort from your team.",
    },
    {
      question: "Can I respond to reviews myself?",
      answer:
        "Yes. All customer feedback appears on your own Google or Facebook page as normal. You stay fully in control and can reply directly on your platforms.",
    },
    {
      question: "Can I cancel the service?",
      answer: "Yes -- GuardX is month-to-month. You can cancel anytime with no contracts or commitments.",
    },
    {
      question: "How often do I get reports?",
      answer:
        "GuardX focuses on maintaining your Google visibility rather than generating reports. You'll see the results directly on your Google profile -- a more active presence, stronger trust signals, and improved local positioning over time.",
    },
    {
      question: "Does GuardX monitor platforms?",
      answer:
        "No. GuardX focuses on keeping your Google presence consistently active. All customer activity flows directly to your Google or Facebook pages where you can see it instantly.",
    },
    {
      question: "Does GuardX request reviews from my customers?",
      answer:
        "Yes. GuardX sends friendly requests to customers by email and SMS, encouraging them to share their experience. This consistent engagement keeps your Google profile active -- the signal Google uses when deciding which businesses to show prominently.",
    },
    {
      question: "Can I display my reviews on my website?",
      answer:
        "Yes -- because customers leave feedback on your Google page, you can use any standard Google review widget or plugin to display it on your website.",
    },
    {
      question: "How quickly will I see results?",
      answer: "Most businesses see increased Google profile activity within the first few days. Over time, this builds into a visibly stronger presence compared to competitors who appear less active.",
    },
    {
      question: "Do you manage my responses for me?",
      answer:
        "No. GuardX maintains your Google visibility automatically -- all replies and engagement stay fully in your control through your Google Business Profile.",
    },
    {
      question: "Can I customise my review requests?",
      answer: "Yes -- we can personalise your messages with your business name and tone to match your brand.",
    },
    {
      question: "Is training required to use GuardX?",
      answer:
        "No training needed. The system maintains your Google presence automatically in the background -- most clients never need to log into anything.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We only collect the customer name, email and phone number required to engage customers. Nothing else. All data is handled securely.",
    },
    {
      question: "How soon does everything start working?",
      answer:
        "Most setups are completed the same day. Email engagement can start immediately, and SMS begins once your dedicated number is approved (usually 1-2 weeks).",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "There are no complicated plans -- your quote is based on the size and needs of your business. Everything you need is included as standard.",
    },
    {
      question: "What if I already use another tool?",
      answer: "GuardX can run alongside other tools, or replace them entirely if you prefer a simpler approach to maintaining your Google presence.",
    },
    {
      question: "Will GuardX remove negative reviews?",
      answer:
        "No service can remove legitimate reviews. GuardX focuses on building a consistently active Google presence so that any negative feedback is balanced by ongoing positive customer activity.",
    },
    {
      question: "Can GuardX send review requests by text message?",
      answer: "Yes -- SMS is included as standard. With a 98% open rate, it's one of the most effective ways to maintain consistent Google activity.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-blue-400" />
            </div>
            <AnimatedPageTitle text="Frequently Asked" suffix="Questions" className="mb-6" />
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about GuardX Website Design, SEO Foundation, Hosting, and Review Generation.
            </p>
          </div>
        </div>
      </section>

      {/* Website Design & SEO Foundation FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Website Design & SEO Foundation</h2>
          <Card className="bg-[#1e293b] border-white/10 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {websiteDesignFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`web-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#94a3b8] pt-4 pl-8">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Review Generation System FAQ */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Review Generation System</h2>
          <Card className="bg-[#1e293b] border-white/10 shadow-lg">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`review-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#94a3b8] pt-4 pl-8">
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
      <section className="py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have more questions?</h2>
              <p className="text-lg text-[#94a3b8] mb-8">
                {"We're here to help. Contact us any time for personalised guidance or to see how GuardX can work for your business."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    Contact Our Experts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/onboarding">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
                  >
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-[#1e293b] border-white/10 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Response Guarantee</h3>
                  <p className="text-[#94a3b8] mb-6">
                    {"We reply to all messages within 24 hours. Simple, hands-off Google visibility -- no dashboards, no complexity."}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">24hrs</div>
                      <div className="text-sm text-[#64748b]">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">Automated</div>
                      <div className="text-sm text-[#64748b]">Solutions</div>
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

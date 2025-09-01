import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePricing } from "@/hooks/use-pricing"

export default function FAQPage() {
  const pricing = usePricing()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about GuardX reputation management services and how we protect your online
              presence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-access" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How do I access my reports?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      You'll receive secure login credentials to access your personalized dashboard with real-time
                      reputation scores, detailed reports, and monitoring alerts. Reports are also emailed to you
                      weekly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-contract" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is there a contract?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      No, GuardX operates on a month-to-month basis with no long-term contracts. You can cancel anytime
                      without penalties or fees.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-updates" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How often are updates?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      You receive real-time alerts for urgent issues, daily monitoring summaries, and comprehensive
                      weekly reports. Your dashboard is updated continuously throughout the day.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-cancel" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Can I cancel anytime?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Yes, absolutely. You can cancel your £299/month subscription at any time with no cancellation
                      fees, penalties, or questions asked.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is there a setup fee?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>No, GuardX does not charge setup fees. The only cost is the monthly subscription of £299.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What payment methods are accepted?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>GuardX securely accepts all major credit cards and bank transfers through Stripe.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How quickly will results be visible?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Many clients notice improvements within the first 1–2 weeks, with stronger results typically
                      building over 1–3 months.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Can GuardX remove negative content?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Yes. GuardX uses proven strategies to suppress harmful or misleading content and, where possible,
                      works with platforms to request removal of false or defamatory material.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Will GuardX help during a reputation crisis?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Yes, GuardX provides immediate crisis management support to protect your brand and restore trust
                      quickly.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How are results measured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      GuardX provides a detailed dashboard, monthly reports, and clear performance metrics to track
                      improvements in reputation and online presence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Does GuardX provide industry-specific solutions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Yes, GuardX tailors reputation strategies to specific industries such as healthcare, legal
                      services, real estate, hospitality, finance, and more.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      Yes, GuardX follows strict data protection standards. All client information is encrypted, handled
                      securely, and never shared with third parties without permission.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Does GuardX monitor competitors?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>Yes, we can also monitor competitors if required.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What if my business has no reviews yet?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>
                      GuardX can help build a strong foundation by encouraging genuine customer feedback and improving
                      visibility across key platforms.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Can GuardX work with businesses outside the UK?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <p>Yes, GuardX provides reputation management solutions for businesses worldwide.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our reputation management experts are here to help. Get personalized answers to your specific questions
                and learn how GuardX can protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                  >
                    Contact Our Experts
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground mb-6">
                    We respond to all inquiries within 24 hours and provide automated reputation management solutions to
                    discuss your specific needs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">24hrs</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">Automated</div>
                      <div className="text-sm text-muted-foreground">Solutions</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Topics</h2>
            <p className="text-lg text-muted-foreground">Quick answers to common reputation management questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Review Management",
                description: "How we help manage and respond to customer reviews across all platforms.",
              },
              {
                title: "Crisis Response",
                description: "Our emergency protocols for handling reputation crises and negative publicity.",
              },
              {
                title: "SEO & Content",
                description: "How we use SEO and content creation to improve your online presence.",
              },
              {
                title: "Monitoring Tools",
                description: "Advanced tools and technology we use to track your online reputation.",
              },
              {
                title: "Industry Solutions",
                description: "Specialized reputation management for different industries and business types.",
              },
              {
                title: "Success Stories",
                description: "Real examples of how we've helped businesses improve their online reputation.",
              },
            ].map((topic, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

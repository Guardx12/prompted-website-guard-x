import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
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
                <AccordionItem value="item-pricing" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What are your pricing plans?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>We offer a simple, transparent pricing structure:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>Business Plan: £99/month per location</strong>
                        </li>
                        <li>Complete reputation protection and monitoring</li>
                        <li>Weekly automated reports delivered to your email</li>
                        <li>Real-time alerts for urgent issues</li>
                        <li>No setup fees or long-term contracts</li>
                      </ul>
                      <div className="mt-4">
                        <Link href="/pricing">
                          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                            View Full Pricing Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-platforms" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What platforms do you monitor?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>We provide comprehensive monitoring across all major review platforms:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Google Reviews & Google My Business</li>
                        <li>Trustpilot</li>
                        <li>Yelp</li>
                        <li>Facebook Reviews</li>
                        <li>Plus 100+ additional platforms automatically monitored</li>
                      </ul>
                      <p className="mt-3">
                        Our automated system ensures no review goes unnoticed across your entire online presence.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-locations" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How does extra location pricing work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>Our location-based pricing is simple and transparent:</p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>£99 per location per month</strong>
                        </li>
                        <li>Include all locations in your onboarding form after purchase</li>
                        <li>Each location receives full monitoring and reporting</li>
                        <li>No additional setup fees for multiple locations</li>
                      </ul>
                      <div className="mt-4">
                        <Link href="/onboarding">
                          <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                          >
                            Start Onboarding Process
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-reports" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What's included in the weekly reports?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>Your comprehensive weekly reports include:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Overall star rating across all platforms</li>
                        <li>Reviews by month and trends analysis</li>
                        <li>Reviews in the last 30 days</li>
                        <li>Total reviews since joining GuardX</li>
                        <li>Rating breakdown (5-star to 1-star distribution)</li>
                        <li>Review sources and platform performance</li>
                        <li>Detailed review information and responses</li>
                      </ul>
                      <p className="mt-3">
                        All reports are professionally branded and delivered automatically as PDF files to your email.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-automated" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is everything fully automated?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>Yes, completely automated.</strong> Our done-for-you service includes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Automatic monitoring across all platforms</li>
                        <li>Instant alerts for urgent issues</li>
                        <li>Weekly reports delivered to your email</li>
                        <li>Professional response management</li>
                        <li>No dashboard access needed</li>
                        <li>No manual intervention required</li>
                      </ul>
                      <p className="mt-3">
                        Simply receive your weekly reports with GuardX branding and let us handle the rest.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-access" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How do I access my reports?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>Accessing your reports is simple:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Weekly reports sent directly to your email as PDF</li>
                        <li>No login or dashboard required</li>
                        <li>Professional formatting with your business details</li>
                        <li>Includes overall rating, individual reviews, and trends</li>
                        <li>Urgent alerts sent immediately when needed</li>
                      </ul>
                      <p className="mt-3">Everything you need arrives in your inbox automatically.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-contract" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is there a contract?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>No long-term contracts required.</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Business Plan: Month-to-month billing</li>
                        <li>Cancel anytime with no penalties</li>
                        <li>Flexible service that grows with your business</li>
                        <li>No hidden fees or surprise charges</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-updates" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How often are updates?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>You receive multiple types of updates:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Real-time alerts</strong> for urgent issues via email
                        </li>
                        <li>
                          <strong>Daily monitoring</strong> summaries when needed
                        </li>
                        <li>
                          <strong>Weekly comprehensive reports</strong> delivered every week
                        </li>
                        <li>All updates delivered directly to your inbox</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-cancel" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How do I cancel or manage my subscription?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>Managing your subscription is straightforward:</p>
                      <p>
                        Cancel anytime through the Stripe billing portal:{" "}
                        <a
                          href="https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00"
                          className="text-primary hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00
                        </a>
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-setup-fee" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is there a setup fee?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>No setup fees.</strong> Our transparent pricing includes:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Business Plan: £99/month per location only</li>
                        <li>No hidden costs or surprise charges</li>
                        <li>All setup and onboarding included</li>
                        <li>Start protecting your reputation immediately</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-payment" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What payment methods are accepted?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>We accept secure payments through:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>All major credit cards (Visa, MasterCard, etc.)</li>
                        <li>Bank transfers</li>
                        <li>Powered by Stripe for maximum security</li>
                        <li>Automatic monthly billing for convenience</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-results" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    How quickly will results be visible?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>Results timeline varies by situation:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>
                          <strong>Initial improvements:</strong> 1-2 weeks
                        </li>
                        <li>
                          <strong>Significant results:</strong> 1-3 months
                        </li>
                        <li>Immediate monitoring and alert setup</li>
                        <li>Weekly reports show progress from day one</li>
                      </ul>
                      <p className="mt-3">
                        Many clients notice positive changes within the first few weeks of service.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-industry" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Do you provide industry-specific solutions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>Yes, we tailor strategies for specific industries:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Healthcare and medical practices</li>
                        <li>Legal services and law firms</li>
                        <li>Real estate and property management</li>
                        <li>Hospitality and restaurants</li>
                        <li>Finance and professional services</li>
                        <li>And many more industries</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-security" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>Yes, we follow strict data protection standards:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>All client information is encrypted</li>
                        <li>Secure handling and storage protocols</li>
                        <li>Never shared with third parties without permission</li>
                        <li>GDPR compliant data practices</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-no-reviews" className="border-border">
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    What if my business has no reviews yet?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p>
                        <strong>Perfect opportunity to build a strong foundation:</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Encourage genuine customer feedback</li>
                        <li>Improve visibility across key platforms</li>
                        <li>Establish positive online presence from the start</li>
                        <li>Proactive reputation building strategies</li>
                      </ul>
                      <p className="mt-3">
                        Starting early gives you the best advantage in building a strong online reputation.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Still Have Questions?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our reputation management experts are here to help. Contact our team for personalized answers and
                guidance.
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
                <Link href="/onboarding">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
                  >
                    Get Started Now
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

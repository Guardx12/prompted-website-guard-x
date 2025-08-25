import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Protection Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional reputation management with transparent pricing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Plan - Most Popular */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
              <Card className="bg-card border-primary border-2 relative">
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">Business Plan</CardTitle>
                  <p className="text-muted-foreground mb-6">Perfect for single location businesses</p>

                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-5xl font-bold text-primary">£299</span>
                      <div className="text-left">
                        <div className="text-muted-foreground text-sm">/month</div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                    {[
                      "Covers 1 business location",
                      "Dashboard login for 1 user",
                      "Daily, weekly, or monthly branded reports",
                      "Review monitoring & sentiment analysis",
                      "Real-time alerts",
                      "Priority email support",
                      "Extra locations: £149/month each",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/onboarding">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold w-full mb-4"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            </div>

            {/* Growth Plan */}
            <Card className="bg-card border-border relative">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">Growth Plan</CardTitle>
                <p className="text-muted-foreground mb-6">For growing teams and businesses</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">£499</span>
                    <div className="text-left">
                      <div className="text-muted-foreground text-sm">/month</div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Covers 1 business location",
                    "Dashboard login for up to 5 users",
                    "Full reputation score dashboard",
                    "Advanced monitoring across multiple sources",
                    "Automated review collection tools",
                    "Priority email support",
                    "Extra locations: £149/month each",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/onboarding">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold w-full mb-4 bg-transparent"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border relative">
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">Enterprise Plan</CardTitle>
                <p className="text-muted-foreground mb-6">Tailored for large organizations</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold text-primary">Custom</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Pricing</p>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Tailored for businesses with many locations",
                    "Bespoke reporting and monitoring setup",
                    "Unlimited users",
                    "Dedicated email/chat account manager",
                    "Contact us for a custom quote",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold w-full mb-4 bg-transparent"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-primary mb-8">Protect your reputation today with GuardX.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">✓ Cancel anytime. No long-term contracts.</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">✓ Extra locations are easy to add — scale as you grow.</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">✓ Trusted by businesses who value their reputation.</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ✓ All monitoring and alerts handled securely and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Professional Plans?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored solutions to protect and enhance your reputation, suitable for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Save Time</h3>
                <p className="text-muted-foreground">
                  Let our experts handle your reputation management while you focus on growing your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our strategies have helped hundreds of businesses improve their online reputation and ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Complete Protection</h3>
                <p className="text-muted-foreground">
                  Comprehensive monitoring and protection across all platforms and review sites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about our pricing and services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does per-location pricing work?",
                answer:
                  "Your first location is included in your chosen plan (Business £299/month or Growth £499/month). Each additional location costs £149/month with the same comprehensive monitoring and support.",
              },
              {
                question: "What's the difference between Business and Growth plans?",
                answer:
                  "The Business Plan covers 1 user and includes essential monitoring features. The Growth Plan supports up to 5 users with advanced monitoring, full reputation dashboard, and automated review collection tools.",
              },
              {
                question: "Do you handle everything online?",
                answer:
                  "Yes, everything is handled online through our automated systems. No phone calls or in-person meetings required. You'll have access to our dashboard, email support, and crisis management all through our platform.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.",
              },
              {
                question: "How does Enterprise pricing work?",
                answer:
                  "Enterprise plans are custom-tailored for businesses with multiple locations and specific needs. Contact us for a personalized quote based on your requirements.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses that trust GuardX to protect their online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Start Your Protection Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Started Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react"
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Card className="bg-card border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular / Best Value
                </span>
              </div>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">Business Plan</CardTitle>
                <p className="text-muted-foreground mb-6">Complete reputation protection</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">£299</span>
                    <div className="text-left">
                      <div className="text-muted-foreground text-sm">/month</div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground font-semibold">+ £149 per additional location</p>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Advanced reputation monitoring",
                    "Real-time alerts & notifications",
                    "Reputation score dashboard",
                    "Review response management",
                    "Daily, Weekly, or Monthly detailed reports",
                    "Crisis management support",
                    "Email support",
                    "Multi-location support",
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

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ 100% Automated Service</p>
                  <p>✓ Cancel Anytime</p>
                  <p>✓ No Setup Fees</p>
                </div>
              </CardHeader>
            </Card>
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
                  "Your first location costs £299/month and includes all our advanced features. Each additional location is only £150/month with the same comprehensive monitoring and support.",
              },
              {
                question: "Do you handle everything online?",
                answer:
                  "Yes, everything is handled online through our automated systems. No phone calls or in-person meetings required. You'll have access to our dashboard, email support, and crisis management all through our platform.",
              },
              {
                question: "What's included in the Business Plan?",
                answer:
                  "Advanced reputation monitoring, dashboard access, real-time alerts, sentiment analysis, review response management, daily, weekly, or monthly reports, and email support with crisis management.",
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
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards through our secure Stripe payment processing system.",
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

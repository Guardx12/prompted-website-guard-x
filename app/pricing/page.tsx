import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Shield, TrendingUp, BarChart3, Users, Clock, ArrowRight } from "lucide-react"
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
              Simple <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              One comprehensive plan that includes everything you need to protect and enhance your online reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-primary text-primary-foreground px-6 py-2 text-sm font-semibold">Most Popular</Badge>
            </div>

            <Card className="bg-card border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-8 pt-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">Professional Plan</CardTitle>
                <p className="text-muted-foreground mb-8">Complete reputation management solution for your business</p>

                <div className="mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-5xl md:text-6xl font-bold text-primary">£149</span>
                    <div className="text-left">
                      <div className="text-muted-foreground text-lg">/month</div>
                      <div className="text-xs text-muted-foreground">billed monthly</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">No setup fees • Cancel anytime</p>
                </div>

                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-4 text-lg font-semibold mb-4"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <p className="text-xs text-muted-foreground">
                  Stripe integration coming soon • Secure payment processing
                </p>
              </CardHeader>

              <CardContent className="px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Core Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Core Features
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "24/7 reputation monitoring",
                        "Real-time alerts & notifications",
                        "Multi-platform coverage",
                        "Sentiment analysis",
                        "Review response management",
                        "Brand mention tracking",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Advanced Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Advanced Features
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Reputation recovery campaigns",
                        "Crisis management support",
                        "Content suppression strategies",
                        "Positive content creation",
                        "Competitor analysis",
                        "SEO optimization",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Analytics & Reporting */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      Analytics & Reporting
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Comprehensive dashboard",
                        "Monthly detailed reports",
                        "Performance metrics",
                        "ROI tracking",
                        "Custom analytics",
                        "Data export capabilities",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support & Consultation */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      Support & Consultation
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Dedicated account manager",
                        "Expert consultation calls",
                        "24/7 priority support",
                        "Strategic planning sessions",
                        "Implementation guidance",
                        "Ongoing optimization",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Professional Plan?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to protect and enhance your reputation, all in one comprehensive package
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
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees. You only pay the monthly subscription fee of £149.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We're currently integrating Stripe for secure payment processing. Once live, we'll accept all major credit cards and bank transfers.",
              },
              {
                question: "How quickly will I see results?",
                answer:
                  "Most clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months.",
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service.",
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
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              Start Your Protection Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

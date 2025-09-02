import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { StripeCheckoutButton } from "@/components/stripe-checkout-button"

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Business Plan - Most Popular */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">£299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-medium">Save 20% with annual billing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for single location businesses</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Instant alerts for negative or urgent reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Automated weekly branded reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Fully automated</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Extra locations: £149/month each</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                <div className="space-y-2">
                  <StripeCheckoutButton
                    productKey="business_monthly"
                    className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold"
                  >
                    <span className="get-started-text">Start Monthly Plan</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </StripeCheckoutButton>

                  <StripeCheckoutButton
                    productKey="business_annual"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    <span>Annual Plan (20% Off)</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </StripeCheckoutButton>
                </div>
              </CardContent>
            </Card>

            {/* Pro / Fake Review Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pro / Fake Review Plan</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">£499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Includes fake review removal</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">One-year commitment required</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Instant alerts for negative or urgent reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Automated weekly branded reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-semibold">Fake review flagging and removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Fully automated</span>
                  </li>
                </ul>

                <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-800">
                    A one-year commitment is required to allow sufficient time for effective removal of fake reviews and
                    ongoing protection against recurring fake reviews.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Extra locations: £299/month each</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Secure & Private – your data is safe</div>
                  <div className="text-xs text-green-600 font-medium">✓ Trusted by Small Businesses</div>
                </div>

                <div className="space-y-2">
                  <StripeCheckoutButton
                    productKey="pro_monthly"
                    className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold"
                  >
                    <span className="get-started-text">Start Monthly Plan</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </StripeCheckoutButton>

                  <StripeCheckoutButton
                    productKey="pro_annual"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    <span>Annual Plan (20% Off)</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </StripeCheckoutButton>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise Plan</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">Custom</span>
                    <span className="text-muted-foreground"> Pricing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">For businesses with 5+ locations</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Includes all features in the Business Plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Custom monitoring setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Volume discounts available</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Scalable pricing based on your needs</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Protect Your Reputation Instantly</div>
                  <div className="text-xs text-green-600 font-medium">✓ Dedicated Support Included</div>
                </div>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="get-started-btn w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    <span className="get-started-text">Contact Us</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
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
                question: "What are your pricing plans?",
                answer:
                  "We offer three plans: Business Plan (£299/month) for complete reputation protection, Pro/Fake Review Plan (£499/month with one-year commitment) for advanced fake review removal, and Enterprise Plan (custom pricing) for businesses with 5+ locations.",
              },
              {
                question: "How does extra location pricing work?",
                answer:
                  "Business Plan: £149/month per additional location. Pro/Fake Review Plan: £299/month per additional location. Enterprise Plan: Custom pricing for 5+ locations with volume discounts.",
              },
              {
                question: "What platforms do you monitor?",
                answer:
                  "We monitor Google, Trustpilot, Yelp, Facebook, and many more review platforms to ensure comprehensive coverage of your online reputation across all major sites.",
              },
              {
                question: "What's included in the weekly branded reports?",
                answer:
                  "Your weekly reports include overall reputation score with trends, new reviews filtered by sentiment, review sources breakdown, and highlighted reviews & insights - all professionally branded with your business information.",
              },
              {
                question: "Why does the Pro plan require a one-year commitment?",
                answer:
                  "Fake review removal takes time to be effective, and new fake reviews may continue to appear. The one-year commitment ensures we can provide comprehensive protection and see the process through to completion.",
              },
              {
                question: "Is everything fully automated?",
                answer:
                  "Yes, all our services are fully automated. You don't need dashboard access or manual intervention - we handle monitoring, alerts, reporting, and response management automatically.",
              },
              {
                question: "Can I cancel anytime?",
                answer:
                  "Business Plan: Yes, cancel anytime with no contracts or penalties. Pro Plan: One-year commitment required. Enterprise Plan: Terms vary based on agreement.",
              },
              {
                question: "Are there any setup fees?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly subscription fee.",
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
            <StripeCheckoutButton
              productKey="business_monthly"
              size="lg"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              <span className="get-started-text">Start Your Protection Today</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </StripeCheckoutButton>
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

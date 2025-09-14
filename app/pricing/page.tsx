import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingNote } from "@/components/pricing-note"
import { Card, CardContent } from "@/components/ui/card"
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
              Professional done-for-you reputation management with expert oversight and transparent pricing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                  <p className="text-sm text-muted-foreground">
                    Perfect for all businesses, with flexible location options
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Our experts provide <span className="text-yellow-600 font-bold">24/7 monitoring</span> across
                      Google, Trustpilot, Yelp, Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Receive <span className="text-yellow-600 font-bold">instant alerts</span> when our team detects
                      negative or urgent reviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Professional Weekly Reputation Reports Delivered.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Expert-crafted <span className="text-yellow-600 font-bold">AI-drafted review responses</span>{" "}
                      managed by our team
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Completely hands-off - our experts handle everything automatically
                    </span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Additional locations: £149/month each (fully managed)</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                <a
                  href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold rounded-md inline-flex items-center justify-center transition-colors"
                >
                  <span className="get-started-text">Start Expert Protection Today</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
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
                  <p className="text-sm text-muted-foreground">
                    Dedicated expert team for businesses with 5+ locations
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">All Business Plan features managed by our expert team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Custom <span className="text-yellow-600 font-bold">monitoring setup</span> tailored by our
                      specialists
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      All plans are fully managed as a done-for-you service by our expert team, ensuring your reputation
                      is monitored and improved without any effort on your part
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Significant volume discounts for multi-location management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Professional Reports Delivered Weekly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Our Enterprise Plan provides the fully managed, done-for-you service across all your locations for
                      businesses with more than five locations, ensuring your reputation is monitored and improved
                      automatically without any extra work from your team
                    </span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Scalable expert management pricing based on your needs
                  </p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Dedicated Expert Team – premium service</div>
                  <div className="text-xs text-green-600 font-medium">✓ Fully Managed Service & Account Management</div>
                </div>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="get-started-btn w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    <span className="get-started-text">Contact Our Experts</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <PricingNote />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Expert Management Plans?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional done-for-you reputation management with dedicated expert oversight for businesses of all
              sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Complete Peace of Mind</h3>
                <p className="text-muted-foreground">
                  Our expert team handles all reputation management tasks automatically, so you can focus entirely on
                  growing your business without any monitoring concerns.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Expert-Driven Results</h3>
                <p className="text-muted-foreground">
                  Our professional team's proven strategies and expert oversight have helped hundreds of businesses
                  significantly improve their online reputation and ratings.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Comprehensive Expert Protection</h3>
                <p className="text-muted-foreground">
                  Our specialists provide complete monitoring and protection across all platforms and review sites with
                  professional oversight and immediate response capabilities.
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
            <p className="text-lg text-muted-foreground">
              Common questions about our expert management pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What are your expert management pricing plans?",
                answer:
                  "We offer two expert-managed plans: Business Plan (£299/month) for complete professional reputation protection, and Enterprise Plan (custom pricing) for businesses with 5+ locations requiring dedicated expert teams.",
              },
              {
                question: "How does expert management pricing work for multiple locations?",
                answer:
                  "Business Plan: £149/month per additional location (fully managed by our experts). Enterprise Plan: Custom pricing for 5+ locations with dedicated account management and volume discounts.",
              },
              {
                question: "What platforms do your experts monitor?",
                answer:
                  "Our professional team monitors Google, Trustpilot, Yelp, Facebook, and many more review platforms with 24/7 expert oversight to ensure comprehensive coverage of your online reputation across all major sites.",
              },
              {
                question: "What's included in the professional weekly reports?",
                answer:
                  "Your expert-prepared weekly reports include overall reputation score with professional trend analysis, new reviews, and comprehensive review sources breakdown — all professional weekly reports delivered automatically.",
              },
              {
                question: "Is everything managed by your expert team automatically?",
                answer:
                  "Yes, all our services are completely managed by our expert team. You receive professional oversight without needing any dashboard access or manual intervention — our specialists handle monitoring, alerts, reporting, and response management automatically with expert precision.",
              },
              {
                question: "Can I cancel my expert management service anytime?",
                answer:
                  "Business Plan: Yes, cancel anytime with no contracts or penalties — complete flexibility. Enterprise Plan: Terms vary based on dedicated service agreement.",
              },
              {
                question: "Are there any setup fees for expert management?",
                answer:
                  "No, there are no setup fees for any of our expert-managed plans. You only pay the monthly subscription fee for complete professional service.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready for Expert Protection?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses that trust GuardX's expert team to professionally manage and protect their
            online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-md inline-flex items-center justify-center transition-colors"
            >
              <span className="get-started-text">Start Expert Protection Today</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/pricing"
              className="border border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent rounded-md inline-flex items-center transition-colors"
            >
              Get Expert Management Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

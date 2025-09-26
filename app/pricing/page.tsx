"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingNote } from "@/components/pricing-note"
import { PaymentLogos } from "@/components/payment-logos"
import { CompanyLogos } from "@/components/company-logos"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function PricingPage() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {isSticky && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm py-3 text-center shadow-lg">
          <a
            href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
            className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-10 py-4 text-xl font-bold shadow-xl rounded-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20"
          >
            <span>Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      )}

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

          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-green-600 border-green-700 shadow-lg rounded-md">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Why £99?</h2>
                <p className="text-white mb-4">
                  GuardX is built to be{" "}
                  <span className="text-white font-semibold">lean, automated, and affordable</span>. Unlike big
                  enterprise services that charge hundreds per month for manual monitoring, GuardX uses a smart,
                  automated system to track all your online reviews and alerts daily.
                </p>
                <p className="text-white">
                  You get the <span className="text-white font-semibold">same protection and insights</span> at a fair
                  price — just <span className="text-white font-bold text-lg">£99/month</span>. No hidden fees, no long
                  contracts — just straightforward reputation monitoring for every business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            {/* Business Plan - Most Popular */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative transform scale-105 max-w-md w-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">£99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">Just £3.20/day – Cancel anytime</div>
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
                    <span className="text-foreground">Completely hands-off - our experts handle everything</span>
                  </li>
                </ul>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                    className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 w-full px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
                  >
                    <span className="get-started-text">Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
                    <ArrowRight className="ml-4 w-8 h-8" />
                  </a>
                  <PaymentLogos />
                  <CompanyLogos />
                </div>
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
                  Our expert team handles all reputation management tasks, so you can focus entirely on growing your
                  business without any monitoring concerns.
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
                  "We offer two expert-managed plans: Business Plan (£99/month) for complete professional reputation protection, and Enterprise Plan (custom pricing) for businesses with 5+ locations requiring dedicated expert teams.",
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
                  "Yes, all our services are completely managed by our expert team. You receive professional oversight without needing any dashboard access or manual intervention — our specialists handle monitoring, alerts, reporting, and response management with expert precision.",
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex flex-col items-center">
              <a
                href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
              >
                <span className="get-started-text">Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
                <ArrowRight className="ml-4 w-8 h-8" />
              </a>
              <PaymentLogos />
              <CompanyLogos />
            </div>
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

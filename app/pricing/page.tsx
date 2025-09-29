"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentLogos } from "@/components/payment-logos"
import { PlatformLogos } from "@/components/platform-logos"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header & Intro */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Professional <span className="text-primary">Reputation Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Professional done-for-you reputation management with expert oversight and transparent pricing
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get 24/7 monitoring, instant alerts, and weekly PDF reports delivered straight to your inbox. Your trial
              starts immediately via email after payment.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative transform scale-105 max-w-lg w-full">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Business Plan</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">£99</span>
                    <span className="text-xl text-muted-foreground">/month</span>
                  </div>
                  <div className="text-lg text-primary font-semibold mb-2">Just £3.20/day – Cancel anytime</div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">
                      <strong>24/7 monitoring</strong> of Google, Trustpilot, Yelp, Facebook, and other platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">
                      <strong>Instant alerts</strong> for negative or urgent reviews
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">
                      <strong>Professional weekly reports</strong> delivered via email
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">
                      <strong>Hands-off management</strong> by GuardX experts
                    </span>
                  </li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="text-center space-y-2">
                    <div className="text-sm text-green-700 font-medium">✓ No contracts, no hidden fees</div>
                    <div className="text-sm text-green-700 font-medium">✓ Cancel anytime with complete flexibility</div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="/onboarding"
                    className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 w-full px-8 py-6 text-xl font-bold shadow-2xl rounded-xl inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 mb-4"
                  >
                    <span>Start Your Free 7-Day Trial</span>
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </a>
                  <PaymentLogos />
                  <div className="mt-4">
                    <PlatformLogos />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Pricing Information Box */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-lg w-full">
              <div className="text-center space-y-2">
                <div className="text-amber-800 font-semibold text-lg">£99 per location.</div>
                <div className="text-amber-700 text-sm">
                  Include all locations you want covered in the onboarding form after purchase.
                </div>
                <div className="text-amber-700 text-sm">Each location will be billed at £99/month.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Instructions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How It Works</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                    1
                  </div>
                  <p className="text-foreground font-semibold">Pay through Stripe</p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden sm:block" />
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                    2
                  </div>
                  <p className="text-foreground font-semibold">Receive onboarding email</p>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden sm:block" />
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mb-3 mx-auto">
                    3
                  </div>
                  <p className="text-foreground font-semibold">Complete setup form</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 text-center">
                After payment, you'll receive an email with your onboarding form to get started immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GuardX */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose GuardX?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional reputation management that gives you peace of mind and expert-driven results.
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
                  Focus entirely on growing your business while our experts handle all reputation monitoring and
                  management tasks.
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
                  Our proven strategies and professional oversight have helped hundreds of businesses improve their
                  online reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Comprehensive Protection</h3>
                <p className="text-muted-foreground">
                  Complete monitoring across all platforms with immediate response capabilities and professional
                  oversight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

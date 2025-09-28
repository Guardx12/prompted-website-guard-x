"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaymentLogos } from "@/components/payment-logos"
import { Star, CheckCircle, ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showPromoBar, setShowPromoBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setShowPromoBar(scrollTop > 120)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Free Trial")
    const email = "info@guardxnetwork.com"
    window.open(`mailto:${email}?subject=${subject}`, "_blank")
  }

  const handleWhatYouGetClick = () => {
    window.location.href = "/what-you-get"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {showPromoBar && (
        <div className="fixed top-[106px] left-0 right-0 z-40 bg-green-600 text-white py-3 text-center shadow-lg">
          <button
            onClick={handleWhatYouGetClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 px-8 py-3 text-lg font-bold shadow-xl rounded-lg inline-flex items-center border-2 border-yellow-600"
          >
            <Mail className="mr-2 w-5 h-5" />
            <span>What You Get</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      )}

      <section className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Free 7-Day Trial - Leading Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary">Free 7-Day Trial</span>
              <br />
              Protect Your Business Reputation
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Get instant alerts when new reviews appear. Google & Facebook monitoring starts immediately — no login
              required.
            </p>

            {/* Single, Obvious CTA */}
            <div className="mb-8">
              <button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-12 py-6 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20"
              >
                <Mail className="mr-4 w-6 h-6" />
                <span>Email Free Trial</span>
                <ArrowRight className="ml-4 w-6 h-6" />
              </button>
            </div>

            <p className="text-lg text-muted-foreground mb-2">
              Email: <strong className="text-primary">info@guardxnetwork.com</strong>
            </p>
            <p className="text-base text-muted-foreground">
              Subject: "Free Trial" • Onboarding sent immediately via email
            </p>
          </div>

          {/* Trial Explanation - Concise */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">What's Included in Your Free Trial</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base">Google review monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base">Facebook review monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base">Instant email alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-base">No login required</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sample Report Image */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/review-report.jpg"
              alt="Sample review report showing overall rating, rating breakdown, and review sources"
              width={800}
              height={300}
              className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg border border-border"
              priority
            />
          </div>

          {/* Short, Scannable Benefits */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">Why Business Owners Choose GuardX</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Stop Bad Reviews from Hurting You</h3>
                  <p className="text-muted-foreground">
                    Get notified immediately so you can respond fast and protect your reputation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Turn Good Reviews into More Customers</h3>
                  <p className="text-muted-foreground">
                    Know when positive reviews come in so you can share and promote them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Save Hours Every Week</h3>
                  <p className="text-muted-foreground">
                    No more manually checking review sites — we watch everything for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Complete Peace of Mind</h3>
                  <p className="text-muted-foreground">
                    Know exactly what people are saying about your business, 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Logos */}
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-6">Monitoring reviews across all major platforms</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <Image
                src="/images/facebook-logo.png"
                alt="Facebook"
                width={40}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
              <Image
                src="/images/yelp-logo.png"
                alt="Yelp"
                width={80}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
              <Image
                src="/images/trustpilot-logo-new.webp"
                alt="Trustpilot"
                width={40}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
              <Image
                src="/images/tripadvisor-logo-new.png"
                alt="TripAdvisor"
                width={140}
                height={40}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-center text-foreground mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-foreground mb-3 leading-relaxed">
                    "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are
                    really clear and easy to read."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Holly Cox</strong>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-foreground mb-3 leading-relaxed">
                    "A very handy tool to keep track of my business reviews — simple and easy to use."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Joseph Yossefi</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Second CTA for Free Trial */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Protect Your Reputation?</h2>
            <button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-12 py-6 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20"
            >
              <Mail className="mr-4 w-6 h-6" />
              <span>Start Your Free 7-Day Trial</span>
              <ArrowRight className="ml-4 w-6 h-6" />
            </button>
            <p className="text-base text-muted-foreground mt-4">
              Email info@guardxnetwork.com with subject "Free Trial"
            </p>
          </div>

          <div className="w-24 h-px bg-primary mx-auto mb-12 opacity-50"></div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Full Service: Complete Protection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                After your free trial, upgrade to monitor all major review platforms
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">£99/month</div>
                  <div className="text-lg text-muted-foreground font-medium">Just £3.20/day • Cancel anytime</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>All major review platforms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Instant email alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Weekly summary reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>24/7 monitoring</span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                    className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-8 py-4 text-lg font-bold shadow-xl rounded-lg inline-flex items-center transition-all duration-300"
                  >
                    <span>Start Full Protection — £99/month</span>
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </a>
                  <PaymentLogos />
                  <p className="text-sm text-muted-foreground mt-2">No contracts • Cancel anytime • Instant setup</p>
                </div>
              </CardContent>
            </Card>

            {/* Why £99 explanation */}
            <Card className="bg-green-600 border-green-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 text-center">Why £99?</h3>
                <p className="text-white leading-relaxed text-center">
                  GuardX is built to be <strong>lean</strong>, <strong>automated</strong>, and{" "}
                  <strong>affordable</strong>. Unlike enterprise services that charge hundreds per month, GuardX uses
                  smart automation to deliver the same protection at a fair price — just <strong>£99/month</strong>. No
                  hidden fees, no long contracts.
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

"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isSticky, setIsSticky] = useState(false)
  const [showPromoBar, setShowPromoBar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 200)
      setShowPromoBar(scrollTop > 120)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {showPromoBar && (
        <div className="fixed top-[106px] left-0 right-0 z-40 bg-green-600 text-white py-3 text-center shadow-lg">
          <Link
            href="/what-you-get"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 px-8 py-3 text-lg font-bold shadow-xl rounded-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 animate-pulse border-2 border-yellow-600"
          >
            <span>View What You Get</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      )}

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

      {/* Hero Section - Compact and Above the Fold */}
      <section className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sample Report Image at Top */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/review-report.jpg"
              alt="Sample review report showing overall rating, rating breakdown, and review sources"
              width={800}
              height={300}
              className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-lg border border-border"
              priority
            />
          </div>

          {/* Headline & Subheadline */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Protect Your Business Reputation — <span className="text-primary">Automatic Alerts & Reports</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Get notified immediately when new reviews appear — good, bad, or urgent. Weekly reports delivered straight
              to your inbox.
            </p>

            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
            >
              <span className="get-started-text">Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
              <ArrowRight className="ml-4 w-8 h-8" />
            </a>
          </div>

          <div className="w-24 h-px bg-primary mx-auto mb-8 opacity-50"></div>

          {/* Key Features & Benefits - Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-1">We Watch</h3>
              <p className="text-sm text-muted-foreground">Daily review monitoring</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-1">We Tell You</h3>
              <p className="text-sm text-muted-foreground">Instant email alerts for new reviews</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-1">We Help</h3>
              <p className="text-sm text-muted-foreground">Our team protects your reputation around the clock</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-foreground mb-1">Hands-off</h3>
              <p className="text-sm text-muted-foreground">No login or work needed</p>
            </div>
          </div>

          <div className="w-24 h-px bg-primary mx-auto mb-8 opacity-50"></div>

          {/* Benefits Bullets - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">
                <strong>Protect Your Reputation</strong> — Stop bad reviews from hurting your business
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">
                <strong>Make Good Reviews Work Harder</strong> — Turn positive reviews into more customers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">
                <strong>Save Hours Every Week</strong> — No manual checking required
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">
                <strong>Cancel anytime</strong>
              </span>
            </div>
          </div>

          <div className="w-24 h-px bg-primary mx-auto mb-8 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 bg-gradient-to-br from-card to-muted/20">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-base font-medium text-foreground mb-3 leading-relaxed">
                  <span className="text-primary text-lg">"</span>The GuardX system is great for staying on top of
                  reviews. It's saved me time, and the reports are really clear and easy to read.
                  <span className="text-primary text-lg">"</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Holly Cox</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 bg-gradient-to-br from-card to-muted/20">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-base font-medium text-foreground mb-3 leading-relaxed">
                  <span className="text-primary text-lg">"</span>A very handy tool to keep track of my business reviews
                  — simple and easy to use.<span className="text-primary text-lg">"</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Joseph Yossefi</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-24 h-px bg-primary mx-auto mb-8 opacity-50"></div>

          <div className="text-center">
            <div className="mb-6">
              <div className="text-4xl font-bold text-primary mb-2">£99/month</div>
              <div className="text-lg text-muted-foreground font-medium">Just £3.20/day – Cancel anytime</div>
              {/* Added value proposition line under pricing */}
              <div className="text-sm text-muted-foreground mt-2 italic">
                Best value for busy business owners — covers all major review sites automatically.
              </div>
            </div>

            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
            >
              <span className="get-started-text">Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
              <ArrowRight className="ml-4 w-8 h-8" />
            </a>

            <p className="text-sm text-muted-foreground">No contracts • Cancel anytime • Instant setup</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

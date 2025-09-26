"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Star, TrendingUp, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function SampleCustomerReportPage() {
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

      {/* Hero Section with Alerts Focus */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight">
              Instant Alerts for Every Review
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Get notified immediately when new reviews appear for your business across Google, Facebook, Trustpilot,
              and other review sites. No more checking websites manually – we watch everything for you.
            </p>

            <div className="mb-12">
              <a
                href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
              >
                <span>Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
                <ArrowRight className="ml-4 w-8 h-8" />
              </a>
              <div className="text-sm text-muted-foreground mt-4 font-medium">
                You will be redirected to our customer form immediately upon purchase.
              </div>
            </div>
          </div>

          {/* Alert Email Example */}
          <div className="mb-16">
            <div className="bg-card/50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight">
                  Instant Alerts On The Go
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Receive real-time notifications the moment a new review appears. Stay informed, respond quickly, and
                  protect your business reputation effortlessly.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Image
                  src="/images/susan-review-notification.png"
                  alt="Google Review notification showing 5-star review from Susan M. - 'Nice pool great showers and staff too'"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg border border-border shadow-md"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-card/50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight">
                  Plus Weekly Professional Reports
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Once a week, you'll also receive a comprehensive professional report summarizing all your reviews,
                  ratings, and insights. Here's what a sample report looks like:
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-card/50 rounded-lg p-6 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-04%20at%209.47.04%E2%80%AFAM-3YMh7Grb6pepRc2i1iJOjWo154REZp.png"
                alt="Sample GuardX Customer Report Dashboard showing comprehensive review analytics"
                width={1400}
                height={900}
                className="w-full h-auto rounded-lg border border-border"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Sample weekly report showing comprehensive review analytics and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Breakdown Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Understanding Your Professional Weekly Report
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our reputation management experts analyze every metric and deliver actionable insights to protect and
              enhance your business reputation – no analysis required on your part.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Overall Review Rating */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">Overall Review Rating</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Expert Analysis:</strong> We track your{" "}
                  <span className="text-primary font-bold">star ratings</span> across all platforms (3.5 stars with 78
                  reviews in this example) and monitor for any reputation threats.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why Our Monitoring Matters:</strong> Our{" "}
                  <span className="text-primary font-bold">24/7 monitoring</span> catches rating drops immediately –
                  even a 0.1 star decline can cost you significant revenue, which is why we provide{" "}
                  <span className="text-primary font-bold">urgent alerts</span>
                  the moment issues arise.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Continuous <span className="text-primary font-bold">review trends</span> monitoring by our experts
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Immediate <span className="text-primary font-bold">urgent alerts</span> when ratings decline
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional assessment of reputation management impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">Recent Activity</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Professional Tracking:</strong> We monitor all{" "}
                  <span className="text-primary font-bold">review sources</span> and report +8 reviews in the last 30
                  days, +1119 reviews since our <span className="text-primary font-bold">24/7 monitoring</span> began.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Expert Insights Provided:</strong> Our team analyzes{" "}
                  <span className="text-primary font-bold">review trends</span> to identify seasonal patterns and
                  campaign effectiveness, delivering insights you can act on immediately.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional monitoring of review frequency changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert identification of successful engagement periods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Long-term reputation growth analysis by our specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">
                  Rating Breakdown (5-Star to 1-Star)
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Detailed Analysis:</strong> We break down your{" "}
                  <span className="text-primary font-bold">star ratings</span> distribution (31 five-star, 14 four-star
                  reviews, etc.) and flag any concerning patterns for immediate attention.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why Our Expert Monitoring Protects You:</strong> Our specialists identify reputation threats
                  in real-time. Clusters of 1-2 star reviews trigger{" "}
                  <span className="text-primary font-bold">urgent alerts</span> so we can help you respond before
                  serious damage occurs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional analysis of customer satisfaction patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert detection of potential fake review attacks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Online Reviews by Month */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight">Online Reviews by Month</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Professional Monitoring:</strong> We track{" "}
                  <span className="text-primary font-bold">review trends</span> and provide comprehensive monthly
                  summaries showing review volume and rating changes across all platforms.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Weekly PDF Summary Reports:</strong> Our system delivers detailed reports showing all reviews
                  and ratings, helping you understand your reputation performance and identify areas for improvement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Monthly review volume tracking and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Comprehensive rating performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly PDF reports delivered automatically</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              Complete Protection for Your Reputation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GuardX combines instant alerts with comprehensive reporting to give you complete control over your online
              reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-black text-foreground mb-6 tracking-tight">Instant Response Capability</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Immediate Alerts</span>:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Get notified within minutes of any new review appearing online
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Quick Response</span>:
                    </span>
                    <span className="text-muted-foreground"> Respond to reviews while they're fresh and impactful</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Damage Prevention</span>:
                    </span>
                    <span className="text-muted-foreground"> Stop reputation damage before it spreads</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">Why Speed Matters</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response within 1 hour:</span>
                  <span className="font-semibold text-primary">90% customer satisfaction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response within 24 hours:</span>
                  <span className="font-semibold text-foreground">60% customer satisfaction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">No response:</span>
                  <span className="font-semibold text-destructive">Permanent reputation damage</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="text-foreground font-semibold">GuardX advantage:</span>
                  <span className="font-bold text-primary text-lg">Instant alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tight">
            Start Getting Instant Alerts Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let reviews slip by unnoticed. Get instant email alerts for every new review plus comprehensive weekly
            reports – all delivered automatically to your inbox.
          </p>

          <div className="bg-primary/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-black text-foreground mb-4 tracking-tight">What You Get:</h3>
            <div className="text-center mb-6">
              <div className="text-3xl font-black text-primary mb-2">£99/month</div>
              <div className="text-sm text-muted-foreground mb-2">Just £3.20/day – Cancel anytime</div>
              <div className="text-sm font-semibold text-primary">
                Best value for busy business owners — covers all major review sites automatically.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-primary" />
                <span>
                  <span className="text-primary font-bold">Instant alerts</span> for every new review
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span>Weekly professional reports with full analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Monitoring across all major review platforms</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Completely hands-off – no work required</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-lg font-bold text-foreground mb-3">Why £99?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                GuardX is built to be{" "}
                <span className="text-primary font-semibold">lean, automated, and affordable</span>. Unlike big
                enterprise services that charge hundreds per month for manual monitoring, GuardX uses a smart, automated
                system to track all your online reviews and alerts daily.
              </p>
              <p className="text-sm text-muted-foreground">
                You get the <span className="text-primary font-semibold">same protection and insights</span> at a fair
                price — just <span className="text-primary font-bold">£99/month</span>. No hidden fees, no long
                contracts — just straightforward reputation monitoring for every business.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-16 py-8 text-2xl font-bold shadow-2xl rounded-xl inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20 animate-pulse"
            >
              <span>Start Protecting Today — Just £3.20 a day — Cancel anytime</span>
              <ArrowRight className="ml-4 w-8 h-8" />
            </a>
            <div className="text-sm text-muted-foreground font-medium">
              You will be redirected to our customer form immediately upon purchase.
            </div>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>✓ Instant email alerts for every new review</p>
            <p>✓ Weekly professional reports delivered automatically</p>
            <p>✓ Cancel anytime - no long-term contracts</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Star, TrendingUp, CheckCircle, Clock, AlertTriangle, Mail } from "lucide-react"
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-bold shadow-lg rounded-md inline-flex items-center transition-colors animate-pulse"
          >
            <span>Start Protecting Today</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      )}

      {/* Hero Section with Alerts Focus */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Instant Alerts for Every Review
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Get notified immediately when new reviews appear for your business across Google, Facebook, Trustpilot,
              and other review sites. No more checking websites manually – we watch everything for you.
            </p>

            <div className="mb-12">
              <a
                href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg rounded-md inline-flex items-center transition-colors"
              >
                <span className="get-started-text">Start Protecting Today</span>
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
              <div className="cta-redirect-message">
                You will be redirected to our customer form immediately upon purchase.
              </div>
            </div>
          </div>

          {/* Alert Email Example */}
          <div className="mb-16">
            <div className="bg-card/50 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">See How You'll Get Alerted</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This is exactly what you'll see in your inbox when new reviews are detected. Instant notifications
                  mean you can respond quickly and protect your reputation.
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Image
                  src="/images/alerts.png"
                  alt="Outlook email alert showing '2 New Online Review(s)' notification from GuardX for a business location"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg border border-border shadow-md"
                  priority
                />
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Real alert email showing instant notification of new reviews detected by GuardX
                </p>
              </div>
            </div>
          </div>

          {/* Alerts Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Instant Notifications</h3>
                <p className="text-muted-foreground text-sm">
                  Get alerted within minutes of any new review appearing online. Never miss an opportunity to respond
                  quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Direct to Your Email</h3>
                <p className="text-muted-foreground text-sm">
                  All alerts come straight to your inbox. No apps to check, no dashboards to log into – just simple
                  email notifications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">All Review Sites</h3>
                <p className="text-muted-foreground text-sm">
                  We monitor Google, Facebook, Trustpilot, Yelp, and many more review platforms automatically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Reports Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Plus Weekly Professional Reports</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Once a week, you'll also receive a comprehensive professional report summarizing all your reviews,
              ratings, and insights. Here's what a sample report looks like:
            </p>
          </div>

          {/* Sample Report Screenshot */}
          <div className="mb-12">
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

          {/* Report Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Complete Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Every weekly report includes your overall star ratings, review breakdown by platform, and trends over
                  time. See exactly how your reputation is performing.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Star ratings across all platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Review volume and trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Platform-by-platform breakdown</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Delivered Automatically</h3>
                <p className="text-muted-foreground mb-4">
                  Reports are created by our team and sent directly to your email every week. No logging in, no manual
                  work – just professional insights delivered automatically.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly delivery to your inbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional PDF format</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Easy to share with your team</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Breakdown Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Overall Review Rating</h3>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h3>
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
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Rating Breakdown (5-Star to 1-Star)</h3>
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Online Reviews by Month</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Protection for Your Reputation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GuardX combines instant alerts with comprehensive reporting to give you complete control over your online
              reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Instant Response Capability</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Start Getting Instant Alerts Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let reviews slip by unnoticed. Get instant email alerts for every new review plus comprehensive weekly
            reports – all delivered automatically to your inbox.
          </p>

          <div className="bg-primary/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">What You Get:</h3>
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
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

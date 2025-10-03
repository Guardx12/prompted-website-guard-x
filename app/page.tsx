"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Star,
  Shield,
  Bell,
  TrendingUp,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Users,
  Building2,
  Utensils,
  Dumbbell,
  Store,
} from "lucide-react"
import { useEffect, useState } from "react"
import { GoogleLogo, FacebookLogo, YelpLogo, TripAdvisorLogo, TrustpilotLogo } from "@/components/platform-logos"

export default function HomePage() {
  // Intersection Observer for scroll animations
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [demoStatus, setDemoStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleScorecardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setScorecardStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mrbypyzv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setScorecardStatus("success")
        form.reset()
      } else {
        setScorecardStatus("error")
      }
    } catch (error) {
      setScorecardStatus("error")
    }
  }

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDemoStatus("submitting")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mvgwkwer", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setDemoStatus("success")
        form.reset()
      } else {
        setDemoStatus("error")
      }
    } catch (error) {
      setDemoStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                GuardX – Grow Your Reputation, Grow Your Revenue
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Boost your business reputation and turn more browsers into paying customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#free-scorecard"
                  className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 text-center"
                >
                  Get Your Free Scorecard
                </a>
                <a
                  href="#book-demo"
                  className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 text-center"
                >
                  Book a Setup & Strategy Call
                </a>
              </div>
            </div>
            <div className="flex justify-center scroll-animate">
              <img
                src="/images/business-owner-tablet.jpg"
                alt="Business owner with reviews"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Monitor 100+ Platforms Including:</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <GoogleLogo className="h-14" />
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <FacebookLogo className="h-14" />
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <YelpLogo className="h-14" />
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <TripAdvisorLogo className="h-14" />
              </div>
              <div className="opacity-70 hover:opacity-100 transition-opacity">
                <TrustpilotLogo className="h-14" />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto scroll-animate">
            <img
              src="/images/dash4.png"
              alt="Multi-platform review monitoring dashboard"
              className="w-full rounded-lg shadow-2xl border-2 border-primary/20"
            />
            <div className="text-center mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                We Monitor Your Reviews and Protect Your Reputation for You
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                GuardX monitors reviews across 100+ platforms, alerts you to negative feedback, and provides
                professional response suggestions — all handled by our expert team so you can focus on growing your
                business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Scorecard Section */}
      <section id="free-scorecard" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              See How Your Reputation Impacts Your Revenue
            </h2>
            <p className="text-xl text-gray-600">
              Get a free, comprehensive scorecard showing your current online reputation across major platforms. Learn
              where you're losing potential revenue and how to improve it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-2 border-primary shadow-2xl scroll-animate">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleScorecardSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-bold text-black mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessAddress" className="block text-sm font-bold text-black mb-2">
                      Business Address
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="123 Main Street, City, Postcode"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={scorecardStatus === "submitting"}
                    className="w-full bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {scorecardStatus === "submitting" ? "Submitting..." : "Get My Free Scorecard"}
                  </button>

                  {scorecardStatus === "success" && (
                    <p className="text-center text-green-600 font-semibold">
                      Thank you! Your scorecard request has been submitted. We'll send it to you within 24 hours.
                    </p>
                  )}

                  {scorecardStatus === "error" && (
                    <p className="text-center text-red-600 font-semibold">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <p className="text-center text-sm text-gray-500">
                    No credit card required. Receive your scorecard within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scorecard Insights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 scroll-animate">
            Understand Your Score at a Glance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Volume Insight */}
            <div className="text-center scroll-animate">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20volume-Ivqk3xX9zftKKXNjh6VbZF7gFZBw45.png"
                  alt="Volume Score"
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                See how many reviews your business has and how it compares to competitors. More reviews = stronger
                online presence.
              </p>
            </div>

            {/* Star Rating Insight */}
            <div className="text-center scroll-animate">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20star%20rating-aWuKz26eyRkGaQ0aK6cSDGngitw5tu.png"
                  alt="Star Rating Score"
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                View your average rating across platforms. Higher ratings build trust and increase conversions.
              </p>
            </div>

            {/* Sentiment Insight */}
            <div className="text-center scroll-animate">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20sentiment-eFcjOynE0YS4FG0iEF5S5iGoeRHP35.png"
                  alt="Sentiment Score"
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Track positive, neutral, and negative reviews to understand customer feelings and improve experience.
              </p>
            </div>

            {/* Recency Insight */}
            <div className="text-center scroll-animate">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20recency-cL9cNdYLrYAPiP7LmXUl3X3OHK9z50.png"
                  alt="Recency Score"
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Check how recent your reviews are. Fresh feedback shows engagement and keeps your business relevant.
              </p>
            </div>

            {/* Overall Score Insight */}
            <div className="text-center scroll-animate">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20overall%20rating-WratJSKGvJNKhAqvllBLsC9ZVts8Ea.png"
                  alt="Overall Score"
                  className="w-full h-auto transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Get a snapshot of your total reputation score, showing how well your business is performing online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services / Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Set-and-Forget Reputation Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GuardX is fully managed by our team. You focus on running your business while we protect and grow your
              reputation automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">100+ Platform Monitoring</h3>
                    <p className="text-gray-600">
                      Track reviews across Google, Facebook, Yelp, TripAdvisor, Trustpilot, and more.
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Instant Negative Review Alerts</h3>
                    <p className="text-gray-600">
                      Address negative feedback immediately to protect revenue and customer trust.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">AI-Powered Response Suggestions</h3>
                    <p className="text-gray-600">
                      Quickly respond to reviews with professional, revenue-friendly replies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Monthly Performance Reports</h3>
                    <p className="text-gray-600">
                      Reports include star ratings, review volume, sentiment trends, NPS scores, and insights into
                      potential revenue impact.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Fully Managed Service</h3>
                    <p className="text-gray-600">Our team handles setup and ongoing management.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">Scalable for Any Business</h3>
                    <p className="text-gray-600">Single or multi-location businesses.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 scroll-animate">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/calendar-meeting.jpg"
                  alt="Book a Setup & Strategy Call"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Book a Setup & Strategy Call</h3>
              <p className="text-gray-600">Schedule a call to discuss your business and reputation goals.</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img src="/images/setup-checklist.jpg" alt="Guided Setup" className="w-32 h-32 rounded-lg shadow-lg" />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Guided Setup</h3>
              <p className="text-gray-600">Connect Google & Facebook accounts; we handle the technical setup.</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/notification-alerts.jpg"
                  alt="Automatic Monitoring"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Automatic Monitoring</h3>
              <p className="text-gray-600">24/7 monitoring with alerts and AI suggestions for every review.</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/report-mockup.jpg"
                  alt="Reports & Results"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                4
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Receive Reports & Results</h3>
              <p className="text-gray-600">
                Monthly reports with metrics and revenue insights delivered automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 scroll-animate">Who We Help</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto scroll-animate">
            GuardX is trusted by businesses across industries to protect and grow their online reputation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Small Businesses</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Multi-Location</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Utensils className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Restaurants & Cafes</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Clinics & Healthcare</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Gyms & Fitness</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Store className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Retailers & Service</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 scroll-animate">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are
                  really clear and easy to read, making it simple to keep an eye on my average rating."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">HC</span>
                  </div>
                  <div>
                    <p className="font-bold text-black">Holly Cox</p>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all scroll-animate">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "A very handy tool to keep track of my business reviews — simple and easy to use."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">JY</span>
                  </div>
                  <div>
                    <p className="font-bold text-black">Joseph Yossefi</p>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Grow Your Reputation and Revenue?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses using GuardX to monitor, manage, and grow their online reputation automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-scorecard"
              className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
            >
              Get Your Free Scorecard
            </a>
            <a
              href="#book-demo"
              className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20"
            >
              Book a Setup & Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Book a Setup & Strategy Call Section */}
      <section id="book-demo" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
              Book Your Free Setup & Strategy Call
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a personalized demo to see how GuardX can protect and grow your business reputation. No
              commitment required.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-2 border-primary shadow-2xl scroll-animate">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="demo-name" className="block text-sm font-bold text-black mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="demo-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-email" className="block text-sm font-bold text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="demo-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-businessName" className="block text-sm font-bold text-black mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="demo-businessName"
                      name="businessName"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-businessAddress" className="block text-sm font-bold text-black mb-2">
                      Business Address
                    </label>
                    <input
                      type="text"
                      id="demo-businessAddress"
                      name="businessAddress"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                      placeholder="123 Main Street, City, Postcode"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={demoStatus === "submitting"}
                    className="w-full bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {demoStatus === "submitting" ? "Submitting..." : "Book My Setup & Strategy Call"}
                  </button>

                  {demoStatus === "success" && (
                    <p className="text-center text-green-600 font-semibold">
                      Thank you! Your demo request has been submitted. We'll get in touch within 24 hours.
                    </p>
                  )}

                  {demoStatus === "error" && (
                    <p className="text-center text-red-600 font-semibold">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <p className="text-center text-sm text-gray-500">
                    No credit card required. We'll contact you within 24 hours to schedule your demo.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

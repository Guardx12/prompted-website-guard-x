"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import {
  Shield,
  BarChart3,
  MessageSquare,
  Star,
  Users,
  Building2,
  Utensils,
  Dumbbell,
  Store,
  CheckCircle,
} from "lucide-react"
import { useEffect, useState } from "react"
import type React from "react"

export default function HowItWorksPage() {
  const [scorecardOpen, setScorecardOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
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
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                How GuardX Works to Grow Your Reputation & Revenue
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Turn your reviews into revenue with automated monitoring, insights, and professional responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setScorecardOpen(true)}
                  className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 text-center"
                >
                  Get Your Free Scorecard
                </button>
                <button
                  onClick={() => setDemoOpen(true)}
                  className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 text-center"
                >
                  Book a Setup & Strategy Call
                </button>
              </div>
            </div>
            <div className="flex justify-center scroll-animate">
              <img
                src="/images/business-dashboard-with-reviews-and-analytics-char.jpg"
                alt="Business dashboard showing reviews and analytics"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 - Collect Feedback */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate order-2 lg:order-1">
              <img
                src="/images/dashboard-showing-incoming-reviews-from-multiple-p.jpg"
                alt="Dashboard showing incoming reviews"
                className="w-full rounded-lg shadow-2xl border-2 border-primary/20"
              />
            </div>
            <div className="scroll-animate order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <span className="text-primary font-bold text-lg">STEP 1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Collect Customer Feedback Automatically
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    GuardX monitors <strong>100+ platforms</strong> including Google, Facebook, Yelp, TripAdvisor, and
                    Trustpilot.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong>Automatic email review requests</strong> sent to happy customers to boost your positive
                    reviews.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>Never miss a review again with 24/7 automated monitoring across all your platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 - Analyze Feedback */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <span className="text-primary font-bold text-lg">STEP 2</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Understand Key Insights & Metrics</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-primary">📊</span>
                  Monthly Reports
                </h3>
                <div className="space-y-3 text-gray-600 text-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Review trends over time</strong> showing how your reputation is improving month-over-month
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Net Promoter Score (NPS) gauge</strong> tracking customer loyalty and satisfaction
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Star rating history</strong> across all platforms to monitor your overall performance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Revenue impact insights</strong> showing how your reputation directly affects your bottom
                      line
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                  <span className="text-primary">💡</span>
                  Analysis & Insights
                </h3>
                <div className="space-y-3 text-gray-600 text-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>AI-powered pattern recognition</strong> identifying recurring themes in customer feedback
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Team-assisted analysis</strong> providing actionable recommendations to improve customer
                      experience
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p>
                      <strong>Automated insights delivery</strong> sent directly to your inbox every month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <img
                src="/images/professional-performance-dashboard-with-charts-sho.jpg"
                alt="Monthly performance report dashboard"
                className="w-full rounded-lg shadow-2xl border-2 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 - Respond & Engage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate order-2 lg:order-1">
              <img
                src="/images/response-dashboard-screenshot-showing-ai-powered-r.jpg"
                alt="Response dashboard with AI suggestions"
                className="w-full rounded-lg shadow-2xl border-2 border-primary/20"
              />
            </div>
            <div className="scroll-animate order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-black" />
                </div>
                <span className="text-primary font-bold text-lg">STEP 3</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Respond Professionally & Boost Your Reputation
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong>AI-powered response suggestions</strong> (editable) or fully managed by the GuardX team for
                    professional replies.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong>Suggested replies for negative reviews</strong> to protect revenue and turn unhappy
                    customers into loyal ones.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong>Review widgets</strong> for your website and social media sharing to showcase your best
                    reviews.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p>
                    <strong>Instant notifications</strong> when negative reviews appear so you can respond quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 scroll-animate">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto scroll-animate">
            GuardX helps businesses of all sizes protect and grow their online reputation.
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
      <section className="py-16 bg-white">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Ready to Grow Your Reputation and Revenue?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join hundreds of businesses using GuardX to monitor, manage, and grow their online reputation
                automatically. Start protecting your revenue today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setScorecardOpen(true)}
                  className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 text-center"
                >
                  Get Your Free Scorecard
                </button>
                <button
                  onClick={() => setDemoOpen(true)}
                  className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 text-center"
                >
                  Book a Setup & Strategy Call
                </button>
              </div>
            </div>
            <div className="flex justify-center scroll-animate">
              <img
                src="/images/happy-business-owner-looking-at-positive-reviews-o.jpg"
                alt="Happy business owner with positive reviews"
                className="w-full max-w-md rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Dialog open={scorecardOpen} onOpenChange={setScorecardOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold">Get Your Free Scorecard</DialogTitle>
          <DialogDescription className="text-gray-600 mb-4">
            Get a free, comprehensive scorecard showing your current online reputation across major platforms. Learn
            where you're losing potential revenue and how to improve it.
          </DialogDescription>

          <form onSubmit={handleScorecardSubmit} className="space-y-6">
            <div>
              <label htmlFor="scorecard-email" className="block text-sm font-bold text-black mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="scorecard-email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="scorecard-businessName" className="block text-sm font-bold text-black mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="scorecard-businessName"
                name="businessName"
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black"
                placeholder="Your Business Name"
              />
            </div>

            <div>
              <label htmlFor="scorecard-businessAddress" className="block text-sm font-bold text-black mb-2">
                Business Address
              </label>
              <input
                type="text"
                id="scorecard-businessAddress"
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
        </DialogContent>
      </Dialog>

      <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold">Book Your Free Setup & Strategy Call</DialogTitle>
          <DialogDescription className="text-gray-600 mb-4">
            Schedule a personalized demo to see how GuardX can protect and grow your business reputation. No commitment
            required.
          </DialogDescription>

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
        </DialogContent>
      </Dialog>
    </div>
  )
}

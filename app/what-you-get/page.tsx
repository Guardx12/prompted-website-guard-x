"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useEffect, useRef, useState } from "react"
import type React from "react"
import Image from "next/image"

export default function HowWeHelpPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [scorecardOpen, setScorecardOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [demoStatus, setDemoStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-8")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
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
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              How GuardX Works to Grow Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Reputation & Revenue
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Turn your reviews into revenue with automated monitoring, insights, and professional responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={scorecardOpen} onOpenChange={setScorecardOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-lg px-8 py-6"
                  >
                    Get Your Free Scorecard
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Get Your Free Scorecard</DialogTitle>
                    <DialogDescription>
                      Get a free, comprehensive scorecard showing your current online reputation across major platforms.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleScorecardSubmit} className="space-y-6 mt-4">
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
                </DialogContent>
              </Dialog>

              <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-6 bg-transparent"
                  >
                    Book a Demo
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Book Your Free Demo</DialogTitle>
                    <DialogDescription>
                      Schedule a personalized demo to see how GuardX can protect and grow your business reputation.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleDemoSubmit} className="space-y-6 mt-4">
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
                      {demoStatus === "submitting" ? "Submitting..." : "Book My Demo"}
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
          </div>
          <div className="mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <Image
              src="/business-dashboard-with-reviews-and-analytics-char.jpg"
              alt="Business dashboard showing reviews and analytics"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl mx-auto border-4 border-yellow-400/20"
            />
          </div>
        </div>
      </section>

      {/* Step 1: Collect Feedback */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-full mb-4">STEP 1</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Collect Customer Feedback Automatically
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    GuardX monitors <strong>100+ platforms</strong> including Google, Facebook, Yelp, TripAdvisor, and
                    Trustpilot.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    <strong>Automatic email review requests</strong> sent to happy customers to boost your positive
                    reviews.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    Never miss a review again with <strong>24/7 automated monitoring</strong> across all your platforms.
                  </span>
                </p>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <Image
                src="/dashboard-showing-incoming-reviews-from-multiple-p.jpg"
                alt="Dashboard showing incoming reviews from multiple platforms"
                width={600}
                height={400}
                className="rounded-lg shadow-xl border-2 border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Analyze Feedback */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <Image
                src="/professional-performance-dashboard-with-charts-sho.jpg"
                alt="Monthly performance report dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl border-2 border-yellow-400/20"
              />
            </div>
            <div className="order-1 md:order-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-full mb-4">STEP 2</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Understand Key Insights & Metrics</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                  <span className="text-yellow-400">📊</span>
                  Monthly Reports
                </h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Review trends over time</strong> showing how your reputation is improving month-over-month
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Net Promoter Score (NPS) gauge</strong> tracking customer loyalty and satisfaction
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Star rating history</strong> across all platforms to monitor your overall performance
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Revenue impact insights</strong> showing how your reputation directly affects your bottom
                      line
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                  <span className="text-yellow-400">💡</span>
                  Analysis & Insights
                </h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>AI-powered pattern recognition</strong> identifying recurring themes in customer feedback
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Team-assisted analysis</strong> providing actionable recommendations to improve customer
                      experience
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-yellow-400 text-2xl">✓</span>
                    <span>
                      <strong>Automated insights delivery</strong> sent directly to your inbox every month
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Respond & Engage */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded-full mb-4">STEP 3</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Respond Professionally & Boost Your Reputation
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    <strong>AI-powered response suggestions</strong> (editable) or fully managed by the GuardX team for
                    professional replies.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    <strong>Suggested replies for negative reviews</strong> to protect revenue and turn unhappy
                    customers into loyal ones.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    <strong>Review widgets</strong> for your website and social media sharing to showcase your best
                    reviews.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-yellow-400 text-2xl">✓</span>
                  <span>
                    <strong>Instant notifications</strong> when negative reviews appear so you can respond quickly.
                  </span>
                </p>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <Image
                src="/response-dashboard-screenshot-showing-ai-powered-r.jpg"
                alt="Response dashboard with AI suggestions"
                width={600}
                height={400}
                className="rounded-lg shadow-xl border-2 border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Trusted by Businesses Across Industries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GuardX helps businesses of all sizes protect and grow their online reputation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Small Businesses",
              "Multi-Location",
              "Restaurants & Cafes",
              "Clinics & Healthcare",
              "Gyms & Fitness",
              "Retailers & Service",
            ].map((industry, index) => (
              <Card
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 hover:shadow-lg hover:scale-105 transition-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="font-semibold text-gray-800">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are
                  really clear and easy to read, making it simple to keep an eye on my average rating."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl">
                    HC
                  </div>
                  <div>
                    <p className="font-bold text-black">Holly Cox</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "A very handy tool to keep track of my business reviews — simple and easy to use."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl">
                    JY
                  </div>
                  <div>
                    <p className="font-bold text-black">Joseph Yossefi</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Grow Your Reputation and Revenue?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join hundreds of businesses using GuardX to monitor, manage, and grow their online reputation
                automatically. Start protecting your revenue today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={scorecardOpen} onOpenChange={setScorecardOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-lg px-8 py-6"
                    >
                      Get Your Free Scorecard
                    </Button>
                  </DialogTrigger>
                </Dialog>

                <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-6 bg-transparent"
                    >
                      Book a Demo
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <Image
                src="/happy-business-owner-looking-at-positive-reviews-o.jpg"
                alt="Happy business owner with positive reviews"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border-4 border-yellow-400/20"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

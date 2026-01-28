"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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

export default function HowWeHelpPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [scorecardOpen, setScorecardOpen] = useState(false)
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              How GuardX Works to Grow Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e6c34a]">
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
                    className="bg-primary hover:bg-[#e6c34a] text-black font-semibold text-lg px-8 py-6 shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
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

              <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold text-lg px-8 py-6 bg-transparent shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Book a Call
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <img
              src="/images/revenue-growth-arrow-small.png"
              alt="Revenue growth with upward trending arrow and pound sterling symbols in black and gold"
              className="rounded-lg shadow-2xl mx-auto border-4 border-primary/20 w-32"
            />
          </div>
        </div>
      </section>

      {/* Step 1: Collect Feedback */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block px-4 py-2 bg-primary text-black font-bold rounded-full mb-4">STEP 1</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Collect Customer Feedback Automatically
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    GuardX monitors <strong>100+ platforms</strong> including Google, Facebook, Yelp, TripAdvisor, and
                    Trustpilot.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Automatic email review requests</strong> sent to happy customers to boost your positive
                    reviews.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Optional SMS review requests</strong> available for even higher response rates — text
                    invites reach customers instantly and get opened 98% of the time.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    Never miss a review again with <strong>24/7 automated monitoring</strong> across all your platforms.
                  </span>
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  GuardX automatically sends review requests by email or text depending on what details your customers
                  provide, ensuring every customer is reached on their preferred channel.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img
                src="/images/nps-survey-request.png"
                alt="NPS survey request asking customers to rate their experience"
                className="rounded-lg shadow-xl border-2 border-gray-200 w-full"
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
              <div className="space-y-6">
                <img
                  src="/images/reputation-analytics-dashboard.png"
                  alt="Reputation analytics dashboard showing overall rating, rating breakdown, and review sources"
                  className="rounded-lg shadow-xl border-2 border-primary/20 w-full"
                />
                <img
                  src="/images/nps-breakdown-dashboard.png"
                  alt="NPS breakdown dashboard showing Net Promoter Score gauge, promoters, passives, and detractors"
                  className="rounded-lg shadow-xl border-2 border-primary/20 w-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-block px-4 py-2 bg-primary text-black font-bold rounded-full mb-4">STEP 2</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Understand Key Insights & Metrics</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                  <span className="text-primary">📊</span>
                  Monthly Reports
                </h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>Review trends over time</strong> showing how your reputation is improving month-over-month
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>Net Promoter Score (NPS) gauge</strong> tracking customer loyalty and satisfaction
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>Star rating history</strong> across all platforms to monitor your overall performance
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>Revenue impact insights</strong> showing how your reputation directly affects your bottom
                      line
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                  <span className="text-primary">💡</span>
                  Analysis & Insights
                </h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>AI-assisted sentiment analysis</strong> to help you quickly identify positive, neutral,
                      and negative feedback.
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span>
                      <strong>Team-assisted analysis</strong> providing actionable recommendations to improve customer
                      experience
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-primary text-2xl">✓</span>
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
              <div className="inline-block px-4 py-2 bg-primary text-black font-bold rounded-full mb-4">STEP 3</div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Respond Professionally & Boost Your Reputation
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>AI-powered response suggestions</strong> (editable) or fully managed by the GuardX team for
                    professional replies.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Track and respond to feedback</strong> collected through both email and SMS review requests
                    in one place.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Suggested replies for negative reviews</strong> to protect revenue and turn unhappy
                    customers into loyal ones.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Review widgets</strong> for your website and social media sharing to showcase your best
                    reviews.
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-primary text-2xl">✓</span>
                  <span>
                    <strong>Instant notifications</strong> when negative reviews appear so you can respond quickly.
                  </span>
                </p>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img
                src="/images/ai-suggested-reply.png"
                alt="AI-powered response suggestion interface showing review and suggested reply"
                className="rounded-lg shadow-xl border-2 border-gray-200 w-full"
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
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 hover:shadow-lg hover:scale-105 transition-transform"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <p className="font-semibold text-gray-800">{industry}</p>
                </div>
              </div>
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
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are
                  really clear and easy to read, making it simple to keep an eye on my average rating."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#e6c34a] flex items-center justify-center text-white font-bold text-xl">
                    HC
                  </div>
                  <div>
                    <p className="font-bold text-black">Holly Cox</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  "A very handy tool to keep track of my business reviews — simple and easy to use."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-[#e6c34a] flex items-center justify-center text-white font-bold text-xl">
                    JY
                  </div>
                  <div>
                    <p className="font-bold text-black">Joseph Yossefi</p>
                    <p className="text-gray-600">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
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
                      className="bg-primary hover:bg-[#e6c34a] text-black font-semibold text-lg px-8 py-6 shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
                    >
                      Get Your Free Scorecard
                    </Button>
                  </DialogTrigger>
                </Dialog>

                <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-semibold text-lg px-8 py-6 bg-transparent shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book a Call
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img
                src="/images/happy-business-owner.jpg"
                alt="Happy business owner with positive reviews"
                className="rounded-lg shadow-2xl border-4 border-primary/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewValueCalculator } from "@/components/review-value-calculator"
import { Star, Shield, CheckCircle, Users, Building2, Dumbbell, Store } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  // Intersection Observer for scroll animations
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

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

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                GuardX – Stand Out on Google. Get Chosen More Often.
              </h1>
              <p className="text-xl text-gray-600 mb-6 font-medium">The Google Visibility System for Local UK Businesses</p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When customers search locally, Google shows them businesses that look active and trusted. If your profile
                looks quiet while competitors appear established, you lose enquiries before they even consider you.
              </p>
              <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
                GuardX keeps your Google presence visibly active with consistent customer feedback — the signal Google
                uses to decide who appears first and who customers trust enough to contact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#free-scorecard"
                  className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 text-center"
                >
                  Get Your Free Scorecard
                </a>
                <a
                  href="https://calendly.com/guardxnetwork-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 text-center"
                >
                  Book a Call
                </a>
              </div>
              <a
                href="/real-results"
                className="inline-block mt-4 text-gray-600 hover:text-primary transition-colors duration-200 text-base font-medium"
              >
                {"See how UK businesses are becoming more visible and trusted on Google →"}
              </a>
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

      {/* Review Value Calculator Section */}
      <ReviewValueCalculator />

      {/* Helping Local Businesses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Helping Local Businesses Become More Visible and Trusted on Google
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Google ranks local businesses based on relevance, distance, and prominence. Prominence is directly
              influenced by how active and trusted your profile appears — and that comes from consistent, recent
              customer feedback.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              GuardX automates this process, sending friendly requests after every job or visit, with follow-up
              reminders that make customers 4–5x more likely to respond. The result: your Google presence stays
              visibly active while competitors fade into the background.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">The Google Visibility System</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Your customers receive a short, friendly request after each job or visit — sent automatically by
              email or SMS. If they don't respond, GuardX follows up with a gentle reminder the next day.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              This consistent activity builds the signals Google uses to rank local businesses: recency, volume, and
              engagement. Your profile stays active. Competitors look dormant. You get chosen more often.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12 scroll-animate">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">We handle everything for you:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Automated email review requests</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Optional SMS review requests (98% open rate)</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">CRM or BCC email integration</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Staff form for trades & in-person jobs</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Set up your Google, Facebook, Yell or any review links</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">Fully done-for-you setup</p>
              </div>
            </div>
          </div>

          <div className="text-center scroll-animate">
            <p className="text-xl font-semibold text-black">
              You focus on running the business — GuardX builds your Google presence.
            </p>
          </div>
        </div>
      </section>

      {/* Free Scorecard Section */}
      <section id="free-scorecard" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              See Where Customers Might Be Choosing Competitors Instead
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Get a simple scorecard showing how your reviews compare to competitors, where visibility may be low, and
              where enquiries may be leaking to other businesses. Delivered within 24 hours.
            </p>
            <div className="max-w-2xl mx-auto text-left mb-6">
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Your current Google review performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>How you compare to similar local businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Visibility gaps that could be costing you enquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Opportunities to increase your ranking and trust</span>
                </li>
              </ul>
            </div>
            <p className="text-lg text-gray-600">
              Enter your details below and receive your scorecard within 24 hours.
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
                    No credit card required — full breakdown delivered by email.
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
                  src="/images/scorecard-20volume.png"
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
                  src="/images/scorecard-20star-20rating.png"
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
                  src="/images/scorecard-20sentiment.png"
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
                  src="/images/scorecard-20recency.png"
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
                  src="/images/scorecard-20overall-20rating.png"
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

      {/* Why Reviews Matter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Greater Visibility → Stronger Trust → More Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
              Google uses review activity as a key signal when ranking local businesses. Profiles with consistent,
              recent feedback appear more prominently and are trusted more by customers making decisions.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              GuardX keeps your presence active so you stand out locally instead of blending in.
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Results vs Sponsored Ads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Google Maps Results vs Sponsored Ads
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                When people search for local services, most clicks go to the Google Maps results — not sponsored ads.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Customers tend to trust businesses that appear established, active, and well-reviewed in local search. Sponsored ads may get attention, but many users scroll past them in favour of businesses that look proven and trustworthy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Organic visibility in Google Maps earns trust at the exact moment customers are deciding who to contact. That's why maintaining a visibly active Google profile is often more effective long-term than relying on ads alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What More Reviews Mean Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              What Google Visibility Actually Means for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Your position in Google Maps and local search directly affects how many customers see you, trust you,
              and contact you. Consistent activity is the signal Google responds to.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-8 scroll-animate">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Businesses that maintain consistent activity on Google typically see 20–40% more calls, clicks and
                  enquiries within the first few months — simply by appearing more established and trusted.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  When competitors appear more active than you, customers choose them first — not because they're
                  better, but because they look more established in Google Maps and local search.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">
                  Those businesses dominating local search aren't just "lucky" — they maintain a visibly active
                  Google presence. GuardX gives you the same advantage automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center scroll-animate">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Switch it on once, and let GuardX build your Google presence and enquiries every week.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 scroll-animate">
            How GuardX Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/calendar-meeting.jpg"
                  alt="Connect Your CRM or BCC Email"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Connect your CRM or BCC email</h3>
              <p className="text-gray-600">Or use our simple staff form</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/setup-checklist.jpg"
                  alt="Review Requests Go Out Automatically"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Review requests go out automatically after each job or visit
              </h3>
              <p className="text-gray-600">Friendly email or SMS requests sent to your customers</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/notification-alerts.jpg"
                  alt="Two Gentle Follow-up Reminders"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Two gentle follow-up reminders increase response rates
              </h3>
              <p className="text-gray-600">Makes customers 4-5x more likely to leave a review</p>
            </div>

            <div className="text-center scroll-animate">
              <div className="mb-6 flex justify-center">
                <img
                  src="/images/report-mockup.jpg"
                  alt="Your Reviews and Visibility Grow"
                  className="w-32 h-32 rounded-lg shadow-lg"
                />
              </div>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-black">
                4
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Your reviews and visibility grow month after month</h3>
              <p className="text-gray-600">More visibility. More trust. More customers.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 scroll-animate">
            <a
              href="#free-scorecard"
              className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 text-center"
            >
              Get Your Free Scorecard
            </a>
            <a
              href="https://calendly.com/guardxnetwork-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20 text-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4 scroll-animate">Who We Help</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto scroll-animate">
            GuardX works best for:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Trades & home services</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Flooring & carpet businesses</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Store className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Shops & retail</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Garages & MOT centres</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Gyms & fitness</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Salons & barbers</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Pet services</h3>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all scroll-animate">
              <CardContent className="p-6 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm">Local service businesses</h3>
              </CardContent>
            </Card>
          </div>

          <p className="text-xl text-gray-700 text-center mt-12 max-w-3xl mx-auto scroll-animate font-semibold">
            If you rely on Google to win local customers — GuardX helps you stand out.
          </p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to Stand Out on Google and Win More Customers?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join businesses across the UK using GuardX to become more visible and trusted on Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#free-scorecard"
              className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
            >
              Get Your Free Scorecard
            </a>
            <a
              href="https://calendly.com/guardxnetwork-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-primary hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-primary/20"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

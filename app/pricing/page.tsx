"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Shield,
  Bell,
  MessageSquare,
  BarChart3,
  Globe,
  TrendingUp,
  CheckCircle2,
  Target,
  Zap,
  Mail,
  Star,
  Sparkles,
} from "lucide-react"

export default function PricingPage() {
  const [isScorecardOpen, setIsScorecardOpen] = useState(false)
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleScorecardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setScorecardStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      businessAddress: formData.get("businessAddress"),
    }

    try {
      const response = await fetch("https://formspree.io/f/xnnqonpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setScorecardStatus("success")
        setTimeout(() => {
          setIsScorecardOpen(false)
          setScorecardStatus("idle")
        }, 2000)
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
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 border-2 border-primary px-4 py-2 rounded-full mb-6">
                <span className="text-primary font-bold text-sm">ALL-IN-ONE PACKAGE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-balance">
                Everything You Need to Protect & Grow Your Reputation
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                One simple price. Complete reputation management. Fully automated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                    Book a Strategy Call
                  </Button>
                </a>
                <Button
                  onClick={() => setIsScorecardOpen(true)}
                  className="bg-white hover:bg-gray-50 text-black border-2 border-gray-300 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Your Free Scorecard
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-business-owner-reviewing-analytics-da.jpg"
                alt="Business owner reviewing analytics"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Package Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Your Complete Reputation Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For just £199/month, get everything you need to monitor, manage, and grow your online reputation—all
              handled by our expert team.
            </p>
            <div className="mt-6 animate-pulse">
              <p className="text-lg font-bold text-[#FFD700] bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                We also offer plans for smaller businesses. Get in touch to discuss.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-2 border-primary hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10 md:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold text-sm">MOST POPULAR</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">GuardX All-In-One Package</h3>
                  <div className="mb-4">
                    <span className="text-6xl font-bold text-primary">£199</span>
                    <span className="text-2xl text-gray-300">/month</span>
                  </div>
                  <p className="text-gray-300 text-lg">Everything included. No hidden fees. Cancel anytime.</p>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Monitor 100+ Platforms in One Place</h4>
                      <p className="text-gray-300 leading-relaxed">
                        See all your reviews from Google, Facebook, Yelp, TripAdvisor, Trustpilot, and 95+ other
                        platforms in a single dashboard. No more logging into multiple sites—save hours every week and
                        never miss a review again.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Instant Alerts for Every Review</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Get notified immediately when someone leaves a review—positive or negative. Respond quickly to
                        protect your reputation, turn unhappy customers into loyal ones, and show potential customers
                        you care about feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">AI-Powered Review Responses</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Save time and engage customers professionally with AI-suggested replies tailored to each review.
                        Approve with one click or let positive reviews auto-respond. Maintain a consistent, professional
                        voice without the hassle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Automated Review Requests</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Automatically encourage happy customers to leave reviews, boosting your overall ratings and
                        attracting more business. More positive reviews mean higher search rankings and increased trust
                        from potential customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Website Review Widget</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Display your best reviews directly on your website to build instant trust with visitors. Social
                        proof converts browsers into paying customers—showcase your reputation where it matters most.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Detailed Monthly Reports</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Receive comprehensive reports showing your star ratings, review volume, NPS scores, sentiment
                        trends, and urgent issues. Make data-driven decisions to improve customer experience and
                        identify revenue opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Fully Managed Service</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Everything is automated and handled by the GuardX team—from setup to ongoing monitoring. You
                        focus on running your business while we protect and grow your reputation 24/7. No technical
                        skills required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Dedicated Email Support</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Get expert help whenever you need it. Our team is here to answer questions, provide guidance,
                        and ensure you're getting maximum value from your reputation management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                      Book a Strategy Call
                    </Button>
                  </a>
                  <Button
                    onClick={() => setIsScorecardOpen(true)}
                    className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Your Free Scorecard
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center space-y-3 max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg">
                <strong className="text-black">Multi-location business?</strong> We offer custom packages for businesses
                with multiple locations. Contact us for a tailored solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose GuardX Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Why Businesses Choose GuardX</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, effective, and completely hands-off reputation management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">100% Done-for-You</h3>
                <p className="text-gray-700 leading-relaxed">
                  We handle everything—setup, monitoring, alerts, and reporting. You get all the benefits without
                  lifting a finger. Focus on what you do best: running your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Simple & Transparent</h3>
                <p className="text-gray-700 leading-relaxed">
                  One price, everything included. No hidden fees, no complicated tiers, no surprises. Just
                  straightforward reputation management that works.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Proven ROI</h3>
                <p className="text-gray-700 leading-relaxed">
                  Better reviews mean more customers and higher revenue. Our clients see measurable improvements in
                  ratings, review volume, and most importantly—their bottom line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                Everything Included for £199/Month
              </h2>
              <p className="text-xl text-gray-600">No add-ons. No upsells. Just complete reputation management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">100+ platform monitoring</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Instant review alerts</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">AI-powered responses</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Automated review requests</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Website review widget</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Monthly detailed reports</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Complete setup & integration</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Dedicated email support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/successful-business-owner-celebrating-achievement.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Protect & Grow Your Reputation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of businesses using GuardX to automate their reputation management. Get started today for
              just £199/month—everything included, fully managed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                  Book a Strategy Call
                </Button>
              </a>
              <Button
                onClick={() => setIsScorecardOpen(true)}
                className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Your Free Scorecard
              </Button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">No credit card required • Cancel anytime • Setup in 24 hours</p>
          </div>
        </div>
      </section>

      {/* Free Scorecard Dialog */}
      <Dialog open={isScorecardOpen} onOpenChange={setIsScorecardOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-black">Get Your Free Scorecard</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleScorecardSubmit} className="space-y-4">
            <div>
              <Label htmlFor="scorecard-email" className="text-black">
                Email Address
              </Label>
              <Input
                id="scorecard-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="scorecard-business" className="text-black">
                Business Name
              </Label>
              <Input
                id="scorecard-business"
                name="businessName"
                type="text"
                required
                placeholder="Your Business Name"
                className="border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="scorecard-address" className="text-black">
                Business Address
              </Label>
              <Input
                id="scorecard-address"
                name="businessAddress"
                type="text"
                required
                placeholder="123 Main St, City, State"
                className="border-gray-300"
              />
            </div>
            <Button
              type="submit"
              disabled={scorecardStatus === "loading"}
              className="w-full bg-primary hover:bg-[#e6c34a] text-black border-2 border-black/10"
            >
              {scorecardStatus === "loading" ? "Submitting..." : "Get Free Scorecard"}
            </Button>
            {scorecardStatus === "success" && (
              <p className="text-green-600 text-sm text-center">Success! Check your email for your scorecard.</p>
            )}
            {scorecardStatus === "error" && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

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
  Users,
  CheckCircle2,
  Target,
  Zap,
  Mail,
  Star,
} from "lucide-react"

export default function PricingPage() {
  const [isScorecardOpen, setIsScorecardOpen] = useState(false)
  const [isDemoOpen, setIsDemoOpen] = useState(false)
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [demoStatus, setDemoStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDemoStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      businessAddress: formData.get("businessAddress"),
    }

    try {
      const response = await fetch("https://formspree.io/f/xdkoqgpk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setDemoStatus("success")
        setTimeout(() => {
          setIsDemoOpen(false)
          setDemoStatus("idle")
        }, 2000)
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
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-balance">
                GuardX – Simple, <span className="text-primary">Done-for-You</span> Reputation Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Everything you need to grow your reputation and revenue in one premium package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsScorecardOpen(true)}
                  className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10"
                >
                  Get Your Free Scorecard
                </Button>
                <Button
                  onClick={() => setIsDemoOpen(true)}
                  className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Book a Demo
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

      {/* Lite Plan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Pricing Plans</h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white border-2 border-gray-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Lite Plan</h2>
                  <div className="mb-4">
                    <span className="text-6xl font-bold text-black">£99</span>
                    <span className="text-2xl text-gray-600">/month</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">Monitor key platforms: Google, Facebook, Yelp</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">Instant alerts for new reviews (positive & negative)</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">AI Suggested Responses (manual approval, push of a button)</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">
                      Monthly performance reports (star ratings, review counts, trends)
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">Email support</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setIsDemoOpen(true)}
                    className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10"
                  >
                    Get Lite Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Package Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-2 border-primary hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Package</h2>
                  <div className="mb-4">
                    <span className="text-6xl font-bold text-primary">£299</span>
                    <span className="text-2xl text-gray-300">/month</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Monitoring across 100+ platforms</h3>
                      <p className="text-gray-300 text-sm">Google, Facebook, Yelp, TripAdvisor, Trustpilot, and more</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Instant alerts for all reviews</h3>
                      <p className="text-gray-300 text-sm">Positive & negative</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">AI Suggested Responses</h3>
                      <p className="text-gray-300 text-sm">Optional auto-response for positive reviews</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Review request setup</h3>
                      <p className="text-gray-300 text-sm">Collect more reviews</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Weekly or monthly performance reports</h3>
                      <p className="text-gray-300 text-sm">Ratings, volume, NPS, trends</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Website review widgets</h3>
                      <p className="text-gray-300 text-sm">Display your best reviews on your website</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Full setup & integration</h3>
                      <p className="text-gray-300 text-sm">Handled by GuardX team</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:col-span-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Email support</h3>
                      <p className="text-gray-300 text-sm">Dedicated support for your needs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:col-span-2">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Optional multi-location management</h3>
                      <p className="text-gray-300 text-sm">Inquire for bespoke plan</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setIsScorecardOpen(true)}
                    className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10"
                  >
                    Get Your Free Scorecard
                  </Button>
                  <Button
                    onClick={() => setIsDemoOpen(true)}
                    className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Book a Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose GuardX Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Why Choose GuardX?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Done-for-You</h3>
                <p className="text-gray-700 leading-relaxed">
                  Focus on running your business while we handle your reputation management from start to finish
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Scalable</h3>
                <p className="text-gray-700 leading-relaxed">Perfect for single or multi-location businesses</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Revenue-Focused</h3>
                <p className="text-gray-700 leading-relaxed">
                  Positive reputation equals more paying customers and increased revenue
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/happy-successful-business-owner-celebrating-with-t.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join businesses that trust GuardX to protect and grow their reputation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsScorecardOpen(true)}
                className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10"
              >
                Get Your Free Scorecard
              </Button>
              <Button
                onClick={() => setIsDemoOpen(true)}
                className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Book a Demo
              </Button>
            </div>
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

      {/* Book Demo Dialog */}
      <Dialog open={isDemoOpen} onOpenChange={setIsDemoOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-black">Book a Demo</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div>
              <Label htmlFor="demo-name" className="text-black">
                Full Name
              </Label>
              <Input
                id="demo-name"
                name="name"
                type="text"
                required
                placeholder="John Smith"
                className="border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="demo-email" className="text-black">
                Email Address
              </Label>
              <Input
                id="demo-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="demo-business" className="text-black">
                Business Name
              </Label>
              <Input
                id="demo-business"
                name="businessName"
                type="text"
                required
                placeholder="Your Business Name"
                className="border-gray-300"
              />
            </div>
            <div>
              <Label htmlFor="demo-address" className="text-black">
                Business Address
              </Label>
              <Input
                id="demo-address"
                name="businessAddress"
                type="text"
                required
                placeholder="123 Main St, City, State"
                className="border-gray-300"
              />
            </div>
            <Button
              type="submit"
              disabled={demoStatus === "loading"}
              className="w-full bg-primary hover:bg-[#e6c34a] text-black border-2 border-black/10"
            >
              {demoStatus === "loading" ? "Submitting..." : "Book Demo"}
            </Button>
            {demoStatus === "success" && (
              <p className="text-green-600 text-sm text-center">Success! We'll contact you soon to schedule.</p>
            )}
            {demoStatus === "error" && (
              <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

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
  MessageSquare,
  Target,
  Zap,
  Star,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  Users,
  Settings,
  TrendingUp,
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
                Simple Pricing for Growing Your Reviews & Visibility
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                One straightforward system that increases your Google reviews automatically — no dashboards, no
                complicated tools, just real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                    Book a Call
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
              The GuardX Review Growth System
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-black to-gray-900 border-2 border-primary hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10 md:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary px-4 py-2 rounded-full mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold text-sm">MOST POPULAR</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">GuardX Review Growth System</h3>
                  <div className="mb-4 max-w-3xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                      Most clients find GuardX pays for itself within the first few months by increasing their Google
                      reviews, improving visibility, and generating more customer enquiries. Every business is different
                      — pricing depends on your size, review volume and goals. To receive your tailored quote, please
                      book a quick strategy call or email us at info@guardxnetwork.com.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Automated email review requests after every job or visit
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Automatically request reviews from satisfied customers via email, ensuring consistent review
                        collection without manual effort.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Optional SMS review requests (98% open rate)
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Reach customers instantly via text message with an impressive 98% open rate, maximizing your
                        chances of getting reviews.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Two gentle follow-up reminders to increase responses
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Automated follow-up messages ensure customers don't forget to leave a review, increasing
                        response rates by 4-5x.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Settings className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">CRM integration or BCC email setup</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Seamlessly integrate with your existing CRM system or use our simple BCC email setup to trigger
                        review requests automatically.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Staff form for trades, shops & in-person jobs
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Perfect for businesses with on-site staff — collect customer details via a simple form and
                        trigger review requests instantly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Set up your Google, Facebook, Yell or any review links
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        We configure all your review platform links so customers are directed to the right place to
                        leave feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Fully done-for-you setup</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Everything is configured and automated by the GuardX team — you focus on your business while we
                        handle the technical setup.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">Ongoing support whenever you need help</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Get dedicated email support whenever you need assistance — we're here to help your review growth
                        succeed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-all border-2 border-primary/30">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">
                        Optional SMS upgrade → £16/month for a UK SMS number + £12/month for 200 text credits
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        Upgrade to SMS review requests for maximum response rates. Available as an optional add-on to
                        any plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                      Book a Call
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
                <strong className="text-black">Multi-location business?</strong> We offer flexible pricing based on how
                many locations you want to activate. Contact us for a tailored solution.
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
              Simple, effective, and completely hands-off review growth
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
                  GuardX handles everything — setup, integration, and sending all review requests automatically. No
                  dashboards or software to learn.
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
                  No confusing tiers or hidden fees. One straightforward review growth system that works.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Proven Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  Businesses consistently see more reviews, higher rankings, and more enquiries once their automated
                  review flow is switched on.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">4–5x More Reviews</h3>
                <p className="text-gray-700 leading-relaxed">
                  With two friendly reminders, customers become 4–5x more likely to leave a review compared to asking
                  once manually.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">98% SMS Open Rate</h3>
                <p className="text-gray-700 leading-relaxed">
                  Text review invites are opened 98% of the time, making them one of the most effective ways to collect
                  reviews quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">Works for Any Local Business</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfect for trades, flooring, garages, shops, salons, gyms, pet services, and all local service-based
                  businesses.
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">Everything Included</h2>
              <p className="text-xl text-gray-600">No add-ons. No upsells. Just automated review growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Automated email review requests</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Optional SMS review requests</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Two follow-up reminders</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">CRM integration or BCC setup</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Staff form for in-person jobs</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Review link configuration</span>
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
              Ready to grow your reviews, visibility and customer enquiries?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join UK businesses using GuardX to automate their review requests and grow month after month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-[#e6c34a] text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 border-2 border-black/10">
                  Book a Call
                </Button>
              </a>
              <Button
                onClick={() => setIsScorecardOpen(true)}
                className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Your Free Scorecard
              </Button>
            </div>
            <p className="text-gray-400 mt-6 text-sm">
              No credit card required • Cancel anytime • Same-day setup available
            </p>
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

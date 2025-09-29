import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BarChart3, TrendingUp, ArrowRight, AlertTriangle, Clock, CheckCircle, Target } from "lucide-react"
import Link from "next/link"

export default function WhyItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why <span style={{ color: "#d4af37", fontWeight: "bold" }}>GuardX</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The proven reputation management system that protects UK businesses from review damage and drives more
              revenue
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Problem: Online Reviews Move Fast
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Your business reputation is under constant threat. Here's what the data shows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat Box 1 - Suggest placing a warning icon image here */}
            <Card className="bg-destructive/5 border-destructive/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-destructive mb-2">1 in 3</div>
                <p className="text-sm text-muted-foreground">
                  customers won't do business after seeing a negative review
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">BrightLocal, 2024</p>
              </CardContent>
            </Card>

            {/* Stat Box 2 - Suggest placing a trust/handshake icon image here */}
            <Card className="bg-primary/5 border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">72%</div>
                <p className="text-sm text-muted-foreground">
                  of consumers trust online reviews as much as personal recommendations
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">Multiple Studies</p>
              </CardContent>
            </Card>

            {/* Stat Box 3 - Suggest placing a clock/speed icon image here */}
            <Card className="bg-orange-500/5 border-orange-500/20 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">24 hrs</div>
                <p className="text-sm text-muted-foreground">
                  average time for a negative review to impact your business
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">Industry Research</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              <strong>The reality:</strong> Most UK business owners discover negative reviews too late, miss
              opportunities to respond professionally, and watch their reputation suffer while competitors gain the
              advantage.
            </p>
          </div>
        </div>
      </section>

      {/* How GuardX Solves It Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How GuardX Solves It</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional reputation management that works automatically for busy UK business owners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Solution 1 - Suggest placing a monitoring dashboard image here */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Platform Monitoring</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Google, Yelp, Trustpilot, Facebook tracking
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    24/7 automated monitoring
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Expert team oversight
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solution 2 - Suggest placing an alert notification image here */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Instant Alerts</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Immediate notification of new reviews
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Priority alerts for negative feedback
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Professional guidance included
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solution 3 - Suggest placing a professional report image here */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Weekly Reports</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Clear, easy-to-read summaries
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Star rating trends and analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    Expert insights and recommendations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Impact Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <TrendingUp className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proven Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The numbers don't lie - reputation management drives real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Impact Stat 1 - Suggest placing a revenue growth chart image here */}
            <Card className="bg-green-50 border-green-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">+28%</div>
                <p className="text-sm text-muted-foreground">more revenue for businesses with 4-4.5 star ratings</p>
                <p className="text-xs text-muted-foreground mt-2 italic">Harvard Business Review, 2022</p>
              </CardContent>
            </Card>

            {/* Impact Stat 2 - Suggest placing a review count image here */}
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2x</div>
                <p className="text-sm text-muted-foreground">revenue increase for companies with 200+ reviews</p>
                <p className="text-xs text-muted-foreground mt-2 italic">Moz, 2023</p>
              </CardContent>
            </Card>

            {/* Impact Stat 3 - Suggest placing a response time image here */}
            <Card className="bg-purple-50 border-purple-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">+30%</div>
                <p className="text-sm text-muted-foreground">increase in repeat purchases with quick responses</p>
                <p className="text-xs text-muted-foreground mt-2 italic">Forbes, 2021</p>
              </CardContent>
            </Card>

            {/* Impact Stat 4 - Suggest placing a customer trust image here */}
            <Card className="bg-orange-50 border-orange-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                <p className="text-sm text-muted-foreground">of customers read reviews before making a purchase</p>
                <p className="text-xs text-muted-foreground mt-2 italic">BrightLocal, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Better Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why It's Better Than Doing It Yourself
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most UK business owners try to manage their reputation manually. Here's why that doesn't work:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DIY Problems - Suggest placing a stressed business owner image here */}
            <div>
              <h3 className="text-2xl font-bold text-destructive mb-6">Doing It Yourself</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Miss reviews across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Discover negative reviews too late</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Waste hours checking platforms manually</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Respond emotionally instead of professionally</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">No clear strategy or tracking</span>
                </li>
              </ul>
            </div>

            {/* GuardX Solution - Suggest placing a professional team image here */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">With GuardX</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Automatic monitoring across all platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Instant alerts the moment reviews appear</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Save 5+ hours per week of manual checking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Expert guidance on professional responses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">Clear reports showing reputation trends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Protecting Your Reputation Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't let another negative review damage your business. Get professional reputation management that works
            automatically.
          </p>

          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">£99</div>
                <p className="text-sm text-muted-foreground">per month, per location</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">7 Days</div>
                <p className="text-sm text-muted-foreground">free trial included</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">Cancel</div>
                <p className="text-sm text-muted-foreground">anytime, no contracts</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Setup includes professional onboarding via email - we handle everything for you
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Begin Your Onboarding Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/onboarding">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Started Now
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Questions? Email us at{" "}
            <a href="mailto:info@guardxnetwork.com" className="text-primary hover:underline">
              info@guardxnetwork.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

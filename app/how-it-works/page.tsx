import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BarChart3, TrendingUp, ArrowRight, ArrowDown, Bell, FileText } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Protect and Grow Your Online Reputation in Simple Steps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Easy, automated reputation management designed for busy business owners
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Step 1 - Previously Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Select the protection plan that fits your business needs and get started immediately.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Simple plan selection gets you protected quickly – we handle all
                  the technical work, so you can focus on running your business.
                </p>
              </div>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 2 - Previously Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">We Monitor Your Reviews</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                GuardX tracks reviews from Google, Yelp, Trustpilot, Facebook, and many more.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Stay informed about what customers are saying, protect your
                  brand, and improve customer trust.
                </p>
              </div>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 3 - Previously Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Get Notified Instantly</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Receive alerts for urgent negative reviews or any review type you request.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Quickly address negative reviews before they impact your
                  reputation. Save time and reduce stress.
                </p>
              </div>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 4 - Previously Step 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Weekly Branded Reports</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Receive clear, easy-to-read reports showing your overall reputation and trends.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Understand your business reputation at a glance, track
                  improvement, and leverage positive reviews to attract more customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why This Approach Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fully automated system designed for busy business owners who want results without the hassle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Fully Automated</h3>
                <p className="text-muted-foreground text-sm">
                  Set it and forget it. No daily management required – we handle everything automatically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Simple & Clear</h3>
                <p className="text-muted-foreground text-sm">
                  Easy-to-understand reports and alerts. No technical knowledge required.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Saves Time & Stress</h3>
                <p className="text-muted-foreground text-sm">
                  Focus on your business while we protect your reputation 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Protect Your Business Reputation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join business owners who trust GuardX to monitor and protect their online reputation automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Start Protecting Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

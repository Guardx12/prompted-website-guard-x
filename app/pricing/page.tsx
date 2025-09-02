import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, TrendingUp, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your <span className="text-primary">Protection Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional reputation management with transparent pricing
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Business Plan - Most Popular */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">£299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm text-green-600 font-medium">Save 20% with annual billing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for single location businesses</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Instant alerts for negative or urgent reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Automated weekly branded reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Fully automated</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Extra locations: £149/month each</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                {/* Updated Stripe link for Business Plan */}
                <a href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00" target="_blank" rel="noopener noreferrer">
                  <Button className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                    <span className="get-started-text">Start Protecting Today</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Pro / Fake Review Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pro / Fake Review Plan</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">£499</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Includes fake review removal</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">One-year commitment required</p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Instant alerts for negative or urgent reviews</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Automated weekly branded reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-semibold">Fake review flagging and removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Fully automated</span>
                  </li>
                </ul>

                <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-800">
                    A one-year commitment is required to allow sufficient time for effective removal of fake reviews and
                    ongoing protection against recurring fake reviews.
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Extra locations: £299/month each</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Secure & Private – your data is safe</div>
                  <div className="text-xs text-green-600 font-medium">✓ Trusted by Small Businesses</div>
                </div>

                {/* Updated Stripe link for Pro Plan */}
                <a href="https://buy.stripe.com/fZufZgcvqao3bU7g2VcIE01" target="_blank" rel="noopener noreferrer">
                  <Button className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                    <span className="get-started-text">Start Protecting Today</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <

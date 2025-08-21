"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Shield,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Eye,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/guardx-new-logo.jpg"
                alt="GuardX Company Logo"
                width={350}
                height={140}
                className="w-52 md:w-64 lg:w-72 h-auto object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Protect Your Brand. <span className="text-primary">Guard Your Reputation.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We monitor, score, and protect your online reputation — so you can focus on running your business.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm font-medium">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-foreground">Trusted by Businesses</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground">Automated & Secure</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold shadow-lg"
                onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started – £299/Month
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mb-8 font-medium">
              Sign up today and start protecting your reputation immediately
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24/7 monitoring & alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Professional reputation management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Automated response system</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Monitor</h3>
                <p className="text-sm text-muted-foreground">Track mentions across the web</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Score</h3>
                <p className="text-sm text-muted-foreground">Analyze reputation health</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Protect</h3>
                <p className="text-sm text-muted-foreground">Defend and improve image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, automated reputation management in three easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Monitor</h3>
              <p className="text-muted-foreground">
                We track online mentions of your brand across all platforms and review sites.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Score</h3>
              <p className="text-muted-foreground">
                You receive a real-time reputation score and detailed insights about your online presence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Protect</h3>
              <p className="text-muted-foreground">
                We alert you instantly if something threatens your reputation and help you respond effectively.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">See What You'll Get</h3>
              <p className="text-muted-foreground">Sample reports and dashboards showing the insights you'll receive</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sample Dashboard 1 */}
              <Card className="bg-card border-border relative">
                <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Sample Report
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Reputation Score Dashboard</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Overall Score</span>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-primary rounded-full"></div>
                        </div>
                        <span className="text-primary font-bold">8.2/10</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Google Reviews</span>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">4.6 (127 reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Mentions This Week</span>
                      <span className="font-medium text-primary">+23</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Sentiment</span>
                      <span className="font-medium text-green-600">89% Positive</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Dashboard 2 */}
              <Card className="bg-card border-border relative">
                <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Sample Report
                </div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Weekly Activity Report</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">New 5-star review on Google</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Eye className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Brand mentioned in industry blog</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Response needed on Trustpilot</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">This Week's Trend</span>
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-medium">+12% improvement</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Start protecting your reputation immediately</p>
          </div>
        </div>
      </section>

      <section id="pricing-section" className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Protection Plan</h2>
            <p className="text-lg text-muted-foreground">Professional reputation management with transparent pricing</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Main Business Plan */}
            <Card className="bg-card border-primary border-2 relative">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                <p className="text-muted-foreground mb-6">Complete reputation protection</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">£299</span>
                    <div className="text-left">
                      <div className="text-muted-foreground text-sm">/month</div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {[
                    "Advanced reputation monitoring",
                    "Real-time alerts & notifications",
                    "Reputation score dashboard",
                    "Review response management",
                    "Daily, Weekly, or Monthly detailed reports",
                    "Crisis management support",
                    "Email support",
                    "Login access to live reports",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/onboarding">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold w-full"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>✓ 100% Automated Service</p>
                  <p>✓ Cancel Anytime</p>
                  <p>✓ No Setup Fees</p>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Location Add-On */}
            <Card className="bg-card border-border relative">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Multi-Location Add-On</h3>
                <p className="text-muted-foreground mb-6">Expand your protection</p>

                <div className="mb-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-primary">£149</span>
                    <div className="text-left">
                      <div className="text-muted-foreground text-sm">/month</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">per additional location</p>
                </div>

                <div className="mb-8 text-center">
                  <p className="text-foreground font-medium mb-4">
                    Manage additional business locations for £149 per month each.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Perfect for businesses with multiple branches, franchises, or service areas that need comprehensive
                    reputation monitoring.
                  </p>
                </div>

                <Link href="/onboarding">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold w-full bg-transparent"
                  >
                    Add Locations
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p>✓ Same features as main plan</p>
                  <p>✓ Separate location tracking</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose GuardX?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive reputation management solutions to protect and enhance your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Monitoring</h3>
                <p className="text-muted-foreground">
                  Continuous monitoring of your online reputation across all platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Reputation Recovery</h3>
                <p className="text-muted-foreground">
                  Strategic campaigns to improve and restore your online reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Review Management</h3>
                <p className="text-muted-foreground">Professional management of reviews across all major platforms.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated team of reputation management experts at your service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for businesses that care about reputation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GUARDX helps you monitor reviews, respond faster, and present a stronger brand across Google, Trustpilot,
              Yelp, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">Real-time review & mention alerts</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">Centralised inbox for responses</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">Sentiment & trend insights</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium">Clear, exportable reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Protect Your Reputation?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't let negative content damage your business. Start protecting your reputation today.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">Automated & Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-foreground font-medium">Trusted by Businesses</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              onClick={() => document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Started Online
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-4 font-medium">
            Sign up today and start protecting your reputation immediately
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

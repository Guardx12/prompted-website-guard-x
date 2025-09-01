"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Star, TrendingUp, CheckCircle, ArrowRight, Clock, Award, Eye, BarChart3, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ChatbotWelcome } from "@/components/chatbot-welcome"
import { usePricing } from "@/hooks/use-pricing"

export default function HomePage() {
  const pricing = usePricing()

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
              One Bad Review Can <span className="text-primary">Destroy Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              Every day without protection, negative reviews and damaging content spread across the internet — costing
              you customers and revenue.
            </p>

            <p className="text-lg text-primary font-semibold mb-8">Every day without protection costs you customers</p>

            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm font-medium">
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-foreground">24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-foreground">Instant Alerts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/onboarding">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg transform hover:scale-105 transition-all"
                >
                  Start Protecting Today
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
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
              Protection starts immediately — no setup required
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Instant threat detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Weekly reputation reports</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Crisis response support</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Monitor</h3>
                <p className="text-sm text-muted-foreground">Catch threats before they spread</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Alert</h3>
                <p className="text-sm text-muted-foreground">Instant notifications of issues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Protect</h3>
                <p className="text-sm text-muted-foreground">Defend your reputation 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Smart Business Owners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of businesses already protecting their reputation with GuardX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "GuardX caught a fake negative review within hours. Saved our restaurant's reputation and probably
                  thousands in lost revenue."
                </p>
                <p className="text-sm text-muted-foreground">— Restaurant Owner, Manchester</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "The instant alerts are game-changing. We respond to reviews faster than our competitors and it shows
                  in our ratings."
                </p>
                <p className="text-sm text-muted-foreground">— Dental Practice, London</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4">
                  "Worth every penny. The weekly reports show exactly how our reputation is improving month after
                  month."
                </p>
                <p className="text-sm text-muted-foreground">— Law Firm, Birmingham</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Join Them Today — {pricing.formatPrice(pricing.businessPlan.monthly)}/Month
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See How GuardX Protects Businesses Like Yours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses using GuardX dashboards and monitoring
            </p>
          </div>

          {/* Featured Success Story */}
          <div className="mb-16">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-primary">LOCAL RETAIL SUCCESS</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">From Chaos to Control in 30 Days</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-muted-foreground">
                          Struggled to track online mentions and respond quickly to negative feedback across multiple
                          platforms.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-muted-foreground">
                          GuardX dashboards tracked all mentions in real time, categorized by urgency level.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            Urgent mentions flagged within 24 hours
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            Response time improved by 50%
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            Positive mentions leveraged for marketing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <Link href="/onboarding">
                      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Start Protecting Your Reputation Today
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-primary/5 p-8 flex items-center justify-center">
                    <div className="w-full max-w-sm">
                      <div className="bg-card rounded-lg p-6 border border-border">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Alert Dashboard</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Urgent Alerts</span>
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-2 bg-muted rounded-full overflow-hidden">
                                <div className="w-2/3 h-full bg-destructive rounded-full"></div>
                              </div>
                              <span className="text-sm font-medium">3</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Response Time</span>
                            <span className="text-sm font-medium text-primary">&lt; 2hrs</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Positive Mentions</span>
                            <span className="text-sm font-medium text-green-600">+47%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Restaurant Success Story */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-yellow-600">RESTAURANT</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Never Miss a Review Again</h3>
                <p className="text-muted-foreground mb-4">
                  Negative reviews were going unnoticed on multiple platforms. GuardX's weekly summaries and real-time
                  alerts changed everything.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Reduced negative mentions impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Faster response to customer feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Clear snapshot of online reputation</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Weekly Summary</span>
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">+12</div>
                      <div className="text-xs text-muted-foreground">Positive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">3</div>
                      <div className="text-xs text-muted-foreground">Neutral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-destructive">1</div>
                      <div className="text-xs text-muted-foreground">Negative</div>
                    </div>
                  </div>
                </div>
                <Link href="/onboarding">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    See Your Reputation Score Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Gym Success Story */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600">GYM / FITNESS STUDIO</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Multi-Location Made Simple</h3>
                <p className="text-muted-foreground mb-4">
                  Couldn't track multiple locations' online reviews. GuardX's centralized dashboard solved everything.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">100% of urgent mentions flagged</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Multi-location monitoring simplified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Positive mentions highlighted for social media
                    </span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Location Overview</span>
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Central Location</span>
                      <span className="text-xs font-medium text-green-600">4.8★</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">North Branch</span>
                      <span className="text-xs font-medium text-green-600">4.6★</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">South Branch</span>
                      <span className="text-xs font-medium text-yellow-600">4.2★</span>
                    </div>
                  </div>
                </div>
                <Link href="/onboarding">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Protect Your Gym's Reputation
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Salon Success Story */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-sm font-medium text-pink-600">SALON / BEAUTY STUDIO</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Lightning-Fast Response Times</h3>
                <p className="text-muted-foreground mb-4">
                  Missed opportunities to respond quickly to feedback. Real-time alerts and categorization changed
                  everything.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Immediate alerts for urgent issues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Improved customer engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Clear overview of reputation trends</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Trend Analysis</span>
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Positive Trend</span>
                    <span className="text-xs font-medium text-green-600">↗ +23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Response Rate</span>
                    <span className="text-xs font-medium text-primary">98%</span>
                  </div>
                </div>
                <Link href="/onboarding">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Monitoring Today
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* E-commerce Success Story */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">E-COMMERCE STORE</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Complete Visibility Achieved</h3>
                <p className="text-muted-foreground mb-4">
                  Couldn't easily see all online mentions and reviews in one place. GuardX dashboard centralized
                  everything.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      All mentions tracked and categorized automatically
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Faster response to negative reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Overall reputation visibility improved</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Platform Coverage</span>
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Google</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Trustpilot</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Facebook</span>
                      <span className="text-green-600">✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Twitter</span>
                      <span className="text-green-600">✓</span>
                    </div>
                  </div>
                </div>
                <Link href="/onboarding">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    See How GuardX Can Help Your Store
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold"
              >
                Start Protecting Your Business — £299/Month
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">Join these successful businesses today</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Hidden Cost of Bad Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Studies show that just one negative review can cost you up to 30 customers. A single bad review on Google
              can lose you {pricing.convertCurrency("£10,000+")} in revenue this year alone.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg font-semibold text-foreground mb-2">Without protection, you're vulnerable to:</p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Fake negative reviews from competitors</li>
                <li>• Angry customers posting before you can respond</li>
                <li>• Old complaints resurfacing and spreading</li>
                <li>• Lost customers who never give you a chance</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">GuardX Stops The Damage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">24/7 Monitoring:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      We watch every review site, social platform, and forum
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Instant Alerts:</span>
                    <span className="text-muted-foreground"> Get notified within minutes of any new mention</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Weekly Reports:</span>
                    <span className="text-muted-foreground"> Track your reputation score and improvement trends</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Crisis Support:</span>
                    <span className="text-muted-foreground"> Expert guidance when serious threats emerge</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">ROI Calculator</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GuardX monthly cost:</span>
                  <span className="font-semibold text-foreground">
                    {pricing.formatPrice(pricing.businessPlan.monthly)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue saved from 1 prevented bad review:</span>
                  <span className="font-semibold text-primary">£10,000+</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="text-foreground font-semibold">Monthly ROI:</span>
                  <span className="font-bold text-primary text-lg">3,244%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold"
              >
                Protect Your Revenue — Start Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">One prevented bad review pays for 3+ years of service</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Protect Your Brand from Fake Reviews
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              We monitor and remove fake reviews every month to protect your business's online reputation. Available as
              an optional add-on for {pricing.formatPrice(pricing.fakeRemovalService)} per location per month.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-foreground font-medium mb-2">12-Month Commitment Required</p>
              <p className="text-sm text-muted-foreground">
                Our Fake Review Removal service requires a 12-month commitment to ensure we can fully remove existing
                fake reviews and provide ongoing protection against new ones. Removing fake reviews takes time and new
                fake reviews may continue to appear, so ongoing monitoring is essential for complete protection.
              </p>
            </div>
            <Link href="/pricing#fake-review-protection">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Add Fake Review Protection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose the Plan That's Right for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether you're a small business or a large enterprise, GuardX has a plan to protect your reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" id="pricing-section">
            {/* Business Plan */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {pricing.formatPrice(pricing.businessPlan.monthly)}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    <div className="text-sm text-muted-foreground mt-1">{pricing.businessPlan.savings}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Perfect for single location businesses</p>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Covers 1 business location",
                    "Dashboard login included",
                    "Daily, weekly, or monthly branded reports",
                    "Standard monitoring, logins, alerts",
                    "Automated review generation (INCLUDED)",
                    "Real-time alerts",
                    "Priority email support within 24 hours during business hours",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Extra locations: {pricing.formatPrice(pricing.extraLocation)}/month each
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                    Start Protecting Your Reputation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro / Fake Review Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Pro / Fake Review Plan</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {pricing.formatPrice(pricing.proFakeReviewPlan.monthly)}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                    <div className="text-sm text-muted-foreground mt-1">{pricing.proFakeReviewPlan.savings}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">Full monitoring with fake review detection</p>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Covers 1 business location",
                    "Full monitoring of Google, Trustpilot, and Yelp reviews",
                    "Instant alerts for negative reviews",
                    "Weekly branded reports",
                    "Fake review detection and flagging",
                    pricing.proFakeReviewPlan.support,
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Extra locations: {pricing.formatPrice(pricing.extraLocation)}/month each
                  </p>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold">
                    Start Protecting Your Reputation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Enterprise Plan</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">Custom</span>
                    <span className="text-muted-foreground"> Pricing</span>
                    <div className="text-sm text-muted-foreground mt-1">{pricing.enterprisePlan.pricing}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">For businesses with multiple locations</p>
                </div>

                <ul className="space-y-3 mb-8 text-left max-w-sm mx-auto">
                  {[
                    "Tailored for businesses with multiple locations",
                    "Full monitoring, logins, alerts",
                    "Premium support, custom features for multiple locations",
                    "Dedicated account manager",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">
                    Extra locations: {pricing.formatPrice(pricing.extraLocation)}/month each
                  </p>
                </div>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-sm text-muted-foreground">"Cancel anytime. No long-term contracts."</div>
              <div className="text-sm text-muted-foreground">
                "Extra locations are easy to add — scale as you grow."
              </div>
              <div className="text-sm text-muted-foreground">"Trusted by businesses who value their reputation."</div>
              <div className="text-sm text-muted-foreground">
                "All monitoring and alerts handled securely and professionally."
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold"
              >
                Start Protecting Your Business — {pricing.formatPrice(pricing.businessPlan.monthly)}/Month
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-3">Join these successful businesses today</p>
          </div>
        </div>
      </section>

      {/* Chatbot Placeholder Comment */}
      {/* 
        TODO: Chatbot Integration
        Chatbot to answer FAQs and inform visitors about the Fake Review Add-On in future update.
        This will be positioned as a floating chat widget in the bottom right corner.
      */}

      <Footer />
      <ChatbotWelcome />
    </div>
  )
}

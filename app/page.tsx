"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingNote } from "@/components/pricing-note"
import { Shield, Star, TrendingUp, CheckCircle, ArrowRight, Clock, Award, AlertTriangle, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-green-500 py-3 text-center">
        <Link href="/sample-customer-report">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 text-lg rounded-lg shadow-lg animate-pulse">
            View Sample Report
          </Button>
        </Link>
      </div>

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
              Reputation Management Made Simple –{" "}
              <span className="text-primary">Protect Your Reviews Before They Impact Your Business</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We automatically monitor all your online reviews across Google, Trustpilot, Facebook, and more. You'll
              get:
            </p>

            <div className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 space-y-2">
              <p>• Instant alerts for new or urgent reviews</p>
              <p>• AI-drafted responses ready to send with one click</p>
              <p>• Weekly PDF reports showing all your reviews and ratings</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-medium">
              No dashboards, no logins, no stress — just everything done for you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Save time and reduce stress
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Respond faster and smarter with AI
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Fully managed service, cancel any time
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
                target="_blank"
                rel="noopener noreferrer"
                className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg rounded-md inline-flex items-center transition-colors"
              >
                <span className="get-started-text">Start Protecting Today</span>
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
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
              Expert protection starts immediately — no setup required from you
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  <span className="text-primary font-bold">Instant threat detection</span> by our team
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>
                  <span className="text-primary font-bold">Professional weekly reports</span> delivered to you
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Expert crisis response support</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Monitor</h3>
                <p className="text-sm text-muted-foreground">Our experts catch threats before they spread</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Alert</h3>
                <p className="text-sm text-muted-foreground">You get instant notifications of issues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Protect</h3>
                <p className="text-sm text-muted-foreground">Expert defense of your reputation 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What a Reputation Turnaround Looks Like
            </h2>

            <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-3">Before</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-destructive">3.2</span>
                    <Star className="w-8 h-8 text-destructive fill-current" />
                  </div>
                  <p className="text-sm text-muted-foreground">Poor reputation</p>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-3">After</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-primary">4.6</span>
                    <Star className="w-8 h-8 text-primary fill-current" />
                  </div>
                  <p className="text-sm text-muted-foreground">Strong reputation</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Typical improvement when businesses take control of their online reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Get With GuardX</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Complete reputation management service that works automatically while you focus on your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Expert <span className="text-primary font-bold">monitoring</span> across Google, Trustpilot, Yelp,
                  Facebook, and many more platforms
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team watches all major review platforms <span className="text-primary font-bold">24/7</span> so
                  you never miss a mention of your business.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Professional <span className="text-primary font-bold">real-time monitoring</span> across all
                      platforms
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Comprehensive coverage managed by our experts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  <span className="text-primary font-bold">Instant alerts</span> delivered to you for negative or urgent
                  reviews (1–3 <span className="text-primary font-bold">star ratings</span>)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our system notifies you immediately when negative reviews appear so you can respond quickly with our
                  expert guidance.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Instant alerts</span> via email and SMS
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Urgent alerts</span> for critical reputation threats
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  <span className="text-primary font-bold">Professional weekly reports</span> on your{" "}
                  <span className="text-primary font-bold">reviews and ratings</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our experts compile comprehensive reports showing{" "}
                  <span className="text-primary font-bold">review trends</span> and key metrics from all monitored
                  platforms, delivered directly to your inbox.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Expert analysis of <span className="text-primary font-bold">positive reviews</span>,{" "}
                      <span className="text-primary font-bold">negative reviews</span>, and{" "}
                      <span className="text-primary font-bold">all reviews</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Automated weekly delivery to your inbox</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Fully managed service, no dashboard or login required
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team handles everything automatically in the background. You receive expert oversight without any
                  effort on your part.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Zero maintenance required from you</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Expert team works <span className="text-primary font-bold">24/7</span> without your intervention
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Service Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Expert Reputation Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Our team stops negative reviews from damaging your business
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Maximize Positive Impact</h4>
                <p className="text-sm text-muted-foreground">
                  We help you leverage good reviews into marketing opportunities
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Complete Time Savings</h4>
                <p className="text-sm text-muted-foreground">Our automated service means no manual checking required</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Businesses that respond to reviews see up to{" "}
                <span className="text-primary font-bold">35% more revenue</span>.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Companies managing reviews consistently often raise their star ratings by{" "}
                <span className="text-primary font-bold">1–1.5★ within 6–12 months</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback from Business Owners */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Feedback from Business Owners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from business owners who trust our expert reputation management service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 font-medium">
                  "I was spending hours every week checking Google and Yelp for new reviews. GuardX's expert team saves
                  me so much time – I get <span className="text-primary font-bold">instant alerts</span> when something
                  needs my attention and can focus on running my business while they handle the monitoring."
                </p>
                <p className="text-sm text-muted-foreground">— Restaurant Owner</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 font-medium">
                  "A competitor left a fake 1-star review that I didn't notice for weeks. Now GuardX's team sends me{" "}
                  <span className="text-primary font-bold">urgent alerts</span> within minutes of any negative review,
                  so I can respond quickly before it damages my reputation."
                </p>
                <p className="text-sm text-muted-foreground">— Retail Manager</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4 font-medium">
                  "I missed a negative review on Trustpilot that cost me several bookings. GuardX's{" "}
                  <span className="text-primary font-bold">24/7 monitoring</span> service means I never miss anything
                  important again. The expert oversight and peace of mind is worth every penny."
                </p>
                <p className="text-sm text-muted-foreground">— Boutique Hotel Manager</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">Join hundreds of satisfied customers</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Strengthen Your Online Reputation</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Imagine your business at <span className="text-destructive font-bold">3.4★</span> on Google. One negative
              review keeps dragging you down. With GuardX, you could rebuild trust and reach{" "}
              <span className="text-primary font-bold">4.5★ or higher</span> — gaining more customers every month.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Hidden Cost of Bad Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Studies show that just one negative review can cost you up to 30 customers. A single bad review on Google
              can lose you £10,000+ in revenue this year alone.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg font-semibold text-foreground mb-2">
                Without expert protection, you're vulnerable to:
              </p>
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
              <h3 className="text-2xl font-bold text-foreground mb-6">GuardX Expert Team Stops The Damage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">24/7 Monitoring</span> Service:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Our experts watch every <span className="text-primary font-bold">review source</span>, social
                      platform, and forum
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Instant Alerts</span> Delivered:
                    </span>
                    <span className="text-muted-foreground"> You get notified within minutes of any new mention</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Professional Weekly Reports</span>:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Expert analysis tracking your <span className="text-primary font-bold">reviews and ratings</span>{" "}
                      across all platforms
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Expert Crisis Support:</span>
                    <span className="text-muted-foreground"> Professional guidance when serious threats emerge</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">AI-drafted Review Responses</span>:
                    </span>
                    <span className="text-muted-foreground"> Our system creates professional responses for you</span>
                  </div>
                </li>
                <div className="ml-9 mt-1">
                  <p className="text-sm text-muted-foreground">
                    Respond to reviews faster and smarter – our AI drafts the replies for you, ready to send.
                  </p>
                </div>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">ROI Calculator</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GuardX monthly service cost:</span>
                  <span className="font-semibold text-foreground">£299</span>
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
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Protect Your Revenue — Start Now</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">One prevented bad review pays for 3+ years of service</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Protection Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent pricing for expert reputation management service. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="pricing-section">
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
                  <p className="text-sm text-muted-foreground">
                    Perfect for all businesses, with flexible location options
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Expert <span className="text-primary font-bold">monitoring</span> across Google, Trustpilot, Yelp,
                      Facebook, and many more platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="text-primary font-bold">Instant alerts</span> delivered for{" "}
                      <span className="text-primary font-bold">negative reviews</span> and urgent issues
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="text-primary font-bold">Professional weekly reports</span> on your{" "}
                      <span className="text-primary font-bold">reviews and ratings</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="text-primary font-bold">AI-drafted review responses</span>
                    </span>
                  </li>
                  <div className="ml-9 mt-1">
                    <p className="text-sm text-muted-foreground">
                      Respond to reviews faster and smarter – our AI drafts the replies for you, ready to send.
                    </p>
                  </div>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Fully managed service</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Extra locations: £149/month each</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                <a
                  href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold rounded-md inline-flex items-center justify-center transition-colors"
                >
                  <span className="get-started-text">Start Protecting Today</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
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
                  </div>
                  <p className="text-sm text-muted-foreground">For businesses with 5+ locations</p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Includes all features in the Business Plan service</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Custom <span className="text-primary font-bold">monitoring</span> setup by our experts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Volume discounts available</span>
                  </li>
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Scalable pricing based on your needs</p>
                </div>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Protect Your Reputation Instantly</div>
                  <div className="text-xs text-green-600 font-medium">✓ Dedicated Support Included</div>
                </div>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="get-started-btn w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                  >
                    <span className="get-started-text">Contact Us</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <PricingNote />

          <div className="text-center mb-12">
            <div className="bg-card/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose GuardX Expert Service?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Cancel anytime – no contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Fully managed service – hands-off for you</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Trusted by small businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>
                    Secure & private expert <span className="text-primary font-bold">monitoring</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>
                    <span className="text-primary font-bold">AI-drafted review responses</span>
                  </span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 ml-6">
                  Respond to reviews faster and smarter – our AI drafts the replies for you, ready to send.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <p className="text-sm text-muted-foreground mt-3">Expert protection starts immediately</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Your <span className="text-primary font-bold">Professional Weekly Reports</span> Include
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expert analysis of your <span className="text-primary font-bold">reviews and ratings</span>{" "}
              delivered to your inbox every week with key insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Overall Reputation Score</h3>
                <p className="text-muted-foreground mb-4">
                  Our experts analyze your average <span className="text-primary font-bold">star ratings</span> across
                  Google, Yelp, Facebook, Trustpilot, and many more, with{" "}
                  <span className="text-primary font-bold">review trends</span>
                  over time.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cross-platform reputation tracking by our team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert historical trend analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">New Reviews Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Our team compiles all reviews received since your last report, expertly categorized by{" "}
                  <span className="text-primary font-bold">positive reviews</span>, neutral, and
                  <span className="text-primary font-bold"> negative reviews</span>.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert organization by sentiment rating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Complete review text included with analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  <span className="text-primary font-bold">Review Sources</span> Analysis
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our experts provide detailed analysis of exactly which platforms your reviews came from with
                  comprehensive source breakdown.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert platform-by-platform breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Direct links to <span className="text-primary font-bold">review sources</span> provided
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Highlighted Reviews & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Our team highlights any <span className="text-primary font-bold">urgent alerts</span> or impactful
                  reviews, plus expert analysis showing where your reputation is improving or needs attention.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert priority flagging for urgent reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional actionable improvement insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Expert <span className="text-primary font-bold">Professional Weekly Reports</span> on Your{" "}
              <span className="text-primary font-bold">Reviews and Ratings</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Comprehensive Expert Data</h4>
                <p className="text-sm text-muted-foreground">
                  All reports include detailed professional analysis of your{" "}
                  <span className="text-primary font-bold">reviews and ratings</span> across{" "}
                  <span className="text-primary font-bold">all reviews</span> platforms
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Automated Expert Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Reports are generated by our experts and delivered automatically every week
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Professional Format</h4>
                <p className="text-sm text-muted-foreground">Expert-designed format perfect for sharing internally</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Getting Expert Reports Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

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
              Start Protecting Your Business Today –{" "}
              <span className="text-primary">One Bad Review Can Destroy Your Reputation</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Automated monitoring, instant alerts for negative reviews, AI-drafted review responses, and professional
              weekly reports on your reviews and ratings – set and forget.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto mb-8">
              Respond to reviews faster and smarter – AI drafts the replies for you, ready to send.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">✓ Cancel Any Time</div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">✓ Fully Automated</div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Works Across All Platforms
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
              Protection starts immediately — no setup required
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Instant threat detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Professional weekly reports on your reviews and ratings</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What You Get With GuardX</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete reputation protection that works automatically in the background
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Monitoring for Google, Trustpilot, Yelp, Facebook, and many more platforms
                </h3>
                <p className="text-muted-foreground mb-4">
                  We watch all major review platforms 24/7 so you never miss a mention of your business.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Real-time monitoring across all platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Comprehensive coverage of review sites</span>
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
                  Instant alerts for negative or urgent reviews (1–3 stars)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get notified immediately when negative reviews appear so you can respond quickly.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Instant email and SMS alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Priority flagging for urgent issues</span>
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
                  Professional weekly reports on your reviews and ratings
                </h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive reports showing reputation trends and key metrics from all monitored platforms.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional weekly reports on your reviews and ratings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly delivery to your inbox</span>
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
                  Fully automated, no dashboard or login required
                </h3>
                <p className="text-muted-foreground mb-4">
                  Set it and forget it. Everything works automatically in the background.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Zero maintenance required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Works 24/7 without intervention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Protect Your Reputation</h4>
                <p className="text-sm text-muted-foreground">Stop negative reviews from damaging your business</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Leverage Positive Reviews</h4>
                <p className="text-sm text-muted-foreground">Turn good reviews into marketing opportunities</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Save Time</h4>
                <p className="text-sm text-muted-foreground">Automated monitoring means no manual checking</p>
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

      {/* Feedback from Business Owners */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Feedback from Business Owners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from business owners who understand the importance of reputation protection
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
                  "I was spending hours every week checking Google and Yelp for new reviews. This service saves me so
                  much time – I get instant alerts when something needs my attention and can focus on running my
                  business."
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
                  "A competitor left a fake 1-star review that I didn't notice for weeks. Now I get alerts within
                  minutes of any negative review, so I can respond quickly before it damages my reputation."
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
                  "I missed a negative review on Trustpilot that cost me several bookings. Automated monitoring means I
                  never miss anything important again. The peace of mind is worth every penny."
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

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Hidden Cost of Bad Reviews</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Studies show that just one negative review can cost you up to 30 customers. A single bad review on Google
              can lose you £10,000+ in revenue this year alone.
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
                    <span className="font-semibold text-foreground">Professional Weekly Reports:</span>
                    <span className="text-muted-foreground">
                      {" "}
                      Professional weekly reports tracking your reviews and ratings across all platforms
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Crisis Support:</span>
                    <span className="text-muted-foreground"> Expert guidance when serious threats emerge</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">AI-drafted Review Responses:</span>
                    <span className="text-muted-foreground"> Automated responses to reviews</span>
                  </div>
                </li>
                <div className="ml-9 mt-1">
                  <p className="text-sm text-muted-foreground">
                    Respond to reviews faster and smarter – AI drafts the replies for you, ready to send.
                  </p>
                </div>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">ROI Calculator</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GuardX monthly cost:</span>
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
              Simple, transparent pricing with no hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" id="pricing-section">
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
                    <span className="text-foreground">Professional weekly reports on your reviews and ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">AI-drafted review responses</span>
                  </li>
                  <div className="ml-9 mt-1">
                    <p className="text-sm text-muted-foreground">
                      Respond to reviews faster and smarter – AI drafts the replies for you, ready to send.
                    </p>
                  </div>
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
                    <span className="text-foreground">Professional weekly reports on your reviews and ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">AI-drafted review responses</span>
                  </li>
                  <div className="ml-9 mt-1">
                    <p className="text-sm text-muted-foreground">
                      Respond to reviews faster and smarter – AI drafts the replies for you, ready to send.
                    </p>
                  </div>
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

                <a
                  href="https://buy.stripe.com/fZufZgcvqao3bU7g2VcIE01"
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
                    <span className="text-foreground">Includes all features in the Business Plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Custom monitoring setup</span>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Why Choose GuardX?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Cancel anytime – no contracts</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Fully automated – set and forget</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Trusted by small businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Secure & private monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>AI-drafted review responses</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1 ml-6">
                  Respond to reviews faster and smarter – AI drafts the replies for you, ready to send.
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
            <p className="text-sm text-muted-foreground mt-3">Protection starts immediately</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Your Professional Weekly Reports Include
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive reports on your reviews and ratings delivered to your inbox every week with key insights
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
                  See your average star rating across Google, Yelp, Facebook, Trustpilot, and many more, with trends
                  over time.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cross-platform reputation tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Historical trend analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">New Reviews</h3>
                <p className="text-muted-foreground mb-4">
                  Get a list of all reviews received since your last report, filtered by positive, neutral, and
                  negative.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Organized by sentiment rating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Complete review text included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Review Sources</h3>
                <p className="text-muted-foreground mb-4">
                  Know exactly which platforms your reviews came from with detailed source breakdown.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Platform-by-platform breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Direct links to review sources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Highlighted Reviews & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Quickly see any urgent or impactful reviews, plus trends showing where your reputation is improving or
                  needs attention.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Priority flagging for urgent reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Actionable improvement insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Professional Weekly Reports on Your Reviews and Ratings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Comprehensive Data</h4>
                <p className="text-sm text-muted-foreground">
                  All reports include detailed analysis of your reviews and ratings across all platforms
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Automated Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Reports are generated and delivered automatically every week
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Easy to Share</h4>
                <p className="text-sm text-muted-foreground">Professional format perfect for sharing internally</p>
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
              <span className="get-started-text">Start Getting Professional Reports Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

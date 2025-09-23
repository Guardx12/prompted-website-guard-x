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
              Keep Your Business Safe From Bad Reviews –{" "}
              <span className="text-primary">We watch your online reputation so you don't have to.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              We check all your online reviews on Google, Trustpilot, Facebook, and other sites every day. When
              something happens, you'll get:
            </p>

            <div className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 space-y-2">
              <p>• Email alerts when new reviews appear (good, bad, or all reviews)</p>
              <p>• Weekly PDF reports showing all your reviews and star ratings</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 font-medium">
              Everything sent straight to your email. No work required from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Saves you hours of checking websites
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Our team handles everything for you
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                ✓ Cancel anytime, no long contracts
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg rounded-md inline-flex items-center transition-colors"
              >
                <span className="get-started-text">Start Protecting Today</span>
                <ArrowRight className="ml-2 w-6 h-6" />
              </a>
              <div className="cta-redirect-message">
                You will be redirected to our customer form immediately upon purchase.
              </div>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Watch</h3>
                <p className="text-sm text-muted-foreground">
                  We check review sites every day for mentions of your business
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Tell You</h3>
                <p className="text-sm text-muted-foreground">You get an email alert when new reviews appear</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Help</h3>
                <p className="text-sm text-muted-foreground">
                  Our team helps protect your business reputation around the clock
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Founder's Story Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why We Started GuardX</h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Hi, I'm <span className="text-primary font-bold">Luke Andrews</span>, founder of GuardX. I started this
                company because I saw how one bad review could hurt a business owner's livelihood — and how stressful it
                is to constantly check review sites yourself.
              </p>
              <p>
                GuardX sends you <span className="text-primary font-bold">instant email alerts</span> and easy-to-read
                reports — all automatically — so you can stay in control of your reputation and respond quickly when
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Your Star Rating Can Improve</h2>

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
                  This is what happens when business owners stay on top of their reviews.
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete review monitoring service that runs automatically while you focus on your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  We check <span className="text-primary font-bold">all major review sites</span> including Google,
                  Trustpilot, Yelp, Facebook, and many more
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team checks all the important review websites{" "}
                  <span className="text-primary font-bold">every day</span> so you never miss when someone mentions your
                  business.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Daily checking</span> of all review sites
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Complete coverage handled by our team</span>
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
                  <span className="text-primary font-bold">Instant email alerts</span> for all new reviews
                </h3>
                <p className="text-muted-foreground mb-4">
                  We send you an email right away when new reviews appear — whether they're good, bad, or urgent — so
                  you can respond quickly and stay on top of your reputation. You choose which alerts you want.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Email alerts</span> for all types of reviews
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Priority alerts</span> for serious reputation problems
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
                  <span className="text-primary font-bold">Weekly PDF reports</span> showing your{" "}
                  <span className="text-primary font-bold">reviews and star ratings</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team creates detailed reports showing{" "}
                  <span className="text-primary font-bold">how your reviews are trending</span> and important numbers
                  from all the sites we monitor, sent directly to your email.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Analysis of <span className="text-primary font-bold">good reviews</span>,{" "}
                      <span className="text-primary font-bold">bad reviews</span>, and{" "}
                      <span className="text-primary font-bold">all reviews</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Sent to your email every week automatically</span>
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
                  Completely hands-off service — no website to log into
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team does everything automatically behind the scenes. You get all the benefits without any work on
                  your part.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>No work required from you</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Our team works <span className="text-primary font-bold">around the clock</span> without you having
                      to do anything
                    </span>
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
                <p className="text-sm text-muted-foreground">
                  Our team helps stop bad reviews from hurting your business
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Make Good Reviews Work Harder</h4>
                <p className="text-sm text-muted-foreground">We help you turn positive reviews into more customers</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Save Hours Every Week</h4>
                <p className="text-sm text-muted-foreground">No more manually checking review sites yourself</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
              You will be redirected to our customer form immediately upon purchase.
            </div>
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
                Businesses that respond to reviews earn up to{" "}
                <span className="text-primary font-bold">35% more money</span>.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground font-medium">
                Businesses that manage their reviews properly often improve their star ratings by{" "}
                <span className="text-primary font-bold">1–1.5 stars within 6–12 months</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback from Business Owners */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Business Owners Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from business owners who use our review monitoring service
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
                  "I used to spend hours every week checking Google and Yelp for new reviews. GuardX saves me so much
                  time – I get <span className="text-primary font-bold">instant email alerts</span> when something needs
                  my attention, and I can focus on running my business while they handle the checking."
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
                  "A competitor left a fake 1-star review that I didn't see for weeks. Now GuardX sends me{" "}
                  <span className="text-primary font-bold">urgent alerts</span> within minutes of any bad review, so I
                  can respond quickly before it hurts my business."
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
                  "I missed a bad review on Trustpilot that cost me several bookings. GuardX's{" "}
                  <span className="text-primary font-bold">daily monitoring</span> means I never miss anything important
                  again. The peace of mind is worth every penny."
                </p>
                <p className="text-sm text-muted-foreground">— Boutique Hotel Manager</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
              You will be redirected to our customer form immediately upon purchase.
            </div>
            <p className="text-sm text-muted-foreground mt-3">Join hundreds of happy customers</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Improve Your Online Reputation</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Picture your business stuck at <span className="text-destructive font-bold">3.4 stars</span> on Google.
              Bad reviews keep pulling you down. With GuardX, you could rebuild trust and reach{" "}
              <span className="text-primary font-bold">4.5 stars or higher</span> — bringing in more customers every
              month.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Bad Reviews Are So Dangerous</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Research shows that just one bad review can cost you up to 30 customers. A single negative review on
              Google can lose you £10,000+ in sales this year alone.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <p className="text-lg font-semibold text-foreground mb-2">Without protection, you're at risk from:</p>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Fake bad reviews from competitors</li>
                <li>• Upset customers posting before you can fix their problem</li>
                <li>• Old complaints coming back to hurt you</li>
                <li>• Potential customers choosing your competitors instead</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">How GuardX Stops The Damage</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Daily Checking</span>:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Our team checks every <span className="text-primary font-bold">review site</span>, social media
                      platform, and forum
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Fast Alerts</span>:
                    </span>
                    <span className="text-muted-foreground"> You get notified within minutes of any new mention</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">
                      <span className="text-primary font-bold">Weekly Reports</span>:
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      Detailed tracking of your <span className="text-primary font-bold">reviews and star ratings</span>{" "}
                      across all sites
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4">Value Calculator</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GuardX monthly cost:</span>
                  <span className="font-semibold text-foreground">£99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Money saved from 1 prevented bad review:</span>
                  <span className="font-semibold text-primary">£10,000+</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between">
                  <span className="text-foreground font-semibold">Monthly value:</span>
                  <span className="font-bold text-primary text-lg">10,000%+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Protect Your Revenue — Start Now</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
              You will be redirected to our customer form immediately upon purchase.
            </div>
            <p className="text-sm text-muted-foreground mt-3">One prevented bad review pays for years of service</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One clear price for complete review monitoring. Cancel anytime.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-12" id="pricing-section">
            {/* Business Plan - Most Popular */}
            <Card className="bg-card border-primary hover:border-primary transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Business Plan</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">£99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perfect for all businesses, with flexible location options
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      We check <span className="text-primary font-bold">all major review sites</span> including Google,
                      Trustpilot, Yelp, Facebook, and many more
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="text-primary font-bold">Instant email alerts</span> for{" "}
                      <span className="text-primary font-bold">bad reviews</span> and urgent problems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      <span className="text-primary font-bold">Weekly PDF reports</span> showing your{" "}
                      <span className="text-primary font-bold">reviews and star ratings</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">Completely hands-off service</span>
                  </li>
                </ul>

                <div className="mb-4 space-y-1">
                  <div className="text-xs text-green-600 font-medium">✓ Cancel Any Time – no contracts</div>
                  <div className="text-xs text-green-600 font-medium">✓ One Low Monthly Fee – no hidden costs</div>
                </div>

                <a
                  href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
                  className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold rounded-md inline-flex items-center justify-center transition-colors"
                >
                  <span className="get-started-text">Start Protecting Today</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <div className="cta-redirect-message">
                  You will be redirected to our customer form immediately upon purchase.
                </div>
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
                  <span>Completely hands-off – no work for you</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Trusted by small businesses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>
                    Secure & private <span className="text-primary font-bold">monitoring</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Protecting Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
              You will be redirected to our customer form immediately upon purchase.
            </div>
            <p className="text-sm text-muted-foreground mt-3">We start protecting your business right away</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Your <span className="text-primary font-bold">Weekly PDF Reports</span> Include
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed analysis of your <span className="text-primary font-bold">reviews and star ratings</span> sent to
              your email every week with important insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Overall Star Rating Score</h3>
                <p className="text-muted-foreground mb-4">
                  Our team tracks your average <span className="text-primary font-bold">star ratings</span> across
                  Google, Yelp, Facebook, Trustpilot, and many more, with{" "}
                  <span className="text-primary font-bold">trends over time</span>.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Reputation tracking across all sites</span>
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
                <h3 className="text-xl font-bold text-foreground mb-4">New Reviews Summary</h3>
                <p className="text-muted-foreground mb-4">
                  Our team organizes all reviews received since your last report, sorted by{" "}
                  <span className="text-primary font-bold">good reviews</span>, neutral, and
                  <span className="text-primary font-bold"> bad reviews</span>.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Organized by positive, neutral, and negative</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Full review text included</span>
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
                  <span className="text-primary font-bold">Review Sources</span> Breakdown
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team shows you exactly which websites your reviews came from with detailed source information.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Site-by-site breakdown</span>
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
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              <span className="text-primary font-bold">Weekly PDF Reports</span> on Your{" "}
              <span className="text-primary font-bold">Reviews and Star Ratings</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Complete Data</h4>
                <p className="text-sm text-muted-foreground">
                  All reports include detailed analysis of your{" "}
                  <span className="text-primary font-bold">reviews and star ratings</span> across{" "}
                  <span className="text-primary font-bold">all review sites</span>
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Automatic Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Reports are created by our team and sent automatically every week
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Easy-to-Read Format</h4>
                <p className="text-sm text-muted-foreground">Clean format perfect for sharing with your team</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 text-xl font-bold rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Getting Reports Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <div className="cta-redirect-message">
              You will be redirected to our customer form immediately upon purchase.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

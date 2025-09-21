"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Star, TrendingUp, CheckCircle, Award, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SampleCustomerReportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Report Screenshot */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Sample Customer Report</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Our expert team provides <span className="text-primary font-bold">24/7 monitoring</span> with{" "}
              <span className="text-primary font-bold">urgent alerts</span> for{" "}
              <span className="text-primary font-bold">negative/positive/all reviews</span>, plus{" "}
              <span className="text-primary font-bold">professional response suggestions</span> Ready to Copy and Send.
              You'll also receive these comprehensive professional reports delivered weekly to your inbox – no dashboard
              login required.
            </p>
          </div>

          {/* Report Screenshot */}
          <div className="mb-16">
            <div className="bg-card/50 rounded-lg p-6 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-04%20at%209.47.04%E2%80%AFAM-3YMh7Grb6pepRc2i1iJOjWo154REZp.png"
                alt="Sample GuardX Customer Report Dashboard"
                width={1400}
                height={900}
                className="w-full h-auto rounded-lg border border-border"
                priority
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Sample report for "Taco Shop" showing comprehensive review analytics and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Breakdown Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Understanding Your Professional Weekly Report
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our reputation management experts analyze every metric and deliver actionable insights to protect and
              enhance your business reputation – no analysis required on your part.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Overall Review Rating */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Overall Review Rating</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Expert Analysis:</strong> We track your{" "}
                  <span className="text-primary font-bold">star ratings</span> across all platforms (3.5 stars with 78
                  reviews in this example) and monitor for any reputation threats.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why Our Monitoring Matters:</strong> Our{" "}
                  <span className="text-primary font-bold">24/7 monitoring</span> catches rating drops immediately –
                  even a 0.1 star decline can cost you significant revenue, which is why we provide{" "}
                  <span className="text-primary font-bold">urgent alerts</span>
                  the moment issues arise.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Continuous <span className="text-primary font-bold">review trends</span> monitoring by our experts
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Immediate <span className="text-primary font-bold">urgent alerts</span> when ratings decline
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional assessment of reputation management impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Professional Tracking:</strong> We monitor all{" "}
                  <span className="text-primary font-bold">review sources</span> and report +8 reviews in the last 30
                  days, +1119 reviews since our <span className="text-primary font-bold">24/7 monitoring</span> began.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Expert Insights Provided:</strong> Our team analyzes{" "}
                  <span className="text-primary font-bold">review trends</span> to identify seasonal patterns and
                  campaign effectiveness, delivering actionable intelligence you can act on immediately.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional monitoring of review frequency changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert identification of successful engagement periods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Long-term reputation growth analysis by our specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Rating Breakdown */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Rating Breakdown (5-Star to 1-Star)</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Detailed Analysis:</strong> We break down your{" "}
                  <span className="text-primary font-bold">star ratings</span> distribution (31 five-star, 14 four-star
                  reviews, etc.) and flag any concerning patterns for immediate attention.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why Our Expert Monitoring Protects You:</strong> Our specialists identify reputation threats
                  in real-time. Clusters of 1-2 star reviews trigger{" "}
                  <span className="text-primary font-bold">urgent alerts</span> so we can help you respond before
                  serious damage occurs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional analysis of customer satisfaction patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert detection of potential fake review attacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Strategic recommendations for targeted improvements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Review Sources */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Review Sources</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Comprehensive Monitoring:</strong> We track all major{" "}
                  <span className="text-primary font-bold">review sources</span> including Google (78 reviews, 3.5
                  rating), Facebook (0 reviews), and dozens of other platforms automatically.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Real-Time Review Monitoring:</strong> Our system provides continuous monitoring across Google,
                  Trustpilot, Facebook, and more, delivering{" "}
                  <span className="text-primary font-bold">instant alerts</span> for negative, urgent, or positive
                  reviews so you can respond quickly.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Complete <span className="text-primary font-bold">24/7 monitoring</span> across all major
                      platforms
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Professional Response Templates</span> Ready to Copy and
                      Send
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly PDF Summary Reports showing all reviews and ratings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Online Reviews by Month */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Online Reviews by Month</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Our Professional Monitoring:</strong> We track{" "}
                  <span className="text-primary font-bold">review trends</span> and provide comprehensive monthly
                  summaries showing review volume and rating changes across all platforms.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Weekly PDF Summary Reports:</strong> Our system delivers detailed reports showing all reviews
                  and ratings, helping you understand your reputation performance and identify areas for improvement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Monthly review volume tracking and analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Comprehensive rating performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly PDF reports delivered automatically</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Review Details */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Review Details & Customer Comments</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Complete Review Intelligence:</strong> We capture every customer review with ratings, dates,
                  names, and full text, plus provide{" "}
                  <span className="text-primary font-bold">professional response suggestions</span> Ready to Copy and
                  Send.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Expert Analysis & Response Support:</strong> Our team analyzes customer feedback patterns and
                  provides <span className="text-primary font-bold">professional response suggestions</span> that
                  address specific concerns professionally, saving you hours of response crafting.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional analysis of customer pain points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      <span className="text-primary font-bold">Professional response suggestions</span> Ready to Copy
                      and Send
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Focus on leveraging <span className="text-primary font-bold">positive reviews</span> to showcase
                      business strengths
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why GuardX Reports Matter */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why GuardX Reports Matter for Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive done-for-you service provides expert oversight and actionable intelligence to protect
              and grow your business reputation – no management required on your part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Complete Done-For-You Service</h3>
                <p className="text-muted-foreground mb-4">
                  Our experts handle all <span className="text-primary font-bold">24/7 monitoring</span>, analysis, and
                  reporting automatically. You receive professional insights without any platform management or data
                  collection on your part.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• No platform management required</li>
                  <li>
                    • Professional <span className="text-primary font-bold">24/7 monitoring</span> by our team
                  </li>
                  <li>• Focus entirely on running your business</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Expert Reputation Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Our reputation management specialists analyze{" "}
                  <span className="text-primary font-bold">review trends</span> and provide expert insights on the
                  impact of your customer service improvements and marketing efforts.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • Professional <span className="text-primary font-bold">review trends</span> analysis
                  </li>
                  <li>• Expert measurement of improvement efforts</li>
                  <li>• Strategic identification of successful approaches</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Ready-To-Use Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  We transform raw review data into specific action plans and provide{" "}
                  <span className="text-primary font-bold">professional response suggestions</span>
                  Ready to Copy and Send, plus strategic recommendations for reputation enhancement.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • <span className="text-primary font-bold">Professional response suggestions</span> Ready to Copy
                    and Send
                  </li>
                  <li>• Expert analysis of customer priorities</li>
                  <li>• Strategic recommendations for immediate action</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Professional Reports That Drive Results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Our Expert Team Delivers Weekly:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Professional reputation analysis across all{" "}
                      <span className="text-primary font-bold">review sources</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Expert evaluation of new reviews with <span className="text-primary font-bold">star ratings</span>{" "}
                      analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Comprehensive <span className="text-primary font-bold">review trends</span> analysis by
                      specialists
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="text-primary font-bold">Professional response suggestions</span> Ready to Copy
                      and Send
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Business Protection Benefits:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="text-primary font-bold">Urgent alerts</span> catch reputation threats before they
                      spread
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Expert guidance for systematic customer satisfaction improvement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Strategic recommendations for leveraging{" "}
                      <span className="text-primary font-bold">positive reviews</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Professional intelligence for informed business decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start Getting Professional Weekly Reports Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't manage reputation monitoring yourself. Our expert team provides{" "}
            <span className="text-primary font-bold">24/7 monitoring</span>,{" "}
            <span className="text-primary font-bold">urgent alerts</span>,{" "}
            <span className="text-primary font-bold">professional response suggestions</span> Ready to Copy and Send,
            and comprehensive weekly intelligence reports – all delivered automatically to your inbox.
          </p>

          <div className="bg-primary/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Done-For-You Process:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span>
                  Our experts begin <span className="text-primary font-bold">24/7 monitoring</span> immediately
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span>Professional analysis delivered within 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span>Weekly expert reports automatically delivered</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05"
              className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-bold shadow-lg rounded-md inline-flex items-center transition-colors"
            >
              <span className="get-started-text">Start Getting Reports Today</span>
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                View All Plans
              </Button>
            </Link>
          </div>

          <div className="text-sm text-muted-foreground space-y-2">
            <p>✓ No setup or management required - our experts handle everything</p>
            <p>✓ Cancel anytime - no long-term contracts</p>
            <p>
              ✓ <span className="text-primary font-bold">Professional response suggestions</span> Ready to Copy and Send
              and professional reports delivered weekly
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

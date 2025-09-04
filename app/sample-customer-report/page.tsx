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
              See exactly what your professional weekly reports look like and understand the valuable insights you'll
              receive every week.
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
              Every metric in your report provides actionable insights to help you protect and improve your business
              reputation
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
                  <strong>What you see:</strong> Your average star rating (3.5 stars in this example) with total review
                  count (78 reviews).
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> This is the first thing potential customers see. A drop of even 0.1
                  stars can significantly impact your conversion rates.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Track reputation trends over time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify when ratings start declining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Measure impact of reputation management efforts</span>
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
                  <strong>What you see:</strong> +8 reviews in the last 30 days, +1119 reviews since joining GuardX.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> Shows your review velocity and helps you understand seasonal patterns
                  or the impact of marketing campaigns.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Monitor review frequency changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify successful customer engagement periods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Track long-term reputation growth</span>
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
                  <strong>What you see:</strong> Distribution showing 31 five-star reviews, 14 four-star reviews, and so
                  on.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> Reveals the health of your reputation. Too many 1-2 star reviews
                  indicate serious issues that need immediate attention.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify patterns in customer satisfaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Spot potential fake review attacks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Focus improvement efforts where needed most</span>
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
                  <strong>What you see:</strong> Google (78 reviews, 3.5 rating), Facebook (0 reviews), and other
                  platforms.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> Shows which platforms drive your reputation and where you should
                  focus your review generation efforts.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Understand where customers leave reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify underutilized review platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Focus marketing efforts on high-impact platforms</span>
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
                  <strong>What you see:</strong> A trend line showing review volume over the past 12 months, with peaks
                  and valleys.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> Reveals seasonal patterns, the impact of marketing campaigns, and
                  helps predict future review volume.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify seasonal business patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Measure marketing campaign effectiveness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Plan review generation strategies</span>
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
                  <strong>What you see:</strong> Complete customer reviews with ratings, dates, names, and full text
                  comments.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong>Why it matters:</strong> The actual customer feedback that reveals specific strengths and
                  areas for improvement in your business.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Understand specific customer pain points</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identify common themes in feedback</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Use positive reviews for marketing content</span>
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
              These comprehensive reports provide the insights you need to protect and grow your business reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Save Valuable Time</h3>
                <p className="text-muted-foreground mb-4">
                  Stop manually checking multiple review platforms every week. Get everything consolidated in one
                  professional report.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• No more platform hopping</li>
                  <li>• Automated data collection</li>
                  <li>• Focus on running your business</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Track Reputation Improvements</h3>
                <p className="text-muted-foreground mb-4">
                  See the impact of your customer service improvements and marketing efforts with clear trend data.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Historical trend analysis</li>
                  <li>• Measure improvement efforts</li>
                  <li>• Identify successful strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Get Actionable Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Transform raw review data into specific actions you can take to improve customer satisfaction and
                  ratings.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Identify improvement opportunities</li>
                  <li>• Understand customer priorities</li>
                  <li>• Make data-driven decisions</li>
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
                <h4 className="text-lg font-semibold text-foreground mb-4">What You Get Every Week:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete reputation overview across all platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed analysis of new reviews and ratings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Trend analysis showing reputation changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Actionable insights for improvement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Business Benefits:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Catch reputation threats before they spread</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Improve customer satisfaction systematically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Use positive reviews for marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Make informed business decisions</span>
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
            Don't wait for a reputation crisis. Get the insights you need to protect and grow your business with
            comprehensive weekly reports on your reviews and ratings.
          </p>

          <div className="bg-primary/10 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">What Happens Next:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span>Sign up and we start monitoring immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span>Receive your first report within 7 days</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span>Get weekly insights delivered to your inbox</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://buy.stripe.com/fZu8wO1QM3ZF4rF9ExcIE00"
              target="_blank"
              rel="noopener noreferrer"
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
            <p>✓ No setup required - monitoring starts immediately</p>
            <p>✓ Cancel anytime - no long-term contracts</p>
            <p>✓ Professional reports delivered weekly to your inbox</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

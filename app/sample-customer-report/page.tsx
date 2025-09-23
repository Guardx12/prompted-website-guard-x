"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, BarChart3, Star, TrendingUp, CheckCircle, Clock } from "lucide-react"
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
              <span className="text-primary font-bold">negative/positive/all reviews</span>. You'll also receive comprehensive professional reports delivered weekly to your inbox – no dashboard login required.
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
                  We track your <span className="text-primary font-bold">star ratings</span> across all platforms (3.5 stars with 78
                  reviews in this example) and monitor for any reputation threats.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our <span className="text-primary font-bold">24/7 monitoring</span> catches rating drops immediately –
                  even a 0.1 star decline can cost you significant revenue, which is why we provide{" "}
                  <span className="text-primary font-bold">urgent alerts</span> the moment issues arise.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>
                      Continuous <span className="text-primary font-bold">review trends</span> monitoring
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
                  We monitor all <span className="text-primary font-bold">review sources</span> and report +8 reviews in the last 30
                  days, +1119 reviews since our <span className="text-primary font-bold">24/7 monitoring</span> began.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our team analyzes <span className="text-primary font-bold">review trends</span> to identify seasonal patterns and
                  campaign effectiveness, delivering insights you can act on immediately.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Monitoring of review frequency changes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identification of successful engagement periods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Long-term reputation growth analysis</span>
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
                  We break down your <span className="text-primary font-bold">star ratings</span> distribution and flag any concerning patterns for immediate attention.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our specialists identify reputation threats in real-time. Clusters of 1-2 star reviews trigger{" "}
                  <span className="text-primary font-bold">urgent alerts</span> so we can help you respond before
                  serious damage occurs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Analysis of customer satisfaction patterns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Detection of potential fake review attacks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
            <span className="text-primary font-bold">urgent alerts</span>, and comprehensive weekly intelligence reports
            – all delivered automatically to your inbox.
          </p>

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
            <p>✓ Professional reports delivered weekly</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Clock, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WhyThisWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why <span style={{ color: "#d4af37", fontWeight: "bold" }}>GuardX</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Proven professional reputation management that delivers real results for businesses like yours
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Science Behind Professional Reputation Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert approach is built on proven principles that protect and enhance your business reputation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>24/7 Professional Monitoring</span>
                </h3>
                <p className="text-muted-foreground">
                  Our expert team provides continuous surveillance of your brand across all digital platforms.
                  Professional oversight ensures no mention or review is missed that could impact your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>Instant Alerts</span>
                </h3>
                <p className="text-muted-foreground">
                  Our team provides instant notifications when new reviews or mentions appear. Professional guidance
                  helps you respond to issues within minutes, not days. Speed is critical in reputation management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Expert Data Analysis</h3>
                <p className="text-muted-foreground">
                  Our team provides informed decisions based on real data and{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>review trends</span>. See exactly what's
                  working and what needs attention with professional insights.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Building Customer Trust</h3>
                <p className="text-muted-foreground">
                  Professional reputation management builds customer confidence and trust, leading to increased sales
                  and loyalty. Our expert oversight ensures consistent brand messaging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Saving Time</h3>
                <p className="text-muted-foreground">
                  Our expert team and automated processes save hours of manual monitoring and response time every week.
                  Focus on your business while we handle reputation management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our systematic professional approach has helped thousands of businesses improve their online
                  reputation and bottom line with expert guidance and{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>AI-drafted responses</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Effective Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Power of Professional Reputation Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Why waiting for problems isn't a strategy – let our experts handle it
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">Expert Prevention is Better Than Cure</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our expert team monitors your reputation continuously, catching issues before they become major
                  problems. A single negative review is addressed quickly with{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>professional guidance</span>, preventing it
                  from snowballing into a reputation crisis.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Professional Speed Matters in Crisis Management
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  In the digital age, news travels fast. Our expert team and{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>instant alert system</span> ensures you can
                  respond to negative feedback within minutes, not hours or days. This professional rapid response
                  capability is crucial for damage control.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Expert Data Analysis Drives Better Decisions
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our comprehensive <span style={{ color: "#d4af37", fontWeight: "bold" }}>professional reports</span>{" "}
                  give you the insights needed to make strategic improvements to your business. Our experts help you see
                  patterns in customer feedback and address root causes, not just symptoms.
                </p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
            </div>
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
            Join thousands of businesses that trust GuardX to monitor, protect, and improve their online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Choose Your Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
        </div>
      </section>

      <Footer />
    </div>
  )
}

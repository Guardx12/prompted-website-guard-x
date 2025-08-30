import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BarChart3, TrendingUp, ArrowRight, ArrowDown, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How <span className="text-primary">GuardX</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional reputation management in four simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Choose Your Plan & Complete Onboarding
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Select the protection plan that fits your business needs and complete our streamlined onboarding form.
                This ensures we have all the information needed to begin monitoring your online reputation immediately.
              </p>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                2
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">GuardX Monitors Automatically</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Our advanced monitoring system immediately begins tracking your online reputation across all major
                platforms, review sites, and social media channels. No manual effort required from your team.
              </p>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Receive Secure Access & Alerts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                You receive secure login credentials to your personalized dashboard, along with automated alerts and
                comprehensive reports. Stay fully informed about your reputation status without any manual monitoring.
              </p>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Maintain & Improve Your Reputation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Use our professional tools, response templates, and expert support to effectively manage your online
                presence. Track improvements over time and maintain a strong, positive reputation that drives business
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Professional Process Summary</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clients complete the onboarding form and make their payment. We monitor their brand online and provide
              access to the dashboard, alerts, and reports automatically. Urgent issues are flagged and sent to the
              client promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why This Approach Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our systematic approach ensures nothing falls through the cracks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Never Miss Anything</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 monitoring ensures you catch every mention, review, and comment about your business.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Data-Driven Decisions</h3>
                <p className="text-muted-foreground text-sm">
                  Make informed decisions based on real data and trends, not guesswork.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Continuous Improvement</h3>
                <p className="text-muted-foreground text-sm">
                  Track progress over time and see the real impact of your reputation management efforts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Start protecting your business reputation today – choose your plan.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join businesses that trust GuardX to monitor, score, and protect their online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Get Started Today
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

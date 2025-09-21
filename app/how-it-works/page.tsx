import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BarChart3, TrendingUp, ArrowRight, ArrowDown, Bell, FileText } from "lucide-react"
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
              How <span style={{ color: "#d4af37", fontWeight: "bold" }}>GuardX</span> Protects Your Reputation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our expert team handles everything automatically, so you can focus on running your business while we
              protect your reputation
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
                <FileText className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Select the protection plan that fits your business needs. Our expert team gets you protected immediately
                with professional setup and monitoring.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Simple plan selection gets you{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>expert protection</span> quickly – our team
                  handles all the technical work, so you can focus on running your business.
                </p>
              </div>
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
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Team Monitors Your Reviews</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Our expert team tracks <span style={{ color: "#d4af37", fontWeight: "bold" }}>reviews</span> from
                Google, Yelp, Trustpilot, Facebook, and many more platforms with professional oversight.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Stay informed about what customers are saying with{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>expert analysis</span>, protect your brand, and
                  improve customer trust through professional management.
                </p>
              </div>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Receive Instant Alerts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Get <span style={{ color: "#d4af37", fontWeight: "bold" }}>urgent alerts</span> for negative reviews or
                any review type you request, managed by our expert team.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Our team helps you quickly address negative reviews with{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>professional response suggestions</span> before
                  they impact your reputation. Save time and reduce stress with expert guidance.
                </p>
              </div>
              <ArrowDown className="w-6 h-6 text-primary mt-8" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-10 h-10 text-primary" />
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-4">
                4
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Professional Weekly Reports</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                Receive clear, easy-to-read{" "}
                <span style={{ color: "#d4af37", fontWeight: "bold" }}>professional reports</span> showing your overall
                reputation, <span style={{ color: "#d4af37", fontWeight: "bold" }}>star ratings</span>, and{" "}
                <span style={{ color: "#d4af37", fontWeight: "bold" }}>review trends</span> with expert insights.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
                <p className="text-blue-800 font-medium text-sm">
                  <strong>Why This Helps You:</strong> Understand your business reputation at a glance with expert
                  analysis, track improvement, and leverage{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>positive reviews</span> to attract more
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Our Approach Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional <span style={{ color: "#d4af37", fontWeight: "bold" }}>done-for-you service</span> designed
              for busy business owners who want results without the hassle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Expert Team Management</h3>
                <p className="text-muted-foreground text-sm">
                  Our professional team handles everything automatically. No daily management required – we provide
                  expert oversight and guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Simple & Professional</h3>
                <p className="text-muted-foreground text-sm">
                  Easy-to-understand reports and alerts with expert interpretation. No technical knowledge required –
                  just professional results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Saves Time & Stress</h3>
                <p className="text-muted-foreground text-sm">
                  Focus on your business while our expert team protects your reputation{" "}
                  <span style={{ color: "#d4af37", fontWeight: "bold" }}>24/7</span> with professional monitoring and
                  management.
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
            Ready to Protect Your Business Reputation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join business owners who trust GuardX to monitor and protect their online reputation automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
              >
                Start Protecting Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Bell, Users, ArrowRight, Star, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Protect Your Reputation. <br />
              <span className="text-primary">Grow Your Business.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Get real-time alerts, actionable insights, and professional support to safeguard your brand's reputation.
            </p>
            <Link href="/pricing">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-xl font-semibold"
              >
                Choose Your Plan & Start Today
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Real-time monitoring & alerts</h3>
                <p className="text-muted-foreground">
                  Never miss a review or mention. Get instant notifications when your business is discussed online.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Automated reports & reputation scoring</h3>
                <p className="text-muted-foreground">
                  Track your reputation score and get detailed reports showing exactly how your business is perceived.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Dedicated support to protect your brand</h3>
                <p className="text-muted-foreground">
                  Our experts help you respond to reviews, manage crises, and build a stronger online presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Pricing Preview */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your business size</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">Starter</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-3xl font-bold text-primary">£149</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">Perfect for small businesses</p>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Basic monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Monthly reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Business */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Most Popular
                </Badge>
              </div>
              <Card className="bg-card border-2 border-primary/50 text-center">
                <CardHeader className="pb-4 pt-8">
                  <CardTitle className="text-xl font-bold text-foreground">Business</CardTitle>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <span className="text-3xl font-bold text-primary">£299</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">For growing businesses</p>
                  <ul className="space-y-2 text-sm text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Advanced monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Real-time alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Phone & email support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Growth */}
            <Card className="bg-card border-border text-center">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground">Growth</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-3xl font-bold text-primary">£899</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4">Up to 5 locations</p>
                <ul className="space-y-2 text-sm text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Multi-location dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Automated support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg bg-transparent"
              >
                See All Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Businesses Worldwide</h2>
            <p className="text-lg text-muted-foreground">
              Join hundreds of companies protecting their reputation with GuardX
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial placeholders */}
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "GuardX has transformed how we manage our online reputation. The real-time alerts and professional
                    support have been invaluable."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Business Owner</p>
                      <p className="text-sm text-muted-foreground">Local Restaurant Chain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Protect Your Business Reputation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start monitoring, get alerts, and protect your brand today
          </p>
          <Link href="/pricing">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-xl font-semibold"
            >
              Choose Your Plan & Start Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}


<p>Built using modern, professional technology for speed, reliability, and long-term performance.</p>

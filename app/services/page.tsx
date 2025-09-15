import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  BarChart3,
  Eye,
  Zap,
  ArrowRight,
  Bell,
  MessageSquare,
  Target,
  FileText,
  Headphones,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-[#d4af37] font-bold">Done-For-You Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete hands-off reputation management that works while you sleep. We monitor, alert, and report — all
              delivered straight to your inbox with zero effort required from you.
            </p>
          </div>
        </div>
      </section>

      {/* Features & Services */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Done-For-You Protection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything handled automatically — no dashboards to check, no responses to write, no reports to generate
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">24/7 monitoring of all platforms</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We automatically track your reputation across Google, Trustpilot, Facebook, Yelp, and 100+ other
                        review platforms. Complete coverage with zero effort from you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">Instant alerts for urgent reviews</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Get immediate email alerts the moment negative or urgent reviews appear. Know about issues
                        instantly so you can respond before they damage your reputation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">AI-drafted responses Ready to Copy and Send</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Professional review responses crafted by AI and delivered to your email. Copy and paste the
                        responses to your review platforms — no logging into dashboards or writing responses yourself.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">Weekly PDF reports to your inbox</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Professional weekly reports delivered as PDFs straight to your email. Clear insights on your
                        reputation health, new reviews, and trends — no dashboard required.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">Fully hands-off service</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Set it and forget it. Once activated, everything runs automatically in the background. You only
                        hear from us when there's something important or your weekly report arrives.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        <span className="text-[#d4af37] font-bold">Complete brand protection</span>
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We monitor every mention of your business across the web. Stay protected from reputation threats
                        while you focus entirely on running your business.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support & Consultation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Support System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Support System</h4>
                      <p className="text-muted-foreground text-sm">
                        Automated reputation management with email support. Priority assistance ensures fast responses
                        when urgent issues arise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Priority support</h4>
                      <p className="text-muted-foreground text-sm">
                        24/7 priority support for urgent reputation issues. Fast response times when your reputation is
                        at stake.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How GuardX Works</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our proven 4-step process to protect and enhance your reputation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Assessment",
                    description: "Automated scanning of your online reputation to identify areas for improvement.",
                    icon: Eye,
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description: "AI-driven framework designed to enhance your reputation.",
                    icon: BarChart3,
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "Automated monitoring, alerts, and content responses running in real time.",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Optimization",
                    description: "Continuous updates and improvements based on incoming data.",
                    icon: TrendingUp,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">{item.step}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries We Serve */}
          <section className="py-20 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Specialized reputation management solutions for various industries
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  "Healthcare",
                  "Legal Services",
                  "Real Estate",
                  "Hospitality",
                  "E-commerce",
                  "Professional Services",
                  "Automotive",
                  "Education",
                  "Finance",
                  "Technology",
                  "Retail",
                  "Non-Profit",
                ].map((industry, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-colors text-center"
                  >
                    <CardContent className="p-4">
                      <p className="text-sm font-medium text-foreground">{industry}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready for Hands-Off Protection?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join businesses who trust our fully automated reputation management. Set it up once, then focus on
                running your business while we handle everything else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/pricing">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                  >
                    Start Your Done-For-You Service
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
        </div>
      </section>

      <Footer />
    </div>
  )
}

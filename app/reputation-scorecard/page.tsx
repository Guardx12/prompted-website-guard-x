"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, BarChart3, CheckCircle } from "lucide-react"

export default function ReputationScorecardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="text-center py-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get Your Free <span className="text-primary">Reputation Scorecard</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Understand your online reputation and see how GuardX can help you improve it.
            </p>

            <div className="bg-card border border-border rounded-lg p-8 mb-12 max-w-2xl mx-auto">
              <p className="text-lg text-foreground mb-6 font-medium">
                Please email the following to <span className="text-primary font-bold">info@guardxnetwork.com</span>:
              </p>

              <ul className="space-y-3 text-lg text-muted-foreground mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Business Name</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Business Address</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    The word <span className="text-primary font-bold">SCORECARD</span>
                  </span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground font-medium">
                We'll generate your free scorecard and send it directly to you.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">Monitor your reviews, mentions, and ratings in real-time.</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Weekly PDF Reports</h3>
                  <p className="text-muted-foreground">
                    Professional weekly PDF reports summarizing your online reputation trends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

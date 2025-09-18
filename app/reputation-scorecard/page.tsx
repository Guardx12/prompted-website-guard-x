"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Shield, Star, TrendingUp } from "lucide-react"

export default function ReputationScorecardPage() {
  useEffect(() => {
    // Dynamically load the Reviewability widget script
    const script = document.createElement("script")
    script.src = "https://guardx.reviewability.com/reputation-scorecard/widget.js" // Replace with actual widget script if different
    script.async = true
    document.body.appendChild(script)

    // Optional: cleanup
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Get Your Free <span className="text-primary">Reputation Scorecard</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Every day, reviews, mentions, and ratings shape your business's reputation — and a single negative
              review can cost you customers. GuardX is your 24/7 reputation watchdog.
            </p>
          </div>

          {/* Widget Container */}
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto mb-12">
            <div className="createLeadContainer" data-url="https://guardx.reviewability.com/reputation-scorecard/lead/create-form?hash=nTk6nMzY0qOoTZ%2BK4r0csrkU7CpuqbJpPOzGHKInGXUyb3ckOXyIooL8kKEGuAJPclFHdjZhNGI2ODBIcWk5alRqTGo4QT09">
              {/* The widget will inject here */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

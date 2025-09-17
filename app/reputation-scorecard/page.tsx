"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, Shield, Star, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"
import Script from "next/script"

export default function ReputationScorecardPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [scriptsLoaded, setScriptsLoaded] = useState(false)

  useEffect(() => {
    // Listen for form submission from the embedded widget
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "leadFormSubmitted") {
        setIsSubmitted(true)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Script
        src="https://cdn.reviewability.com/js/widget/reputation-scorecard/create-lead.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptsLoaded(true)}
      />

      <link
        rel="stylesheet"
        href="https://cdn.reviewability.com/css/app/widget/create-lead/lead-form.min.css"
        type="text/css"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Get Your Free <span className="text-primary">Reputation Scorecard</span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Every day, reviews, mentions, and ratings shape your business's reputation — and a single negative
                review can cost you customers. GuardX is your 24/7 reputation watchdog, giving you complete control and
                peace of mind. With GuardX, you get:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Real-time monitoring alerts</span>
                    <p className="text-sm text-muted-foreground">so you never miss a review or mention.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">Weekly PDF review reports</span>
                    <p className="text-sm text-muted-foreground">summarizing your online reputation and trends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-foreground">AI-drafted review responses</span>
                    <p className="text-sm text-muted-foreground">ready to copy and send instantly, saving you hours.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                GuardX makes managing your reputation effortless. Take back control, protect your brand, and respond
                faster than ever before. Complete the short form below to receive your free personalized Reputation
                Scorecard today.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Monitor</h3>
                <p className="text-sm text-muted-foreground">Our experts catch threats before they spread</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Alert</h3>
                <p className="text-sm text-muted-foreground">You get instant notifications of issues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">We Protect</h3>
                <p className="text-sm text-muted-foreground">Expert defense of your reputation 24/7</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Get Your Free Scorecard</h2>
                  <p className="text-muted-foreground">
                    Complete the form below to receive your personalized reputation analysis
                  </p>
                </div>

                {scriptsLoaded ? (
                  <div
                    className="createLeadContainer"
                    data-url="https://guardx.reviewability.com/reputation-scorecard/lead/create-form?hash=FnJkyz/EyKcAKiGxJziQje4gNkxn/eX%2BvEKU8Am2ADmV9mlT5ONLl3G3QK%2BZ962rOHZ6bzlhVDUrWTQzRjFEU2d0ZkMxZz09"
                  ></div>
                ) : (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="text-muted-foreground mt-4">Loading form...</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Thanks — check your inbox for your Reputation Scorecard!
                </h2>
                <p className="text-muted-foreground">
                  Your personalized scorecard will arrive within the next few minutes.
                </p>
              </div>
            )}
          </div>

          {/* Additional Benefits Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary/5 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Instant Impact</h3>
              </div>
              <p className="text-muted-foreground">
                See exactly where your reputation stands across all major platforms and get actionable insights to
                improve your ratings immediately.
              </p>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Expert Analysis</h3>
              </div>
              <p className="text-muted-foreground">
                Our reputation experts analyze your current standing and provide personalized recommendations for
                protecting and improving your online presence.
              </p>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

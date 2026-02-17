"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // Here you could verify the session with your backend if needed
      setLoading(false)

      // Fire Meta Pixel Purchase event when payment is confirmed
      if (typeof window !== "undefined" && (window as any).fbq) {
        ;(window as any).fbq("track", "Purchase", {
          value: 99.0,
          currency: "GBP",
        })
      }
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Processing your payment...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to <span className="text-primary">GuardX!</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Your payment was successful and your reputation protection is now active.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">What happens next?</h2>
            <ul className="text-left space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your monitoring starts immediately across all major platforms</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>You'll receive instant alerts for any negative reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Your first weekly branded report will arrive within 7 days</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Our team will contact you within 24 hours to confirm setup</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Session ID: {sessionId}</p>

            <Link href="/">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Return to Homepage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

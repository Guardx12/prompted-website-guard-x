"use client"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"

interface FreeTrialSectionProps {
  variant?: "hero" | "pricing" | "features"
  className?: string
}

export function FreeTrialSection({ variant = "hero", className = "" }: FreeTrialSectionProps) {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Free Trial")
    const email = "info@guardxnetwork.com"
    window.open(`mailto:${email}?subject=${subject}`, "_blank")
  }

  const isHero = variant === "hero"
  const isPricing = variant === "pricing"
  const isFeatures = variant === "features"

  return (
    <div className={`${className}`}>
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg">
        <CardContent className="p-6 sm:p-8 text-center">
          <h3 className={`font-bold text-foreground mb-3 ${isHero ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
            Protect Your Business Reputation — Free 7-Day Trial
          </h3>

          <p className={`text-muted-foreground mb-6 max-w-2xl mx-auto ${isHero ? "text-lg" : "text-base"}`}>
            Instant alerts, weekly reports, and complete peace of mind. No login required — just results.
          </p>

          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Trial includes:</strong> Google and Facebook review monitoring only. Full service monitors all
              major review platforms.
            </p>
          </div>

          <div className="mb-6">
            <button
              onClick={handleEmailClick}
              className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary/80 px-8 py-4 text-lg font-bold shadow-xl rounded-lg inline-flex items-center transition-all duration-300 transform hover:scale-105 border-2 border-primary-foreground/20"
            >
              <Mail className="mr-3 w-5 h-5" />
              <span>Email for Free Trial</span>
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong className="text-foreground">Email info@guardxnetwork.com</strong>
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              with the subject line <strong className="text-primary">'Free Trial'</strong> to get started!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

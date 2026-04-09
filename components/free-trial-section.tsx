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
            Get 24/7 monitoring and instant alerts for reviews on Google, Facebook, Yelp, and 100+ platforms. No login
            required — trial starts immediately via email.
          </p>

          <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Free 7-Day Trial includes:</strong> 24/7 monitoring, instant alerts for Google, Facebook, Yelp &
              100+ platforms, sample review reports, and complete peace of mind for business owners.
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
              with the subject line <strong className="text-primary">'Free Trial'</strong> — onboarding link sent
              instantly!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

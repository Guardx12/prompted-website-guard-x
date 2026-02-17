import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewValueCalculator } from "@/components/review-value-calculator"
import { AnimatedPageTitle } from "@/components/animated-page-title"

export const metadata: Metadata = {
  title: "Google Visibility Calculator | GuardX",
  description: "Estimate what improved Google visibility is worth to your business. See the revenue impact of being chosen more often in local search.",
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Google Visibility" suffix="Calculator" className="mb-4" />
            <p className="text-lg sm:text-xl text-[#94a3b8] text-pretty">
              Estimate what being chosen more often on Google is worth to your business.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <ReviewValueCalculator />
      </main>

      <Footer />
    </div>
  )
}

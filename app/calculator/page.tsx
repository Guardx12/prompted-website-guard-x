import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewValueCalculator } from "@/components/review-value-calculator"

export const metadata: Metadata = {
  title: "Google Visibility Calculator | GuardX",
  description: "Estimate what improved Google visibility is worth to your business. See the revenue impact of being chosen more often in local search.",
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance text-primary">
              Google Visibility Calculator
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 text-pretty">
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

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">GuardX</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Please fill out the onboarding form below to get started.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="mt-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfovKqszGwkMe5k2o9dr_JHnevlgeG74Be-oHWa8-0x0k-hAw/viewform?embedded=true"
              width="100%"
              height="5215"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Customer Onboarding Form"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


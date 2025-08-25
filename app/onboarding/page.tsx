"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

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
            <p className="text-xl text-muted-foreground">Please fill out the onboarding form below to get started.</p>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

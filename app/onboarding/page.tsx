"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">GuardX</span> – Complete Your Onboarding
            </h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your payment! Please fill out this form to complete your onboarding.
            </p>
          </div>

          {/* Google Form Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSemsdt7Q2AZbYcoP5UueGcJqe6_t2ZiiUij1T1e_C_H16j1Qw/viewform?embedded=true"
                width="640"
                height="2324"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="GuardX Customer Onboarding Form"
                className="w-full border border-border rounded-lg shadow-lg"
                style={{
                  minHeight: "2324px",
                  maxWidth: "100%",
                }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-17521993303/17521993303'});
          `,
        }}
      />
    </div>
  )
}

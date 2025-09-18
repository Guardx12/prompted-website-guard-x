"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function ReputationScorecardPage() {
  useEffect(() => {
    // Initialize the GatherUp widget if it exists
    if (window && (window as any).Reviewability) {
      (window as any).Reviewability.createLead?.();
    }
  }, []);

  return (
    <>
      <Head>
        <title>GuardX - Protecting Your Reputation</title>
        <meta
          name="description"
          content="Professional reputation management services to protect and enhance your online presence."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.reviewability.com/css/app/widget/create-lead/lead-form.min.css"
        />
      </Head>

      {/* GatherUp Widget Script */}
      <Script
        src="https://cdn.reviewability.com/js/widget/reputation-scorecard/create-lead.min.js"
        strategy="afterInteractive"
      />

      <main className="min-h-screen bg-background text-foreground antialiased px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Your Free <span className="text-primary">Reputation Scorecard</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Every day, reviews, mentions, and ratings shape your business's
            reputation — and a single negative review can cost you customers.
            GuardX is your 24/7 reputation watchdog.
          </p>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-sm text-muted-foreground">
              Never miss a review or mention.
            </p>
          </div>
          <div className="p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Weekly PDF Reports</h3>
            <p className="text-sm text-muted-foreground">
              Summarizing your online reputation trends.
            </p>
          </div>
          <div className="p-6 bg-primary/5 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-drafted Responses</h3>
            <p className="text-sm text-muted-foreground">
              Ready to copy and send instantly.
            </p>
          </div>
        </section>

        {/* Lead Form Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <div
            className="createLeadContainer"
            data-url="https://guardx.reviewability.com/reputation-scorecard/lead/create-form?hash=BeKPT6LgF%2B83nuq9vYpK/4Otr3g2vxZPMcrlNuYFUBw3/TXJu%2BJEDQ34X0Qbs/T%2BNGdOekRrcHR3SHAwRmY4OU5OU29RQT09"
          ></div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
          © 2025 GuardX. All rights reserved.
        </footer>

        {/* Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Open chat support"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-circle w-6 h-6"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}

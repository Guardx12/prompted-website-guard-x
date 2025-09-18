'use client';
import React from 'react';
import Head from 'next/head';

export default function ReputationScorecardPage() {
  return (
    <>
      <Head>
        <title>GuardX - Free Reputation Scorecard</title>
        <meta
          name="description"
          content="Request your free GuardX Reputation Scorecard and monitor your online reputation."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl text-center py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Your Free <span className="text-primary">Reputation Scorecard</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Understand your online reputation and take control before it impacts your business.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-semibold">
            Please email your <strong>Business Name</strong>, <strong>Business Address</strong>, and the word <strong>SCORECARD</strong> to <strong>info@guardxnetwork.com</strong> to request your free scorecard.
          </p>
        </section>

        <section className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-center">
          <div className="p-6 bg-primary/5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-sm text-muted-foreground">
              Monitor your reviews, mentions, and ratings in real-time.
            </p>
          </div>

          <div className="p-6 bg-primary/5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Negative Alerts</h3>
            <p className="text-sm text-muted-foreground">
              Identify negative mentions before they impact your business.
            </p>
          </div>

          <div className="p-6 bg-primary/5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">AI-generated Responses</h3>
            <p className="text-sm text-muted-foreground">
              Ready for you to copy and send immediately.
            </p>
          </div>

          <div className="p-6 bg-primary/5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">PDF Reports</h3>
            <p className="text-sm text-muted-foreground">
              Professional weekly PDF reports you can use instantly.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
        © 2025 GuardX. All rights reserved.
      </footer>
    </>
  );
}

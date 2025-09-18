'use client';
import React from 'react';
import Head from 'next/head';

export default function ReputationScorecardPage() {
  return (
    <>
      <Head>
        <title>GuardX - Reputation Scorecard Coming Soon</title>
        <meta
          name="description"
          content="The GuardX Reputation Scorecard page is coming soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Get Your Free <span className="text-primary">Reputation Scorecard</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Coming Soon
        </p>
      </main>
    </>
  );
}

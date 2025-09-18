'use client';
import React from 'react';
import Head from 'next/head';

export default function ReputationScorecardPage() {
  return (
    <>
      <Head>
        <title>GuardX - Get Your Free Reputation Scorecard</title>
        <meta
          name="description"
          content="Understand and improve your online reputation with a free scorecard from GuardX."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Protect & Improve Your Online Reputation
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Every review, rating, and mention shapes how customers see your business. A single negative review can cost you valuable customers—but GuardX helps you stay ahead.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Get your <strong>free Reputation Scorecard</strong> today!
          </p>

          <a
            href="mailto:info@guardxnetwork.com?subject=Scorecard Request&body=Please%20send%20me%20my%20free%20SCORECARD"
            className="inline-block bg-primary text-background font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-primary/90 transition-colors mb-12"
          >
            Email the word <strong>SCORECARD</strong> to info@guardxnetwork.com
          </a>

          <div className="bg-primary/5 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why GuardX?</h2>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Monitor your reviews, mentions, and ratings in real-time.</li>
              <li>Identify negative mentions before they impact your business.</li>
              <li>Receive actionable insights to improve your online reputation.</li>
              <li>AI-drafted responses ready for you to use immediately.</li>
              <li>Professional, branded reports you can implement instantly.</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

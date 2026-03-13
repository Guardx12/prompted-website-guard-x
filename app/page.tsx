"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, MessageSquare, PhoneCall, Clock3, CheckCircle2, Star } from "lucide-react"

function PromptBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="text-white font-semibold">Meet George</p>
            <p className="text-sm text-[#cbd5e1]">
              Ask George how he can answer customer questions and capture enquiries for you 24/7.
            </p>
          </div>
          <Link href="/meet-george" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white hover:bg-blue-600">
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white">
      <Navigation />

      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                <Bot className="h-4 w-4" />
                Websites powered by George
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Turn your website into a 24/7 salesperson
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#94a3b8]">
                Meet George — an AI assistant that answers customer questions, keeps visitors engaged, and captures enquiries automatically.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/meet-george" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-lg font-bold text-white hover:bg-blue-600">
                  Meet George <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-bold text-white hover:bg-white/10">
                  £99/month pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-2xl border border-blue-500/20 bg-[#0f172a] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">What George does</p>
                <div className="mt-6 space-y-5">
                  {[
                    ["Answers customer questions instantly", MessageSquare],
                    ["Captures enquiries automatically", PhoneCall],
                    ["Works day and night without missing a lead", Clock3],
                  ].map(([label, Icon]) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="rounded-xl bg-blue-500/10 p-3">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{label}</p>
                        <p className="mt-1 text-sm text-[#94a3b8]">
                          George helps stop visitors quietly leaving your website without asking the questions that matter.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-[#cbd5e1]">Ask George how he can answer customer questions and capture enquiries for you 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Most websites lose customers</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#94a3b8]">
              Visitors land on your website, have a question, and leave because nobody answers them. George fixes that.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Do you offer this service?",
              "How much does it cost?",
              "Can somebody get back to me?",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-lg text-white">{item}</p>
                <p className="mt-3 text-sm text-[#94a3b8]">If nobody answers quickly, that visitor often leaves and finds someone else.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">George in action</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Alderwood Ponds</h2>
            <p className="mt-4 text-lg text-[#94a3b8]">
              George answers visitor questions about fishing, camping, bookings and facilities automatically — giving people answers quickly instead of losing them.
            </p>
            <div className="mt-8">
              <a href="https://www.alderwoodponds.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-white hover:bg-white/10">
                See Alderwood Ponds <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Simple pricing</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#94a3b8]">Everything centred around George, kept simple.</p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-white/5 p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">George Website</p>
                <h3 className="mt-2 text-3xl font-bold text-white">£99/month</h3>
              </div>
              <Link href="/meet-george" className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-600">
                Try George
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Custom website build",
                "George AI assistant",
                "Hosting included",
                "Enquiry capture",
                "Ongoing updates",
                "Business-specific setup",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-400" />
                  <span className="text-[#e2e8f0]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-10">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-blue-500/10 px-4 py-2 text-blue-300">
            <Star className="h-4 w-4" />
            Review generation still available
          </div>
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Need more Google reviews?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#94a3b8]">
            Review Generation is still available as a separate service. We’ve just moved George to the front because that’s the main focus right now.
          </p>
          <div className="mt-8">
            <Link href="/review-generation" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-white hover:bg-white/10">
              Learn about review generation <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <PromptBar />
    </main>
  )
}

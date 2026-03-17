import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react"

const starterIncluded = [
  "George trained on your business",
  "Voice conversations with website visitors",
  "Answers questions about services and pricing",
  "Captures enquiries automatically",
  "Up to 100 conversations per month",
]

const standardIncluded = [
  "Everything in Starter",
  "Up to 500 conversations per month",
  "Suitable for businesses expecting regular website enquiries",
]

const growthIncluded = [
  "Everything in Standard",
  "Up to 1,500 conversations per month",
  "Built for busier businesses with higher enquiry potential",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              George pricing
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple monthly pricing for George.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] sm:text-xl">
              George is your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Starter</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold">£49</span>
                <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
              </div>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Designed for smaller businesses with lighter website traffic.
              </p>
              <ul className="mt-6 space-y-3">
                {starterIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-[30px] border-2 border-[#1D4ED8] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:p-8">
              <div className="absolute -top-3 left-6 inline-flex rounded-full bg-[#FBBF24] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                Most Popular
              </div>
              <p className="pt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George Standard</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold">£99</span>
                <span className="pb-1 text-lg text-[#DBEAFE]">/ month per location</span>
              </div>
              <p className="mt-4 text-base leading-7 text-[#DBEAFE]">
                Ideal for most small to medium businesses.
              </p>
              <ul className="mt-6 space-y-3">
                {standardIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#BFDBFE]" />
                    <span className="text-sm leading-6 text-[#DBEAFE]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Growth</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold">£149</span>
                <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
              </div>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                For busier businesses with higher enquiry potential.
              </p>
              <ul className="mt-6 space-y-3">
                {growthIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[26px] border border-[#DBEAFE] bg-[#F8FBFF] p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F172A]">Custom plans</h2>
            <p className="mt-3 text-base leading-7 text-[#475569]">
              Businesses with multiple locations or requiring more than 1,500 conversations per month should request a custom quote.
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/meet-george"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]"
              >
                <Image src="/george-logo.png" alt="George" width={38} height={38} className="h-8 w-8 rounded-md" /> <span>Meet George</span> <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-bold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
              >
                Request a custom quote
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <MessageSquare className="h-9 w-9 text-[#1D4ED8]" />
                <h2 className="mt-4 text-2xl font-bold">What George does</h2>
                <p className="mt-4 text-sm leading-7 text-[#475569]">
                  George talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">George AI Assistant</p>
                <p className="mt-3 text-base leading-7 text-[#475569]">
                  Your conversational digital member of staff for your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

<section className="py-16">
  <h2 className="text-2xl font-semibold mb-4 text-center">For attractions and high-traffic websites</h2>
  <p className="text-center text-muted-foreground mb-6">
    For businesses with higher visitor numbers, where even a small increase in conversions can result in significant additional revenue.
  </p>
  <div className="text-center">
    <h3 className="text-xl font-semibold">George Pro (Attractions)</h3>
    <p className="mt-2">£149–£299/month depending on setup</p>
    <ul className="mt-4 space-y-2 text-muted-foreground">
      <li>Higher conversation capacity</li>
      <li>Custom training on your business</li>
      <li>Optimised enquiry capture</li>
      <li>Ongoing improvements</li>
    </ul>
  </div>
</section>

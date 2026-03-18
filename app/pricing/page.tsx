import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react"
import { ValueCallout } from "@/components/value-callout"

const businessIncluded = [
  "George trained on your business and offer",
  "Voice conversations with website visitors",
  "Answers questions about services, pricing, and FAQs",
  "Captures enquiries automatically",
  "Designed to help turn more of your traffic into customers",
]

const growthIncluded = [
  "Stronger fit for busier businesses",
  "Handles repeated customer questions automatically",
  "Helps make your website feel more responsive and useful",
  "Built to pay for itself through improved conversion",
]

const attractionsIncluded = [
  "Custom training on your attraction, venue, or business",
  "Visitor-focused conversations designed to increase bookings",
  "Answers questions about facilities, opening times, what is on, and pricing",
  "Optimised enquiry and booking capture",
  "Ongoing improvements as your offer evolves",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              <Sparkles className="h-4 w-4" />
              Getting started with George
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Start with a 7-day free trial</h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] sm:text-xl">
              George is your conversational digital member of staff for your website — answering questions, explaining services, and helping turn more of your existing website traffic into enquiries or bookings.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <ValueCallout
              tone="dark"
              eyebrow="Value"
              title="Less than a part-time staff member for a single day — and George works 24/7."
              body="George handles the early questions, keeps visitors engaged, and helps them move toward an enquiry even when you are busy or closed."
            />
            <ValueCallout
              tone="blue"
              eyebrow="Revenue"
              title="One extra customer can often pay for George."
              body="For many businesses, recovering just one missed opportunity in a month can cover the cost."
            />
            <ValueCallout
              tone="gold"
              eyebrow="High-traffic sites"
              title="For many attractions, just a handful of extra bookings can cover the cost."
              body="That is why George should feel like a conversion tool, not just another software fee."
            />
          </div>

          <div className="mt-10 rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0F172A]">George for businesses</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#475569]">
              George works best for businesses that want answers delivered instantly, enquiries captured automatically, and more visitors moved toward becoming real opportunities.
            </p>

            <div className="mt-8 rounded-[30px] border-2 border-[#1D4ED8] bg-[linear-gradient(135deg,#ffffff_0%,#f8fbff_42%,#eff6ff_100%)] p-6 shadow-[0_24px_80px_rgba(29,78,216,0.10)] sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Built for everyday business enquiries</p>
                  <h3 className="mt-3 text-3xl font-bold text-[#0F172A]">One strong setup that proves its value fast</h3>
                  <p className="mt-4 text-base leading-7 text-[#475569]">George is designed for serious businesses that want a website that answers faster, feels more useful, and captures more opportunities before visitors disappear.</p>
                  <div className="mt-5 rounded-3xl border border-[#DBEAFE] bg-white p-4 shadow-sm">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Why this matters</p>
                    <p className="mt-2 text-base font-bold leading-7 text-[#0F172A]">This is for businesses that want George working properly on real traffic and proving his value quickly.</p>
                  </div>
                </div>
                <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">What makes George worth it</p>
                  <h4 className="mt-3 text-2xl font-bold">George pays attention to the visitors you are losing</h4>
                  <p className="mt-3 text-sm leading-6 text-[#DBEAFE]">For businesses where missed enquiries mean missed revenue, even a small lift in conversion can make George very easy to justify.</p>
                  <p className="mt-4 text-sm font-bold leading-6 text-white">You are paying for a website that keeps visitors engaged, answers faster, and moves more of them toward becoming customers.</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {businessIncluded.concat(growthIncluded).map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0F172A]">For attractions and high-traffic websites</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#475569]">
              For attractions, venues, and high-traffic websites where even a small increase in conversions can result in significant additional revenue.
            </p>

            <div className="mt-6 rounded-[30px] border border-[#BFDBFE] bg-white p-6 shadow-sm sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George for attractions</p>
                  <h3 className="mt-3 text-3xl font-bold text-[#0F172A]">Attractions and high-traffic setups</h3>
                  <p className="mt-4 text-base leading-7 text-[#475569]">
                    Suitable for farm parks, family attractions, venues, and businesses where a small lift in conversions can lead to meaningful extra revenue.
                  </p>
                  <div className="mt-5 rounded-3xl border border-[#BFDBFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-4 shadow-sm">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Why attractions pay attention</p>
                    <p className="mt-2 text-lg font-extrabold leading-7 text-[#0F172A]">For many attractions, just a handful of additional bookings per month can cover the cost very quickly.</p>
                  </div>
                </div>
                <div>
                  <ul className="space-y-3">
                    {attractionsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                        <span className="text-sm leading-6 text-[#475569]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-white">
                  Try George free for 7 days
                </Link>
                <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
                  See George in action
                </Link>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#475569]">
              George is designed to pay for itself quickly by helping you capture more enquiries and customers. Exact setup depends on your business, traffic, and how much you want George to handle, but the first step is simply to try it free for 7 days.
            </p>
          </div>

          <div className="mt-8 rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <MessageSquare className="h-9 w-9 text-[#1D4ED8]" />
                <h2 className="mt-4 text-2xl font-bold">What George does</h2>
                <p className="mt-4 text-sm leading-7 text-[#475569]">
                  George talks to website visitors, answers questions about services, pricing, facilities, and FAQs, guides visitors toward becoming enquiries or bookings, and captures details automatically.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1D4ED8]">George</p>
                <p className="mt-3 text-base leading-7 text-[#475569]">Your conversational digital member of staff for businesses, attractions, and visitor-focused websites.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[26px] border border-[#DBEAFE] bg-[#F8FBFF] p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F172A]">Want to see how it would work on your site?</h2>
            <p className="mt-3 text-base leading-7 text-[#475569]">The easiest way to understand George is to try him on your website with your real visitors. That is why the first step is a 7-day free trial.</p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link href="/meet-george" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-bold text-white">
                <Image src="/george-logo.png" alt="George" width={38} height={38} className="h-8 w-8 rounded-md" />
                <span>Meet George</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
                Start your free trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

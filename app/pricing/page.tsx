import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from "lucide-react"
import { ValueCallout } from "@/components/value-callout"

const standardIncluded = [
  "George trained on your business",
  "Voice conversations with website visitors",
  "Answers questions about services and pricing",
  "Captures enquiries automatically",
  "Designed for typical business website traffic",
]

const growthIncluded = [
  "Everything in Standard",
  "Designed for regular enquiry volume",
  "A stronger fit for busier businesses",
]

const proIncluded = [
  "Everything in Growth",
  "Designed for higher website traffic",
  "For businesses where converting visitors is critical",
]

const attractionsIncluded = [
  "Higher usage capacity for busy websites",
  "Custom training on your attraction, venue, or business",
  "Visitor-focused conversations designed to increase bookings",
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
              George pricing
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Simple monthly pricing for George</h1>
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
            <h2 className="text-2xl font-bold text-[#0F172A]">For small to medium businesses</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#475569]">
              For businesses that want George handling customer questions, explaining services and pricing, and helping turn visitors into enquiries.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Standard</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£99</span>
                  <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
                </div>
                <p className="mt-4 text-base leading-7 text-[#475569]">For businesses that want to capture more enquiries and respond instantly to visitors.</p>
                <div className="mt-5 rounded-3xl border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-4 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Strong starting point</p>
                  <p className="mt-2 text-base font-bold leading-7 text-[#0F172A]">This is the minimum level for serious businesses that want George working properly.</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {standardIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                      <span className="text-sm leading-6 text-[#475569]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-[30px] border-2 border-[#1D4ED8] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:p-8">
                <div className="absolute -top-3 left-6 inline-flex rounded-full bg-[#FBBF24] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                  Most popular
                </div>
                <p className="pt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George Growth</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£149</span>
                  <span className="pb-1 text-lg text-[#DBEAFE]">/ month per location</span>
                </div>
                <p className="mt-4 text-base leading-7 text-[#DBEAFE]">For busier businesses where missed enquiries mean missed revenue.</p>
                <div className="mt-5 rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#BFDBFE]">Most businesses fall within this range</p>
                  <p className="mt-2 text-base font-bold leading-7 text-white">For many businesses, the value of one extra customer makes this easy to justify.</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {growthIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#BFDBFE]" />
                      <span className="text-sm leading-6 text-[#DBEAFE]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Pro</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£199</span>
                  <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
                </div>
                <p className="mt-4 text-base leading-7 text-[#475569]">For higher-traffic businesses where converting visitors into customers is critical.</p>
                <div className="mt-5 rounded-3xl border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-4 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Higher-value traffic</p>
                  <p className="mt-2 text-base font-bold leading-7 text-[#0F172A]">When more visitors are asking questions, George earns his keep very quickly.</p>
                </div>
                <ul className="mt-6 space-y-3">
                  {proIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                      <span className="text-sm leading-6 text-[#475569]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Pro+ (Attractions)</p>
                  <h3 className="mt-3 text-3xl font-bold text-[#0F172A]">Attractions and high-traffic setups</h3>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-5xl font-extrabold">£199–£499</span>
                    <span className="pb-1 text-lg text-[#475569]">/ month depending on setup</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#475569]">
                    Suitable for farm parks, family attractions, venues, and businesses where a small lift in conversions can lead to meaningful extra revenue.
                  </p>
                  <div className="mt-5 rounded-3xl border border-[#BFDBFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-4 shadow-sm">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Why attractions pay attention</p>
                    <p className="mt-2 text-lg font-extrabold leading-7 text-[#0F172A]">For many attractions, just a handful of additional bookings per month can cover the cost.</p>
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
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]">
                  Request a tailored demo
                </Link>
                <Link href="/meet-george" className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-bold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]">
                  See George in action
                </Link>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#475569]">
              Pricing is based on setup and usage requirements. Most businesses fall between £99 and £199 per month, and attractions or high-traffic websites usually sit between £199 and £499.
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
            <h2 className="text-2xl font-bold text-[#0F172A]">Need something custom?</h2>
            <p className="mt-3 text-base leading-7 text-[#475569]">Businesses with multiple locations, higher usage requirements, or more complex setups can request a tailored quote.</p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row">
              <Link href="/meet-george" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]">
                <Image src="/george-logo.png" alt="George" width={38} height={38} className="h-8 w-8 rounded-md" />
                <span>Meet George</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-bold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]">
                Request a custom quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

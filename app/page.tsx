import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Building2, Clock3, MapPinned, Sparkles, TrendingUp, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "GuardX | Turn Your Website Into a 24/7 Member of Staff",
  description:
    "Meet George — a trained digital member of staff that speaks with your visitors, answers questions instantly, explains your services, and helps turn more of your website traffic into enquiries or bookings.",
  alternates: { canonical: "https://guardxnetwork.com" },
}

const heroPoints = [
  "Answers questions instantly so visitors do not drift away waiting.",
  "Keeps visitors engaged instead of quietly leaving your site.",
  "Captures enquiries and bookings even when you are busy or closed.",
]

const resultPoints = [
  "Visitors get instant answers instead of leaving",
  "More people stay on your site longer",
  "More visitors turn into enquiries or bookings",
  "More enquiries turn into paying customers",
]

const howItWorks = [
  "We train George on your business, services, pricing, and FAQs.",
  "George speaks with visitors naturally and gives clear answers straight away.",
  "He guides people toward the right next step instead of letting them leave unsure.",
  "When someone is ready, George helps capture the enquiry or booking details.",
]

const useCases = [
  {
    title: "For local businesses",
    description:
      "Builders, flooring shops, salons, clinics, trades, and service businesses that want more enquiries from the traffic they already have.",
    points: [
      "Explains services and pricing clearly",
      "Answers the same questions owners get asked again and again",
      "Helps turn visitors into quote requests or enquiries",
      "Helps turn more of your existing website traffic into real enquiries",
    ],
    icon: Building2,
  },
  {
    title: "For attractions and visitor destinations",
    description:
      "Farm parks, family attractions, wildlife centres, venues, and visitor-focused websites where people often have questions before they book or visit.",
    points: [
      "Helps visitors plan their visit with less friction",
      "Answers questions about facilities, opening times, and what is on",
      "Supports more bookings and more footfall from existing traffic",
      "Helps turn more visitors into actual bookings and footfall",
    ],
    icon: MapPinned,
  },
]

const georgeFeatures = [
  "Answer everyday customer questions instantly",
  "Explain services, pricing, FAQs, and contact details clearly",
  "Give useful guidance and point visitors to the right next step",
  "Capture enquiries automatically when people are ready",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[#DADCE0] bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.35),rgba(255,255,255,1)_38%),linear-gradient(135deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Meet George
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 member of staff that converts visitors into customers
            </h1>

            <div className="mt-8 flex justify-center">
              <Image src="/george-logo.png" alt="George" width={760} height={280} className="h-auto w-full max-w-[720px] premium-floating-card" priority />
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl">
              Meet George — a trained digital member of staff that speaks with your visitors, answers their questions instantly, explains your services and pricing, and guides them towards becoming enquiries or bookings.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
              George is not just answering questions — he is helping turn your website traffic into real customers.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4">
              {heroPoints.map((point, index) => (
                <div
                  key={point}
                  className="premium-pulse-text rounded-2xl border border-[#DBEAFE] bg-[linear-gradient(135deg,rgba(239,246,255,0.95)_0%,rgba(255,255,255,1)_100%)] px-5 py-4 text-left text-base font-extrabold leading-7 text-[#1D4ED8] shadow-[0_14px_40px_rgba(29,78,216,0.08)] sm:text-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
                <span>Try George free for 7 days</span> <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-[#0F172A]">
                See George in action
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#0f172a_0%,#111827_38%,#1d4ed8_100%)] p-6 text-white shadow-[0_20px_70px_rgba(29,78,216,0.18)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">Why this matters</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Most websites lose visitors who never become customers</h2>
            <p className="mt-5 text-lg leading-8 text-[#DBEAFE]">
              George speaks to them before they leave — giving them answers, helping them take the next step, and turning more of them into real enquiries or bookings.
            </p>
            <p className="mt-5 text-base font-semibold leading-7 text-white sm:text-lg">
              If this brings you even a small increase in customers, it can make a noticeable difference to your revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-[0_20px_70px_rgba(29,78,216,0.08)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George makes you more money</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Most websites lose potential customers</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              When visitors cannot quickly find answers, they leave. They check another website, get distracted, or never come back.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#0F172A]">George changes that.</p>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {resultPoints.map((point, index) => (
                <div key={point} className="premium-step rounded-2xl border border-[#DBEAFE] bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-base font-semibold leading-7 text-[#1D4ED8]" style={{ animationDelay: `${index * 0.18}s` }}>
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-semibold leading-7 text-[#0F172A]">
              Even a small increase in conversions from your existing website traffic can make a noticeable difference to your revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George in action</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Alderwood Ponds</h2>
              <p className="mt-4 text-lg leading-8 text-[#475569]">
                On Alderwood Ponds, George can answer questions about fishing prices, camping, facilities, rules, and bookings — the kind of everyday questions that normally take up the owner’s time.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                This is where George makes the difference: instead of visitors leaving to find answers elsewhere, George keeps them engaged, gives them what they need instantly, and moves them closer to booking or getting in touch.
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-[#0F172A]">This is exactly what George would be doing on your website.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="https://alderwoodponds.fish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-white"
                >
                  Visit Alderwood Ponds <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
                  Try George free for 7 days
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 premium-floating-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">What George can do</p>
              <div className="mt-5 space-y-4">
                {georgeFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm">
                    <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm font-medium leading-6 text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold leading-6 text-[#0F172A]">All of this happens instantly, without you needing to respond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George works on your website</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George makes the value obvious fast</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              He is trained on the business, gives instant answers, and helps move more of your existing traffic towards becoming a real opportunity.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={step} className="group relative overflow-hidden rounded-[26px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(29,78,216,0.12)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1D4ED8,#60A5FA)] opacity-80" />
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1D4ED8] text-lg font-extrabold text-white shadow-[0_14px_30px_rgba(29,78,216,0.25)]">
                    {index + 1}
                  </div>
                  <Clock3 className="h-5 w-5 text-[#1D4ED8]" />
                </div>
                <p className="mt-5 text-base font-semibold leading-7 text-[#0F172A]">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[26px] border border-[#BFDBFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 text-center shadow-sm">
            <p className="text-lg font-bold leading-8 text-[#0F172A]">
              I can set this up on your website and let you run it free for 7 days — just see how it performs.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
                Try George free for 7 days <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-[#0F172A]">
                See George in action
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Who it is for</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Built for businesses and attractions</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              George works across a wide range of industries where customers or visitors have questions before taking the next step.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div key={useCase.title} className="rounded-[28px] border border-[#E5E7EB] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1D4ED8] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-[#0F172A]">{useCase.title}</h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-[#475569]">{useCase.description}</p>
                  <div className="mt-6 space-y-3">
                    {useCase.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-white p-4">
                        <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                        <span className="text-sm leading-6 text-[#475569]">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#1D4ED8] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-8 text-center shadow-[0_24px_80px_rgba(17,24,39,0.22)] sm:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Try George on your website — free for 7 days</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#DBEAFE]">
            See how he works with your real visitors, your real services, and your real enquiries — no risk, just see what happens.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
              Start your free trial <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-[#0F172A]">
              See George in action
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

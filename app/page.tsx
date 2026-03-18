import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Building2, Clock3, MapPinned, Sparkles, TrendingUp, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "GuardX | Turn Your Website Into a 24/7 Guide for Your Visitors",
  description:
    "Meet George — a trained digital guide and member of staff for attractions, holiday parks, campsites, and visitor destinations. He helps visitors with three different types of directions: directions on your website, directions to your location, and directions around your site once they are there — as well as helping them plan their visit, discover more of what you offer, and take the right next step.",
  alternates: { canonical: "https://guardxnetwork.com" },
}

const heroPoints = [
  "Helps visitors with three kinds of directions: on your website, to your location, and around your site once they are there.",
  "Guides people before they arrive, while they are on site, and when they need to know what to do next.",
  "Supports more bookings, more spend, and less pressure on your staff.",
]

const resultPoints = [
  "More visitors book instead of drifting away",
  "More visitors get answers without needing staff",
  "More people stay engaged before and during their visit",
  "More visitors discover food, experiences, and key areas of your site",
]

const howItWorks = [
  "We tailor George to your site, your layout, your attractions, and your most common visitor questions.",
  "Visitors can use George before they arrive for tickets, planning, FAQs, and key information.",
  "Once they are there, George can guide them around, explain what is nearby, share useful facts, and help them decide what to do next.",
  "George also nudges visitors toward food, experiences, and key pages that help increase bookings and on-site spend.",
]

const useCases = [
  {
    title: "For attractions and visitor destinations",
    description:
      "Farm parks, family attractions, wildlife centres, venues, and destinations where visitors need help before they arrive and while they are on site.",
    points: [
      "Helps visitors with tickets, timings, facilities, what to expect, and how to get to you",
      "Guides people around the site and helps them know what to do next",
      "Keeps visitors engaged with animals, experiences, food, and key areas",
      "Supports more bookings, happier visitors, and more spend on site",
    ],
    icon: MapPinned,
  },
  {
    title: "For holiday parks and campsites",
    description:
      "Holiday parks, caravan parks, campsites, and glamping sites where guests need clear answers, better guidance, and a smoother experience from booking to arrival.",
    points: [
      "Answers practical questions before guests book or arrive, including how to find you and where to go",
      "Guides guests toward the right pages, facilities, and next steps",
      "Helps reduce repetitive questions for owners and reception teams",
      "Creates a more modern, premium guest experience",
    ],
    icon: Building2,
  },
]

const georgeFeatures = [
  "Guide visitors before they arrive and while they are on site",
  "Answer questions about tickets, facilities, attractions, food, and stays",
  "Help people with website directions, directions to your location, on-site directions, and what to do next",
  "Support more bookings, more spend, and less pressure on staff",
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
              Turn your website into a 24/7 guide for your visitors — and get more people through the gate, improve their experience, and increase on-site spend
            </h1>

            <div className="mt-8 flex justify-center">
              <Image src="/george-logo.png" alt="George" width={760} height={280} className="h-auto w-full max-w-[720px] premium-floating-card" priority />
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl">
              Meet George — a trained digital guide and member of staff for attractions, holiday parks, campsites, and visitor destinations. He helps visitors with three different types of directions: directions on your website, directions to your location, and directions around your site once they are there — as well as helping them plan their visit, discover more of what you offer, and take the right next step.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
              George doesn’t just answer questions — he actively guides visitors towards booking, arriving with confidence, finding their way, exploring more, and getting more from their visit. George helps you get more people through the gate, improves their experience while they’re there, and increases how much they spend on site.
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
                <span>Try George on your website — free for 7 days</span> <ArrowRight className="h-5 w-5" />
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Most visitor websites leave money on the table</h2>
            <p className="mt-5 text-lg leading-8 text-[#DBEAFE]">
              Visitors arrive with questions, struggle to find the right page, need help getting to your location, get lost on site, miss things, or never make it to booking. George gives them instant help before they arrive, on the way, and while they are there — improving the experience and increasing the value of every visitor.
            </p>
            <p className="mt-5 text-base font-semibold leading-7 text-white sm:text-lg">
              If George improves bookings, visitor flow, food spend, or staff time even slightly, it can make a noticeable difference to your revenue. George helps you get more people through the gate, improves their experience while they’re there, and increases how much they spend on site.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#BFDBFE]">Most websites leave visitors to figure things out on their own. George guides them.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-[0_20px_70px_rgba(29,78,216,0.08)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George makes you more money</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George helps turn more visitors into revenue</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              When visitors cannot quickly find answers, directions, or the right next step, they hesitate, leave, miss things, or interrupt staff for help. George reduces that friction before, during, and on the way to the visit.
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
              George removes the small points of friction that quietly cost you bookings, time, and revenue every day.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/how-george-makes-you-money" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-[#0F172A]">
                How George makes you money
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George in action</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Let people see George working in real life</h2>
              <p className="mt-4 text-lg leading-8 text-[#475569]">
                The fastest way to understand George is to see him in action. He can answer questions, guide visitors, explain what is nearby, and help people take the right next step naturally.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                This is what makes George different from a normal chatbot or static FAQ page — he feels like a real guide that helps visitors throughout the journey.
              </p>
              <p className="mt-4 text-base font-semibold leading-7 text-[#0F172A]">Once you see it, it’s obvious — visitors use George because it’s easier than figuring things out themselves.</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/meet-george" className="cta-button-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-bold text-white">
                  See George in action <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
                  Try George on your website — free for 7 days
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
              <p className="mt-5 text-sm font-semibold leading-6 text-[#0F172A]">All of this happens instantly, without your team needing to answer the same questions again and again.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Simple to add. Easy to use. Valuable immediately.</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              George is tailored to your destination, speaks naturally with visitors, and helps more people move towards booking, arriving confidently, getting where they need to go, and getting more from their day.
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
              I can set George up for your destination and let you run it free for 7 days — just see how visitors respond.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
                Try George on your website — free for 7 days <ArrowRight className="h-5 w-5" />
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Built for places people visit</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              George works best in places where visitors need guidance, quick answers, and help deciding what to do next.
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

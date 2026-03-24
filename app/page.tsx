import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Building2, Briefcase, Headphones, ShoppingBag, Sparkles, TrendingUp, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "George | Turn Your Website Into a 24/7 Digital Member of Staff",
  description:
    "Meet George — a 24/7 digital member of staff for your website. George speaks to visitors, answers questions, guides them, captures enquiries, and helps turn more of your traffic into customers.",
  alternates: { canonical: "https://guardxnetwork.com" },
}

const heroPoints = [
  "Speaks to visitors naturally and answers questions instantly.",
  "Guides people towards the right product, service, booking, or next step.",
  "Adapts to the business — from sales assistant to guide, mascot, or family-friendly helper when relevant.",
  "Works 24/7, even when you are busy, closed, or asleep.",
]

const resultPoints = [
  "More enquiries from website visitors who would have left",
  "More bookings and sales from faster answers and clearer guidance",
  "Less time lost answering the same questions repeatedly",
  "A more modern, premium experience for your visitors",
]

const howItWorks = [
  "We tailor George to your business, your website, and the questions your visitors actually ask.",
  "George can be trained on your services, products, pricing, FAQs, and key pages.",
  "He then speaks to visitors naturally, guides them, and helps move them towards becoming customers.",
  "For larger setups, George can also be connected to structured data so he stays accurate at scale.",
]

const useCases = [
  {
    title: "For service businesses",
    description:
      "George answers common questions, explains what you do, qualifies leads, and helps visitors take the next step.",
    points: [
      "Captures enquiries instead of letting visitors drift away",
      "Explains services, pricing, areas covered, and how you work",
      "Feels like a receptionist or sales assistant on your site",
      "Helps turn more traffic into calls, forms, and booked work",
    ],
    icon: Briefcase,
  },
  {
    title: "For e-commerce and product-led businesses",
    description:
      "George helps customers find the right products, narrows choices, answers buying questions, and moves people towards purchase.",
    points: [
      "Reduces overwhelm when customers are browsing large catalogues",
      "Answers product questions and helps people decide faster",
      "Can work alongside your product catalogue and structured data",
      "Improves conversions by guiding customers instead of leaving them to browse alone",
    ],
    icon: ShoppingBag,
  },
  {
    title: "For attractions, parks, and visitor venues",
    description:
      "George can act as a digital guide before and during the visit — helping with planning, questions, directions, upgrades, visitor experience, and family-friendly engagement.",
    points: [
      "Guides visitors before they arrive and while they are there",
      "Answers questions about tickets, facilities, food, timings, and what to do next",
      "Can support family-friendly journeys, kid-focused engagement, mascot-style experiences, and upsells",
      "Helps improve bookings, spend, and overall visitor experience",
    ],
    icon: Building2,
  },
]

const georgeFeatures = [
  "Answers questions instantly",
  "Guides visitors step by step",
  "Captures enquiries automatically",
  "Can guide, reassure, sell, entertain, or support depending on the business",
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
              Turn your website into a 24/7 digital member of staff.
            </h1>

            <div className="mt-8 flex justify-center">
              <Image src="/george-logo.png" alt="George" width={760} height={280} className="h-auto w-full max-w-[720px] premium-floating-card" priority />
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl">
              George speaks to your website visitors, answers questions, guides them to the right product, service, booking, or next step, and helps turn more of your existing traffic into real customers. Depending on the business, he can also become a digital guide, a reassuring front-of-house presence, or a family-friendly mascot-style helper.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
              He is not just there to chat. George is designed to help visitors feel understood, remove friction, capture interest, and move people towards action — whether that means an enquiry, a booking, a sale, a higher-value visit, or a more engaging on-site experience.
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
                <span>Try George on your website</span> <ArrowRight className="h-5 w-5" />
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Most websites lose opportunities every day</h2>
            <p className="mt-5 text-lg leading-8 text-[#DBEAFE]">
              Visitors arrive with questions, hesitate, get distracted, cannot find what they need, or leave without taking action. George gives them instant help, keeps them engaged, and guides them towards becoming a customer instead of letting that opportunity disappear.
            </p>
            <p className="mt-5 text-base font-semibold leading-7 text-white sm:text-lg">
              If George helps recover even a small number of missed enquiries, bookings, or sales each month, he can very quickly justify himself. That is why George should be viewed as a conversion tool, not just another website feature.
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#BFDBFE]">George helps your website answer faster, guide better, and convert more.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-[0_20px_70px_rgba(29,78,216,0.08)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George makes you money</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George helps turn more visitors into revenue</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              When visitors cannot get answers quickly or do not know what to do next, you lose them. George removes that friction by answering instantly, guiding the conversation, and helping visitors move towards the right action.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {resultPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[#BFDBFE] bg-white p-4 text-left shadow-sm">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <p className="text-sm font-semibold leading-6 text-[#0F172A]">{point}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/how-george-makes-you-money" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-bold text-white">
                See how George creates value <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Where George fits</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">One core product. Multiple powerful use cases.</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              George adapts to the role your website is missing. For one business he can feel like a receptionist. For another he can act like a salesperson, buying assistant, or digital guide.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <div key={useCase.title} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF]">
                    <Icon className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#0F172A]">{useCase.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#475569]">{useCase.description}</p>
                  <ul className="mt-5 space-y-3">
                    {useCase.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#475569]">
                        <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1D4ED8]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George is tailored to your business</h2>
              <div className="mt-6 space-y-4">
                {howItWorks.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                    <Headphones className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <p className="text-base leading-7 text-[#475569]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">What George does best</p>
              <h3 className="mt-3 text-2xl font-bold">He helps people move forward</h3>
              <ul className="mt-6 space-y-3">
                {georgeFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-[#E2E8F0]">
                    <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#BFDBFE]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link href="/faq" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-white">
                  Read the FAQ
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                  Talk about your setup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

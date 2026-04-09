import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgePoundSterling, Bot, CheckCircle2, MessageSquare, TrendingUp, Users } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ValueCallout } from "@/components/value-callout"

export const metadata: Metadata = {
  title: "How George Makes You Money | George",
  description:
    "See how George helps your website capture more enquiries, bookings, and sales by answering faster, guiding visitors, and reducing drop-off.",
}

const revenueLevers = [
  {
    title: "George captures missed opportunities",
    text: "A lot of websites lose people because they cannot find what they need quickly enough. George keeps them engaged, answers instantly, and helps them take the next step.",
    icon: Users,
  },
  {
    title: "George guides people towards action",
    text: "George is designed to move people forward — towards an enquiry, a booking, a sale, a viewing, a quote request, or the right product or service.",
    icon: TrendingUp,
  },
  {
    title: "George reduces friction",
    text: "When people are confused, they hesitate. George removes that hesitation by giving them clear, confident guidance in real time.",
    icon: MessageSquare,
  },
]

const outcomes = [
  "More enquiries from visitors who would otherwise leave",
  "More bookings from people who needed a quick answer before deciding",
  "More product sales from customers who needed guidance",
  "Less pressure on your team from repetitive questions",
  "A stronger experience that makes your business feel more modern and responsive",
]

const examples = [
  "For a local service business, George can answer questions, qualify leads, and push more visitors towards getting in touch.",
  "For an e-commerce business, George can help customers find the right products faster and reduce drop-off during the buying journey.",
  "For attractions or holiday parks, George can guide visitors before and during the visit, increase confidence, and support upgrades, extras, and on-site spend.",
]

export default function HowGeorgeMakesYouMoneyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">How George makes you money</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">George helps turn more of your website traffic into revenue.</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#DBEAFE]">
            George is not just there to answer questions. He is there to stop drop-off, guide people properly, capture intent, and help more visitors become real customers.
          </p>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl grid gap-4 lg:grid-cols-3">
          <ValueCallout
            tone="dark"
            eyebrow="24/7"
            title="George works when your team cannot"
            body="He answers instantly outside business hours, during busy periods, and when visitors would otherwise get no response at all."
          />
          <ValueCallout
            tone="blue"
            eyebrow="Conversion"
            title="More visitors move towards action"
            body="George helps visitors feel clear, confident, and ready to enquire, buy, book, or take the next step."
          />
          <ValueCallout
            tone="gold"
            eyebrow="Value"
            title="Small improvements can go a long way"
            body="For many businesses, recovering even a handful of lost opportunities each month can easily justify George."
          />
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">The core idea</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George helps people who are interested keep moving instead of dropping off.</h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              A lot of websites rely on visitors figuring everything out for themselves. George changes that by stepping in, asking the right questions, giving the right answers, and helping people get where they need to go.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {revenueLevers.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[28px] border border-[#E5E7EB] bg-[#F8FAFC] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF]">
                    <Icon className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#475569]">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <BadgePoundSterling className="h-6 w-6 text-[#1D4ED8]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">What creates the value</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                  <span className="text-sm leading-6 text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF]">
                <Bot className="h-6 w-6 text-[#1D4ED8]" />
              </div>
              <h2 className="text-2xl font-bold text-[#0F172A]">Different businesses. Same principle.</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {examples.map((item) => (
                <li key={item} className="rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#475569]">{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-7 text-[#475569]">
              George adapts to the business, but the commercial outcome is the same: faster answers, better guidance, stronger conversion, and more value from the traffic you already have.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[#F8FBFF] p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold text-[#0F172A]">Want to see what George could do on your website?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#475569]">
            The easiest way to understand the value is to see George working with your own setup, your own visitors, and your own customer journey.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-bold text-white">
              Talk about your website <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
              Meet George
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

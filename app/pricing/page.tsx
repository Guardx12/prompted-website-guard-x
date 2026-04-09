import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageSquare, Settings, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing | George",
  description:
    "See how George is positioned for different setups. George is tailored to your website, your goals, and the level of help your visitors need.",
}

const coreIncluded = [
  "George tailored to your business and website",
  "Conversation flow designed around your customer journey",
  "Answers to common questions and objections",
  "Clear guidance towards the right next step",
  "Ongoing positioning around conversion, not just conversation",
]

const tailoredSetups = [
  {
    title: "Service businesses",
    text: "For businesses that want more enquiries, faster answers, and a stronger first impression when visitors land on the site.",
    points: [
      "Lead capture and enquiry support",
      "Service explanations and FAQ handling",
      "Quote and callback intent capture",
    ],
  },
  {
    title: "E-commerce and catalogue-led businesses",
    text: "For businesses that want help guiding customers through product choices, reducing drop-off, and improving the buying journey.",
    points: [
      "Buying guidance and product discovery",
      "Tailored setup based on catalogue complexity",
      "Structured data support for larger product ranges",
    ],
  },
  {
    title: "Attractions, parks, and visitor venues",
    text: "For businesses that want George to improve planning, questions, guidance, upsells, and visitor experience before and during the visit.",
    points: [
      "Pre-visit and on-site visitor guidance",
      "Support for bookings, upgrades, and extras",
      "Family-friendly and experience-led flows",
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">Pricing</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">George is tailored to your setup.</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#DBEAFE]">
            We do not force every business into the same box. George is scoped around your website, your visitor journey, and the level of help, guidance, and conversion support you want him to handle.
          </p>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#1D4ED8]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">What every setup is built around</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {coreIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                  <span className="text-sm leading-6 text-[#475569]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-[#1D4ED8]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">Why there is no fixed public price</h2>
            </div>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              George can be simple or more advanced depending on what you need. A straightforward service business setup is very different from a large e-commerce catalogue or a visitor attraction with multiple journeys, upsells, and live information.
            </p>
            <p className="mt-4 text-base leading-7 text-[#475569]">
              Pricing is based on the level of tailoring, the complexity of the setup, and the role George needs to play on your website.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
              <p className="text-sm font-bold text-[#0F172A]">The right way to price George is around value and setup, not a one-size-fits-all number.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Common types of setup</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">George can be shaped around different types of business.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {tailoredSetups.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF]">
                  <MessageSquare className="h-6 w-6 text-[#1D4ED8]" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#475569]">{item.text}</p>
                <ul className="mt-5 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#475569]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1D4ED8]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[#F8FBFF] p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold text-[#0F172A]">Want to talk through your setup?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#475569]">
            The quickest way to understand pricing is to look at your website, your business model, and what you want George to handle.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-bold text-white">
              Contact us <ArrowRight className="h-5 w-5" />
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

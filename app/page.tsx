import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  BadgePoundSterling,
  Bot,
  Building2,
  CheckCircle2,
  Clock3,
  MapPinned,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "GuardX | Turn Your Website Into a 24/7 Member of Staff",
  description:
    "Meet George — a trained digital member of staff that speaks with your visitors, answers questions instantly, explains your services and pricing, and helps turn more of your website traffic into enquiries or bookings.",
  alternates: { canonical: "https://guardxnetwork.com" },
  openGraph: {
    title: "GuardX | Turn Your Website Into a 24/7 Member of Staff",
    description:
      "Meet George — a trained digital member of staff that speaks with your visitors, answers questions instantly, explains your services and pricing, and helps turn more of your website traffic into enquiries or bookings.",
    url: "https://guardxnetwork.com",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=8",
        width: 1200,
        height: 630,
        alt: "GuardX George preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuardX | Turn Your Website Into a 24/7 Member of Staff",
    description:
      "Meet George — a trained digital member of staff that speaks with your visitors, answers questions instantly, explains your services and pricing, and helps turn more of your website traffic into enquiries or bookings.",
    images: ["https://guardxnetwork.com/george-preview.png?v=8"],
  },
}

const heroPoints = [
  "Answers questions instantly",
  "Keeps visitors engaged instead of leaving your site",
  "Captures enquiries automatically, even when you're closed",
]

const resultPoints = [
  "Visitors get instant answers instead of leaving",
  "More people stay on your site longer",
  "More visitors turn into enquiries",
  "More enquiries turn into paying customers",
]

const useCases = [
  {
    title: "Local businesses",
    description:
      "Builders, carpet and flooring shops, salons, clinics, trades, and service businesses that need more enquiries from existing website traffic.",
    points: [
      "Explains services and pricing clearly",
      "Answers the repetitive questions customers always ask",
      "Helps turn visitors into quote or enquiry leads",
    ],
    icon: Building2,
  },
  {
    title: "Attractions and visitor destinations",
    description:
      "Farm parks, wildlife centres, museums, family attractions, and venues where visitors have questions before they book or visit.",
    points: [
      "Helps visitors plan their visit quickly",
      "Answers questions about opening times, activities, pricing, and facilities",
      "Supports more bookings and footfall from existing traffic",
    ],
    icon: MapPinned,
  },
]

const georgeFeatures = [
  "Answer everyday customer questions instantly",
  "Explain your services, pricing, FAQs, and contact details",
  "Give useful guidance and point visitors to the right next step",
  "Capture enquiries even when you are busy or closed",
]

const infrastructurePoints = [
  {
    title: "Built for speed, performance, and conversion",
    body: "Fast, modern websites that make a stronger first impression and give visitors a smoother experience.",
  },
  {
    title: "George built into the site",
    body: "George can answer questions about services, pricing, FAQs, opening information, and contact details without the visitor digging around your site.",
  },
  {
    title: "Structured to be found on Google and convert visitors once they arrive",
    body: "We build with the right structure, speed, and foundations so your website is set up to support visibility and conversions.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="mx-auto max-w-6xl rounded-[36px] border border-[#DCE6F8] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] px-6 py-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)] sm:px-8 lg:px-12 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-sm">
                <Sparkles className="h-4 w-4" />
                Meet George
              </div>

              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                Turn your website into a <span className="premium-shimmer-text">24/7 member of staff</span> that converts visitors into customers
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#475569] sm:text-xl">
                Meet George — a trained digital member of staff that speaks with your visitors, answers their questions instantly,
                explains your services and pricing, and guides them towards becoming enquiries or bookings.
              </p>

              <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
                George is not just answering questions — he is helping turn your website traffic into real customers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[#0F172A]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE6F8] bg-white px-4 py-2 shadow-sm">
                  <BadgePoundSterling className="h-4 w-4 text-[#1D4ED8]" />
                  Business plans from £99/month
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE6F8] bg-white px-4 py-2 shadow-sm">
                  <TrendingUp className="h-4 w-4 text-[#1D4ED8]" />
                  Attractions typically £199–£499/month
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroPoints.map((point) => (
                  <div key={point} className="inline-flex items-start gap-3 rounded-2xl border border-[#E5EEF9] bg-white/85 px-4 py-4 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm font-medium leading-6 text-[#334155]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center justify-start gap-4 sm:flex-row sm:items-center sm:justify-start">
                <Link
                  href="/meet-george"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_rgba(29,78,216,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E40AF] hover:shadow-[0_24px_70px_rgba(29,78,216,0.3)]"
                >
                  <span>See George in action</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-7 py-4 text-base font-semibold text-[#0F172A] transition duration-300 hover:-translate-y-0.5 hover:border-[#BFDBFE] hover:bg-[#F8FAFC] hover:shadow-sm"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#DBEAFE] blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-10 hidden h-24 w-24 rounded-full bg-[#BFDBFE] blur-3xl lg:block" />
              <div className="relative overflow-hidden rounded-[32px] border border-[#DCE6F8] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between rounded-2xl border border-[#E5EEF9] bg-white px-4 py-3 shadow-sm">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Positioning</p>
                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">Revenue tool, not just another website feature</p>
                  </div>
                  <div className="pulse-dot" />
                </div>
                <div className="mt-5 flex justify-center rounded-[28px] border border-[#E5EEF9] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-6">
                  <Image src="/george-logo.png" alt="George" width={760} height={280} className="h-auto w-full max-w-[560px] floating-soft" priority />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="premium-list-row">
                    <Bot className="h-5 w-5 text-[#1D4ED8]" />
                    <span>Answers questions about services, pricing, facilities, and FAQs</span>
                  </div>
                  <div className="premium-list-row">
                    <Clock3 className="h-5 w-5 text-[#1D4ED8]" />
                    <span>Works when you are busy, closed, or away from the phone</span>
                  </div>
                  <div className="premium-list-row">
                    <MessageSquare className="h-5 w-5 text-[#1D4ED8]" />
                    <span>Guides visitors towards an enquiry or booking instead of letting them leave</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] px-6 py-8 shadow-[0_24px_80px_rgba(29,78,216,0.08)] sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George makes you more money</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Most websites lose potential customers
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              When visitors cannot quickly find answers, they leave. They check another website, get distracted, or never come back.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#0F172A]">George changes that.</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {resultPoints.map((point, index) => (
              <div key={point} className="lift-card rounded-[26px] border border-white bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1D4ED8]">
                  <span className="text-sm font-black">0{index + 1}</span>
                </div>
                <p className="text-sm leading-6 text-[#334155]">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#DCE6F8] bg-white/90 px-6 py-5 text-center shadow-sm">
            <p className="text-base font-semibold leading-7 text-[#0F172A]">
              Even a small increase in conversions from your existing website traffic can make a noticeable difference to your revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#E5E7EB] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George in action</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">Alderwood Ponds</h2>
              <p className="mt-4 text-lg leading-8 text-[#475569]">
                On Alderwood Ponds, George can answer questions about fishing prices, camping, facilities, rules, and bookings — the kind of everyday questions that normally take up the owner’s time.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                This is where George makes the difference: instead of visitors leaving to find answers elsewhere, George keeps them engaged,
                gives them what they need instantly, and moves them closer to booking or getting in touch.
              </p>
              <div className="mt-6">
                <Link
                  href="https://Alderwood-Ponds.Vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E40AF]"
                >
                  Visit Alderwood Ponds <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">What George can do</p>
              <div className="mt-5 space-y-4">
                {georgeFeatures.map((item) => (
                  <div key={item} className="premium-list-row rounded-2xl border border-white bg-white px-4 py-4 shadow-sm">
                    <Zap className="h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#E5E7EB] bg-[#F8FAFC] px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Who it is for</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Built for businesses and attractions
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              George works across a wide range of industries where customers or visitors have questions before taking the next step.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {useCases.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="lift-card rounded-[30px] border border-white bg-white p-6 shadow-sm">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1D4ED8] shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#0F172A]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#475569]">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#475569]">
                        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1D4ED8]" />
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

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-[#DADCE0] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {infrastructurePoints.map((item) => (
              <div key={item.title} className="premium-divider pb-2 lg:pb-0">
                <h3 className="text-lg font-bold text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-8 text-center shadow-[0_30px_100px_rgba(17,24,39,0.18)] sm:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Turn more of your website visitors into customers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#DBEAFE] sm:text-lg">
            George helps you keep visitors engaged, answer their questions instantly, and recover opportunities your website might otherwise lose.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-[#0F172A] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EFF6FF]"
            >
              View pricing
            </Link>
            <Link
              href="/meet-george"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#BFDBFE] px-7 py-4 text-base font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              See George in action <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ValueCallout } from "@/components/value-callout"
import {
  ArrowRight,
  Bot,
  Building2,
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

const coreBenefits = [
  {
    title: "Answers questions instantly",
    text: "George speaks with website visitors straight away, so they do not have to dig around your site or leave to find answers.",
    icon: MessageSquare,
  },
  {
    title: "Keeps visitors engaged",
    text: "He helps people stay on your site longer by explaining services, pricing, facilities, FAQs, and what to do next.",
    icon: Bot,
  },
  {
    title: "Captures enquiries automatically",
    text: "George can guide visitors toward booking or enquiry and collect their details even when you are busy or closed.",
    icon: Clock3,
  },
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
      "Explains services and pricing",
      "Answers everyday customer questions",
      "Turns visitors into quote or enquiry leads",
    ],
    icon: Building2,
  },
  {
    title: "Attractions and visitor destinations",
    description:
      "Farm parks, wildlife centres, museums, family attractions, and venues where visitors have questions before they book or visit.",
    points: [
      "Helps visitors plan their visit",
      "Answers common questions about opening times, activities, and facilities",
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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              <Sparkles className="h-4 w-4" />
              Meet George
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 member of staff that converts visitors into customers
            </h1>

            <div className="mt-8 flex justify-center">
              <Image
                src="/george-logo.png"
                alt="George"
                width={760}
                height={280}
                className="h-auto w-full max-w-[720px]"
                priority
              />
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl">
              Meet George — a trained digital member of staff that speaks with your visitors, answers their questions instantly,
              explains your services and pricing, and guides them towards becoming enquiries or bookings.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-base font-medium leading-7 text-[#0F172A] sm:text-lg">
              George is not just answering questions — he is helping turn your website traffic into real customers.
            </p>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
              <ValueCallout
                tone="dark"
                eyebrow="Easy to justify"
                title="Less than a part-time staff member for a single day."
                body="George works all week, answers the early questions, and helps stop visitors slipping away when nobody is there to reply."
              />
              <ValueCallout
                tone="blue"
                eyebrow="Simple maths"
                title="One extra customer can often pay for George."
                body="That is why George should feel like a revenue tool, not just another monthly cost on the website."
              />
              <ValueCallout
                tone="gold"
                eyebrow="For parks and attractions"
                title="One missed booking can cover this."
                body="When visitor value is higher, even a small lift in conversions can make the monthly fee look tiny."
              />
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
              {coreBenefits.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                    <Icon className="h-8 w-8 text-[#1D4ED8]" />
                    <h3 className="mt-4 text-lg font-bold text-[#0F172A]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">{item.text}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/meet-george"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_rgba(29,78,216,0.25)] transition hover:bg-[#1E40AF]"
              >
                <span>See George in action</span> <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-7 py-4 text-base font-semibold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">How George makes you more money</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Most websites lose potential customers
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              When visitors cannot quickly find answers, they leave. They check another website, get distracted, or never come back.
            </p>
            <p className="mt-4 text-lg font-semibold text-[#0F172A]">George changes that.</p>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {resultPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                  <span className="text-sm leading-6 text-[#475569]">{point}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-medium leading-7 text-[#0F172A]">
              Even a small increase in conversions from your existing website traffic can make a noticeable difference to your revenue.
            </p>
            <div className="mt-8 grid gap-4 text-left lg:grid-cols-3">
              <div className="rounded-[28px] border border-[#DBEAFE] bg-white p-5 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Starter</p>
                <p className="mt-2 text-3xl font-extrabold text-[#0F172A]">£49<span className="text-base font-semibold text-[#475569]">/month</span></p>
                <p className="mt-3 text-sm leading-6 text-[#475569]">Smaller businesses with lighter traffic.</p>
              </div>
              <div className="rounded-[28px] border border-[#1D4ED8] bg-[linear-gradient(135deg,#0F172A_0%,#1D4ED8_100%)] p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.2)]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#BFDBFE]">Standard</p>
                <p className="mt-2 text-3xl font-extrabold">£99<span className="text-base font-semibold text-[#DBEAFE]">/month</span></p>
                <p className="mt-3 text-sm leading-6 text-[#DBEAFE]">The best fit for most small and medium businesses.</p>
              </div>
              <div className="rounded-[28px] border border-[#DBEAFE] bg-white p-5 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1D4ED8]">Growth</p>
                <p className="mt-2 text-3xl font-extrabold text-[#0F172A]">£149<span className="text-base font-semibold text-[#475569]">/month</span></p>
                <p className="mt-3 text-sm leading-6 text-[#475569]">For busier sites, more conversations, and more opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]"
                >
                  Visit Alderwood Ponds <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">What George can do</p>
              <div className="mt-5 space-y-4">
                {georgeFeatures.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                    <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
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
                <div key={item.title} className="rounded-[28px] border border-white bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-[#1D4ED8]" />
                  <h3 className="mt-4 text-2xl font-bold text-[#0F172A]">{item.title}</h3>
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
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <h3 className="text-lg font-bold text-[#0F172A]">Built for speed, performance, and conversion</h3>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                Fast, modern websites that make a stronger first impression and give visitors a smoother experience.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <h3 className="text-lg font-bold text-[#0F172A]">George built into the site</h3>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                George can answer questions about services, pricing, FAQs, opening information, and contact details without the visitor digging around your site.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <h3 className="text-lg font-bold text-[#0F172A]">Structured to be found on Google and convert visitors once they arrive</h3>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                We build with the right structure, speed, and foundations so your website is set up to support visibility and conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-8 text-center shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Turn more of your website visitors into customers
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#DBEAFE] sm:text-lg">
            George helps you keep visitors engaged, answer their questions instantly, and recover opportunities your website might otherwise lose.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-bold text-[#0F172A] transition hover:bg-[#EFF6FF]"
            >
              View pricing
            </Link>
            <Link
              href="/meet-george"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#BFDBFE] px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
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

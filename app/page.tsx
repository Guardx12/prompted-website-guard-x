import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Bot, Clock3, MessageSquare, PhoneCall, Sparkles, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet George | Conversational Digital Member of Staff for Your Website",
  description:
    "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
  alternates: { canonical: "https://guardxnetwork.com" },
  openGraph: {
    title: "Meet George | Conversational Digital Member of Staff for Your Website",
    description:
      "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
    url: "https://guardxnetwork.com",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=8",
        width: 1200,
        height: 630,
        alt: "Meet George, your conversational digital member of staff for your website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet George | Conversational Digital Member of Staff for Your Website",
    description:
      "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
    images: ["https://guardxnetwork.com/george-preview.png?v=8"],
  },
}

const questions = [
  "pricing",
  "FAQs",
  "contact details",
  "how it works",
  "anything about your business",
]

const examples = [
  {
    title: "Carpet and flooring shops",
    text: "George can explain different flooring options, answer fitting questions, give rough price guidance, and help turn a visitor into a quote enquiry.",
  },
  {
    title: "Builders and construction companies",
    text: "George can explain services, answer questions about the type of work you take on, collect details about the job, and point people toward the next step.",
  },
  {
    title: "Dog groomers, salons, dentists and vets",
    text: "George can answer everyday questions about treatments, services, prices, opening hours, and what a customer needs to do next before getting in touch.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8 lg:p-12">
          <div className="text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              <Bot className="h-4 w-4" />
              Meet George
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Meet George — your conversational digital member of staff for your website.
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
              Meet George — your conversational digital member of staff for your website. George talks to website visitors, answers questions about your services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.
            </p>

            <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-[#475569] sm:text-lg">
              Ask George about {questions.join(", ")}. He speaks with visitors out loud, helps them understand what you do, what it costs, what options are available, and how to take the next step — even while you sleep.
            </p>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <MessageSquare className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Talks to visitors instantly</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  George talks to website visitors, answers questions about your services, facilities, pricing, FAQs, and contact details 24/7.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <Bot className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Explains services and options</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  He explains your services, pricing, facilities, and available options so visitors know what to do next.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <Clock3 className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Guides visitors to enquire</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  George helps guide visitors toward becoming enquiries and can capture their details automatically when they are ready.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/meet-george"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_rgba(29,78,216,0.25)] transition hover:bg-[#1E40AF]"
              >
                <Image src="/george-logo.png" alt="George" width={40} height={40} className="h-9 w-9 rounded-md" />
                <span>Meet George</span> <ArrowRight className="h-5 w-5" />
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
                That is the point of George: he gives visitors instant answers, helps them understand what is available, and moves them closer to getting in touch or booking.
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
              <ul className="mt-5 space-y-4">
                {[
                  "Answer everyday customer questions instantly",
                  "Explain your services, pricing, FAQs, and contact details",
                  "Give rough quotes and useful guidance",
                  "Point visitors to the right next step",
                  "Capture enquiries even when you are busy or closed",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <PhoneCall className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#334155]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Examples</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              George can be trained for different kinds of businesses.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              He is not just a generic chatbot. George can be trained around your business, your services, your pricing, and the questions customers ask all the time.
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {examples.map((example) => (
              <div key={example.title} className="rounded-2xl bg-[#F8FAFC] p-5">
                <h3 className="text-lg font-bold text-[#0F172A]">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#475569]">{example.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <Zap className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Fast modern websites</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Built using modern technology for speed, reliability, and a stronger first impression than old template websites.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <MessageSquare className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">George built into the site</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                George can answer questions about services, pricing, FAQs, opening information, and contact details without the visitor digging around the site.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <Clock3 className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">SEO foundation included</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                We build the website with the right structure, speed, and setup to give you a solid foundation and make George easier for visitors to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Simple monthly pricing for George.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              George is your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-[#DADCE0] bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Starter</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-[#0F172A]">£49</span>
                <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#475569]">
                Designed for smaller businesses with lighter website traffic.
              </p>
            </div>
            <div className="relative rounded-[28px] border-2 border-[#1D4ED8] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white sm:p-8">
              <div className="absolute -top-3 left-6 inline-flex rounded-full bg-[#FBBF24] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F172A]">
                Most Popular
              </div>
              <p className="pt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George Standard</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold">£99</span>
                <span className="pb-1 text-lg text-[#DBEAFE]">/ month per location</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#DBEAFE]">
                Ideal for most small to medium businesses.
              </p>
            </div>
            <div className="rounded-[28px] border border-[#DADCE0] bg-[#F8FAFC] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">George Growth</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-[#0F172A]">£149</span>
                <span className="pb-1 text-lg text-[#475569]">/ month per location</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#475569]">
                For busier businesses with higher enquiry potential.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#DBEAFE] bg-[#F8FBFF] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Custom plans</p>
            <p className="mt-2 text-base leading-7 text-[#475569]">
              Businesses with multiple locations or requiring more than 1,500 conversations per month should request a custom quote.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]"
            >
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Also available</p>
          <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">Need more Google reviews?</h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[#475569]">
            Review generation is still available as a separate service. We have just kept it lower down here so the main website stays focused on George.
          </p>
          <div className="mt-5">
            <Link
              href="/review-generation"
              className="inline-flex items-center justify-center rounded-2xl border border-[#CBD5E1] bg-white px-5 py-3 font-semibold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-white"
            >
              Learn about review generation
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <div className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:left-1/2 sm:w-[min(760px,calc(100%-2rem))] sm:-translate-x-1/2">
        <div className="rounded-[24px] border border-[#BFDBFE] bg-white/95 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Meet George</p>
              <p className="mt-1 text-sm font-semibold leading-6 text-[#0F172A] sm:text-base">
                See how George answers questions, explains services, captures enquiries, and helps move visitors toward becoming customers.
              </p>
            </div>
            <Link
              href="/meet-george"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#1D4ED8] px-5 py-3 text-sm font-bold text-white shadow-[0_18px_40px_rgba(29,78,216,0.25)] transition hover:bg-[#1E40AF]"
            >
              <Image src="/george-logo.png" alt="George" width={34} height={34} className="h-8 w-8 rounded-md" /> <span>Meet George</span> <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

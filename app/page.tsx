import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Bot, Clock3, MessageSquare, PhoneCall } from "lucide-react"

export const metadata: Metadata = {
  title: "George | 24/7 Digital Member of Staff for Your Website",
  description:
    "Meet George, a trained digital member of staff for your website. He answers customer questions, explains services, and captures enquiries 24/7.",
  alternates: { canonical: "https://guardxnetwork.com" },
  openGraph: {
    title: "George | 24/7 Digital Member of Staff for Your Website",
    description:
      "Meet George, a trained digital member of staff for your website. He answers customer questions, explains services, and captures enquiries 24/7.",
    url: "https://guardxnetwork.com",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=8",
        width: 1200,
        height: 630,
        alt: "Meet George, your digital member of staff",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "George | 24/7 Digital Member of Staff for Your Website",
    description:
      "Meet George, a trained digital member of staff for your website. He answers customer questions, explains services, and captures enquiries 24/7.",
    images: ["https://guardxnetwork.com/george-preview.png?v=8"],
  },
}

const examples = [
  {
    title: "Carpet and flooring shops",
    text: "George can explain flooring options, answer fitting questions, give rough price guidance, and help turn a visitor into a quote enquiry.",
  },
  {
    title: "Builders and construction companies",
    text: "George can explain services, answer questions about the kind of work you take on, collect job details, and point people toward the next step.",
  },
  {
    title: "Dog groomers, salons, dentists and vets",
    text: "George can answer everyday questions about services, opening hours, what things cost, and what a customer needs to do next.",
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
              Turn your website into a 24/7 digital member of staff.
            </h1>

            <div className="mt-8 flex justify-center">
              <Image src="/george-logo.png" alt="George" width={760} height={280} className="h-auto w-full max-w-[720px]" priority />
            </div>

            <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl">
              George is trained on your business so he can answer customer questions, explain your services, and help more visitors become enquiries.
            </p>

            <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-[#475569] sm:text-lg">
              We set George up for you and train him on your business so he can start helping visitors straight away — even while you sleep.
            </p>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <MessageSquare className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Answers questions instantly</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  George can answer everyday questions about your services, pricing, FAQs, and contact details 24/7.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <Bot className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Explains your business clearly</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  He helps visitors understand what you do, how it works, and what they need to do next.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F8FAFC] p-5 text-left">
                <Clock3 className="h-8 w-8 text-[#1D4ED8]" />
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Works while you sleep</h3>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  George keeps helping visitors in the evenings, out of hours, at weekends, and whenever you are busy.
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
                  "Give useful guidance and rough price guidance when appropriate",
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
              George is not a generic chatbot. He is trained around your business, your services, your pricing, and the questions customers ask all the time.
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
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Simple monthly pricing for George.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              George is £49 per month. We set him up and train him on your business so he can start helping visitors straight away.
            </p>
          </div>

          <div className="mt-8 max-w-2xl rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George</p>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-5xl font-extrabold">£49</span>
              <span className="pb-1 text-lg text-[#DBEAFE]">/ month</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#DBEAFE]">
              A trained digital member of staff for your website that answers questions, explains services, and captures enquiries.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

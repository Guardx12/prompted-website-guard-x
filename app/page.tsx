import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Bot, CheckCircle2, Clock3, MessageSquare, PhoneCall, Sparkles, Zap } from "lucide-react"

const included = [
  "Fast, modern website built for your business",
  "George AI assistant built into the site",
  "Hosting included",
  "SEO foundation setup",
  "Enquiry capture and contact notifications",
  "Mobile-friendly layout built to convert visitors",
]

const questions = [
  "pricing",
  "FAQs",
  "contact details",
  "how it works",
  "anything about your business",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
                <Bot className="h-4 w-4" />
                Websites powered by George
              </div>

              <h1 className="max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                Turn your website into a 24/7 salesperson.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#475569] sm:text-xl">
                Meet George — an AI assistant that answers customer questions and captures enquiries automatically.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#475569] sm:text-lg">
                Ask George about {questions.join(", ")}. Instead of making visitors dig through page after page,
                George can guide them, answer them, and help turn more of your traffic into real enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/meet-george"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-7 py-4 text-base font-bold text-white shadow-[0_18px_50px_rgba(29,78,216,0.25)] transition hover:bg-[#1E40AF]"
                >
                  Meet George <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-7 py-4 text-base font-semibold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
                >
                  See what is included
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 text-left shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">Meet George</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Your AI website sales assistant.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
                George answers questions, captures enquiries, and helps turn website visitors into customers — day or night.
              </p>
              <p className="mt-4 text-sm font-semibold text-[#93C5FD] sm:text-base">
                Ask George how he can answer customer questions and capture enquiries for you 24/7.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-[#BFDBFE]" />
                  <div>
                    <p className="font-semibold text-white">Ask George about:</p>
                    <p className="mt-2 text-sm leading-6 text-[#DBEAFE]">
                      Pricing, FAQs, contact details, how the website works, what is included, and how George could help your business handle enquiries.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/meet-george"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-bold text-[#1D4ED8] transition hover:bg-[#EFF6FF]"
              >
                Start Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[28px] border border-[#DBEAFE] bg-[#F8FBFF] p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Ask George</p>
              <p className="mt-2 text-xl font-semibold text-[#0F172A]">
                Ask George how he can answer customer questions and capture enquiries for you 24/7.
              </p>
            </div>
            <Link
              href="/meet-george"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]"
            >
              Meet George
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">What is included</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              A fast modern website, built properly, with George built in.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              This is not just a chatbot bolted on top. GuardX websites are built to look professional, load fast,
              work well on mobile, and give your business a strong SEO foundation from the start.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                  <p className="text-sm font-medium leading-6 text-[#334155]">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm lg:grid-cols-3">
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <Zap className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Fast modern websites</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                Built using modern technology for speed, reliability, and a more professional feel than old template websites.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <MessageSquare className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">George built into the site</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                George can answer questions about pricing, services, FAQs, and contact details without the visitor needing to dig around the site.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] p-5">
              <Clock3 className="h-8 w-8 text-[#1D4ED8]" />
              <h3 className="mt-4 text-lg font-bold text-[#0F172A]">SEO foundation included</h3>
              <p className="mt-2 text-sm leading-6 text-[#475569]">
                We do not offer ongoing SEO in this package, but we do build the website with the right structure, speed, and setup to give you a solid foundation.
              </p>
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
                George can answer visitor questions about fishing, camping, facilities, and bookings — helping a real business deal with the same questions people ask over and over again.
              </p>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                That is the whole point: George takes the repetitive answering off the business owner and helps keep visitors engaged.
              </p>
              <div className="mt-6">
                <Link
                  href="/meet-george"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1D4ED8] px-6 py-3 font-bold text-white transition hover:bg-[#1E40AF]"
                >
                  Try George <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(180deg,#EFF6FF_0%,#FFFFFF_100%)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">What George can do</p>
              <ul className="mt-5 space-y-4">
                {[
                  "Answer customer questions instantly",
                  "Explain your services and pricing",
                  "Give visitors contact information",
                  "Capture enquiries through conversation",
                  "Work even when you are busy or closed",
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Clear monthly pricing for a website powered by George.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#475569]">
              The aim is simple: give your business a modern website with George built in, hosting included, and a proper foundation underneath it.
            </p>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George Website</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£99</span>
                  <span className="pb-1 text-lg text-[#DBEAFE]">/ month</span>
                </div>
              </div>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-bold text-[#1D4ED8] transition hover:bg-[#EFF6FF]"
              >
                View pricing
              </Link>
            </div>
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
    </main>
  )
}

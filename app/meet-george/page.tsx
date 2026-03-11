import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GeorgeDemo } from "@/components/george-demo"
import Link from "next/link"
import { ArrowRight, Bot, MessageSquareText, Sparkles, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet George",
  description:
    "Meet George — the digital sales assistant built into GuardX websites. See how George answers questions, guides visitors, and helps turn websites into 24/7 salespeople.",
}

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white">
      <Navigation />

      <section className="relative overflow-hidden border-b border-[rgba(148,163,184,0.1)] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_32%),linear-gradient(180deg,#0a0e1a_0%,#070b14_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.08),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.14),transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(96,165,250,0.22)] bg-[rgba(15,23,42,0.75)] px-4 py-2 text-sm text-[#cbd5e1] shadow-[0_0_30px_rgba(37,99,235,0.08)]">
              <Bot className="h-4 w-4 text-[#60a5fa]" />
              George by GuardX
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 salesperson.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#94a3b8] sm:text-xl">
              Meet George — the digital receptionist and sales assistant built into GuardX websites. George answers
              questions, explains the offer, guides visitors toward becoming customers, and helps stop good traffic going
              to waste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#talk-to-george"
                className="inline-flex items-center gap-2 rounded-full bg-[#60a5fa] px-6 py-3 text-sm font-semibold text-[#08101d] transition hover:bg-[#93c5fd]"
              >
                Talk to George <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/web-design"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] px-6 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[rgba(96,165,250,0.45)] hover:text-white"
              >
                See the website side
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: MessageSquareText,
                title: "Answers the first questions",
                text: "George deals with the obvious things people want to know before they’re ready to call.",
              },
              {
                icon: Sparkles,
                title: "Feels more human than a normal bot",
                text: "The aim is simple: receptionist energy, sales awareness, and a much better first conversation.",
              },
              {
                icon: Zap,
                title: "Built into a proper website",
                text: "Modern, fast, SEO-structured GuardX websites are still the foundation. George makes them work harder.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.65)] p-5 backdrop-blur"
              >
                <item.icon className="h-5 w-5 text-[#60a5fa]" />
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-[#94a3b8]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk-to-george" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <GeorgeDemo />
      </section>

      <section className="border-t border-[rgba(148,163,184,0.1)] bg-[#070b14]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[rgba(148,163,184,0.14)] bg-[rgba(15,23,42,0.68)] p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#60a5fa]">What George helps with</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">A better first conversation.</h2>
              <div className="mt-6 space-y-4 text-[#cbd5e1]">
                <p>
                  George exists for the moment between a visitor landing on the page and deciding whether to leave,
                  message, or buy. That moment matters more than most businesses realise.
                </p>
                <p>
                  Instead of a dead page and a contact form, a GuardX website can have a digital member of staff there to
                  answer questions, guide the visitor, and get the right details when interest is real.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-[rgba(96,165,250,0.18)] bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(8,15,30,0.92))] p-8 shadow-[0_0_50px_rgba(37,99,235,0.12)]">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#60a5fa]">The bigger offer</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">George is the hook. The website is the vehicle.</h2>
              <div className="mt-6 space-y-4 text-[#cbd5e1]">
                <p>
                  GuardX still builds modern, fast websites with strong structure and SEO foundations. George just gives
                  the site a far more interesting job to do once someone arrives.
                </p>
                <p>
                  That means the offer is bigger than &quot;just a chatbot&quot; and stronger than &quot;just a website&quot; — it’s a
                  website with a built-in member of staff.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#60a5fa] px-6 py-3 text-sm font-semibold text-[#08101d] transition hover:bg-[#93c5fd]"
                >
                  Start a GuardX website <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] px-6 py-3 text-sm font-semibold text-[#e2e8f0] transition hover:border-[rgba(96,165,250,0.45)] hover:text-white"
                >
                  View pricing
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

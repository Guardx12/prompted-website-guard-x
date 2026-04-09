import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "How George Makes You Money | George",
  description: "George helps your website capture more enquiries, bookings, and sales by answering faster, guiding visitors, and reducing drop-off.",
}

const sections = [
  {
    title: "More engagement",
    body: "George gives visitors a reason to stay, interact, and keep moving instead of drifting off when they cannot get answers quickly enough.",
  },
  {
    title: "More enquiries",
    body: "George warms people up, handles the first layer of questions, and makes it easier for interested visitors to actually get in touch.",
  },
  {
    title: "Better conversion",
    body: "George helps people feel clear and confident about the next step, which means more bookings, calls, messages, and sales from the traffic you already have.",
  },
]

const outcomes = [
  "Captures missed opportunities from visitors who would otherwise leave",
  "Guides people towards action instead of leaving them to work it out alone",
  "Reduces hesitation by answering questions in real time",
  "Makes your existing traffic more valuable",
]

export default function HowGeorgeMakesYouMoneyPage() {
  return (
    <main className="premium-page-shell min-h-screen text-white">
      <Navigation />

      <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="premium-hero-grid mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">How George makes you money</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              George helps turn more of your website traffic into revenue
            </h1>
            <p className="premium-body mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              George is not just there to answer questions. He is there to stop drop-off, guide people properly, capture intent, and help more visitors become real customers.
            </p>
          </div>
          <div className="premium-orb-wrap flex items-center justify-center">
            <Image src="/george-orb-premium.jpeg" alt="George orb logo" width={760} height={760} className="premium-orb-image h-auto w-full max-w-[500px] object-contain" priority />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
          {sections.map((item) => (
            <article key={item.title} className="premium-card rounded-[32px] p-7 sm:p-8">
              <p className="premium-kicker">{item.title}</p>
              <p className="premium-heading mt-4 text-2xl font-semibold">{item.title}</p>
              <p className="premium-body mt-4 text-base leading-7">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl rounded-[36px] premium-glass p-8 sm:p-10 lg:p-14">
          <p className="premium-kicker">Why it matters</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="premium-soft-card rounded-[24px] p-5 text-sm leading-6 text-white/86 sm:text-base">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="premium-button-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition">
              Talk about your website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/meet-george" className="premium-button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition">
              Meet George
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

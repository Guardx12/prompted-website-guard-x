import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ChevronRight, MessageCircleMore, PhoneCall, Sparkles } from "lucide-react"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"

export const metadata: Metadata = {
  title: "George | Turn your website into a 24/7 salesperson",
  description:
    "George talks to your visitors, answers questions instantly, and turns more of them into real enquiries — even when you're not there.",
  alternates: { canonical: "https://getgeorge.app/" },
}

const primaryLinks = [
  { href: "/meet-george", label: "Meet George" },
  { href: "/how-george-makes-you-money", label: "How George makes you money" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const outcomeCards = [
  {
    title: "Answers questions instantly",
    body: "George gives visitors the information they need there and then, so they keep moving instead of dropping off.",
  },
  {
    title: "Guides people properly",
    body: "He helps visitors figure out what they need, recommends the best option, and moves them towards making contact.",
  },
  {
    title: "Turns traffic into enquiries",
    body: "George warms people up before they call, message, or book — making your existing website traffic more valuable.",
  },
]

const reasonPoints = [
  "People want answers instantly",
  "Businesses miss opportunities every day",
  "Most websites don’t guide visitors properly",
]

const conversionPoints = [
  "Stops people leaving your site without taking action",
  "Warms up leads before they contact you",
  "Drives more bookings, calls and messages",
  "Makes your existing traffic more valuable",
]

const experiencePoints = [
  "Instant help when visitors need it",
  "No waiting or confusion",
  "Smooth, natural interaction",
  "Feels modern and professional",
]

const reliabilityPoints = [
  "Consistent answers",
  "Never forgets key information",
  "No missed opportunities",
  "Represents your business properly",
]

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-[#C4B5FD] sm:text-lg">{body}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#06010E] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.28),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%),linear-gradient(180deg,#120422_0%,#08020F_52%,#06010E_100%)]" />
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7C3AED]/20 blur-3xl" />
        <div className="absolute right-[-140px] top-[140px] h-[360px] w-[360px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        <header className="relative z-10 border-b border-white/10 bg-black/10 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(139,92,246,0.32)]">
                <Image src="/george-logo.png" alt="George" fill className="object-cover" priority />
              </div>
              <div>
                <div className="text-sm font-medium tracking-[0.28em] text-[#C4B5FD] uppercase">George</div>
                <div className="text-sm text-white/70">Digital staff for your website</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/72 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/15"
            >
              Get George
            </Link>
          </div>
        </header>

        <section className="relative z-10">
          <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-[#DDD6FE] shadow-[0_10px_60px_rgba(15,23,42,0.35)]">
                <Sparkles className="h-3.5 w-3.5" />
                Premium voice-led website assistant
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                Turn your website into a <span className="text-[#C4B5FD]">24/7 salesperson</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#DDD6FE] sm:text-xl">
                George talks to your visitors, answers questions instantly, and turns more of them into real enquiries — even when you’re not there.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#live-demo"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#120422] transition hover:scale-[1.01] hover:bg-[#F5F3FF]"
                >
                  Try George live
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/how-george-makes-you-money"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/12"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {outcomeCards.map((card) => (
                  <div key={card.title} className="rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.28)] backdrop-blur">
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.3),_transparent_58%)] blur-2xl" />
              <div className="relative w-full overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_40px_120px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C4B5FD]">George live</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">A digital member of staff for your website</h2>
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/12 bg-black/20 shadow-[0_0_40px_rgba(139,92,246,0.28)] sm:h-20 sm:w-20">
                    <Image src="/george-logo.png" alt="George orb" fill className="object-cover" sizes="80px" />
                  </div>
                </div>

                <div className="mt-6 rounded-[28px] border border-white/10 bg-[#0B0416]/90 p-4 sm:p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                    <span>Voice-led live demo</span>
                    <span className="inline-flex items-center gap-2 text-[#C4B5FD]">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Ready
                    </span>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-[#140725] p-2 sm:p-3">
                    <GeorgeLiveAssistantCompact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-white/8 bg-[#0B0315] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why George exists"
            title="Websites shouldn’t lose customers"
            body="The problem usually isn’t traffic. It’s what happens after someone lands on your site and still has questions."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {reasonPoints.map((point) => (
              <div key={point} className="rounded-[28px] border border-white/8 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
                <CheckCircle2 className="h-5 w-5 text-[#A78BFA]" />
                <p className="mt-4 text-lg font-medium text-white">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-2xl font-semibold text-[#DDD6FE]">George fixes that.</p>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">What George does</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                George talks to your visitors
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#C4B5FD]">
                He answers questions, helps people figure out what they need, recommends the best option, and gets them to actually enquire.
              </p>
              <p className="mt-5 text-base font-medium text-white/80">Feels like a real member of staff on your website.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MessageCircleMore, title: "Answers questions instantly" },
                { icon: ChevronRight, title: "Helps visitors figure out what they need" },
                { icon: PhoneCall, title: "Moves people towards making contact" },
                { icon: Sparkles, title: "Feels smooth, modern and premium" },
              ].map((item) => (
                <div key={item.title} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                  <item.icon className="h-5 w-5 text-[#A78BFA]" />
                  <p className="mt-4 text-base font-medium text-white">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0B0315] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Conversions"
            title="Turns more visitors into enquiries"
            body="George doesn’t just sit on the page. He helps visitors move from interest to action."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
            {conversionPoints.map((point) => (
              <div key={point} className="rounded-[28px] border border-white/10 bg-white/[0.04] px-6 py-5 text-base text-white/85">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">Experience</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Better experience for every visitor</h3>
              <div className="mt-8 space-y-4">
                {experiencePoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-white/85">
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">Reliability</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Works properly, every time</h3>
              <div className="mt-8 space-y-4">
                {reliabilityPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-white/85">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="live-demo" className="border-t border-white/8 bg-[#0B0315] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Try George yourself"
            title="See how George speaks, answers questions, and guides visitors"
            body="Try the live demo, hear how George responds, and get a feel for what he would be like on your own site."
          />
          <div className="mx-auto mt-14 max-w-5xl rounded-[36px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.45)] sm:p-6 lg:p-8">
            <GeorgeLiveAssistantCompact />
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">Final step</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Test George on your own website
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#C4B5FD]">
            We set George up for your business, you test it properly, and you only go live when you’re happy.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#120422] transition hover:bg-[#F5F3FF]"
            >
              Get George on your site
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/12"
            >
              View pricing approach
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 bg-[#06010E]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 text-sm text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/12 bg-white/5">
              <Image src="/george-logo.png" alt="George" fill className="object-cover" sizes="40px" />
            </div>
            <div>
              <p className="font-medium text-white">George</p>
              <p>Digital staff for your website</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}

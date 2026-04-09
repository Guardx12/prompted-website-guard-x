import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"

export const metadata: Metadata = {
  title: "Meet George | Turn your website into a 24/7 salesperson",
  description:
    "Meet George — a trained digital member of staff for your website. He answers questions, guides visitors, and helps turn more of them into enquiries.",
  alternates: { canonical: "https://getgeorge.app/meet-george" },
}

const points = [
  "Answers questions instantly",
  "Helps visitors figure out what they need",
  "Guides people towards enquiring",
  "Feels like a real member of staff on your website",
]

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-[#06010E] text-white">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.12),_transparent_28%),linear-gradient(180deg,#120422_0%,#08020F_52%,#06010E_100%)]" />
        <div className="absolute left-1/2 top-[-160px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#7C3AED]/16 blur-3xl" />

        <header className="relative z-10 border-b border-white/10 bg-black/10 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(139,92,246,0.32)]">
                <Image src="/george-logo.png" alt="George" fill className="object-cover" priority />
              </div>
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.28em] text-[#C4B5FD]">George</div>
                <div className="text-sm text-white/70">Digital staff for your website</div>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/" className="hidden text-sm text-white/72 transition hover:text-white sm:inline-block">
                Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/15"
              >
                Get George
              </Link>
            </div>
          </div>
        </header>

        <section className="relative z-10">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1.02fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-[#DDD6FE] shadow-[0_10px_60px_rgba(15,23,42,0.35)]">
                <Sparkles className="h-3.5 w-3.5" />
                Meet George
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
                A digital member of staff for <span className="text-[#C4B5FD]">your website</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#DDD6FE] sm:text-xl">
                George talks to your visitors, answers questions, helps them figure out what they need, and turns more of them into real enquiries.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <div key={point} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                    <CheckCircle2 className="h-5 w-5 text-[#A78BFA]" />
                    <p className="mt-3 text-sm leading-6 text-white/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center">
              <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.25),_transparent_58%)] blur-2xl" />
              <div className="relative w-full overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.08] p-5 shadow-[0_40px_120px_rgba(2,6,23,0.6)] backdrop-blur-xl sm:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C4B5FD]">Live George</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Try George yourself</h2>
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/12 bg-black/20 shadow-[0_0_40px_rgba(139,92,246,0.28)] sm:h-20 sm:w-20">
                    <Image src="/george-logo.png" alt="George orb" fill className="object-cover" sizes="80px" />
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-[#140725] p-2 sm:p-3">
                  <GeorgeLiveAssistantCompact />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-white/8 bg-[#0B0315] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7">
            <Sparkles className="h-5 w-5 text-[#A78BFA]" />
            <h3 className="mt-4 text-xl font-semibold text-white">Customer experience</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              George gives instant help, answers naturally, and makes your website feel far more useful from the first interaction.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7">
            <ArrowRight className="h-5 w-5 text-[#A78BFA]" />
            <h3 className="mt-4 text-xl font-semibold text-white">Conversion</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              He helps visitors move from interest to action, warming people up and guiding more of them towards enquiring.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-7">
            <ShieldCheck className="h-5 w-5 text-[#A78BFA]" />
            <h3 className="mt-4 text-xl font-semibold text-white">Reliability</h3>
            <p className="mt-3 text-sm leading-6 text-white/75">
              George stays consistent, works around the clock, and keeps representing your business properly even when you are unavailable.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#05010B] py-24 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.16),_transparent_42%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A78BFA]">Get started</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Put George on your website</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#DDD6FE]">
            Keep the same flow you already have, keep the form working, and upgrade the look into a cleaner premium George experience.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#120422] transition hover:bg-[#F5F3FF]"
            >
              Get George on your site
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/how-george-makes-you-money"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/12"
            >
              See how George makes you money
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Turn Your Website Into a 24/7 Salesperson | Meet George | GuardX",
  description:
    "Turn your website into a 24/7 salesperson with George — a digital member of staff tailored to your brand, role, and visitors.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
}

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navigation />

      <section className="relative overflow-hidden border-b border-white/6 px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.10),rgba(5,8,22,0)_24%),radial-gradient(circle_at_78%_22%,rgba(168,85,247,0.18),rgba(5,8,22,0)_28%),linear-gradient(180deg,#050816_0%,#090d1f_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#C7D2FE] backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[#6EE7B7]" />
                Meet George
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Talk to George live
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1] sm:text-xl">
                This is where people feel the difference. George answers questions, guides visitors naturally, and shows how he would work for a real business.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#94A3B8] sm:text-lg">
                The logic stays the same. The conversion flow stays the same. We have just given the experience a more premium, product-level presentation.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="#live-george" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#6EE7B7] px-7 py-4 text-base font-bold text-[#04130d] transition hover:bg-[#86EFAC]">
                  Try George now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                  Put George on your website
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-[23rem] w-[23rem] rounded-full bg-[#6EE7B7]/10 blur-3xl" />
              <div className="relative flex h-[20rem] w-[20rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.24),rgba(255,255,255,0.03)_44%,rgba(0,0,0,0.34)_100%)] shadow-[0_28px_110px_rgba(0,0,0,0.42)] sm:h-[24rem] sm:w-[24rem]">
                <div className="absolute inset-[10%] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-[#6EE7B7]/25" />
                <Image src="/george-logo.png" alt="George orb logo" width={420} height={420} className="relative z-10 h-auto w-[78%] drop-shadow-[0_0_60px_rgba(110,231,183,0.18)]" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GeorgeLiveAssistantCompact />
      <Footer />
    </main>
  )
}

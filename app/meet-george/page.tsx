import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George | Digital Guide for Visitor-Focused Websites",
  description:
    "Meet George — a trained digital guide and member of staff for attractions, holiday parks, campsites, and visitor destinations. He helps visitors plan their visit, get website directions, get directions to your location, find their way around once they are there, discover more of what you offer, and take the right next step.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
}

const proofPoints = [
  "Helps with website directions, directions to your location, and on-site directions",
  "Guides visitors before they arrive, while they are on site, and when they need to know what to do next",
  "Supports more bookings, more spend, and less pressure on staff",
]

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DADCE0] bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.30),rgba(255,255,255,1)_38%),linear-gradient(135deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Meet George
            </div>
            <div className="mt-7 flex justify-center">
              <Image src="/george-logo.png" alt="George" width={420} height={140} className="h-28 w-auto sm:h-32 premium-floating-card" priority />
            </div>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 voice conversation guide for your visitors. More people through your gate, better experience, higher on-site spend.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#475569] sm:text-xl">
              Meet George — a trained digital guide and member of staff for attractions, holiday parks, campsites, and visitor destinations. He helps visitors plan their visit, get website directions, get directions to your location, find their way around once they are there, discover more of what you offer, and take the right next step.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
              George doesn’t just answer questions — he helps you get more people through the gate, improves their experience while they’re there, and increases how much they spend on site.
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-[#DBEAFE] bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(29,78,216,0.10)]">
                  <TrendingUp className="h-5 w-5 text-[#1D4ED8]" />
                  <p className="mt-3 text-sm font-semibold leading-6 text-[#0F172A]">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
                Try George on your website — free for 7 days <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="https://alderwoodponds.fish" target="_blank" rel="noopener noreferrer" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-[#0F172A]">
                See George in action
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GeorgeLiveAssistant />
      <Footer />
    </main>
  )
}

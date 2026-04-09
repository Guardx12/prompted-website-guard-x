import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "George | Turn Your Website Into a 24/7 Salesperson",
  description: "George talks to your visitors, answers questions instantly, and turns more of them into real enquiries.",
  alternates: { canonical: "https://getgeorge.app" },
}

const whyGeorge = [
  "People want answers instantly.",
  "Businesses miss opportunities every day.",
  "Most websites do not guide visitors properly.",
  "George fixes that.",
]

const conversionPoints = [
  "Stops visitors leaving your site without taking action",
  "Warms up leads before they contact you",
  "Drives more bookings, calls, and messages",
  "Makes your existing traffic more valuable",
]

const experiencePoints = [
  "Instant help when people need it",
  "No waiting or confusion",
  "Smooth, natural interaction",
  "Feels modern and impressive",
]

const reliabilityPoints = [
  "Consistent answers",
  "Never forgets key information",
  "No missed opportunities",
  "Represents your business properly",
]

export default function HomePage() {
  return (
    <main className="premium-page-shell min-h-screen text-white">
      <Navigation />

      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="premium-hero-grid mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">Meet George</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 salesperson
            </h1>
            <p className="premium-body mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              George talks to your visitors, answers questions instantly, and turns more of them into real enquiries — even when you are not there.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/meet-george" className="premium-button-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition">
                Try George live <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/how-george-makes-you-money" className="premium-button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition">
                See how it works
              </Link>
            </div>
          </div>

          <div className="premium-orb-wrap flex items-center justify-center">
            <Image
              src="/george-orb-premium.jpeg"
              alt="George orb logo"
              width={780}
              height={780}
              priority
              className="premium-orb-image h-auto w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl rounded-[36px] premium-glass p-8 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="premium-kicker">Why George exists</p>
              <h2 className="premium-heading mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Websites should not lose customers
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyGeorge.map((item) => (
                <div key={item} className="premium-soft-card rounded-[28px] p-5 text-base leading-7 text-white/88 sm:text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-3">
          <article className="premium-card rounded-[32px] p-7 sm:p-8">
            <p className="premium-kicker">What George does</p>
            <h3 className="premium-heading mt-4 text-2xl font-semibold">George talks to your visitors</h3>
            <p className="premium-body mt-4 text-base leading-7">
              George feels like a real member of staff on your website. He helps people understand what they need, guides them toward the right option, and keeps them moving.
            </p>
          </article>

          <article className="premium-card rounded-[32px] p-7 sm:p-8 lg:col-span-2">
            <p className="premium-kicker">Turns more visitors into enquiries</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {conversionPoints.map((item) => (
                <div key={item} className="premium-soft-card rounded-[24px] p-4 text-sm leading-6 text-white/86 sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <article className="premium-card rounded-[32px] p-7 sm:p-8">
            <p className="premium-kicker">Better experience for every visitor</p>
            <div className="mt-5 grid gap-4">
              {experiencePoints.map((item) => (
                <div key={item} className="premium-soft-card rounded-[24px] p-4 text-sm leading-6 text-white/86 sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="premium-card rounded-[32px] p-7 sm:p-8">
            <p className="premium-kicker">Works properly, every time</p>
            <div className="mt-5 grid gap-4">
              {reliabilityPoints.map((item) => (
                <div key={item} className="premium-soft-card rounded-[24px] p-4 text-sm leading-6 text-white/86 sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-7xl rounded-[36px] premium-glass p-8 text-center sm:p-10 lg:p-14">
          <p className="premium-kicker">Try George yourself</p>
          <h2 className="premium-heading mt-4 text-3xl font-semibold sm:text-4xl">See how George could feel on your website</h2>
          <p className="premium-body mx-auto mt-5 max-w-3xl text-base leading-7 sm:text-lg">
            George answers questions, guides visitors, and turns more traffic into real opportunities. The fastest way to understand him is to try him live.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/meet-george" className="premium-button-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition">
              Talk to George <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="premium-button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition">
              Get George on your site
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

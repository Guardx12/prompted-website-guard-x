import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Hammer, Droplets, Zap, HardHat, Truck, Sparkles, Shovel, SprayCan, Wind } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Examples — Demo Websites Built by GuardX",
  description:
    "Explore showroom-quality example homepages to see what GuardX can build for different trades and local businesses.",
}

type ExampleCard = {
  title: string
  subtitle: string
  href?: string
  icon: React.ElementType
  imageSrc?: string
  status?: "live" | "coming_soon"
}

const examples: ExampleCard[] = [
  {
    title: "Sussex Roofing Specialists",
    subtitle: "Roofing website homepage example (showroom demo).",
    href: "https://guardx-roofing.vercel.app/",
    icon: Hammer,
    imageSrc: "/images/examples/roofer/hero.jpg",
    status: "live",
  },
  { title: "Plumber Website",
    href: "https://guardx-plumbing.vercel.app/",
    image: "/images/examples/plumber-card.jpg", subtitle: "Homepage example for a plumbing business.",
    href: "https://guardx-plumbing.vercel.app/",
    image: "/images/examples/plumber-card.jpg", icon: Droplets, status: "coming_soon" },
  { title: "Electrician Website", subtitle: "Homepage example for an electrical contractor.", icon: Zap, status: "coming_soon" },
  { title: "Builder Website", subtitle: "Homepage example for a building company.", icon: HardHat, status: "coming_soon" },
  { title: "Scaffolding Website", subtitle: "Homepage example for a scaffolding firm.", icon: Wind, status: "coming_soon" },
  { title: "Driveways & Landscaping", subtitle: "Homepage example for driveways / landscaping.", icon: Shovel, status: "coming_soon" },
  { title: "Cleaning Company", subtitle: "Homepage example for a cleaning business.", icon: SprayCan, status: "coming_soon" },
  { title: "Carpet & Flooring", subtitle: "Homepage example for flooring businesses.", icon: Sparkles, status: "coming_soon" },
  { title: "Removal Company", subtitle: "Homepage example for removals / movers.", icon: Truck, status: "coming_soon" },
]

export default function ExamplesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        <section className="pt-32 pb-12 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Examples" className="mb-6" />
            <p className="text-lg sm:text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Showroom-quality demo homepages that demonstrate the standard GuardX can build. These are designed for
              viewing and inspiration — not full multi-page builds (yet).
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((ex) => {
                const Icon = ex.icon
                const CardInner = (
                  <div
                    className={[
                      "group relative overflow-hidden rounded-2xl border",
                      "border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.55)]",
                      "backdrop-blur-xl shadow-[0_0_0_1px_rgba(148,163,184,0.06)]",
                      "transition-transform duration-300",
                      ex.href ? "hover:-translate-y-0.5" : "opacity-70",
                    ].join(" ")}
                  >
                    {/* Image */}
                    <div className="relative h-44 w-full">
                      {ex.imageSrc ? (
                        <Image
                          src={ex.imageSrc}
                          alt={ex.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(96,165,250,0.18)] via-[rgba(167,139,250,0.12)] to-[rgba(34,197,94,0.10)]" />
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,14,26,0.65)] px-3 py-1 text-xs text-[#e2e8f0]">
                        <Icon className="h-4 w-4 text-[#60a5fa]" />
                        {ex.status === "live" ? "Live demo" : "Coming soon"}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#e2e8f0] leading-snug">{ex.title}</h3>
                      <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{ex.subtitle}</p>

                      <div className="mt-5 flex items-center justify-between">
                        {ex.href ? (
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#60a5fa]">
                            View example <ArrowRight className="h-4 w-4" />
                          </span>
                        ) : (
                          <span className="text-sm text-[#94a3b8]">In progress</span>
                        )}

                        <span className="text-xs text-[#94a3b8]">Homepage</span>
                      </div>
                    </div>

                    {/* Glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute -inset-24 bg-[radial-gradient(circle,rgba(167,139,250,0.20),transparent_55%)]" />
                    </div>
                  </div>
                )

                return ex.href ? (
                  ex.href.startsWith("http") ? (
                    <a key={ex.title} href={ex.href} target="_blank" rel="noopener noreferrer" className="block">
                      {CardInner}
                    </a>
                  ) : (
                    <Link key={ex.title} href={ex.href} className="block">
                      {CardInner}
                    </Link>
                  )
                ) : (
                  <div key={ex.title}>{CardInner}</div>
                )
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.45)] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-[#e2e8f0]">Want one like this for your business?</h2>
              <p className="mt-2 text-[#94a3b8] leading-relaxed">
                If you like the standard you see here, get in touch and we’ll build a version tailored to your brand,
                services, and service areas.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#3b82f6] px-5 py-3 font-semibold text-white hover:bg-[#2563eb] transition-colors"
                >
                  Contact GuardX
                </Link>
                <Link
                  href="/web-design"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(148,163,184,0.22)] bg-[rgba(10,14,26,0.4)] px-5 py-3 font-semibold text-[#e2e8f0] hover:bg-[rgba(148,163,184,0.08)] transition-colors"
                >
                  See Web Design
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
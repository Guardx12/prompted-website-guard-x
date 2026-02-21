"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { CheckCircle, MapPin, Phone, ShieldCheck, Star, Wrench, ArrowLeft, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Sussex Roofing Specialists — Example Roofing Website Homepage",
  description:
    "Showroom example homepage for a UK roofing company. Demonstrates layout, trust, services, gallery, areas, reviews and calls to action.",
  robots: { index: false, follow: true },
}

const services = [
  { title: "Roof Repairs", desc: "Fast, reliable repairs for slipped tiles, leaks and storm damage." },
  { title: "New Roofs", desc: "Full roof replacements with slate or tile options to suit your home." },
  { title: "Flat Roofing", desc: "GRP, felt and modern flat roofing systems installed correctly." },
  { title: "Slate & Tile", desc: "Traditional slate roofing and modern tiles, fitted with care." },
  { title: "Chimneys & Leadwork", desc: "Lead flashing, chimney pointing and weatherproofing." },
  { title: "Emergency Callouts", desc: "Responsive support when you need urgent help." },
]

const areas = ["Brighton", "Worthing", "Chichester", "Horsham", "Crawley", "Littlehampton"]

const reviews = [
  { text: "Quick response, tidy work and the leak was fixed first time. Highly recommend.", rating: 5 },
  { text: "Great communication from start to finish. New roof looks fantastic.", rating: 5 },
  { text: "Turned up when they said, explained everything clearly, and did a solid job.", rating: 5 },
]

export default function RooferExamplePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Sub-nav */}
        <div className="pt-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#94a3b8] hover:text-[#e2e8f0] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Examples
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-10 pb-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(15,23,42,0.45)] px-4 py-2 text-xs text-[#e2e8f0]">
                  <ShieldCheck className="h-4 w-4 text-[#a78bfa]" />
                  Showroom demo homepage
                </div>

                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]">
                  <span className="guardx-title-char guardx-wave-char inline-block">Sussex</span>{" "}
                  <span className="guardx-title-char guardx-wave-char inline-block">Roofing</span>{" "}
                  <span className="guardx-title-char guardx-wave-char inline-block">Specialists</span>
                </h1>

                <p className="mt-5 text-lg sm:text-xl text-[#94a3b8] leading-relaxed max-w-xl">
                  Roof repairs, new roofs, slate & tile roofing across West Sussex. Friendly, professional workmanship
                  with clear quotes and tidy finishes.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-xl bg-[#3b82f6] px-6 py-3 font-semibold text-white hover:bg-[#2563eb] transition-colors"
                  >
                    Get a Free Quote
                  </a>
                  <a
                    href="#gallery"
                    className="inline-flex items-center justify-center rounded-xl border border-[rgba(148,163,184,0.22)] bg-[rgba(10,14,26,0.4)] px-6 py-3 font-semibold text-[#e2e8f0] hover:bg-[rgba(148,163,184,0.08)] transition-colors"
                  >
                    View Recent Work
                  </a>
                </div>

                {/* Trust / badges */}
                <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Google 5★", icon: Star },
                    { label: "Checkatrade", icon: CheckCircle },
                    { label: "Trustpilot", icon: CheckCircle },
                    { label: "NFRC Member", icon: ShieldCheck },
                    { label: "TrustMark", icon: ShieldCheck },
                    { label: "Fully Insured", icon: ShieldCheck },
                  ].map((b) => {
                    const Icon = b.icon
                    return (
                      <div
                        key={b.label}
                        className="flex items-center gap-2 rounded-xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)] px-3 py-2 text-sm text-[#e2e8f0]"
                      >
                        <Icon className="h-4 w-4 text-[#60a5fa]" />
                        <span className="truncate">{b.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/examples/roofer/hero.jpg"
                      alt="Roofers installing tiles on a UK roof"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#94a3b8]">Call us today</p>
                        <p className="text-lg font-semibold text-[#e2e8f0]">Free quotes • Fast response</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.18)] bg-[rgba(10,14,26,0.6)] px-3 py-1 text-xs text-[#e2e8f0]">
                        <Phone className="h-4 w-4 text-[#a78bfa]" />
                        01273 000 000
                      </div>
                    </div>
                  </div>
                </div>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle,rgba(167,139,250,0.18),transparent_60%)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 border-t border-[rgba(148,163,184,0.10)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Roofing services</h2>
                <p className="mt-2 text-[#94a3b8] max-w-2xl">
                  Everything you’d expect from a professional local roofer — explained clearly and presented cleanly.
                </p>
              </div>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgba(148,163,184,0.22)] bg-[rgba(10,14,26,0.4)] px-5 py-3 font-semibold text-[#e2e8f0] hover:bg-[rgba(148,163,184,0.08)] transition-colors"
              >
                Get a quote <Wrench className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)] p-6"
                >
                  <h3 className="text-lg font-semibold text-[#e2e8f0]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{s.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#60a5fa] font-semibold">
                    Learn more <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-16 border-t border-[rgba(148,163,184,0.10)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Recent work</h2>
                <p className="mt-2 text-[#94a3b8] max-w-2xl">
                  A clean gallery grid that looks great on mobile and gives instant trust.
                </p>
              </div>
              <div className="text-sm text-[#94a3b8]">Tap images to view</div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/images/examples/roofer/gallery1.jpg", alt: "Completed slate roof in Sussex" },
                { src: "/images/examples/roofer/gallery2.jpg", alt: "Roofer working on a UK roof" },
                { src: "/images/examples/roofer/gallery3.jpg", alt: "Roofing installation work" },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative overflow-hidden rounded-2xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 border-t border-[rgba(148,163,184,0.10)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Areas we cover</h2>
                <p className="mt-2 text-[#94a3b8] leading-relaxed max-w-xl">
                  A simple “areas covered” section makes the website feel local and real — and it’s exactly what your
                  future clients will want too.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(10,14,26,0.35)] px-4 py-2 text-sm text-[#e2e8f0]"
                    >
                      <MapPin className="h-4 w-4 text-[#60a5fa]" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)] p-7">
                <h3 className="text-lg font-semibold text-[#e2e8f0]">Why homeowners choose us</h3>
                <ul className="mt-4 space-y-3 text-[#94a3b8]">
                  {[
                    "Clear quotes with honest recommendations",
                    "Tidy work and respectful on-site behaviour",
                    "High-quality materials and proper installation",
                    "Transparent timelines and good communication",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#22c55e] mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 border-t border-[rgba(148,163,184,0.10)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Customer reviews</h2>
            <p className="mt-2 text-[#94a3b8] max-w-2xl">
              A smooth testimonial slider looks premium — and helps clients picture their own reviews here.
            </p>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {reviews.map((r, idx) => (
                <div key={idx} className="rounded-2xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)] p-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#fbbf24]" />
                    ))}
                  </div>
                  <p className="mt-4 text-[#e2e8f0] leading-relaxed">“{r.text}”</p>
                  <p className="mt-4 text-sm text-[#94a3b8]">Customer review</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="py-16 border-t border-[rgba(148,163,184,0.10)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[rgba(148,163,184,0.12)] bg-[rgba(15,23,42,0.35)] p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#e2e8f0]">Get a free roofing quote</h2>
                  <p className="mt-2 text-[#94a3b8] max-w-2xl">
                    This is a demo call-to-action section. In a real client build, this would connect to a working form,
                    phone number and WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3 font-semibold text-white hover:bg-[#2563eb] transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call 01273 000 000
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(148,163,184,0.22)] bg-[rgba(10,14,26,0.4)] px-6 py-3 font-semibold text-[#e2e8f0] hover:bg-[rgba(148,163,184,0.08)] transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-[#22c55e]" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 text-xs text-[#94a3b8]">
                Example website built by GuardX •{" "}
                <Link href="/web-design" className="text-[#60a5fa] hover:underline">
                  Web Design
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
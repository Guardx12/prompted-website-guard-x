"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Smartphone, Zap, Search, Palette, ExternalLink } from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Fade-in wrapper                                                    */
/* ------------------------------------------------------------------ */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function WebDesignPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />

      {/* ── Section 1: Hero ── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Subtle gradient blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <AnimatedPageTitle
              text="Professional Website Design"
              suffix="for Local Businesses"
              className="mb-6"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl md:text-2xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Modern, fast, SEO-ready websites designed to help your business
              stand out and generate more enquiries.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Get Your Website Built
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: Featured Project ── */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Recent Project
            </h2>
            <p className="text-[#94a3b8] text-center mb-12 text-lg">
              See what we build for real UK businesses
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-8">
<div className="rounded-2xl border border-white/10 bg-[#1e293b] overflow-hidden max-w-4xl mx-auto">
              {/* Browser mockup frame */}
              <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#1e293b] rounded-md px-3 py-1 text-xs text-[#94a3b8] text-center truncate">
                    smh-groundworks-1.vercel.app
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative aspect-video bg-[#0f172a]">
                <iframe
                  src="https://smh-groundworks-1.vercel.app"
                  title="SMH Groundworks website preview"
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Project info */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  SMH Groundworks
                </h3>
                <p className="text-[#cbd5e1] leading-relaxed mb-6">
                  Professional website built for a groundworks company, featuring
                  modern design, fast performance, and strong SEO foundation.
                </p>
                <a
                  href="https://smh-groundworks-1.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  View Live Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

<div className="rounded-2xl border border-white/10 bg-[#1e293b] overflow-hidden max-w-4xl mx-auto">
              {/* Browser mockup frame */}
              <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#1e293b] rounded-md px-3 py-1 text-xs text-[#94a3b8] text-center truncate">
                    highview-scaffolding.vercel.app
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="relative aspect-video bg-[#0f172a]">
                <iframe
                  src="https://highview-scaffolding.vercel.app"
                  title="Highview Scaffolding website preview"
                  className="w-full h-full border-0"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>

              {/* Project info */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Highview Scaffolding
                </h3>
                <p className="text-[#cbd5e1] leading-relaxed mb-6">
                  Professional website built for a scaffolding company, featuring
                  modern design, fast performance, and strong SEO foundation.
                </p>
                <a
                  href="https://highview-scaffolding.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  View Live Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
</div>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 3: Benefits ── */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              What You Get
            </h2>
            <p className="text-[#94a3b8] text-center mb-14 text-lg max-w-2xl mx-auto">
              Every website we build is designed to convert visitors into
              customers
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Palette,
                title: "Modern, professional design",
                description:
                  "Clean layouts that build trust and make your business look established.",
              },
              {
                icon: Smartphone,
                title: "Mobile-first layout",
                description:
                  "Looks perfect on every device -- phones, tablets, and desktops.",
              },
              {
                icon: Zap,
                title: "Built for performance",
                description:
                  "Lightning-fast load times so visitors stay on your site, not leave.",
              },
              {
                icon: Search,
                title: "SEO-ready structure",
                description:
                  "Structured correctly for Google indexing so you get found online.",
              },
            ].map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="rounded-xl border border-white/10 bg-[#111827] p-6 h-full transition-all duration-300 hover:border-blue-400/40 hover:bg-[#1e293b]">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get your website built?
            </h2>
            <p className="text-[#94a3b8] text-lg mb-8 max-w-xl mx-auto">
              Get in touch and we will have your new website live within weeks,
              not months.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Get Your Website Built
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-[#94a3b8] text-sm mt-8">
              See our{" "}
              <Link href="/website-design-uk" className="text-blue-400 hover:text-blue-300 underline">UK website design</Link>{" | "}
              <Link href="/web-design-west-sussex" className="text-blue-400 hover:text-blue-300 underline">West Sussex web design</Link>{" | "}
              <Link href="/web-design-for-trades" className="text-blue-400 hover:text-blue-300 underline">Web design for trades</Link>{" | "}
              <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">Pricing</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

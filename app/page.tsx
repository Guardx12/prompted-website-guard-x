"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useReducedMotion, useInView } from "framer-motion"
import {
  Code2,
  Search,
  Smartphone,
  Zap,
  Layers,
  Globe,
  BarChart3,
  FileCode,
  ArrowRight,
  CheckCircle,
  Star,
  MessageSquare,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Animated gradient background (canvas)                              */
/* ------------------------------------------------------------------ */
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || prefersReduced) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let raf: number
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      t += 0.002
      const w = canvas.width
      const h = canvas.height

      ctx.fillStyle = "#0a0e1a"
      ctx.fillRect(0, 0, w, h)

      const spots = [
        {
          x: w * (0.3 + 0.15 * Math.sin(t * 0.7)),
          y: h * (0.3 + 0.1 * Math.cos(t * 0.5)),
          r: Math.max(w, h) * 0.55,
          color: `rgba(30, 58, 138, ${0.35 + 0.1 * Math.sin(t)})`,
        },
        {
          x: w * (0.7 + 0.1 * Math.cos(t * 0.6)),
          y: h * (0.5 + 0.15 * Math.sin(t * 0.8)),
          r: Math.max(w, h) * 0.5,
          color: `rgba(88, 28, 135, ${0.25 + 0.08 * Math.cos(t * 1.1)})`,
        },
        {
          x: w * (0.5 + 0.2 * Math.sin(t * 0.4)),
          y: h * (0.7 + 0.1 * Math.cos(t * 0.9)),
          r: Math.max(w, h) * 0.45,
          color: `rgba(14, 116, 144, ${0.2 + 0.06 * Math.sin(t * 0.7)})`,
        },
        {
          x: w * (0.2 + 0.1 * Math.cos(t * 0.3)),
          y: h * (0.8 + 0.05 * Math.sin(t * 1.2)),
          r: Math.max(w, h) * 0.4,
          color: `rgba(59, 130, 246, ${0.15 + 0.05 * Math.cos(t * 0.9)})`,
        },
      ]

      spots.forEach((s) => {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r)
        g.addColorStop(0, s.color)
        g.addColorStop(1, "transparent")
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [prefersReduced])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#0a0e1a" }}
      aria-hidden="true"
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Floating particles (client-only to avoid hydration mismatch)       */
/* ------------------------------------------------------------------ */
function FloatingParticles() {
  const prefersReduced = useReducedMotion()
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[]
  >([])

  useEffect(() => {
    if (prefersReduced) return
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 12 + Math.random() * 20,
        delay: Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.25,
      }))
    )
  }, [prefersReduced])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 -z-[5] overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle, rgba(147,197,253,${p.opacity}), transparent)`,
            boxShadow: `0 0 ${p.size * 3}px rgba(147,197,253,${p.opacity * 0.5})`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 20 * (p.id % 2 === 0 ? 1 : -1), 0],
            opacity: [p.opacity, p.opacity * 1.4, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  DVD-style bouncing logo orb                                        */
/* ------------------------------------------------------------------ */
function BouncingOrb() {
  const prefersReduced = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 60, y: 40 })
  const velRef = useRef({ vx: 1.2, vy: 0.8 })
  const [pos, setPos] = useState({ x: 60, y: 40 })

  useEffect(() => {
    if (prefersReduced) return
    const container = containerRef.current
    if (!container) return

    const orbSize = 220
    let raf: number

    const step = () => {
      const rect = container.getBoundingClientRect()
      const maxX = rect.width - orbSize
      const maxY = rect.height - orbSize

      let { x, y } = posRef.current
      let { vx, vy } = velRef.current

      x += vx
      y += vy

      if (x <= 0) { x = 0; vx = Math.abs(vx); }
      if (x >= maxX) { x = maxX; vx = -Math.abs(vx); }
      if (y <= 0) { y = 0; vy = Math.abs(vy); }
      if (y >= maxY) { y = maxY; vy = -Math.abs(vy); }

      posRef.current = { x, y }
      velRef.current = { vx, vy }
      setPos({ x, y })
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    return () => cancelAnimationFrame(raf)
  }, [prefersReduced])

  return (
    <div ref={containerRef} className="relative w-full h-[340px] sm:h-[400px]">
      <div
        className="absolute"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          willChange: "transform",
        }}
      >
        {/* Outer glow */}
        <div
          className="absolute -inset-10 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(88,28,135,0.12) 40%, transparent 70%)",
            filter: "blur(30px)",
            animation: prefersReduced ? "none" : "pulse 4s ease-in-out infinite",
          }}
        />
        {/* Glass orb */}
        <div
          className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
            boxShadow: "0 0 60px rgba(59,130,246,0.2), inset 0 0 60px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Image
            src="/images/guardx-final-logo.jpg"
            alt="GuardX Logo"
            width={180}
            height={180}
            className="rounded-full object-cover w-[170px] h-[170px] sm:w-[190px] sm:h-[190px]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Animated headline with wave + shimmer                              */
/* ------------------------------------------------------------------ */
function AnimatedHeadline() {
  const prefersReduced = useReducedMotion()
  const words = "Website Design & SEO Foundation".split(" ")
  const line2 = "for Local Businesses"

  /* Build a flat index so each letter gets a unique wave delay */
  let globalIndex = 0

  return (
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
      <span className="relative inline">
        {prefersReduced ? (
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #93c5fd, #818cf8, #a78bfa, #60a5fa, #93c5fd)",
              backgroundSize: "300% 300%",
            }}
          >
            {words.join(" ")}
          </span>
        ) : (
          words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((char) => {
                const idx = globalIndex++
                return (
                  <span
                    key={idx}
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #93c5fd, #818cf8, #a78bfa, #60a5fa, #93c5fd)",
                      backgroundSize: "300% 300%",
                      animation: `gradientShift 8s ease infinite, waveFloat 3s ease-in-out ${idx * 0.04}s infinite`,
                    }}
                  >
                    {char}
                  </span>
                )
              })}
              {wi < words.length - 1 && <span className="inline-block">{"\u00A0"}</span>}
            </span>
          ))
        )}
        {/* Shimmer pass */}
        {!prefersReduced && (
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
              animation: "shimmer 4s ease-in-out infinite",
              width: "40%",
            }}
            aria-hidden="true"
          />
        )}
      </span>{" "}
      <span className="text-white">{line2}</span>
    </h1>
  )
}

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper                                              */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReduced ? {} : { opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/*  Feature card with glow hover                                       */
/* ------------------------------------------------------------------ */
function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ElementType
  title: string
  description: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:scale-[1.03] bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl mb-5 bg-[rgba(59,130,246,0.15)] group-hover:bg-[rgba(59,130,246,0.25)] transition-colors duration-300">
          <Icon className="w-7 h-7 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#94a3b8] leading-relaxed">{description}</p>
      </div>
    </Reveal>
  )
}

/* ------------------------------------------------------------------ */
/*  Pricing card                                                       */
/* ------------------------------------------------------------------ */
function PricingCard({
  title,
  price,
  unit,
  features,
  highlight = false,
  delay = 0,
}: {
  title: string
  price: string
  unit?: string
  features: string[]
  highlight?: boolean
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={`relative rounded-2xl p-8 transition-all duration-500 hover:scale-[1.03] ${
          highlight
            ? "bg-white/[0.08] border-2 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            : "bg-white/[0.04] border border-white/10"
        } backdrop-blur-sm`}
      >
        {highlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full tracking-wider uppercase">
            Most Popular
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          {unit && <span className="text-[#94a3b8] ml-1 text-base">{unit}</span>}
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-[#94a3b8]">
              <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
            highlight
              ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          Get a Quote
        </Link>
      </div>
    </Reveal>
  )
}

/* ================================================================== */
/*  MAIN PAGE                                                          */
/* ================================================================== */
export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <FloatingParticles />

      <Navigation />

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Copy */}
            <div className="flex-1 text-center lg:text-left">
              <Reveal>
                <AnimatedHeadline />
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-lg sm:text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Modern, lightning-fast websites built to rank. Structured correctly for Google from day one so your
                  business gets found by the right customers.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    View Portfolio <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-bold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Bouncing logo orb */}
            <Reveal delay={0.2} className="flex-1 w-full">
              <BouncingOrb />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  WEBSITE DESIGN FEATURES                                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 text-balance">
              What You Get
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#94a3b8] text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              Every site we build is custom-designed, fully responsive, and engineered for performance.
              No templates. No shortcuts.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Code2}
              title="Modern Professional Design"
              description="Bespoke designs tailored to your brand identity. Hand-crafted for a premium look that builds instant trust with customers."
              delay={0}
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile-Friendly & Responsive"
              description="Flawless experience on every device. Mobile-first design ensures your site works perfectly wherever customers find you."
              delay={0.1}
            />
            <FeatureCard
              icon={Zap}
              title="Fast Loading Performance"
              description="Sub-second load times with optimised images, clean code, and modern hosting infrastructure that keeps visitors engaged."
              delay={0.2}
            />
            <FeatureCard
              icon={Layers}
              title="Clear Structure for Enquiries"
              description="Strategic layout and clear calls-to-action designed to guide visitors towards contacting your business."
              delay={0.3}
            />
            <FeatureCard
              icon={Search}
              title="Strong SEO Foundation"
              description="Proper meta tags, semantic HTML, clean URLs, and Core Web Vitals optimisation built into every page from day one."
              delay={0.4}
            />
          </div>

          <Reveal delay={0.5}>
            <div className="mt-12 max-w-3xl mx-auto rounded-xl bg-white/[0.05] border border-white/10 p-6 text-center">
              <p className="text-[#cbd5e1] leading-relaxed">
                {"We don't run ongoing SEO campaigns \u2014 we build a strong SEO foundation so your website is ready to rank."}
              </p>
              <p className="text-[#94a3b8] text-sm mt-4">
                Learn more about our{" "}
                <Link href="/web-design" className="text-blue-400 hover:text-blue-300 underline">web design services</Link>,{" "}
                <Link href="/website-design-uk" className="text-blue-400 hover:text-blue-300 underline">UK website design</Link>, or{" "}
                <Link href="/seo-foundation" className="text-blue-400 hover:text-blue-300 underline">SEO foundation</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SEO FOUNDATION DETAIL                                        */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                  SEO Foundation Built In
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#94a3b8] text-lg mb-6 leading-relaxed">
                  Every website we deliver comes with a solid SEO foundation baked into the build. Your site
                  is structured correctly for Google from the start &mdash; proper meta tags, semantic HTML, fast load times,
                  mobile optimisation, and clean URLs.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-xl bg-white/[0.05] border border-white/10 p-6 mb-6">
                  <p className="text-[#cbd5e1] text-sm leading-relaxed">
                    <strong className="text-white">Included with Professional Website:</strong> Our Professional Website
                    package includes strong SEO foundation setup, ensuring your website is structured correctly and ready
                    for Google indexing. This is a one-time setup built into the website.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <ul className="space-y-4">
                  {[
                    "Proper heading hierarchy & semantic HTML5",
                    "Optimised meta titles & descriptions",
                    "XML sitemap & robots.txt configuration",
                    "Core Web Vitals optimisation",
                    "Mobile-first indexing ready",
                    "Fast page load speeds",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#94a3b8]">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Visual grid */}
            <Reveal delay={0.2} className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: Search, label: "SEO Ready" },
                    { icon: Globe, label: "Clean URLs" },
                    { icon: BarChart3, label: "Core Web Vitals" },
                    { icon: FileCode, label: "Clean Code" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm"
                    >
                      <item.icon className="w-10 h-10 text-blue-400" />
                      <span className="text-white font-semibold text-sm text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING                                                      */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4 text-balance">
              Transparent Pricing
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#94a3b8] text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed">
              Simple, honest pricing with no hidden fees.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <PricingCard
              title="Starter Website"
              price="from &pound;500"
              features={[
                "Modern professional website",
                "Mobile-friendly design",
                "Built to generate enquiries",
              ]}
              delay={0}
            />
            <PricingCard
              title="Website + SEO Foundation"
              price="from &pound;1,000"
              features={[
                "Everything in Starter, plus:",
                "Strong SEO foundation setup",
                "Proper page structure",
                "Optimised titles and descriptions",
                "Built ready for Google indexing",
              ]}
              highlight
              delay={0.1}
            />
            <PricingCard
              title="Hosting"
              price="&pound;30"
              unit="/ month"
              features={[
                "Fast, secure hosting and ongoing support",
              ]}
              delay={0.2}
            />
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/pricing"
                className="text-blue-400 hover:text-blue-300 underline text-lg font-medium"
              >
                View full pricing details
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  REVIEW GENERATION ADD-ON                                     */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 backdrop-blur-sm p-8 sm:p-12 text-center">
              {/* Subtle glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(59,130,246,0.15)]">
                    <Star className="w-7 h-7 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[rgba(59,130,246,0.15)]">
                    <MessageSquare className="w-7 h-7 text-blue-400" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
                  Need More Google Reviews?
                </h2>
                <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Review Generation is available as an optional add-on service to help businesses collect more Google
                  reviews. Automated email and SMS review requests that boost your online visibility.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/review-generation"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  >
                    Learn About Review Generation <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/real-results"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-bold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                  >
                    See Results
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready to Build a Website That Actually Works?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[#94a3b8] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us design and build a premium website with proper SEO foundations so your
              business gets found by the right customers.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/web-design"
                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                View Our Work <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white hover:bg-white/20 px-8 py-4 text-lg font-bold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Get a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}

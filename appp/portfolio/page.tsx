"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />

      <section className="pt-20 pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedPageTitle text="Our Portfolio" className="mb-6" />
          <p className="text-lg sm:text-xl text-[#94a3b8] mb-16 max-w-2xl mx-auto leading-relaxed">
            Premium websites designed and built for local businesses across the UK.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { label: "E-commerce Rebuild", tag: "Shopify", desc: "Complete store redesign with optimised checkout flow." },
              { label: "Service Business Site", tag: "Next.js", desc: "High-performance site for a multi-location trades business." },
              { label: "Multi-Location Brand", tag: "WordPress", desc: "Scalable brand site with location-specific landing pages." },
              { label: "Restaurant & Booking", tag: "Custom", desc: "Online ordering and table booking system with SEO foundation." },
              { label: "Professional Services", tag: "Next.js", desc: "Lead-generation site for an accountancy firm." },
              { label: "Fitness Studio", tag: "React", desc: "Class booking integration with membership management." },
            ].map((item) => (
              <div
                key={item.label}
                className="group relative rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1e293b] to-[#0f172a] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-blue-400" />
                    </div>
                    <span className="text-[#64748b] text-sm">{item.tag}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

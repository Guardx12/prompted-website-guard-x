import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design for Tradespeople & Trade Businesses",
  description:
    "Professional website design for tradespeople. Builders, plumbers, electricians, and landscapers. Modern websites with SEO foundation to generate local enquiries.",
}

export default function WebDesignTradesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Web Design" suffix="for Tradespeople" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              You are great at your trade. Let GuardX build you a website that matches. Professional websites for builders, plumbers, electricians, landscapers, and all trades -- designed to generate local enquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Why Trades Need Websites */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Tradespeople Need a Website</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Word of mouth is powerful, but most homeowners now check Google before hiring a tradesperson. A professional website gives you credibility and helps you win more jobs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Win More Jobs", desc: "Homeowners compare tradespeople online. A professional website puts you ahead of competitors who only use social media or directories." },
                { title: "Look Professional", desc: "A clean, modern website shows customers you take your business seriously and can be trusted with their project." },
                { title: "Get Found on Google", desc: "With strong SEO foundation, your website appears when local customers search for your trade in their area." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-[#1e293b] p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trades We Work With */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Trades We Build Websites For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Builders",
                "Plumbers",
                "Electricians",
                "Landscapers",
                "Roofers",
                "Painters & Decorators",
                "Kitchen Fitters",
                "Bathroom Fitters",
                "Groundworkers",
                "Plasterers",
                "Fencing & Decking",
                "General Handymen",
              ].map((trade) => (
                <div key={trade} className="rounded-lg border border-white/10 bg-[#1e293b] p-4 text-center">
                  <span className="text-[#cbd5e1] font-medium">{trade}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Is Included */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What Your Trade Website Includes</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Professional design that showcases your work",
                "Mobile-friendly so customers can find you on any device",
                "Clear calls-to-action and contact forms",
                "Photo galleries to display completed projects",
                "Strong SEO foundation for local Google search",
                "Fast loading speed on all devices",
                "Secure hosting available for \u00a330/month",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1] text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Your Trade Online?</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Websites from just <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">{"\u00A3"}500</Link>. See our{" "}
              <Link href="/web-design" className="text-blue-400 hover:text-blue-300 underline">web design services</Link> or{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">contact us</Link> for a free quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Contact GuardX <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

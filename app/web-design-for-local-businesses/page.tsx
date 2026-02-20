import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design for Local Businesses",
  description:
    "Professional web design built specifically for local UK businesses. Modern websites that generate enquiries, with an optional SEO Foundation upgrade for stronger Google visibility.",
}

export default function WebDesignLocalBusinessesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Web Design" suffix="for Local Businesses" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Your website is the first impression most customers get of your business. GuardX builds professional, modern websites specifically for local UK businesses that need to attract and convert local customers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Why Local Businesses Need a Good Website */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why Your Local Business Needs a Professional Website</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                { title: "Customers Search Online First", desc: "Most people search Google before choosing a local business. If your website looks outdated or does not exist, you lose those customers to competitors." },
                { title: "First Impressions Matter", desc: "A professional website builds instant trust. Customers judge your business by your website within seconds." },
                { title: "Generate More Enquiries", desc: "A well-designed website with clear contact information and calls-to-action turns visitors into paying customers." },
                { title: "Available 24/7", desc: "Your website works for you around the clock, even when you are not available to answer the phone." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-[#1e293b] p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What Every GuardX Website Includes</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Modern, professional design tailored to your business",
                "Fully mobile-friendly and responsive",
                "Fast loading times for better user experience",
                "Optional SEO Foundation upgrade to help you rank on Google",
                "Clear contact forms and calls-to-action",
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

        {/* Industries */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Who We Build Websites For</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              GuardX works with all types of local businesses across the UK. Whether you are a tradesperson, a salon, a gym, or a local shop, we can build the right website for you.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Builders & Tradespeople",
                "Plumbers & Electricians",
                "Hair & Beauty Salons",
                "Gyms & Personal Trainers",
                "Restaurants & Cafes",
                "Estate Agents",
                "Accountants",
                "Local Shops & Retailers",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-[#1e293b] p-4 text-center">
                  <span className="text-[#cbd5e1] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Your Business Online</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              See our <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing</Link>, browse our{" "}
              <Link href="/website-design-uk" className="text-blue-400 hover:text-blue-300 underline">UK website design</Link> services, or{" "}
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

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design UK | Professional Sites for Local Businesses",
  description:
    "GuardX provides professional website design for UK local businesses. Modern, fast, mobile-friendly websites with strong SEO foundation built to generate enquiries.",
}

export default function WebsiteDesignUKPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Professional Website

Includes:

Everything included in the Starter Website, plus:

Full SEO-ready website structure
Dedicated service pages for improved search visibility
Location-based pages to help target your service areas
Proper heading and content structure for Google indexing
Optimised page speed and performance
Clean URL structure for long-term scalability
Metadata and page structure optimised for search engines
Internal linking structure designed for clarity and performance
Built using modern frameworks for speed, performance, and reliability
 Design" suffix="for UK Businesses" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              GuardX builds modern, high-performance websites for local UK businesses. Every site we create is designed to look professional, load fast, and generate real enquiries from potential customers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">What We Build</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Every GuardX website is built from scratch to suit your business. No templates. No page builders. Just clean, professional websites that work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Modern Professional Design", desc: "Clean layouts with clear calls-to-action that make your business look credible and trustworthy." },
                { title: "Mobile-Friendly", desc: "Every website is fully responsive and works perfectly on phones, tablets, and desktops." },
                { title: "Fast Loading", desc: "Optimised for speed so visitors stay on your site and Google ranks it higher." },
                { title: "Built for Enquiries", desc: "Clear contact forms, phone numbers, and calls-to-action placed where visitors expect them." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-[#1e293b] p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Foundation */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">SEO Foundation Included</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Every website we build includes a strong SEO foundation so Google can find, crawl, and understand your site from day one.
            </p>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Correct heading structure (H1, H2, H3)",
                "Meta titles and descriptions on every page",
                "Clean URL structure",
                "Fast page load speed",
                "Mobile-first responsive design",
                "Image optimisation and alt text",
                "Structured data where applicable",
                "Internal linking between pages",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Local Businesses Choose GuardX</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "No Ongoing SEO Fees", desc: "We build your site with a strong SEO foundation. No expensive monthly SEO contracts." },
                { title: "Affordable Pricing", desc: "Websites starting from just \u00a3500. Professional design without the agency price tag." },
                { title: "UK Based Support", desc: "GuardX is based in West Sussex. Real people you can talk to when you need help." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Your Website Built?</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact GuardX today for a free, no-obligation quote. See our{" "}
              <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing</Link> or{" "}
              <Link href="/web-design" className="text-blue-400 hover:text-blue-300 underline">web design services</Link> for more details.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


<p>Built using modern, professional technology for speed, reliability, and long-term performance.</p>

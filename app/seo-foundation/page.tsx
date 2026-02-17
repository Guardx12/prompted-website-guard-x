import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Foundation for Local Businesses",
  description:
    "GuardX builds websites with strong SEO foundation so Google can find and rank your business. Correct structure, fast loading, and mobile-friendly design.",
}

export default function SEOFoundationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="SEO Foundation" suffix="for Local Businesses" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              Every GuardX website is built with a strong SEO foundation. This means your site is structured correctly so Google can find, crawl, and understand your business from the moment it goes live.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* What is SEO Foundation */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">What Is SEO Foundation?</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              SEO foundation is the technical and structural setup that allows search engines like Google to properly index your website. Without it, even the best-looking website may never appear in search results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Correct Heading Structure", desc: "Proper H1, H2, and H3 tags that tell Google exactly what each page is about." },
                { title: "Meta Titles & Descriptions", desc: "Every page gets a unique, keyword-optimised title and description that appears in Google search results." },
                { title: "Clean URL Structure", desc: "Human-readable URLs that are easy for both visitors and search engines to understand." },
                { title: "Fast Page Speed", desc: "Optimised code and images ensure your site loads quickly, which Google rewards with higher rankings." },
                { title: "Mobile-First Design", desc: "Google indexes the mobile version of your site first. Every GuardX site is built mobile-first." },
                { title: "Image Optimisation", desc: "Compressed images with proper alt text so Google can understand your visual content." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-[#1e293b] p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Why SEO Foundation Matters</h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                "A beautiful website means nothing if Google cannot find it.",
                "Most local customers search Google before choosing a business.",
                "Websites with strong SEO foundation appear in search results faster.",
                "Correct structure means you do not need expensive ongoing SEO campaigns.",
                "Your website works harder for you from day one.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1] text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Not Ongoing SEO */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">SEO Foundation, Not Ongoing SEO</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-8">
              GuardX provides a strong SEO foundation as part of every website build. We do not provide ongoing SEO campaigns or monthly SEO services. Your site is built correctly from the start so it has the best possible chance of ranking without expensive monthly fees.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Want to see our full website design offering? Visit our{" "}
              <Link href="/web-design" className="text-blue-400 hover:text-blue-300 underline">web design page</Link> or check our{" "}
              <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Your Website Built With Strong SEO Foundation</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact GuardX today for a free, no-obligation quote.
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

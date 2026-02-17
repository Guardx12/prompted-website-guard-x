import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design in West Sussex",
  description:
    "Professional website design for businesses in West Sussex. Modern websites with SEO foundation built by GuardX, based in West Sussex.",
}

export default function WebDesignWestSussexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Website Design" suffix="in West Sussex" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              GuardX is based in West Sussex and builds professional websites for local businesses across the county. Modern design, strong SEO foundation, and affordable pricing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Website Design for West Sussex */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Website Design for West Sussex Businesses</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Whether you are based in Chichester, Worthing, Crawley, Horsham, Bognor Regis, or anywhere else in West Sussex, GuardX can build you a professional website that helps your business grow. We understand the local market and build websites that work for businesses in this area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Local Business Understanding", desc: "We are based in West Sussex ourselves. We understand how local customers search for and choose businesses in this area." },
                { title: "Face-to-Face Available", desc: "Unlike remote agencies, we can meet in person to discuss your project if preferred." },
                { title: "Affordable for Local Businesses", desc: "Professional websites starting from just \u00a3500. No agency price tags." },
                { title: "Ongoing Support", desc: "Secure hosting and ongoing support for \u00a330/month. Real people you can contact when you need help." },
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">SEO Foundation Setup</h2>
            <p className="text-lg text-[#94a3b8] max-w-3xl mx-auto text-center mb-12 leading-relaxed">
              Every GuardX website includes a strong <Link href="/seo-foundation" className="text-blue-400 hover:text-blue-300 underline">SEO foundation</Link> so your business can be found on Google by local customers.
            </p>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Correct heading and page structure for Google",
                "Meta titles and descriptions targeting local keywords",
                "Fast loading speed for better rankings",
                "Mobile-first responsive design",
                "Clean URL structure",
                "Image optimisation with alt text",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1] text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of a Professional Website</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Build Trust Instantly", desc: "A professional website makes customers confident in choosing your business over competitors." },
                { title: "Generate Enquiries 24/7", desc: "Your website works around the clock to bring in leads even when you are not available." },
                { title: "Stand Out Locally", desc: "Many local businesses still do not have a proper website. Stand out from your competition." },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Your West Sussex Business Online</h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              See our <Link href="/web-design" className="text-blue-400 hover:text-blue-300 underline">web design services</Link>,
              check our <Link href="/pricing" className="text-blue-400 hover:text-blue-300 underline">pricing</Link>, or{" "}
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

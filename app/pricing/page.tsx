import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckCircle2, ArrowRight } from "lucide-react"

const features = [
  "Custom website build",
  "George AI assistant built into your site",
  "Hosting included",
  "Enquiry capture",
  "Ongoing updates",
  "Business-specific setup and wording",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white">
      <Navigation />
      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Simple pricing</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">George Website</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#94a3b8]">
            A modern website with George built in to answer customer questions and capture enquiries automatically.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-white/5 p-8 shadow-2xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Everything included</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-bold">£99</span>
                <span className="pb-1 text-lg text-[#94a3b8]">/ month</span>
              </div>
            </div>
            <Link href="/meet-george" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-bold text-white hover:bg-blue-600">
              Meet George <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-400" />
                <span className="text-[#e2e8f0]">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0f172a] p-5 text-sm text-[#cbd5e1]">
            This is the main GuardX offer right now. Review generation remains available separately if you need it later.
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

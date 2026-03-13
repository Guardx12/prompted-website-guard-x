
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#f8fbff_35%,#ffffff_100%)]">
      <Navigation />
      <main>
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4">Simple Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">A website powered by George for £99/month</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Everything focused around George — your website, hosting, and AI assistant in one clean monthly offer.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-8 md:p-10">
              <div className="text-center mb-10">
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 mb-3">George Website</p>
                <div className="text-5xl font-bold text-slate-900">£99<span className="text-xl text-slate-500 font-medium">/month</span></div>
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                  Turn your website into a 24/7 salesperson with George answering customer questions and capturing enquiries automatically.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                {[
                  "Custom website build included",
                  "George AI assistant built into your website",
                  "Hosting included",
                  "Enquiry capture built in",
                  "Mobile-friendly professional design",
                  "Ongoing updates and improvements",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-center">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Optional extra</h2>
                <p className="text-slate-700">
                  Need more Google reviews as well? Review generation stays as a separate service and can be added later.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/meet-george" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                  Meet George
                </Link>
                <Link href="/faq" className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                  Read the FAQ
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

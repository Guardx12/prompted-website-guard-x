import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Globe, MessageSquare, Search, Server } from "lucide-react"

const included = [
  "Modern, professional website built for local UK businesses",
  "Mobile-friendly design across phones, tablets and desktops",
  "Clear layout designed to generate enquiries",
  "George AI assistant built into your site",
  "Contact form and enquiry capture",
  "Hosting included to keep your website live and accessible",
]

const seoFoundation = [
  "SEO-ready structure",
  "Service pages structured for better search visibility",
  "Location pages to target your service areas",
  "Clean URL structure and internal linking",
  "Meta titles and descriptions set up properly",
  "Sitemap.xml and robots.txt included",
  "Speed and performance optimised",
  "Structured correctly for Google indexing",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              Website + George + Hosting
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple pricing for a website powered by George.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] sm:text-xl">
              The aim is simple: a fast modern website, George built into it, hosting included, and a strong SEO foundation underneath it.
            </p>
          </div>

          <div className="mt-10 rounded-[30px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George Website</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£99</span>
                  <span className="pb-1 text-lg text-[#DBEAFE]">/ month</span>
                </div>
              </div>
              <Link
                href="/meet-george"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#1D4ED8] transition hover:bg-[#EFF6FF]"
              >
                <Image src="/george-logo.png" alt="George" width={24} height={24} className="h-6 w-6 rounded-md" /> <span>Meet George</span> <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#DBEAFE]">
              George can answer questions about pricing, FAQs, contact details, and how your business works — while the website itself is still built to look professional, load quickly, and give you a proper foundation online.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <Globe className="h-9 w-9 text-[#1D4ED8]" />
              <h2 className="mt-4 text-xl font-bold">What is included</h2>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <Search className="h-9 w-9 text-[#1D4ED8]" />
              <h2 className="mt-4 text-xl font-bold">SEO foundation included</h2>
              <ul className="mt-5 space-y-3">
                {seoFoundation.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <MessageSquare className="h-9 w-9 text-[#1D4ED8]" />
              <h2 className="mt-4 text-xl font-bold">Important to know</h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-[#475569]">
                <p>
                  George is the main feature — an AI assistant that can answer questions and capture enquiries directly on your website.
                </p>
                <p>
                  We do <strong>not</strong> provide ongoing SEO in this package. What we do is build the site with the right structure, setup, speed, and indexing foundations from the start.
                </p>
                <div className="rounded-2xl bg-[#F8FAFC] p-4">
                  <Server className="mb-3 h-6 w-6 text-[#1D4ED8]" />
                  <p className="font-semibold text-[#0F172A]">Hosting included</p>
                  <p className="mt-2 text-sm leading-6 text-[#475569]">
                    Hosting is included to keep your website live, fast, and properly deployed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Want more Google reviews as well?</h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[#475569]">
              Review generation is available separately. It is not bundled into this package so the George offer stays clean and straightforward.
            </p>
            <div className="mt-5">
              <Link
                href="/review-generation"
                className="inline-flex items-center justify-center rounded-2xl border border-[#CBD5E1] bg-white px-5 py-3 font-semibold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-white"
              >
                Learn about review generation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

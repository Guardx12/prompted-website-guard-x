import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Globe, MessageSquare, Search, Server } from "lucide-react"

const websiteIncluded = [
  "Modern, professional website built for local UK businesses",
  "Mobile-friendly design across phones, tablets and desktops",
  "Clear layout designed to generate enquiries",
  "George AI assistant built into your site",
  "Contact form and enquiry capture",
  "Hosting and maintenance included",
]

const georgeIncluded = [
  "George trained around your business",
  "Answers questions about services, pricing, FAQs, and contact details",
  "Hosted AI assistant page linked from your existing website",
  "Lead capture and contact handoff",
  "Managed and maintained by GuardX",
  "Ideal if you already have a website and just want George",
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
              George on his own, or a full website with George built in
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple pricing for George, or a full website powered by George.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] sm:text-xl">
              Keep your existing website and add George, or let GuardX build you a modern website with George, hosting, maintenance, and SEO foundations included.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[30px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:p-8">
              <div className="flex flex-col gap-6 lg:min-h-[260px] lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George AI assistant</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-5xl font-extrabold">£99</span>
                    <span className="pb-1 text-lg text-[#DBEAFE]">/ month</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#DBEAFE]">
                    Add George to your existing website as a hosted AI receptionist and sales assistant that answers questions, explains services, gives pricing guidance, and captures enquiries.
                  </p>
                </div>
                <Link
                  href="/meet-george"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-3 font-bold text-[#1D4ED8] transition hover:bg-[#EFF6FF]"
                >
                  <Image src="/george-logo.png" alt="George" width={38} height={38} className="h-8 w-8 rounded-md" /> <span>Meet George</span> <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 lg:min-h-[260px] lg:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Website + George</p>
                  <div className="mt-3 flex items-end gap-2">
                    <span className="text-5xl font-extrabold">£149</span>
                    <span className="pb-1 text-lg text-[#475569]">/ month</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#475569]">
                    A modern website with George built into it, plus hosting, maintenance, enquiry capture, and SEO foundations included.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#D1D5DB] bg-white px-6 py-3 font-bold text-[#0F172A] transition hover:border-[#BFDBFE] hover:bg-[#F8FAFC]"
                >
                  Ask about a website
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-[#DBEAFE] bg-[#F8FBFF] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1D4ED8]">Early adopter offer</p>
            <p className="mt-3 text-base leading-7 text-[#475569]">
              First 10 clients only: <strong>George £79/month</strong> and <strong>Website + George £129/month</strong>. Early adopter pricing stays locked in for those first clients.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <MessageSquare className="h-9 w-9 text-[#1D4ED8]" />
              <h2 className="mt-4 text-xl font-bold">What George includes</h2>
              <ul className="mt-5 space-y-3">
                {georgeIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                    <span className="text-sm leading-6 text-[#475569]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <Globe className="h-9 w-9 text-[#1D4ED8]" />
              <h2 className="mt-4 text-xl font-bold">What Website + George includes</h2>
              <ul className="mt-5 space-y-3">
                {websiteIncluded.map((item) => (
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
          </div>

          <div className="mt-10 rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div>
                <h3 className="text-2xl font-bold">Important to know</h3>
                <div className="mt-4 space-y-4 text-sm leading-6 text-[#475569]">
                  <p>
                    George is the main feature — an AI receptionist and sales assistant that can answer questions and capture enquiries for your business.
                  </p>
                  <p>
                    We do <strong>not</strong> provide ongoing SEO in this package. What we do is build the site with the right structure, setup, speed, and indexing foundations from the start.
                  </p>
                  <p>
                    If you already have a website, George can live on a hosted page managed by GuardX and be linked from your existing site.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <Server className="mb-3 h-6 w-6 text-[#1D4ED8]" />
                <p className="font-semibold text-[#0F172A]">Hosting included</p>
                <p className="mt-2 text-sm leading-6 text-[#475569]">
                  Hosting is included on the Website + George plan to keep your website live, fast, and properly deployed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

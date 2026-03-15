import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react"

const georgeIncluded = [
  "George trained around your business",
  "Answers questions about services, pricing, FAQs, and contact details",
  "Natural conversations with visitors on your website",
  "Lead capture and contact handoff",
  "Set up and managed for you",
  "Works 24/7 even when you are busy or closed",
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              Simple monthly pricing
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              George for £49 per month.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#475569] sm:text-xl">
              George is a trained digital member of staff for your website. We set him up and train him on your business so he can start helping visitors straight away.
            </p>
          </div>

          <div className="mt-10 max-w-3xl rounded-[30px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.24)] sm:p-8">
            <div className="flex flex-col gap-6 lg:min-h-[260px] lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">George</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold">£49</span>
                  <span className="pb-1 text-lg text-[#DBEAFE]">/ month</span>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[#DBEAFE]">
                  A trained digital member of staff for your website that answers questions, explains services, and captures enquiries.
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE]">
                  We set George up for you and train him on your business, so there is nothing technical for you to build yourself.
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

          <div className="mt-10 max-w-3xl rounded-[26px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
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

          <div className="mt-10 max-w-3xl rounded-[26px] border border-[#E5E7EB] bg-[#F8FAFC] p-6 shadow-sm">
            <h3 className="text-2xl font-bold">Important to know</h3>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#475569]">
              <p>
                George acts like a 24/7 receptionist and salesperson for your website. He answers the questions people ask before they get in touch, so you do not have to keep repeating yourself.
              </p>
              <p>
                George is trained on your business, your services, your pricing, and the questions your customers ask all the time.
              </p>
              <p>
                Pricing is simple: <strong>£49 per month</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

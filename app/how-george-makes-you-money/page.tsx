import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const bullets = [
  "Acts as a digital member of staff on your website",
  "Guides visitors before they arrive and while they’re in your park",
  "Helps customers plan their visit (tickets, timings, what to expect)",
  "Directs visitors straight to booking, tickets, and key pages",
  "Reduces friction before purchase, increasing conversions",
  "Answers common questions instantly, saving staff time",
  "Helps visitors find their way around the park",
  "Reduces confusion and ‘where do we go?’ moments",
  "Suggests what to do next, improving the visitor experience",
  "Guides movement around the park to increase engagement with attractions",
  "Encourages visitors to explore more areas of the park",
  "Highlights key experiences so visitors don’t miss important attractions",
  "Shares interesting animal facts, enhancing the day out",
  "Keeps visitors engaged while they’re at exhibits",
  "Acts like a live guide, not just a static map or sign",
  "Suggests food and drink naturally, helping increase on-site spend",
  "Encourages well-timed breaks, improving customer satisfaction",
  "Adapts to where the visitor is and what they’re doing",
  "Responds in real time to visitor questions via voice or text",
  "Works as a constant support system throughout the visit",
  "Helps families make decisions faster and easier",
  "Improves overall customer experience and flow of the day",
  "Reduces pressure on staff answering repetitive questions",
  "Creates a more premium, modern experience for visitors",
  "Gives every visitor the feeling of having their own personal guide",
  "Runs 24/7 without breaks, handling unlimited conversations",
  "Easy to access via website or QR code — no app required",
  "Can be tailored to your park, attractions, and layout",
  "Helps turn more visitors into happy, returning customers",
]

export default function HowGeorgeMakesYouMoneyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[#DADCE0] bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.35),rgba(255,255,255,1)_38%),linear-gradient(135deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              How George Makes You Money
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#475569] sm:text-xl">
              Everything below is designed to improve visitor experience, reduce staff pressure, increase bookings, and increase on-site spend.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-2 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="rounded-2xl border border-[#DBEAFE] bg-[linear-gradient(135deg,rgba(239,246,255,0.95)_0%,rgba(255,255,255,1)_100%)] px-5 py-4 text-base font-semibold leading-7 text-[#1D4ED8] shadow-sm sm:text-lg">
                {bullet}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white">
              Try George free for 7 days <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-[#0F172A]">
              See George in action
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

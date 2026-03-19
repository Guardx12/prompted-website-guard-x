import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Coins, MapPinned, Sparkles, Users } from "lucide-react"

const moneyPoints = [
  "Helps more visitors reach booking, tickets, and key pages before they drift away",
  "Makes the experience easier for families, which increases confidence and conversion",
  "Guides people around the site so they discover more attractions, food, and paid extras",
  "Answers repetitive questions instantly, reducing pressure on staff",
  "Keeps visitors engaged for longer with suggestions, explanations, and next-step guidance",
  "Creates a more premium, modern experience that makes the park feel better organised",
]

const capabilityGroups = [
  {
    title: "Visitor guidance",
    icon: MapPinned,
    points: [
      "Plans the day and suggests what to do next",
      "Helps with website directions, travel directions, and on-site directions",
      "Guides visitors towards key areas, experiences, and facilities",
    ],
  },
  {
    title: "Family experience",
    icon: Users,
    points: [
      "Can make the experience more fun for children",
      "Can run simple adventures like finding animals around the park",
      "Keeps families moving instead of standing around unsure what to do",
    ],
  },
  {
    title: "Commercial value",
    icon: Coins,
    points: [
      "Naturally suggests food, drinks, breaks, and next activities",
      "Helps more visitors notice what is available on site",
      "Turns a passive website into an active revenue tool",
    ],
  },
]

export default function HowGeorgeMakesYouMoneyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />

      <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#DBEAFE] bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.35),rgba(255,255,255,1)_38%),linear-gradient(135deg,#ffffff_0%,#f8fbff_100%)] p-6 shadow-[0_24px_90px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
              <Sparkles className="h-4 w-4" />
              Revenue, visitor flow, and experience
            </div>
            <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">
              How George makes you money
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#475569]">
              George is not just a nice feature on a website. He helps more people book, arrive with confidence, find their way, stay engaged, discover more of what you offer, and spend more while they are there.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-[#0F172A] sm:text-lg">
              He acts like a digital member of staff that guides visitors before they arrive, while they are on site, and when they are deciding what to do next.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[#DBEAFE] bg-white p-4 shadow-[0_18px_50px_rgba(29,78,216,0.08)] sm:p-6">
            <Image
              src="/george-capabilities-poster.png"
              alt="George capabilities poster"
              width={1400}
              height={1980}
              className="h-auto w-full rounded-[20px]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.title} className="rounded-[28px] border border-[#DBEAFE] bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#1D4ED8]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-[#0F172A]">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#475569] sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#1D4ED8]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] p-6 text-white shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">What changes when George is live</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">More guided visitors. More confident families. More commercial upside.</h2>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
                {moneyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BFDBFE]">Simple summary</p>
              <p className="mt-4 text-2xl font-extrabold leading-tight text-white">
                George helps you get more people through the gate, improves their experience while they are there, and increases how much they spend on site.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3 font-bold text-white">
                  <span>Start your 7-day free trial</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
                  See George in action
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

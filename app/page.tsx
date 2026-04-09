import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, BadgeCheck, MessageCircleMore, ShieldCheck, Sparkles, TrendingUp, Waves } from "lucide-react"

export const metadata: Metadata = {
  title: "George | Turn Your Website Into a 24/7 Salesperson",
  description:
    "George talks to your visitors, answers questions instantly, and helps turn more of your traffic into enquiries, bookings, and sales.",
  alternates: { canonical: "https://guardxnetwork.com" },
}

const whyGeorgeExists = [
  "People want answers instantly.",
  "Businesses miss opportunities every day.",
  "Most websites do not guide visitors properly.",
]

const whatGeorgeDoes = [
  "Answers questions instantly",
  "Helps visitors figure out what they need",
  "Recommends the best option",
  "Gets more people to actually enquire",
]

const conversionPoints = [
  "Stops visitors leaving your site without taking action",
  "Warms up leads before they contact you",
  "Drives more bookings, calls, and messages",
  "Makes your existing traffic more valuable",
]

const experiencePoints = [
  "Instant help when people need it",
  "No waiting or confusion",
  "Smooth, natural interaction",
  "Feels modern and impressive",
]

const reliabilityPoints = [
  "Consistent answers",
  "Never forgets key information",
  "No missed opportunities",
  "Represents your business properly",
]

function PremiumCard({
  title,
  items,
  icon: Icon,
}: {
  title: string
  items: string[]
  icon: typeof Sparkles
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6EE7B7]/20 bg-[#6EE7B7]/10 text-[#6EE7B7]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-[#D1D5DB]">
            <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6EE7B7]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navigation />

      <section className="relative overflow-hidden border-b border-white/6 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.12),rgba(5,8,22,0)_26%),radial-gradient(circle_at_75%_20%,rgba(168,85,247,0.18),rgba(5,8,22,0)_28%),linear-gradient(180deg,#050816_0%,#090d1f_100%)]" />
        <div className="absolute left-1/2 top-20 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[#6EE7B7]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-[#C7D2FE] backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-[#6EE7B7]" />
                Meet George
              </div>

              <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Turn your website into a 24/7 salesperson
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1] sm:text-xl">
                George talks to your visitors, answers questions instantly, and turns more of them into real enquiries — even when you are not there.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/meet-george"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#6EE7B7] px-7 py-4 text-base font-bold text-[#04130d] transition hover:scale-[1.01] hover:bg-[#86EFAC]"
                >
                  Try George live
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/how-george-makes-you-money"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  See how it works
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="absolute h-[25rem] w-[25rem] rounded-full bg-[#6EE7B7]/12 blur-3xl" />
              <div className="relative flex h-[22rem] w-[22rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),rgba(255,255,255,0.03)_44%,rgba(0,0,0,0.32)_100%)] shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:h-[28rem] sm:w-[28rem]">
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div className="absolute inset-[12%] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-[#6EE7B7]/25" />
                <Image
                  src="/george-logo.png"
                  alt="George orb logo"
                  width={520}
                  height={520}
                  className="relative z-10 h-auto w-[82%] drop-shadow-[0_0_65px_rgba(110,231,183,0.22)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl rounded-[34px] border border-white/8 bg-white/5 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">Why George exists</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Websites should not lose customers</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {whyGeorgeExists.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-6 text-center text-base font-semibold text-[#E2E8F0] shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xl font-bold text-white sm:text-2xl">George fixes that.</p>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">What George does</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">George talks to your visitors</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#CBD5E1]">
            George feels like a real member of staff on your website. He helps people understand what they need, guides them toward the right option, and keeps them moving.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
          <PremiumCard title="Turns more visitors into enquiries" items={conversionPoints} icon={TrendingUp} />
          <PremiumCard title="Better experience for every visitor" items={experiencePoints} icon={MessageCircleMore} />
          <PremiumCard title="Works properly, every time" items={reliabilityPoints} icon={ShieldCheck} />
          <PremiumCard title="What George actually does" items={whatGeorgeDoes} icon={Waves} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[34px] border border-[#6EE7B7]/15 bg-[linear-gradient(135deg,rgba(110,231,183,0.10),rgba(9,13,31,0.95)_38%,rgba(76,29,149,0.72)_100%)] p-8 shadow-[0_32px_120px_rgba(0,0,0,0.32)] sm:p-10 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative mx-auto flex h-[16rem] w-[16rem] items-center justify-center rounded-full border border-white/10 bg-black/20 shadow-[0_0_90px_rgba(110,231,183,0.14)] sm:h-[20rem] sm:w-[20rem]">
              <div className="absolute inset-[10%] animate-[spin_20s_linear_infinite] rounded-full border border-dashed border-white/20" />
              <Image src="/george-logo.png" alt="George logo" width={340} height={340} className="h-auto w-[74%]" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#A7F3D0]">Final CTA</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Test George on your own website</h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-[#E2E8F0]">
                <p>We set George up for your business.</p>
                <p>You test him properly.</p>
                <p>You only go live when you are happy.</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#6EE7B7] px-7 py-4 text-base font-bold text-[#04130d] transition hover:scale-[1.01] hover:bg-[#86EFAC]"
                >
                  Get George on your site
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Read the FAQ
                </Link>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-[#D1FAE5]">
                <BadgeCheck className="h-4 w-4 text-[#6EE7B7]" />
                Premium design. Real conversations. Proper conversion intent.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing | George",
  description: "George is tailored to your website, your goals, and the level of help your visitors need.",
}

const setupTypes = [
  "Service businesses that want more enquiries and better first conversations",
  "E-commerce or catalogue-led businesses that need buying guidance and product help",
  "Attractions, parks, and venues that want better visitor guidance, planning, and upsell support",
]

const included = [
  "George tailored to your business and website",
  "Conversation flow designed around your customer journey",
  "Answers to common questions and objections",
  "Clear guidance towards the right next step",
]

export default function PricingPage() {
  return (
    <main className="premium-page-shell min-h-screen text-white">
      <Navigation />

      <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="premium-hero-grid mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">Pricing</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              George is tailored to your setup
            </h1>
            <p className="premium-body mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              We do not force every business into the same box. George is scoped around your website, your visitor journey, and the level of help, guidance, and conversion support you want him to handle.
            </p>
          </div>
          <div className="premium-orb-wrap flex items-center justify-center">
            <Image src="/george-orb-premium.jpeg" alt="George orb logo" width={760} height={760} className="premium-orb-image h-auto w-full max-w-[500px] object-contain" priority />
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="premium-card rounded-[32px] p-7 sm:p-8">
            <p className="premium-kicker">What every setup includes</p>
            <div className="mt-5 grid gap-4">
              {included.map((item) => (
                <div key={item} className="premium-soft-card rounded-[24px] p-4 text-sm leading-6 text-white/86 sm:text-base">{item}</div>
              ))}
            </div>
          </div>

          <div className="premium-card rounded-[32px] p-7 sm:p-8">
            <p className="premium-kicker">Why there is no fixed public price</p>
            <p className="premium-body mt-5 text-base leading-7">
              George can be simple or more advanced depending on what you need. A straightforward service business setup is very different from a large e-commerce catalogue or a visitor attraction with multiple journeys, upsells, and live information.
            </p>
            <p className="premium-body mt-4 text-base leading-7">
              Pricing is based on the level of tailoring, the complexity of the setup, and the role George needs to play on your website.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl rounded-[36px] premium-glass p-8 sm:p-10 lg:p-14">
          <p className="premium-kicker">Common types of setup</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {setupTypes.map((item) => (
              <div key={item} className="premium-soft-card rounded-[24px] p-5 text-sm leading-6 text-white/86 sm:text-base">{item}</div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="premium-button-primary inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold transition">
              Talk through your setup <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/meet-george" className="premium-button-secondary inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition">
              Meet George
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

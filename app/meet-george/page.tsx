import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George | Turn Your Website Into a 24/7 Salesperson",
  description: "Talk to George live and see how he answers questions, guides visitors naturally, and turns more of them into real enquiries.",
  alternates: { canonical: "https://getgeorge.app/meet-george" },
}

export default function MeetGeorgePage() {
  return (
    <main className="premium-page-shell min-h-screen text-white">
      <Navigation />

      <section className="px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">Meet George</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Talk to George live
            </h1>
            <p className="premium-body mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              This is where people feel the difference. George answers questions, guides visitors naturally, and shows how he would work for a real business.
            </p>
            <p className="premium-body mt-4 max-w-2xl text-base leading-7">
              The logic stays the same. The conversion flow stays the same. We have just given the experience a more premium, product-level presentation.
            </p>
          </div>
        </div>
      </section>


      <GeorgeLiveAssistantCompact />
      <Footer />
    </main>
  )
}

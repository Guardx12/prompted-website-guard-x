import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GeorgeChat } from "@/components/george-chat"

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f9ff_0%,#ffffff_55%,#f8fbff_100%)] text-[#0f172a]">
      <Navigation />

      <section className="px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-18">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">George by GuardX</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f172a] sm:text-5xl lg:text-6xl">
              Turn your website into a 24/7 salesperson.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#475569] sm:text-xl">
              Meet George — the digital receptionist and sales assistant built into GuardX websites. He explains the offer,
              guides visitors towards becoming customers, and helps stop good traffic going to waste.
            </p>
            <p className="mt-4 text-base font-medium text-[#334155]">
              Saves time. Saves money. Helps turn more visitors into real enquiries.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <GeorgeChat />
            </div>

            <div className="space-y-5 lg:pt-3">
              <div className="rounded-[24px] border border-[#dfe7f3] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
                <h2 className="text-xl font-semibold text-[#0f172a]">Why George exists</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#475569]">
                  Most websites look fine but do very little. Someone lands on the page, has a question, does not want to
                  ring yet, and leaves. George is there to handle that first conversation properly — like a strong
                  receptionist or sales person would.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#dfe7f3] bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.07)]">
                <h2 className="text-xl font-semibold text-[#0f172a]">What George does</h2>
                <ul className="mt-4 space-y-3 text-[15px] leading-7 text-[#475569]">
                  <li>Answers the first questions visitors usually have before they are ready to call.</li>
                  <li>Explains the offer clearly in normal human language.</li>
                  <li>Guides the conversation toward the next step instead of letting visitors disappear.</li>
                  <li>Works inside a modern, fast, SEO-structured GuardX website.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

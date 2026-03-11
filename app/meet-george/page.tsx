import { Footer } from "@/components/footer"
import { GeorgeAssistant } from "@/components/george-assistant"
import { Navigation } from "@/components/navigation"

export default function MeetGeorgePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#f8fbff_35%,#ffffff_100%)]">
      <Navigation />
      <main>
        <GeorgeAssistant />
      </main>
      <Footer />
    </div>
  )
}

import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George | 24/7 Digital Member of Staff for Your Website",
  description:
    "Meet George — a 24/7 digital member of staff for your website. He answers questions, guides visitors, captures opportunities, and helps turn more traffic into customers.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
}

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />
      <GeorgeLiveAssistantCompact />
      <Footer />
    </main>
  )
}

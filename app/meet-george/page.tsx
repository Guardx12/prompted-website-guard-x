import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George | Digital Guide for Visitor-Focused Websites",
  description:
    "Meet George — a trained digital guide and member of staff for attractions, holiday parks, campsites, and visitor destinations. He helps visitors plan their visit, get website directions, get directions to your location, find their way around once they are there, discover more of what you offer, and take the right next step.",
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

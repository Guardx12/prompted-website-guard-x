import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Turn Your Website Into a 24/7 Salesperson | Meet George | GuardX",
  description:
    "Turn your website into a 24/7 salesperson with George — a digital member of staff tailored to your brand, role, and visitors. He answers questions, guides visitors, captures opportunities, and helps turn more traffic into customers.",
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

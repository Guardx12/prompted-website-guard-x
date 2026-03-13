import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George",
  description: "Ask George how he can answer customer questions and capture enquiries for you 24/7.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
  openGraph: {
    title: "Meet George",
    description: "Ask George how he can answer customer questions and capture enquiries for you 24/7.",
    url: "https://guardxnetwork.com/meet-george",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=5",
        width: 1200,
        height: 630,
        alt: "Meet George",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet George",
    description: "Ask George how he can answer customer questions and capture enquiries for you 24/7.",
    images: ["https://guardxnetwork.com/george-preview.png?v=5"],
  },
}

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white">
      <Navigation />
      <GeorgeLiveAssistant />
      <Footer />
    </main>
  )
}

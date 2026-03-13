import type { Metadata } from "next"
import Image from "next/image"
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
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Image src="/george-logo.png" alt="George" width={340} height={120} className="h-20 w-auto sm:h-24" priority />
        </div>
      </section>
      <GeorgeLiveAssistant />
      <Footer />
    </main>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George | Conversational Digital Member of Staff for Your Website",
  description: "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
  openGraph: {
    title: "Meet George | Conversational Digital Member of Staff for Your Website",
    description: "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
    url: "https://guardxnetwork.com/meet-george",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=8",
        width: 1200,
        height: 630,
        alt: "Meet George, your AI assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet George | Conversational Digital Member of Staff for Your Website",
    description: "Meet George — your conversational digital member of staff for your website. He talks to website visitors, answers questions about services and facilities, explains pricing and options, guides visitors toward becoming enquiries, and captures enquiry details automatically.",
    images: ["https://guardxnetwork.com/george-preview.png?v=8"],
  },
}

export default function MeetGeorgePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Image src="/george-logo.png" alt="George" width={340} height={120} className="h-28 w-auto sm:h-32" priority />
        </div>
      </section>
      <GeorgeLiveAssistant />
      <Footer />
    </main>
  )
}

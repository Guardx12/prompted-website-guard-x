import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Meet George — Your AI Website Sales Assistant",
  description:
    "George answers customer questions, captures enquiries, and helps turn your website into a 24/7 salesperson.",
  alternates: { canonical: "https://guardxnetwork.com/meet-george" },
  openGraph: {
    title: "Meet George — Your AI Website Sales Assistant",
    description:
      "George answers customer questions, captures enquiries, and works 24/7 — turning your website into a salesperson.",
    url: "https://guardxnetwork.com/meet-george",
    type: "website",
    images: [
      {
        url: "https://guardxnetwork.com/george-preview.png?v=4",
        width: 1200,
        height: 630,
        alt: "Meet George — Your AI Website Sales Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet George — Your AI Website Sales Assistant",
    description: "Turn your website into a 24/7 salesperson with George.",
    images: ["https://guardxnetwork.com/george-preview.png?v=4"],
  },
}

export default function MeetGeorgePage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#f8fbff_35%,#ffffff_100%)]">
      <Navigation />
      <main>
        <GeorgeLiveAssistant />
      </main>
      <Footer />
    </div>
  )
}

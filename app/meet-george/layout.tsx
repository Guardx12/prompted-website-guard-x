import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hi, meet George.",
  description: "Talk to George and see how an AI receptionist could help your business handle customer enquiries on your website.",
  openGraph: {
    title: "Hi, meet George.",
    description: "Talk to George and see how an AI receptionist could help your business handle customer enquiries on your website.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, meet George.",
    description: "Talk to George and see how an AI receptionist could help your business handle customer enquiries on your website.",
    images: ["/og-image.png"],
  },
}

export default function MeetGeorgeLayout({ children }: { children: React.ReactNode }) {
  return children
}

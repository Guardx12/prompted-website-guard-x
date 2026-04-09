import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design Services for Local Businesses",
  description:
    "Professional website design for local businesses. Modern, mobile-friendly websites built with strong SEO foundation.",
}

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return children
}

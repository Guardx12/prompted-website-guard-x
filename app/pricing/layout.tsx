import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Website Design Pricing & Hosting",
  description:
    "Website design starting from \u00a3500 with optional SEO foundation and \u00a330/month hosting.",
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}

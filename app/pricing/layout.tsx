import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "George Pricing",
  description:
    "George is a trained digital member of staff for your website. £49 per month.",
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}

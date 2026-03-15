import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "George FAQ",
  description:
    "Frequently asked questions about George, the trained digital member of staff for your website.",
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}

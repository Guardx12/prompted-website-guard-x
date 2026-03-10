import { Metadata } from "next"
import WebsiteCheckChatbot from "@/components/website-check-chatbot"

export const metadata: Metadata = {
  title: "Website Check | GuardX",
  description: "See the first impression customers get when they find your business online. Take our 60-second website check.",
  openGraph: {
    title: "Website Check | GuardX",
    description: "See the first impression customers get when they find your business online. Take our 60-second website check.",
  },
}

export default function WebsiteCheckPage() {
  return <WebsiteCheckChatbot />
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageCircle, ArrowRight } from "lucide-react"

export function BottomGeorgeBar() {
  const pathname = usePathname()

  if (pathname === "/meet-george") {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[80] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-[26px] border border-white/12 bg-[linear-gradient(135deg,rgba(33,7,73,0.95)_0%,rgba(54,16,115,0.95)_48%,rgba(33,7,73,0.92)_100%)] px-4 py-3 shadow-[0_20px_80px_rgba(16,3,33,0.42)] backdrop-blur-xl sm:px-6 sm:py-4">
        <div className="min-w-0">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c9bcff] sm:text-xs">Turn your website into a 24/7 salesperson</p>
          <p className="mt-1 text-sm font-semibold leading-5 text-white sm:text-base">
            See how George can match your brand and turn more visitors into enquiries, bookings, and sales.
          </p>
        </div>
        <Link
          href="/meet-george#live-george"
          className="get-started-btn george-bottom-bar-button inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#dffcff_0%,#8af7d4_52%,#7dd3fc_100%)] px-4 py-3 text-sm font-black text-[#07151e] transition hover:brightness-105 sm:px-6 sm:text-base"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="get-started-text">Talk to George</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Link>
      </div>
    </div>
  )
}

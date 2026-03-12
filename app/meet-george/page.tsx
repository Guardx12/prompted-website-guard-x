"use client"

import { useLayoutEffect } from "react"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

export default function MeetGeorgePage() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    const scrollToTop = () => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }

    scrollToTop()
    const raf1 = requestAnimationFrame(() => {
      scrollToTop()
      requestAnimationFrame(scrollToTop)
    })
    const timeout = window.setTimeout(scrollToTop, 120)

    return () => {
      cancelAnimationFrame(raf1)
      window.clearTimeout(timeout)
    }
  }, [])

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

"use client"

import { useEffect, useLayoutEffect } from "react"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

declare global {
  interface Window {
    georgeTranscript?: string
    __georgeTranscriptSent?: boolean
  }
}

function sendTranscriptOnce() {
  if (typeof window === "undefined") return
  if (window.__georgeTranscriptSent) return

  const transcript = typeof window.georgeTranscript === "string" ? window.georgeTranscript.trim() : ""
  if (!transcript) return

  window.__georgeTranscriptSent = true

  const payload = JSON.stringify({ transcript, source: "meet-george" })

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" })
    const sent = navigator.sendBeacon("/api/george-lead", blob)
    if (!sent) {
      window.__georgeTranscriptSent = false
    }
    return
  }

  fetch("/api/george-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {
    window.__georgeTranscriptSent = false
  })
}

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

  useEffect(() => {
    if (typeof window === "undefined") return

    window.__georgeTranscriptSent = false

    const handlePageHide = () => {
      sendTranscriptOnce()
    }

    const handleBeforeUnload = () => {
      sendTranscriptOnce()
    }

    window.addEventListener("pagehide", handlePageHide)
    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("pagehide", handlePageHide)
      window.removeEventListener("beforeunload", handleBeforeUnload)
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

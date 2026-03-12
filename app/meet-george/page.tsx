"use client"

import { useEffect, useLayoutEffect } from "react"
import { Footer } from "@/components/footer"
import { GeorgeLiveAssistant } from "@/components/george-live-assistant"
import { Navigation } from "@/components/navigation"

declare global {
  interface Window {
    georgeTranscript?: string
    __georgeTranscriptSent?: boolean
    __georgeTranscriptTimeout?: number
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
    navigator.sendBeacon("/api/george-lead", blob)
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

function resetTranscriptTimeout() {
  if (typeof window === "undefined") return
  if (window.__georgeTranscriptTimeout) {
    window.clearTimeout(window.__georgeTranscriptTimeout)
  }

  window.__georgeTranscriptTimeout = window.setTimeout(() => {
    sendTranscriptOnce()
  }, 90_000)
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
    resetTranscriptTimeout()

    const handleActivity = () => {
      resetTranscriptTimeout()
    }

    window.addEventListener("pointerdown", handleActivity)
    window.addEventListener("keydown", handleActivity)
    window.addEventListener("george-activity", handleActivity)

    return () => {
      window.removeEventListener("pointerdown", handleActivity)
      window.removeEventListener("keydown", handleActivity)
      window.removeEventListener("george-activity", handleActivity)
      if (window.__georgeTranscriptTimeout) {
        window.clearTimeout(window.__georgeTranscriptTimeout)
      }
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

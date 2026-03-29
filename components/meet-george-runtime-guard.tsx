"use client"

import React from "react"
import { GeorgeLiveAssistantCompact } from "@/components/george-live-assistant-compact"

const STORAGE_KEYS_TO_CLEAR = [
  "guardx-meet-george-compact-v4",
  "guardx-meet-george-compact-v3",
  "george-site-session-v1",
]

function clearGeorgeStorage() {
  if (typeof window === "undefined") return
  for (const key of STORAGE_KEYS_TO_CLEAR) {
    try {
      window.localStorage.removeItem(key)
    } catch {}
  }
}

class MeetGeorgeErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    clearGeorgeStorage()
    console.error("Meet George runtime error", error)
  }

  handleRetry = () => {
    clearGeorgeStorage()
    this.setState({ hasError: false })
    if (typeof window !== "undefined") {
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section id="live-george" className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="rounded-[36px] border border-[#DADCE0] bg-white px-6 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:px-8">
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              Turn your website into a 24/7 salesperson
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569]">
              George hit a browser issue on this device, so we have reset the saved session and prepared a clean reload.
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#64748B]">
              Tap below to reopen George, or message GuardX on WhatsApp if you would rather speak to a human now.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center rounded-full bg-[#1D4ED8] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Reload George
              </button>
              <a
                href="https://wa.me/447519166031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#25D366] px-6 py-3 text-sm font-semibold text-[#0F172A] transition hover:bg-[#F0FFF4]"
              >
                Contact us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}

export function MeetGeorgeRuntimeGuard() {
  return (
    <MeetGeorgeErrorBoundary>
      <GeorgeLiveAssistantCompact />
    </MeetGeorgeErrorBoundary>
  )
}

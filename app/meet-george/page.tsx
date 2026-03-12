
// --- George Transcript Mode Guard ---
// ensures transcript only sent once per conversation
let georgeEmailSent = false;
function sendTranscriptOnce(data:any){
  if(georgeEmailSent) return;
  georgeEmailSent = true;
  fetch('/api/george', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(data)
  }).catch(()=>{});
}

// triggers
window.addEventListener('beforeunload',()=>{
  if(!georgeEmailSent && (window as any).georgeTranscript){
    sendTranscriptOnce({ transcript:(window as any).georgeTranscript });
  }
});

// example timeout trigger (90s inactivity)
let georgeTimer:any;
function resetGeorgeTimer(){
  clearTimeout(georgeTimer);
  georgeTimer=setTimeout(()=>{
    if(!georgeEmailSent && (window as any).georgeTranscript){
      sendTranscriptOnce({ transcript:(window as any).georgeTranscript });
    }
  },90000);
}

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

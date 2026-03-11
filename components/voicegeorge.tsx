"use client"

import { useEffect, useRef, useState } from "react"

type Status = "idle" | "connecting" | "listening" | "error"

export default function VoiceGeorge() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  const peerRef = useRef<RTCPeerConnection | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const dataChannelRef = useRef<RTCDataChannel | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    return () => {
      stopConversation()
    }
  }, [])

  function stopConversation() {
    dataChannelRef.current?.close()
    dataChannelRef.current = null

    peerRef.current?.getSenders().forEach((sender) => sender.track?.stop())
    peerRef.current?.close()
    peerRef.current = null

    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.srcObject = null
    }

    setStatus("idle")
  }

  async function startConversation() {
    try {
      stopConversation()
      setError(null)
      setStatus("connecting")

      const tokenResponse = await fetch("/api/george-session", { cache: "no-store" })
      const data = await tokenResponse.json()

      if (!tokenResponse.ok || !data?.client_secret?.value) {
        throw new Error(data?.error?.message || data?.error || "Could not start voice session")
      }

      const pc = new RTCPeerConnection()
      peerRef.current = pc

      const audio = document.createElement("audio")
      audio.autoplay = true
      audio.playsInline = true
      audioRef.current = audio

      pc.ontrack = (event) => {
        audio.srcObject = event.streams[0]
      }

      const dc = pc.createDataChannel("oai-events")
      dataChannelRef.current = dc

      dc.onopen = () => {
        dc.send(
          JSON.stringify({
            type: "session.update",
            session: {
              instructions:
                "You are George, the friendly digital sales assistant built into GuardX websites. Speak naturally in a cheerful, warm, confident, masculine voice. Keep answers concise, conversational, and helpful. Explain that GuardX websites turn websites into 24/7 salespeople. Guide interested visitors toward contacting Luke about getting George on their own website.",
              audio: {
                input: {
                  turn_detection: {
                    type: "server_vad",
                    threshold: 0.5,
                    prefix_padding_ms: 300,
                    silence_duration_ms: 250,
                    create_response: true,
                    interrupt_response: true,
                  },
                  noise_reduction: {
                    type: "near_field",
                  },
                },
              },
            },
          }),
        )

        setStatus("listening")
      }

      dc.onmessage = (event) => {
        try {
          const payload = JSON.parse(event.data)
          if (payload?.type === "error") {
            throw new Error(payload?.error?.message || "Voice session error")
          }
        } catch (err) {
          if (err instanceof Error) {
            console.error("Voice George data channel error", err)
            setError(err.message)
            setStatus("error")
          }
        }
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      })
      streamRef.current = stream

      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream)
      })

      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)

      const response = await fetch("https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview", {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${data.client_secret.value}`,
          "Content-Type": "application/sdp",
        },
      })

      if (!response.ok) {
        const message = await response.text()
        throw new Error(message || "Voice connection failed")
      }

      const answer = {
        type: "answer",
        sdp: await response.text(),
      }

      await pc.setRemoteDescription(answer as RTCSessionDescriptionInit)
    } catch (err) {
      console.error("Voice George error", err)
      stopConversation()
      setStatus("error")
      setError(err instanceof Error ? err.message : "Voice connection failed")
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6">
      <div className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Talk to George</p>
            <p className="text-sm text-slate-600">
              Click once, speak naturally, and George should answer much faster in a live voice conversation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={startConversation}
              disabled={status === "connecting" || status === "listening"}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "connecting"
                ? "Connecting…"
                : status === "listening"
                  ? "George is live"
                  : "Talk to George"}
            </button>
            {status === "connecting" || status === "listening" ? (
              <button
                onClick={stopConversation}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                End call
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-3 text-sm text-slate-600">
          {status === "connecting" ? "Starting George…" : null}
          {status === "listening" ? "George is listening now." : null}
          {status === "error" && error ? <p className="text-red-600">{error}</p> : null}
        </div>
      </div>
    </div>
  )
}

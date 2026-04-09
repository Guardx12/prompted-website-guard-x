"use client";

import { useState } from "react";

export default function VoiceGeorge() {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function startConversation() {
    try {
      setError(null);
      setConnected(true);

      const tokenResponse = await fetch("/api/george-session");
      const data = await tokenResponse.json();

      if (!tokenResponse.ok || !data?.client_secret?.value) {
        throw new Error(data?.error?.message || data?.error || "Could not start voice session");
      }

      const pc = new RTCPeerConnection();
      const audio = document.createElement("audio");
      audio.autoplay = true;

      pc.ontrack = (event) => {
        audio.srcObject = event.streams[0];
      };

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => {
        pc.addTrack(track, stream);
      });

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const response = await fetch(
        "https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview",
        {
          method: "POST",
          body: offer.sdp,
          headers: {
            Authorization: `Bearer ${data.client_secret.value}`,
            "Content-Type": "application/sdp",
          },
        }
      );

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Voice connection failed");
      }

      const answer = {
        type: "answer",
        sdp: await response.text(),
      };

      await pc.setRemoteDescription(answer as RTCSessionDescriptionInit);
    } catch (err) {
      console.error("Voice George error", err);
      setConnected(false);
      setError(err instanceof Error ? err.message : "Voice connection failed");
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6">
      <div className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Talk to George</p>
            <p className="text-sm text-slate-600">
              Tap once to start a live voice conversation with George.
            </p>
          </div>
          <button
            onClick={startConversation}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {connected ? "Talking to George…" : "Talk to George"}
          </button>
        </div>
        {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      </div>
    </div>
  );
}

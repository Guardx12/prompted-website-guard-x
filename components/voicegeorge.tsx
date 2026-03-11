"use client";

import { useState } from "react";

export default function VoiceGeorge() {
  const [connected, setConnected] = useState(false);

  async function startConversation() {
    setConnected(true);

    const tokenResponse = await fetch("/api/george-session");
    const data = await tokenResponse.json();

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

    const answer = {
      type: "answer",
      sdp: await response.text(),
    };

    await pc.setRemoteDescription(answer as any);
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button
        onClick={startConversation}
        style={{
          padding: "14px 24px",
          borderRadius: "999px",
          background: "#2563eb",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {connected ? "Talking to George…" : "Talk to George"}
      </button>
    </div>
  );
}

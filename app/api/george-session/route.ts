import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-realtime-preview",
      voice: "alloy",
      instructions: `
You are George, the friendly digital sales assistant built into GuardX websites.

Speak in a warm, upbeat male voice.
Keep answers conversational and concise.

Your job is to:
- talk to visitors naturally
- explain how GuardX websites turn websites into 24/7 salespeople
- guide interested visitors toward contacting Luke about getting George on their own website.

Never sound robotic. Speak like a helpful human assistant.
`,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

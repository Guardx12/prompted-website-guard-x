"use client"

import { useReducedMotion } from "framer-motion"

/**
 * SEO-safe animated headline.
 * - Keeps the full heading as normal text in the DOM (best for Google + accessibility)
 * - Adds a gradient-shift + subtle shimmer via background animation (no per-letter spans)
 */
export function AnimatedPageTitle({
  text,
  suffix,
  className = "",
}: {
  text: string
  suffix?: string
  className?: string
}) {
  const prefersReduced = useReducedMotion()

  return (
    <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance ${className}`}>
      <span
        className={`relative inline-block ${
          prefersReduced ? "text-white" : "text-transparent bg-clip-text"
        }`}
        style={
          prefersReduced
            ? undefined
            : {
                backgroundImage:
                  "linear-gradient(135deg, #93c5fd, #818cf8, #a78bfa, #60a5fa, #93c5fd)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 8s ease infinite",
              }
        }
      >
        {text}
        {!prefersReduced && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-transparent bg-clip-text opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.65) 45%, transparent 70%)",
              backgroundSize: "220% 220%",
              animation: "shimmerPass 3.8s ease-in-out infinite",
              mixBlendMode: "screen",
            }}
          >
            {text}
          </span>
        )}
      </span>
      {suffix ? <span className="text-white">{suffix}</span> : null}
    </h1>
  )
}

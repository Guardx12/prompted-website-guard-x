"use client"

import { useReducedMotion } from "framer-motion"

/**
 * Reusable animated gradient-wave headline -- identical to the homepage hero.
 * Renders each character with a staggered wave + gradient-shift animation
 * and a shimmer overlay pass.
 *
 * @param text       The primary animated text (gradient wave)
 * @param suffix     Optional plain-white text appended after the animated portion
 * @param className  Extra classes for the outer <h1>
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
  const words = text.split(" ")

  let globalIndex = 0

  return (
    <h1
      className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance ${className}`}
    >
      <span className="relative inline">
        {prefersReduced ? (
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #93c5fd, #818cf8, #a78bfa, #60a5fa, #93c5fd)",
              backgroundSize: "300% 300%",
            }}
          >
            {words.join(" ")}
          </span>
        ) : (
          words.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
              {word.split("").map((char) => {
                const idx = globalIndex++
                return (
                  <span
                    key={idx}
                    className="inline-block text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #93c5fd, #818cf8, #a78bfa, #60a5fa, #93c5fd)",
                      backgroundSize: "300% 300%",
                      animation: `gradientShift 8s ease infinite, waveFloat 3s ease-in-out ${idx * 0.04}s infinite`,
                    }}
                  >
                    {char}
                  </span>
                )
              })}
              {wi < words.length - 1 && (
                <span className="inline-block">{"\u00A0"}</span>
              )}
            </span>
          ))
        )}

        {/* Shimmer pass */}
        {!prefersReduced && (
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
              animation: "shimmer 4s ease-in-out infinite",
              width: "40%",
            }}
            aria-hidden="true"
          />
        )}
      </span>
      {suffix && (
        <>
          {" "}
          <span className="text-white">{suffix}</span>
        </>
      )}
    </h1>
  )
}

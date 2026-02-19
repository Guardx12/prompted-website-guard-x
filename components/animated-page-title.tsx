"use client"

export function AnimatedPageTitle({ text }: { text: string }) {
  const chars = text.split("")

  return (
    <span className="relative inline-block">
      {/* SEO-safe full text */}
      <span className="sr-only">{text}</span>

      {/* Visual animated text only */}
      <span aria-hidden="true" className="inline-block">
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block animate-wave"
            style={{
              animationDelay: `${i * 0.04}s`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  )
}

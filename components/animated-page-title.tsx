"use client"

import * as React from "react"

type Props = {
  text: string
  /** Optional second line (keeps wording the same across the site) */
  suffix?: string
  className?: string
  as?: "h1" | "h2" | "h3" | "div" | "span"
}

/**
 * Premium headline with:
 * - light purple gradient
 * - subtle shimmer sweep
 * - gentle per-letter wave
 *
 * Uses real text (no canvas) so SEO + accessibility stay intact.
 */
export function AnimatedPageTitle({ text, suffix, className = "", as = "h1" }: Props) {
  const Tag: any = as
  const line1 = text ?? ""
  const line2 = suffix ?? ""
  const renderLine = (line: string, baseDelay: number) => {
    const chars = line.split("")
    return (
      <span className="block">
        {chars.map((char, i) => (
          <span
            key={`${baseDelay}-${i}`}
            className="inline-block animate-wave"
            style={{ animationDelay: `${(baseDelay + i) * 0.035}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    )
  }

  // Keep a stable label for screen readers
  const ariaLabel = line2 ? `${line1} ${line2}` : line1

  return (
    <Tag
      aria-label={ariaLabel}
      className={[
        "title-gradient title-shimmer font-extrabold tracking-tight",
        "text-4xl sm:text-5xl lg:text-6xl",
        "leading-[1.05]",
        className,
      ].join(" ")}
    >
      {renderLine(line1, 0)}
      {line2 ? renderLine(line2, line1.length + 1) : null}
    </Tag>
  )
}

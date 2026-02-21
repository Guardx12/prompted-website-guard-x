"use client"

import { cn } from "@/lib/utils"

type AnimatedPageTitleProps = {
  text: string
  /**
   * Optional second line shown underneath (used on some pages like Contact/Pricing).
   * The full combined text is still output once for SEO via sr-only.
   */
  suffix?: string
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedPageTitle({
  text,
  suffix,
  className,
  as = "h1",
}: AnimatedPageTitleProps) {
  const Tag: any = as

  // Split into words so we can wrap between words (not mid-word).
  const words = text.trim().split(/\s+/)

  return (
    <Tag
      className={cn(
        // Bigger, agency-style titles (responsive)
        "mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance",
        className
      )}
    >
      {/* SEO-safe full text (no animation splitting) */}
      <span className="sr-only">{suffix ? `${text} ${suffix}` : text}</span>

      {/* Visual animated text only */}
      <span aria-hidden="true" className="inline-block">
        {words.map((word, wi) => {
          const chars = word.split("")
          const baseDelay = wi * 0.18
          return (
            <span
              key={`${word}-${wi}`}
              className="inline-block whitespace-nowrap mr-[0.35em] last:mr-0"
            >
              {chars.map((char, ci) => (
                <span
                  key={`${wi}-${ci}`}
                  className="inline-block guardx-title-char guardx-wave-char"
                  style={{
                    animationDelay: `${baseDelay + ci * 0.03}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          )
        })}
      </span>

      {suffix ? (
        <span className="block mt-3 text-base sm:text-lg font-semibold text-[#94a3b8]">
          {suffix}
        </span>
      ) : null}
    </Tag>
  )
}

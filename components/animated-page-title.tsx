"use client"

import { cn } from "@/lib/utils"

type AnimatedPageTitleProps = {
  /** Preferred prop: the main title text */
  text?: string
  /** Backwards-compatible alias for `text` */
  title?: string

  /**
   * Optional second line shown underneath (used on some pages like Contact/Pricing).
   * The full combined text is still output once for SEO via sr-only.
   */
  suffix?: string
  /** Backwards-compatible alias for `suffix` */
  subtitle?: string

  className?: string
  as?: keyof JSX.IntrinsicElements
}

export function AnimatedPageTitle({
  text,
  title,
  suffix,
  subtitle,
  className,
  as = "h1",
}: AnimatedPageTitleProps) {
  const Tag: any = as

  const mainText = (text ?? title ?? "").toString()
  const secondLine = (suffix ?? subtitle)?.toString()

  // Split into words so we can wrap between words (not mid-word).
  // Be defensive: mainText could be empty in edge cases; avoid crashing prerender.
  const words = mainText.trim() ? mainText.trim().split(/\s+/) : []

  return (
    <Tag
      className={cn(
        // Bigger, agency-style titles (responsive)
        "mb-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-balance",
        className
      )}
    >
      {/* SEO-safe full text (no animation splitting) */}
      <span className="sr-only">
        {secondLine ? `${mainText} ${secondLine}` : mainText}
      </span>

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

      {secondLine ? (
        <span className="block mt-3 text-base sm:text-lg font-semibold text-[#94a3b8]">
          {secondLine}
        </span>
      ) : null}
    </Tag>
  )
}

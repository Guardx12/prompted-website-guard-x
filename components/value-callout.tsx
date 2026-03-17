import { Sparkles } from "lucide-react"

type ValueCalloutProps = {
  eyebrow?: string
  title: string
  body?: string
  tone?: "blue" | "dark" | "gold"
}

const toneStyles = {
  blue: {
    wrapper:
      "border-[#BFDBFE] bg-[linear-gradient(135deg,rgba(239,246,255,0.98)_0%,rgba(219,234,254,0.92)_35%,rgba(255,255,255,0.98)_100%)] text-[#0F172A] shadow-[0_18px_50px_rgba(29,78,216,0.12)]",
    icon: "bg-white text-[#1D4ED8]",
    eyebrow: "text-[#1D4ED8]",
    title: "text-[#0F172A]",
    body: "text-[#334155]",
  },
  dark: {
    wrapper:
      "border-[#1E3A8A] bg-[linear-gradient(135deg,#0F172A_0%,#111827_50%,#1D4ED8_100%)] text-white shadow-[0_24px_70px_rgba(15,23,42,0.28)]",
    icon: "bg-white/15 text-white",
    eyebrow: "text-[#BFDBFE]",
    title: "text-white",
    body: "text-[#DBEAFE]",
  },
  gold: {
    wrapper:
      "border-[#FDE68A] bg-[linear-gradient(135deg,#FFFBEB_0%,#FEF3C7_45%,#FFFFFF_100%)] text-[#0F172A] shadow-[0_18px_50px_rgba(245,158,11,0.12)]",
    icon: "bg-white text-[#B45309]",
    eyebrow: "text-[#B45309]",
    title: "text-[#0F172A]",
    body: "text-[#92400E]",
  },
} as const

export function ValueCallout({ eyebrow = "Why this matters", title, body, tone = "blue" }: ValueCalloutProps) {
  const styles = toneStyles[tone]

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(15,23,42,0.16)] sm:p-6 ${styles.wrapper}`}
    >
      <div className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-white/15 blur-2xl transition duration-300 group-hover:scale-110" />
      <div className="flex items-start gap-4">
        <div className={`mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl ${styles.icon}`}>
          <Sparkles className="h-5 w-5 animate-pulse" />
        </div>
        <div className="min-w-0">
          <p className={`text-xs font-extrabold uppercase tracking-[0.24em] ${styles.eyebrow}`}>{eyebrow}</p>
          <p className={`mt-2 text-lg font-extrabold leading-7 sm:text-xl ${styles.title}`}>{title}</p>
          {body ? <p className={`mt-3 text-sm leading-6 sm:text-base ${styles.body}`}>{body}</p> : null}
        </div>
      </div>
    </div>
  )
}

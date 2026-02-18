import Link from "next/link"

type Review = {
  business: string
  text: string
  rating?: number // 1–5
}

const reviews: Review[] = [
  {
    business: "Alderwood Ponds",
    rating: 5,
    text:
      "We started using GuardX with our customers and the link is so easy and quick to use. It wasn't long before we started getting more reviews on our business page. We even gained three new customers in the second week. Would definitely recommend. Thank you GuardX.",
  },
  {
    business: "Carpet Trader",
    rating: 5,
    text: "It's been a good addition for our business, helping us build that very important Google platform.",
  },
  {
    business: "Greenfields Flooring",
    rating: 5,
    text: "Highly recommend Luke at GuardX — the system is so easy to use and our Google reviews have almost doubled since we joined.",
  },
  {
    business: "Holly Cox",
    rating: 5,
    text: "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are really clear and easy to read, making it simple to keep an eye on my average rating.",
  },
  {
    business: "Joseph Yossefi",
    rating: 5,
    text: "A very handy tool to keep track of my business reviews — simple and easy to use.",
  },

]

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(1, Math.min(5, rating))
  return (
    <div className="flex items-center gap-0.5" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < r ? "text-yellow-400" : "text-white/20"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 10.24l-5.9-.5L12 4.5 9.9 9.74 4 10.24l4.46 4.22-1.64 5.81z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
      <div className="h-5 w-5 rounded-full bg-white/95 shadow flex items-center justify-center">
        <span className="font-semibold text-[#0a0e1a]">G</span>
      </div>
      <span className="font-medium">Google</span>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl border border-white/10 bg-[#0f172a]/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold text-white">{review.business}</div>
          <div className="mt-1">
            <Stars rating={review.rating ?? 5} />
          </div>
        </div>
        <GoogleBadge />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#cbd5e1] line-clamp-5">{review.text}</p>

      <div className="mt-4 text-xs text-[#94a3b8]">Verified customer • via GuardX</div>
    </div>
  )
}

export default function MovingGoogleReviews() {
  // duplicate to loop smoothly
  const loopItems = [...reviews, ...reviews, ...reviews]

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Trusted by UK businesses</h2>
            <p className="mt-2 text-sm text-[#94a3b8]">
              Real feedback from customers using GuardX review requests.
            </p>
          </div>

          <Link
            href="/real-results"
            className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View results
          </Link>
        </div>

        <div className="relative mt-6 overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0e1a] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0e1a] to-transparent z-10" />

          <div className="group">
            <div className="flex gap-4 py-2 guardx-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {loopItems.map((r, idx) => (
                <ReviewCard key={`${r.business}-${idx}`} review={r} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/real-results"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View results
          </Link>
        </div>
      </div>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { industries } from "@/lib/industries-data"
import { locations } from "@/lib/locations-data"
import type { Metadata } from "next"

type Props = { params: { slug?: string } }

export const dynamicParams = true

function safeSlug(slug?: string) {
  return (slug ?? "").trim()
}

function slugToName(slug?: string) {
  const safe = safeSlug(slug)
  if (!safe) return "Industry"
  return safe
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function getIndustry(slug?: string) {
  const safe = safeSlug(slug)
  if (!safe) return undefined
  return industries.find((i) => i.slug === safe)
}

function resolveLocations(slugs: string[]) {
  return slugs
    .map((s) => locations.find((l) => l.slug === s))
    .filter((x): x is (typeof locations)[number] => Boolean(x))
}

function heroFor(slug?: string) {
  const safe = safeSlug(slug) || "placeholder"
  return `/images/heroes/industries/${safe}.webp`
}

/**
 * Build a "service intent" list for the industry. This creates genuinely unique on-page content
 * without needing a bespoke hard-coded copy block for every single industry.
 */
function intentBullets(industryName: string, slug?: string) {
  const n = industryName
  const s = safeSlug(slug)
  const base = [
    `“${n} near me” searches that convert on mobile`,
    `Service + location landing pages to capture high-intent traffic`,
    `Trust sections that answer objections quickly (proof, process, guarantees)`,
    `Click-to-call / WhatsApp / quote request funnels that are frictionless`,
  ]

  const specials: Record<string, string[]> = {
    builders: [
      "Extensions, renovations and loft conversions pages structured for local intent",
      "Project galleries with before/after proof and clear next steps",
      "Quote-request funnels that qualify leads without losing volume",
    ],
    locksmiths: [
      "Emergency / 24-hour intent pages with response-time positioning",
      "Trust signals: DBS/ID, insurance, local coverage, pricing clarity",
      "Call-first UX (tap-to-call, maps, service area clarity) for urgent jobs",
    ],
    plumbers: [
      "Boiler, leaks, emergencies and maintenance pages split by intent",
      "Pricing/availability clarity to reduce time-wasters",
      "Fast-loading mobile layout for ‘right now’ searches",
    ],
    electricians: [
      "Domestic vs commercial segmentation",
      "Certification + compliance proof above the fold",
      "Quote and callback funnels with job-type selectors",
    ],
    carpet_cleaners: [],
  }

  if (s && specials[s]) return [...specials[s], ...base]
  return base
}

function keywordTargets(industryName: string) {
  const n = industryName
  return [
    `${n} web design`,
    `${n} local SEO`,
    `${n} website`,
    `${n} Google reviews`,
    `${n} near me`,
  ]
}

export async function generateStaticParams() {
  return industries.filter((item) => Boolean(item.slug)).map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug
  const industry = getIndustry(slug)
  const name = industry?.name ?? slugToName(slug)

  const title = industry?.metaTitle ?? `${name} Web Design, SEO & Review Growth (UK) | GuardX`
  const description =
    industry?.metaDescription ??
    `GuardX builds conversion-focused websites for ${name.toLowerCase()} businesses with an SEO-ready structure and automated Google review growth. Built to rank locally and convert on mobile.`

  return {
    title,
    description,
    alternates: { canonical: slug ? `/industries/${safeSlug(slug)}` : "/industries" },
    openGraph: {
      title,
      description,
      url: slug ? `/industries/${safeSlug(slug)}` : "/industries",
      siteName: "GuardX",
      type: "website",
      images: [{ url: heroFor(slug) }],
    },
  }
}

export default function IndustryPage({ params }: Props) {
  const slug = params?.slug
  const industry = getIndustry(slug)

  // IMPORTANT: do not 404. If the slug isn't in the dataset, we still render a high-quality page.
  const name = industry?.name ?? slugToName(slug)
  const title = industry?.h1 ?? `${name} Websites Built to Rank Locally and Win More Enquiries`

  const intro =
    industry?.intro ??
    `If you run a ${name.toLowerCase()} business, your website and Google profile should do two jobs: rank for high-intent local searches and make it obvious why you’re the safe choice. GuardX builds conversion-focused websites with an SEO-ready structure, fast mobile performance and clear CTAs. We also plug in an automated review system so your reputation keeps moving forward — not a one-time ‘launch and forget’ site.`

  const challenges =
    industry?.challenges ??
    `Most ${name.toLowerCase()} websites leak enquiries for the same reasons: unclear services, weak proof, slow mobile pages, and no simple next step. GuardX fixes the structure, tightens the copy, and installs clear enquiry paths (click-to-call, WhatsApp, quote forms) so visitors turn into calls and bookings.`

  const relatedIndustries = (industry?.relatedIndustries ?? [])
    .map((s) => industries.find((i) => i.slug === s))
    .filter((x): x is (typeof industries)[number] => Boolean(x))

  const relatedLocations = resolveLocations(industry?.relatedLocations ?? [])

  const heroImage = heroFor(slug)
  const kts = keywordTargets(name)
  const bullets = intentBullets(name, slug)

  // Structured data (helps “elite tier” SEO basics: entities + page intent)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: industry?.metaDescription ?? undefined,
    url: slug ? `https://www.guardxnetwork.com/industries/${safeSlug(slug)}` : "https://www.guardxnetwork.com/industries",
    about: {
      "@type": "Thing",
      name,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "GuardX",
      url: "https://www.guardxnetwork.com",
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={`${name} hero image`} fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/30 via-[#0a0e1a]/80 to-[#0a0e1a]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <AnimatedPageTitle title={title} subtitle={industry?.metaDescription ?? `Web design, SEO foundation and review generation for ${name.toLowerCase()} businesses across the UK.`} />
                <p className="mt-6 text-white/75 leading-relaxed whitespace-pre-line">{intro}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-400 transition"
                  >
                    Get a quick scorecard
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition ring-1 ring-white/10"
                  >
                    View pricing
                  </Link>
                </div>

                {/* Keyword targets (kept tasteful, useful for internal linking + on-page relevance) */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {kts.map((kw) => (
                    <span key={kw} className="text-xs text-white/70 bg-white/5 ring-1 ring-white/10 px-3 py-1 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visible hero image (same image as the industry card) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  <Image src={heroImage} alt={`${name} feature image`} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </section>

        {/* Value props */}
        <section className="py-12 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Conversion-focused website</div>
                <div className="text-white/70 text-sm mt-1">Built to turn visits into calls, quote requests and bookings.</div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Elite local SEO foundation</div>
                <div className="text-white/70 text-sm mt-1">Intent-led structure, fast mobile performance, clean technical setup.</div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Automated Google review growth</div>
                <div className="text-white/70 text-sm mt-1">More recent reviews, more trust, better conversion.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique industry-specific content */}
        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">Typical leaks we fix for {name.toLowerCase()} businesses</h2>
                  <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{challenges}</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">How we structure a {name.toLowerCase()} site to rank + convert</h2>
                  <ul className="mt-4 space-y-3 text-white/75">
                    {bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">Review growth that compounds</h2>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    For {name.toLowerCase()} businesses, trust is usually the deciding factor. We install a simple, automated review flow that
                    collects more recent Google reviews from real customers — then we place that proof where it increases conversion most:
                    above-the-fold proof, service pages, and quote-request funnels.
                  </p>
                </div>
              </div>

              {/* Sidebar: related links */}
              <aside className="space-y-6">
                {relatedIndustries.length > 0 && (
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                    <h3 className="text-white font-semibold">Related industries</h3>
                    <div className="mt-4 grid gap-2">
                      {relatedIndustries.slice(0, 8).map((i) => (
                        <Link
                          key={i.slug}
                          href={`/industries/${i.slug}`}
                          className="rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-3 text-white/85 transition"
                        >
                          {i.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {relatedLocations.length > 0 && (
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                    <h3 className="text-white font-semibold">Popular locations</h3>
                    <div className="mt-4 grid gap-2">
                      {relatedLocations.slice(0, 10).map((l) => (
                        <Link
                          key={l.slug}
                          href={`/locations/${l.slug}`}
                          className="rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-4 py-3 text-white/85 transition"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-white font-semibold">Next step</h3>
                  <p className="mt-2 text-white/75 text-sm">
                    Want to see what’s leaking enquiries on your current setup? We’ll send a quick scorecard and a clear plan.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-white font-semibold hover:bg-blue-400 transition"
                  >
                    Get a scorecard
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">Ready to grow enquiries for your {name.toLowerCase()} business?</h2>
                <p className="mt-2 text-white/75">
                  Fast website. Elite local SEO foundation. Automated review growth. Built to convert on mobile.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/contact" className="rounded-full bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-400 transition">
                  Contact GuardX
                </Link>
                <Link href="/examples" className="rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition ring-1 ring-white/10">
                  See examples
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

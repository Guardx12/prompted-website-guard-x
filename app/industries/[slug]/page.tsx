import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { industries } from "@/lib/industries-data"
import { locations } from "@/lib/locations-data"
import type { Metadata } from "next"

type Props = { params: { slug: string } }

export const dynamicParams = true

function slugToName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}

function resolveLocations(slugs: string[]) {
  return slugs
    .map((s) => locations.find((l) => l.slug === s))
    .filter((x): x is (typeof locations)[number] => Boolean(x))
}

function heroFor(slug: string) {
  // If an image doesn't exist for a slug, we fall back to a placeholder instead of 404ing the *page*.
  return `/images/heroes/industries/${slug}.webp`
}

export async function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry(params.slug)
  const name = industry?.name ?? slugToName(params.slug)

  const title = industry?.metaTitle ?? `${name} Web Design, SEO & Review Growth (UK) | GuardX`
  const description =
    industry?.metaDescription ??
    `GuardX builds conversion-focused websites for ${name.toLowerCase()} businesses with SEO-ready structure and automated Google review growth. Built to rank locally and convert on mobile.`

  return {
    title,
    description,
    alternates: { canonical: `/industries/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `/industries/${params.slug}`,
      siteName: "GuardX",
      type: "website",
      images: [{ url: heroFor(params.slug) }],
    },
  }
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustry(params.slug)

  // IMPORTANT: we do NOT 404 here. If data isn't found for a slug, we still render a solid template page.
  const name = industry?.name ?? slugToName(params.slug)
  const title = industry?.h1 ?? `${name} Websites Built to Rank Locally and Win More Enquiries`
  const intro =
    industry?.intro ??
    `If you run a ${name.toLowerCase()} business, your website and Google profile should do two jobs: rank for high-intent local searches and make it obvious why you’re the safe choice. GuardX builds conversion-focused websites with an SEO-ready structure, fast mobile performance and clear CTAs. We also plug in an automated review system so your reputation keeps moving forward — not a one-time ‘launch and forget’ site.`

  const challenges =
    industry?.challenges ??
    `Most ${name.toLowerCase()} websites fail for the same reasons: unclear services, weak proof, slow mobile pages, and no simple next step. GuardX fixes the structure, tightens the copy, and installs clear enquiry paths (click-to-call, WhatsApp, quote forms) so visitors turn into calls and bookings.`

  const relatedIndustrySlugs = industry?.relatedIndustries ?? []
  const relatedLocationSlugs = industry?.relatedLocations ?? []

  const relatedIndustries = relatedIndustrySlugs
    .map((s) => industries.find((i) => i.slug === s))
    .filter((x): x is (typeof industries)[number] => Boolean(x))

  const relatedLocations = resolveLocations(relatedLocationSlugs)

  const heroImage = heroFor(params.slug)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${name} hero image`}
              fill
              className="object-cover opacity-25"
              priority
              onError={(e) => {
                // @ts-expect-error - next/image wraps the underlying img
                if (e?.currentTarget) e.currentTarget.src = "/placeholder.jpg"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/35 via-[#0a0e1a]/75 to-[#0a0e1a]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedPageTitle title={title} subtitle={industry?.metaDescription} />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="text-white/70 text-sm mt-1">A system that keeps your reputation moving forward — consistently.</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
              >
                Get a scorecard
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">How GuardX helps {name}</h2>
                <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{intro}</p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Typical leaks we fix</h2>
                <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{challenges}</p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Next steps</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  If you want a stronger website + better Google proof for your {name.toLowerCase()} business, we can send a quick scorecard showing what to fix first.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600"
                  >
                    Get a scorecard
                  </Link>
                  <Link
                    href="/real-results"
                    className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                  >
                    See results
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              {(relatedIndustries.length > 0 || relatedLocations.length > 0) && (
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white">Explore more</h3>

                  {relatedIndustries.length > 0 && (
                    <div className="mt-4">
                      <div className="text-white/80 text-sm font-semibold mb-2">Related industries</div>
                      <ul className="space-y-2">
                        {relatedIndustries.map((ri) => (
                          <li key={ri.slug}>
                            <Link href={`/industries/${ri.slug}`} className="text-blue-400 hover:text-blue-300">
                              {ri.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {relatedLocations.length > 0 && (
                    <div className="mt-6">
                      <div className="text-white/80 text-sm font-semibold mb-2">Related locations</div>
                      <ul className="space-y-2">
                        {relatedLocations.map((rl) => (
                          <li key={rl.slug}>
                            <Link href={`/locations/${rl.slug}`} className="text-blue-400 hover:text-blue-300">
                              {rl.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="text-lg font-semibold text-white">Want this built for you?</h3>
                <p className="mt-3 text-white/75 text-sm leading-relaxed">
                  Fast, modern websites with an SEO-ready structure — plus an automated Google review system.
                </p>
                <Link
                  href="/pricing"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
                >
                  View pricing
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

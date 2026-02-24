import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { locations } from "@/lib/locations-data"
import { industries } from "@/lib/industries-data"
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

function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug)
}

function heroFor(slug: string) {
  return `/images/heroes/locations/${slug}.webp`
}

export async function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = getLocation(params.slug)
  const name = loc?.name ?? slugToName(params.slug)
  const title = loc?.metaTitle ?? `${name} — Local SEO Websites & Review Growth | GuardX`
  const description =
    loc?.metaDescription ??
    `GuardX helps businesses in ${name} with fast websites, SEO-ready structure and automated Google review growth — built to rank locally and convert.`

  return {
    title,
    description,
    alternates: { canonical: `/locations/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${params.slug}`,
      siteName: "GuardX",
      type: "website",
      images: [{ url: heroFor(params.slug) }],
    },
  }
}

export default function LocationPage({ params }: Props) {
  const loc = getLocation(params.slug)

  // IMPORTANT: do not 404. Render a strong generic template if slug isn't in the dataset yet.
  const name = loc?.name ?? slugToName(params.slug)
  const region = loc?.region ?? "United Kingdom"

  const title = loc?.h1 ?? `GuardX in ${name}: Websites + Local SEO Foundation + Review Growth`
  const intro =
    loc?.intro ??
    `Most customers decide from Google results, reviews and the first screen of your website. In ${name}, your Google profile and website usually decide who gets contacted. GuardX builds fast, conversion-focused websites with a clean SEO foundation — and we install an automated review system so your proof keeps improving.`

  const relatedIndustrySlugs = loc?.relatedIndustries ?? []
  const relatedIndustries = relatedIndustrySlugs
    .map((s) => industries.find((i) => i.slug === s))
    .filter((x): x is (typeof industries)[number] => Boolean(x))

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
            <AnimatedPageTitle title={title} subtitle={loc?.metaDescription ?? `${region}`} />

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
                <h2 className="text-xl font-semibold text-white">How GuardX helps businesses in {name}</h2>
                <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{intro}</p>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">What we build (SEO foundation included)</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/75">
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Service + location structure (how people search)</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Fast mobile performance + clean technical setup</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Strong proof sections (reviews, photos, FAQs)</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Clear enquiry paths (call, WhatsApp, quote form)</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Next steps</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Want to rank better in {name} and convert more clicks into enquiries? We can send a quick scorecard showing the highest-impact fixes.
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
              {relatedIndustries.length > 0 && (
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-lg font-semibold text-white">Popular industries in {name}</h3>
                  <ul className="mt-4 space-y-2">
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

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h3 className="text-lg font-semibold text-white">Explore all areas</h3>
                <p className="mt-3 text-white/75 text-sm leading-relaxed">See the full locations list and jump to your area.</p>
                <Link
                  href="/locations"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
                >
                  View all locations
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

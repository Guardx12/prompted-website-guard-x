import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { locations } from "@/lib/locations-data"
import { industries } from "@/lib/industries-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = locations.find((l) => l.slug === params.slug)
  if (!location) return { title: "Location Not Found — GuardX" }

  const title = location.metaTitle || `${location.name} — GuardX`
  const description = location.metaDescription || location.intro

  return {
    title,
    description,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `/locations/${location.slug}`,
      siteName: "GuardX",
      type: "website",
    },
  }
}

function toPlainText(input: string) {
  return input.replace(/\s+/g, " ").trim()
}

export default function LocationDetailPage({ params }: PageProps) {
  const location = locations.find((l) => l.slug === params.slug)
  if (!location) return notFound()

  const locationIcon = `/images/locations/${location.slug}.svg`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `GuardX in ${location.name}`,
    url: `https://guardxnetwork.com/locations/${location.slug}`,
    description: toPlainText(location.metaDescription || location.intro),
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressCountry: "GB",
    },
  }

  const suggestedIndustries = (location.relatedIndustries || [])
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean) as typeof industries

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-14">
          <AnimatedPageTitle title={location.h1 || `GuardX in ${location.name}`} subtitle={location.metaDescription} />

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                    <img src={locationIcon} alt={`${location.name} icon`} className="h-7 w-7 opacity-90" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">How we help in {location.name}</h2>
                    <p className="mt-2 text-white/75 leading-relaxed whitespace-pre-line">{location.intro}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Local SEO foundation</h2>
                <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{location.seoFocus}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/75">
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Service + location page structure</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Fast mobile performance + clean technical setup</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Strong proof sections that answer objections</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Review growth system to increase trust</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Next step</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  If you want a site that converts and a Google profile that keeps getting stronger, we’ll send a quick scorecard with the highest-impact fixes.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
                  >
                    Request a scorecard
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                  >
                    View pricing
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              {!!suggestedIndustries.length && (
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="text-white font-semibold">Popular industries in {location.name}</div>
                  <div className="mt-3 grid gap-2">
                    {suggestedIndustries.slice(0, 8).map((ind) => (
                      <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-sm text-white/80 hover:text-white">
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-white font-semibold">Explore</div>
                <div className="mt-3 grid gap-2">
                  <Link className="text-sm text-white/80 hover:text-white" href="/industries">All industries</Link>
                  <Link className="text-sm text-white/80 hover:text-white" href="/locations">All locations</Link>
                  <Link className="text-sm text-white/80 hover:text-white" href="/examples">Examples</Link>
                </div>
              </div>
            </aside>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

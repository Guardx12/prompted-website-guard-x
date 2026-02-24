import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { JsonLd } from "@/components/json-ld"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { locations } from "@/lib/locations-data"
import { industries } from "@/lib/industries-data"
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema, solutionFaqs } from "@/lib/seo"

type Props = { params: { service?: string; location?: string } }

// These pages are intentionally dynamic so they never block builds.
export const dynamic = "force-dynamic"
export const dynamicParams = true

const SERVICES: Record<
  string,
  {
    label: string
    meta: (place: string) => { title: string; description: string }
    bullets: (place: string) => string[]
  }
> = {
  "web-design": {
    label: "Web Design",
    meta: (place) => ({
      title: `Web Design in ${place} | GuardX`,
      description: `Conversion-focused web design for businesses in ${place}. Fast mobile performance, clear CTAs, and an SEO-ready structure built to generate more enquiries.`,
    }),
    bullets: (place) => [
      `Fast, mobile-first layouts designed to convert in ${place}`,
      "Clear next steps: tap-to-call, WhatsApp and quote request funnels",
      "Proof blocks that answer objections fast (reviews, photos, process)",
      "SEO-ready structure so your pages map to how customers search",
    ],
  },
  "seo-foundation": {
    label: "SEO Foundation",
    meta: (place) => ({
      title: `SEO Foundation in ${place} | GuardX`,
      description: `Local SEO foundations for ${place}: clean site structure, intent-led pages, internal linking, schema, and technical setup built for long-term rankings.`,
    }),
    bullets: (place) => [
      `Service + location intent pages for ${place} searches`,
      "Internal linking strategy to build topical authority",
      "Schema (Service + FAQ + Breadcrumbs) for better understanding",
      "Technical SEO basics: metadata, canonicals, sitemap hygiene",
    ],
  },
  "review-generation": {
    label: "Review Generation",
    meta: (place) => ({
      title: `Google Review Generation in ${place} | GuardX`,
      description: `Automated Google review generation for businesses in ${place}. More recent reviews, stronger trust, and better conversion from Maps and website traffic.`,
    }),
    bullets: (place) => [
      `Automated review requests designed to increase review velocity in ${place}`,
      "More recent reviews to improve trust and conversion",
      "Clear review journeys that are simple for customers",
      "Supports your website + Google profile performance together",
    ],
  },
}

function safeSlug(s?: string) {
  return (s ?? "").trim()
}

function heroForLocation(slug?: string) {
  const safe = safeSlug(slug) || "placeholder"
  return `/images/heroes/locations/${safe}.webp`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const serviceKey = safeSlug(params?.service)
  const locationSlug = safeSlug(params?.location)

  const loc = locations.find((l) => l.slug === locationSlug)
  const place = loc?.name ?? locationSlug.replaceAll("-", " ") || "UK"

  const svc = SERVICES[serviceKey] ?? SERVICES["seo-foundation"]
  const { title, description } = svc.meta(place)

  const canonical = `https://www.guardxnetwork.com/solutions/${serviceKey || "seo-foundation"}/${locationSlug || "london"}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "GuardX",
      type: "website",
      images: [{ url: `https://www.guardxnetwork.com${heroForLocation(locationSlug)}` }],
    },
  }
}

export default function SolutionPage({ params }: Props) {
  const serviceKey = safeSlug(params?.service)
  const locationSlug = safeSlug(params?.location)

  const loc = locations.find((l) => l.slug === locationSlug)
  const place = loc?.name ?? locationSlug.replaceAll("-", " ") || "United Kingdom"
  const region = loc?.region === "sussex" ? "Sussex" : "United Kingdom"

  const svc = SERVICES[serviceKey] ?? SERVICES["seo-foundation"]
  const label = svc.label
  const { title, description } = svc.meta(place)
  const bullets = svc.bullets(place)
  const heroImage = heroForLocation(locationSlug)

  const canonical = `https://www.guardxnetwork.com/solutions/${serviceKey || "seo-foundation"}/${locationSlug || "london"}`
  const faqs = solutionFaqs(label, place)

  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", url: "https://www.guardxnetwork.com" },
      { name: "Solutions", url: "https://www.guardxnetwork.com" },
      { name: label, url: `https://www.guardxnetwork.com/solutions/${serviceKey || "seo-foundation"}/${locationSlug || "london"}` },
      { name: place, url: canonical },
    ]),
    buildServiceSchema({
      serviceName: `${label} in ${place}`,
      description,
      url: canonical,
      areaServedName: place,
      image: `https://www.guardxnetwork.com${heroImage}`,
    }),
    buildFaqSchema(canonical, faqs),
  ]

  const relatedIndustries = (loc?.relatedIndustries ?? []).map((s) => industries.find((i) => i.slug === s)).filter(Boolean) as typeof industries
  const relatedLocations = (loc?.relatedLocations ?? []).map((s) => locations.find((l) => l.slug === s)).filter(Boolean) as typeof locations

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={`${place} hero image`} fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/30 via-[#0a0e1a]/80 to-[#0a0e1a]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {schemas.map((schema, idx) => (
              <JsonLd key={idx} data={schema} />
            ))}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <AnimatedPageTitle title={title} subtitle={description} />
                <p className="mt-6 text-white/75 leading-relaxed">
                  Built for local intent in <span className="text-white font-semibold">{place}</span>. We focus on rankings and conversion — so visitors turn into calls, quote requests and bookings.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-white/70 text-sm">{region}</span>
                  <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-white/70 text-sm">Mobile-first</span>
                  <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-white/70 text-sm">Schema + FAQs</span>
                  <span className="rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-white/70 text-sm">Internal linking</span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  <Image src={heroImage} alt={`${place} feature image`} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-bold text-white">What you get</h2>
                <ul className="mt-6 space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-white/75">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-400/80 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
                  <h3 className="text-xl font-bold text-white">Next step</h3>
                  <p className="mt-2 text-white/70">
                    Request a quick scorecard and we’ll show you the biggest wins for your niche and area.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href="/contact" className="rounded-full bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-400 transition">
                      Get a scorecard
                    </Link>
                    <Link href="/examples" className="rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition ring-1 ring-white/10">
                      See examples
                    </Link>
                  </div>
                </div>
              </div>

              <aside className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-lg font-bold text-white">Related pages</h3>
                  <div className="mt-4 grid gap-3">
                    <Link href={`/locations/${locationSlug || "london"}`} className="rounded-2xl bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10 p-4 text-white">
                      Explore {place} location page
                    </Link>
                    <Link href={`/industries/${(relatedIndustries[0]?.slug ?? "locksmiths")}`} className="rounded-2xl bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10 p-4 text-white">
                      Explore {relatedIndustries[0]?.name ?? "industry"} industry page
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-lg font-bold text-white">FAQs</h3>
                  <div className="mt-4 space-y-3">
                    {faqs.slice(0, 3).map((f) => (
                      <div key={f.question} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                        <div className="text-white font-semibold">{f.question}</div>
                        <div className="mt-2 text-white/75 text-sm leading-relaxed">{f.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white">Frequently asked questions</h2>
              <p className="mt-3 text-white/70">
                Answers for buyers comparing providers — written for clarity and search relevance.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((f) => (
                <details key={f.question} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 open:bg-white/7 transition">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="text-white font-semibold">{f.question}</span>
                    <span className="text-white/60 group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="mt-4 text-white/75 leading-relaxed">{f.answer}</div>
                </details>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-bold text-white">Explore nearby areas</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedLocations.slice(0, 10).map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}`} className="rounded-full bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15 transition ring-1 ring-white/10">
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-bold text-white">Explore industries</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {relatedIndustries.slice(0, 10).map((i) => (
                    <Link key={i.slug} href={`/industries/${i.slug}`} className="rounded-full bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15 transition ring-1 ring-white/10">
                      {i.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

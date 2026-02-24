import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { locations } from "@/lib/locations-data"
import { industries } from "@/lib/industries-data"
import type { Metadata } from "next"

type Props = { params: { slug?: string } }

export const dynamicParams = true

function safeSlug(slug?: string) {
  return (slug ?? "").trim()
}

function slugToName(slug?: string) {
  const safe = safeSlug(slug)
  if (!safe) return "Location"
  return safe
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

function getLocation(slug?: string) {
  const safe = safeSlug(slug)
  if (!safe) return undefined
  return locations.find((l) => l.slug === safe)
}

function resolveIndustries(slugs: string[]) {
  return slugs
    .map((s) => industries.find((i) => i.slug === s))
    .filter((x): x is (typeof industries)[number] => Boolean(x))
}

function heroFor(slug?: string) {
  const safe = safeSlug(slug) || "placeholder"
  return `/images/heroes/locations/${safe}.webp`
}

export async function generateStaticParams() {
  return locations.filter((item) => Boolean(item.slug)).map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params?.slug
  const loc = getLocation(slug)
  const name = loc?.name ?? slugToName(slug)

  const title = loc?.metaTitle ?? `Web Design, Local SEO & Review Generation in ${name} | GuardX`
  const description =
    loc?.metaDescription ??
    `Grow enquiries in ${name} with a fast website, SEO foundations and automated Google review growth. Built to rank locally and convert on mobile.`

  return {
    title,
    description,
    alternates: { canonical: slug ? `/locations/${safeSlug(slug)}` : "/locations" },
    openGraph: {
      title,
      description,
      url: slug ? `/locations/${safeSlug(slug)}` : "/locations",
      siteName: "GuardX",
      type: "website",
      images: [{ url: heroFor(slug) }],
    },
  }
}

export default function LocationPage({ params }: Props) {
  const slug = params?.slug
  const loc = getLocation(slug)

  // IMPORTANT: do not 404. Render a strong page even if the slug isn't in the dataset yet.
  const name = loc?.name ?? slugToName(slug)
  const county = loc?.county
  const region = loc?.region ?? "uk"

  const title = loc?.h1 ?? `Web Design, Local SEO & Review Growth in ${name}`
  const intro =
    loc?.intro ??
    `Most customers decide from Google results, reviews and the first screen of your website. In ${name}, your Google profile and website usually decide who gets contacted. GuardX builds fast, conversion-focused websites with a clean SEO foundation — and we install an automated review system so your reputation keeps moving forward.`

  const localContext =
    loc?.localContext ??
    `Local searches are high-intent. People in ${name} are comparing options quickly — the business that looks most credible usually wins the call.`

  const relatedLocations = (loc?.relatedLocations ?? [])
    .map((s) => locations.find((l) => l.slug === s))
    .filter((x): x is (typeof locations)[number] => Boolean(x))

  const relatedIndustries = resolveIndustries(loc?.relatedIndustries ?? [])

  const heroImage = heroFor(slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: loc?.metaDescription ?? undefined,
    url: slug ? `https://www.guardxnetwork.com/locations/${safeSlug(slug)}` : "https://www.guardxnetwork.com/locations",
    about: {
      "@type": "Place",
      name: county ? `${name}, ${county}` : name,
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
            <Image src={heroImage} alt={`${name} location hero image`} fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/30 via-[#0a0e1a]/80 to-[#0a0e1a]" />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <AnimatedPageTitle
                  title={title}
                  subtitle={loc?.metaDescription ?? `Web design, SEO foundation and review generation for businesses in ${county ? `${name}, ${county}` : name}.`}
                />
                <p className="mt-6 text-white/75 leading-relaxed whitespace-pre-line">{intro}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-400 transition"
                  >
                    Get a scorecard
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-white font-semibold hover:bg-white/15 transition ring-1 ring-white/10"
                  >
                    View pricing
                  </Link>
                </div>
              </div>

              {/* Visible hero image (same image as the location card) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  <Image src={heroImage} alt={`${name} feature image`} fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </section>

        {/* Local relevance */}
        <section className="py-14 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">What wins in {name}</h2>
                  <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{localContext}</p>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">Local SEO foundation for {name}</h2>
                  <ul className="mt-4 space-y-3 text-white/75">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                      <span>Location-led site structure: service pages + area pages + proof sections</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                      <span>Fast mobile performance (most local searches happen on phones)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400/80" />
                      <span>Clear conversion paths: click-to-call, WhatsApp, quote forms and map directions</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <h2 className="text-xl font-semibold text-white">Proof that converts</h2>
                  <p className="mt-3 text-white/75 leading-relaxed">
                    In {name}, customers compare quickly. We help businesses stand out with stronger proof: more recent Google reviews, clearer
                    service coverage, and job-specific examples — then we place that proof where it increases enquiries most.
                  </p>
                </div>
              </div>

              <aside className="space-y-6">
                {relatedIndustries.length > 0 && (
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                    <h3 className="text-white font-semibold">Industries we help in {name}</h3>
                    <div className="mt-4 grid gap-2">
                      {relatedIndustries.slice(0, 10).map((i) => (
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
                    <h3 className="text-white font-semibold">Nearby areas</h3>
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
                    Want a quick plan for ranking and converting better in {name}? We’ll send a scorecard and a clear build path.
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
                <h2 className="text-2xl font-semibold text-white">Ready to grow enquiries in {name}?</h2>
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

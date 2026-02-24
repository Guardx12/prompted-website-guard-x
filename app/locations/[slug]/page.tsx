import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getLocationBySlug, locations } from "@/lib/locations-data"
import { industries } from "@/lib/industries-data"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { ArrowRight, CheckCircle, MapPin } from "lucide-react"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocationBySlug(params.slug)
  if (!location) return { title: "Location | GuardX" }
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

function pickWindow<T>(items: T[], seed: string, windowSize: number) {
  if (!items?.length) return []
  const hash = Array.from(seed).reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const start = hash % items.length
  const out: T[] = []
  for (let i = 0; i < Math.min(windowSize, items.length); i++) {
    out.push(items[(start + i) % items.length])
  }
  return out
}

export default function LocationPage({ params }: Props) {
  const location = getLocationBySlug(params.slug)
  if (!location) return notFound()

  const relatedIndustries = location.relatedIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean)

  const rotatedIndustries = pickWindow(industries, params.slug, 12)
  const showIndustries = (relatedIndustries.length ? relatedIndustries : rotatedIndustries).slice(0, 12)

  const rotatedNearby = pickWindow(locations, params.slug, 8)
  const showNearby = rotatedNearby.slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{location.county ? `${location.county}` : "United Kingdom"}</span>
                </div>

                <AnimatedPageTitle text={location.h1} className="text-white" />
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
                  {location.intro}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/web-design"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white hover:border-blue-500/50 transition-colors"
                  >
                    Web Design
                  </Link>
                </div>
              </div>

              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src={`/images/heroes/locations/${location.slug}.webp`}
                  alt={`${location.name} hero image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Authority Content */}
        <section className="py-16 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-6 text-[#cbd5e1] leading-relaxed">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Websites Built to Win Local Search in {location.name}
                </h2>

                <p>
                  In {location.name}, customers rarely scroll far. They search, skim a few options, check reviews, and contact whoever looks most
                  trustworthy. That means your website and Google profile need to do the heavy lifting: clear offer, clear service area, obvious
                  calls-to-action, and proof that you’re reliable.
                </p>

                <p>
                  GuardX builds modern, high-performance websites that load fast on mobile and are structured correctly for Google from day one.
                  We don’t do “pretty pages” that don’t convert — we build pages designed to generate enquiries. Our SEO foundation work helps
                  Google understand what you do and where you do it, so you can compete for searches like “{location.name} + service”, “near me”,
                  and “best in {location.name}” queries in your category.
                </p>

                <p>
                  Reviews amplify the outcome. A steady stream of recent reviews improves trust and often improves click-through rates, which feeds
                  into local visibility over time. If you’re starting with the website first, great — the site is built so adding review growth later
                  becomes a natural upgrade rather than a rebuild.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">What we typically improve</h3>
                <ul className="space-y-3">
                  {[
                    "Clear service messaging and stronger calls-to-action",
                    "Fast mobile performance and clean page structure",
                    "Local SEO foundations: headings, titles, and crawlable structure",
                    "Trust signals: reviews, proof, and reassurance at the right points",
                    "Service-area clarity so customers know you cover " + location.name,
                  ].map((line, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-4">
                  If you want a site that looks premium, loads instantly, and is structured to compete locally in {location.name}, this is exactly
                  what we build. Start with the website — then scale visibility and reputation as your next growth layer.
                </p>
              </div>

              {/* Sidebar */}
              <aside className="rounded-2xl border border-white/10 bg-[#0a0e1a] p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What you get</h3>
                <ul className="space-y-3 text-[#cbd5e1]">
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> High-performance website built to convert</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> SEO foundation built in from day one</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> Clear enquiry pathways (call, form, WhatsApp)</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> Optional review growth add-on</li>
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/contact" className="rounded-xl bg-blue-500 px-5 py-3 text-center font-semibold text-white hover:bg-blue-600">
                    Get a Quote
                  </Link>
                  <Link href="/pricing" className="rounded-xl border border-white/10 px-5 py-3 text-center text-white hover:border-blue-500/50">
                    View Pricing
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Internal Linking: Industries */}
        <section className="py-16 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Industries we support in {location.name}</h2>
              <Link href="/industries" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">View all industries</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {showIndustries.map((ind) => (
                <Link
                  key={ind!.slug}
                  href={`/industries/${ind!.slug}`}
                  className="rounded-xl border border-white/10 bg-[#111827] p-5 hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-white font-semibold mb-2">{ind!.name}</div>
                  <div className="text-[#94a3b8] text-sm line-clamp-2">{ind!.intro}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Locations */}
        <section className="py-16 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Nearby locations</h2>
              <Link href="/locations" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">View all locations</Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {showNearby.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="rounded-lg border border-white/10 bg-[#0a0e1a] px-4 py-3 text-sm text-white hover:border-blue-500/50 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">FAQs</h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <h3 className="text-white font-semibold mb-2">Can you build location targeting for {location.name} and surrounding areas?</h3>
                <p className="text-[#cbd5e1]">
                  Yes. We can structure your site with service and location pages so Google understands exactly what you do and where you serve,
                  then connect pages with internal links to strengthen relevance.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <h3 className="text-white font-semibold mb-2">Do I need ongoing SEO campaigns?</h3>
                <p className="text-[#cbd5e1]">
                  We focus on a strong SEO foundation that’s built into the site. That means the structure is ready for Google indexing and growth.
                  Ongoing SEO can be added later if you want to push harder.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <h3 className="text-white font-semibold mb-2">Can I start with the website first?</h3>
                <p className="text-[#cbd5e1]">
                  Yes — and that’s often the best first step. We build the website so future upgrades (like review growth) slot in cleanly without needing a rebuild.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-600">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
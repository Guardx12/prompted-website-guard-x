import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getIndustryBySlug, industries } from "@/lib/industries-data"
import { locations } from "@/lib/locations-data"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { ArrowRight, CheckCircle } from "lucide-react"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) return { title: "Industry | GuardX" }
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
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

function wordsToSentences(text: string) {
  return text
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustryBySlug(params.slug)
  if (!industry) return notFound()

  const relatedIndustries = industry.relatedIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean)

  const linkedLocations = industry.relatedLocations
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean)

  // Fallback rotation if related arrays are short
  const rotatedLocations = pickWindow(locations, params.slug, 12)
  const showLocations = (linkedLocations.length ? linkedLocations : rotatedLocations).slice(0, 12)

  const challengeLines = wordsToSentences(industry.challenges)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-blue-400 font-semibold mb-3">{industry.category}</p>
                <AnimatedPageTitle text={industry.h1} className="text-white" />
                <p className="text-lg text-[#94a3b8] leading-relaxed mb-8">
                  {industry.intro}
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
                  src={`/images/heroes/industries/${industry.slug}.webp`}
                  alt={`${industry.name} hero image`}
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
                  Built for {industry.name} Businesses That Want More Enquiries
                </h2>

                <p>
                  Most customers don’t “browse” when they need a {industry.name.toLowerCase()} — they search, compare quickly,
                  and contact whoever looks most trustworthy. That decision happens fast. If your site is slow, unclear, or light
                  on proof, you lose enquiries to competitors who look sharper online (even if you do better work).
                </p>

                <p>
                  GuardX websites are built for real-world local competition. We start with a conversion-first layout (clear service
                  messaging, clean calls-to-action, service-area clarity), then layer in an SEO foundation so Google can understand
                  exactly what you do and where you do it. That means better visibility for searches like “{industry.name} near me”,
                  “{industry.name} services”, and “{industry.name} in [your area]”.
                </p>

                <p>
                  Reviews are the second half of the decision. People trust patterns. A steady stream of recent, genuine reviews makes
                  your business look active, reliable, and easy to choose. Our setup makes review growth simple and consistent — so your
                  reputation keeps moving in the right direction while you focus on running the business.
                </p>

                <h3 className="text-xl font-semibold text-white pt-4">Common gaps we fix</h3>
                <ul className="space-y-3">
                  {challengeLines.slice(0, 8).map((line, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <p className="pt-4">
                  The goal is simple: build a site that looks premium, loads fast, explains your offer clearly, and makes it frictionless
                  to contact you. When those fundamentals are right, SEO and review growth amplify the outcome — higher rankings, more clicks,
                  and more enquiries.
                </p>
              </div>

              {/* Sidebar */}
              <aside className="rounded-2xl border border-white/10 bg-[#0a0e1a] p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What you get</h3>
                <ul className="space-y-3 text-[#cbd5e1]">
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> High-performance website built to convert</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> Proper SEO foundation (titles, structure, speed)</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> Review growth system ready when you are</li>
                  <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" /> Clear enquiry pathways (call, form, WhatsApp)</li>
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

        {/* Internal Linking: Related Industries */}
        {(relatedIndustries.length > 0) && (
          <section className="py-16 bg-[#0a0e1a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related industries</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedIndustries.slice(0, 9).map((rel) => (
                  <Link
                    key={rel!.slug}
                    href={`/industries/${rel!.slug}`}
                    className="rounded-xl border border-white/10 bg-[#111827] p-5 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="text-white font-semibold mb-2">{rel!.name}</div>
                    <div className="text-[#94a3b8] text-sm line-clamp-2">{rel!.intro}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Internal Linking: Locations */}
        <section className="py-16 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{industry.name} in these locations</h2>
              <Link href="/locations" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">View all locations</Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {showLocations.map((loc) => (
                <Link
                  key={loc!.slug}
                  href={`/locations/${loc!.slug}`}
                  className="rounded-lg border border-white/10 bg-[#0a0e1a] px-4 py-3 text-sm text-white hover:border-blue-500/50 transition-colors"
                >
                  {industry.name} in {loc!.name}
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
                <h3 className="text-white font-semibold mb-2">Can you structure the site to rank for “{industry.name} + location” searches?</h3>
                <p className="text-[#cbd5e1]">
                  Yes. We build dedicated service structure and location targeting so Google can clearly understand what you do and where you work,
                  then we connect pages with internal links to strengthen relevance.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <h3 className="text-white font-semibold mb-2">Do I own the website when it’s finished?</h3>
                <p className="text-[#cbd5e1]">
                  Yes — you own the website and the content. We can also handle hosting and technical maintenance if you want everything kept fast,
                  secure and up to date.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#111827] p-6">
                <h3 className="text-white font-semibold mb-2">Do I need review generation on day one?</h3>
                <p className="text-[#cbd5e1]">
                  Not necessarily. Many businesses start with the website first. The review growth system can be added when you’re ready — it plugs
                  into the same strategy: visibility + trust + enquiries.
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
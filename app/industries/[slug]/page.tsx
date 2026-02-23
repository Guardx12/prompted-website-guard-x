
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { locations } from "@/lib/locations-data"
import type { Metadata } from "next"

type Props = { params: { slug: string } }

function formatName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = formatName(params.slug)
  return {
    title: `Web Design & Local SEO for ${name} Businesses | GuardX`,
    description: `High-performance websites and structured local SEO for ${name} businesses across the UK — built for speed, trust and enquiries.`
  }
}

export default function IndustryPage({ params }: Props) {
  const name = formatName(params.slug)

  // Rotate which locations are linked from each industry page
  const linkedLocations = pickWindow(locations, params.slug, 12)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-6 text-gray-300">

        <h1 className="text-4xl font-bold text-white mb-8">
          Web Design, Local SEO & Review Growth for {name} Businesses
        </h1>

        <p className="mb-6 text-lg">
          GuardX builds modern, conversion-focused websites for {name.toLowerCase()} businesses — structured properly from day one with
          strong local SEO foundations and a clear enquiry path.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          We Support {name} Businesses Across the UK
        </h2>

        <p className="text-[#94a3b8] mb-6">
          Explore a few areas we serve below, or view the full location list.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {linkedLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {name} in {loc.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/locations" className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-white hover:border-blue-500/50">
            View all locations
          </Link>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600">
            Get a website quote
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}

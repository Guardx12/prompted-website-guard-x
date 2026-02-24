
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { industries } from "@/lib/industries-data"
import { locations } from "@/lib/locations-data"
import type { Metadata } from "next"

type Props = { params: { slug: string } }

function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug)
}

function resolveIndustries(slugs: string[]) {
  return slugs
    .map((s) => industries.find((i) => i.slug === s))
    .filter(Boolean)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = getLocation(params.slug)
  if (!location) return { title: "Location Not Found | GuardX" }
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

export default function LocationPage({ params }: Props) {
  const location = getLocation(params.slug)
  if (!location) return notFound()

  const relatedIndustries = resolveIndustries(location.relatedIndustries || [])
  const locationIcon = `/images/locations/${location.slug}.svg`

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-6 text-gray-300">

        <div className="flex items-start gap-4 mb-6">
          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3">
            <Image src={locationIcon} alt="" width={44} height={44} />
          </div>
          <div className="min-w-0">
            <AnimatedPageTitle text={location.name} className="mb-2" />
            <p className="text-[#94a3b8]">{location.metaDescription}</p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-4">
          {location.h1}
        </h1>

        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
          {location.intro.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Local context</h2>
        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
          {location.localContext.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Industries We Support in {location.name}
        </h2>

        <p className="text-[#94a3b8] mb-6">
          Explore a few industries we commonly support below, or view the full industry list.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {relatedIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {ind.name} in {location.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link href="/industries" className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-white hover:border-blue-500/50">
            View all industries
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


import { locations } from "@/lib/locations-data"

export async function generateStaticParams() {
  return locations.map((item) => ({ slug: item.slug }))
}

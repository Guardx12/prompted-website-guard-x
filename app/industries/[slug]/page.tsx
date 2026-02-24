
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

function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug)
}

function resolveLocations(slugs: string[]) {
  return slugs
    .map((s) => locations.find((l) => l.slug === s))
    .filter(Boolean)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustry(params.slug)
  if (!industry) return { title: "Industry Not Found | GuardX" }
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  }
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustry(params.slug)
  if (!industry) return notFound()

  const relatedLocations = resolveLocations(industry.relatedLocations || [])
  const industryIcon = `/images/industries/${industry.slug}.svg`

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-6 text-gray-300">

        <div className="flex items-start gap-4 mb-6">
          <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-3">
            <Image src={industryIcon} alt="" width={44} height={44} />
          </div>
          <div className="min-w-0">
            <AnimatedPageTitle text={industry.name} className="mb-2" />
            <p className="text-[#94a3b8]">{industry.metaDescription}</p>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-4">
          {industry.h1}
        </h1>

        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
          {industry.intro.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">What GuardX fixes for {industry.name}</h2>
        <div className="prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300">
          {industry.challenges.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          We Support {industry.name} Businesses Across the UK
        </h2>

        <p className="text-[#94a3b8] mb-6">
          Explore a few areas we serve below, or view the full location list.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {relatedLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {industry.name} in {loc.name}
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

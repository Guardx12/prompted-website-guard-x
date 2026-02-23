
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

type Props = { params: { slug: string } }

function formatName(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = formatName(params.slug)
  return {
    title: `Web Design & Local SEO for ${name} Businesses | GuardX`,
    description: `GuardX helps ${name} businesses rank higher in Google, build trust faster, and generate more enquiries with SEO-ready websites and automated review growth systems.`
  }
}

export default function IndustryPage({ params }: Props) {
  const name = formatName(params.slug)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-6 text-gray-300">

        <h1 className="text-4xl font-bold text-white mb-8">
          SEO, Web Design & Review Growth for {name} Businesses
        </h1>

        <p className="mb-6 text-lg">
          {name} businesses operate in competitive local markets where visibility and trust directly impact revenue.
          When customers search for "{name} near me" or "{name} services", they compare websites and reviews quickly.
          GuardX builds high-performance websites designed specifically to help {name.toLowerCase()} companies rank higher,
          convert better, and generate more enquiries.
        </p>

        <p className="mb-6">
          Our approach combines structured local SEO foundations, conversion-focused design, and automated Google review
          generation to ensure your business stands out in search results. We help you appear for commercial search terms,
          improve click-through rates, and build authority in your niche.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Why SEO Matters for {name} Companies
        </h2>

        <p className="mb-6">
          Most customers research before contacting a {name.toLowerCase()} business. If your website lacks clear messaging,
          structured SEO, or strong review signals, you lose enquiries to competitors who appear more trustworthy.
          We ensure your website loads fast, communicates clearly, and is built around search intent.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          What GuardX Delivers
        </h2>

        <ul className="list-disc pl-6 space-y-3 mb-10">
          <li>SEO-ready website structure targeting "{name} + location" keywords</li>
          <li>Clear trust signals and conversion optimisation</li>
          <li>Automated Google review request systems</li>
          <li>Internal linking strategy to strengthen rankings</li>
          <li>Long-term scalable SEO architecture</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">How long does SEO take for {name} businesses?</h3>
            <p>SEO improvements typically begin showing within 2–3 months depending on competition and existing authority.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Do you only work with large {name} companies?</h3>
            <p>No — we work with independent businesses and growing companies across the UK.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold">
            Get Started
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  )
}

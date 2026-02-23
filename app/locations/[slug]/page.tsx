
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
    title: `Web Design & Local SEO in ${name} | GuardX`,
    description: `GuardX helps businesses in ${name} rank higher on Google, improve reviews, and generate more enquiries with SEO-ready websites and review automation.`
  }
}

export default function LocationPage({ params }: Props) {
  const name = formatName(params.slug)

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-6 text-gray-300">

        <h1 className="text-4xl font-bold text-white mb-8">
          Web Design, Local SEO & Review Growth in {name}
        </h1>

        <p className="mb-6 text-lg">
          Businesses in {name} compete heavily in local search results. When customers search for services,
          they compare websites and reviews before deciding who to contact. GuardX builds SEO-ready websites
          and automated review systems to ensure your business stands out.
        </p>

        <p className="mb-6">
          We structure your website to rank for "{name} + service" searches, optimise for mobile performance,
          and strengthen your Google presence through consistent review growth and internal linking.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Why Local SEO Matters in {name}
        </h2>

        <p className="mb-6">
          Local customers rarely scroll far. Appearing prominently in search results increases trust and
          dramatically improves enquiry rates. Our SEO framework ensures your business is positioned for
          long-term growth in {name}.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          What We Deliver for {name} Businesses
        </h2>

        <ul className="list-disc pl-6 space-y-3 mb-10">
          <li>SEO-structured websites targeting "{name}" search terms</li>
          <li>Conversion-focused layout and messaging</li>
          <li>Automated Google review generation</li>
          <li>Internal linking to strengthen authority</li>
          <li>Scalable long-term SEO growth framework</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Do you work with businesses across {name}?</h3>
            <p>Yes — we support businesses throughout {name} and surrounding areas.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">How quickly can we improve rankings?</h3>
            <p>Initial improvements are often visible within 2–3 months depending on competition.</p>
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

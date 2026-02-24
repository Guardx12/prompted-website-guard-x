import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { industries } from "@/lib/industries-data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return { title: "Industry Not Found — GuardX" }

  const title = industry.metaTitle || `${industry.name} — GuardX`
  const description = industry.metaDescription || industry.intro

  return {
    title,
    description,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/industries/${industry.slug}`,
      siteName: "GuardX",
      type: "website",
      images: [
        {
          url: `/images/heroes/industries/${industry.slug}.webp`,
          width: 1200,
          height: 630,
          alt: `${industry.name} hero image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/images/heroes/industries/${industry.slug}.webp`],
    },
  }
}

function toPlainText(input: string) {
  return input.replace(/\s+/g, " ").trim()
}

export default function IndustryDetailPage({ params }: PageProps) {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return notFound()

  const heroImage = `/images/heroes/industries/${industry.slug}.webp`

  // Lightweight, industry-specific FAQ for on-page SEO + conversions
  const faqs = [
    {
      q: `What does GuardX do for ${industry.name.toLowerCase()} businesses?`,
      a: `We build a fast, conversion-focused website, set up a strong local SEO foundation, and install an automated review system so your Google profile keeps improving month after month.`,
    },
    {
      q: `How does the SEO foundation help ${industry.name.toLowerCase()} get more enquiries?`,
      a: `We structure the site around high-intent searches (service + location), improve speed and mobile UX, and build clear proof sections so the right visitors turn into calls and quote requests.`,
    },
    {
      q: `How quickly can I see results?`,
      a: `You can see improvements immediately in conversion rate (better pages and CTAs). SEO is compounding — once indexed, strong pages and growing reviews typically improve visibility over time.`,
    },
    {
      q: `Do you do “ongoing SEO”?`,
      a: `We focus on an SEO-ready foundation (site structure, technical basics, and intent-led pages). If you want ongoing content or link work, we can advise on a simple plan or work with your preferred provider.`,
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `GuardX for ${industry.name}`,
    provider: {
      "@type": "Organization",
      name: "GuardX",
      url: "https://guardxnetwork.com",
    },
    areaServed: "GB",
    serviceType: "Web design, SEO foundation, and review generation",
    description: toPlainText(industry.metaDescription || industry.intro),
    url: `https://guardxnetwork.com/industries/${industry.slug}`,
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={`${industry.name} hero`} fill className="object-cover opacity-35" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a]/40 via-[#0a0e1a]/75 to-[#0a0e1a]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
            <AnimatedPageTitle
              title={industry.h1 || `GuardX for ${industry.name}`}
              subtitle={industry.metaDescription}
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Conversion-focused website</div>
                <div className="text-white/70 text-sm mt-1">
                  Built to turn visits into calls, quote requests and bookings.
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Elite local SEO foundation</div>
                <div className="text-white/70 text-sm mt-1">
                  Intent-led structure, fast mobile performance, clean technical setup.
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="text-white font-semibold">Automated Google review growth</div>
                <div className="text-white/70 text-sm mt-1">
                  A system that keeps your reputation moving forward — consistently.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
              >
                Get a scorecard
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">What we fix for {industry.name}</h2>
                <p className="mt-3 text-white/75 leading-relaxed whitespace-pre-line">{industry.intro}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="text-white font-semibold">Typical leaks</div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed whitespace-pre-line">{industry.challenges}</p>
                  </div>
                  <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                    <div className="text-white font-semibold">How we tighten it up</div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed whitespace-pre-line">
                      We redesign the first screen, proof sections and CTAs so visitors instantly understand why you’re the safe
                      choice — then we add an SEO-ready structure to capture high-intent searches and route them into a simple enquiry flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Elite-tier SEO foundation (built in)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  This isn’t “sprinkle keywords and hope”. Every {industry.name.toLowerCase()} page is structured around how customers actually search:
                  service intent, location intent, objections, proof and a clear next step.
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-white/75">
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Clean URL + internal linking structure</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Fast mobile performance + accessibility basics</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">Strong metadata + OpenGraph + canonical tags</li>
                  <li className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">FAQ + structured data to improve SERP coverage</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">Proof that compounds (reviews)</h2>
                <p className="mt-3 text-white/75 leading-relaxed">
                  Most businesses rely on “ask when you remember”. We install an automated review flow so you consistently
                  collect recent Google reviews — the kind that increases trust and improves conversion.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/real-results"
                    className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a0e1a] hover:bg-white/90"
                  >
                    See results
                  </Link>
                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/10"
                  >
                    Review value calculator
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <h2 className="text-xl font-semibold text-white">FAQs</h2>
                <div className="mt-4 space-y-4">
                  {faqs.map((item) => (
                    <div key={item.q} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                      <div className="text-white font-semibold">{item.q}</div>
                      <p className="mt-2 text-sm text-white/75 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-white font-semibold">Quick links</div>
                <div className="mt-3 grid gap-2">
                  <Link className="text-sm text-white/80 hover:text-white" href="/pricing">Pricing</Link>
                  <Link className="text-sm text-white/80 hover:text-white" href="/examples">Examples</Link>
                  <Link className="text-sm text-white/80 hover:text-white" href="/contact">Contact</Link>
                </div>
              </div>

              {!!industry.relatedIndustries?.length && (
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                  <div className="text-white font-semibold">Related industries</div>
                  <div className="mt-3 grid gap-2">
                    {industry.relatedIndustries.map((slug) => {
                      const rel = industries.find((i) => i.slug === slug)
                      if (!rel) return null
                      return (
                        <Link
                          key={slug}
                          href={`/industries/${slug}`}
                          className="text-sm text-white/80 hover:text-white"
                        >
                          {rel.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </aside>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

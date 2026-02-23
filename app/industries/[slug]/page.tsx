import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { industries, getIndustryBySlug } from "@/lib/industries-data"
import { getLocationBySlug } from "@/lib/locations-data"
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const heroImageForIndustry = (slug: string) => ({ src: `/images/heroes/industries/${slug}.webp`, alt: `${slug} hero image` })

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) notFound()

  const relatedIndustries = industry.relatedIndustries
    .map((s) => getIndustryBySlug(s))
    .filter(Boolean)

  const relatedLocations = industry.relatedLocations
    .map((s) => getLocationBySlug(s))
    .filter(Boolean)

  const introParagraphs = industry.intro.split("\n\n")
  const emailSmsIndex = introParagraphs.findIndex((p) => {
    const lower = p.trim().toLowerCase()
    // Detect the "how reviews are collected" paragraph so we can move it under the Review Challenge section.
    return (
      lower.startsWith("our email and sms system") ||
      lower.startsWith("our system sends") ||
      lower.startsWith("our platform sends") ||
      lower.includes("email and sms") ||
      lower.includes("personalised review requests") ||
      (lower.includes("review request") && lower.includes("sms")) ||
      (lower.includes("review request") && lower.includes("email"))
    )
  })
  const mainIntroParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(0, emailSmsIndex) : introParagraphs
  const emailSmsParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(emailSmsIndex) : []

  const faqItems = [
    {
      question: `What should a ${industry.name.toLowerCase()} website include to get more enquiries?`,
      answer:
        `Clear services, strong trust signals (reviews, accreditations), fast mobile performance, and simple contact options like click-to-call and WhatsApp. We build around conversions, not just looks.`,
    },
    {
      question: `Can you build service pages and location pages for ${industry.name.toLowerCase()}?`,
      answer:
        `Yes. We can structure your site with dedicated service pages and location targeting so Google understands exactly what you do and where you work.`,
    },
    {
      question: `Do I own the website when it’s finished?`,
      answer:
        `Yes — you own the site and content. We can also handle hosting and maintenance so everything stays fast, secure and up to date.`,
    },
    {
      question: `Do you offer review generation as well?`,
      answer:
        `Yes — review generation is an optional add-on once your new site is live. It helps you build steady Google review momentum without chasing customers.`,
    },
  ] as const

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text={industry.h1} className="mb-6" />
            <p className="text-sm text-[#64748b] mb-4">{industry.category}</p>
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
              <ol className="flex flex-wrap justify-center gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li className="opacity-60">/</li>
                <li><Link href="/industries" className="hover:underline">Industries</Link></li>
                <li className="opacity-60">/</li>
                <li className="text-white/90">{industry.name}</li>
              </ol>
            </nav>
            {(() => {
              const hero = heroImageForIndustry(slug)
              return (
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden mb-10 ring-1 ring-white/10">
                  <Image
                    src={hero.src}
                    alt={`${industry.name} hero image`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
                </div>
              )
            })()}
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              {mainIntroParagraphs[0]}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Extended Intro */}
        {mainIntroParagraphs.length > 1 && (
          <section className="py-20 bg-[#111827]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {mainIntroParagraphs.slice(1).map((para, i) => (
                <p key={i} className="text-lg text-[#94a3b8] leading-relaxed mb-6 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Why GuardX */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why {industry.name} Choose GuardX
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {
              [
                `Modern website design built for ${industry.name.toLowerCase()} — clear services, strong proof, and conversion-first layout.`,
                "SEO foundation included on our Professional plan — semantic structure, metadata, internal links, and fast load times.",
                "Industry-specific pages (services, FAQs, case studies) so Google and customers understand exactly what you do.",
                "Mobile-first contact: click-to-call, WhatsApp, and enquiry forms that remove friction.",
                "Optional add-on: automated review requests after launch to build steady Google trust over time.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1] text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Website & SEO Challenges for {industry.name}
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed text-center max-w-3xl mx-auto">
              {industry.challenges}
            </p>
          </div>
        </section>


        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-20 bg-[#0a0e1a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Related Industries
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedIndustries.map((ind) => (
                  <Link
                    key={ind!.slug}
                    href={`/industries/${ind!.slug}`}
                    className="group rounded-xl border border-white/10 bg-[#1e293b] p-6 transition-all duration-300 hover:border-blue-500/50"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {ind!.name}
                    </h3>
                    <p className="text-[#94a3b8] text-sm line-clamp-2">{ind!.intro.split("\n")[0]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Locations */}
        {relatedLocations.length > 0 && (
          <section className="py-20 bg-[#111827]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                {industry.name} in These Locations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedLocations.map((loc) => (
                  <Link
                    key={loc!.slug}
                    href={`/locations/${loc!.slug}`}
                    className="group rounded-xl border border-white/10 bg-[#1e293b] p-6 transition-all duration-300 hover:border-blue-500/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {loc!.name}
                      </h3>
                    </div>
                    <p className="text-[#94a3b8] text-sm line-clamp-2">{loc!.intro.split("\n")[0]}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        
        {/* FAQ */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Frequently Asked Questions for {industry.name}
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 open:bg-white/7 transition-colors"
                >
                  <summary className="cursor-pointer list-none text-white font-semibold text-lg flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-white/60 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-[#94a3b8] leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

{/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your {industry.name} Business?
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact GuardX today for a free, no-obligation conversation about how our web design, SEO foundation,
              and review generation services can transform your online presence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

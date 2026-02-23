import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { locations, getLocationBySlug } from "@/lib/locations-data"
import { getIndustryBySlug } from "@/lib/industries-data"
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const heroImageForLocation = (slug: string) => ({ src: `/images/heroes/locations/${slug}.webp`, alt: `${slug} hero image` })

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const relatedLocations = location.relatedLocations
    .map((s) => getLocationBySlug(s))
    .filter(Boolean)

  const relatedIndustries = location.relatedIndustries
    .map((s) => getIndustryBySlug(s))
    .filter(Boolean)

  const introParagraphs = location.intro.split("\n\n")
  const emailSmsIndex = introParagraphs.findIndex((p) => {
    const s = p.trim().toLowerCase()
    return (
      s.startsWith("our email and sms system") ||
      s.startsWith("our system sends") ||
      s.startsWith("our platform sends") ||
      s.includes("review requests via email and sms") ||
      s.includes("review requests through email and sms") ||
      (s.includes("email") && s.includes("sms") && s.includes("review request"))
    )
  })
  const mainIntroParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(0, emailSmsIndex) : introParagraphs
  const emailSmsParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(emailSmsIndex) : []

  const faqItems = [
    {
      question: `How quickly can I get a new website live in ${location.name}?`,
      answer:
        `Most small business websites can be designed, built and launched within 7–14 days (depending on pages and content). We keep it simple, fast and mobile-first.`,
    },
    {
      question: `Do you help businesses in nearby areas around ${location.name}?`,
      answer:
        `Yes — if you serve surrounding towns or villages, we can structure your website and SEO foundation to cover nearby areas as well.`,
    },
    {
      question: `Will this help me show up more on Google in ${location.name}?`,
      answer:
        `A modern website with a solid SEO foundation helps Google understand your services and locations. Pair that with steady review growth and you’ll generally see stronger visibility over time.`,
    },
    {
      question: `What’s included in the SEO foundation for my ${location.name} website?`,
      answer:
        `On the Professional plan we include the essentials that help you rank: clean page structure, sensible internal linking, fast performance, metadata, and mobile-first layout. We also make sure your service and location pages are set up in a way Google can understand.`,
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
            
      <div className="max-w-3xl mx-auto text-center mt-6">
        <p className="text-base text-white/80">
          GuardX is based in West Sussex and builds modern, fast websites for businesses in {location.name}. Our Professional tier includes an SEO foundation (structure, metadata, performance and internal links) so Google can understand what you do and where you work. Review generation is available as an optional add-on after launch.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/web-design" className="underline">Website Design</Link>
          <Link href="/seo-foundation" className="underline">SEO Foundation</Link>
          <Link href="/pricing" className="underline">Pricing</Link>
        </div>
      </div>

      <AnimatedPageTitle text={location.h1} className="mb-6" />
            {location.county && (
              <p className="text-sm text-[#64748b] mb-4">{location.county}</p>
            )}
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/70">
              <ol className="flex flex-wrap justify-center gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li className="opacity-60">/</li>
                <li><Link href="/locations" className="hover:underline">Locations</Link></li>
                <li className="opacity-60">/</li>
                <li className="text-white/90">{location.name}</li>
              </ol>
            </nav>
            {(() => {
              const hero = heroImageForLocation(slug)
              return (
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden mb-10 ring-1 ring-white/10">
                  <Image
                    src={hero.src}
                    alt={`${location.name} hero image`}
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
              Why {location.name} Businesses Choose GuardX
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {
              [
                `Modern website design built to convert visitors into enquiries for ${location.name} businesses.`,
                "SEO foundation included on our Professional plan — semantic structure, metadata, internal links, and fast load times.",
                "Clear service pages and location coverage so Google understands what you do and where you work.",
                "Conversion-first layout: click-to-call, WhatsApp, and enquiry forms that are easy on mobile.",
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

        {/* Local Context */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Local Context: {location.name}
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed text-center max-w-3xl mx-auto">
              {location.localContext}
            </p>
          </div>
        </section>

        {/* Related Locations */}
        {relatedLocations.length > 0 && (
          <section className="py-20 bg-[#0a0e1a]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Nearby Locations
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

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-20 bg-[#111827]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Industries We Serve in {location.name}
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

        
        {/* Review Challenge */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              What a High‑Performing Website in {location.name} Needs
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed text-center max-w-3xl mx-auto">
              In {location.name}, customers compare a few local options before they call. A high‑performing website makes that comparison easy: it loads fast on mobile, explains your services clearly, shows proof (projects, accreditations, testimonials), and makes it effortless to contact you. The SEO foundation then helps Google connect your services with the areas you serve.
            </p>
          </div>
        </section>


        {/* FAQ */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Frequently Asked Questions in {location.name}
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
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact GuardX today for a free, no-obligation conversation about how a modern website and SEO foundation can transform your online presence in {location.name}.
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

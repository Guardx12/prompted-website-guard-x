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

const locationImages: Record<string, { src: string; alt: string }> = {
  sussex: { src: "/seo/locations/sussex.jpg", alt: "Sussex countryside and South Downs" },
  brighton: { src: "/seo/locations/brighton.jpg", alt: "Brighton seafront with the iconic Palace Pier" },
  hove: { src: "/seo/locations/hove.jpg", alt: "Hove seafront and Regency architecture" },
  worthing: { src: "/seo/locations/worthing.jpg", alt: "Worthing seafront and pier" },
  littlehampton: { src: "/seo/locations/littlehampton.jpg", alt: "Littlehampton harbour and seafront" },
  "bognor-regis": { src: "/seo/locations/bognor-regis.jpg", alt: "Bognor Regis seaside promenade" },
  chichester: { src: "/seo/locations/chichester.jpg", alt: "Chichester Cathedral and city centre" },
  arundel: { src: "/seo/locations/arundel.jpg", alt: "Arundel Castle overlooking the town" },
  horsham: { src: "/seo/locations/horsham.jpg", alt: "Horsham town centre high street" },
  crawley: { src: "/seo/locations/crawley.jpg", alt: "Crawley town centre commercial area" },
  "haywards-heath": { src: "/seo/locations/haywards-heath.jpg", alt: "Haywards Heath town centre" },
  "burgess-hill": { src: "/seo/locations/burgess-hill.jpg", alt: "Burgess Hill town centre" },
  "east-grinstead": { src: "/seo/locations/east-grinstead.jpg", alt: "East Grinstead historic High Street" },
  lewes: { src: "/seo/locations/lewes.jpg", alt: "Lewes town with castle ruins on the hilltop" },
  uckfield: { src: "/seo/locations/uckfield.jpg", alt: "Uckfield market town high street" },
  crowborough: { src: "/seo/locations/crowborough.jpg", alt: "Crowborough overlooking Ashdown Forest" },
  newhaven: { src: "/seo/locations/newhaven.jpg", alt: "Newhaven harbour and white cliffs" },
  seaford: { src: "/seo/locations/seaford.jpg", alt: "Seaford Head and Seven Sisters cliffs" },
  eastbourne: { src: "/seo/locations/eastbourne.jpg", alt: "Eastbourne seafront and Victorian pier" },
  bexhill: { src: "/seo/locations/bexhill.jpg", alt: "Bexhill-on-Sea De La Warr Pavilion" },
  hastings: { src: "/seo/locations/hastings.jpg", alt: "Hastings Old Town and net huts on the Stade" },
  rye: { src: "/seo/locations/rye.jpg", alt: "Rye cobblestone Mermaid Street" },
  london: { src: "/seo/locations/london.jpg", alt: "London skyline with Tower Bridge" },
  manchester: { src: "/seo/locations/manchester.jpg", alt: "Manchester city centre skyline" },
  birmingham: { src: "/seo/locations/birmingham.jpg", alt: "Birmingham city centre and Bullring" },
  leeds: { src: "/seo/locations/leeds.jpg", alt: "Leeds city centre and Town Hall" },
  liverpool: { src: "/seo/locations/liverpool.jpg", alt: "Liverpool waterfront and Albert Dock" },
  bristol: { src: "/seo/locations/bristol.jpg", alt: "Bristol harbourside and Clifton Suspension Bridge" },
  sheffield: { src: "/seo/locations/sheffield.jpg", alt: "Sheffield city centre Peace Gardens" },
  nottingham: { src: "/seo/locations/nottingham.jpg", alt: "Nottingham Castle and Old Market Square" },
  leicester: { src: "/seo/locations/leicester.jpg", alt: "Leicester city centre Clock Tower" },
  newcastle: { src: "/seo/locations/newcastle.jpg", alt: "Newcastle upon Tyne skyline with the Tyne Bridge" },
  glasgow: { src: "/seo/locations/glasgow.jpg", alt: "Glasgow George Square and City Chambers" },
  edinburgh: { src: "/seo/locations/edinburgh.jpg", alt: "Edinburgh Castle and Royal Mile" },
  cardiff: { src: "/seo/locations/cardiff.jpg", alt: "Cardiff Bay and Millennium Centre" },
  belfast: { src: "/seo/locations/belfast.jpg", alt: "Belfast City Hall and Donegall Square" },
  southampton: { src: "/seo/locations/southampton.jpg", alt: "Southampton waterfront and docks" },
  portsmouth: { src: "/seo/locations/portsmouth.jpg", alt: "Portsmouth Harbour and Spinnaker Tower" },
  reading: { src: "/seo/locations/reading.jpg", alt: "Reading town centre and Oracle" },
  oxford: { src: "/seo/locations/oxford.jpg", alt: "Oxford University dreaming spires" },
  cambridge: { src: "/seo/locations/cambridge.jpg", alt: "Cambridge Kings College Chapel and River Cam" },
  "milton-keynes": { src: "/seo/locations/milton-keynes.jpg", alt: "Milton Keynes modern city centre" },
  norwich: { src: "/seo/locations/norwich.jpg", alt: "Norwich Cathedral and city centre" },
  plymouth: { src: "/seo/locations/plymouth.jpg", alt: "Plymouth Hoe and Smeaton Tower" },
}

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

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text={location.h1} className="mb-6" />
            {location.county && (
              <p className="text-sm text-[#64748b] mb-4">{location.county}</p>
            )}
            {locationImages[slug] && (
              <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image
                  src={locationImages[slug].src}
                  alt={locationImages[slug].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                />
              </div>
            )}
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed mb-10">
              {introParagraphs[0]}
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
        {introParagraphs.length > 1 && (
          <section className="py-20 bg-[#111827]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {introParagraphs.slice(1).map((para, i) => (
                <p key={i} className="text-lg text-[#94a3b8] leading-relaxed mb-6 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

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

        {/* Why GuardX */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why {location.name} Businesses Choose GuardX
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
              {[
                `Professional web design built to convert visitors into customers for ${location.name} businesses.`,
                "SEO foundation baked into every build — proper meta tags, semantic HTML, fast load times, and mobile optimisation.",
                "Automated review generation with personalised email and SMS prompts sent at the right moment.",
                "Steady, organic growth of your Google review profile — no manual chasing required.",
                "Web design, SEO, and reviews working together for higher rankings and more local customers.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1] text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
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

        {/* CTA */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Contact GuardX today for a free, no-obligation conversation about how our web design, SEO foundation,
              and review generation services can transform your online presence in {location.name}.
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

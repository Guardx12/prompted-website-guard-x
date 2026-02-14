import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SeoCTABlock } from "@/components/seo-cta-block"
import { locations, getLocationBySlug } from "@/lib/locations-data"
import { getIndustryBySlug } from "@/lib/industries-data"
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return {
    title: location.metaTitle,
    description: location.metaDescription,
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const relatedLocations = location.relatedLocations
    .map((s) => getLocationBySlug(s))
    .filter(Boolean)

  const relatedIndustries = location.relatedIndustries
    .map((s) => getIndustryBySlug(s))
    .filter(Boolean)

  const introParagraphs = location.intro.split("\n\n")

  const benefits = [
    "Automated email and SMS review requests after every job",
    "Personalised messages that match your brand",
    "More five-star Google reviews without lifting a finger",
    "Higher local search rankings and more visibility",
    "A done-for-you system that runs in the background",
    "Real-time dashboard to track your review growth",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              {location.region === "sussex" ? `${location.county}, Sussex` : "United Kingdom"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {location.h1}
            </h1>
            {introParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Top CTA */}
        <SeoCTABlock variant="top" locationName={location.name} />

        {/* Local Context */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              The Business Landscape in {location.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {location.localContext}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              How GuardX Helps {location.name} Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <SeoCTABlock variant="mid" locationName={location.name} />

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Industries We Help in {location.name}
              </h2>
              <p className="text-muted-foreground mb-8">
                We work with businesses across a range of industries. See how GuardX helps your sector.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedIndustries.map((industry) =>
                  industry ? (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="group flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {industry.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </section>
        )}

        {/* Related Locations */}
        {relatedLocations.length > 0 && (
          <section className="py-16 bg-secondary/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Nearby Locations
              </h2>
              <p className="text-muted-foreground mb-8">
                GuardX also serves businesses in these nearby areas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedLocations.map((loc) =>
                  loc ? (
                    <Link
                      key={loc.slug}
                      href={`/locations/${loc.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-semibold group-hover:text-primary transition-colors flex-1">
                        {loc.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </Link>
                  ) : null,
                )}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <SeoCTABlock variant="bottom" locationName={location.name} />
      </main>

      <Footer />
    </div>
  )
}

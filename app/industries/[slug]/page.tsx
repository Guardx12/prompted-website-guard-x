import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SeoCTABlock } from "@/components/seo-cta-block"
import { industries, getIndustryBySlug } from "@/lib/industries-data"
import { getLocationBySlug } from "@/lib/locations-data"
import { ArrowRight, CheckCircle2, MapPin, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  if (!industry) return {}

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  }
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const relatedIndustries = industry.relatedIndustries
    .map((s) => getIndustryBySlug(s))
    .filter(Boolean)

  const relatedLocations = industry.relatedLocations
    .map((s) => getLocationBySlug(s))
    .filter(Boolean)

  const introParagraphs = industry.intro.split("\n\n")

  const benefits = [
    `Automated review requests designed for ${industry.name.toLowerCase()}`,
    "Personalised email and SMS messages your customers actually respond to",
    "More five-star Google reviews without any manual effort",
    "Higher local search rankings that bring in new customers",
    "A done-for-you system that works while you focus on your business",
    "Real-time dashboard to track your growing reputation",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4 bg-primary/10 px-4 py-2 rounded-full">
              {industry.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {industry.h1}
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
        <SeoCTABlock variant="top" industryName={industry.name} />

        {/* Industry Challenges */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl border border-border">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Review Challenge for {industry.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {industry.challenges}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              How GuardX Helps {industry.name}
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
        <SeoCTABlock variant="mid" industryName={industry.name} />

        {/* Related Industries */}
        {relatedIndustries.length > 0 && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Related Industries
              </h2>
              <p className="text-muted-foreground mb-8">
                GuardX also helps businesses in these related sectors.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedIndustries.map((ind) =>
                  ind ? (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="group flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {ind.name}
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
                Locations We Serve
              </h2>
              <p className="text-muted-foreground mb-8">
                Find GuardX review growth for {industry.name.toLowerCase()} in your area.
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
        <SeoCTABlock variant="bottom" industryName={industry.name} />
      </main>

      <Footer />
    </div>
  )
}

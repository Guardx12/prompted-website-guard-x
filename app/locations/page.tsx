import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SeoCTABlock } from "@/components/seo-cta-block"
import { getSussexLocations, getUKCityLocations } from "@/lib/locations-data"
import { MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GuardX Locations — Review Growth for Local UK Businesses",
  description:
    "Find GuardX review growth services near you. We help local businesses across Sussex and major UK cities build five-star Google reputations with automated review requests.",
}

export default function LocationsDirectoryPage() {
  const sussexLocations = getSussexLocations()
  const ukCityLocations = getUKCityLocations()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Locations</span> We Serve
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GuardX helps local businesses across the UK grow through automated review requests.
              Find your area below and discover how we can boost your Google reputation.
            </p>
          </div>
        </section>

        {/* Top CTA */}
        <SeoCTABlock variant="top" />

        {/* Sussex Locations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Sussex</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our home region. GuardX was built for Sussex businesses and we know the local market inside out.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sussexLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-foreground font-semibold group-hover:text-primary transition-colors block">
                      {location.name}
                    </span>
                    {location.county && (
                      <span className="text-sm text-muted-foreground">{location.county}</span>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <SeoCTABlock variant="mid" />

        {/* UK Cities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Major UK Cities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                GuardX review growth is available nationwide. We help businesses in cities across England, Scotland, Wales, and Northern Ireland.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ukCityLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold group-hover:text-primary transition-colors flex-1">
                    {location.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <SeoCTABlock variant="bottom" />
      </main>

      <Footer />
    </div>
  )
}

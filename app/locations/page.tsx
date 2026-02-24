import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { locations, getSussexLocations, getUKCityLocations } from "@/lib/locations-data"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GuardX Locations — Web Design, SEO & Review Generation Across Sussex and the UK",
  description:
    "GuardX provides professional web design, SEO foundation, and automated review generation for businesses across Sussex and major UK cities. Find your location and discover how we can help.",
}

export default function LocationsPage() {
  const sussexLocations = getSussexLocations()
  const ukCityLocations = getUKCityLocations()

  return (
<div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="All Locations" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              GuardX helps businesses grow across Sussex and major UK cities with SEO-ready websites, strong local search foundations and automated Google review growth.
              Explore your area below to see how we help you rank higher, build trust faster, and drive more enquiries.
            </p>
          </div>
        </section>

        {/* Sussex Locations */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Sussex Locations</h2>
            <p className="text-[#94a3b8] text-center mb-12 max-w-2xl mx-auto">
              Serving businesses across East Sussex, West Sussex, and Brighton &amp; Hove.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sussexLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group rounded-xl border border-white/10 bg-[#1e293b] p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#1e293b]/80"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {location.name}
                    </h3>
                  </div>
                  {location.county && (
                    <p className="text-sm text-[#64748b] mb-3">{location.county}</p>
                  )}
                  <p className="text-[#94a3b8] text-sm leading-relaxed line-clamp-3">
                    {location.intro.split("\n")[0]}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* UK City Locations */}
        <section className="py-20 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">UK Cities</h2>
            <p className="text-[#94a3b8] text-center mb-12 max-w-2xl mx-auto">
              Helping businesses grow their Google reputation in major cities across the United Kingdom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ukCityLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="group rounded-xl border border-white/10 bg-[#1e293b] p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#1e293b]/80"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {location.name}
                    </h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed line-clamp-3">
                    {location.intro.split("\n")[0]}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {"Don't See Your Area?"}
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              GuardX works with businesses across the UK. Get in touch and we will show you how our web design, SEO
              foundation, and review generation services can work for your location.
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

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SeoCTABlock } from "@/components/seo-cta-block"
import { industries, industryCategories, getIndustriesByCategory } from "@/lib/industries-data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "GuardX Industries — Review Growth for Every Business Type",
  description:
    "GuardX helps businesses across trades, hospitality, property, automotive, health, and beauty build five-star Google reputations. Find your industry and see how we can help.",
}

const categoryDescriptions: Record<string, string> = {
  Trades: "Builders, plumbers, electricians, and more. We help trades businesses turn completed jobs into five-star reviews.",
  "Home Services": "Cleaning, landscaping, and property care businesses that keep homes running smoothly.",
  Property: "Estate agents and letting agents who need visible trust to win instructions and tenants.",
  Automotive: "Garages and mechanics who rely on customer trust to keep their bays booked.",
  Health: "Dentists, physios, and gyms building patient and member trust through visible reviews.",
  Beauty: "Salons and barbershops that depend on reputation to fill their appointment books.",
  Hospitality: "Restaurants and cafes where five-star reviews directly translate to more covers.",
}

export default function IndustriesDirectoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              <span className="text-primary">Industries</span> We Serve
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              GuardX provides automated review growth tailored to the unique challenges of each industry.
              Find your business type below and discover how more five-star reviews can transform your growth.
            </p>
          </div>
        </section>

        {/* Top CTA */}
        <SeoCTABlock variant="top" />

        {/* Industries by category */}
        {industryCategories.map((category, catIndex) => {
          const categoryIndustries = getIndustriesByCategory(category)
          if (categoryIndustries.length === 0) return null

          return (
            <section
              key={category}
              className={`py-16 ${catIndex % 2 === 1 ? "bg-secondary/30" : ""}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                    {category}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryIndustries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="group flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-foreground font-semibold group-hover:text-primary transition-colors">
                        {industry.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Insert mid CTA after the second category */}
              {catIndex === 1 && <div className="mt-16"><SeoCTABlock variant="mid" /></div>}
            </section>
          )
        })}

        {/* Bottom CTA */}
        <SeoCTABlock variant="bottom" />
      </main>

      <Footer />
    </div>
  )
}

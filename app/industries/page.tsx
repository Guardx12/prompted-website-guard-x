import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { industries, industryCategories, getIndustriesByCategory } from "@/lib/industries-data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GuardX Industries — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Every Business Type",
  description:
    "GuardX provides professional web design, SEO foundation, and automated review generation for trades, hospitality, health, beauty, property, automotive, and home service businesses across the UK.",
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="All Industries" className="mb-6" />
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              GuardX helps businesses across every industry with professional web design, SEO foundation, and automated
              review generation. Find your industry below.
            </p>
          </div>
        </section>

        {/* Industry Categories */}
        {industryCategories.map((category, idx) => {
          const categoryIndustries = getIndustriesByCategory(category)
          if (categoryIndustries.length === 0) return null
          return (
            <section
              key={category}
              className={`py-20 ${idx % 2 === 0 ? "bg-[#111827]" : "bg-[#0a0e1a]"}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">{category}</h2>
                <p className="text-[#94a3b8] text-center mb-12 max-w-2xl mx-auto">
                  Web design, SEO foundation, and review generation for {category.toLowerCase()} businesses across the UK.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryIndustries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="group rounded-xl border border-white/10 bg-[#1e293b] p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#1e293b]/80"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-[#94a3b8] text-sm leading-relaxed line-clamp-3">
                        {industry.intro.split("\n")[0]}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA */}
        <section className="py-20 bg-[#111827]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {"Don't See Your Industry?"}
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
              GuardX works with businesses of all types. Get in touch and we will show you how our web design, SEO
              foundation, and review generation services can transform your online presence.
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

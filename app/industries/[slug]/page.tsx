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

const industryImages: Record<string, { src: string; alt: string }> = {
  builders: { src: "/images/industries/builder.svg", alt: "Builder working on a residential construction site" },
  "construction-companies": { src: "/images/industries/construction-companies.svg", alt: "Construction site with workers and steel framework" },
  scaffolders: { src: "/images/industries/scaffolding.svg", alt: "Scaffolding erected on a residential building" },
  "flooring-shops": { src: "/images/industries/flooring.svg", alt: "Flooring specialist installing hardwood flooring" },
  "carpet-cleaners": { src: "/images/industries/carpet-cleaners.svg", alt: "Professional carpet cleaner at work" },
  "driveway-companies": { src: "/images/industries/driveway-companies.svg", alt: "Driveway block paving installation" },
  roofers: { src: "/images/industries/roofers.svg", alt: "Roofer replacing tiles on a residential roof" },
  plumbers: { src: "/images/industries/plumber.svg", alt: "Plumber fixing pipes in a kitchen" },
  electricians: { src: "/images/industries/electrician.svg", alt: "Electrician working on residential wiring" },
  "painters-and-decorators": { src: "/images/industries/painters-and-decorators.svg", alt: "Painter and decorator painting a wall" },
  "estate-agents": { src: "/images/industries/estate-agents.svg", alt: "Estate agent showing a property to buyers" },
  "letting-agents": { src: "/images/industries/letting-agents.svg", alt: "Letting agent handing over house keys" },
  restaurants: { src: "/images/industries/restaurants.svg", alt: "Modern restaurant interior with diners" },
  cafes: { src: "/images/industries/cafes.svg", alt: "Cosy British cafe interior" },
  garages: { src: "/images/industries/garages.svg", alt: "Professional car garage workshop" },
  mechanics: { src: "/images/industries/mechanics.svg", alt: "Mechanic diagnosing an engine" },
  "cleaning-companies": { src: "/images/industries/cleaning-companies.svg", alt: "Professional cleaning team at work" },
  landscapers: { src: "/images/industries/landscapers.svg", alt: "Landscaper designing a garden" },
  "tree-surgeons": { src: "/images/industries/tree-surgeons.svg", alt: "Tree surgeon working with climbing gear" },
  locksmiths: { src: "/images/industries/locksmiths.svg", alt: "Locksmith working on a front door lock" },
  dentists: { src: "/images/industries/dentists.svg", alt: "Modern dental surgery treatment room" },
  physios: { src: "/images/industries/physios.svg", alt: "Physiotherapist treating a patient" },
  gyms: { src: "/images/industries/gyms.svg", alt: "Modern gym interior with fitness equipment" },
  salons: { src: "/images/industries/salons.svg", alt: "Hair and beauty salon interior" },
  barbers: { src: "/images/industries/barber.svg", alt: "Barber giving a professional haircut" },
}

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
    return (
      lower.includes("email and sms") ||
      lower.includes("review requests") ||
      lower.includes("collect reviews") ||
      lower.includes("personalised review requests")
    )
  }).toLowerCase().startsWith("our email and sms system")
  )
  const mainIntroParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(0, emailSmsIndex) : introParagraphs
  const emailSmsParagraphs = emailSmsIndex >= 0 ? introParagraphs.slice(emailSmsIndex) : []

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0e1a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text={industry.h1} className="mb-6" />
            <p className="text-sm text-[#64748b] mb-4">{industry.category}</p>
            {industryImages[slug] && (
              <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image
                  src={industryImages[slug].src}
                  alt={industryImages[slug].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                />
              </div>
            )}
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
              {[
                `Professional web design built to showcase ${industry.name.toLowerCase()} and convert visitors into enquiries.`,
                "SEO foundation is included on our Professional plan — proper meta tags, semantic HTML, fast load times, and mobile optimisation.",
                `Automated review generation designed specifically for ${industry.name.toLowerCase()}.`,
                "Personalised email and SMS prompts sent at the right moment — hands-free while you focus on your business.",
                "Web design, SEO, and reviews working together for higher rankings, more visibility, and more customers.",
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
              The Review Challenge for {industry.name}
            </h2>
            <p className="text-lg text-[#94a3b8] leading-relaxed text-center max-w-3xl mx-auto">
              {industry.challenges}
            </p>
          </div>
        </section>

{/* Email & SMS */} 
{emailSmsParagraphs.length > 0 && (
  <section className="py-20 bg-[#111827]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        How GuardX Collects Reviews for {industry.name}
      </h2>
      <div className="max-w-3xl mx-auto">
        {emailSmsParagraphs.map((para, i) => (
          <p key={i} className="text-lg text-[#94a3b8] leading-relaxed mb-6 last:mb-0">
            {para}
          </p>
        ))}
      </div>
    </div>
  </section>
)}


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

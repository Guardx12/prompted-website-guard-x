import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Scale,
  Home,
  MapPin,
  ShoppingCart,
  Briefcase,
  Car,
  GraduationCap,
  DollarSign,
  Laptop,
  Store,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Build patient trust through positive reviews and maintain compliance with healthcare regulations. GuardX helps medical practices manage their online reputation while protecting sensitive patient information and addressing concerns professionally.",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description:
        "Establish credibility and client trust in the competitive legal market. We help law firms manage sensitive reviews, showcase expertise, and maintain the professional reputation essential for attracting high-value clients.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Dominate local search results and build trust with potential buyers and sellers. GuardX enhances your visibility on Google and real estate platforms while managing client testimonials and addressing any negative feedback promptly.",
    },
    {
      icon: MapPin,
      title: "Hospitality",
      description:
        "Maximize bookings through excellent reviews on TripAdvisor, Google, and booking platforms. We help hotels, restaurants, and travel businesses turn satisfied guests into positive reviews while addressing concerns before they impact bookings.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Boost sales through improved product reviews and seller ratings across all platforms. GuardX helps online retailers manage customer feedback, improve product visibility, and build the trust necessary for higher conversion rates.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Position consultants, accountants, and service providers as trusted industry leaders. We help professional service firms showcase expertise, manage client testimonials, and build the credibility that drives referrals and new business.",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Ensure strong first impressions for dealerships and service centers through positive reviews. GuardX helps automotive businesses manage their reputation across Google, dealer review sites, and social media to drive more qualified leads.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Build institutional trust with parents, students, and the community through transparent reputation management. We help schools, colleges, and educational services maintain positive relationships and address concerns constructively.",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description:
        "Establish reliability and trust in financial services through consistent positive reputation management. GuardX helps banks, advisors, and financial firms build the credibility essential for client confidence and regulatory compliance.",
    },
    {
      icon: Laptop,
      title: "Technology",
      description:
        "Manage brand mentions and product reviews across multiple platforms and communities. We help tech companies monitor their reputation, address technical concerns, and showcase innovation while maintaining customer trust.",
    },
    {
      icon: Store,
      title: "Retail",
      description:
        "Drive foot traffic and sales through strong local visibility and customer reviews. GuardX helps retail businesses manage their online presence, encourage positive feedback, and address customer concerns to improve shopping experiences.",
    },
    {
      icon: Users,
      title: "Non-Profit",
      description:
        "Build trust and credibility with donors, volunteers, and communities through transparent reputation management. We help non-profits showcase their impact, manage public perception, and maintain the trust essential for continued support.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Industries We Serve</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              GuardX provides specialized reputation management solutions tailored to the unique challenges of each
              industry. Whether building trust, protecting credibility, or handling negative reviews, GuardX ensures
              your reputation works for your success.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon
                return (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4 group-hover:bg-yellow-400 transition-colors">
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-500 transition-colors">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Protect Your Industry Reputation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              No matter your industry, GuardX is here to protect and enhance your reputation. Contact us today to
              discuss a tailored solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 px-8 py-3 text-lg font-semibold">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 text-lg font-semibold bg-transparent"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

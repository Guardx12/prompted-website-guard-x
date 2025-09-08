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
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Heart,
      title: "Healthcare",
      description:
        "Build patient trust through positive reviews and maintain compliance with healthcare regulations. Our expert team helps medical practices manage their online reputation while protecting sensitive patient information and addressing concerns professionally.",
    },
    {
      icon: Scale,
      title: "Legal Services",
      description:
        "Establish credibility and client trust in the competitive legal market. Our experts help law firms manage sensitive reviews, showcase expertise, and maintain the professional reputation essential for attracting high-value clients.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "Dominate local search results and build trust with potential buyers and sellers. Our team enhances your visibility on Google and real estate platforms while managing client testimonials and addressing any negative feedback promptly.",
    },
    {
      icon: MapPin,
      title: "Hospitality",
      description:
        "Maximize bookings through excellent reviews on TripAdvisor, Google, and booking platforms. Our experts help hotels, restaurants, and travel businesses turn satisfied guests into positive reviews while addressing concerns before they impact bookings.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description:
        "Boost sales through improved product reviews and seller ratings across all platforms. Our team helps online retailers manage customer feedback, improve product visibility, and build the trust necessary for higher conversion rates.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Position consultants, accountants, and service providers as trusted industry leaders. Our experts help professional service firms showcase expertise, manage client testimonials, and build the credibility that drives referrals and new business.",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Ensure strong first impressions for dealerships and service centers through positive reviews. Our team helps automotive businesses manage their reputation across Google, dealer review sites, and social media to drive more qualified leads.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Build institutional trust with parents, students, and the community through transparent reputation management. Our experts help schools, colleges, and educational services maintain positive relationships and address concerns constructively.",
    },
    {
      icon: DollarSign,
      title: "Finance",
      description:
        "Establish reliability and trust in financial services through consistent positive reputation management. Our team helps banks, advisors, and financial firms build the credibility essential for client confidence and regulatory compliance.",
    },
    {
      icon: Laptop,
      title: "Technology",
      description:
        "Manage brand mentions and product reviews across multiple platforms and communities. Our experts help tech companies monitor their reputation, address technical concerns, and showcase innovation while maintaining customer trust.",
    },
    {
      icon: Store,
      title: "Retail",
      description:
        "Drive foot traffic and sales through strong local visibility and customer reviews. Our team helps retail businesses manage their online presence, encourage positive feedback, and address customer concerns to improve shopping experiences.",
    },
    {
      icon: Users,
      title: "Non-Profit",
      description:
        "Build trust and credibility with donors, volunteers, and communities through transparent reputation management. Our experts help non-profits showcase their impact, manage public perception, and maintain the trust essential for continued support.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span style={{ color: "#d4af37", fontWeight: "bold" }}>Industries</span> We Serve
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our expert team provides specialized reputation management solutions tailored to the unique challenges
                of each industry. Whether building trust, protecting credibility, or handling negative reviews, our
                professionals ensure your reputation works for your success.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon
                return (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Protect Your Industry Reputation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              No matter your industry, our expert team is here to protect and enhance your reputation. Get professional
              reputation management tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
                >
                  Get Free Consultation
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

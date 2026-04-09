import Link from "next/link"
import { ArrowRight, Mail, MessageCircle, Star } from "lucide-react"

interface SeoCTABlockProps {
  variant: "top" | "mid" | "bottom"
  locationName?: string
  industryName?: string
}

export function SeoCTABlock({ variant, locationName, industryName }: SeoCTABlockProps) {
  const context = locationName
    ? `for your ${locationName} business`
    : industryName
      ? `for your ${industryName} business`
      : "for your business"

  if (variant === "top") {
    return (
      <section className="py-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <p className="text-foreground font-semibold text-lg">
              Ready to grow your reviews {context}?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/calculator"
                className="inline-flex items-center bg-primary text-primary-foreground hover:bg-[#e6c34a] px-6 py-3 text-sm font-bold shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-foreground/10"
              >
                <Star className="mr-2 w-4 h-4" />
                Get Your Free Scorecard
              </Link>
              <a
                href="https://wa.me/447519166031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] text-white hover:bg-[#1ebe57] px-6 py-3 text-sm font-bold shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === "mid") {
    return (
      <section className="py-12 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Find Out How Your Business Looks Online
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Get a free reputation scorecard showing your current Google review standing, how you compare to competitors,
            and exactly what to improve. No obligation, no login required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/calculator"
              className="inline-flex items-center bg-primary text-primary-foreground hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-foreground/10"
            >
              <Star className="mr-2 w-5 h-5" />
              Get Your Free Scorecard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/447519166031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#25D366] text-white hover:bg-[#1ebe57] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Or email us at{" "}
            <a
              href="mailto:info@guardxnetwork.com"
              className="text-primary hover:underline font-semibold"
            >
              info@guardxnetwork.com
            </a>
          </p>
        </div>
      </section>
    )
  }

  // bottom variant
  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Start Growing Your Reviews Today
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of UK businesses already using GuardX to build five-star reputations.
          Get your free scorecard, or get in touch and we will show you exactly how it works.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/calculator"
            className="inline-flex items-center bg-primary text-primary-foreground hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-foreground/10"
          >
            <Star className="mr-2 w-5 h-5" />
            Get Your Free Scorecard
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="https://wa.me/447519166031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#25D366] text-white hover:bg-[#1ebe57] px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="mailto:info@guardxnetwork.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@guardxnetwork.com
          </a>
          <a
            href="https://wa.me/447519166031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            +44 7519 166 031
          </a>
        </div>
      </div>
    </section>
  )
}

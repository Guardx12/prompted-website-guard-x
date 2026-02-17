"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { ArrowRight, ExternalLink, MessageCircle, Star } from "lucide-react"
import Image from "next/image"

interface CaseStudyProps {
  name: string
  industry: string
  image: string
  stats: string[]
  testimonial?: {
    author: string
    quote: string
  }
}

function CaseStudy({ name, industry, image, stats, testimonial }: CaseStudyProps) {
  return (
    <div className="bg-[#1e293b] rounded-xl shadow-md border border-white/10 overflow-hidden scroll-animate">
      <div className="p-2 bg-gradient-to-b from-blue-500/20 to-blue-500/10">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden ring-2 ring-blue-400/60 shadow-md">
          <Image src={image || "/placeholder.svg"} alt={`${name} - GuardX customer`} fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {name} <span className="text-[#94a3b8] font-normal">({industry})</span>
        </h3>
        <p className="text-sm text-blue-400 font-medium mb-4">GuardX customer</p>

        {/* Stats as simple text lines with good spacing */}
        <div className="space-y-3">
          {stats.map((stat, index) => (
            <p key={index} className="text-white text-sm sm:text-base leading-relaxed">
              {stat}
            </p>
          ))}
        </div>

        {testimonial && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
              ))}
            </div>
            <blockquote className="text-white text-sm sm:text-base leading-relaxed italic mb-3">
              "{testimonial.quote}"
            </blockquote>
            <p className="text-sm text-[#94a3b8] font-medium">— {testimonial.author}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function RealResultsPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".scroll-animate")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />

      {/* 1) Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
        <div className="max-w-3xl mx-auto text-center scroll-animate">
          <AnimatedPageTitle text="Stronger Google Presence." suffix="Greater Trust. Real Results." className="mb-4 md:mb-6" />
          <p className="text-lg sm:text-xl text-[#94a3b8] text-pretty">
            See how UK businesses are becoming more visible and trusted on Google with GuardX.
          </p>
        </div>
      </section>

      {/* 2) Case Study: Greenfields Flooring */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <CaseStudy
            name="Greenfields Flooring"
            industry="Flooring Retailer — Lancing"
            image="/images/greenfields-20flooring.webp"
            stats={[
              "Greenfields Flooring strengthened its Google presence and visibility compared to local competitors.",
              "Google reviews grew to approximately 100, with review recency of around 14 days.",
              "Local competitors average over 400 days since their last review — Greenfields now appears consistently active while competitors look dormant.",
              "This recency gap protects visibility and trust, ensuring competitors no longer appear more established by default."
            ]}
            testimonial={{
              author: "Greenfields Flooring",
              quote:
                "Highly recommend Luke at GuardX — the system is so easy to use and our Google reviews have almost doubled since we joined.",
            }}
          />
        </div>
      </section>

      {/* 3) Case Study: Carpet Trader */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
        <div className="max-w-3xl mx-auto">
          <CaseStudy
            name="Carpet Trader"
            industry="Flooring Retailer — Leeds"
            image="/images/carpet-trader.webp"
            stats={[
              "Carpet Trader became one of the most visibly active carpet stores on Google in Leeds.",
              "Google reviews increased from approximately 42 to approximately 82.",
              "Achieved perfect review recency (0 days since last review), while competitors averaged 100+ days between reviews.",
              "Profile now signals strong activity, trust, and momentum — transforming from blending in to standing out in local search."
            ]}
            testimonial={{
              author: "Carpet Trader",
              quote:
                "It's been a good addition for our business, helping us build that very important Google platform.",
            }}
          />
        </div>
      </section>

      {/* 4) The Simple Truth About Reviews and Revenue */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-3xl mx-auto scroll-animate">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center text-balance">
            Google visibility drives business growth
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] mb-8 text-center leading-relaxed">
            Businesses that appear active and trusted on Google consistently win more customers than those that blend into the background.
          </p>

          <div className="bg-[#1e293b] border-l-4 border-blue-400 rounded-r-lg p-5 sm:p-6 mb-8">
            <p className="text-white text-base sm:text-lg leading-relaxed">
              <span className="font-bold">The pattern is clear:</span> When GuardX is active, businesses build a visibly stronger Google presence. That visibility creates trust at the moment customers are choosing, leading to more clicks, more enquiries, and more revenue.
            </p>
          </div>

          {/* Flow - with generous spacing for mobile readability */}
          <div className="space-y-4 max-w-lg mx-auto mb-8">
            {[
              "Consistent activity builds a stronger Google presence.",
              "A stronger presence builds greater trust.",
              "Greater trust drives more clicks and enquiries.",
              "More enquiries deliver more revenue.",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-[#1e293b] rounded-lg border border-white/10">
                <ArrowRight className="w-5 h-5 text-blue-400 shrink-0" />
                <p className="text-white font-medium text-base sm:text-lg">{text}</p>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-[#94a3b8] text-center text-pretty leading-relaxed">
            GuardX keeps your Google profile visibly active with genuine customer feedback, so you stand out when it matters most.
          </p>
        </div>
      </section>

      {/* 5) Credibility Reinforcement - ChatGPT Card */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
        <div className="max-w-2xl mx-auto scroll-animate">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">See what the research says</h3>
            <p className="text-[#94a3b8] text-sm sm:text-base">Try asking ChatGPT these questions.</p>
          </div>

          <div className="space-y-4">
            {/* First question */}
            <div className="bg-[#1e293b] rounded-xl shadow-md border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#10a37f] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4004-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                  </svg>
                </div>
                <span className="font-semibold text-white">ChatGPT</span>
              </div>
              <p className="text-white text-sm sm:text-base leading-relaxed italic">
                "Is it a disadvantage for local businesses to not consistently generate recent Google reviews?"
              </p>
            </div>

            {/* Second question */}
            <div className="bg-[#1e293b] rounded-xl shadow-md border border-white/10 p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#10a37f] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4004-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                  </svg>
                </div>
                <span className="font-semibold text-white">ChatGPT</span>
              </div>
              <p className="text-white text-sm sm:text-base leading-relaxed italic">
                "Do recent Google reviews have a measurable impact on customer trust and purchase decisions?"
              </p>
            </div>

            {/* Ask ChatGPT link */}
            <div className="text-center pt-2">
              <a
                href="https://chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:underline text-sm font-medium"
              >
                Ask ChatGPT yourself
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Case Study: DJ Recycling */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-3xl mx-auto">
          <CaseStudy
            name="DJ Recycling"
            industry="Waste & Recycling"
            image="/images/dj-20recycling.webp"
            stats={[
              "Became one of the most visibly active businesses on Google in their area",
              "Strong recency advantage now reinforces trust at the moment customers choose",
              "Reduced risk of competitors appearing more established or active"
            ]}
          />
        </div>
      </section>

      {/* 7) Case Study: Alderwood Ponds */}
      <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
        <div className="max-w-3xl mx-auto">
          <CaseStudy
            name="Alderwood Ponds"
            industry="Fishing Lake"
            image="/images/alderwood-20ponds.webp"
            stats={[
              "Moved from blending in to standing out in local search within two weeks",
              "Google profile now shows continuous recent activity",
              "New customers cited trust in their active presence as a deciding factor"
            ]}
            testimonial={{
              author: "Alderwood Ponds",
              quote:
                "We started using GuardX with our customers and the link is so easy and quick to use. It wasn't long before we started getting more reviews on our business page.\n\nWe even gained three new customers in the second week.\n\nWould definitely recommend. Thank you GuardX.",
            }}
          />
        </div>
      </section>

      {/* 8) How GuardX Works + Demo Video */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-3xl mx-auto scroll-animate">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">How GuardX Works</h2>
          </div>

          {/* Steps - stacked vertically for mobile */}
          <div className="space-y-4 mb-10">
            <div className="bg-[#1e293b] rounded-lg border border-white/10 p-5">
              <p className="text-blue-400 font-semibold text-sm mb-1">Step 1</p>
              <p className="text-white font-medium text-base sm:text-lg">
                Customer details are added to GuardX
              </p>
              <p className="text-[#94a3b8] text-sm mt-1">(Via a simple staff form)</p>
              <p className="text-white font-bold text-base sm:text-lg mt-3 uppercase tracking-wide">
                Or through compatible systems where automation is available
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-lg border border-white/10 p-5">
              <p className="text-blue-400 font-semibold text-sm mb-1">Step 2</p>
              <p className="text-white font-medium text-base sm:text-lg">
                GuardX automatically sends SMS and email review requests to the customer
              </p>
              <p className="text-[#94a3b8] text-sm mt-1">(SMS has over a 98% open rate)</p>
            </div>

            <div className="bg-[#1e293b] rounded-lg border border-white/10 p-5">
              <p className="text-blue-400 font-semibold text-sm mb-1">Step 3</p>
              <p className="text-white font-medium text-base sm:text-lg">
                The customer receives the message and taps the review link
              </p>
            </div>

            <div className="bg-[#1e293b] rounded-lg border border-white/10 p-5">
              <p className="text-blue-400 font-semibold text-sm mb-1">Step 4</p>
              <p className="text-white font-medium text-base sm:text-lg">
                The customer leaves a review and it appears directly on your Google profile
              </p>
              <p className="text-[#94a3b8] text-sm mt-1">
                (Outperforms simple Google links and QR codes because GuardX includes automatic reminders)
              </p>
            </div>
          </div>

          {/* Video intro text */}
          <p className="text-[#94a3b8] text-base sm:text-lg text-center mb-6">
            Watch how the GuardX staff form works in practice in the short demo below.
          </p>

          <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2bWvt6aJQSk"
              title="How GuardX Works - Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 9) Final CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
        <div className="max-w-2xl mx-auto text-center scroll-animate">
          <p className="text-base sm:text-lg md:text-xl text-white mb-8 text-pretty leading-relaxed">
            Ready to build a stronger Google presence for your business? Get in touch today and start standing out in local search within the next 30 days.
          </p>

          {/* WhatsApp CTA Button */}
          <a
            href="https://wa.me/447000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="get-started-btn bg-blue-500 hover:bg-blue-500/90 text-blue-400-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="get-started-text">Start your free trial</span>
            </Button>
          </a>

          {/* Email link */}
          <p className="mt-6 text-[#94a3b8] text-sm sm:text-base">
            Or email us at{" "}
            <a href="mailto:info@guardxnetwork.com" className="text-blue-400 hover:underline font-medium">
              info@guardxnetwork.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

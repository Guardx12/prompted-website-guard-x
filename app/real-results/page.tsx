"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect } from "react"
import { Star } from "lucide-react"

export default function RealResultsPage() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Header */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center scroll-animate">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Real Customers. Real Results.
          </h1>
          <p className="text-xl text-gray-600 mb-6">Verified on Google — powered by GuardX automation.</p>
        </div>
      </section>

      {/* Greenfields Flooring Case Study */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Image Area */}
          <div className="mb-12 scroll-animate">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/greenfields-20flooring.webp"
                alt="Greenfields Flooring storefront with green and yellow branding"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section Title */}
          <div className="mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Greenfields Flooring — Real Results</h2>
            <p className="text-lg text-gray-600">Local flooring retailer using GuardX to restart their reviews.</p>
          </div>

          {/* Before/After Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 scroll-animate">
            {/* Before Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-destructive mb-6">Before GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  4 months • 4 months • 3 months • 3 months • 2 months • 1 month • 1 month • 1 month • 1 month
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reviews were slow and inconsistent, with long gaps between each one.
              </p>
            </div>

            {/* After Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">After GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  3 weeks • 2 weeks • 2 weeks • 2 weeks • 1 week • 1 week • 1 week • 6 days • 5 days • 1 day
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reviews became consistent, arriving every few days once GuardX automation was activated.
              </p>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 scroll-animate">
            {/* Star Row */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
              "I highly recommend Luke at GuardX.
              <br />
              <br />
              The system is so easy to use and our Google reviews have doubled since we joined."
            </p>

            {/* Reviewer Name */}
            <p className="text-gray-500 text-sm md:text-base text-center">— Mike, Greenfields Flooring</p>
          </div>
        </div>
      </section>

      {/* Future Sections Divider */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-primary"></div>
        </div>
      </section>

      {/* Alderwood Ponds Case Study */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Image Area */}
          <div className="mb-12 scroll-animate">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/alderwood-20ponds.webp"
                alt="Alderwood Ponds - serene lake with autumn trees reflected in calm water"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Section Title */}
          <div className="mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Alderwood Ponds — Real Results</h2>
            <p className="text-lg text-gray-600">Verified on Google</p>
          </div>

          {/* Before/After Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 scroll-animate">
            {/* Before Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-destructive mb-6">Before GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  8 months ago • 6 months ago • 4 months ago • 3 months ago • 2 months ago
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Very few reviews, with long gaps of several months between each one.
              </p>
            </div>

            {/* After Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">After GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  3 weeks ago • 2 weeks ago • 2 weeks ago • 2 weeks ago • 2 weeks ago • 2 weeks ago • 1 week ago
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Immediate activity with consistent weekly reviews after GuardX automation was activated.
              </p>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 scroll-animate">
            {/* Star Row */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
              "We came across an advert on Facebook advertising GuardX Limited. At first we were a bit unsure whether to
              use this but decided to go ahead. We have a fishing venue and started to use GuardX with our customers.
              The link is so easy and quick to use and in no time it started bringing in lots of reviews on our business
              page, even to the point that we gained 3 new customers in the second week. I would definitely recommend.
              Thank you GuardX."
            </p>

            {/* Reviewer Name */}
            <p className="text-gray-500 text-sm md:text-base text-center">— Alderwood Ponds</p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-primary"></div>
        </div>
      </section>

      {/* DJ Recycling Case Study */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">DJ Recycling — Before & After GuardX</h2>
          </div>

          {/* Image Area */}
          <div className="mb-12 scroll-animate">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/dj-20recycling.webp"
                alt="DJ Recycling mini skips - bright lime green waste containers with company branding"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Before/After Timelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 scroll-animate">
            {/* Before Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-destructive mb-6">Before GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  9 months • 7 months • 7 months • 5 months • 5 months • 4 months • 3 months • 2 months • 2 months • 2
                  months
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reviews were extremely rare, with gaps of many months between each one.
              </p>
            </div>

            {/* After Column */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-300 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-6">After GuardX Was Switched On</h3>
              <div className="mb-6 overflow-x-auto">
                <p className="text-black text-base md:text-lg whitespace-nowrap font-mono">
                  3 days • 3 days • 1 day • 1 day • 1 day • 19 hours • 3 hours • 3 hours • 2 hours • 2 hours • 2 hours •
                  1 hour • 51 minutes
                </p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dramatic transformation with reviews arriving within hours of each other after GuardX activation.
              </p>
            </div>
          </div>

          {/* Empty Testimonial Card */}
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 scroll-animate"></div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

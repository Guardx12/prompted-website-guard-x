"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedPageTitle } from "@/components/animated-page-title"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const location = "West Sussex, United Kingdom"
  const email = "info@guardxnetwork.com"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a]">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedPageTitle text="Contact" suffix="GuardX" className="mb-6" />
            <p className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed max-w-3xl mx-auto">
              {"Wondering how your Google presence compares to competitors? Want to understand where you might be losing visibility locally? We're happy to have a straightforward conversation -- no pressure, just honest insight."}
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details Card */}
              <Card className="border-white/10 bg-[#1e293b] shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Get In Touch</h2>

                  {/* Location */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                        <p className="text-[#94a3b8] leading-relaxed">{location}</p>
                        <p className="text-sm text-[#64748b] mt-1">Serving businesses nationwide</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                        <a
                          href={`mailto:${email}`}
                          className="text-[#94a3b8] hover:text-blue-400 transition-colors underline"
                        >
                          {email}
                        </a>
                        <p className="text-sm text-[#64748b] mt-1">We typically respond within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us Card */}
              <Card className="border-white/10 bg-[#1e293b] shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-400 mb-6">Why Get in Touch?</h2>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-blue-400 text-sm font-bold">{"\u2713"}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Discuss Your Visibility Gaps</h4>
                        <p className="text-[#94a3b8] text-sm">
                          Understand where your Google presence may be falling behind competitors in your area.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-blue-400 text-sm font-bold">{"\u2713"}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Review Your Google Presence</h4>
                        <p className="text-[#94a3b8] text-sm">
                          Get a clear picture of how active and trusted your profile appears to customers searching locally.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-blue-400 text-sm font-bold">{"\u2713"}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Understand Your Local Position</h4>
                        <p className="text-[#94a3b8] text-sm">
                          Learn how you compare to other businesses in your area when customers are making decisions.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                        <span className="text-blue-400 text-sm font-bold">{"\u2713"}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">No Pressure, Just Clarity</h4>
                        <p className="text-[#94a3b8] text-sm">
                          {"We're happy to share honest insight about your situation -- whether or not GuardX is right for you."}
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-[#111827] py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Find Us on <span className="text-blue-400">the Map</span>
              </h2>
              <p className="text-[#94a3b8]">Based in West Sussex, working with businesses across the UK.</p>
            </div>

            <div className="rounded-lg shadow-lg overflow-hidden border border-white/10">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location)}&zoom=10`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            <div className="text-center mt-6">
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                onClick={() => window.open(googleMapsUrl, "_blank")}
              >
                View West Sussex on Google Maps
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#818cf8] to-[#6d28d9] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Improve Your Google Presence?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get in touch for a friendly, no-obligation conversation about your visibility and competitive position locally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-[#6d28d9] hover:bg-indigo-50 font-semibold"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                Send Us an Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                onClick={() => window.open(googleMapsUrl, "_blank")}
              >
                View on Map
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

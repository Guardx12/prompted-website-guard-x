"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const location = "West Sussex, United Kingdom"
  const email = "info@guardxnetwork.com"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
              Contact <span className="text-[#d4af37]">GuardX</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Have questions about growing your Google reviews? Need help getting set up, or want to learn how the
              GuardX review system works? We're here to help — fast, simple support whenever you need it.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Details Card */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Get In Touch</h2>

                  {/* Location */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">Our Location</h3>
                        <p className="text-gray-700 leading-relaxed">{location}</p>
                        <p className="text-sm text-gray-600 mt-1">Serving businesses nationwide</p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">Email Us</h3>
                        <a
                          href={`mailto:${email}`}
                          className="text-gray-700 hover:text-[#d4af37] transition-colors underline"
                        >
                          {email}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">We typically respond within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us Card */}
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Why Contact GuardX?</h2>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Free Review Growth Consultation</h4>
                        <p className="text-gray-700 text-sm">
                          Ask anything about Google reviews, visibility, or how our system works.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Simple Setup Support</h4>
                        <p className="text-gray-700 text-sm">
                          Get guidance on CRM/BCC integration or using the staff form.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Fast Replies</h4>
                        <p className="text-gray-700 text-sm">
                          We respond quickly to make setup smooth and stress-free.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#d4af37] rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black mb-1">Clear, Honest Advice</h4>
                        <p className="text-gray-700 text-sm">
                          Learn exactly how GuardX helps increase your reviews and visibility — without jargon or
                          complicated tools.
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
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">
                Find Us on <span className="text-[#d4af37]">the Map</span>
              </h2>
              <p className="text-gray-700">Based in West Sussex, working with businesses across the UK.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200">
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
                className="bg-[#d4af37] hover:bg-[#b8941f] text-white font-semibold"
                onClick={() => window.open(googleMapsUrl, "_blank")}
              >
                View West Sussex on Google Maps
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-[#b8941f] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Grow Your Reviews?</h2>
            <p className="text-xl text-white mb-8">
              Contact us today for a free, friendly consultation and see how GuardX can increase your reviews,
              visibility, and enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 font-semibold"
                onClick={() => (window.location.href = `mailto:${email}`)}
              >
                Send Us an Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold bg-transparent"
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

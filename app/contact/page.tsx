"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const location = "West Sussex, United Kingdom"
  const email = "info@guardxnetwork.com"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <Navigation />

      <main className="flex-1">
        <section className="px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[28px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">Contact GuardX</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Want George on your website?
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
                Whether you want George added to your existing website or are exploring how he could work for your business, the first step is understanding your setup, your customer journey, and where George can create the most value.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="border-[#E5E7EB] bg-white shadow-sm">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">Get in touch</h2>

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <Mail className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Email</h3>
                    <a href={`mailto:${email}`} className="mt-1 block text-[#475569] hover:text-[#1D4ED8]">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <MapPin className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Location</h3>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[#475569] hover:text-[#1D4ED8]">
                      {location}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <MessageSquare className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">What to send</h3>
                    <p className="mt-1 text-[#475569]">A link to your website, what kind of business you run, and what you want George to help with.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0F172A]">How the process works</h2>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">1. We look at your setup</p>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">We review your website, what your visitors need help with, and where George could improve conversions or experience.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">2. We tailor George to your business</p>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">That could mean service guidance, product help, lead capture, booking support, or visitor guidance depending on your niche.</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-bold text-[#0F172A]">3. We show you the right version</p>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">The goal is not a generic demo. The goal is to show you how George would actually create value on your site.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react"

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
                Get in touch if you want George on his own, or if you want a full website with George built in. We can help with both.
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
                    <p className="mt-1 text-sm text-[#64748B]">Serving businesses nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF6FF]">
                    <MessageSquare className="h-6 w-6 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#0F172A]">Try George first</h3>
                    <p className="mt-1 text-[#475569]">You can also speak to George directly on the Meet George page.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#E5E7EB] bg-[#F8FAFC] shadow-sm">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-[#0F172A]">What to ask about</h2>
                <ul className="space-y-4 text-[#475569]">
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[#1D4ED8]" /><span>How George would work for your business</span></li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[#1D4ED8]" /><span>What is included in the website package</span></li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[#1D4ED8]" /><span>Pricing and what George can answer on the site</span></li>
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[#1D4ED8]" /><span>Whether the website is right for your business</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

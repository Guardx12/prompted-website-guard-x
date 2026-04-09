"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const location = "West Sussex, United Kingdom"
  const email = "info@guardxnetwork.com"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`

  return (
    <div className="premium-page-shell min-h-screen flex flex-col text-white">
      <Navigation />

      <main className="flex-1 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">Contact</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Want George on your website?
            </h1>
            <p className="premium-body mt-5 max-w-3xl text-base leading-7 sm:text-lg">
              Whether you want George added to your existing website or you are exploring how he could work for your business, the first step is understanding your setup, your customer journey, and where George can create the most value.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="premium-card rounded-[32px] p-7 sm:p-8">
              <h2 className="premium-heading text-2xl font-semibold">Get in touch</h2>
              <div className="mt-6 space-y-6">
                <div className="premium-soft-card rounded-[24px] p-5">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 text-emerald-300" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a href={`mailto:${email}`} className="mt-1 block text-white/70 transition-colors hover:text-white">{email}</a>
                    </div>
                  </div>
                </div>
                <div className="premium-soft-card rounded-[24px] p-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 text-emerald-300" />
                    <div>
                      <h3 className="font-semibold text-white">Location</h3>
                      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-white/70 transition-colors hover:text-white">{location}</a>
                    </div>
                  </div>
                </div>
                <div className="premium-soft-card rounded-[24px] p-5">
                  <div className="flex items-start gap-4">
                    <MessageSquare className="mt-1 h-5 w-5 text-emerald-300" />
                    <div>
                      <h3 className="font-semibold text-white">What to send</h3>
                      <p className="mt-1 text-white/70">A link to your website, what kind of business you run, and what you want George to help with.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card rounded-[32px] p-7 sm:p-8">
              <h2 className="premium-heading text-2xl font-semibold">How the process works</h2>
              <div className="mt-6 space-y-4">
                <div className="premium-soft-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300/80">1</p>
                  <p className="mt-2 text-white/85">We look at your setup</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">We review your website, what your visitors need help with, and where George could improve conversions or experience.</p>
                </div>
                <div className="premium-soft-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300/80">2</p>
                  <p className="mt-2 text-white/85">We tailor George to your business</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">That could mean service guidance, product help, lead capture, booking support, or visitor guidance depending on your niche.</p>
                </div>
                <div className="premium-soft-card rounded-[24px] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300/80">3</p>
                  <p className="mt-2 text-white/85">We show you the right version</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">The goal is not a generic demo. The goal is to show you how George would actually create value on your site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

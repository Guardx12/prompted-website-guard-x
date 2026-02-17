"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  CheckCircle2,
  Globe,
  Search,
  Server,
  MessageSquare,
  Mail,
  Smartphone,
  ArrowRight,
} from "lucide-react"
import { AnimatedPageTitle } from "@/components/animated-page-title"

export default function PricingPage() {
  const [isScorecardOpen, setIsScorecardOpen] = useState(false)
  const [scorecardStatus, setScorecardStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleScorecardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setScorecardStatus("loading")

    const formData = new FormData(e.currentTarget)
    const data = {
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      businessAddress: formData.get("businessAddress"),
    }

    try {
      const response = await fetch("https://formspree.io/f/xnnqonpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setScorecardStatus("success")
        setTimeout(() => {
          setIsScorecardOpen(false)
          setScorecardStatus("idle")
        }, 2000)
      } else {
        setScorecardStatus("error")
      }
    } catch (error) {
      setScorecardStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-[#0a0e1a] to-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-400 font-bold text-sm">WEBSITE DESIGN & SEO</span>
              </div>
              <AnimatedPageTitle text="Website Design &" suffix="SEO Foundation Pricing" className="mb-6" />
              <p className="text-xl md:text-2xl text-[#94a3b8] mb-8 leading-relaxed">
                Professional websites built to generate enquiries and help your business stand out online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                    Book a Call
                  </Button>
                </a>
                <a href="/contact">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/professional-business-owner-reviewing-analytics-da.jpg"
                alt="Business owner reviewing website analytics"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY SECTION: Website Design Pricing */}
      <section className="py-20 bg-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Website Design Pricing</h2>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
              Professional websites built to generate enquiries for local UK businesses
            </p>
            <p className="text-sm text-[#94a3b8] max-w-3xl mx-auto mt-4">Built using modern, professional technology for speed, reliability, and long-term performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Website */}
            <div className="rounded-xl border border-white/10 bg-[#111827] p-8 flex flex-col transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Starter Website</h3>
              <div className="mb-6">
                <span className="text-sm text-[#94a3b8]">from</span>
                <span className="text-4xl font-bold text-white ml-2">{"£"}500</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Modern, professional website (built for local UK businesses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Mobile-friendly design across phones, tablets and desktops</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Clear layout designed to generate enquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Click-to-call, click-to-email and contact options</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">WhatsApp chat integration (optional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Social media links added (Facebook, Instagram, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Contact form that sends straight to your email</span>
                </li>
              </ul>
              <a href="/contact">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Professional Website + SEO Foundation */}
            <div className="rounded-xl border-2 border-blue-500 bg-[#111827] p-8 flex flex-col relative transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Recommended
                </span>
              </div>
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional Website + SEO Foundation Foundation</h3>
              <div className="mb-6">
                <span className="text-sm text-[#94a3b8]">from</span>
                <span className="text-4xl font-bold text-white ml-2">{"£"}1,000</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Everything in Starter, plus an SEO-ready structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Service pages structured for better search visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Location pages to target your service areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Clean URL structure and internal linking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Meta titles and descriptions set up properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Sitemap.xml and robots.txt included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Speed and performance optimised</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Built using modern frameworks for reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Structured correctly for Google indexing</span>
                </li>
              </ul>
              <a href="/contact">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Website Hosting */}
            <div className="rounded-xl border border-white/10 bg-[#111827] p-8 flex flex-col transition-all duration-300 hover:border-blue-400/40 hover:shadow-lg">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Website Hosting</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{"£"}30</span>
                <span className="text-lg text-[#94a3b8] ml-2">per month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Hosting to keep your website live and accessible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Fast, reliable hosting setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Domain connection and deployment included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">Light support if you need help or advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#cbd5e1]">No long contracts — cancel anytime</span>
                </li>
              </ul>
              <a href="/contact">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY SECTION: Optional Review Generation Add-On */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-white/10 bg-[#0a0e1a] p-10 md:p-14">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                <span className="text-blue-400 font-bold text-sm">OPTIONAL ADD-ON</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Optional Review Generation Add-On
              </h2>
              <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
                GuardX Review Generation helps keep your Google profile active by helping encourage customer
                feedback after each job.
              </p>
              <p className="text-white font-semibold text-xl mt-4">£30/month</p>
              <p className="text-[#94a3b8] mt-2">Cancel anytime • No long contracts</p>
            </div>

            <ul className="space-y-4 mb-10 max-w-md mx-auto">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[#cbd5e1] text-lg">Automated review requests</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[#cbd5e1] text-lg">Direct review links via SMS</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[#cbd5e1] text-lg">Easy setup and integration</span>
              </li>
            </ul>

            <div className="text-center">
              <a href="/review-generation">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e1a] to-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/successful-business-owner-celebrating-achievement.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Ready for a website that works as hard as you do?
            </h2>
            <p className="text-xl text-[#94a3b8] mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a professional website built to generate enquiries and help your business stand out online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/guardxnetwork-info/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  Book a Call
                </Button>
              </a>
              <Button
                onClick={() => setIsScorecardOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Your Free Scorecard
              </Button>
            </div>
            <p className="text-[#475569] mt-6 text-sm">
              No credit card required -- Same-day response available
            </p>
          </div>
        </div>
      </section>

      {/* Free Scorecard Dialog */}
      <Dialog open={isScorecardOpen} onOpenChange={setIsScorecardOpen}>
        <DialogContent className="sm:max-w-md bg-[#1e293b] border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Get Your Free Scorecard</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleScorecardSubmit} className="space-y-4">
            <div>
              <Label htmlFor="scorecard-email" className="text-white">
                Email Address
              </Label>
              <Input
                id="scorecard-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="border-white/10 bg-[#0a0e1a] text-white"
              />
            </div>
            <div>
              <Label htmlFor="scorecard-business" className="text-white">
                Business Name
              </Label>
              <Input
                id="scorecard-business"
                name="businessName"
                type="text"
                required
                placeholder="Your Business Name"
                className="border-white/10 bg-[#0a0e1a] text-white"
              />
            </div>
            <div>
              <Label htmlFor="scorecard-address" className="text-white">
                Business Address
              </Label>
              <Input
                id="scorecard-address"
                name="businessAddress"
                type="text"
                required
                placeholder="123 Main St, City, State"
                className="border-white/10 bg-[#0a0e1a] text-white"
              />
            </div>
            <Button
              type="submit"
              disabled={scorecardStatus === "loading"}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {scorecardStatus === "loading" ? "Submitting..." : "Get Free Scorecard"}
            </Button>
            {scorecardStatus === "success" && (
              <p className="text-green-400 text-sm text-center">Success! Check your email for your scorecard.</p>
            )}
            {scorecardStatus === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

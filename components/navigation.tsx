"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[rgba(148,163,184,0.1)] bg-[#0a0e1a]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0e1a]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-18">
                <Image
                  src="/images/guardx-final-logo.jpg"
                  alt="GuardX"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/review-generation" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection

              </Link>
              <Link href="/web-design" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Web Design
              </Link>
              <Link href="/real-results" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 Results
              </Link>
              <Link href="/calculator" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Calculator
              </Link>
              <Link href="/pricing" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link href="/faq" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                FAQ
              </Link>
              <Link href="/contact" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors text-sm font-medium">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#e2e8f0] hover:bg-[rgba(148,163,184,0.1)]"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[rgba(148,163,184,0.1)]">
                <Link href="/" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/review-generation" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection

                </Link>
                <Link href="/web-design" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Web Design
                </Link>
                <Link href="/real-results" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 Results
                </Link>
                <Link href="/calculator" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Calculator
                </Link>
                <Link href="/pricing" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link href="/faq" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-[#94a3b8] hover:text-[#60a5fa] transition-colors" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}


<p>Built using modern, professional technology for speed, reliability, and long-term performance.</p>

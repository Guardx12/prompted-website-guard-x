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
      <div className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium z-50">
        <Button
          variant="ghost"
          size="sm"
          className="text-primary-foreground hover:bg-primary-foreground/20"
          onClick={() => (window.location.href = "https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05")}
        >
          Protect Your Reputation Now – £99/Month
        </Button>
      </div>

      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-18">
                <Image
                  src="/images/guardx-new-logo.jpg"
                  alt="GuardX - Reputation Management"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/industries" className="text-foreground hover:text-primary transition-colors">
                Industries
              </Link>
              <Link href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="/why-this-works" className="text-foreground hover:text-primary transition-colors">
                Why This Works
              </Link>
              <Link href="/sample-customer-report" className="text-foreground hover:text-primary transition-colors">
                Sample Report
              </Link>
              <Link href="/reputation-scorecard" className="text-foreground hover:text-primary transition-colors">
                Free Scorecard
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05">
                <Button className="get-started-btn bg-primary text-primary-foreground hover:bg-primary/90">
                  <span className="get-started-text">Get Started Today</span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
                <Link
                  href="/"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/industries"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/how-it-works"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/why-this-works"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Why This Works
                </Link>
                <Link
                  href="/sample-customer-report"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sample Report
                </Link>
                <Link
                  href="/reputation-scorecard"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Free Scorecard
                </Link>
                <Link
                  href="/pricing"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/faq"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Link href="https://buy.stripe.com/cNidR8fHC7bRgang2VcIE05">
                    <Button className="get-started-btn w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <span className="get-started-text">Get Started Today</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

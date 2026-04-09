"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const links = [
  { href: "/", label: "Home" },
  { href: "/meet-george", label: "Meet George" },
  { href: "/how-george-makes-you-money", label: "How George Makes You Money" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070b16]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#070b16]/72">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-95">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15 shadow-[0_0_40px_rgba(67,233,123,0.24)]">
            <Image src="/george-orb-premium.jpeg" alt="George orb" fill className="object-cover scale-[1.08] transition-transform duration-500 group-hover:scale-[1.14]" priority />
          </div>
          <span className="text-xl font-semibold tracking-[0.04em] text-white">George</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white shadow-sm md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#070b16]/95 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

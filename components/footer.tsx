import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-5 flex items-center space-x-2">
              <Image src="/guardx-logo.png" alt="GuardX Logo" width={220} height={70} className="h-16 w-auto sm:h-20" />
            </div>
            <p className="mb-4 text-[#475569]">
              GuardX builds fast, modern websites with George — a digital guide and member of staff that helps visitors plan, get answers instantly, find the right page, get directions, decide what to do next, and get more from their visit.
            </p>
            <p className="mb-4 text-[#475569]">GuardX Limited — websites powered by George for attractions, holiday parks, visitor destinations, and UK businesses.</p>
            <p className="text-sm text-[#64748B]">&copy; {new Date().getFullYear()} GuardX. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Home</Link></li>
              <li><Link href="/meet-george" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Meet George</Link></li>
              <li><Link href="/how-george-makes-you-money" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">How George Makes You Money</Link></li>
              <li><Link href="/pricing" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Pricing</Link></li>
              <li><Link href="/faq" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">FAQ</Link></li>
              <li><Link href="/contact" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">What George does</h3>
            <ul className="space-y-2 text-[#475569]">
              <li>Guides visitors before they arrive and while they are there</li>
              <li>Handles website, travel, and on-site directions</li>
              <li>Explains attractions and helps families know what to do next</li>
              <li>Supports more bookings, spend, and engagement</li>
              <li>Works 24/7 on your website</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:info@guardxnetwork.com" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">info@guardxnetwork.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

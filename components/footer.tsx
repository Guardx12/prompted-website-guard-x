import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Image
                src="/images/guardx-final-logo.jpg"
                alt="GuardX Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="mb-4 text-[#475569]">
              GuardX builds fast, modern websites with George — an AI assistant that answers customer questions and
              captures enquiries for your business 24/7.
            </p>
            <p className="mb-4 text-[#475569]">
              GuardX Limited — websites powered by George for UK businesses.
            </p>
            <p className="text-sm text-[#64748B]">&copy; {new Date().getFullYear()} GuardX. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Home</Link></li>
              <li><Link href="/meet-george" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Meet George</Link></li>
              <li><Link href="/pricing" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Pricing</Link></li>
              <li><Link href="/faq" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">FAQ</Link></li>
              <li><Link href="/contact" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">What George does</h3>
            <ul className="space-y-2 text-[#475569]">
              <li>Answers customer questions</li>
              <li>Captures enquiries</li>
              <li>Explains pricing and services</li>
              <li>Works day and night</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#0F172A]">Extra</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/review-generation" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">
                  Review generation
                </Link>
              </li>
              <li><a href="mailto:info@guardxnetwork.com" className="text-[#475569] transition-colors hover:text-[#1D4ED8]">info@guardxnetwork.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

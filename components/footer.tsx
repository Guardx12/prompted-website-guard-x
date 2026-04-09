import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b16]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/78">GuardX Limited</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              GuardX builds George specifically for your business and adds him to your existing website as a simple button — turning your site into a 24/7 digital member of staff that answers questions, guides visitors, captures opportunities, and helps turn more traffic into customers.
            </p>
            <p className="mt-5 text-sm text-white/52">© {new Date().getFullYear()} GuardX Limited. All rights reserved.</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link href="/meet-george" className="transition-colors hover:text-white">Meet George</Link></li>
              <li><Link href="/how-george-makes-you-money" className="transition-colors hover:text-white">How George Makes You Money</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-white">Pricing</Link></li>
              <li><Link href="/faq" className="transition-colors hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">Contact</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="mailto:info@guardxnetwork.com" className="transition-colors hover:text-white">info@guardxnetwork.com</a></li>
              <li className="text-white/45">Premium design. Real conversations. Proper conversion intent.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

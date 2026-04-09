import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HowWeHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">How We Help</h1>
          <p className="text-xl text-gray-600">Content coming soon.</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

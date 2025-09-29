"use client"
import { Card, CardContent } from "@/components/ui/card"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star, CheckCircle, Shield } from "lucide-react"
import { useState } from "react"
import { PlatformLogos } from "@/components/platform-logos"

export default function HomePage() {
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    businessAddress: "",
    message: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.email.trim() || !formData.businessName.trim() || !formData.businessAddress.trim()) {
      alert("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mrbypyzv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          businessName: formData.businessName,
          businessAddress: formData.businessAddress,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setShowThankYou(true)
        setFormData({ email: "", businessName: "", businessAddress: "", message: "" })
        setTimeout(() => setShowThankYou(false), 5000)
      } else {
        alert("There was an error submitting your request. Please try again.")
      }
    } catch (error) {
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Get Your <span className="text-primary">Free Reputation Scorecard</span> in Minutes
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              See your current online reputation and how your business stacks up — delivered straight to your inbox.
            </p>

            <div className="max-w-2xl mx-auto mb-12">
              <Card className="bg-white border-2 border-primary/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6">Get Your Free Scorecard</h3>

                  {showThankYou ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-lg font-semibold text-green-800 text-center">
                        Thank you! Your free scorecard request has been sent. We will email you your scorecard shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="businessName" className="block text-sm font-bold text-black mb-2">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                          placeholder="Enter your business name"
                        />
                      </div>

                      <div>
                        <label htmlFor="businessAddress" className="block text-sm font-bold text-black mb-2">
                          Business Address *
                        </label>
                        <input
                          type="text"
                          id="businessAddress"
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                          placeholder="Enter your business address"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-black mb-2">
                          Message (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                          placeholder="Any additional information or questions..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-black hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 border-2 border-black/10"
                      >
                        {isSubmitting ? "Submitting..." : "Get My Free Scorecard"}
                      </button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-center text-black mb-8">What's in Your Free Scorecard</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Overall Reputation Score</h3>
                    <div className="mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20overall%20rating-U2L4QmNYHZ4mLpegUYDIdcOQRh6DhW.png"
                        alt="Overall Score: 60/100 with breakdown of Volume 15/30, Rating 25/30, Recency 10/30, Sentiment 10/10"
                        className="w-full rounded-lg border border-gray-200"
                      />
                    </div>
                    <p className="text-gray-600">
                      Your comprehensive reputation score (0-100) generated by analyzing your average rating, sentiment
                      of reviews, review volume, and recency of reviews across all platforms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Star Rating Analysis</h3>
                    <div className="mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20star%20rating-QBqc9E3c8b47cFkhCd5F3jehx7fmiv.png"
                        alt="Star Rating: 4.1 stars with 25/30 rating score on Google"
                        className="w-full rounded-lg border border-gray-200"
                      />
                    </div>
                    <p className="text-gray-600">
                      Your average star rating across all major review platforms. Businesses with 4-4.5 star ratings
                      earn 28% more in annual revenue than average.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Review Volume</h3>
                    <div className="mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20volume-0P75LzBALt3nZl5WLjfNbec620bbzG.png"
                        alt="Review Volume: 15/30 score with 201 Google reviews"
                        className="w-full rounded-lg border border-gray-200"
                      />
                    </div>
                    <p className="text-gray-600">
                      Total number of reviews and how your volume compares to competitors. Businesses with 200+ reviews
                      earn nearly twice as much revenue than average.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Review Recency</h3>
                    <div className="mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20recency-RkIY3cGK5CIFuICC6sT4T9jNbsZINB.png"
                        alt="Review Recency: 10/30 score with average time since last review being 36 days ago"
                        className="w-full rounded-lg border border-gray-200"
                      />
                    </div>
                    <p className="text-gray-600">
                      How recently customers have been leaving reviews. Businesses with more than 9 fresh reviews earn
                      52% more than average and show stronger engagement trends.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-200 shadow-lg lg:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Sentiment Analysis</h3>
                    <div className="mb-4">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scorecard%20sentiment-oJZ3V5IWp6ZekiFcuYatS9ViBJpMzo.png"
                        alt="Sentiment Analysis: 10/10 score showing positive customer reviews"
                        className="w-full rounded-lg border border-gray-200"
                      />
                    </div>
                    <p className="text-gray-600">
                      Detailed analysis of positive, neutral, and negative customer sentiment trends. Google creates a
                      review summary which is the first impression users have of your company.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-gray-50 border-gray-200 shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-4">Want Ongoing Protection?</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    After receiving your free scorecard, start your 7-day free trial for full review monitoring with
                    instant alerts and detailed reporting.
                  </p>
                  <a
                    href="/onboarding"
                    className="inline-block bg-primary text-black hover:bg-yellow-500 px-8 py-3 text-lg font-bold shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
                  >
                    Start Your Free 7-Day Trial
                  </a>
                  <div className="mt-6">
                    <PlatformLogos />
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VISA-logo-94e8TfJm0LvTgjaFBJAF1nJ71UjbHI.png"
                      alt="Visa"
                      className="h-6 opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mastercard_logo-Sp0PYT1Mx8tnGo6H2Da56NE9QWdazd.webp"
                      alt="MasterCard"
                      className="h-6 opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Powered%20by%20Stripe%20-%20blurple%20%281%29-DWAHrqGrB7uyZuj49bMP1IkhnZ6cwt.svg"
                      alt="Powered by Stripe"
                      className="h-6 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-center text-black mb-8">Trusted by Business Owners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-base text-black mb-3 leading-relaxed">
                      "The GuardX system is great for staying on top of reviews. It's saved me time, and the reports are
                      really clear and easy to read, making it simple to keep an eye on my average rating."
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong className="text-black">Holly Cox</strong> - 4 days ago
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    <p className="text-base text-black mb-3 leading-relaxed">
                      "A very handy tool to keep track of my business reviews — simple and easy to use."
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong className="text-black">Joseph Yossefi</strong> - 5 days ago
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg px-6 py-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-black">
                    Your data is secure and never shared with third parties.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

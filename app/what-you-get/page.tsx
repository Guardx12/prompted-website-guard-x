"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Star, CheckCircle, Shield, AlertTriangle, Clock, BarChart3, TrendingUp } from "lucide-react"
import Image from "next/image"
import { PlatformLogos } from "@/components/platform-logos"

export default function HowWeHelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Stay On Top of Your <span className="text-primary">Online Reputation</span> Without the Stress
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              GuardX keeps you on top of your online reputation with real-time monitoring, instant alerts, and clear
              weekly reports. See exactly what your customers are saying and take action before issues escalate.
            </p>

            <div className="max-w-2xl mx-auto mb-8">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3 justify-center">
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
            </div>

            <div className="flex flex-col items-center mb-12">
              <a
                href="/onboarding"
                className="bg-primary text-black hover:bg-yellow-500 px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 mb-4"
              >
                Start Your 7-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </a>
              <div className="mb-4">
                <PlatformLogos />
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">The Problems You Face Every Day</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Managing your online reputation across multiple platforms is overwhelming and time-consuming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Losing Potential Customers</h3>
                <p className="text-gray-600">
                  Negative reviews go unnoticed for days or weeks, driving away customers before you can respond.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Not Knowing What's Being Said</h3>
                <p className="text-gray-600">
                  Reviews appear on Google, Facebook, Yelp, and dozens of other platforms without your knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Wasting Hours Manually Checking</h3>
                <p className="text-gray-600">
                  Logging into multiple platforms daily to check for new reviews takes valuable time away from your
                  business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Here's How GuardX Helps You Every Day</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our automated system works 24/7 to monitor, alert, and report on your online reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Real-Time Monitoring & Instant Alerts</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Monitor all major review platforms, receive instant email alerts for new reviews, and never miss an
                  important customer comment again.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Google My Business, Facebook, Yelp coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Industry-specific platforms included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Instant Alerts</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get notified as soon as a new review appears. Email alerts sent within minutes of publication.
                </p>
                <div className="mb-4">
                  <Image
                    src="/images/susan-review-notification.png"
                    alt="Instant review alert notification"
                    width={300}
                    height={200}
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Clear, Actionable Weekly Reports</h3>
                </div>
                <p className="text-gray-600 mb-4">Your weekly report includes:</p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Overall star rating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Total reviews since joining</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Number of reviews in the last 30 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Review sources and platforms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Detailed review counts by platform</span>
                  </li>
                </ul>
                <div className="mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-04%20at%209.47.04%E2%80%AFAM-3YMh7Grb6pepRc2i1iJOjWo154REZp.png"
                    alt="Weekly PDF report sample"
                    width={400}
                    height={250}
                    className="w-full rounded-lg border border-gray-200"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Actionable Insights</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Identify trends in customer feedback and spot urgent issues immediately with our expert analysis.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Urgent issue identification</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Weekly PDF showing:</span>
                  </li>
                  <li className="flex items-center gap-2 ml-6">
                    <CheckCircle className="w-3 h-3 text-primary" />
                    <span>Total number of reviews</span>
                  </li>
                  <li className="flex items-center gap-2 ml-6">
                    <CheckCircle className="w-3 h-3 text-primary" />
                    <span>Average star rating</span>
                  </li>
                  <li className="flex items-center gap-2 ml-6">
                    <CheckCircle className="w-3 h-3 text-primary" />
                    <span>Number of reviews in the last 30 days</span>
                  </li>
                  <li className="flex items-center gap-2 ml-6">
                    <CheckCircle className="w-3 h-3 text-primary" />
                    <span>Review sources across all platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Take Control of Your Reputation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track your star ratings, review volume, and platform coverage across all major review sites. GuardX gives
              you the clear data you need to understand your online reputation and respond quickly to customer feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Protect Your Business</h3>
                <p className="text-gray-600">
                  Respond to negative reviews quickly before they damage your reputation and drive customers away.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Improve Overall Ratings</h3>
                <p className="text-gray-600">
                  Build customer trust with consistent monitoring and professional responses to all feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Save Hours Each Week</h3>
                <p className="text-gray-600">
                  Automated monitoring eliminates the need to manually check multiple platforms daily.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Start Your Free 7-Day Trial</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let another review slip by unnoticed. Get instant alerts and comprehensive reporting starting today.
          </p>

          <div className="flex flex-col items-center mb-8">
            <a
              href="/onboarding"
              className="bg-primary text-black hover:bg-yellow-500 px-12 py-4 text-xl font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 mb-4"
            >
              Start Free 7-Day Trial
              <ArrowRight className="ml-3 w-6 h-6 inline" />
            </a>

            <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
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

            <div className="text-sm text-gray-500 mb-4">Monitoring reviews across all major platforms:</div>
            <div className="flex items-center justify-center gap-6 flex-wrap mb-4">
              <img
                src="/images/google-logo.png"
                alt="Google"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/yelp-logo.png"
                alt="Yelp"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/trustpilot-logo.png"
                alt="Trustpilot"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/tripadvisor-logo.png"
                alt="TripAdvisor"
                className="h-8 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-sm text-gray-500 opacity-60">+100 more platforms monitored automatically</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

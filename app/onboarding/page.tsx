"use client"
import { Navigation } from "@/components/navigation"
import type React from "react"

import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useState } from "react"

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessAddress: "",
    website: "", // renamed from businessUrl to website
    numberOfLocations: "",
    reviewAlerts: "",
    additionalPlatforms: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.businessName.trim() ||
      !formData.businessAddress.trim() ||
      !formData.website.trim() ||
      !formData.numberOfLocations.trim() ||
      !formData.reviewAlerts.trim()
    ) {
      alert("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mvgwkwer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          businessAddress: formData.businessAddress,
          website: formData.website,
          numberOfLocations: formData.numberOfLocations,
          reviewAlerts: formData.reviewAlerts,
          additionalPlatforms: formData.additionalPlatforms,
          form_source: "onboarding_form",
        }),
      })

      if (response.ok) {
        setShowThankYou(true)
        setFormData({
          name: "",
          email: "",
          businessName: "",
          businessAddress: "",
          website: "",
          numberOfLocations: "",
          reviewAlerts: "",
          additionalPlatforms: "",
        })
      } else {
        alert("There was an error submitting your request. Please try again.")
      }
    } catch (error) {
      console.log("[v0] Form submission error:", error)
      alert("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              GuardX <span className="text-primary">Onboarding Form</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Welcome to GuardX! Please complete this onboarding form so we can start monitoring your online reputation
              and delivering your reports.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
              {showThankYou ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-green-800 text-center mb-4">
                    Thank you! Your onboarding form has been submitted successfully.
                  </p>
                  <p className="text-xl font-bold text-green-700 text-center mb-6">
                    Please click the link below to sign up to your 7 day free trial:
                  </p>
                  <div className="text-center">
                    <a
                      href="https://buy.stripe.com/9B6dR87b667N4rFg2VcIE06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-black hover:bg-yellow-500 px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10 shadow-lg animate-pulse"
                    >
                      Complete Sign Up Here
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-black mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email Field */}
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

                  {/* Business Name Field */}
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

                  {/* Business Address Field */}
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
                    <label htmlFor="website" className="block text-sm font-bold text-black mb-2">
                      Website *
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your website (e.g., example.com)"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                    />
                  </div>

                  {/* Number of Locations Field */}
                  <div>
                    <label htmlFor="numberOfLocations" className="block text-sm font-bold text-black mb-2">
                      Number of Locations *
                    </label>
                    <select
                      id="numberOfLocations"
                      name="numberOfLocations"
                      value={formData.numberOfLocations}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                    >
                      <option value="" disabled>
                        Select number of locations
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                    <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-800">
                        If you have more than 10 locations, please email us for additional locations at{" "}
                        <a href="mailto:info@guardxnetwork.com" className="text-primary hover:underline">
                          info@guardxnetwork.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  {/* Review Alerts Field */}
                  <div>
                    <label htmlFor="reviewAlerts" className="block text-sm font-bold text-black mb-2">
                      Review Alerts *
                    </label>
                    <select
                      id="reviewAlerts"
                      name="reviewAlerts"
                      value={formData.reviewAlerts}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                    >
                      <option value="" disabled>
                        Select reviews to be notified about
                      </option>
                      <option value="positive">Positive</option>
                      <option value="negative">Negative</option>
                      <option value="all">All Reviews</option>
                    </select>
                  </div>

                  {/* Additional Platforms Field */}
                  <div>
                    <label htmlFor="additionalPlatforms" className="block text-sm font-bold text-black mb-2">
                      If you collect reviews anywhere outside of Google and Facebook that you would like us to monitor
                      please list below
                    </label>
                    <textarea
                      id="additionalPlatforms"
                      name="additionalPlatforms"
                      value={formData.additionalPlatforms}
                      onChange={handleInputChange}
                      placeholder="If there are any platforms outside of Google and Facebook you would like us to monitor, please list below"
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 border-2 border-black/10"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Onboarding Form"}
                  </button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

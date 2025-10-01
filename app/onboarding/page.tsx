"use client"
import { Navigation } from "@/components/navigation"
import type React from "react"

import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useState } from "react"

export default function OnboardingPage() {
  const [selectedPlan, setSelectedPlan] = useState<"" | "lite" | "premium">("")
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    platforms: [] as string[],
    alertTypes: "",
    supportEmail: "",
    // Premium Plan only fields
    reviewRequestTiming: "",
    reviewRequestFrequency: "",
    reviewReminders: "",
    widgetLocation: "",
    widgetStyle: "",
    aiResponses: "",
    aiApproval: "",
    multiLocation: "",
    additionalNotes: "",
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedPlan) {
      alert("Please select a plan.")
      return
    }

    if (
      !formData.businessName.trim() ||
      !formData.contactName.trim() ||
      !formData.email.trim() ||
      formData.platforms.length === 0 ||
      !formData.alertTypes.trim() ||
      !formData.supportEmail.trim()
    ) {
      alert("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      // Add plan selection
      submitData.append("plan", selectedPlan === "lite" ? "Lite Plan" : "Premium Plan")

      // Add all form fields
      submitData.append("businessName", formData.businessName)
      submitData.append("contactName", formData.contactName)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("platforms", formData.platforms.join(", "))
      submitData.append("alertTypes", formData.alertTypes)
      submitData.append("supportEmail", formData.supportEmail)

      // Add Premium Plan fields if applicable
      if (selectedPlan === "premium") {
        submitData.append("reviewRequestTiming", formData.reviewRequestTiming)
        submitData.append("reviewRequestFrequency", formData.reviewRequestFrequency)
        submitData.append("reviewReminders", formData.reviewReminders)
        submitData.append("widgetLocation", formData.widgetLocation)
        submitData.append("widgetStyle", formData.widgetStyle)
        submitData.append("aiResponses", formData.aiResponses)
        submitData.append("aiApproval", formData.aiApproval)
        submitData.append("multiLocation", formData.multiLocation)
        submitData.append("additionalNotes", formData.additionalNotes)
      }

      submitData.append("form_source", "plan_based_onboarding_form")

      const response = await fetch("https://formspree.io/f/mqaybkep", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowThankYou(true)
        setSelectedPlan("")
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          platforms: [],
          alertTypes: "",
          supportEmail: "",
          reviewRequestTiming: "",
          reviewRequestFrequency: "",
          reviewReminders: "",
          widgetLocation: "",
          widgetStyle: "",
          aiResponses: "",
          aiApproval: "",
          multiLocation: "",
          additionalNotes: "",
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

  const handlePlatformChange = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }))
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <p className="text-center text-gray-700">
                    We'll review your information and get in touch with you shortly to complete your setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">Select Your Plan</h2>

                    <div>
                      <label htmlFor="plan" className="block text-sm font-bold text-black mb-2">
                        Which plan did you purchase? *
                      </label>
                      <select
                        id="plan"
                        value={selectedPlan}
                        onChange={(e) => setSelectedPlan(e.target.value as "" | "lite" | "premium")}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select a plan</option>
                        <option value="lite">Lite Plan</option>
                        <option value="premium">Premium Plan</option>
                      </select>
                    </div>
                  </div>

                  {selectedPlan && (
                    <>
                      {/* Business Information - Common to both plans */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                          Business Information
                        </h2>

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
                          <label htmlFor="contactName" className="block text-sm font-bold text-black mb-2">
                            Contact Name *
                          </label>
                          <input
                            type="text"
                            id="contactName"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                            placeholder="Enter contact person name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                            Phone Number (optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      {/* Platforms to Monitor - Common to both plans */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                          Platforms to Monitor
                        </h2>

                        <div>
                          <label className="block text-sm font-bold text-black mb-3">
                            Select platforms you want GuardX to monitor *
                          </label>
                          <div className="space-y-3">
                            {["Google", "Facebook", "Yelp", "TripAdvisor", "Trustpilot", "Other"].map((platform) => (
                              <div key={platform} className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  id={`platform-${platform}`}
                                  checked={formData.platforms.includes(platform)}
                                  onChange={() => handlePlatformChange(platform)}
                                  className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary text-primary"
                                />
                                <label
                                  htmlFor={`platform-${platform}`}
                                  className="text-sm font-medium text-black cursor-pointer"
                                >
                                  {platform}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Alerts - Common to both plans */}
                      <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">Review Alerts</h2>

                        <div>
                          <label htmlFor="alertTypes" className="block text-sm font-bold text-black mb-2">
                            Preferred review alert types *
                          </label>
                          <select
                            id="alertTypes"
                            name="alertTypes"
                            value={formData.alertTypes}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                          >
                            <option value="">Select alert type</option>
                            <option value="positive">Positive reviews only</option>
                            <option value="negative">Negative reviews only</option>
                            <option value="both">Both positive and negative</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="supportEmail" className="block text-sm font-bold text-black mb-2">
                            Email for support confirmation *
                          </label>
                          <input
                            type="email"
                            id="supportEmail"
                            name="supportEmail"
                            value={formData.supportEmail}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                            placeholder="support@youremail.com"
                          />
                        </div>
                      </div>

                      {selectedPlan === "premium" && (
                        <>
                          {/* Review Request Setup */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                              Review Request Setup
                            </h2>

                            <div>
                              <label htmlFor="reviewRequestTiming" className="block text-sm font-bold text-black mb-2">
                                When should review requests be sent?
                              </label>
                              <select
                                id="reviewRequestTiming"
                                name="reviewRequestTiming"
                                value={formData.reviewRequestTiming}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                              >
                                <option value="">Select timing</option>
                                <option value="immediately">Immediately after service</option>
                                <option value="1day">1 day after service</option>
                                <option value="2days">2 days after service</option>
                                <option value="3days">3 days after service</option>
                                <option value="1week">1 week after service</option>
                              </select>
                            </div>

                            <div>
                              <label
                                htmlFor="reviewRequestFrequency"
                                className="block text-sm font-bold text-black mb-2"
                              >
                                How often should requests be sent?
                              </label>
                              <select
                                id="reviewRequestFrequency"
                                name="reviewRequestFrequency"
                                value={formData.reviewRequestFrequency}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                              >
                                <option value="">Select frequency</option>
                                <option value="once">Once per customer</option>
                                <option value="quarterly">Quarterly</option>
                                <option value="biannually">Twice per year</option>
                                <option value="annually">Once per year</option>
                              </select>
                            </div>

                            <div>
                              <label htmlFor="reviewReminders" className="block text-sm font-bold text-black mb-2">
                                Send reminders if no response?
                              </label>
                              <select
                                id="reviewReminders"
                                name="reviewReminders"
                                value={formData.reviewReminders}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                              >
                                <option value="">Select reminder option</option>
                                <option value="none">No reminders</option>
                                <option value="1reminder">1 reminder after 3 days</option>
                                <option value="2reminders">2 reminders (3 days, 7 days)</option>
                              </select>
                            </div>
                          </div>

                          {/* Review Widget Preferences */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                              Review Widget Preferences
                            </h2>

                            <div>
                              <label htmlFor="widgetLocation" className="block text-sm font-bold text-black mb-2">
                                Where would you like the review widget displayed?
                              </label>
                              <textarea
                                id="widgetLocation"
                                name="widgetLocation"
                                value={formData.widgetLocation}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                                placeholder="e.g., Homepage, About page, Contact page"
                              />
                            </div>

                            <div>
                              <label htmlFor="widgetStyle" className="block text-sm font-bold text-black mb-2">
                                Preferred widget style
                              </label>
                              <select
                                id="widgetStyle"
                                name="widgetStyle"
                                value={formData.widgetStyle}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                              >
                                <option value="">Select style</option>
                                <option value="carousel">Carousel</option>
                                <option value="grid">Grid layout</option>
                                <option value="list">List view</option>
                                <option value="badge">Badge/rating only</option>
                              </select>
                            </div>
                          </div>

                          {/* AI Suggested Responses */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                              AI Suggested Responses
                            </h2>

                            <div>
                              <label htmlFor="aiResponses" className="block text-sm font-bold text-black mb-2">
                                Would you like AI-generated response suggestions?
                              </label>
                              <select
                                id="aiResponses"
                                name="aiResponses"
                                value={formData.aiResponses}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                              >
                                <option value="">Select option</option>
                                <option value="yes">Yes, provide AI suggestions</option>
                                <option value="no">No, I'll write my own</option>
                              </select>
                            </div>

                            {formData.aiResponses === "yes" && (
                              <div>
                                <label htmlFor="aiApproval" className="block text-sm font-bold text-black mb-2">
                                  Approval process for AI responses
                                </label>
                                <select
                                  id="aiApproval"
                                  name="aiApproval"
                                  value={formData.aiApproval}
                                  onChange={handleInputChange}
                                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                                >
                                  <option value="">Select approval type</option>
                                  <option value="auto">Auto-post (no approval needed)</option>
                                  <option value="manual">Manual approval required</option>
                                </select>
                              </div>
                            )}
                          </div>

                          {/* Multi-Location Details */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                              Multi-Location Details
                            </h2>

                            <div>
                              <label htmlFor="multiLocation" className="block text-sm font-bold text-black mb-2">
                                Do you have multiple business locations? If yes, please list them
                              </label>
                              <textarea
                                id="multiLocation"
                                name="multiLocation"
                                value={formData.multiLocation}
                                onChange={handleInputChange}
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                                placeholder="List each location with address, one per line"
                              />
                            </div>
                          </div>

                          {/* Additional Notes */}
                          <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                              Additional Instructions
                            </h2>

                            <div>
                              <label htmlFor="additionalNotes" className="block text-sm font-bold text-black mb-2">
                                Any additional notes or instructions for the GuardX team?
                              </label>
                              <textarea
                                id="additionalNotes"
                                name="additionalNotes"
                                value={formData.additionalNotes}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                                placeholder="Enter any special requests, preferences, or important information we should know"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-black hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 border-2 border-black/10"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Onboarding Form"}
                      </button>
                    </>
                  )}
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

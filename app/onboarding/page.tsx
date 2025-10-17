"use client"
import { Navigation } from "@/components/navigation"
import type React from "react"

import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    locations: "",
    serviceAreas: "",
    hasGoogleProfile: "",
    googleProfileLink: "",
    hasFacebookPage: "",
    facebookLink: "",
    hasTripAdvisorYelp: "",
    otherPlatforms: "",
    currentlyAsksReviews: "",
    howAskingReviews: "",
    customerDetailsCollection: "",
    customerManagementSystem: "",
    capturesContactInfo: "",
    mainContacts: "",
    goals: [] as string[],
    reportFrequency: "",
    responseTone: "",
    logoLink: "",
    googleManager: "",
    facebookManager: "",
    howHeardAbout: "",
    additionalInfo: "",
    confirmation: false,
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      submitData.append("businessName", formData.businessName)
      submitData.append("contactName", formData.contactName)
      submitData.append("email", formData.email)
      submitData.append("phone", formData.phone)
      submitData.append("website", formData.website)
      submitData.append("address", formData.address)
      submitData.append("locations", formData.locations)
      submitData.append("serviceAreas", formData.serviceAreas)
      submitData.append("hasGoogleProfile", formData.hasGoogleProfile)
      submitData.append("googleProfileLink", formData.googleProfileLink)
      submitData.append("hasFacebookPage", formData.hasFacebookPage)
      submitData.append("facebookLink", formData.facebookLink)
      submitData.append("hasTripAdvisorYelp", formData.hasTripAdvisorYelp)
      submitData.append("otherPlatforms", formData.otherPlatforms)
      submitData.append("currentlyAsksReviews", formData.currentlyAsksReviews)
      submitData.append("howAskingReviews", formData.howAskingReviews)
      submitData.append("customerDetailsCollection", formData.customerDetailsCollection)
      submitData.append("customerManagementSystem", formData.customerManagementSystem)
      submitData.append("capturesContactInfo", formData.capturesContactInfo)
      submitData.append("mainContacts", formData.mainContacts)
      submitData.append("goals", formData.goals.join(", "))
      submitData.append("reportFrequency", formData.reportFrequency)
      submitData.append("responseTone", formData.responseTone)
      submitData.append("logoLink", formData.logoLink)
      submitData.append("googleManager", formData.googleManager)
      submitData.append("facebookManager", formData.facebookManager)
      submitData.append("howHeardAbout", formData.howHeardAbout)
      submitData.append("additionalInfo", formData.additionalInfo)

      submitData.append("form_source", "guardx_client_onboarding_form")
      submitData.append("_replyto", formData.email)
      submitData.append("_to", "info@guardxnetwork.com")

      const response = await fetch("https://formspree.io/f/mkgqyvok", {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowThankYou(true)
        setFormData({
          businessName: "",
          contactName: "",
          email: "",
          phone: "",
          website: "",
          address: "",
          locations: "",
          serviceAreas: "",
          hasGoogleProfile: "",
          googleProfileLink: "",
          hasFacebookPage: "",
          facebookLink: "",
          hasTripAdvisorYelp: "",
          otherPlatforms: "",
          currentlyAsksReviews: "",
          howAskingReviews: "",
          customerDetailsCollection: "",
          customerManagementSystem: "",
          capturesContactInfo: "",
          mainContacts: "",
          goals: [],
          reportFrequency: "",
          responseTone: "",
          logoLink: "",
          googleManager: "",
          facebookManager: "",
          howHeardAbout: "",
          additionalInfo: "",
          confirmation: false,
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
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleGoalChange = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
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
              GuardX <span className="text-primary">Client Onboarding Form</span>
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
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-green-800 text-center mb-4">
                    Thank you — your GuardX onboarding form has been received.
                  </p>
                  <p className="text-center text-gray-700">
                    We'll review your information and get in touch with you shortly to complete your setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                      1️⃣ Basic Business Information
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
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Enter your business name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactName" className="block text-sm font-bold text-black mb-2">
                        Business Owner / Main Contact Name *
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Enter contact person name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                        Business Email Address *
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">
                        Business Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-bold text-black mb-2">
                        Website URL
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-bold text-black mb-2">
                        Business Address (or main location)
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Enter your business address"
                      />
                    </div>

                    <div>
                      <label htmlFor="locations" className="block text-sm font-bold text-black mb-2">
                        How many locations do you have?
                      </label>
                      <input
                        type="text"
                        id="locations"
                        name="locations"
                        value={formData.locations}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="e.g., 1, 3, 10+"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceAreas" className="block text-sm font-bold text-black mb-2">
                        What areas or towns do you serve?
                      </label>
                      <textarea
                        id="serviceAreas"
                        name="serviceAreas"
                        value={formData.serviceAreas}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="List the areas or towns you serve"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">2️⃣ Online Presence</h2>

                    <div>
                      <label htmlFor="hasGoogleProfile" className="block text-sm font-bold text-black mb-2">
                        Do you currently have a Google Business Profile?
                      </label>
                      <select
                        id="hasGoogleProfile"
                        name="hasGoogleProfile"
                        value={formData.hasGoogleProfile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not-sure">Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="googleProfileLink" className="block text-sm font-bold text-black mb-2">
                        Link to Google Business Profile
                      </label>
                      <input
                        type="text"
                        id="googleProfileLink"
                        name="googleProfileLink"
                        value={formData.googleProfileLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="https://..."
                      />
                    </div>

                    <div>
                      <label htmlFor="hasFacebookPage" className="block text-sm font-bold text-black mb-2">
                        Do you have a Facebook Business Page?
                      </label>
                      <select
                        id="hasFacebookPage"
                        name="hasFacebookPage"
                        value={formData.hasFacebookPage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="facebookLink" className="block text-sm font-bold text-black mb-2">
                        Facebook Page Link
                      </label>
                      <input
                        type="text"
                        id="facebookLink"
                        name="facebookLink"
                        value={formData.facebookLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="https://facebook.com/..."
                      />
                    </div>

                    <div>
                      <label htmlFor="hasTripAdvisorYelp" className="block text-sm font-bold text-black mb-2">
                        Do you have a TripAdvisor, Trustpilot, or Yelp profile? (If yes, please add links below)
                      </label>
                      <select
                        id="hasTripAdvisorYelp"
                        name="hasTripAdvisorYelp"
                        value={formData.hasTripAdvisorYelp}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="otherPlatforms" className="block text-sm font-bold text-black mb-2">
                        Any other platforms you get reviews on?
                      </label>
                      <textarea
                        id="otherPlatforms"
                        name="otherPlatforms"
                        value={formData.otherPlatforms}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="List any other review platforms and links"
                      />
                    </div>

                    <div>
                      <label htmlFor="currentlyAsksReviews" className="block text-sm font-bold text-black mb-2">
                        Do you currently ask customers for reviews?
                      </label>
                      <select
                        id="currentlyAsksReviews"
                        name="currentlyAsksReviews"
                        value={formData.currentlyAsksReviews}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="howAskingReviews" className="block text-sm font-bold text-black mb-2">
                        If yes, how are you currently asking for reviews?
                      </label>
                      <textarea
                        id="howAskingReviews"
                        name="howAskingReviews"
                        value={formData.howAskingReviews}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="e.g., manually, verbally, through software, etc."
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                      3️⃣ Systems & Customer Management
                    </h2>

                    <div>
                      <label htmlFor="customerDetailsCollection" className="block text-sm font-bold text-black mb-2">
                        How do you currently collect customer details?
                      </label>
                      <textarea
                        id="customerDetailsCollection"
                        name="customerDetailsCollection"
                        value={formData.customerDetailsCollection}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="Describe your process"
                      />
                    </div>

                    <div>
                      <label htmlFor="customerManagementSystem" className="block text-sm font-bold text-black mb-2">
                        What system(s) do you use to manage customers?
                      </label>
                      <input
                        type="text"
                        id="customerManagementSystem"
                        name="customerManagementSystem"
                        value={formData.customerManagementSystem}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="e.g., CRM software, spreadsheets, etc."
                      />
                    </div>

                    <div>
                      <label htmlFor="capturesContactInfo" className="block text-sm font-bold text-black mb-2">
                        Do you capture customer emails or phone numbers after each visit/purchase?
                      </label>
                      <select
                        id="capturesContactInfo"
                        name="capturesContactInfo"
                        value={formData.capturesContactInfo}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="sometimes">Sometimes</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mainContacts" className="block text-sm font-bold text-black mb-2">
                        Who should be the main contact(s) for notifications and reports? (Name and email)
                      </label>
                      <textarea
                        id="mainContacts"
                        name="mainContacts"
                        value={formData.mainContacts}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="List names and emails, one per line"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                      4️⃣ Reputation Goals & Preferences
                    </h2>

                    <div>
                      <label className="block text-sm font-bold text-black mb-3">
                        What are your main goals with GuardX?
                      </label>
                      <div className="space-y-3">
                        {[
                          "Get more 5-star reviews",
                          "Handle negative feedback privately",
                          "Improve Google ranking",
                          "Monitor all review platforms in one place",
                          "Show reviews on your website",
                          "Boost customer trust & visibility",
                        ].map((goal) => (
                          <div key={goal} className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              id={`goal-${goal}`}
                              checked={formData.goals.includes(goal)}
                              onChange={() => handleGoalChange(goal)}
                              className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary text-primary"
                            />
                            <label htmlFor={`goal-${goal}`} className="text-sm font-medium text-black cursor-pointer">
                              {goal}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reportFrequency" className="block text-sm font-bold text-black mb-2">
                        How often would you like to receive reports?
                      </label>
                      <select
                        id="reportFrequency"
                        name="reportFrequency"
                        value={formData.reportFrequency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="responseTone" className="block text-sm font-bold text-black mb-2">
                        If using Suggested Reply, which tone of response would you prefer?
                      </label>
                      <select
                        id="responseTone"
                        name="responseTone"
                        value={formData.responseTone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                      >
                        <option value="">Select tone</option>
                        <option value="professional">Professional</option>
                        <option value="friendly">Friendly</option>
                        <option value="personal">Personal</option>
                        <option value="playful">Playful</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">5️⃣ Logo</h2>

                    <div>
                      <label htmlFor="logoLink" className="block text-sm font-bold text-black mb-2">
                        Paste a link to your logo from your website, or email it to info@guardxnetwork.com after
                        submitting
                      </label>
                      <input
                        type="text"
                        id="logoLink"
                        name="logoLink"
                        value={formData.logoLink}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="https://yourwebsite.com/logo.png"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                      6️⃣ Access & Authorisation
                    </h2>

                    <div>
                      <label htmlFor="googleManager" className="block text-sm font-bold text-black mb-2">
                        Who manages your Google Business Profile? (Name / Email)
                      </label>
                      <input
                        type="text"
                        id="googleManager"
                        name="googleManager"
                        value={formData.googleManager}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Name and email"
                      />
                    </div>

                    <div>
                      <label htmlFor="facebookManager" className="block text-sm font-bold text-black mb-2">
                        Who manages your Facebook Page? (Name / Email)
                      </label>
                      <input
                        type="text"
                        id="facebookManager"
                        name="facebookManager"
                        value={formData.facebookManager}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="Name and email"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">
                      7️⃣ Additional Information
                    </h2>

                    <div>
                      <label htmlFor="howHeardAbout" className="block text-sm font-bold text-black mb-2">
                        How did you hear about GuardX?
                      </label>
                      <input
                        type="text"
                        id="howHeardAbout"
                        name="howHeardAbout"
                        value={formData.howHeardAbout}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors"
                        placeholder="e.g., Google search, referral, social media"
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-bold text-black mb-2">
                        Anything else we should know about your business or goals?
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-black bg-white transition-colors resize-vertical"
                        placeholder="Share any additional information"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-black border-b-2 border-primary pb-2">8️⃣ Confirmation</h2>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="confirmation"
                        name="confirmation"
                        checked={formData.confirmation}
                        onChange={handleInputChange}
                        className="w-5 h-5 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary text-primary mt-1"
                      />
                      <label htmlFor="confirmation" className="text-sm font-medium text-black cursor-pointer">
                        I confirm the details above are correct. *
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-black hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed px-8 py-4 text-lg font-bold shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 border-2 border-black/10"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Form"}
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

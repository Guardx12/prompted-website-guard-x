"use client"

import { useState } from "react"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { CheckCircle, Mail, ArrowLeft, Shield } from "lucide-react"

enum OnboardingStep {
  FORM = "form",
  VERIFICATION = "verification",
  SUCCESS = "success",
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(OnboardingStep.FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const [otpCode, setOtpCode] = useState("")
  const [otpError, setOtpError] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    companyWebsite: "",
    email: "",
    phone: "",
    planSelected: "Business",
    numberOfLocations: "1",
    keywords: "",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setOtpError("")

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSessionId(result.sessionId)
        setCurrentStep(OnboardingStep.VERIFICATION)
      } else {
        const errorMessage = result.error || "There was an error sending the verification code. Please try again."
        alert(errorMessage)
        console.error("OTP sending failed:", result)
      }
    } catch (error) {
      console.error("OTP sending error:", error)
      alert("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerifyOTP = async () => {
    if (otpCode.length !== 6) {
      setOtpError("Please enter the complete 6-digit code")
      return
    }

    setIsVerifying(true)
    setOtpError("")

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          code: otpCode,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setCurrentStep(OnboardingStep.SUCCESS)
      } else {
        setOtpError(result.error || "Invalid verification code. Please try again.")
      }
    } catch (error) {
      console.error("OTP verification error:", error)
      setOtpError("Network error. Please check your connection and try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleResendOTP = async () => {
    setIsSubmitting(true)
    setOtpError("")
    setOtpCode("")

    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSessionId(result.sessionId)
        alert("New verification code sent to your email")
      } else {
        setOtpError(result.error || "Failed to resend verification code")
      }
    } catch (error) {
      console.error("Resend OTP error:", error)
      setOtpError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleBackToForm = () => {
    setCurrentStep(OnboardingStep.FORM)
    setOtpCode("")
    setOtpError("")
    setSessionId("")
  }

  if (currentStep === OnboardingStep.SUCCESS) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">Email Verified!</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you! Your email has been verified and your onboarding has been completed.
                </p>
                <p className="text-sm text-muted-foreground">
                  Our team will review your submission and contact you at {formData.email} within 24 hours to get your
                  GuardX protection started.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  if (currentStep === OnboardingStep.VERIFICATION) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20 lg:py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Verify Your <span className="text-primary">Email</span>
              </h1>
              <p className="text-xl text-muted-foreground">Check your inbox for the verification code</p>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Email Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-2">We've sent a 6-digit verification code to:</p>
                  <p className="text-foreground font-semibold text-lg">{formData.email}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="otp" className="text-center block mb-4">
                      Enter Verification Code
                    </Label>
                    <div className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={otpCode}
                        onChange={(value) => {
                          setOtpCode(value)
                          setOtpError("")
                        }}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>

                  {otpError && (
                    <div className="text-center">
                      <p className="text-destructive text-sm">{otpError}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <Button
                      onClick={handleVerifyOTP}
                      size="lg"
                      disabled={isVerifying || otpCode.length !== 6}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold disabled:opacity-50"
                    >
                      {isVerifying ? "Verifying..." : "Verify Email"}
                    </Button>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={handleBackToForm}
                        variant="outline"
                        size="lg"
                        className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Form
                      </Button>

                      <Button
                        onClick={handleResendOTP}
                        variant="outline"
                        size="lg"
                        disabled={isSubmitting}
                        className="flex-1 border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        {isSubmitting ? "Sending..." : "Resend Code"}
                      </Button>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Didn't receive the code? Check your spam folder or click "Resend Code"</p>
                    <p className="mt-2">The code will expire in 10 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">GuardX</span>
            </h1>
            <p className="text-xl text-muted-foreground">Let's Get You Set Up</p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Onboarding Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => handleInputChange("companyName", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="companyWebsite">Company Website *</Label>
                  <Input
                    id="companyWebsite"
                    type="text"
                    required
                    placeholder="Enter your website or company URL"
                    value={formData.companyWebsite}
                    onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                      placeholder="For account verification only"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="planSelected">Plan Selected</Label>
                    <Select
                      value={formData.planSelected}
                      onValueChange={(value) => handleInputChange("planSelected", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Business">Business Plan (£299/month)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="numberOfLocations">Number of Locations *</Label>
                    <Select
                      value={formData.numberOfLocations}
                      onValueChange={(value) => handleInputChange("numberOfLocations", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Location{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="keywords">Keywords / Brand Names to Monitor *</Label>
                  <Textarea
                    id="keywords"
                    required
                    placeholder="Enter your company name, brand names, key personnel names, or other keywords you'd like us to monitor..."
                    value={formData.keywords}
                    onChange={(e) => handleInputChange("keywords", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Notes or Special Instructions</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any specific requirements, concerns, or additional information you'd like to share..."
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Verification Code..." : "Continue to Email Verification"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

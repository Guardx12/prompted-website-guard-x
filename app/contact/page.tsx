"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Globe, Clock, Send, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", businessName: "", message: "" })
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to protect your reputation? Contact our experts today for automated reputation management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a message online</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-foreground">
                      Business Name
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary"
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background border-border text-foreground focus:border-primary focus:ring-primary resize-none"
                      placeholder="Tell us about your reputation management needs..."
                    />
                  </div>

                  <div className="space-y-3">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                      onClick={() => {
                        // Placeholder for Calendly integration
                        alert("Calendly integration coming soon! Please use the contact form above for now.")
                      }}
                    >
                      Book a Free Consultation
                      <Calendar className="ml-2 w-5 h-5" />
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-primary text-primary hover:bg-primary/10 py-3 text-lg font-semibold bg-transparent"
                      onClick={() => {
                        // Placeholder for automated onboarding
                        alert("Automated onboarding coming soon! Please use the contact form above for now.")
                      }}
                    >
                      Start Automated Setup
                      <Calendar className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    For inquiries or support, please email us at info@guardxnetwork.com.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@guardxnetwork.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Website</h3>
                      <p className="text-muted-foreground">www.guardxnetwork.com</p>
                      <p className="text-sm text-muted-foreground">Visit us online for more information</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM GMT
                        <br />
                        Saturday - Sunday: Emergency support only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Quick Response</h3>
                    <p className="text-muted-foreground mb-4">
                      We understand reputation issues can feel urgent. GuardX strives to respond promptly, with most
                      inquiries answered within 1 business day.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">24hrs</div>
                        <div className="text-sm text-muted-foreground">Response Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">Free</div>
                        <div className="text-sm text-muted-foreground">Consultation</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">Priority Support</h3>
                    <p className="text-muted-foreground mb-4">
                      For time-sensitive concerns, priority assistance is available through our online channels during
                      business hours.
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      onClick={() => {
                        // Placeholder for priority online support
                        alert(
                          "Priority online support coming soon! Please use the contact form above for urgent matters.",
                        )
                      }}
                    >
                      Request Priority Support
                      <Calendar className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

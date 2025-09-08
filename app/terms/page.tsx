import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Simple, clear terms for our reputation management service</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-muted-foreground mb-8">
                <strong>Last Updated: December 9, 2024</strong>
              </p>

              <div className="text-foreground space-y-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Welcome to GuardX! We're excited to help protect and grow your business reputation. These terms
                    explain how our service works and what you can expect from us. By using GuardX, you're agreeing to
                    these simple terms.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We've written this in plain English to make it easy to understand. If you have any questions, just
                    reach out to us at info@guardxnetwork.com.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How Our Subscription Works</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    GuardX is a monthly subscription service that's billed in advance. Here's what you need to know:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Your subscription automatically renews each month</li>
                    <li>• We charge your payment method on the same date each month</li>
                    <li>• All fees are non-refundable (more on this below)</li>
                    <li>
                      • If your payment doesn't go through, we'll let you know so you can update your payment info
                    </li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Managing Your Subscription</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    You're in complete control of your subscription and can manage it yourself anytime - no need to
                    contact us!
                  </p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Easy Self-Service Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Want to cancel or make changes? Simply use our secure customer portal - it's quick and easy:
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="font-medium text-foreground">Stripe Customer Portal:</p>
                    <Link
                      href="https://billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00"
                      target="_blank"
                      className="text-primary hover:underline break-all"
                    >
                      billing.stripe.com/p/login/fZu8wO1QM3ZF4rF9ExcIE00
                    </Link>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">What Happens When You Cancel</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Your service stops immediately when you cancel</li>
                    <li>• You won't be charged again after cancellation</li>
                    <li>• We can't provide refunds for time already paid for</li>
                    <li>• You can always resubscribe later if you change your mind</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our No-Refund Policy</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    We operate a strict no-refund policy for all subscription fees. This helps us keep our prices low
                    and our service quality high.
                  </p>
                  <p className="text-muted-foreground mb-4">This means no refunds for:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Canceling mid-month</li>
                    <li>• Changing your mind about the service</li>
                    <li>• Business changes or circumstances</li>
                    <li>• Issues with third-party platforms (like Google or Yelp)</li>
                  </ul>
                  <p className="text-muted-foreground">
                    We're confident you'll love our service, but please make sure you're ready to commit before
                    subscribing.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Working with Review Platforms</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    We work with many review platforms like Google, Yelp, Facebook, and others to manage your
                    reputation. Here's what you should know:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Sometimes these platforms have outages or change their rules - that's beyond our control</li>
                    <li>• We can't guarantee these platforms will always work perfectly</li>
                    <li>
                      • If a platform goes down temporarily, it doesn't affect your subscription or entitle you to a
                      refund
                    </li>
                    <li>• We'll always do our best to work around any platform issues</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">What We Do for You</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    GuardX is a complete done-for-you reputation management service. We handle everything so you don't
                    have to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li>• Monitor your online reviews 24/7</li>
                    <li>• Send you instant alerts when new reviews come in</li>
                    <li>• Write professional responses to your reviews</li>
                    <li>• Send you weekly reports on your reputation</li>
                    <li>• Help with reputation recovery if needed</li>
                    <li>• Provide crisis management support</li>
                  </ul>
                  <p className="text-muted-foreground">
                    While we work hard to improve your reputation, we can't guarantee specific results like star ratings
                    or revenue increases. Every business is different, and results depend on many factors.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Responsibilities and Limits</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    We're committed to providing excellent service, but we need to be clear about our limits:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• We provide our service "as is" and do our best to help your business</li>
                    <li>• We're not responsible for what happens on third-party platforms like Google or Yelp</li>
                    <li>• If something goes wrong, our maximum liability is what you paid us in the last 3 months</li>
                    <li>• We can't be held responsible for indirect business losses</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">By Using Our Service</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    When you subscribe to GuardX, you're confirming that you understand and agree to:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Our no-refund policy</li>
                    <li>• That we can't control third-party platforms</li>
                    <li>• How our done-for-you service works</li>
                    <li>• That your access ends immediately when you cancel</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Your Account</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You must be 18 or older and authorized to make decisions for your business</li>
                    <li>• Keep your account information secure and up to date</li>
                    <li>• Provide accurate business information so we can help you effectively</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Fair Use</h2>
                  <p className="text-muted-foreground mb-4">
                    We ask that you use our service responsibly. Please don't:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use our service for anything illegal</li>
                    <li>• Ask us to create fake reviews</li>
                    <li>• Try to interfere with our systems</li>
                    <li>• Break the rules of review platforms</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Content and Ownership</h2>
                  <p className="text-lg leading-relaxed mb-4">Here's how content ownership works with our service:</p>

                  <h3 className="text-xl font-semibold text-foreground mb-3">What You Own</h3>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li>• Your business information, brand assets, and company data always remain yours</li>
                    <li>
                      • You have full rights to use all responses and reports we create as part of your business
                      operations
                    </li>
                    <li>
                      • Any content you provide to us (business details, preferences, etc.) stays under your ownership
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">How Our Service Works</h3>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                    <li>
                      • We provide AI-generated responses and reports from third-party providers as part of our service
                    </li>
                    <li>• These materials are licensed to you for your business use and benefit</li>
                    <li>
                      • We don't claim ownership of the underlying AI-generated content or the tools that create it
                    </li>
                    <li>• You're free to use our service deliverables to grow and protect your business reputation</li>
                    <li>• The AI platforms and tools we use remain the property of their respective providers</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3">Marketing and Examples</h3>
                  <p className="text-muted-foreground">
                    We may use anonymized examples of our work for marketing purposes, but we'll never identify your
                    business or share your confidential information. This helps us show potential clients the quality of
                    our service while keeping your privacy protected.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to These Terms</h2>
                  <p className="text-muted-foreground">
                    We may update these terms occasionally. When we do, we'll post the new version here with a new date.
                    By continuing to use our service after changes are posted, you're agreeing to the updated terms.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Legal Stuff</h2>
                  <p className="text-muted-foreground">
                    These terms are governed by UK law. If there's ever a legal dispute, it will be handled in UK
                    courts.
                  </p>
                </div>

                <hr className="border-border" />

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Questions?</h3>
                  <p className="text-muted-foreground">
                    We're here to help! If you have any questions about these terms or our service, just email us at{" "}
                    <strong>info@guardxnetwork.com</strong> and we'll get back to you quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

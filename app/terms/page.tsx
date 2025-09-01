import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-card border-b border-border py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Legal terms and conditions for using GuardX services</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-muted-foreground mb-8">
                <strong>Last Updated: August 18, 2025</strong>
              </p>

              <div className="text-foreground space-y-8">
                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    Welcome to <strong className="text-primary">GuardX</strong>. These Terms of Service ("Terms") govern
                    your access to and use of the GuardX website, services, and reputation management solutions (the
                    "Services"). By using the Services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-lg leading-relaxed">If you do not agree, you must not use the Services.</p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Eligibility</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You must be at least 18 years old to use the Services.</li>
                    <li>• By using the Services, you confirm you have the authority to enter into these Terms.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Provided</h2>
                  <p className="text-muted-foreground mb-4">
                    GuardX provides reputation management solutions, including but not limited to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Monitoring online reviews and mentions</li>
                    <li>• Managing and responding to reviews</li>
                    <li>• Reputation recovery campaigns</li>
                    <li>• Crisis management support</li>
                    <li>• Positive content creation and visibility strategies</li>
                    <li>• Analytics and reporting</li>
                  </ul>
                  <p className="text-muted-foreground">GuardX may update, add, or remove features at any time.</p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Account & Subscription</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access to certain Services requires a subscription (currently £149/month).</li>
                    <li>• You are responsible for maintaining the confidentiality of your account login details.</li>
                    <li>• Subscription fees are billed in advance and are non-refundable unless otherwise agreed.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Payments</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Payments are processed securely through <strong>Stripe</strong> or other approved payment
                      providers.
                    </li>
                    <li>
                      • By subscribing, you authorize GuardX to charge your chosen payment method on a recurring basis.
                    </li>
                    <li>• If a payment fails, GuardX may suspend or terminate Services until payment is resolved.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Acceptable Use</h2>
                  <p className="text-muted-foreground mb-4">You agree not to:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Use the Services for unlawful or fraudulent purposes.</li>
                    <li>• Post or distribute harmful, defamatory, or misleading content.</li>
                    <li>• Attempt to interfere with the security or functionality of the Services.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Content Ownership</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Any original content created by GuardX (such as review responses, reports, or campaigns) remains
                      the intellectual property of GuardX unless otherwise agreed.
                    </li>
                    <li>• You retain ownership of your brand assets and data.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Service Limitations</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • GuardX strives for accuracy and effectiveness but does not guarantee specific results (such as
                      ratings, rankings, or revenue outcomes).
                    </li>
                    <li>
                      • Online platforms (Google, Yelp, Trustpilot, etc.) are third-party systems outside GuardX's
                      control.
                    </li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You may cancel your subscription at any time by providing written notice.</li>
                    <li>• GuardX may suspend or terminate Services immediately if these Terms are violated.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
                  <p className="text-muted-foreground">
                    The Services are provided <strong>"as is"</strong> without warranties of any kind, whether express
                    or implied. GuardX does not guarantee uninterrupted service or error-free outcomes.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • To the maximum extent permitted by law, GuardX shall not be liable for indirect, incidental, or
                      consequential damages.
                    </li>
                    <li>
                      • GuardX's total liability shall not exceed the amount you paid for the Services in the six months
                      preceding the claim.
                    </li>
                  </ul>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
                  <p className="text-muted-foreground">
                    You agree to indemnify and hold harmless GuardX, its employees, and affiliates from any claims or
                    damages arising from your use of the Services or violation of these Terms.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    GuardX may update these Terms from time to time. Updated Terms will be posted on this website with a
                    new "Last Updated" date. Continued use of the Services constitutes acceptance of the changes.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms are governed by the laws of the United Kingdom. Any disputes shall be subject to the
                    exclusive jurisdiction of UK courts.
                  </p>
                </div>

                <hr className="border-border" />

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact</h2>
                  <p className="text-muted-foreground mb-4">For questions about these Terms, please contact:</p>
                  <div className="bg-background rounded-lg p-6 border border-border">
                    <div className="space-y-2">
                      <p className="text-foreground font-semibold text-lg">GuardX</p>
                      <p className="text-muted-foreground">
                        📧{" "}
                        <a href="mailto:info@guardxnetwork.com" className="text-primary hover:underline">
                          info@guardxnetwork.com
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        🌐{" "}
                        <Link href="/" className="text-primary hover:underline">
                          www.guardxnetwork.com
                        </Link>
                      </p>
                    </div>
                  </div>
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

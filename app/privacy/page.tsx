import { Navigation } from "@/components/navigation"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: 18 August 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <p className="text-foreground leading-relaxed">
              GUARDX is committed to protecting the privacy of all customers and visitors. This Privacy Policy explains
              how GUARDX collects, uses, and safeguards personal information when the GUARDX website, services, and
              related tools are used.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  1
                </span>
                Information Collected
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground mb-4">GUARDX may collect the following types of information:</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Contact Information:</strong> name, email address, phone number, and billing details
                      provided during sign-up.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Account Information:</strong> login credentials and profile preferences.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Reputation Data:</strong> reviews, ratings, and other publicly available information that
                      GUARDX monitors on behalf of customers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Payment Information:</strong> processed securely by third-party providers such as Stripe.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <strong>Usage Data:</strong> information about how the website and services are used, including
                      cookies and analytics data.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  2
                </span>
                Use of Information
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground mb-4">GUARDX uses the collected information to:</p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide, manage, and improve services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Monitor and report on customer online reputation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Communicate updates, support information, and offers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Process payments securely.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Comply with legal obligations.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  3
                </span>
                Sharing of Information
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground mb-4">
                  Personal data is never sold or rented. Information may only be shared with:
                </p>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Trusted third-party providers such as payment processors, analytics services, or hosting platforms
                      necessary to deliver services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Legal authorities when required by law, regulation, or legal process.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  4
                </span>
                Data Security
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground">
                  GUARDX uses industry-standard safeguards including encryption, secure hosting, and limited access
                  controls to protect personal data. However, absolute security cannot be guaranteed.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  5
                </span>
                Cookies and Tracking Technologies
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground">
                  The GUARDX website may use cookies and similar technologies to enhance browsing, analyze traffic, and
                  improve performance. Cookies can be managed or disabled through browser settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  6
                </span>
                Customer Rights
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground mb-4">Depending on location, customers may have rights to:</p>
                <ul className="space-y-3 text-foreground mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Access, correct, or delete personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Restrict or object to certain data processing.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Request a copy of personal data.</span>
                  </li>
                </ul>
                <p className="text-foreground">
                  To exercise these rights, contact{" "}
                  <a href="mailto:info@guardxnetwork.com" className="text-primary hover:underline">
                    info@guardxnetwork.com
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  7
                </span>
                Children's Privacy
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground">
                  GUARDX services are not directed at individuals under the age of 18. Personal information from
                  children is not knowingly collected.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  8
                </span>
                Changes to This Policy
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground">
                  This Privacy Policy may be updated from time to time. Any material changes will be posted on this page
                  with a revised effective date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-3">
                  9
                </span>
                Contact Information
              </h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground mb-4">
                  For questions or concerns about this Privacy Policy, please contact:
                </p>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-foreground font-semibold mb-2">GUARDX Privacy Team</p>
                  <p className="text-foreground">
                    📧{" "}
                    <a href="mailto:info@guardxnetwork.com" className="text-primary hover:underline">
                      info@guardxnetwork.com
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

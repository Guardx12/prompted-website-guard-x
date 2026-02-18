import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { WhatsAppBubble } from "@/components/whatsapp-bubble"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Web Design & SEO Foundation for Local Businesses | GuardX",
    template: "%s | GuardX",
  },
  description:
    "Professional website design and SEO foundation for UK local businesses. Modern, fast websites built to generate enquiries.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://guardxnetwork.com"),
  openGraph: {
    siteName: "GuardX",
    type: "website",
    locale: "en_GB",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '643792238797788');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17521993303" strategy="afterInteractive" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17521993303');
        `}
      </Script>

      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}

        <WhatsAppBubble />

        {/* Facebook Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=643792238797788&ev=PageView&noscript=1"
          />
        </noscript>
      
        <Script id="guardx-localbusiness-schema" type="application/ld+json" strategy="afterInteractive">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GuardX Limited",
            "url": "https://www.guardxnetwork.com",
            "logo": "https://www.guardxnetwork.com/images/guardx-logo.png",
            "image": "https://www.guardxnetwork.com/images/guardx-logo.png",
            "description": "Website design, SEO foundation, and review generation services for UK local businesses.",
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB",
              "addressRegion": "West Sussex"
            },
            "sameAs": [
              "https://www.guardxnetwork.com"
            ]
          }
          `}
        </Script>

      </body>
    </html>
  )
}

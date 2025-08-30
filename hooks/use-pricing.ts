"use client"

import { useState, useEffect } from "react"

interface PricingData {
  businessPlan: {
    monthly: string
    annual: string
    savings: string
    support: string
  }
  growthPlan: {
    monthly: string
    annual: string
    savings: string
    support: string
  }
  enterprisePlan: {
    pricing: string
  }
  fakeRemovalService: string
  extraLocation: string
  currency: string
  region: string
}

export function usePricing(): PricingData {
  const [pricing, setPricing] = useState<PricingData>({
    businessPlan: {
      monthly: "£299",
      annual: "£2,990",
      savings: "save 20%",
      support: "Priority email support during business hours (within 48 hours).",
    },
    growthPlan: {
      monthly: "£499",
      annual: "£4,990",
      savings: "save 20%",
      support: "Priority email support during business hours (within 24 hours).",
    },
    enterprisePlan: {
      pricing: "Custom pricing",
    },
    fakeRemovalService: "£499",
    extraLocation: "£149",
    currency: "GBP",
    region: "UK",
  })

  useEffect(() => {
    const detectRegion = async () => {
      try {
        // First try IP-based geolocation
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        if (data.country_code === "US") {
          setPricing({
            businessPlan: {
              monthly: "$349",
              annual: "$3,490",
              savings: "save 20%",
              support: "Priority email support during business hours (within 48 hours).",
            },
            growthPlan: {
              monthly: "$549",
              annual: "$5,490",
              savings: "save 20%",
              support: "Priority email support during business hours (within 24 hours).",
            },
            enterprisePlan: {
              pricing: "Custom pricing",
            },
            fakeRemovalService: "$599",
            extraLocation: "$199",
            currency: "USD",
            region: "US",
          })
          return
        }
      } catch (error) {
        // Fallback to timezone detection if IP geolocation fails
        console.log("IP geolocation failed, falling back to timezone detection")
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        const isUS = timezone.includes("America/") || timezone.includes("US/")

        if (isUS) {
          setPricing({
            businessPlan: {
              monthly: "$349",
              annual: "$3,490",
              savings: "save 20%",
              support: "Priority email support during business hours (within 48 hours).",
            },
            growthPlan: {
              monthly: "$549",
              annual: "$5,490",
              savings: "save 20%",
              support: "Priority email support during business hours (within 24 hours).",
            },
            enterprisePlan: {
              pricing: "Custom pricing",
            },
            fakeRemovalService: "$599",
            extraLocation: "$199",
            currency: "USD",
            region: "US",
          })
        }
      }

      // Default to UK pricing (already set in initial state)
    }

    detectRegion()
  }, [])

  return pricing
}

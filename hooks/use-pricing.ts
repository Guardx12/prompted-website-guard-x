"use client"

import { useState, useEffect } from "react"

interface PricingData {
  businessPlan: {
    monthly: string
    annual: string
    savings: string
  }
  growthPlan: {
    monthly: string
    annual: string
    savings: string
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
    },
    growthPlan: {
      monthly: "£499",
      annual: "£4,990",
      savings: "save 20%",
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
    // Get user's location based on timezone or other indicators
    const detectRegion = () => {
      // Simple detection - in production you'd use a proper geolocation service
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const isUS = timezone.includes("America/") || timezone.includes("US/")

      if (isUS) {
        setPricing({
          businessPlan: {
            monthly: "$349",
            annual: "$3,490",
            savings: "save 20%",
          },
          growthPlan: {
            monthly: "$549",
            annual: "$5,490",
            savings: "save 20%",
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
      // Default to UK pricing (already set in initial state)
    }

    detectRegion()
  }, [])

  return pricing
}

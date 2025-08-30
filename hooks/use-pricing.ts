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
  convertCurrency: (text: string) => string
}

function convertCurrencyText(text: string, targetCurrency: string): string {
  if (targetCurrency === "GBP") {
    // Already in GBP, no conversion needed
    return text
  }

  // Convert GBP to USD for US and other countries
  return text
    .replace(/£(\d+(?:,\d+)*(?:\.\d+)?)/g, (match, amount) => {
      // Convert specific amounts using 1:1.25 exchange rate
      const numericAmount = Number.parseFloat(amount.replace(/,/g, ""))
      const convertedAmount = Math.round(numericAmount * 1.25)
      return `$${convertedAmount.toLocaleString()}`
    })
    .replace(/£/g, "$") // Replace remaining £ symbols with $
}

export function usePricing(): PricingData {
  const [pricing, setPricing] = useState<PricingData>({
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
    convertCurrency: (text: string) => convertCurrencyText(text, "USD"),
  })

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()

        // UK visitors get GBP pricing
        if (data.country_code === "GB" || data.country_code === "UK") {
          setPricing({
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
            convertCurrency: (text: string) => convertCurrencyText(text, "GBP"),
          })
          return
        }

        // US visitors and all other countries get USD pricing (default)
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
          region: data.country_code === "US" ? "US" : "Other",
          convertCurrency: (text: string) => convertCurrencyText(text, "USD"),
        })
      } catch (error) {
        console.log("IP geolocation failed, defaulting to USD pricing")

        // Keep the default USD pricing already set in initial state
        setPricing((prevPricing) => ({
          ...prevPricing,
          region: "Unknown",
        }))
      }
    }

    detectRegion()
  }, [])

  return pricing
}

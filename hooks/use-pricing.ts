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

function convertCurrencyText(text: string, isUK: boolean): string {
  if (isUK) {
    return text // UK visitors see original GBP text
  }

  // Convert GBP to USD for US and other countries
  return text.replace(/£/g, "$")
}

export function usePricing(): PricingData {
  const [isUK, setIsUK] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout

        const response = await fetch("https://ipapi.co/country_code/", {
          signal: controller.signal,
        })
        clearTimeout(timeoutId)

        if (response.ok) {
          const countryCode = await response.text()
          setIsUK(countryCode.trim() === "GB")
        }
      } catch (error) {
        console.log("IP detection failed, defaulting to USD")
      } finally {
        setLoading(false)
      }
    }

    detectCountry()
  }, [])

  if (loading) {
    // Return USD pricing while loading
    return {
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
      region: "Loading",
      convertCurrency: (text: string) => convertCurrencyText(text, false),
    }
  }

  if (isUK) {
    return {
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
      convertCurrency: (text: string) => convertCurrencyText(text, true),
    }
  }

  // Default USD pricing for US and all other countries
  return {
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
    convertCurrency: (text: string) => convertCurrencyText(text, false),
  }
}

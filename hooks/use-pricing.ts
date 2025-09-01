"use client"

interface PricingData {
  businessPlan: {
    monthly: number
    annual: number
    savings: string
    support: string
  }
  proFakeReviewPlan: {
    monthly: number
    annual: number
    savings: string
    support: string
  }
  enterprisePlan: {
    pricing: string
  }
  fakeRemovalService: number // Changed to number
  extraLocation: number // Changed to number
  currency: string
  region: string
  convertCurrency: (text: string) => string
  formatPrice: (price: number) => string
}

function convertCurrencyText(text: string): string {
  return text // Always return original GBP text
}

function formatPrice(price: number): string {
  return `£${price.toLocaleString()}`
}

export function usePricing(): PricingData {
  return {
    businessPlan: {
      monthly: 299,
      annual: 2990,
      savings: "20% off annual pricing",
      support: "Priority email support during business hours (within 48 hours).",
    },
    proFakeReviewPlan: {
      monthly: 499,
      annual: 4990,
      savings: "20% off annual pricing",
      support: "Priority email support during business hours (within 24 hours).",
    },
    enterprisePlan: {
      pricing: "Custom pricing",
    },
    fakeRemovalService: 499,
    extraLocation: 299,
    currency: "GBP",
    region: "UK",
    convertCurrency: (text: string) => convertCurrencyText(text),
    formatPrice: formatPrice,
  }
}

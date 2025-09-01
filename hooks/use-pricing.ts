"use client"

interface PricingData {
  businessPlan: {
    monthly: string
    annual: string
    savings: string
    support: string
  }
  proFakeReviewPlan: {
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

function convertCurrencyText(text: string): string {
  return text // Always return original GBP text
}

export function usePricing(): PricingData {
  return {
    businessPlan: {
      monthly: "£299",
      annual: "£2,990", // Updated to new pricing
      savings: "20% off annual pricing", // Simplified savings text
      support: "Priority email support during business hours (within 48 hours).",
    },
    proFakeReviewPlan: {
      monthly: "£499",
      annual: "£4,990",
      savings: "20% off annual pricing", // Simplified savings text
      support: "Priority email support during business hours (within 24 hours).",
    },
    enterprisePlan: {
      pricing: "Custom pricing",
    },
    fakeRemovalService: "£499",
    extraLocation: "£299", // Updated extra location pricing from £149 to £299
    currency: "GBP",
    region: "UK",
    convertCurrency: (text: string) => convertCurrencyText(text),
  }
}

import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set")
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
})

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

// Product configurations
export const STRIPE_PRODUCTS = {
  business_monthly: {
    name: "Business Plan - Monthly",
    price: 29900, // £299.00 in pence
    interval: "month",
    description: "Complete reputation protection for single location businesses",
  },
  business_annual: {
    name: "Business Plan - Annual",
    price: 287040, // £299 * 12 * 0.8 (20% discount) in pence
    interval: "year",
    description: "Complete reputation protection for single location businesses (20% discount)",
  },
  pro_monthly: {
    name: "Pro / Fake Review Plan - Monthly",
    price: 49900, // £499.00 in pence
    interval: "month",
    description: "Advanced protection with fake review removal (12-month commitment)",
  },
  pro_annual: {
    name: "Pro / Fake Review Plan - Annual",
    price: 479040, // £499 * 12 * 0.8 (20% discount) in pence
    interval: "year",
    description: "Advanced protection with fake review removal (20% discount)",
  },
} as const

export type ProductKey = keyof typeof STRIPE_PRODUCTS

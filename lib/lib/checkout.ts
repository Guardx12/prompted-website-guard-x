import { loadStripe } from "@stripe/stripe-js"
import type { ProductKey } from "./stripe"

// Initialize Stripe with live publishable key
const stripePromise = loadStripe(
  "pk_live_51IIF50BJPvySS0BpSHFWHAZVl3mW3a42rC2ywTllBWE7c2W5Hh1MPA000yATA07OLG5Dl8hv5e72vWU4O9EAtcW500xvNGEIj8",
)

export async function redirectToCheckout(productKey: ProductKey) {
  try {
    const stripe = await stripePromise

    if (!stripe) {
      throw new Error("Stripe failed to initialize")
    }

    // Create checkout session
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productKey }),
    })

    const { sessionId, error } = await response.json()

    if (error) {
      throw new Error(error)
    }

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId,
    })

    if (result.error) {
      throw new Error(result.error.message)
    }
  } catch (error) {
    console.error("Error redirecting to checkout:", error)
    alert("There was an error processing your request. Please try again.")
  }
}

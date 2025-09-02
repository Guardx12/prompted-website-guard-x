import { type NextRequest, NextResponse } from "next/server"
import { stripe, STRIPE_PRODUCTS, type ProductKey } from "@/lib/stripe"

export async function POST(request: NextRequest) {
  try {
    const { productKey }: { productKey: ProductKey } = await request.json()

    if (!productKey || !STRIPE_PRODUCTS[productKey]) {
      return NextResponse.json({ error: "Invalid product key" }, { status: 400 })
    }

    const product = STRIPE_PRODUCTS[productKey]

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
            recurring: {
              interval: product.interval as "month" | "year",
            },
          },
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      customer_creation: "always",
      metadata: {
        product_key: productKey,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 })
  }
}

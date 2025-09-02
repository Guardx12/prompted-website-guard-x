"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { redirectToCheckout } from "@/lib/checkout"
import type { ProductKey } from "@/lib/stripe"

interface StripeCheckoutButtonProps {
  productKey: ProductKey
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function StripeCheckoutButton({
  productKey,
  children,
  className,
  size = "default",
  variant = "default",
}: StripeCheckoutButtonProps) {
  const handleClick = () => {
    redirectToCheckout(productKey)
  }

  return (
    <Button onClick={handleClick} className={className} size={size} variant={variant}>
      {children}
    </Button>
  )
}

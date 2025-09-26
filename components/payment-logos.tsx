import Image from "next/image"

interface PaymentLogosProps {
  className?: string
}

export function PaymentLogos({ className = "" }: PaymentLogosProps) {
  return (
    <div className={`flex items-center justify-center gap-4 mt-4 ${className}`}>
      <Image
        src="/images/stripe-logo-new.svg"
        alt="Powered by Stripe"
        width={120}
        height={40}
        className="h-10 w-auto object-contain"
      />
      <Image src="/images/visa-logo-new.png" alt="Visa" width={80} height={40} className="h-10 w-auto object-contain" />
      <Image
        src="/images/mastercard-logo-new.webp"
        alt="Mastercard"
        width={80}
        height={40}
        className="h-10 w-auto object-contain"
      />
    </div>
  )
}

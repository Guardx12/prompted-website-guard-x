import Image from "next/image"

interface CompanyLogosProps {
  className?: string
}

export function CompanyLogos({ className = "" }: CompanyLogosProps) {
  return (
    <div className={`flex items-center justify-center gap-8 mt-4 ${className}`}>
      <Image
        src="/images/facebook-logo.png"
        alt="Facebook"
        width={32}
        height={32}
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
      <Image
        src="/images/yelp-logo.png"
        alt="Yelp"
        width={64}
        height={32}
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
      <Image
        src="/images/trustpilot-logo-new.webp"
        alt="Trustpilot"
        width={32}
        height={32}
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
      <Image
        src="/images/tripadvisor-logo-new.png"
        alt="TripAdvisor"
        width={120}
        height={32}
        className="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

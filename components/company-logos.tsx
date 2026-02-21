import Image from "next/image"

interface CompanyLogosProps {
  className?: string
}

export function CompanyLogos({ className = "" }: CompanyLogosProps) {
  return (
    <div className={`flex items-center justify-center gap-8 mt-4 ${className}`}>
      <Image
        src="/images/facebook-logo.jpg"
        alt="Facebook"
        width={56}
        height={56}
        className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        onError={(e) => {
          console.log("[v0] Facebook logo failed to load, using placeholder")
          e.currentTarget.src = "/facebook-logo.png"
        }}
      />
      <Image
        src="/images/yelp-logo.jpg"
        alt="Yelp"
        width={112}
        height={56}
        className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        onError={(e) => {
          console.log("[v0] Yelp logo failed to load, using placeholder")
          e.currentTarget.src = "/yelp-logo.png"
        }}
      />
      <Image
        src="/images/trustpilot-logo-new.webp"
        alt="Trustpilot"
        width={56}
        height={56}
        className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        onError={(e) => {
          console.log("[v0] Trustpilot logo failed to load, using placeholder")
          e.currentTarget.src = "/trustpilot-logo.png"
        }}
      />
      <Image
        src="/images/tripadvisor-logo-new.jpg"
        alt="TripAdvisor"
        width={210}
        height={56}
        className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        onError={(e) => {
          console.log("[v0] TripAdvisor logo failed to load, using placeholder")
          e.currentTarget.src = "/tripadvisor-logo.png"
        }}
      />
    </div>
  )
}

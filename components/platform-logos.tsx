interface PlatformLogosProps {
  className?: string
}

export function PlatformLogos({ className = "" }: PlatformLogosProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-sm text-gray-500 mb-4">Monitoring reviews across all major platforms:</div>
      <div className="flex items-center justify-center gap-6 flex-wrap mb-4">
        <img
          src="/images/google-logo.jpg"
          alt="Google"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src="/images/facebook-logo.jpg"
          alt="Facebook"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity"
        />
        <img src="/images/yelp-logo.jpg" alt="Yelp" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img
          src="/images/trustpilot-logo.jpg"
          alt="Trustpilot"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src="/images/tripadvisor-logo.jpg"
          alt="TripAdvisor"
          className="h-8 opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="text-sm text-gray-500 opacity-60">+100 more platforms monitored automatically</div>
    </div>
  )
}

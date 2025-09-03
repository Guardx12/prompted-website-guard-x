import { Info } from "lucide-react"

export function PricingNote() {
  return (
    <div className="bg-card/30 border border-primary/20 rounded-lg p-6 mt-8">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="space-y-3 text-sm">
          <p className="text-foreground font-medium">
            <span className="text-primary font-semibold">Important:</span> Each plan includes monitoring for 1 location.
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p>
              • <strong className="text-foreground">Multiple locations:</strong> Select the total number of locations in
              the onboarding form after payment. Payment for extra locations will be collected automatically, and we
              will follow up via email to gather any necessary details for each location.
            </p>

            <p>
              • <strong className="text-foreground">Annual payments:</strong> Contact us at{" "}
              <a
                href="mailto:INFO@GUARDXNETWORK.COM"
                className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-colors"
              >
                INFO@GUARDXNETWORK.COM
              </a>{" "}
              to set up your annual plan.
            </p>
          </div>

          <p className="text-foreground font-medium text-center pt-2 border-t border-primary/10">
            We make the process simple and seamless – just get started and we'll handle the rest.
          </p>
        </div>
      </div>
    </div>
  )
}

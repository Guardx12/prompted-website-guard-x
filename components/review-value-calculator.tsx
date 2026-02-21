"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const noSpinnerStyles = `
  .no-spinner::-webkit-outer-spin-button,
  .no-spinner::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .no-spinner {
    -moz-appearance: textfield;
  }
`

export function ReviewValueCalculator() {
  const [averageJobValueStr, setAverageJobValueStr] = useState("800")
  const [jobsPerMonthStr, setJobsPerMonthStr] = useState("20")
  const [currentReviewsPerMonthStr, setCurrentReviewsPerMonthStr] = useState("5")
  const [multiplier, setMultiplier] = useState(4)
  const [timePeriod, setTimePeriod] = useState<"30" | "90" | "365">("90")

  const averageJobValue = averageJobValueStr === "" ? 0 : (Number.parseInt(averageJobValueStr, 10) || 0)
  const jobsPerMonth = jobsPerMonthStr === "" ? 0 : (Number.parseInt(jobsPerMonthStr, 10) || 0)
  const currentReviewsPerMonth = currentReviewsPerMonthStr === "" ? 0 : (Number.parseInt(currentReviewsPerMonthStr, 10) || 0)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getUpliftRate = (mult: number) => {
    return 0.10 + (mult - 3) * 0.05
  }

  const calculations = useMemo(() => {
    const monthsInPeriod = timePeriod === "30" ? 1 : timePeriod === "90" ? 3 : 12

    const baselineReviewsInPeriod = currentReviewsPerMonth * monthsInPeriod
    const newReviewsInPeriod = baselineReviewsInPeriod * multiplier
    const extraReviewsInPeriod = Math.max(newReviewsInPeriod - baselineReviewsInPeriod, 0)

    const upliftRate = getUpliftRate(multiplier)
    const extraJobsInPeriod = jobsPerMonth * monthsInPeriod * upliftRate
    const additionalRevenueInPeriod = extraJobsInPeriod * averageJobValue

    const valuePerExtraReview = additionalRevenueInPeriod / Math.max(extraReviewsInPeriod, 1)

    return {
      extraReviewsInPeriod: Math.round(extraReviewsInPeriod),
      additionalRevenueInPeriod: Math.round(additionalRevenueInPeriod),
      valuePerExtraReview: Math.round(valuePerExtraReview),
      upliftRate,
    }
  }, [averageJobValue, jobsPerMonth, currentReviewsPerMonth, multiplier, timePeriod])

  const handleInputChange = (value: string, setter: (val: string) => void) => {
    setter(value)
  }

  const handleInputBlur = (
    value: string,
    setter: (val: string) => void,
    min: number,
    max: number,
    defaultValue: number
  ) => {
    if (value === "") {
      setter(defaultValue.toString())
      return
    }
    const num = Number.parseInt(value, 10)
    if (Number.isNaN(num)) {
      setter(defaultValue.toString())
    } else {
      setter(Math.max(min, Math.min(max, num)).toString())
    }
  }

  const periodLabel = timePeriod === "30" ? "30 days" : timePeriod === "90" ? "90 days" : "12 months"

  return (
    <section className="py-16 bg-[#111827]">
      <style dangerouslySetInnerHTML={{ __html: noSpinnerStyles }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            See what improved Google visibility is worth to your business
          </h2>
          <p className="text-lg text-[#cbd5e1]">Based on how Google ranks local businesses and your numbers.</p>
        </div>

        <div className="rounded-xl border border-[#334155] bg-[#1e293b] p-6 md:p-8 shadow-lg">
            <p className="text-[#cbd5e1] font-medium mb-6 text-center">
              Adjust the numbers below to reflect your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Average job value */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  {"Average job value (\u00A3)"}
                </label>
                <input
                  type="number"
                  value={averageJobValueStr}
                  onChange={(e) => handleInputChange(e.target.value, setAverageJobValueStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setAverageJobValueStr, 50, 20000, 800)}
                  min={50}
                  max={20000}
                  className="no-spinner w-full px-4 py-3 border border-[#475569] rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 bg-[#0f172a] text-white placeholder:text-[#64748b]"
                />
              </div>

              {/* Jobs per month */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Jobs per month
                </label>
                <input
                  type="number"
                  value={jobsPerMonthStr}
                  onChange={(e) => handleInputChange(e.target.value, setJobsPerMonthStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setJobsPerMonthStr, 1, 500, 20)}
                  min={1}
                  max={500}
                  className="no-spinner w-full px-4 py-3 border border-[#475569] rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 bg-[#0f172a] text-white placeholder:text-[#64748b]"
                />
              </div>

              {/* Current reviews per month */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">
                  Current reviews per month
                </label>
                <input
                  type="number"
                  value={currentReviewsPerMonthStr}
                  onChange={(e) => handleInputChange(e.target.value, setCurrentReviewsPerMonthStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setCurrentReviewsPerMonthStr, 0, 300, 5)}
                  min={0}
                  max={300}
                  className="no-spinner w-full px-4 py-3 border border-[#475569] rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 bg-[#0f172a] text-white placeholder:text-[#64748b]"
                />
              </div>

              {/* Multiplier slider */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">
                  Expected activity multiplier: <span className="text-blue-400">{multiplier}x</span>
                </label>
                <Slider
                  value={[multiplier]}
                  onValueChange={(value) => setMultiplier(value[0])}
                  min={3}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-[#94a3b8] mt-1">
                  <span>3x</span>
                  <span>5x</span>
                </div>
                <p className="text-xs text-[#94a3b8] mt-2">
                  {"3-5x is the typical increase in Google profile activity when GuardX is active."}
                </p>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Assumed uplift in enquiries from improved visibility: {Math.round(calculations.upliftRate * 100)}% (conservative)
                </p>
              </div>

              {/* Time period */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-white mb-2">Time period</label>
                <Select value={timePeriod} onValueChange={(val) => setTimePeriod(val as "30" | "90" | "365")}>
                  <SelectTrigger className="w-full px-4 py-3 border border-[#475569] rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 bg-[#0f172a] text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1e293b] border-[#475569] text-white">
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="365">12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Output cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-5 text-center">
                <p className="text-sm text-[#cbd5e1] mb-1">Increased profile activity</p>
                <p className="text-sm text-[#94a3b8] mb-2">in {periodLabel}</p>
                <p className="text-3xl font-bold text-white">+{calculations.extraReviewsInPeriod}</p>
              </div>
              <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-5 text-center">
                <p className="text-sm text-[#cbd5e1] mb-1">Estimated additional revenue</p>
                <p className="text-sm text-[#94a3b8] mb-2">from improved visibility</p>
                <p className="text-3xl font-bold text-blue-400">{formatCurrency(calculations.additionalRevenueInPeriod)}</p>
              </div>
              <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-5 text-center">
                <p className="text-sm text-[#cbd5e1] mb-1">Value of each visibility</p>
                <p className="text-sm text-[#94a3b8] mb-2">signal to Google</p>
                <p className="text-3xl font-bold text-white">{formatCurrency(calculations.valuePerExtraReview)}</p>
              </div>
            </div>

            {/* What this means explanation block */}
            <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-5 mb-6">
              <p className="text-sm font-semibold text-white mb-3">Why visibility translates into revenue</p>
              <div className="text-sm text-[#cbd5e1] leading-relaxed space-y-3">
                <p>
                  {"Google ranks local businesses using three primary factors: relevance, distance, and prominence. Prominence is directly influenced by profile activity -- how often customers engage with your business and leave feedback."}
                </p>
                <p>
                  When your Google profile shows consistent, recent activity:
                </p>
                <p>
                  You appear higher and more often in Google Maps and local search results.
                </p>
                <p>
                  {"Customers see you as more established and trustworthy at the moment they're deciding who to contact."}
                </p>
                <p>
                  You receive more profile views, more clicks, and more enquiries than competitors who appear less active.
                </p>
                <p>
                  {"This calculator models the revenue impact of that improved visibility. It estimates how being chosen more often -- because you appear more active and trusted -- translates into additional customers over time, using your own numbers."}
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-4 mb-6">
              <p className="text-xs text-[#94a3b8] text-center">
                This calculator uses conservative modelling based on published research into how Google visibility affects local business enquiries and customer decision-making.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="/reputation-scorecard"
                className="inline-block bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg font-bold shadow-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                Get a free visibility scorecard
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

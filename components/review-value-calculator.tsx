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
  // Use string state to allow empty input while typing
  const [averageJobValueStr, setAverageJobValueStr] = useState("800")
  const [jobsPerMonthStr, setJobsPerMonthStr] = useState("20")
  const [currentReviewsPerMonthStr, setCurrentReviewsPerMonthStr] = useState("5")
  const [multiplier, setMultiplier] = useState(4)
  const [timePeriod, setTimePeriod] = useState<"30" | "90" | "365">("90")

  // Parse string to number for calculations, defaulting to 0 if empty/invalid
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

  // Calculate uplift rate based on multiplier (linear interpolation: 3x=10%, 4x=15%, 5x=20%)
  const getUpliftRate = (mult: number) => {
    // Linear interpolation: at 3 => 0.10, at 5 => 0.20
    // slope = (0.20 - 0.10) / (5 - 3) = 0.05 per unit
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

  // Allow free typing - just set the string value directly
  const handleInputChange = (value: string, setter: (val: string) => void) => {
    setter(value)
  }

  // Validate and clamp only on blur
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
    <section className="py-16 bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: noSpinnerStyles }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">
            See how much each extra Google review is worth to your business
          </h2>
          <p className="text-lg text-gray-600">Based on real-world averages and your numbers.</p>
        </div>

        <Card className="bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <p className="text-gray-700 font-medium mb-6 text-center">
              Adjust the numbers below to reflect your business.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Average job value */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Average job value (£)
                </label>
                <input
                  type="number"
                  value={averageJobValueStr}
                  onChange={(e) => handleInputChange(e.target.value, setAverageJobValueStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setAverageJobValueStr, 50, 20000, 800)}
                  min={50}
                  max={20000}
                  className="no-spinner w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-black"
                />
              </div>

              {/* Jobs per month */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Jobs per month
                </label>
                <input
                  type="number"
                  value={jobsPerMonthStr}
                  onChange={(e) => handleInputChange(e.target.value, setJobsPerMonthStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setJobsPerMonthStr, 1, 500, 20)}
                  min={1}
                  max={500}
                  className="no-spinner w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-black"
                />
              </div>

              {/* Current reviews per month */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-black mb-2">
                  Current reviews per month
                </label>
                <input
                  type="number"
                  value={currentReviewsPerMonthStr}
                  onChange={(e) => handleInputChange(e.target.value, setCurrentReviewsPerMonthStr)}
                  onBlur={(e) => handleInputBlur(e.target.value, setCurrentReviewsPerMonthStr, 0, 300, 5)}
                  min={0}
                  max={300}
                  className="no-spinner w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-black"
                />
              </div>

              {/* Multiplier slider */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-black mb-2">
                  Expected review growth multiplier: <span className="text-primary">{multiplier}x</span>
                </label>
                <Slider
                  value={[multiplier]}
                  onValueChange={(value) => setMultiplier(value[0])}
                  min={3}
                  max={5}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3x</span>
                  <span>5x</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  3–5× is the typical range we see when GuardX is switched on and review requests are sent consistently.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Assumed uplift in jobs: {Math.round(calculations.upliftRate * 100)}% (conservative)
                </p>
              </div>

              {/* Time period */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-black mb-2">Time period</label>
                <Select value={timePeriod} onValueChange={(val) => setTimePeriod(val as "30" | "90" | "365")}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-black bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="365">12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Output cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">Estimated extra reviews</p>
                <p className="text-sm text-gray-500 mb-2">in {periodLabel}</p>
                <p className="text-3xl font-bold text-black">{calculations.extraReviewsInPeriod}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">Estimated additional revenue</p>
                <p className="text-sm text-gray-500 mb-2">in {periodLabel}</p>
                <p className="text-3xl font-bold text-primary">{formatCurrency(calculations.additionalRevenueInPeriod)}</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-center">
                <p className="text-sm text-gray-600 mb-1">Estimated value per</p>
                <p className="text-sm text-gray-500 mb-2">extra review</p>
                <p className="text-3xl font-bold text-black">{formatCurrency(calculations.valuePerExtraReview)}</p>
              </div>
            </div>

            {/* What this means explanation block */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
              <p className="text-sm font-semibold text-black mb-3">What this means (based on how Google actually works)</p>
              <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                <p>
                  Google ranks local businesses using three primary factors: relevance, distance, and prominence. Google has publicly confirmed that reviews directly influence prominence, which affects how often and how high a business appears in Google Maps and local search results.
                </p>
                <p>
                  In real-world terms:
                </p>
                <p>
                  Businesses that increase the volume and frequency of their reviews consistently gain greater visibility in local results.
                </p>
                <p>
                  Higher visibility leads to more clicks, more calls, and more enquiries.
                </p>
                <p>
                  Moving just one or two positions higher in Google Maps materially increases the number of potential customers who see and choose a business.
                </p>
                <p>
                  The calculator above is built using real-world average visibility and customer behaviour patterns observed when businesses improve their review profiles. It models how that increased visibility typically translates into a small but meaningful increase in customers over time, using your own numbers.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-xs text-gray-600 text-center">
                This calculator is based on your business inputs and conservative modelling informed by widely published UK and global research on the impact of online reviews on consumer trust and purchasing decisions.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="#free-scorecard"
                className="inline-block bg-primary text-black hover:bg-[#e6c34a] px-8 py-4 text-lg font-bold shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-black/10"
              >
                Get a free review scorecard
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

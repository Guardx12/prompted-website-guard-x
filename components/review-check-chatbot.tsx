"use client"

import { useMemo, useRef, useState, useEffect } from "react"
import { Bot, ChevronRight, Loader2, Mail, MapPin, MessageCircle, PlayCircle, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const reviewOptions = ["0-20", "21-50", "51-100", "100+", "Not sure"]
const customerOptions = ["1-25", "26-50", "51-100", "100+", "Not sure"]
const deliveryOptions = ["Email + SMS", "SMS only", "Email only", "Not sure yet"]

type View = "intro" | "reviews" | "customers" | "pitch" | "demo" | "question" | "form" | "submitted"

function AssistantBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-lg">
        <Bot className="h-5 w-5" />
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-yellow-400/20 bg-neutral-900/90 px-4 py-3 text-sm leading-relaxed text-white shadow-lg">
        {children}
      </div>
    </div>
  )
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] rounded-2xl rounded-tr-md bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-3 text-sm font-medium text-black shadow-lg">
        {children}
      </div>
    </div>
  )
}

function ChoiceGrid({ options, onChoose }: { options: string[]; onChoose: (value: string) => void }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => (
        <Button
          key={option}
          type="button"
          onClick={() => onChoose(option)}
          className="h-auto justify-start whitespace-normal rounded-xl border border-yellow-400/30 bg-black/60 px-4 py-3 text-left text-white hover:bg-yellow-400 hover:text-black"
          variant="outline"
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

export default function ReviewCheckChatbot() {
  const [view, setView] = useState<View>("intro")
  const [standingAnswer, setStandingAnswer] = useState<string | null>(null)
  const [reviewAnswer, setReviewAnswer] = useState<string | null>(null)
  const [customerAnswer, setCustomerAnswer] = useState<string | null>(null)
  const [questionForm, setQuestionForm] = useState({ businessName: "", email: "", question: "" })
  const [setupForm, setSetupForm] = useState({
    businessName: "",
    email: "",
    website: "",
    address: "",
    city: "",
    postcode: "",
    method: "Email + SMS",
  })
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [submitError, setSubmitError] = useState("")
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [view, standingAnswer, reviewAnswer, customerAnswer, submitState])

  const summaryMessage = useMemo(() => {
    return [
      "New GuardX chatbot free-trial request",
      `Stand out answer: ${standingAnswer ?? "Not answered"}`,
      `Current review range: ${reviewAnswer ?? "Not answered"}`,
      `Approx monthly customers: ${customerAnswer ?? "Not answered"}`,
      `Preferred request method: ${setupForm.method}`,
      `Website URL: ${setupForm.website || "Not provided"}`,
      `Street address: ${setupForm.address}`,
      `City: ${setupForm.city}`,
      `Postcode: ${setupForm.postcode}`,
      "",
      "If SMS is included, send the separate verification/documents request by email.",
    ].join("\n")
  }, [standingAnswer, reviewAnswer, customerAnswer, setupForm])

  async function submitSetup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState("loading")
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: setupForm.businessName,
          email: setupForm.email,
          businessName: setupForm.businessName,
          message: summaryMessage,
        }),
      })

      const data = (await response.json()) as { success?: boolean; error?: string; details?: string }

      if (!response.ok || !data.success) {
        throw new Error(data.details || data.error || "Failed to send contact form email")
      }

      setSubmitState("success")
      setView("submitted")
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  async function submitQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitState("loading")
    setSubmitError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: questionForm.businessName || "GuardX chat visitor",
          email: questionForm.email,
          businessName: questionForm.businessName,
          message: [
            "Question from /check chatbot",
            `Stand out answer: ${standingAnswer ?? "Not answered"}`,
            `Current review range: ${reviewAnswer ?? "Not answered"}`,
            `Approx monthly customers: ${customerAnswer ?? "Not answered"}`,
            "",
            questionForm.question,
          ].join("\n"),
        }),
      })

      const data = (await response.json()) as { success?: boolean; error?: string; details?: string }
      if (!response.ok || !data.success) {
        throw new Error(data.details || data.error || "Failed to send contact form email")
      }
      setSubmitState("success")
      setView("submitted")
    } catch (error) {
      setSubmitState("error")
      setSubmitError(error instanceof Error ? error.message : "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-4 py-8 lg:flex-row lg:items-start lg:px-6">
        <div className="w-full lg:max-w-sm">
          <div className="sticky top-6 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300">
              <Sparkles className="h-3.5 w-3.5" /> Review Check
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white">GuardX review check</h1>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                A conversational walkthrough designed to show why active, well-managed reviews help your business look more trusted and competitive on Google.
              </p>
            </div>
            <Card className="border-yellow-400/20 bg-neutral-950 text-white shadow-2xl">
              <CardContent className="space-y-4 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-medium">30-day free trial</p>
                    <p className="text-sm text-neutral-300">Try the system first. Keep it only if it makes sense for your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-medium">Fully managed</p>
                    <p className="text-sm text-neutral-300">Branded review requests, replies handled, activity kept consistent, reports sent to you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="font-medium">Built for local competition</p>
                    <p className="text-sm text-neutral-300">The goal is simple: help your business look active, trusted and professional when nearby customers compare options.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex-1">
          <div className="overflow-hidden rounded-[28px] border border-yellow-400/20 bg-gradient-to-b from-neutral-950 to-neutral-900 shadow-[0_25px_80px_rgba(0,0,0,0.55)]">
            <div className="border-b border-yellow-400/10 bg-black/50 px-5 py-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-lg">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GuardX assistant</p>
                    <p className="text-sm text-neutral-400">A quick guided walkthrough</p>
                  </div>
                </div>
                <div className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Live now
                </div>
              </div>
            </div>

            <div className="max-h-[75vh] overflow-y-auto px-4 py-5 sm:px-6">
              <div className="space-y-4">
                <AssistantBubble>
                  <p>Hi 👋</p>
                  <p className="mt-2">
                    When customers find your business on Google, they usually compare a few local businesses.
                  </p>
                  <p className="mt-2 font-medium text-yellow-300">
                    Do you feel your business stands out as the most trusted option when they do that?
                  </p>
                </AssistantBubble>

                {standingAnswer && <UserBubble>{standingAnswer}</UserBubble>}

                {(view !== "intro") && (
                  <AssistantBubble>
                    <p className="font-medium text-yellow-300">Roughly how many Google reviews do you have at the moment?</p>
                  </AssistantBubble>
                )}

                {reviewAnswer && <UserBubble>{reviewAnswer}</UserBubble>}

                {(["customers", "pitch", "demo", "question", "form", "submitted"] as View[]).includes(view) && (
                  <AssistantBubble>
                    <p className="font-medium text-yellow-300">Roughly how many customers do you serve in a typical month?</p>
                  </AssistantBubble>
                )}

                {customerAnswer && <UserBubble>{customerAnswer}</UserBubble>}

                {(["pitch", "demo", "question", "form", "submitted"] as View[]).includes(view) && (
                  <>
                    <AssistantBubble>
                      <p>
                        When customers compare businesses on Google, the ones with the most recent reviews and active responses often appear more trusted and professional.
                      </p>
                      <p className="mt-2">That is usually the business that gets the enquiry first.</p>
                    </AssistantBubble>

                    <AssistantBubble>
                      <p>
                        Imagine 100 potential customers searching for your service this month.
                      </p>
                      <p className="mt-2">
                        Even if only a small portion choose a competitor because their profile looks more active, that can still mean missed enquiries without realising it.
                      </p>
                    </AssistantBubble>

                    <AssistantBubble>
                      <p>
                        GuardX is a fully managed review system designed to help your business look active, trusted and competitive.
                      </p>
                      <p className="mt-2">
                        We help you generate more genuine reviews, send branded review requests, reply to reviews for you, and keep your profile looking professional.
                      </p>
                    </AssistantBubble>

                    <AssistantBubble>
                      <p>
                        Businesses can run it by email, SMS, or both. Some use bulk uploads, some use a simple staff form, and many just send customers weekly so we handle the rest.
                      </p>
                      <p className="mt-2">
                        The goal is simple: keep your Google presence active enough that more customers feel confident choosing you.
                      </p>
                    </AssistantBubble>

                    <AssistantBubble>
                      <p className="font-medium text-yellow-300">You can try it free for 30 days.</p>
                      <p className="mt-2">
                        After that, most businesses invest around <span className="font-semibold text-yellow-300">£25 per week</span> for the fully managed system.
                      </p>
                    </AssistantBubble>
                  </>
                )}

                {(["demo", "submitted"] as View[]).includes(view) && (
                  <AssistantBubble>
                    <p className="mb-3 font-medium text-yellow-300">Here’s a quick example of the branded review request customers receive.</p>
                    <div className="overflow-hidden rounded-2xl border border-yellow-400/20 bg-black">
                      <div className="aspect-video">
                        <iframe
                          className="h-full w-full"
                          src="https://www.youtube.com/embed/2bWvt6aJQSk"
                          title="GuardX review request demo"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </AssistantBubble>
                )}

                {view === "question" && (
                  <AssistantBubble>
                    <div className="space-y-3">
                      <p className="font-medium text-yellow-300">Ask a question</p>
                      <form className="space-y-3" onSubmit={submitQuestion}>
                        <Input
                          required
                          value={questionForm.businessName}
                          onChange={(e) => setQuestionForm((prev) => ({ ...prev, businessName: e.target.value }))}
                          placeholder="Business name"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <Input
                          required
                          type="email"
                          value={questionForm.email}
                          onChange={(e) => setQuestionForm((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="Business email"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <Textarea
                          required
                          value={questionForm.question}
                          onChange={(e) => setQuestionForm((prev) => ({ ...prev, question: e.target.value }))}
                          placeholder="Type your question here"
                          className="min-h-28 border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        {submitState === "error" && <p className="text-sm text-red-400">{submitError}</p>}
                        <div className="flex flex-wrap gap-2">
                          <Button type="submit" disabled={submitState === "loading"} className="bg-yellow-400 text-black hover:bg-yellow-300">
                            {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Send question
                          </Button>
                          <Button type="button" variant="outline" onClick={() => setView("pitch")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                            Back
                          </Button>
                        </div>
                      </form>
                    </div>
                  </AssistantBubble>
                )}

                {view === "form" && (
                  <AssistantBubble>
                    <div className="space-y-3">
                      <p className="font-medium text-yellow-300">Great — let’s get your 30-day free trial ready.</p>
                      <p className="text-sm text-neutral-300">This takes about 30 seconds. If SMS is included, we’ll email the separate verification/documents step afterwards.</p>
                      <form className="grid gap-3" onSubmit={submitSetup}>
                        <Input
                          required
                          value={setupForm.businessName}
                          onChange={(e) => setSetupForm((prev) => ({ ...prev, businessName: e.target.value }))}
                          placeholder="Business name"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <Input
                          required
                          type="email"
                          value={setupForm.email}
                          onChange={(e) => setSetupForm((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="Business email"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <Input
                          value={setupForm.website}
                          onChange={(e) => setSetupForm((prev) => ({ ...prev, website: e.target.value }))}
                          placeholder="Website URL (optional)"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <Input
                          required
                          value={setupForm.address}
                          onChange={(e) => setSetupForm((prev) => ({ ...prev, address: e.target.value }))}
                          placeholder="Street address"
                          className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                        />
                        <div className="grid gap-3 sm:grid-cols-2">
                          <Input
                            required
                            value={setupForm.city}
                            onChange={(e) => setSetupForm((prev) => ({ ...prev, city: e.target.value }))}
                            placeholder="City"
                            className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                          />
                          <Input
                            required
                            value={setupForm.postcode}
                            onChange={(e) => setSetupForm((prev) => ({ ...prev, postcode: e.target.value }))}
                            placeholder="Postcode"
                            className="border-yellow-400/20 bg-black/60 text-white placeholder:text-neutral-500"
                          />
                        </div>
                        <div>
                          <p className="mb-2 text-sm text-neutral-300">How would you like review requests sent?</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {deliveryOptions.map((option) => {
                              const active = setupForm.method === option
                              return (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setSetupForm((prev) => ({ ...prev, method: option }))}
                                  className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                                    active
                                      ? "border-yellow-400 bg-yellow-400 text-black"
                                      : "border-yellow-400/20 bg-black/40 text-white hover:bg-black/70"
                                  }`}
                                >
                                  {option}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                        {submitState === "error" && <p className="text-sm text-red-400">{submitError}</p>}
                        <div className="flex flex-wrap gap-2 pt-1">
                          <Button type="submit" disabled={submitState === "loading"} className="bg-yellow-400 text-black hover:bg-yellow-300">
                            {submitState === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            Start 30-Day Free Trial
                          </Button>
                          <Button type="button" variant="outline" onClick={() => setView("pitch")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                            Back
                          </Button>
                        </div>
                      </form>
                    </div>
                  </AssistantBubble>
                )}

                {view === "submitted" && (
                  <AssistantBubble>
                    <p className="font-medium text-yellow-300">All set — thanks.</p>
                    <p className="mt-2">Your details have been sent through. We’ll follow up by email with the next step.</p>
                  </AssistantBubble>
                )}

                <div ref={chatEndRef} />
              </div>
            </div>

            <div className="border-t border-yellow-400/10 bg-black/40 p-4">
              {view === "intro" && (
                <ChoiceGrid
                  options={["Yes", "Not always", "Not sure"]}
                  onChoose={(value) => {
                    setStandingAnswer(value)
                    setView("reviews")
                  }}
                />
              )}

              {view === "reviews" && (
                <ChoiceGrid
                  options={reviewOptions}
                  onChoose={(value) => {
                    setReviewAnswer(value)
                    setView("customers")
                  }}
                />
              )}

              {view === "customers" && (
                <ChoiceGrid
                  options={customerOptions}
                  onChoose={(value) => {
                    setCustomerAnswer(value)
                    setView("pitch")
                  }}
                />
              )}

              {view === "pitch" && (
                <div className="grid gap-2 sm:grid-cols-3">
                  <Button type="button" onClick={() => setView("form")} className="bg-yellow-400 text-black hover:bg-yellow-300">
                    Start 30-Day Free Trial
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setView("demo")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                    <PlayCircle className="mr-2 h-4 w-4" />
                    See quick demo
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setView("question")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                    Ask a question
                  </Button>
                </div>
              )}

              {view === "demo" && (
                <div className="grid gap-2 sm:grid-cols-3">
                  <Button type="button" onClick={() => setView("form")} className="bg-yellow-400 text-black hover:bg-yellow-300">
                    Start 30-Day Free Trial
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setView("pitch")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                    Back
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setView("question")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                    Ask a question
                  </Button>
                </div>
              )}

              {view === "submitted" && (
                <Button type="button" variant="outline" onClick={() => window.location.assign("/")} className="border-yellow-400/20 bg-black/40 text-white hover:bg-black/70">
                  Back to GuardX <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

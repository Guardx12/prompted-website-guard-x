import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | George",
  description: "Common questions about George, how he works, and what he can do on your website.",
}

const faqs = [
  {
    question: "What is George?",
    answer: "George is a trained digital member of staff for your website. He talks to visitors, answers questions instantly, guides them toward the right next step, and helps turn more of your traffic into enquiries, bookings, and sales.",
  },
  {
    question: "Is George just a chatbot?",
    answer: "No. George is built around conversion intent, not generic chat. He is designed to guide visitors properly, reduce friction, and help people take action.",
  },
  {
    question: "Can George be tailored to my business?",
    answer: "Yes. George is tailored to your brand, your role, your services or products, your FAQs, and the key pages on your website so he feels relevant and useful to your visitors.",
  },
  {
    question: "Can George capture leads or enquiries?",
    answer: "Yes. George can collect details when a visitor wants to go ahead, request a quote, ask for a callback, make an enquiry, or take another commercial next step.",
  },
  {
    question: "Does George work 24/7?",
    answer: "Yes. George is there whenever your website is live, including outside working hours, during busy periods, and at times when you would otherwise miss opportunities.",
  },
  {
    question: "Do you need to rebuild my whole website to use George?",
    answer: "Not necessarily. George can be added to an existing website, or he can be built into a new website from the start depending on what is best for your setup.",
  },
]

export default function FAQPage() {
  return (
    <main className="premium-page-shell min-h-screen text-white">
      <Navigation />
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="mx-auto max-w-5xl">
          <div className="premium-glass rounded-[36px] p-8 sm:p-10 lg:p-14">
            <p className="premium-kicker">FAQ</p>
            <h1 className="premium-heading mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Questions about George</h1>
            <p className="premium-body mt-5 max-w-3xl text-base leading-7 sm:text-lg">
              Everything here comes back to one thing: George helps your website answer faster, guide better, and convert more of the traffic you already have.
            </p>
          </div>

          <div className="premium-card mt-8 rounded-[32px] p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-white/68">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="premium-glass mt-8 rounded-[32px] p-8 text-center sm:p-10">
            <h2 className="premium-heading text-3xl font-semibold">Want George tailored to your business?</h2>
            <p className="premium-body mx-auto mt-4 max-w-3xl text-base leading-7">
              The best way to scope George properly is to look at your website, your setup, and how your visitors currently buy, enquire, or book.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="premium-button-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition">
                Contact us
              </Link>
              <Link href="/meet-george" className="premium-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition">
                See George in action
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

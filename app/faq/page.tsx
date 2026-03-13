import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is an AI assistant built into your website. He answers customer questions, keeps visitors engaged, and helps capture enquiries automatically.",
  },
  {
    question: "How does George work?",
    answer:
      "George is trained around your business and website offer. Visitors can speak to him directly and he replies in a natural way, guiding them and helping move them towards an enquiry.",
  },
  {
    question: "How does George capture enquiries?",
    answer:
      "When a visitor is interested, George can collect contact details and pass the conversation through so you know who engaged and what they asked about.",
  },
  {
    question: "Do I need an existing website?",
    answer:
      "No. The current GuardX offer is a website with George built in, hosting included, and everything set up for you.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The current George Website offer is £99 per month, including the website, hosting, and George built into the site.",
  },
  {
    question: "Can George be trained for my business?",
    answer:
      "Yes. George can be tailored to your services, the questions customers ask most often, and the type of enquiries you want to capture.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-white">
      <Navigation />
      <section className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">FAQ</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Questions about George</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#94a3b8]">
              The most common questions business owners ask before putting George on their website.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-[#94a3b8]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 text-center text-[#94a3b8]">
            Want to hear George for yourself?{" "}
            <Link href="/meet-george" className="text-blue-300 hover:text-blue-200">
              Meet George
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

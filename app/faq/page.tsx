
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "What is George?",
    answer: "George is an AI assistant built into your website. He answers customer questions, keeps visitors engaged, and helps capture enquiries for your business 24/7.",
  },
  {
    question: "How does George work?",
    answer: "George is trained on your business information so he can answer the common questions your customers ask. When someone visits your website, they can speak to George and get answers instantly.",
  },
  {
    question: "How does George capture enquiries?",
    answer: "George can guide visitors through a conversation, collect their contact details, and send the enquiry through so you can follow up.",
  },
  {
    question: "Do I need an existing website?",
    answer: "No. The £99/month package includes the website build, hosting, and George built into it.",
  },
  {
    question: "Can George be trained for my business?",
    answer: "Yes. George can be tailored to your business, services, common questions, and the way you want enquiries handled.",
  },
  {
    question: "How much does it cost?",
    answer: "George Website is £99/month and includes your website, hosting, and George.",
  },
  {
    question: "Does review generation come with this?",
    answer: "No. Review generation stays as a separate service so the George offer stays simple and focused.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef4ff_0%,#f8fbff_35%,#ffffff_100%)]">
      <Navigation />
      <main>
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently asked questions about George</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about how George works, what is included, and how he helps turn your website into a 24/7 salesperson.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-slate-900 font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-10 text-center">
              <Link href="/meet-george" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors">
                Meet George
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

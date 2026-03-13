import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is an AI assistant built into your website. He can answer customer questions, explain your services, give contact details, and help capture enquiries automatically.",
  },
  {
    question: "What can visitors ask George?",
    answer:
      "Visitors can ask George about pricing, FAQs, contact details, how your business works, what services you offer, and anything else you train him on.",
  },
  {
    question: "Do I still need loads of pages on my website?",
    answer:
      "Not as many as a traditional site. George can take a lot of the repetitive answering work off the website, but we still keep the key information visible on the page for people who prefer to read.",
  },
  {
    question: "What is included in the £99 per month?",
    answer:
      "The package includes a fast modern website, George built into the site, hosting, enquiry capture, mobile-friendly design, and a solid SEO foundation setup.",
  },
  {
    question: "Do you do ongoing SEO?",
    answer:
      "No, not in this package. We build the website with the right structure, speed, indexing setup, and SEO foundation so your site is in a strong position from the start.",
  },
  {
    question: "Can George be trained for my business?",
    answer:
      "Yes. George can be trained around your business, your services, your pricing approach, your FAQs, and the kind of enquiries you want him to help capture.",
  },
  {
    question: "What happens when someone leaves their details?",
    answer:
      "George can collect details and pass the conversation through so you know who engaged and what they asked about.",
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[28px] border border-[#DADCE0] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 text-left shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">FAQ</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Questions about George.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
              The main idea is simple: George helps answer the questions visitors normally click around the site looking for.
            </p>
          </div>

          <div className="mt-8 rounded-[28px] border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#E5E7EB]">
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0F172A] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-[#475569]">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

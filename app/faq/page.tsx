import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ValueCallout } from "@/components/value-callout"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a conversational digital member of staff built into your website. He can answer visitor questions, explain your services, pricing, opening information or facilities, and help move people towards becoming an enquiry or booking. He is trained on your business so visitors get quick, useful answers instead of leaving the site.",
  },
  {
    question: "How does George help my business?",
    answer:
      "George keeps visitors engaged, gives them answers instantly, and helps turn more of your existing website traffic into enquiries or bookings instead of losing people who leave without taking action. For many businesses, one extra customer can more than cover the monthly cost.",
  },
  {
    question: "Does this work for attractions and parks?",
    answer:
      "Yes. George is especially useful for attractions, parks, visitor destinations, and venues where people have questions before they visit or book. He can answer questions about opening times, activities, facilities, pricing, rules, and what visitors need to know before coming.",
  },
  {
    question: "Can George be trained for my business?",
    answer:
      "Yes. George can be trained around your business, your services, your pricing approach, your FAQs, and the type of enquiries or bookings you want him to help capture.",
  },
  {
    question: "What can visitors ask George?",
    answer:
      "Visitors can ask George about pricing, FAQs, contact details, how your business works, what services you offer, opening information, facilities, and anything else you train him on.",
  },
  {
    question: "How much is George for small businesses?",
    answer:
      "George Starter is £49 per month per location, George Standard is £99 per month per location, and George Growth is £149 per month per location depending on conversation volume and how much usage you need.",
  },
  {
    question: "How much is George for attractions or higher-traffic websites?",
    answer:
      "For attractions and higher-traffic websites, George Pro typically sits between £149 and £299 per month depending on setup, usage, and how tailored the conversation flows need to be.",
  },
  {
    question: "Will George replace me or my team?",
    answer:
      "No. George handles the first layer of conversation so your visitors get instant answers and you do not lose opportunities when you are busy, closed, or dealing with other work.",
  },
  {
    question: "What happens when someone leaves their details?",
    answer:
      "George can collect enquiry details and pass the conversation through so you know who engaged, what they asked about, and what next step they were interested in.",
  },
  {
    question: "Do I still need website pages if I have George?",
    answer:
      "Yes, but not in the same way as a traditional website. You still want your key information on the page, while George handles a lot of the repetitive questions and helps visitors get answers faster.",
  },
  {
    question: "How quickly can this be set up?",
    answer:
      "Usually within a few days depending on the setup, how much information needs to be trained into George, and whether it is being added to an existing website or part of a new build.",
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
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Questions about George</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
              George helps answer the questions visitors normally click around the site looking for, and helps move them towards becoming an enquiry or booking.
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

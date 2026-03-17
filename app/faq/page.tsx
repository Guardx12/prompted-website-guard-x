import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a conversational digital member of staff built into your website. He speaks with visitors, answers questions about your services, pricing, facilities, and FAQs, and helps move people towards becoming an enquiry or booking.",
  },
  {
    question: "How does George help my business?",
    answer:
      "George helps by giving visitors instant answers instead of letting them leave your website. He keeps people engaged, explains what you do clearly, and helps turn more of your existing traffic into real enquiries or bookings.",
  },
  {
    question: "Can George be trained on my business?",
    answer:
      "Yes. George is trained on your business, services, pricing, facilities, common customer questions, and the information visitors usually need before taking the next step.",
  },
  {
    question: "Does this work for attractions as well as businesses?",
    answer:
      "Yes. George is especially effective for attractions, venues, and visitor-focused websites because visitors often have lots of questions before they book or visit. He can help with pricing, opening information, facilities, events, and planning a visit.",
  },
  {
    question: "What are the business pricing plans?",
    answer:
      "Business pricing starts at £99 per month per location for George Standard. George Growth is £149 per month per location, and George Pro is £199 per month per location depending on how much usage and enquiry potential you need.",
  },
  {
    question: "What is the pricing for attractions or higher-traffic websites?",
    answer:
      "For attractions and higher-traffic websites, George Pro+ typically sits between £199 and £499 per month depending on setup, traffic, and how tailored the conversation flows need to be.",
  },
  {
    question: "Why does George cost more for attractions or higher-traffic setups?",
    answer:
      "Because those websites usually need higher usage capacity, more tailored visitor flows, and more detailed training on pricing, facilities, events, bookings, and visitor questions. The value is also higher because even a small lift in conversions can make a noticeable difference to revenue.",
  },
  {
    question: "Will George replace me or my team?",
    answer:
      "No. George handles the first layer of conversation so your visitors get instant answers and you do not lose opportunities when you are busy, closed, or dealing with other work. He supports your team rather than replacing it.",
  },
  {
    question: "What happens when someone leaves their details?",
    answer:
      "George can collect enquiry details and pass the conversation through so you know who engaged, what they asked about, and what next step they were interested in.",
  },
  {
    question: "Do I still need website pages if I have George?",
    answer:
      "Yes. You still want the key information on the page, while George handles the repetitive questions and helps visitors get answers faster. The best setup is strong website pages with George built in to guide people.",
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
          <div className="rounded-[30px] border border-[#DCE6F8] bg-[linear-gradient(135deg,#0f172a_0%,#111827_42%,#1d4ed8_100%)] px-6 py-7 text-left shadow-[0_24px_80px_rgba(17,24,39,0.18)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#BFDBFE] sm:text-sm">FAQ</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Questions about George</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#DBEAFE] sm:text-base sm:leading-7">
              George helps answer the questions visitors normally click around the site looking for, and helps move them towards becoming an enquiry or booking.
            </p>
          </div>

          <div className="mt-8 rounded-[30px] border border-[#E5E7EB] bg-white p-4 shadow-sm sm:p-6">
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

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a trained digital member of staff built into your website. He talks to visitors, answers questions, explains services and pricing, and helps move more of your existing traffic towards becoming enquiries or bookings.",
  },
  {
    question: "How does George help my business?",
    answer:
      "George helps by giving visitors instant answers instead of letting them drift away. That means more people stay engaged on your site, understand what you do faster, and are more likely to enquire or book.",
  },
  {
    question: "Does this only work for local businesses?",
    answer:
      "No. George works well for local businesses, service businesses, trades, and also attractions, venues, and visitor-focused websites where customers usually have questions before taking the next step.",
  },
  {
    question: "How much is George for businesses?",
    answer:
      "George Standard is £99 per month per location, George Growth is £149 per month per location, and George Pro is £199 per month per location. Most businesses sit between £99 and £199 depending on setup and how much website traffic they have.",
  },
  {
    question: "How much is George for attractions or higher-traffic websites?",
    answer:
      "For attractions and higher-traffic websites, George Pro+ typically sits between £199 and £499 per month depending on setup, traffic, and how tailored the booking or enquiry flow needs to be.",
  },
  {
    question: "Will George replace me or my team?",
    answer:
      "No. George handles the first layer of conversation so visitors get instant answers and you do not lose opportunities when you are busy, closed, or dealing with other work.",
  },
  {
    question: "What happens when someone leaves their details?",
    answer:
      "George can collect enquiry details and pass the conversation through so you know who engaged, what they asked about, and what next step they were interested in.",
  },
  {
    question: "Can George be trained on my business?",
    answer:
      "Yes. George can be trained on your services, pricing, areas covered, facilities, FAQs, and the sort of questions customers or visitors ask all the time.",
  },
  {
    question: "How quickly can this be set up?",
    answer:
      "Usually within a few days depending on the setup, how much information needs to be trained into George, and whether he is being added to an existing website or part of a new build.",
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
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0F172A] hover:no-underline">{faq.question}</AccordionTrigger>
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

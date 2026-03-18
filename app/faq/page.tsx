import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a trained digital guide and member of staff built into your website. He helps visitors with three different kinds of directions — directions on your website, directions to your location, and directions around your site once they are there — while also helping them plan their visit, get answers instantly, move more of your existing traffic towards becoming bookings, enquiries, or on-site spend, and get more people through the gate while improving their experience on site.",
  },
  {
    question: "How does George help my business?",
    answer:
      "George helps by giving visitors instant answers and clear guidance instead of letting them drift away. That means more people stay engaged on your site, find the right page faster, arrive with more confidence, and are more likely to enquire or book.",
  },
  {
    question: "Does this only work for local businesses?",
    answer:
      "No. George works well for local businesses, service businesses, trades, and also attractions, venues, and visitor-focused websites where customers usually have questions before taking the next step.",
  },
  {
    question: "How does pricing work for businesses?",
    answer:
      "George is designed to be very affordable and to pay for itself quickly by helping you capture more enquiries and customers. The exact setup depends on your business, traffic, and how much you want George to handle, but the easiest way to judge it is to try it first.",
  },
  {
    question: "How does pricing work for attractions or higher-traffic websites?",
    answer:
      "For attractions and higher-traffic websites, George is set up around your visitor flow, traffic, and the amount of guidance or booking support you want him to handle. Because a small lift in bookings can make a noticeable difference, the best first step is a live trial rather than comparing numbers before you have seen him working on your site.",
  },
  {
    question: "Can I try George before deciding?",
    answer:
      "Yes. You can try George on your website for 7 days free so you can see how he performs with your real visitors, your real questions, and your real enquiry flow.",
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
              George helps visitors get answers quickly, feel guided instead of lost, and move towards booking, arriving confidently, and getting more from their visit.
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

          <div className="mt-8 rounded-[26px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-[#0F172A]">Try George on your website for 7 days free</h2>
            <p className="mt-3 text-base leading-7 text-[#475569]">The easiest way to understand the value is to see George talking to your real visitors on your real website.</p>
            <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-white">
                Start your free trial
              </Link>
              <Link href="/meet-george" className="cta-button-secondary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-[#0F172A]">
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

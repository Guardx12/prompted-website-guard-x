import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a trained digital guide and digital member of staff built into your website. He helps visitors plan their visit, get answers instantly, find the right page, get directions to your location, find their way around once they are there, and decide what to do next.",
  },
  {
    question: "What makes George different from a normal chatbot?",
    answer:
      "George is designed to guide people, not just answer questions. He can help with website directions, travel directions, and on-site directions, while also explaining what is available, suggesting next steps, and helping families get more out of their day.",
  },
  {
    question: "Can George help families and children?",
    answer:
      "Yes. George can be trained to speak in a more family-friendly way, make things easier for parents, and make the experience more fun for children. For attractions, parks, and family venues, that is one of the biggest opportunities.",
  },
  {
    question: "How does George help my business?",
    answer:
      "George helps by giving visitors instant answers and clear guidance instead of letting them drift away. That means more people stay engaged on your site, find the right page faster, arrive with more confidence, and are more likely to enquire, book, or spend more while they are there.",
  },
  {
    question: "Can George be used for attractions, holiday parks, and visitor destinations?",
    answer:
      "Yes. George is especially strong for attractions, holiday parks, campsites, venues, museums, and other visitor-focused businesses where people often need help before they arrive and while they are on site.",
  },
  {
    question: "Can George be trained on my business?",
    answer:
      "Yes. George can be trained on your services, pricing, layout, facilities, FAQs, attractions, and the sort of questions visitors ask all the time. He can also use selected pages on your website as a source of truth.",
  },
  {
    question: "Can George use live information like today’s events or timings?",
    answer:
      "Yes, when that information is provided clearly. A simple hidden update page on your website can be enough for George to use things like timings, daily notes, and key visitor updates without needing a full app.",
  },
  {
    question: "Will George replace me or my team?",
    answer:
      "No. George handles the first layer of guidance and conversation so visitors get help instantly and your staff are freed up from answering the same questions repeatedly.",
  },
  {
    question: "How does pricing work for attractions or higher-traffic websites?",
    answer:
      "For attractions and higher-traffic websites, George is set up around your visitor flow, traffic, and the amount of guidance you want him to handle. Because even a small lift in bookings or spend can make a noticeable difference, the best first step is usually a live trial.",
  },
  {
    question: "Can I try George before deciding?",
    answer:
      "Yes. You can try George on your website for 7 days free so you can see how he performs with your real visitors, your real questions, and your real enquiry flow.",
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

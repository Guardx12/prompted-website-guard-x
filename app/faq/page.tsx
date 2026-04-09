import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is George?",
    answer:
      "George is a 24/7 digital member of staff for your website. He speaks to visitors, answers questions, guides them towards the right next step, captures opportunities, and helps turn more of your website traffic into customers.",
  },
  {
    question: "What makes George different from a normal chatbot?",
    answer:
      "George is designed to guide and convert, not just respond. He is there to move conversations forward, reduce hesitation, and help people take action rather than just sending short generic answers back and forth.",
  },
  {
    question: "What kinds of businesses can George work for?",
    answer:
      "George can work across a wide range of businesses including service businesses, e-commerce brands, car dealerships, attractions, holiday parks, visitor venues, and other businesses that want their website to answer faster and convert better.",
  },
  {
    question: "Can George be trained on my business?",
    answer:
      "Yes. George can be tailored to your business, your services, your products, your pricing approach, your FAQs, and the key pages on your website. The goal is to make him sound relevant and useful to your visitors, not generic.",
  },
  {
    question: "Can George help with products as well as services?",
    answer:
      "Yes. George can help customers navigate products, narrow choices, answer buying questions, and guide people towards the right product or next step. For larger catalogues, George can also work alongside structured product data so he stays accurate at scale.",
  },
  {
    question: "Can George capture leads or enquiries?",
    answer:
      "Yes. George can be set up to collect details when a visitor wants to go ahead, request a quote, ask for a callback, make an enquiry, or take another commercial next step.",
  },
  {
    question: "Will George replace me or my team?",
    answer:
      "No. George handles the first layer of conversation so your visitors get help instantly and your team spends less time repeating the same answers. He supports your team rather than replacing it.",
  },
  {
    question: "Does George work 24/7?",
    answer:
      "Yes. George is there whenever your website is live, including outside working hours, during busy periods, and at times when you would otherwise miss opportunities.",
  },
  {
    question: "Do you need to rebuild my whole website to use George?",
    answer:
      "Not necessarily. George can be added to an existing website, or he can be built into a new website from the start depending on what is best for your setup.",
  },
  {
    question: "How do I find out if George is right for my business?",
    answer:
      "The best next step is to talk through your setup. Once we understand your website, your customer journey, and what visitors need help with, we can show you where George would create the most value.",
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
              Everything here comes back to one thing: George helps your website answer faster, guide better, and convert more of the traffic you already have.
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

          <div className="mt-8 rounded-[26px] border border-[#DBEAFE] bg-[linear-gradient(135deg,#EFF6FF_0%,#FFFFFF_100%)] p-6 text-center shadow-sm">
            <h2 className="text-2xl font-bold text-[#0F172A]">Want George tailored to your business?</h2>
            <p className="mt-3 text-base leading-7 text-[#475569]">The best way to scope George properly is to look at your website, your setup, and how your visitors currently buy, enquire, or book.</p>
            <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="cta-button-primary inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold text-white">
                Contact us
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

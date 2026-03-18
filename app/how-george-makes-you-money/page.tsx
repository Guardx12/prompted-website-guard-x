import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const bullets = [
  "Acts as a digital member of staff on your website",
  "Guides visitors before they arrive and while they’re in your park",
  "Helps customers plan their visit (tickets, timings, what to expect)",
  "Directs visitors straight to booking, tickets, and key pages",
  "Reduces friction before purchase, increasing conversions",
  "Answers common questions instantly, saving staff time",
  "Helps visitors find their way around the park",
  "Reduces confusion and “where do we go?” moments",
  "Suggests what to do next, improving the visitor experience",
  "Guides movement around the park to increase engagement with attractions",
  "Encourages visitors to explore more areas of the park",
  "Highlights key experiences so visitors don’t miss important attractions",
  "Shares interesting animal facts, enhancing the day out",
  "Keeps visitors engaged while they’re at exhibits",
  "Acts like a live guide, not just a static map or sign",
  "Suggests food and drink naturally, helping increase on-site spend",
  "Encourages well-timed breaks, improving customer satisfaction",
  "Adapts to where the visitor is and what they’re doing",
  "Responds in real time via voice or text",
  "Works as a constant support system throughout the visit",
  "Helps families make decisions faster and easier",
  "Improves overall customer experience and flow of the day",
  "Reduces pressure on staff answering repetitive questions",
  "Creates a more premium, modern experience for visitors",
  "Gives every visitor their own personal guide for the day",
  "Runs 24/7 without breaks, handling unlimited conversations",
  "Easy to access via website or QR code — no app required",
  "Can be tailored to your park, attractions, and layout",
  "Helps turn more visitors into happy, returning customers",
]

export default function HowGeorgeMakesYouMoneyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navigation />
      <section className="px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-4xl rounded-[30px] border border-[#DADCE0] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl">How George Makes You Money</h1>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            George isn’t just a feature — he actively improves visitor experience, increases engagement, and drives more revenue across your location.
          </p>
          <ul className="mt-8 space-y-4 text-lg leading-8 text-[#0F172A]">
            {bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}

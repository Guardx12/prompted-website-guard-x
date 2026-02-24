export type FAQ = { question: string; answer: string }

export function buildFaqSchema(url: string, faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

export function buildServiceSchema(opts: {
  serviceName: string
  description: string
  url: string
  areaServedName: string
  image?: string
}) {
  const { serviceName, description, url, areaServedName, image } = opts
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    areaServed: { "@type": "Place", name: areaServedName },
    provider: {
      "@type": "Organization",
      name: "GuardX",
      url: "https://www.guardxnetwork.com",
    },
    image: image ? [image] : undefined,
  }
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    // Next/React will escape the string correctly
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  } as const
}

// ---- Page-specific FAQ builders (deterministic, unique per slug) ----

function titleCase(s: string) {
  return s
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export function industryFaqs(industryName: string, slug: string): FAQ[] {
  const n = industryName
  const nice = titleCase(slug || "")
  const focus = n || nice || "your industry"

  // Keep answers concise, conversion + SEO aligned, and naturally different per slug.
  return [
    {
      question: `What does GuardX do for ${focus.toLowerCase()} businesses?`,
      answer:
        `We build fast, conversion-focused websites with an SEO-ready structure for ${focus.toLowerCase()} searches, then add an automated Google review system so your reputation keeps growing month after month.`,
    },
    {
      question: `Will this help me rank for “${focus.toLowerCase()} near me”?`,
      answer:
        `Yes — we structure your site around how customers search (service + location intent), strengthen trust signals (reviews, proof, FAQs), and make the mobile journey frictionless so you earn more clicks, calls and enquiries.`,
    },
    {
      question: `How quickly can I see results from reviews?`,
      answer:
        `Most businesses see review velocity improve quickly once the system is live. The compounding benefit is that more recent, high-quality reviews typically increase trust and improve conversion from both Maps and website visitors.`,
    },
    {
      question: `What needs to be on a top-ranking ${focus.toLowerCase()} website?`,
      answer:
        `Clear services, strong proof, fast mobile performance, and pages that match intent (e.g., core services + key locations). We also add conversion paths (tap-to-call, WhatsApp, quote forms) that make contacting you effortless.`,
    },
    {
      question: `Can you tailor the copy for ${focus.toLowerCase()} specifically?`,
      answer:
        `Yes — each industry page is written to your niche, with unique sections for objections, job types, and trust signals. We can also add dedicated service and location landing pages as you scale.`,
    },
  ]
}

export function locationFaqs(locationName: string, area: string): FAQ[] {
  const place = locationName || area || "your area"
  return [
    {
      question: `Do you work with businesses in ${place}?`,
      answer:
        `Yes — GuardX helps local service businesses in ${place} improve trust and conversions with a fast website, SEO foundations, and automated Google review growth.`,
    },
    {
      question: `How do you target searches in ${place}?`,
      answer:
        `We create a clear site structure for local intent (services + areas), write location-specific copy, add FAQs, and build internal links between related locations and industries to strengthen topical authority.`,
    },
    {
      question: `Will this help me get more enquiries from Google?`,
      answer:
        `That’s the goal — we focus on rankings and conversion: clearer next steps, stronger proof, better mobile speed, and more recent reviews so more visitors turn into calls and quote requests.`,
    },
    {
      question: `Can you create service pages for ${place}?`,
      answer:
        `Yes — we can create “service + ${place}” landing pages (web design, SEO foundation, review growth) and expand into job-type pages as needed.`,
    },
    {
      question: `What’s the best next step for a business in ${place}?`,
      answer:
        `Start by strengthening your Google profile trust signals (reviews and proof), then build a fast website structure that targets high-intent local searches. GuardX bundles these so progress compounds.`,
    },
  ]
}

export function solutionFaqs(serviceName: string, locationName: string): FAQ[] {
  const s = serviceName
  const l = locationName
  return [
    {
      question: `What’s included with ${s} in ${l}?`,
      answer:
        `A conversion-focused approach: clear messaging, trust blocks, fast mobile performance, and SEO foundations designed to rank for local intent searches — built for enquiries, not just a pretty page.`,
    },
    {
      question: `How do you make this page relevant to ${l}?`,
      answer:
        `We reference local intent, connect to related location and industry pages, and use structured data (FAQ + Service schema) so search engines understand the service and the area served.`,
    },
    {
      question: `Can this page help me rank without ads?`,
      answer:
        `Yes — we build these pages to capture organic demand. Ranking depends on competition and trust signals, but the structure and internal linking are designed for compounding gains over time.`,
    },
    {
      question: `Do you also help with Google reviews?`,
      answer:
        `Yes — GuardX can add an automated review generation system so you earn more recent reviews, which typically improves trust and conversion from both Maps and your website.`,
    },
    {
      question: `How do I get started?`,
      answer:
        `Use the contact page to request a quick scorecard. We’ll highlight quick wins, then build the pages and systems that move the needle for your area and niche.`,
    },
  ]
}

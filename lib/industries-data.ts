export interface Industry {
  slug: string
  name: string
  category: "Trades" | "Home Services" | "Property" | "Automotive" | "Health" | "Beauty" | "Hospitality"
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  challenges: string
  relatedIndustries: string[]
  relatedLocations: string[]
}

export const industries: Industry[] = [
  // ─── Trades ────────────────────────────────────────────────────────
    {
    slug: "builders",
    name: "Builders",
    category: "Trades",
    metaTitle: "Website Design for Builders | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for builders with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Builders",
    intro:
      "If you're a builders business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nLong decision cycles and big budgets. Your site must prove credibility fast. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for builders that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most builders websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for builders: use case studies, process, and clear next steps.",
    relatedIndustries: ["construction-companies", "scaffolders", "roofers", "plumbers", "electricians"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "birmingham"],
  },
    {
    slug: "construction-companies",
    name: "Construction Companies",
    category: "Trades",
    metaTitle: "Website Design for Construction Companies | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for construction companies with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Construction Companies",
    intro:
      "If you're a construction companies business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTender-style decisions. Buyers want capability statements and past project proof. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for construction companies that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most construction companies websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for construction companies: include sectors served, certifications, and a simple bid/quote pathway.",
    relatedIndustries: ["builders", "scaffolders", "roofers", "driveway-companies", "plumbers"],
    relatedLocations: ["london", "manchester", "birmingham", "leeds", "sussex"],
  },
    {
    slug: "scaffolders",
    name: "Scaffolders",
    category: "Trades",
    metaTitle: "Website Design for Scaffolders | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for scaffolders with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Scaffolders",
    intro:
      "If you're a scaffolders business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nOften B2B and repeat work. Buyers want reliability, compliance, and fast quotes. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for scaffolders that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most scaffolders websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for scaffolders: highlight compliance, insurance, turnaround times, and commercial capability.",
    relatedIndustries: ["builders", "construction-companies", "roofers", "painters-and-decorators"],
    relatedLocations: ["sussex", "london", "manchester", "brighton", "crawley"],
  },
    {
    slug: "flooring-shops",
    name: "Flooring Shops",
    category: "Trades",
    metaTitle: "Website Design for Flooring Shops | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for flooring shops with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Flooring Shops",
    intro:
      "If you're a flooring shops business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nVisual proof sells. Customers want to see finishes, ranges, and workmanship. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for flooring shops that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most flooring shops websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for flooring shops: use galleries, ranges, and clear booking/showroom CTAs.",
    relatedIndustries: ["carpet-cleaners", "builders", "painters-and-decorators", "estate-agents"],
    relatedLocations: ["brighton", "worthing", "london", "manchester", "horsham"],
  },
    {
    slug: "carpet-cleaners",
    name: "Carpet Cleaners",
    category: "Home Services",
    metaTitle: "Website Design for Carpet Cleaners | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for carpet cleaners with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Carpet Cleaners",
    intro:
      "If you're a carpet cleaners business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nBookings are convenience-driven. People want fast availability and instant contact. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for carpet cleaners that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most carpet cleaners websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for carpet cleaners: use booking CTAs, service area, and before/after photos.",
    relatedIndustries: ["cleaning-companies", "flooring-shops", "landscapers", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "worthing", "crawley"],
  },
    {
    slug: "driveway-companies",
    name: "Driveway Companies",
    category: "Trades",
    metaTitle: "Website Design for Driveway Companies | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for driveway companies with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Driveway Companies",
    intro:
      "If you're a driveway companies business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh-value outdoor projects. Buyers compare portfolios and guarantees. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for driveway companies that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most driveway companies websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for driveway companies: use portfolio, guarantees, and quote CTAs.",
    relatedIndustries: ["builders", "construction-companies", "landscapers", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "horsham", "worthing"],
  },
    {
    slug: "roofers",
    name: "Roofers",
    category: "Trades",
    metaTitle: "Website Design for Roofers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for roofers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Roofers",
    intro:
      "If you're a roofers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh-ticket, high-trust work. Prospects check examples and reviews before they enquire. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for roofers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most roofers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for roofers: use project galleries, finance/quote CTAs, and local service areas.",
    relatedIndustries: ["builders", "scaffolders", "construction-companies", "plumbers", "electricians"],
    relatedLocations: ["sussex", "brighton", "london", "crawley", "eastbourne"],
  },
    {
    slug: "plumbers",
    name: "Plumbers",
    category: "Trades",
    metaTitle: "Website Design for Plumbers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for plumbers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Plumbers",
    intro:
      "If you're a plumbers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nEmergency call-outs and speed matter. People search on mobile and choose quickly. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for plumbers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most plumbers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for plumbers: show clear services, response times, and easy click‑to‑call/WhatsApp.",
    relatedIndustries: ["electricians", "builders", "roofers", "locksmiths"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "crawley"],
  },
    {
    slug: "electricians",
    name: "Electricians",
    category: "Trades",
    metaTitle: "Website Design for Electricians | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for electricians with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Electricians",
    intro:
      "If you're a electricians business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTrust and safety are everything. Customers want reassurance before they invite someone into their home. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for electricians that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most electricians websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for electricians: display accreditations, clear pricing signals, and strong trust proof.",
    relatedIndustries: ["plumbers", "builders", "roofers", "locksmiths"],
    relatedLocations: ["brighton", "sussex", "london", "crawley", "horsham"],
  },
    {
    slug: "painters-and-decorators",
    name: "Painters and Decorators",
    category: "Trades",
    metaTitle: "Website Design for Painters and Decorators | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for painters and decorators with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Painters and Decorators",
    intro:
      "If you're a painters and decorators business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nPresentation and finish quality are key. Prospects want proof and professionalism. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for painters and decorators that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most painters and decorators websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for painters and decorators: use before/after galleries and clear service packages.",
    relatedIndustries: ["builders", "flooring-shops", "driveway-companies", "landscapers", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "london", "chichester", "eastbourne"],
  },

  // ─── Property ──────────────────────────────────────���───────────────
    {
    slug: "estate-agents",
    name: "Estate Agents",
    category: "Property",
    metaTitle: "Website Design for Estate Agents | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for estate agents with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Estate Agents",
    intro:
      "If you're a estate agents business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nLocal trust + brand credibility. Sellers compare valuation offers quickly. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for estate agents that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most estate agents websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for estate agents: use valuation CTAs, local area pages, and proof of results.",
    relatedIndustries: ["letting-agents", "builders", "cleaning-companies", "locksmiths"],
    relatedLocations: ["brighton", "london", "sussex", "horsham", "chichester"],
  },
    {
    slug: "letting-agents",
    name: "Letting Agents",
    category: "Property",
    metaTitle: "Website Design for Letting Agents | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for letting agents with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Letting Agents",
    intro:
      "If you're a letting agents business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nLandlords want low-void, compliant management. Messaging must be clear. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for letting agents that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most letting agents websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for letting agents: use service tiers, compliance info, and landlord CTAs.",
    relatedIndustries: ["estate-agents", "cleaning-companies", "locksmiths", "builders"],
    relatedLocations: ["brighton", "london", "sussex", "hove", "crawley"],
  },

  // ─── Hospitality ───────────────────────────────────────────────────
    {
    slug: "restaurants",
    name: "Restaurants",
    category: "Hospitality",
    metaTitle: "Website Design for Restaurants | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for restaurants with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Restaurants",
    intro:
      "If you're a restaurants business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nDecision is immediate. Menu, photos, hours, and booking must be effortless. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for restaurants that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most restaurants websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for restaurants: optimise for mobile, menus, bookings, and local intent.",
    relatedIndustries: ["cafes", "barbers", "salons", "cleaning-companies"],
    relatedLocations: ["brighton", "london", "sussex", "manchester", "edinburgh"],
  },
    {
    slug: "cafes",
    name: "Cafes",
    category: "Hospitality",
    metaTitle: "Website Design for Cafes | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for cafes with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Cafes",
    intro:
      "If you're a cafes business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nFootfall and 'near me' searches drive trade. Clarity and photos win. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for cafes that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most cafes websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for cafes: show offerings, opening times, and directions.",
    relatedIndustries: ["restaurants", "salons", "barbers", "cleaning-companies"],
    relatedLocations: ["brighton", "hove", "london", "lewes", "edinburgh"],
  },

  // ─── Automotive ────────────────────────────────────────────────────
    {
    slug: "garages",
    name: "Garages",
    category: "Automotive",
    metaTitle: "Website Design for Garages | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for garages with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Garages",
    intro:
      "If you're a garages business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTrust and transparency. People fear being ripped off. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for garages that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most garages websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for garages: show services, pricing cues, warranties, and reviews.",
    relatedIndustries: ["mechanics", "builders", "electricians", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "crawley", "london", "manchester"],
  },
    {
    slug: "mechanics",
    name: "Mechanics",
    category: "Automotive",
    metaTitle: "Website Design for Mechanics | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for mechanics with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Mechanics",
    intro:
      "If you're a mechanics business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSame as garages: trust + speed + clarity. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for mechanics that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most mechanics websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for mechanics: focus on services, booking, and trust proof.",
    relatedIndustries: ["garages", "builders", "electricians", "plumbers"],
    relatedLocations: ["sussex", "brighton", "crawley", "london", "birmingham"],
  },

  // ─── Home Services ─────────────────────────────────────────────────
    {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    category: "Home Services",
    metaTitle: "Website Design for Cleaning Companies | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for cleaning companies with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Cleaning Companies",
    intro:
      "If you're a cleaning companies business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nRecurring contracts and reliability matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for cleaning companies that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most cleaning companies websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for cleaning companies: use clear packages, coverage, and easy quote forms.",
    relatedIndustries: ["carpet-cleaners", "landscapers", "letting-agents", "estate-agents"],
    relatedLocations: ["sussex", "brighton", "london", "hove", "crawley"],
  },
    {
    slug: "landscapers",
    name: "Landscapers",
    category: "Home Services",
    metaTitle: "Website Design for Landscapers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for landscapers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Landscapers",
    intro:
      "If you're a landscapers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nVisual work: gardens sell with portfolios. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for landscapers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most landscapers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for landscapers: use project galleries, process, and seasonal CTAs.",
    relatedIndustries: ["tree-surgeons", "builders", "driveway-companies", "painters-and-decorators", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "horsham", "london", "chichester"],
  },
    {
    slug: "tree-surgeons",
    name: "Tree Surgeons",
    category: "Home Services",
    metaTitle: "Website Design for Tree Surgeons | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for tree surgeons with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Tree Surgeons",
    intro:
      "If you're a tree surgeons business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSafety, insurance, and quick response are key. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for tree surgeons that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most tree surgeons websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for tree surgeons: show qualifications, insurance, and emergency work.",
    relatedIndustries: ["landscapers", "builders", "roofers", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "crawley", "uckfield", "crowborough"],
  },
    {
    slug: "locksmiths",
    name: "Locksmiths",
    category: "Home Services",
    metaTitle: "Website Design for Locksmiths | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for locksmiths with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Locksmiths",
    intro:
      "If you're a locksmiths business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nUrgency and trust. Visitors choose in seconds. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for locksmiths that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most locksmiths websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for locksmiths: prioritise click-to-call, service areas, and trust signals.",
    relatedIndustries: ["plumbers", "electricians", "estate-agents", "letting-agents"],
    relatedLocations: ["sussex", "brighton", "london", "crawley", "hastings"],
  },

  // ─── Health ────────────────────────────────────────────────────────
    {
    slug: "dentists",
    name: "Dentists",
    category: "Health",
    metaTitle: "Website Design for Dentists | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for dentists with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Dentists",
    intro:
      "If you're a dentists business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHealthcare trust + compliance. Patients need reassurance. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for dentists that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most dentists websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for dentists: show treatments, pricing guidance, and easy booking.",
    relatedIndustries: ["physios", "gyms", "salons", "barbers"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "eastbourne"],
  },
    {
    slug: "physios",
    name: "Physios",
    category: "Health",
    metaTitle: "Website Design for Physios | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for physios with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Physios",
    intro:
      "If you're a physios business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nPatients want expertise and outcomes. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for physios that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most physios websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for physios: use conditions treated, practitioner bios, and booking CTAs.",
    relatedIndustries: ["dentists", "gyms", "salons"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "eastbourne"],
  },
    {
    slug: "gyms",
    name: "Gyms",
    category: "Health",
    metaTitle: "Website Design for Gyms | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for gyms with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Gyms",
    intro:
      "If you're a gyms business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nCompetition is high. Trials and results sell. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for gyms that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most gyms websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for gyms: use class/timetable info, offers, and membership CTAs.",
    relatedIndustries: ["physios", "dentists", "salons", "barbers"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "leeds"],
  },

  // ─── Beauty ────────────────────────────────────────────────────────
    {
    slug: "salons",
    name: "Salons",
    category: "Beauty",
    metaTitle: "Website Design for Salons | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for salons with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Salons",
    intro:
      "If you're a salons business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nStyle + trust. Instagram-style galleries and easy booking matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for salons that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most salons websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for salons: use booking, services, and strong visuals.",
    relatedIndustries: ["barbers", "dentists", "physios", "gyms"],
    relatedLocations: ["brighton", "sussex", "london", "hove", "eastbourne"],
  },
    {
    slug: "barbers",
    name: "Barbers",
    category: "Beauty",
    metaTitle: "Website Design for Barbers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for barbers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Barbers",
    intro:
      "If you're a barbers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nLocation + walk-in clarity. People want times, prices, and photos. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for barbers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most barbers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for barbers: show pricing, opening hours, and booking/walk-in info.",
    relatedIndustries: ["salons", "gyms", "restaurants", "cafes"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "hastings"],
  },

  // ─── Expanded Industries ───────────────────────────────────────────────
    {
    slug: "tilers",
    name: "Tilers",
    category: "Trades",
    metaTitle: "Website Design for Tilers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for tilers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Tilers",
    intro:
      "If you're a tilers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nCustomers judge by finish quality. Visual proof and precision messaging win enquiries. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for tilers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most tilers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for tilers: use galleries, materials, and clear quote process.",
    relatedIndustries: ["cleaning-companies", "gyms", "pest-control", "scaffolders", "waste-removal"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "kitchen-fitters",
    name: "Kitchen Fitters",
    category: "Trades",
    metaTitle: "Website Design for Kitchen Fitters | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for kitchen fitters with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Kitchen Fitters",
    intro:
      "If you're a kitchen fitters business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh-value decisions with long lead times. Buyers compare portfolios and process. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for kitchen fitters that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most kitchen fitters websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for kitchen fitters: show designs, install process, and finance/quote CTAs.",
    relatedIndustries: ["tyre-shops", "garages", "letting-agents", "cafes", "bathroom-fitters"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "bathroom-fitters",
    name: "Bathroom Fitters",
    category: "Trades",
    metaTitle: "Website Design for Bathroom Fitters | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for bathroom fitters with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Bathroom Fitters",
    intro:
      "If you're a bathroom fitters business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTrust, cleanliness, and project management matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for bathroom fitters that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most bathroom fitters websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for bathroom fitters: use before/after, timelines, and package clarity.",
    relatedIndustries: ["dental-implants", "locksmiths", "tyre-shops", "bricklayers", "opticians"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "plasterers",
    name: "Plasterers",
    category: "Trades",
    metaTitle: "Website Design for Plasterers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for plasterers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Plasterers",
    intro:
      "If you're a plasterers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nOften price-compared locally. A clear, professional site separates you from 'Facebook-only' competitors. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for plasterers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most plasterers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for plasterers: show services, coverage, and proof.",
    relatedIndustries: ["tilers", "removal-companies", "locksmiths", "builders", "cctv-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "bricklayers",
    name: "Bricklayers",
    category: "Trades",
    metaTitle: "Website Design for Bricklayers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for bricklayers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Bricklayers",
    intro:
      "If you're a bricklayers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nOften subcontracted; credibility and availability matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for bricklayers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most bricklayers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for bricklayers: show experience, scope, and fast enquiry routes.",
    relatedIndustries: ["builders", "glaziers", "plasterers", "physios", "garages"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "groundworks",
    name: "Groundworks Companies",
    category: "Trades",
    metaTitle: "Website Design for Groundworks Companies | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for groundworks companies with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Groundworks Companies",
    intro:
      "If you're a groundworks companies business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nOften searched by developers and homeowners planning projects. They want capability and proof. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for groundworks companies that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most groundworks companies websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for groundworks companies: show plant/equipment, completed projects, and service-area coverage.",
    relatedIndustries: ["tilers", "electricians", "car-dealers", "carpet-cleaners", "gyms"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "loft-conversions",
    name: "Loft Conversion Specialists",
    category: "Trades",
    metaTitle: "Website Design for Loft Conversion Specialists | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for loft conversion specialists with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Loft Conversion Specialists",
    intro:
      "If you're a loft conversion specialists business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nMajor home upgrade decisions. Prospects need reassurance, planning guidance, and proof. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for loft conversion specialists that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most loft conversion specialists websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for loft conversion specialists: use case studies, FAQs, and consultation CTAs.",
    relatedIndustries: ["roofers", "scaffolders", "electricians", "glaziers", "boiler-engineers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "window-fitters",
    name: "Window Fitters",
    category: "Home Services",
    metaTitle: "Website Design for Window Fitters | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for window fitters with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Window Fitters",
    intro:
      "If you're a window fitters business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSafety, guarantees, and compliance are key. Buyers want clarity fast. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for window fitters that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most window fitters websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for window fitters: show accreditations, guarantees, and quote funnels.",
    relatedIndustries: ["mot-centres", "physios", "groundworks", "bricklayers", "flooring-shops"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "glaziers",
    name: "Glaziers",
    category: "Home Services",
    metaTitle: "Website Design for Glaziers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for glaziers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Glaziers",
    intro:
      "If you're a glaziers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nOften urgent repairs plus planned replacements. Site must handle both intents. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for glaziers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most glaziers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for glaziers: use emergency call-outs plus product/service pages.",
    relatedIndustries: ["roofers", "estate-agents", "takeaways", "boiler-engineers", "tyre-shops"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "boiler-engineers",
    name: "Boiler Engineers",
    category: "Home Services",
    metaTitle: "Website Design for Boiler Engineers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for boiler engineers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Boiler Engineers",
    intro:
      "If you're a boiler engineers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nUrgency + trust + compliance. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for boiler engineers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most boiler engineers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for boiler engineers: highlight Gas Safe, quick response, and fixed-price cues.",
    relatedIndustries: ["removal-companies", "letting-agents", "barbers", "kitchen-fitters", "landscapers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "hvac-engineers",
    name: "HVAC Engineers",
    category: "Home Services",
    metaTitle: "Website Design for HVAC Engineers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for hvac engineers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for HVAC Engineers",
    intro:
      "If you're a hvac engineers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nCommercial + residential options; buyers need technical clarity. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for hvac engineers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most hvac engineers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for hvac engineers: show services, sectors, and easy quote paths.",
    relatedIndustries: ["pubs", "plumbers", "removal-companies", "massage-therapists", "locksmiths"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "pest-control",
    name: "Pest Control",
    category: "Home Services",
    metaTitle: "Website Design for Pest Control | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for pest control with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Pest Control",
    intro:
      "If you're a pest control business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nDiscreet, urgent, trust-based service. Visitors choose quickly. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for pest control that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most pest control websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for pest control: use clear services, response times, and discreet messaging.",
    relatedIndustries: ["flooring-shops", "massage-therapists", "tilers", "plumbers", "physios"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "window-cleaners",
    name: "Window Cleaners",
    category: "Home Services",
    metaTitle: "Website Design for Window Cleaners | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for window cleaners with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Window Cleaners",
    intro:
      "If you're a window cleaners business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nRecurring work; reliability and easy booking win. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for window cleaners that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most window cleaners websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for window cleaners: use packages, subscription options, and simple contact.",
    relatedIndustries: ["mot-centres", "takeaways", "chiropractors", "electricians", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "removal-companies",
    name: "Removal Companies",
    category: "Home Services",
    metaTitle: "Website Design for Removal Companies | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for removal companies with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Removal Companies",
    intro:
      "If you're a removal companies business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh-stress customers. They want reassurance, logistics, and clear pricing cues. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for removal companies that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most removal companies websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for removal companies: use checklists, insurance, and quote forms.",
    relatedIndustries: ["window-fitters", "chiropractors", "electricians", "opticians", "bricklayers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "waste-removal",
    name: "Waste Removal",
    category: "Home Services",
    metaTitle: "Website Design for Waste Removal | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for waste removal with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Waste Removal",
    intro:
      "If you're a waste removal business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nUrgent jobs; people compare speed and price. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for waste removal that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most waste removal websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for waste removal: use call-to-action, coverage, and pricing examples.",
    relatedIndustries: ["cleaning-companies", "tyre-shops", "scaffolders", "nail-salons", "security-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "skip-hire",
    name: "Skip Hire",
    category: "Home Services",
    metaTitle: "Website Design for Skip Hire | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for skip hire with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Skip Hire",
    intro:
      "If you're a skip hire business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nConvenience and compliance. People want sizes, prices, and delivery windows. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for skip hire that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most skip hire websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for skip hire: show skip sizes, permit info, and booking steps.",
    relatedIndustries: ["mot-centres", "dental-implants", "physios", "pubs", "landscapers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "security-installers",
    name: "Security Installers",
    category: "Home Services",
    metaTitle: "Website Design for Security Installers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for security installers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Security Installers",
    intro:
      "If you're a security installers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTrust and credibility. Clients need proof of quality and reliability. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for security installers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most security installers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for security installers: use certifications, case examples, and quote funnels.",
    relatedIndustries: ["beauty-clinics", "bathroom-fitters", "dentists", "tree-surgeons", "skip-hire"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "cctv-installers",
    name: "CCTV Installers",
    category: "Home Services",
    metaTitle: "Website Design for CCTV Installers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for cctv installers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for CCTV Installers",
    intro:
      "If you're a cctv installers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSecurity trust and technical clarity. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for cctv installers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most cctv installers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for cctv installers: explain packages, use cases, and quote funnels.",
    relatedIndustries: ["loft-conversions", "groundworks", "scaffolders", "security-installers", "tilers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "solar-installers",
    name: "Solar Installers",
    category: "Home Services",
    metaTitle: "Website Design for Solar Installers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for solar installers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Solar Installers",
    intro:
      "If you're a solar installers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nBig-ticket with research phase. Prospects want savings, proof, and finance info. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for solar installers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most solar installers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for solar installers: use calculators, case studies, and consultation CTAs.",
    relatedIndustries: ["scaffolders", "electricians", "security-installers", "dental-implants", "opticians"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "car-detailers",
    name: "Car Detailers",
    category: "Automotive",
    metaTitle: "Website Design for Car Detailers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for car detailers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Car Detailers",
    intro:
      "If you're a car detailers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nVisual transformation sells. Photos and packages convert. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for car detailers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most car detailers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for car detailers: use packages, galleries, and booking.",
    relatedIndustries: ["tyre-shops", "security-installers", "massage-therapists", "letting-agents", "carpet-cleaners"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "mot-centres",
    name: "MOT Centres",
    category: "Automotive",
    metaTitle: "Website Design for MOT Centres | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for mot centres with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for MOT Centres",
    intro:
      "If you're a mot centres business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nCompliance and booking convenience. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for mot centres that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most mot centres websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for mot centres: use booking CTAs, pricing, and trust proof.",
    relatedIndustries: ["plumbers", "care-homes", "glaziers", "massage-therapists", "nail-salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "tyre-shops",
    name: "Tyre Shops",
    category: "Automotive",
    metaTitle: "Website Design for Tyre Shops | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for tyre shops with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Tyre Shops",
    intro:
      "If you're a tyre shops business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSpeed and price sensitivity. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for tyre shops that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most tyre shops websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for tyre shops: show tyre services, same-day, and call-to-book.",
    relatedIndustries: ["car-dealers", "window-fitters", "estate-agents", "kitchen-fitters", "restaurants"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "car-dealers",
    name: "Car Dealers",
    category: "Automotive",
    metaTitle: "Website Design for Car Dealers | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for car dealers with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Car Dealers",
    intro:
      "If you're a car dealers business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nInventory, finance, and trust. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for car dealers that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most car dealers websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for car dealers: make browsing easy and promote finance/part-ex.",
    relatedIndustries: ["window-fitters", "boiler-engineers", "plumbers", "electricians", "locksmiths"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "hotels",
    name: "Hotels",
    category: "Hospitality",
    metaTitle: "Website Design for Hotels | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for hotels with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Hotels",
    intro:
      "If you're a hotels business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nBookings depend on photos, reviews, and frictionless booking. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for hotels that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most hotels websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for hotels: optimise for mobile, booking links, and local attractions.",
    relatedIndustries: ["gyms", "letting-agents", "cafes", "solar-installers", "tree-surgeons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "pubs",
    name: "Pubs",
    category: "Hospitality",
    metaTitle: "Website Design for Pubs | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for pubs with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Pubs",
    intro:
      "If you're a pubs business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nMenus, events, and opening times drive footfall. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for pubs that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most pubs websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for pubs: show food/drink menus, events, and directions.",
    relatedIndustries: ["restaurants", "waste-removal", "driveway-companies", "barbers", "window-cleaners"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "takeaways",
    name: "Takeaways",
    category: "Hospitality",
    metaTitle: "Website Design for Takeaways | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for takeaways with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Takeaways",
    intro:
      "If you're a takeaways business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nSpeed and ordering UX. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for takeaways that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most takeaways websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for takeaways: prioritise menu, ordering links, and local SEO.",
    relatedIndustries: ["locksmiths", "barbers", "loft-conversions", "flooring-shops", "mot-centres"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "vets",
    name: "Vets",
    category: "Health",
    metaTitle: "Website Design for Vets | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for vets with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Vets",
    intro:
      "If you're a vets business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHealthcare trust. Owners want reassurance and easy booking. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for vets that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most vets websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for vets: show services, emergency info, and team bios.",
    relatedIndustries: ["tree-surgeons", "cafes", "beauty-clinics", "waste-removal", "loft-conversions"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "chiropractors",
    name: "Chiropractors",
    category: "Health",
    metaTitle: "Website Design for Chiropractors | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for chiropractors with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Chiropractors",
    intro:
      "If you're a chiropractors business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nTrust + outcomes. Patients want to know you can help their specific issue. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for chiropractors that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most chiropractors websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for chiropractors: use conditions treated, testimonials, and booking.",
    relatedIndustries: ["carpet-cleaners", "locksmiths", "car-dealers", "dental-implants", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "opticians",
    name: "Opticians",
    category: "Health",
    metaTitle: "Website Design for Opticians | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for opticians with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Opticians",
    intro:
      "If you're a opticians business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nLocal convenience + clinical trust. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for opticians that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most opticians websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for opticians: show services, booking, and product ranges.",
    relatedIndustries: ["massage-therapists", "waste-removal", "pubs", "removal-companies", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "care-homes",
    name: "Care Homes",
    category: "Health",
    metaTitle: "Website Design for Care Homes | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for care homes with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Care Homes",
    intro:
      "If you're a care homes business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHighest trust stakes. Families need reassurance, transparency, and tours. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for care homes that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most care homes websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for care homes: use facility details, care standards, and enquiry pathways.",
    relatedIndustries: ["solar-installers", "dentists", "window-fitters", "opticians", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "beauty-clinics",
    name: "Beauty Clinics",
    category: "Beauty",
    metaTitle: "Website Design for Beauty Clinics | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for beauty clinics with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Beauty Clinics",
    intro:
      "If you're a beauty clinics business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh competition. Authority, safety, and results matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for beauty clinics that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most beauty clinics websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for beauty clinics: show treatments, credentials, and booking.",
    relatedIndustries: ["barbers", "construction-companies", "tree-surgeons", "massage-therapists", "plasterers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "nail-salons",
    name: "Nail Salons",
    category: "Beauty",
    metaTitle: "Website Design for Nail Salons | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for nail salons with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Nail Salons",
    intro:
      "If you're a nail salons business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nStyle + trust. Instagram-style galleries and easy booking matter. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for nail salons that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most nail salons websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for nail salons: use booking, services, and strong visuals.",
    relatedIndustries: ["flooring-shops", "letting-agents", "estate-agents", "barbers", "cctv-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "massage-therapists",
    name: "Massage Therapists",
    category: "Beauty",
    metaTitle: "Website Design for Massage Therapists | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for massage therapists with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Massage Therapists",
    intro:
      "If you're a massage therapists business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nClients want calm, credibility, and easy booking. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for massage therapists that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most massage therapists websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for massage therapists: use services, pricing, and booking.",
    relatedIndustries: ["loft-conversions", "removal-companies", "glaziers", "scaffolders", "garages"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

    {
    slug: "dental-implants",
    name: "Dental Implant Clinics",
    category: "Health",
    metaTitle: "Website Design for Dental Implant Clinics | SEO Foundation Included | GuardX",
    metaDescription:
      "Modern, fast website design for dental implant clinics with an SEO foundation built in. Convert more visitors into enquiries and show up for local searches.",
    h1: "Website Design & SEO Foundation for Dental Implant Clinics",
    intro:
      "If you're a dental implant clinics business, your website usually decides whether a visitor becomes an enquiry. People land on your site from Google, compare a few options, and make a quick judgement on trust, quality and clarity.\n\nHigh-value medical decision. Education and trust convert. That means your site needs to load fast on mobile, explain what you do in plain English, and make it effortless to contact you.\n\nGuardX builds modern websites for dental implant clinics that are designed to convert — with the SEO foundations included on our Professional tier (clean page structure, sensible internal linking, metadata, and performance).\n\nOptional add-on: once your new site is live, we can also set up automated review requests to help you build steady Google review momentum.",
    challenges:
      "Most dental implant clinics websites fail for simple reasons: slow load times, unclear services, thin pages that don't target the areas you work in, and no clear next step for the visitor. We fix the fundamentals — and then we lean into what matters for dental implant clinics: use detailed treatment pages, finance, and consultation CTAs.",
    relatedIndustries: ["garages", "vets", "boiler-engineers", "mot-centres", "driveway-companies"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug)
}

export function getIndustriesByCategory(category: Industry["category"]): Industry[] {
  return industries.filter((i) => i.category === category)
}

export const industryCategories: Industry["category"][] = [
  "Trades",
  "Home Services",
  "Property",
  "Automotive",
  "Health",
  "Beauty",
  "Hospitality",
]

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
    metaTitle: "GuardX for Builders — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps builders collect more Google reviews automatically. Build trust with homeowners, rank higher in local search, and win more jobs with a five-star reputation.",
    h1: "Web Design, SEO & Review Generation for Builders",
    intro:
      "As a builder, your reputation is your business. Homeowners and commercial clients check Google reviews before choosing who to trust with their property. GuardX automates the review collection process, so every completed project has the chance to generate a five-star review that wins you more work.\n\nOur email and SMS system sends personalised review requests to your clients after every job, capturing their satisfaction while it is fresh. No awkward conversations, no chasing — just a steady stream of genuine reviews that grow your reputation.",
    challenges:
      "Builders often struggle to collect reviews because projects can last weeks or months, and asking for feedback feels uncomfortable after completing physical work. Many builders have hundreds of satisfied customers but only a handful of reviews. This gap between actual quality and online visibility costs real jobs, especially when competitors with more reviews appear higher in search results.",
    relatedIndustries: ["construction-companies", "scaffolders", "roofers", "plumbers", "electricians"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "birmingham"],
  },
  {
    slug: "construction-companies",
    name: "Construction Companies",
    category: "Trades",
    metaTitle: "GuardX for Construction Companies — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps construction companies build five-star Google reputations. Automated review requests that win client trust and generate more project enquiries.",
    h1: "Web Design, SEO & Review Generation for Construction Companies",
    intro:
      "Construction companies handle large-scale projects where trust and credibility are paramount. Clients making significant investments want to see proof that your company delivers. GuardX automates your Google review collection, ensuring your online reputation reflects the scale and quality of your work.\n\nOur system sends personalised review requests at project milestones or completion, making it easy for commercial and residential clients alike to share their experience. A growing review profile positions your company as the trusted choice for future projects.",
    challenges:
      "Construction companies face unique review challenges: projects are long-term, clients may be developers or businesses rather than individuals, and the review ask often falls through the cracks amid handovers and snag lists. Without a systematic approach, construction firms miss out on the social proof that drives new enquiries and tender opportunities.",
    relatedIndustries: ["builders", "scaffolders", "roofers", "driveway-companies", "plumbers"],
    relatedLocations: ["london", "manchester", "birmingham", "leeds", "sussex"],
  },
  {
    slug: "scaffolders",
    name: "Scaffolders",
    category: "Trades",
    metaTitle: "GuardX for Scaffolders — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps scaffolding companies collect more Google reviews. Build trust with contractors and homeowners, improve local visibility, and win more work.",
    h1: "Web Design, SEO & Review Generation for Scaffolders",
    intro:
      "Scaffolding companies work behind the scenes on many building projects, but your Google reviews are what make you visible to new clients. Whether you serve builders, homeowners, or commercial developers, GuardX automates review collection so your reputation grows with every job.\n\nOur email and SMS system sends personalised review requests to your clients after each project, ensuring the quality of your service is captured in five-star reviews that bring in new business.",
    challenges:
      "Scaffolders often work as subcontractors, making it harder to collect reviews directly from end clients. The nature of the work — temporary structures that get removed — means the scaffolding company can be forgotten once the project moves on. GuardX ensures your contribution is recognised with visible Google reviews.",
    relatedIndustries: ["builders", "construction-companies", "roofers", "painters-and-decorators"],
    relatedLocations: ["sussex", "london", "manchester", "brighton", "crawley"],
  },
  {
    slug: "flooring-shops",
    name: "Flooring Shops",
    category: "Trades",
    metaTitle: "GuardX for Flooring Shops — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps flooring shops and fitters collect more Google reviews automatically. Build trust, improve local rankings, and attract more customers.",
    h1: "Web Design, SEO & Review Generation for Flooring Shops",
    intro:
      "Flooring shops and installers rely on trust and visual proof of quality. Customers want to see that others have had a great experience before committing to a purchase and installation. GuardX automates your Google review collection, turning every happy customer into a visible endorsement of your work.\n\nOur system sends personalised review requests after installation or purchase, ensuring customers share their satisfaction when it is highest. A strong review profile drives showroom visits and installation bookings.",
    challenges:
      "Flooring businesses often miss review opportunities because the purchase-to-installation timeline can stretch over weeks. By the time the floor is laid, the initial excitement has faded and customers forget to leave feedback. GuardX captures that satisfaction at the right moment with timely, automated requests.",
    relatedIndustries: ["carpet-cleaners", "builders", "painters-and-decorators", "estate-agents"],
    relatedLocations: ["brighton", "worthing", "london", "manchester", "horsham"],
  },
  {
    slug: "carpet-cleaners",
    name: "Carpet Cleaners",
    category: "Home Services",
    metaTitle: "GuardX for Carpet Cleaners — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps carpet cleaning businesses collect more Google reviews. Automated requests that build trust, improve rankings, and fill your diary with bookings.",
    h1: "Web Design, SEO & Review Generation for Carpet Cleaners",
    intro:
      "Carpet cleaning is a service where customers see immediate, visible results — which makes it perfect for generating enthusiastic Google reviews. GuardX automates the process, sending personalised review requests right after each clean when customers are most impressed with the transformation.\n\nOur email and SMS system handles everything, turning that 'wow moment' into a five-star Google review that attracts new customers and keeps your diary full.",
    challenges:
      "Carpet cleaners often work alone or in small teams, making it difficult to manage review requests alongside the physical demands of the job. Many customers are thrilled with the results but simply forget to leave a review. Without automation, this positive feedback is lost. GuardX captures it effortlessly.",
    relatedIndustries: ["cleaning-companies", "flooring-shops", "landscapers", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "worthing", "crawley"],
  },
  {
    slug: "driveway-companies",
    name: "Driveway Companies",
    category: "Trades",
    metaTitle: "GuardX for Driveway Companies — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps driveway companies build five-star Google reputations. Automated review requests that win homeowner trust and generate more project enquiries.",
    h1: "Web Design, SEO & Review Generation for Driveway Companies",
    intro:
      "Driveway installations are high-value projects where homeowners do extensive research before choosing a company. Your Google reviews are one of the first things they check. GuardX automates review collection so every completed driveway can generate a five-star review that wins you the next job.\n\nOur system sends personalised email and SMS requests after project completion, making it easy for satisfied homeowners to share their experience. A strong review profile means more enquiries, more quotes, and more projects.",
    challenges:
      "Driveway companies face a common trades challenge: the work speaks for itself, but busy homeowners rarely think to leave a review unless prompted. Projects are also seasonal, meaning review collection needs to be consistent during peak periods to sustain visibility year-round.",
    relatedIndustries: ["builders", "construction-companies", "landscapers", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "horsham", "worthing"],
  },
  {
    slug: "roofers",
    name: "Roofers",
    category: "Trades",
    metaTitle: "GuardX for Roofers — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps roofing companies collect more Google reviews automatically. Build homeowner trust, rank higher in search, and win more roofing contracts.",
    h1: "Web Design, SEO & Review Generation for Roofers",
    intro:
      "Roofing is one of the trades where trust matters most — homeowners are inviting you to work on one of the most critical parts of their property. A strong Google review profile signals that you are reliable, skilled, and trustworthy. GuardX automates the review collection process so your reputation grows with every job.\n\nOur personalised email and SMS review requests are sent after every completed project, ensuring satisfied customers have an easy way to share their experience. More five-star reviews mean more visibility and more jobs.",
    challenges:
      "Roofers face particular trust challenges because the work is difficult for homeowners to inspect themselves. Customers rely heavily on reviews and recommendations when choosing a roofer. Yet many roofing companies have few reviews because asking feels awkward after completing a job. GuardX removes that friction entirely.",
    relatedIndustries: ["builders", "scaffolders", "construction-companies", "plumbers", "electricians"],
    relatedLocations: ["sussex", "brighton", "london", "crawley", "eastbourne"],
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    category: "Trades",
    metaTitle: "GuardX for Plumbers — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps plumbers collect more Google reviews automatically. Build trust, rank higher in local search, and get more callouts with a five-star reputation.",
    h1: "Web Design, SEO & Review Generation for Plumbers",
    intro:
      "Plumbing is an essential service where customers need to make fast decisions, often in emergencies. When someone searches for a plumber on Google, your reviews are the deciding factor. GuardX automates the review process so every completed job has the opportunity to generate a five-star review.\n\nOur system sends personalised email and SMS review requests immediately after each job, capturing customer satisfaction while it is fresh. The result: a growing Google profile that keeps your phone ringing.",
    challenges:
      "Plumbers handle multiple jobs daily, making manual review requests impractical. Emergency callouts mean customers are grateful in the moment but quickly move on. Without an automated system, this gratitude rarely translates into visible online reviews. GuardX ensures it does.",
    relatedIndustries: ["electricians", "builders", "roofers", "locksmiths"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "crawley"],
  },
  {
    slug: "electricians",
    name: "Electricians",
    category: "Trades",
    metaTitle: "GuardX for Electricians — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps electricians build five-star Google reputations automatically. More reviews mean more trust, higher rankings, and more work coming in.",
    h1: "Web Design, SEO & Review Generation for Electricians",
    intro:
      "Electricians handle critical work in homes and businesses, and customers want reassurance that they are hiring someone competent and trustworthy. Your Google reviews provide that reassurance. GuardX automates review collection so your online reputation grows alongside your business.\n\nOur email and SMS system sends personalised review requests after every job, from small domestic fixes to large commercial installations. A consistent flow of five-star reviews keeps you visible and trusted in local search.",
    challenges:
      "Electricians are busy professionals who complete multiple jobs per day. Finding time to ask for reviews is unrealistic, and many customers do not think to leave one unless prompted. This creates a gap between the quality of work delivered and the reviews visible online. GuardX closes that gap automatically.",
    relatedIndustries: ["plumbers", "builders", "roofers", "locksmiths"],
    relatedLocations: ["brighton", "sussex", "london", "crawley", "horsham"],
  },
  {
    slug: "painters-and-decorators",
    name: "Painters and Decorators",
    category: "Trades",
    metaTitle: "GuardX for Painters and Decorators — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps painters and decorators collect Google reviews automatically. Showcase your craftsmanship, build trust, and win more decorating contracts.",
    h1: "Web Design, SEO & Review Generation for Painters and Decorators",
    intro:
      "Painting and decorating is a visual trade where the results speak for themselves — but potential customers need to find you first. A strong Google review profile is the best way to showcase your reputation and attract new clients. GuardX automates the review process so every transformation you create can be celebrated online.\n\nOur system sends personalised email and SMS review requests after every completed project, making it easy for delighted customers to share their experience. Over time, these reviews build a portfolio of trust that wins new work.",
    challenges:
      "Painters and decorators often work on projects that leave customers impressed but they rarely think to leave a review. The visual transformation is admired privately, but without prompting, it does not make its way onto Google. GuardX captures that satisfaction and turns it into visible social proof.",
    relatedIndustries: ["builders", "flooring-shops", "driveway-companies", "landscapers", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "london", "chichester", "eastbourne"],
  },

  // ─── Property ──────────────────────────────────────���───────────────
  {
    slug: "estate-agents",
    name: "Estate Agents",
    category: "Property",
    metaTitle: "GuardX for Estate Agents — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps estate agents build five-star Google reputations. Automated review requests that win vendor trust, attract buyers, and grow your instructions.",
    h1: "Web Design, SEO & Review Generation for Estate Agents",
    intro:
      "For estate agents, Google reviews are a direct driver of new instructions. Vendors research agents extensively before choosing who to trust with their property sale. A strong, visible five-star reputation gives you the edge in every valuation appointment. GuardX automates the review process so your reputation works for you 24/7.\n\nOur system sends personalised email and SMS review requests to vendors and buyers after key milestones — viewings, offers, completions — ensuring a steady flow of genuine reviews that demonstrate your expertise and professionalism.",
    challenges:
      "Estate agents often have long transaction cycles, making it easy for the review request to get lost in the process. Agents who wait until completion miss months of potential reviews. Additionally, the emotional nature of property transactions means timing the ask is crucial — GuardX handles this with carefully timed automated requests.",
    relatedIndustries: ["letting-agents", "builders", "cleaning-companies", "locksmiths"],
    relatedLocations: ["brighton", "london", "sussex", "horsham", "chichester"],
  },
  {
    slug: "letting-agents",
    name: "Letting Agents",
    category: "Property",
    metaTitle: "GuardX for Letting Agents — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps letting agents collect more Google reviews. Build tenant and landlord trust, improve local visibility, and grow your property portfolio.",
    h1: "Web Design, SEO & Review Generation for Letting Agents",
    intro:
      "Letting agents serve two distinct audiences — landlords and tenants — and both check Google reviews before making decisions. A strong review profile reassures landlords that their property is in good hands and helps tenants feel confident in their choice. GuardX automates review collection from both sides of the relationship.\n\nOur email and SMS system sends personalised review requests at key touchpoints: move-in, annual review, maintenance completion, and tenancy renewal. This builds a comprehensive review profile that attracts new landlords and quality tenants.",
    challenges:
      "Letting agents manage ongoing relationships, not one-off transactions. This means there are multiple opportunities to collect reviews, but without a system, none of them are captured. Agents are also often too busy with property management tasks to think about reputation building. GuardX automates the entire process.",
    relatedIndustries: ["estate-agents", "cleaning-companies", "locksmiths", "builders"],
    relatedLocations: ["brighton", "london", "sussex", "hove", "crawley"],
  },

  // ─── Hospitality ───────────────────────────────────────────────────
  {
    slug: "restaurants",
    name: "Restaurants",
    category: "Hospitality",
    metaTitle: "GuardX for Restaurants — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps restaurants collect more Google reviews automatically. Build a five-star reputation, rank higher in local search, and fill more tables every night.",
    h1: "Web Design, SEO & Review Generation for Restaurants",
    intro:
      "For restaurants, Google reviews directly influence how many diners walk through the door. Most customers check reviews before booking or visiting, and a strong five-star profile can be the difference between a full house and empty tables. GuardX automates review collection so your online reputation grows with every service.\n\nOur system sends personalised email and SMS review requests after each dining experience, making it easy for happy diners to share their experience. More five-star reviews mean higher search rankings, more walk-ins, and more bookings.",
    challenges:
      "Restaurants serve hundreds of customers weekly but typically collect very few reviews relative to their footfall. Staff are busy during service and forget to mention reviews. By the time diners get home, the motivation to leave feedback has faded. GuardX captures that dining satisfaction with perfectly timed automated requests.",
    relatedIndustries: ["cafes", "barbers", "salons", "cleaning-companies"],
    relatedLocations: ["brighton", "london", "sussex", "manchester", "edinburgh"],
  },
  {
    slug: "cafes",
    name: "Cafes",
    category: "Hospitality",
    metaTitle: "GuardX for Cafes — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps cafes and coffee shops collect more Google reviews. Build a five-star reputation that attracts regulars and brings in new customers automatically.",
    h1: "Web Design, SEO & Review Generation for Cafes",
    intro:
      "Cafes thrive on footfall and loyalty, and Google reviews drive both. When someone new to the area searches for a cafe, your review profile is the first thing they see. GuardX automates the review collection process, turning your regular customers into visible online advocates.\n\nOur email and SMS system sends personalised review requests that encourage customers to share what they love about your cafe. A growing stream of genuine five-star reviews builds the reputation that keeps your tables full.",
    challenges:
      "Cafes have high customer volumes but low review conversion because the transaction is quick and informal. Customers enjoy their coffee and move on without thinking about leaving a review. The key is reaching them shortly after their visit with a simple, friendly prompt — which is exactly what GuardX does.",
    relatedIndustries: ["restaurants", "salons", "barbers", "cleaning-companies"],
    relatedLocations: ["brighton", "hove", "london", "lewes", "edinburgh"],
  },

  // ─── Automotive ────────────────────────────────────────────────────
  {
    slug: "garages",
    name: "Garages",
    category: "Automotive",
    metaTitle: "GuardX for Garages — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps garages and auto repair shops collect more Google reviews. Build customer trust, rank higher in local search, and fill more service bays.",
    h1: "Web Design, SEO & Review Generation for Garages",
    intro:
      "Garages rely on trust — customers need to know their vehicle is in safe hands. Google reviews are the most visible way to demonstrate that trust. GuardX automates review collection so every satisfied customer has the chance to share their experience, building a reputation that drives more bookings.\n\nOur email and SMS system sends personalised review requests after every service, MOT, or repair. A consistent flow of five-star reviews strengthens your Google presence and keeps your bays busy.",
    challenges:
      "Garages handle multiple vehicles daily, and the focus is always on the next job. Asking for reviews at the counter feels rushed, and follow-up falls by the wayside. Meanwhile, customers who had a great experience simply drive away without leaving feedback. GuardX captures that positive experience automatically.",
    relatedIndustries: ["mechanics", "builders", "electricians", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "crawley", "london", "manchester"],
  },
  {
    slug: "mechanics",
    name: "Mechanics",
    category: "Automotive",
    metaTitle: "GuardX for Mechanics — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps mechanics and auto repair specialists collect more Google reviews. Build trust, improve local visibility, and attract more customers automatically.",
    h1: "Web Design, SEO & Review Generation for Mechanics",
    intro:
      "Finding a trustworthy mechanic is one of the most common local searches on Google. Your reviews are often the deciding factor for customers choosing between you and the garage down the road. GuardX automates review collection so your expertise and reliability are visible to everyone searching.\n\nOur system sends personalised email and SMS review requests after every repair, service, or MOT. The result: a growing Google profile that builds customer confidence and keeps your workshop fully booked.",
    challenges:
      "Mechanics are hands-on professionals who spend their day under vehicles, not on computers. Manual review requests are impractical, and customers who are pleased with a repair rarely think to go online and leave feedback. GuardX bridges this gap with automated, perfectly timed requests.",
    relatedIndustries: ["garages", "builders", "electricians", "plumbers"],
    relatedLocations: ["sussex", "brighton", "crawley", "london", "birmingham"],
  },

  // ─── Home Services ─────────────────────────────────────────────────
  {
    slug: "cleaning-companies",
    name: "Cleaning Companies",
    category: "Home Services",
    metaTitle: "GuardX for Cleaning Companies — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps cleaning companies collect more Google reviews. Automated requests that build trust, improve rankings, and keep your schedule fully booked.",
    h1: "Web Design, SEO & Review Generation for Cleaning Companies",
    intro:
      "Cleaning companies operate in one of the most competitive local service markets. Customers have many options, and your Google reviews are often the tipping point that wins a booking. GuardX automates review collection so every clean can generate a five-star review that attracts more business.\n\nOur email and SMS system sends personalised review requests after every clean, whether it is a one-off deep clean or a regular domestic service. A growing review profile means more visibility, more trust, and a diary that stays full.",
    challenges:
      "Cleaning companies handle high volumes of repeat customers but rarely convert that loyalty into visible reviews. Staff turnover and the routine nature of the service mean review requests are easily forgotten. GuardX ensures that every satisfied client has the opportunity to share their experience.",
    relatedIndustries: ["carpet-cleaners", "landscapers", "letting-agents", "estate-agents"],
    relatedLocations: ["sussex", "brighton", "london", "hove", "crawley"],
  },
  {
    slug: "landscapers",
    name: "Landscapers",
    category: "Home Services",
    metaTitle: "GuardX for Landscapers — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps landscaping businesses collect more Google reviews. Showcase your outdoor projects, build trust, and attract more landscaping clients.",
    h1: "Web Design, SEO & Review Generation for Landscapers",
    intro:
      "Landscaping projects create stunning visual transformations that homeowners are proud to show off. GuardX helps you turn that pride into visible Google reviews by automating the review collection process. Every completed garden, patio, or outdoor space becomes an opportunity for a five-star review.\n\nOur system sends personalised email and SMS review requests after project completion, capturing customer delight when it is at its peak. These reviews build a reputation that attracts new clients and positions you as the go-to landscaper in your area.",
    challenges:
      "Landscapers create beautiful work that often gets shared on social media but rarely translates into Google reviews. The project-based nature of landscaping means each review opportunity is valuable, and missing it means waiting until the next project. GuardX ensures no opportunity is wasted.",
    relatedIndustries: ["tree-surgeons", "builders", "driveway-companies", "painters-and-decorators", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "horsham", "london", "chichester"],
  },
  {
    slug: "tree-surgeons",
    name: "Tree Surgeons",
    category: "Home Services",
    metaTitle: "GuardX for Tree Surgeons — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps tree surgery businesses collect Google reviews automatically. Build trust with homeowners and councils, improve visibility, and win more contracts.",
    h1: "Web Design, SEO & Review Generation for Tree Surgeons",
    intro:
      "Tree surgery is specialist work that requires high levels of trust and professionalism. Homeowners and councils need to know they are hiring skilled arborists. Your Google reviews provide that reassurance. GuardX automates the review process so every completed job strengthens your professional reputation.\n\nOur email and SMS system sends personalised review requests after each project, from domestic tree removal to commercial maintenance contracts. A growing five-star profile attracts both private clients and commercial opportunities.",
    challenges:
      "Tree surgeons often work in challenging outdoor conditions and move between job sites throughout the day. Finding time for administrative tasks like review requests is difficult. Customers appreciate the work but are unlikely to leave a review unless specifically prompted. GuardX handles that prompt automatically.",
    relatedIndustries: ["landscapers", "builders", "roofers", "cleaning-companies"],
    relatedLocations: ["sussex", "brighton", "crawley", "uckfield", "crowborough"],
  },
  {
    slug: "locksmiths",
    name: "Locksmiths",
    category: "Home Services",
    metaTitle: "GuardX for Locksmiths — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps locksmiths collect more Google reviews. Build trust for emergency callouts, improve local rankings, and become the go-to locksmith in your area.",
    h1: "Web Design, SEO & Review Generation for Locksmiths",
    intro:
      "Locksmiths are called in emergencies, which means customers make fast decisions based on trust signals — and the most visible trust signal is your Google reviews. A five-star profile can be the difference between getting the callout or losing it to a competitor. GuardX automates review collection so your reputation works for you around the clock.\n\nOur system sends personalised review requests via email and SMS after every job, from emergency lockouts to security installations. The result: a growing Google profile that makes you the first choice when people need help.",
    challenges:
      "Locksmiths work in high-pressure situations where the focus is entirely on solving the customer's problem. Once the lock is opened or the door is secured, the customer is relieved and moves on — rarely thinking about leaving a review. GuardX captures that relief and gratitude with a timely, automated request.",
    relatedIndustries: ["plumbers", "electricians", "estate-agents", "letting-agents"],
    relatedLocations: ["sussex", "brighton", "london", "crawley", "hastings"],
  },

  // ─── Health ────────────────────────────────────────────────────────
  {
    slug: "dentists",
    name: "Dentists",
    category: "Health",
    metaTitle: "GuardX for Dentists — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps dental practices collect more Google reviews. Build patient trust, improve local visibility, and attract new patients with a five-star reputation.",
    h1: "Web Design, SEO & Review Generation for Dentists",
    intro:
      "Choosing a dentist is a deeply personal decision, and patients rely heavily on Google reviews to make that choice. A dental practice with a strong five-star profile attracts more new patient enquiries than one that relies solely on word-of-mouth. GuardX automates review collection so your practice's reputation grows with every appointment.\n\nOur system sends personalised email and SMS review requests after each visit, making it easy for satisfied patients to share their experience. A growing review profile builds trust, improves search visibility, and keeps your appointment book full.",
    challenges:
      "Dental practices see patients regularly but rarely convert those visits into reviews. Reception staff are busy, and asking for a review after a dental procedure can feel awkward. Additionally, patients may not associate their routine dental care with a review-worthy experience. GuardX changes that perception with friendly, well-timed prompts.",
    relatedIndustries: ["physios", "gyms", "salons", "barbers"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "eastbourne"],
  },
  {
    slug: "physios",
    name: "Physios",
    category: "Health",
    metaTitle: "GuardX for Physiotherapists — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps physiotherapy practices collect more Google reviews. Build patient trust, showcase treatment outcomes, and attract new patients automatically.",
    h1: "Web Design, SEO & Review Generation for Physiotherapists",
    intro:
      "Physiotherapy is a results-driven profession — when patients feel better, they are naturally inclined to share that experience. GuardX helps physiotherapists capture that positive sentiment by automating Google review collection after treatment sessions. Every recovery story becomes a five-star review that attracts new patients.\n\nOur email and SMS system sends personalised review requests at the right moment, whether after a single session or at treatment milestones. A strong review profile positions your practice as the trusted choice for injury recovery and rehabilitation.",
    challenges:
      "Physiotherapists build strong patient relationships over multiple sessions, but the gradual nature of recovery means there is no single 'wow moment' for a review. Practitioners are focused on clinical outcomes, not marketing. GuardX identifies the right moments to request feedback and handles it automatically.",
    relatedIndustries: ["dentists", "gyms", "salons"],
    relatedLocations: ["brighton", "sussex", "london", "worthing", "eastbourne"],
  },
  {
    slug: "gyms",
    name: "Gyms",
    category: "Health",
    metaTitle: "GuardX for Gyms — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps gyms and fitness centres collect more Google reviews. Build a five-star reputation that attracts new members and reduces churn.",
    h1: "Web Design, SEO & Review Generation for Gyms",
    intro:
      "Gyms compete fiercely for new members, and Google reviews are one of the most influential factors in a potential member's decision. A five-star review profile signals a welcoming, well-equipped facility with results-driven programmes. GuardX automates the review collection process so your gym's reputation grows as steadily as your members' fitness.\n\nOur email and SMS system sends personalised review requests at key moments — after first sessions, milestone achievements, or programme completions — ensuring a consistent flow of genuine reviews that attract new sign-ups.",
    challenges:
      "Gyms have large member bases but typically low review counts. Members use the facilities regularly but do not think of their gym experience as something to review. The challenge is prompting reviews at moments when members feel most positive about their experience. GuardX times these requests perfectly.",
    relatedIndustries: ["physios", "dentists", "salons", "barbers"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "leeds"],
  },

  // ─── Beauty ────────────────────────────────────────────────────────
  {
    slug: "salons",
    name: "Salons",
    category: "Beauty",
    metaTitle: "GuardX for Hair Salons — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps hair salons collect more Google reviews automatically. Build a five-star reputation, attract new clients, and keep your chairs fully booked.",
    h1: "Web Design, SEO & Review Generation for Salons",
    intro:
      "Hair salons depend on trust and personal recommendation. In the digital age, Google reviews are the modern version of word-of-mouth. A strong five-star profile attracts new clients who are looking for a salon they can trust. GuardX automates the review collection process so your reputation grows with every appointment.\n\nOur email and SMS system sends personalised review requests after each visit, making it easy for clients to share their experience. Whether it is a colour transformation or a regular trim, every appointment is an opportunity for a glowing review.",
    challenges:
      "Salons see many clients weekly but convert only a tiny fraction into Google reviews. Stylists are focused on their craft during appointments, and the front desk is busy with bookings. Clients leave feeling great but rarely think to go online and leave feedback. GuardX captures that post-appointment glow automatically.",
    relatedIndustries: ["barbers", "dentists", "physios", "gyms"],
    relatedLocations: ["brighton", "sussex", "london", "hove", "eastbourne"],
  },
  {
    slug: "barbers",
    name: "Barbers",
    category: "Beauty",
    metaTitle: "GuardX for Barbers — Web Design, SEO & Review Generation",
    metaDescription:
      "GuardX helps barbershops collect more Google reviews. Build a loyal client base, improve local visibility, and keep your barber chairs fully booked.",
    h1: "Web Design, SEO & Review Generation for Barbershops",
    intro:
      "Barbershops are community hubs where loyalty and reputation are everything. Your Google reviews are how new customers discover you and decide to give you a try. GuardX automates review collection so every haircut, shave, or grooming session has the potential to generate a five-star review.\n\nOur email and SMS system sends personalised review requests after each appointment, capturing the satisfaction of a fresh cut while it is still front of mind. A growing review profile attracts new walk-ins and keeps your regular clients coming back.",
    challenges:
      "Barbers operate in high-volume, fast-turnover environments where there is little time for administrative tasks. Clients are in and out quickly, and the opportunity to ask for a review passes in minutes. Many barbershops have loyal regulars who would happily leave reviews but are never asked. GuardX asks for you.",
    relatedIndustries: ["salons", "gyms", "restaurants", "cafes"],
    relatedLocations: ["brighton", "sussex", "london", "manchester", "hastings"],
  },

  // ─── Expanded Industries ───────────────────────────────────────────────
  {
    slug: "tilers",
    name: "Tilers",
    category: "Trades",
    metaTitle: "GuardX for Tilers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps tilers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Tilers",
    intro: "For Tilers, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps tilers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Many businesses have a website that looks fine, but it's missing the SEO basics (metadata, structure, speed, internal links). That keeps them stuck below competitors in search.",
    relatedIndustries: ["cleaning-companies", "gyms", "pest-control", "scaffolders", "waste-removal"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "kitchen-fitters",
    name: "Kitchen Fitters",
    category: "Trades",
    metaTitle: "GuardX for Kitchen Fitters — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps kitchen fitters build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Kitchen Fitters",
    intro: "Kitchen Fitters is a high-trust service: customers compare options on Google before they call. GuardX helps kitchen fitters generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["tyre-shops", "garages", "letting-agents", "cafes", "bathroom-fitters"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "bathroom-fitters",
    name: "Bathroom Fitters",
    category: "Trades",
    metaTitle: "GuardX for Bathroom Fitters — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps bathroom fitters build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Bathroom Fitters",
    intro: "For Bathroom Fitters, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps bathroom fitters generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["dental-implants", "locksmiths", "tyre-shops", "bricklayers", "opticians"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "plasterers",
    name: "Plasterers",
    category: "Trades",
    metaTitle: "GuardX for Plasterers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps plasterers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Plasterers",
    intro: "Plasterers businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps plasterers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["tilers", "removal-companies", "locksmiths", "builders", "cctv-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "bricklayers",
    name: "Bricklayers",
    category: "Trades",
    metaTitle: "GuardX for Bricklayers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps bricklayers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Bricklayers",
    intro: "For Bricklayers, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps bricklayers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["builders", "glaziers", "plasterers", "physios", "garages"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "groundworks",
    name: "Groundworks Companies",
    category: "Trades",
    metaTitle: "GuardX for Groundworks Companies — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps groundworks companies build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Groundworks Companies",
    intro: "Groundworks Companies businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps groundworks companies generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nFast, modern web design that loads instantly and converts visitors into enquiries.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["tilers", "electricians", "car-dealers", "carpet-cleaners", "gyms"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "loft-conversions",
    name: "Loft Conversion Specialists",
    category: "Trades",
    metaTitle: "GuardX for Loft Conversion Specialists — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps loft conversion specialists build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Loft Conversion Specialists",
    intro: "For Loft Conversion Specialists, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps loft conversion specialists generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["roofers", "scaffolders", "electricians", "glaziers", "boiler-engineers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "window-fitters",
    name: "Window Fitters",
    category: "Home Services",
    metaTitle: "GuardX for Window Fitters — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps window fitters build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Window Fitters",
    intro: "In Window Fitters, the business with the strongest Google profile usually wins the enquiry. GuardX helps window fitters generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nFast, modern web design that loads instantly and converts visitors into enquiries.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Many businesses have a website that looks fine, but it's missing the SEO basics (metadata, structure, speed, internal links). That keeps them stuck below competitors in search.",
    relatedIndustries: ["mot-centres", "physios", "groundworks", "bricklayers", "flooring-shops"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "glaziers",
    name: "Glaziers",
    category: "Home Services",
    metaTitle: "GuardX for Glaziers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps glaziers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Glaziers",
    intro: "In Glaziers, the business with the strongest Google profile usually wins the enquiry. GuardX helps glaziers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["roofers", "estate-agents", "takeaways", "boiler-engineers", "tyre-shops"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "boiler-engineers",
    name: "Boiler Engineers",
    category: "Home Services",
    metaTitle: "GuardX for Boiler Engineers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps boiler engineers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Boiler Engineers",
    intro: "Boiler Engineers customers want reassurance. Your website and reviews are the proof. GuardX helps boiler engineers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["removal-companies", "letting-agents", "barbers", "kitchen-fitters", "landscapers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "hvac-engineers",
    name: "HVAC Engineers",
    category: "Home Services",
    metaTitle: "GuardX for HVAC Engineers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps hvac engineers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for HVAC Engineers",
    intro: "HVAC Engineers customers want reassurance. Your website and reviews are the proof. GuardX helps hvac engineers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nFast, modern web design that loads instantly and converts visitors into enquiries.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["pubs", "plumbers", "removal-companies", "massage-therapists", "locksmiths"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "pest-control",
    name: "Pest Control",
    category: "Home Services",
    metaTitle: "GuardX for Pest Control — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps pest control build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Pest Control",
    intro: "Pest Control businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps pest control generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["flooring-shops", "massage-therapists", "tilers", "plumbers", "physios"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "window-cleaners",
    name: "Window Cleaners",
    category: "Home Services",
    metaTitle: "GuardX for Window Cleaners — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps window cleaners build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Window Cleaners",
    intro: "Window Cleaners businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps window cleaners generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["mot-centres", "takeaways", "chiropractors", "electricians", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "removal-companies",
    name: "Removal Companies",
    category: "Home Services",
    metaTitle: "GuardX for Removal Companies — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps removal companies build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Removal Companies",
    intro: "For Removal Companies, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps removal companies generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["window-fitters", "chiropractors", "electricians", "opticians", "bricklayers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "waste-removal",
    name: "Waste Removal",
    category: "Home Services",
    metaTitle: "GuardX for Waste Removal — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps waste removal build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Waste Removal",
    intro: "In Waste Removal, the business with the strongest Google profile usually wins the enquiry. GuardX helps waste removal generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nFast, modern web design that loads instantly and converts visitors into enquiries.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["cleaning-companies", "tyre-shops", "scaffolders", "nail-salons", "security-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "skip-hire",
    name: "Skip Hire",
    category: "Home Services",
    metaTitle: "GuardX for Skip Hire — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps skip hire build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Skip Hire",
    intro: "Skip Hire is a high-trust service: customers compare options on Google before they call. GuardX helps skip hire generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["mot-centres", "dental-implants", "physios", "pubs", "landscapers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "security-installers",
    name: "Security Installers",
    category: "Home Services",
    metaTitle: "GuardX for Security Installers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps security installers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Security Installers",
    intro: "Security Installers customers want reassurance. Your website and reviews are the proof. GuardX helps security installers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["beauty-clinics", "bathroom-fitters", "dentists", "tree-surgeons", "skip-hire"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "cctv-installers",
    name: "CCTV Installers",
    category: "Home Services",
    metaTitle: "GuardX for CCTV Installers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps cctv installers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for CCTV Installers",
    intro: "CCTV Installers is a high-trust service: customers compare options on Google before they call. GuardX helps cctv installers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["loft-conversions", "groundworks", "scaffolders", "security-installers", "tilers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "solar-installers",
    name: "Solar Installers",
    category: "Home Services",
    metaTitle: "GuardX for Solar Installers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps solar installers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Solar Installers",
    intro: "Solar Installers customers want reassurance. Your website and reviews are the proof. GuardX helps solar installers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Many businesses have a website that looks fine, but it's missing the SEO basics (metadata, structure, speed, internal links). That keeps them stuck below competitors in search.",
    relatedIndustries: ["scaffolders", "electricians", "security-installers", "dental-implants", "opticians"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "car-detailers",
    name: "Car Detailers",
    category: "Automotive",
    metaTitle: "GuardX for Car Detailers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps car detailers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Car Detailers",
    intro: "Car Detailers is a high-trust service: customers compare options on Google before they call. GuardX helps car detailers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["tyre-shops", "security-installers", "massage-therapists", "letting-agents", "carpet-cleaners"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "mot-centres",
    name: "MOT Centres",
    category: "Automotive",
    metaTitle: "GuardX for MOT Centres — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps mot centres build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for MOT Centres",
    intro: "MOT Centres customers want reassurance. Your website and reviews are the proof. GuardX helps mot centres generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["plumbers", "care-homes", "glaziers", "massage-therapists", "nail-salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "tyre-shops",
    name: "Tyre Shops",
    category: "Automotive",
    metaTitle: "GuardX for Tyre Shops — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps tyre shops build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Tyre Shops",
    intro: "Tyre Shops businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps tyre shops generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["car-dealers", "window-fitters", "estate-agents", "kitchen-fitters", "restaurants"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "car-dealers",
    name: "Car Dealers",
    category: "Automotive",
    metaTitle: "GuardX for Car Dealers — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps car dealers build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Car Dealers",
    intro: "Car Dealers is a high-trust service: customers compare options on Google before they call. GuardX helps car dealers generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["window-fitters", "boiler-engineers", "plumbers", "electricians", "locksmiths"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "hotels",
    name: "Hotels",
    category: "Hospitality",
    metaTitle: "GuardX for Hotels — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps hotels build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Hotels",
    intro: "For Hotels, reviews are the fastest credibility signal you can build without spending more on ads. GuardX helps hotels generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["gyms", "letting-agents", "cafes", "solar-installers", "tree-surgeons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "pubs",
    name: "Pubs",
    category: "Hospitality",
    metaTitle: "GuardX for Pubs — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps pubs build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Pubs",
    intro: "In Pubs, the business with the strongest Google profile usually wins the enquiry. GuardX helps pubs generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["restaurants", "waste-removal", "driveway-companies", "barbers", "window-cleaners"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "takeaways",
    name: "Takeaways",
    category: "Hospitality",
    metaTitle: "GuardX for Takeaways — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps takeaways build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Takeaways",
    intro: "In Takeaways, the business with the strongest Google profile usually wins the enquiry. GuardX helps takeaways generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Review requests often rely on memory or awkward asks. When the team is busy, it simply doesn't happen — which means your online profile doesn't match the real quality of your work.",
    relatedIndustries: ["locksmiths", "barbers", "loft-conversions", "flooring-shops", "mot-centres"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "vets",
    name: "Vets",
    category: "Health",
    metaTitle: "GuardX for Vets — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps vets build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Vets",
    intro: "Vets businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps vets generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["tree-surgeons", "cafes", "beauty-clinics", "waste-removal", "loft-conversions"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "chiropractors",
    name: "Chiropractors",
    category: "Health",
    metaTitle: "GuardX for Chiropractors — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps chiropractors build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Chiropractors",
    intro: "Chiropractors businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps chiropractors generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nOne joined-up system: website + SEO foundations + reviews working together to win more customers.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["carpet-cleaners", "locksmiths", "car-dealers", "dental-implants", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "opticians",
    name: "Opticians",
    category: "Health",
    metaTitle: "GuardX for Opticians — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps opticians build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Opticians",
    intro: "In Opticians, the business with the strongest Google profile usually wins the enquiry. GuardX helps opticians generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["massage-therapists", "waste-removal", "pubs", "removal-companies", "painters-and-decorators"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "care-homes",
    name: "Care Homes",
    category: "Health",
    metaTitle: "GuardX for Care Homes — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps care homes build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Care Homes",
    intro: "Care Homes businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps care homes generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["solar-installers", "dentists", "window-fitters", "opticians", "salons"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "beauty-clinics",
    name: "Beauty Clinics",
    category: "Beauty",
    metaTitle: "GuardX for Beauty Clinics — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps beauty clinics build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Beauty Clinics",
    intro: "Beauty Clinics businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps beauty clinics generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nSEO foundation built in — clean structure, proper metadata, and internal linking that helps you rank.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Customers are happy in the moment, then move on. If you don't ask at the right time, the review never happens. Automation solves the timing problem.",
    relatedIndustries: ["barbers", "construction-companies", "tree-surgeons", "massage-therapists", "plasterers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "nail-salons",
    name: "Nail Salons",
    category: "Beauty",
    metaTitle: "GuardX for Nail Salons — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps nail salons build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Nail Salons",
    intro: "Nail Salons businesses rely on local visibility — especially on mobile 'near me' searches. GuardX helps nail salons generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nAutomated review requests via email and SMS after every job, appointment, or purchase.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Many businesses have a website that looks fine, but it's missing the SEO basics (metadata, structure, speed, internal links). That keeps them stuck below competitors in search.",
    relatedIndustries: ["flooring-shops", "letting-agents", "estate-agents", "barbers", "cctv-installers"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "massage-therapists",
    name: "Massage Therapists",
    category: "Beauty",
    metaTitle: "GuardX for Massage Therapists — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps massage therapists build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Massage Therapists",
    intro: "In Massage Therapists, the business with the strongest Google profile usually wins the enquiry. GuardX helps massage therapists generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nFast, modern web design that loads instantly and converts visitors into enquiries.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Most businesses deliver great service but don't have a consistent system to collect reviews. Without steady new reviews, competitors with higher volume appear above you on Google — even if you're better.",
    relatedIndustries: ["loft-conversions", "removal-companies", "glaziers", "scaffolders", "garages"],
    relatedLocations: ["sussex", "brighton", "london", "manchester", "birmingham"],
  },

  {
    slug: "dental-implants",
    name: "Dental Implant Clinics",
    category: "Health",
    metaTitle: "GuardX for Dental Implant Clinics — Web Design, SEO & Review Generation",
    metaDescription: "GuardX helps dental implant clinics build five-star Google reputations with automated review requests, plus web design and SEO foundations that improve visibility.",
    h1: "Web Design, SEO & Review Generation for Dental Implant Clinics",
    intro: "Dental Implant Clinics customers want reassurance. Your website and reviews are the proof. GuardX helps dental implant clinics generate more genuine Google reviews automatically and build a modern, fast website with the SEO foundations needed to rank.\n\nA consistent flow of genuine Google reviews that improves local visibility and trust.\n\nOver time, more reviews + a better site = higher rankings, more clicks, and more enquiries.",
    challenges: "Many businesses have a website that looks fine, but it's missing the SEO basics (metadata, structure, speed, internal links). That keeps them stuck below competitors in search.",
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

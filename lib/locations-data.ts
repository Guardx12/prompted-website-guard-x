export interface Location {
  slug: string
  name: string
  region: "sussex" | "uk-cities"
  county?: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  localContext: string
  relatedLocations: string[]
  relatedIndustries: string[]
}

export const locations: Location[] = [
  // ─── Sussex Locations ──────────────────────────────────────────────
  {
    slug: "sussex",
    name: "Sussex",
    region: "sussex",
    county: "Sussex",
    metaTitle: "GuardX Sussex — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Sussex Businesses",
    metaDescription:
      "GuardX helps Sussex businesses grow through automated review requests, reputation monitoring, and Google visibility. Serving East Sussex, West Sussex, and Brighton & Hove.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Sussex Businesses",
    intro:
      "Sussex is home to thousands of thriving local businesses, from seaside hospitality in Brighton to established trades across Horsham and Crawley. GuardX provides Sussex businesses with an automated review growth system that turns every satisfied customer into a five-star Google review, boosting your visibility and building lasting trust.\n\nOur done-for-you system sends personalised email and SMS review requests on your behalf, so you can focus on running your business while your online reputation grows steadily. Whether you are a plumber in Worthing or a salon in Eastbourne, GuardX makes reputation management simple and effective.",
    localContext:
      "Sussex stretches from the South Downs to the coast, encompassing a diverse economy of tourism, trades, retail, and professional services. With intense local competition across both East and West Sussex, standing out on Google Maps and local search is essential for attracting new customers.",
    relatedLocations: ["brighton", "hove", "worthing", "eastbourne", "crawley", "horsham", "chichester"],
    relatedIndustries: ["builders", "plumbers", "electricians", "restaurants", "estate-agents", "salons"],
  },
  {
    slug: "brighton",
    name: "Brighton",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Brighton — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Brighton Businesses",
    metaDescription:
      "Grow your Brighton business with GuardX. Automated email and SMS review requests that boost your Google visibility, attract more customers, and build a five-star reputation.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Brighton Businesses",
    intro:
      "Brighton is one of the most competitive local markets in the south of England. Whether you run a restaurant in The Lanes, a salon in Kemptown, or a trades business across the city, your Google reviews can make or break your growth. GuardX gives Brighton businesses an automated system that consistently generates genuine five-star reviews.\n\nOur platform sends personalised review requests via email and SMS after every job or visit, making it effortless for your happy customers to leave feedback. No chasing, no awkward conversations — just steady, organic review growth that puts you ahead of local competitors.",
    localContext:
      "Brighton and Hove is a vibrant city with over 300,000 residents and millions of annual visitors. The local economy thrives on hospitality, creative industries, retail, and a strong trades sector. With so many businesses competing for attention on Google, a strong review profile is one of the most effective ways to stand out.",
    relatedLocations: ["hove", "sussex", "lewes", "worthing", "seaford", "newhaven"],
    relatedIndustries: ["restaurants", "cafes", "salons", "barbers", "plumbers", "electricians"],
  },
  {
    slug: "hove",
    name: "Hove",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Hove — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Hove Businesses",
    metaDescription:
      "GuardX helps Hove businesses generate more Google reviews automatically. Boost your local reputation, attract new customers, and grow revenue with our done-for-you system.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Hove Businesses",
    intro:
      "Hove businesses benefit from the affluent, loyal customer base that defines this coastal neighbourhood. But even in Hove, standing out on Google means having a strong, consistent stream of positive reviews. GuardX automates the entire process so your reputation grows without lifting a finger.\n\nFrom independent cafes on Church Road to established estate agents and tradespeople, our system sends timely, personalised review requests that convert satisfied customers into glowing online testimonials.",
    localContext:
      "Hove sits alongside Brighton as part of the Brighton and Hove unitary authority. Known for its residential charm, independent shops, and strong community feel, Hove has a thriving local economy where word-of-mouth and online reviews are deeply intertwined. Businesses that actively manage their reviews consistently outperform those that leave it to chance.",
    relatedLocations: ["brighton", "sussex", "worthing", "littlehampton", "lewes"],
    relatedIndustries: ["estate-agents", "cafes", "restaurants", "cleaning-companies", "landscapers", "dentists"],
  },
  {
    slug: "worthing",
    name: "Worthing",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Worthing — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 in Worthing",
    metaDescription:
      "GuardX Worthing: automated review requests that help local businesses build a five-star Google reputation, attract more customers, and increase revenue.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 in Worthing",
    intro:
      "Worthing is experiencing a renaissance, with new businesses opening alongside established local firms. As the town grows, so does competition on Google. GuardX gives Worthing businesses a reliable, automated way to generate more five-star reviews and climb local search rankings.\n\nOur system works in the background, sending review requests to your customers at the right moment after every job, appointment, or purchase. More reviews mean more visibility, more trust, and ultimately more revenue.",
    localContext:
      "Worthing is a growing coastal town in West Sussex with a population of over 110,000. Its economy spans retail, hospitality, health services, and a strong trades sector. With regeneration projects attracting new residents and visitors, local businesses have a real opportunity to grow — but only if they are visible and trusted online.",
    relatedLocations: ["littlehampton", "hove", "brighton", "sussex", "bognor-regis", "chichester"],
    relatedIndustries: ["builders", "plumbers", "roofers", "restaurants", "dentists", "gyms"],
  },
  {
    slug: "littlehampton",
    name: "Littlehampton",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Littlehampton — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Littlehampton Businesses",
    metaDescription:
      "Automated review growth for Littlehampton businesses. GuardX helps you get more Google reviews, build local trust, and attract new customers effortlessly.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Littlehampton Businesses",
    intro:
      "Littlehampton may be smaller than its neighbours, but its business community is fiercely competitive. From seaside restaurants to local trades, every positive Google review counts when customers are choosing between you and a competitor. GuardX automates the process so you never miss an opportunity.\n\nOur email and SMS system prompts your satisfied customers to leave a review right after their experience, when their satisfaction is highest. It is hands-free, effective, and designed specifically for busy local businesses.",
    localContext:
      "Littlehampton is a coastal town in the Arun district of West Sussex. With a growing population and a mix of tourism, retail, and trades, the town has a strong local economy. Businesses here rely heavily on local search and recommendations, making Google reviews a critical growth lever.",
    relatedLocations: ["worthing", "bognor-regis", "arundel", "chichester", "sussex"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "cafes", "garages", "cleaning-companies"],
  },
  {
    slug: "bognor-regis",
    name: "Bognor Regis",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Bognor Regis — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bognor Regis Businesses",
    metaDescription:
      "GuardX helps Bognor Regis businesses grow with automated Google review requests. Build your reputation, increase local visibility, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bognor Regis Businesses",
    intro:
      "Bognor Regis thrives on tourism and a loyal local customer base. Whether you run a guest house, a restaurant, or a trades business, your Google reviews are the first thing potential customers see. GuardX makes it easy to consistently collect five-star reviews without any manual effort.\n\nOur automated system sends personalised requests via email and SMS, ensuring your happy customers share their experience online. The result: a stronger reputation, higher search rankings, and a steady flow of new enquiries.",
    localContext:
      "Bognor Regis is a popular seaside resort and residential town in the Arun district. Its economy is driven by tourism, retail, hospitality, and a solid trades sector. Seasonal businesses especially benefit from building a strong review profile during peak times to maintain visibility year-round.",
    relatedLocations: ["chichester", "littlehampton", "arundel", "worthing", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "plumbers", "electricians", "painters-and-decorators", "cleaning-companies"],
  },
  {
    slug: "chichester",
    name: "Chichester",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Chichester — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Chichester Businesses",
    metaDescription:
      "Help your Chichester business stand out with GuardX. Automated review requests that grow your Google rating, attract more customers, and strengthen your local reputation.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Chichester Businesses",
    intro:
      "Chichester is a historic cathedral city with a thriving business community. From high-street retailers to independent tradespeople, competition for local customers is intense. GuardX gives Chichester businesses the edge by automating review collection, so your Google profile reflects the quality of your work.\n\nEvery completed job or customer visit triggers a personalised review request, making it simple for satisfied customers to leave positive feedback. Over time, this builds a review profile that drives new business and strengthens your local presence.",
    localContext:
      "Chichester sits at the heart of West Sussex, serving as a cultural and commercial hub for the surrounding area. With a mix of heritage tourism, retail, professional services, and trades, the city supports a diverse business community. A strong online reputation is essential for businesses competing in this well-connected market.",
    relatedLocations: ["bognor-regis", "arundel", "littlehampton", "worthing", "horsham", "sussex"],
    relatedIndustries: ["estate-agents", "restaurants", "builders", "roofers", "dentists", "landscapers"],
  },
  {
    slug: "arundel",
    name: "Arundel",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Arundel — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Arundel Businesses",
    metaDescription:
      "GuardX Arundel: automated Google review requests for local businesses. Grow your reputation, increase footfall, and attract more customers in Arundel and surrounding areas.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Arundel Businesses",
    intro:
      "Arundel is a charming market town that attracts visitors from across the region. For local businesses — from antique shops and cafes to trades and services — Google reviews are a powerful way to convert passing interest into loyal customers. GuardX automates the review collection process so you can focus on what you do best.\n\nOur system sends timely review requests after every customer interaction, ensuring a steady flow of genuine five-star reviews that build trust and boost your search visibility.",
    localContext:
      "Arundel is known for its castle, independent shops, and strong tourism trade. The town has a tight-knit business community where reputation matters enormously. With visitors researching businesses online before they arrive, a strong Google review profile can be the difference between a busy day and an empty one.",
    relatedLocations: ["chichester", "littlehampton", "bognor-regis", "worthing", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "estate-agents", "builders", "painters-and-decorators"],
  },
  {
    slug: "horsham",
    name: "Horsham",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Horsham — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Horsham Businesses",
    metaDescription:
      "Grow your Horsham business with GuardX. Our automated review system helps you collect more Google reviews, improve local rankings, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Horsham Businesses",
    intro:
      "Horsham is one of the most prosperous market towns in West Sussex, with a strong mix of retail, professional services, and trades. Standing out in this competitive market requires more than great service — you need visible proof that customers trust you. GuardX provides that proof by automating your Google review collection.\n\nFrom the moment a job is done or a service is delivered, our system sends personalised requests that make leaving a review effortless for your customers. More reviews lead to higher rankings, more clicks, and more revenue.",
    localContext:
      "Horsham is a thriving town with excellent transport links to London and the wider South East. Its economy is diverse, with a strong presence of professional services, retail, hospitality, and trades. Businesses here serve both local residents and commuters, making a strong online reputation essential for capturing a wide audience.",
    relatedLocations: ["crawley", "haywards-heath", "sussex", "burgess-hill", "chichester", "worthing"],
    relatedIndustries: ["estate-agents", "builders", "plumbers", "electricians", "landscapers", "dentists"],
  },
  {
    slug: "crawley",
    name: "Crawley",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Crawley — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Crawley Businesses",
    metaDescription:
      "GuardX Crawley: automated email and SMS review requests that help local businesses build five-star Google reputations and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Crawley Businesses",
    intro:
      "Crawley is one of the largest towns in West Sussex, with a diverse economy that spans everything from airport services to local trades. With so many businesses competing for attention, your Google reviews are one of the most powerful tools for standing out. GuardX automates the entire review collection process.\n\nOur system sends personalised email and SMS review requests after every customer interaction, ensuring you consistently build a strong, trustworthy online profile without any manual effort.",
    localContext:
      "Crawley sits near Gatwick Airport and benefits from excellent transport links. The town has a large, diverse population and a busy commercial centre. Local businesses compete not only with each other but also with national chains, making a strong Google review profile essential for attracting and retaining local customers.",
    relatedLocations: ["horsham", "haywards-heath", "east-grinstead", "sussex", "burgess-hill"],
    relatedIndustries: ["garages", "mechanics", "plumbers", "electricians", "cleaning-companies", "builders"],
  },
  {
    slug: "haywards-heath",
    name: "Haywards Heath",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Haywards Heath — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Local Businesses",
    metaDescription:
      "GuardX helps Haywards Heath businesses generate more Google reviews automatically. Boost local visibility, build trust, and grow your customer base.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Haywards Heath Businesses",
    intro:
      "Haywards Heath is a well-connected commuter town with a loyal local customer base. Whether you are a tradesperson, a salon owner, or a restaurant, your Google reviews directly influence how many new customers find and choose you. GuardX makes review collection automatic and effortless.\n\nOur done-for-you system sends personalised review requests at the perfect moment, turning everyday customer interactions into five-star reviews that boost your rankings and reputation.",
    localContext:
      "Haywards Heath is centrally located in West Sussex with direct train links to London and Brighton. The town supports a healthy mix of independent retailers, professional services, and trades. Residents often search online before choosing local businesses, making a strong Google presence critical for growth.",
    relatedLocations: ["burgess-hill", "horsham", "lewes", "crawley", "sussex"],
    relatedIndustries: ["plumbers", "electricians", "estate-agents", "dentists", "salons", "builders"],
  },
  {
    slug: "burgess-hill",
    name: "Burgess Hill",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX Burgess Hill — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Burgess Hill Businesses",
    metaDescription:
      "GuardX Burgess Hill: grow your Google reviews on autopilot. Our automated system helps local businesses build stronger reputations and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Burgess Hill Businesses",
    intro:
      "Burgess Hill is growing fast, with new developments bringing more residents and more demand for local services. If your business serves this expanding community, now is the time to build a strong review profile. GuardX automates Google review collection so your reputation keeps pace with your growth.\n\nOur platform sends timely, personalised review requests via email and SMS, converting satisfied customers into visible online advocates for your business.",
    localContext:
      "Burgess Hill is one of the fastest-growing towns in West Sussex, with significant residential and commercial development. New housing estates mean new customers searching for local trades, services, and retailers. Businesses that invest in their Google reputation now will be best positioned to capture this growing market.",
    relatedLocations: ["haywards-heath", "horsham", "lewes", "crawley", "sussex"],
    relatedIndustries: ["builders", "plumbers", "electricians", "landscapers", "cleaning-companies", "estate-agents"],
  },
  {
    slug: "east-grinstead",
    name: "East Grinstead",
    region: "sussex",
    county: "West Sussex",
    metaTitle: "GuardX East Grinstead — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for East Grinstead Businesses",
    metaDescription:
      "Automated review growth for East Grinstead businesses. GuardX helps you get more Google reviews, improve local search rankings, and grow your customer base.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for East Grinstead Businesses",
    intro:
      "East Grinstead sits at the northern edge of Sussex, close to the Surrey and Kent borders. Businesses here serve a wide catchment area, and your Google reviews are the first impression many potential customers get. GuardX automates review collection so your online reputation accurately reflects the quality of your service.\n\nOur system handles everything — from sending personalised email and SMS requests to guiding customers through the review process. You focus on your business; we handle the rest.",
    localContext:
      "East Grinstead is a historic market town with a strong retail centre and active trades community. Its location near the county borders means businesses compete with those in neighbouring areas, making Google visibility and reviews even more important for attracting local customers.",
    relatedLocations: ["crawley", "haywards-heath", "sussex", "horsham", "uckfield"],
    relatedIndustries: ["builders", "roofers", "plumbers", "garages", "dentists", "physios"],
  },
  {
    slug: "lewes",
    name: "Lewes",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Lewes — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Lewes Businesses",
    metaDescription:
      "GuardX Lewes: automated Google review requests for local businesses. Build trust, boost visibility, and attract more customers in the county town of East Sussex.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Lewes Businesses",
    intro:
      "Lewes is the county town of East Sussex and a hub for independent businesses. From artisan shops and restaurants to trades and professional services, the town rewards businesses that have built visible trust. GuardX helps Lewes businesses collect Google reviews automatically, turning every customer interaction into an opportunity for growth.\n\nOur personalised email and SMS review requests are sent at just the right time, making it easy for customers to share their positive experience. The result is a growing review profile that attracts new business and strengthens your local standing.",
    localContext:
      "Lewes has a strong identity as an independent, community-focused town. Its residents actively support local businesses and often research online before making choices. A strong Google review profile in Lewes signals trustworthiness and quality, which directly translates into footfall and enquiries.",
    relatedLocations: ["brighton", "haywards-heath", "uckfield", "newhaven", "seaford", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "estate-agents", "builders", "painters-and-decorators", "landscapers"],
  },
  {
    slug: "uckfield",
    name: "Uckfield",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Uckfield — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Uckfield Businesses",
    metaDescription:
      "Grow your Uckfield business with GuardX. Automated review requests that build your Google reputation, increase visibility, and bring in more local customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Uckfield Businesses",
    intro:
      "Uckfield is a thriving town in the Wealden district, known for its active high street and strong community. Local businesses here compete for the attention of both residents and visitors from the surrounding villages. GuardX gives you an edge by automating your Google review collection, so your reputation grows consistently.\n\nEvery satisfied customer receives a personalised review request, making it simple for them to leave positive feedback. Over time, this builds a review profile that drives new enquiries and strengthens customer loyalty.",
    localContext:
      "Uckfield serves as a commercial centre for the surrounding rural Wealden area. Its economy includes retail, trades, health services, and hospitality. Businesses that invest in their online reputation gain a significant advantage in attracting customers from both the town and neighbouring villages.",
    relatedLocations: ["lewes", "crowborough", "east-grinstead", "haywards-heath", "sussex"],
    relatedIndustries: ["builders", "plumbers", "roofers", "landscapers", "tree-surgeons", "garages"],
  },
  {
    slug: "crowborough",
    name: "Crowborough",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Crowborough — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Crowborough Businesses",
    metaDescription:
      "GuardX helps Crowborough businesses collect more Google reviews automatically. Improve your local reputation, rank higher in search, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Crowborough Businesses",
    intro:
      "Crowborough is a popular town in the Wealden district, attracting families and professionals who value quality local services. If you are a tradesperson, retailer, or service provider here, your Google reviews influence how potential customers perceive and choose you. GuardX automates the review process so you always put your best foot forward.\n\nOur email and SMS system sends personalised requests at the right moment, capturing genuine positive feedback from your customers and turning it into visible five-star reviews on Google.",
    localContext:
      "Crowborough sits on the edge of the Ashdown Forest and serves a wide catchment area. The town has a strong community spirit and a preference for local businesses. With customers increasingly checking Google before making decisions, building a strong review profile is essential for sustained growth.",
    relatedLocations: ["uckfield", "east-grinstead", "lewes", "sussex"],
    relatedIndustries: ["builders", "roofers", "tree-surgeons", "landscapers", "plumbers", "electricians"],
  },
  {
    slug: "newhaven",
    name: "Newhaven",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Newhaven — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Newhaven Businesses",
    metaDescription:
      "Automated review growth for Newhaven businesses. GuardX helps you build a five-star Google reputation, attract local customers, and grow your business.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Newhaven Businesses",
    intro:
      "Newhaven is a port town with a growing business community and regeneration projects bringing new opportunities. As the town evolves, local businesses need to ensure they are visible and trusted online. GuardX automates your Google review collection, helping you build the reputation that matches the quality of your work.\n\nOur system sends personalised email and SMS review requests after every job or service, making it effortless for customers to share their positive experience and for you to grow your online presence.",
    localContext:
      "Newhaven sits at the mouth of the River Ouse and benefits from its ferry port connection to France. The town is undergoing regeneration, with new businesses and services emerging. For local companies, a strong Google review profile helps attract both existing residents and newcomers to the area.",
    relatedLocations: ["lewes", "seaford", "brighton", "sussex", "peacehaven"],
    relatedIndustries: ["builders", "plumbers", "garages", "restaurants", "cleaning-companies"],
  },
  {
    slug: "seaford",
    name: "Seaford",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Seaford — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Seaford Businesses",
    metaDescription:
      "GuardX Seaford: automated Google review requests that help local businesses build trust, improve search visibility, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Seaford Businesses",
    intro:
      "Seaford is a charming coastal town with a tight-knit community that values local businesses. Your reputation in Seaford is everything, and Google reviews are how new customers discover and evaluate you. GuardX makes it simple to collect five-star reviews automatically, building your online presence without any effort.\n\nOur done-for-you system sends personalised review requests via email and SMS, guiding customers through the process and ensuring a steady stream of positive feedback that reinforces your local standing.",
    localContext:
      "Seaford sits between Newhaven and Eastbourne along the East Sussex coast. The town has a loyal residential base and a seasonal tourism boost. Local businesses benefit from word-of-mouth, but extending that trust online through Google reviews is key to reaching new customers and sustaining growth year-round.",
    relatedLocations: ["newhaven", "eastbourne", "lewes", "brighton", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "plumbers", "builders", "landscapers", "cleaning-companies"],
  },
  {
    slug: "eastbourne",
    name: "Eastbourne",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Eastbourne — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Eastbourne Businesses",
    metaDescription:
      "Grow your Eastbourne business with GuardX. Automated review requests that boost your Google visibility, build customer trust, and increase local revenue.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Eastbourne Businesses",
    intro:
      "Eastbourne is one of the largest and most visited towns in East Sussex, with a diverse economy spanning hospitality, retail, health, and trades. Competition for local customers is fierce, and your Google reviews are often the deciding factor. GuardX automates the review collection process so your reputation grows as fast as your business.\n\nOur platform sends personalised email and SMS review requests at the perfect moment, turning satisfied customers into visible five-star advocates. The result is more reviews, higher rankings, and a steady stream of new enquiries.",
    localContext:
      "Eastbourne is a major seaside resort with a population of over 100,000 and millions of annual visitors. The town supports a wide range of businesses, from hotels and restaurants to trades and professional services. With tourism driving much of the local economy, a strong Google review profile is essential for capturing both resident and visitor custom.",
    relatedLocations: ["seaford", "bexhill", "lewes", "hastings", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "salons", "plumbers", "builders", "dentists"],
  },
  {
    slug: "bexhill",
    name: "Bexhill",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Bexhill — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bexhill Businesses",
    metaDescription:
      "GuardX Bexhill: automated review requests that help local businesses build stronger Google reputations, rank higher in search, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bexhill Businesses",
    intro:
      "Bexhill-on-Sea is a characterful coastal town with a loyal residential community and a growing business scene. Whether you are a tradesperson, a cafe owner, or a service provider, your Google reviews shape how new customers find and choose you. GuardX automates the entire process, so your reputation grows effortlessly.\n\nOur system sends personalised review requests after every customer interaction, ensuring a consistent flow of genuine five-star reviews that build trust and improve your search visibility.",
    localContext:
      "Bexhill sits between Eastbourne and Hastings along the East Sussex coast. The town is known for the De La Warr Pavilion and its Edwardian heritage, attracting visitors and new residents. Local businesses benefit from a strong community but need Google visibility to reach newcomers and visitors searching online.",
    relatedLocations: ["eastbourne", "hastings", "sussex", "lewes", "rye"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "cafes", "painters-and-decorators", "estate-agents"],
  },
  {
    slug: "hastings",
    name: "Hastings",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Hastings — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Hastings Businesses",
    metaDescription:
      "GuardX helps Hastings businesses grow with automated Google review requests. Build your five-star reputation, improve local rankings, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Hastings Businesses",
    intro:
      "Hastings is a historic seaside town with a creative, entrepreneurial business community. From the Old Town's independent shops and restaurants to trades businesses across the town, Google reviews are a critical part of attracting and retaining customers. GuardX automates review collection so your online reputation keeps pace with your ambitions.\n\nOur email and SMS review system sends personalised requests at the right time, making it easy for your customers to share their positive experience. The result: a growing Google profile that drives new business and builds lasting trust.",
    localContext:
      "Hastings and St Leonards form a vibrant coastal community with a strong independent business scene. The town attracts tourists, creative professionals, and new residents. With regeneration projects underway, the business landscape is evolving fast — and businesses with strong online reputations are best positioned to benefit.",
    relatedLocations: ["bexhill", "rye", "eastbourne", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "builders", "plumbers", "salons", "barbers"],
  },
  {
    slug: "rye",
    name: "Rye",
    region: "sussex",
    county: "East Sussex",
    metaTitle: "GuardX Rye — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Rye Businesses",
    metaDescription:
      "GuardX helps Rye businesses collect more Google reviews automatically. Perfect for hospitality, retail, and trades in this popular East Sussex town.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Rye Businesses",
    intro:
      "Rye is one of the most picturesque towns in East Sussex, drawing visitors from across the UK and beyond. For businesses in Rye — from boutique hotels and restaurants to local trades — Google reviews are the digital equivalent of a personal recommendation. GuardX automates your review collection so every happy customer becomes a visible endorsement.\n\nOur system sends personalised email and SMS review requests after every visit or job, capturing positive feedback while it is fresh. The steady flow of genuine reviews strengthens your reputation and keeps you top of search results.",
    localContext:
      "Rye is a medieval town with a thriving tourism economy. Visitors frequently research restaurants, hotels, and local services on Google before arriving, making a strong review profile essential. For local businesses, each five-star review is an investment in future bookings and enquiries.",
    relatedLocations: ["hastings", "bexhill", "sussex"],
    relatedIndustries: ["restaurants", "cafes", "estate-agents", "builders", "painters-and-decorators", "locksmiths"],
  },

  // ─── Major UK Cities ───────────────────────────────────────────────
  {
    slug: "london",
    name: "London",
    region: "uk-cities",
    metaTitle: "GuardX London — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for London Businesses",
    metaDescription:
      "GuardX helps London businesses grow with automated Google review requests. Stand out in the UK's most competitive market with a five-star reputation.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for London Businesses",
    intro:
      "London is the most competitive business market in the UK. With millions of businesses fighting for attention, your Google reviews are one of the most powerful differentiators you have. GuardX gives London businesses an automated review growth system that consistently builds your five-star reputation.\n\nWhether you are a tradesperson in South London, a restaurant in Soho, or a salon in East London, our platform sends personalised email and SMS review requests after every job or visit. More reviews mean higher rankings, more trust, and more customers.",
    localContext:
      "London is home to over nine million people and hundreds of thousands of businesses. The sheer scale of competition means that even excellent businesses can be overlooked without a strong online reputation. Google reviews are the most trusted signal for consumers choosing between local service providers, making automated review collection essential.",
    relatedLocations: ["reading", "cambridge", "oxford", "southampton", "brighton"],
    relatedIndustries: ["restaurants", "salons", "plumbers", "electricians", "estate-agents", "dentists"],
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "uk-cities",
    metaTitle: "GuardX Manchester — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Manchester Businesses",
    metaDescription:
      "Grow your Manchester business with GuardX. Automated review requests that boost Google visibility, build trust, and bring in more local customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Manchester Businesses",
    intro:
      "Manchester is one of the UK's most dynamic cities, with a thriving business scene that spans everything from hospitality to professional services. In this competitive market, your Google reviews can be the difference between a customer choosing you or a competitor. GuardX automates the review process so your reputation grows consistently.\n\nOur system sends personalised email and SMS review requests after every customer interaction. No chasing, no awkward conversations — just steady, organic review growth that puts your business ahead.",
    localContext:
      "Greater Manchester is the UK's second-largest metropolitan area, with a population of nearly three million. The city has a diverse economy and a strong independent business culture. With consumers increasingly relying on Google reviews to make local decisions, a strong review profile is essential for businesses of all sizes.",
    relatedLocations: ["liverpool", "leeds", "sheffield", "birmingham", "nottingham"],
    relatedIndustries: ["builders", "restaurants", "barbers", "gyms", "plumbers", "garages"],
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "uk-cities",
    metaTitle: "GuardX Birmingham — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Birmingham Businesses",
    metaDescription:
      "GuardX Birmingham: automated Google review requests that help local businesses build five-star reputations, improve visibility, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Birmingham Businesses",
    intro:
      "Birmingham is the UK's second city and a major commercial hub. From Digbeth's independent businesses to the Jewellery Quarter's established firms, competition for local customers is intense. GuardX provides Birmingham businesses with automated review collection that builds trust and boosts Google rankings.\n\nOur platform sends personalised review requests via email and SMS after every job, appointment, or purchase. The result: a steady stream of genuine five-star reviews that set you apart from the competition.",
    localContext:
      "Birmingham has a population of over one million and serves as an economic engine for the West Midlands. The city's diverse economy includes manufacturing, services, hospitality, and a growing tech sector. Businesses across all sectors benefit from a strong Google review profile that signals reliability and quality.",
    relatedLocations: ["manchester", "nottingham", "leicester", "sheffield", "leeds"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "mechanics", "estate-agents", "dentists"],
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "uk-cities",
    metaTitle: "GuardX Leeds — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Leeds Businesses",
    metaDescription:
      "GuardX helps Leeds businesses generate more Google reviews automatically. Build your local reputation, rank higher in search, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Leeds Businesses",
    intro:
      "Leeds is one of the fastest-growing cities in the UK, with a vibrant economy and a strong sense of community. Whether you run a cafe in the city centre, a trades business in the suburbs, or a professional services firm, your Google reviews influence how customers find and choose you. GuardX automates the process.\n\nOur email and SMS system sends personalised review requests at the right moment, ensuring a steady flow of genuine five-star reviews that drive new business and strengthen your reputation.",
    localContext:
      "Leeds is the largest city in West Yorkshire, with a diverse economy spanning financial services, digital, retail, and hospitality. The city's growing population means increasing demand for local services — and increasing competition. A strong Google review profile helps businesses stand out and capture more of this growing market.",
    relatedLocations: ["manchester", "sheffield", "liverpool", "newcastle", "nottingham"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "salons", "electricians", "landscapers"],
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "uk-cities",
    metaTitle: "GuardX Liverpool — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Liverpool Businesses",
    metaDescription:
      "Grow your Liverpool business with GuardX. Automated Google review requests that build trust, improve local visibility, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Liverpool Businesses",
    intro:
      "Liverpool is a city with enormous character and a fiercely loyal local customer base. But in a competitive market, word-of-mouth alone is not enough — your Google reviews need to reflect the quality of your work. GuardX automates review collection so your online reputation grows as steadily as your business.\n\nOur platform sends personalised email and SMS review requests after every customer interaction, making it easy for satisfied customers to share their experience. More reviews mean more visibility, more trust, and more revenue.",
    localContext:
      "Liverpool has a population of over 900,000 in the metro area and a diverse economy spanning hospitality, retail, creative industries, and trades. The city's strong community ties mean that reputation matters enormously — and increasingly, that reputation is shaped by Google reviews.",
    relatedLocations: ["manchester", "leeds", "sheffield", "birmingham"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "barbers", "mechanics", "cleaning-companies"],
  },
  {
    slug: "bristol",
    name: "Bristol",
    region: "uk-cities",
    metaTitle: "GuardX Bristol — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bristol Businesses",
    metaDescription:
      "GuardX Bristol: automated review requests that help local businesses build stronger Google reputations, rank higher, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Bristol Businesses",
    intro:
      "Bristol is one of the UK's most innovative and independent-minded cities. Local businesses here thrive on community support and strong reputations. GuardX helps Bristol businesses take that reputation online by automating Google review collection, ensuring every satisfied customer has the chance to share their experience.\n\nOur email and SMS system sends personalised review requests at the perfect moment, building a five-star Google profile that drives new enquiries and cements your position in the local market.",
    localContext:
      "Bristol has a population of over 470,000 and is known for its thriving independent business scene, creative industries, and strong community values. With consumers increasingly turning to Google for local recommendations, a visible review profile is essential for businesses across all sectors.",
    relatedLocations: ["cardiff", "southampton", "reading", "birmingham", "oxford"],
    relatedIndustries: ["restaurants", "cafes", "builders", "plumbers", "salons", "landscapers"],
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "uk-cities",
    metaTitle: "GuardX Sheffield — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Sheffield Businesses",
    metaDescription:
      "GuardX helps Sheffield businesses collect more Google reviews automatically. Build trust, improve local search rankings, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Sheffield Businesses",
    intro:
      "Sheffield has a proud industrial heritage and a modern economy that supports thousands of local businesses. Whether you work in trades, hospitality, health, or retail, your Google reviews directly impact how many new customers find and choose you. GuardX automates the review collection process so your reputation grows without any extra work.\n\nOur personalised email and SMS review requests are sent at just the right time, converting satisfied customers into five-star advocates for your business on Google.",
    localContext:
      "Sheffield is a major city in South Yorkshire with a population of over 580,000. Its economy has evolved from steel manufacturing to a diverse mix of services, advanced manufacturing, health, and education. Local businesses competing in this evolving market benefit significantly from a strong online reputation.",
    relatedLocations: ["leeds", "manchester", "nottingham", "birmingham", "leicester"],
    relatedIndustries: ["builders", "plumbers", "roofers", "mechanics", "restaurants", "gyms"],
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "uk-cities",
    metaTitle: "GuardX Nottingham — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Nottingham Businesses",
    metaDescription:
      "Grow your Nottingham business with GuardX. Automated Google review requests that build your reputation, improve visibility, and attract more local customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Nottingham Businesses",
    intro:
      "Nottingham is a lively city with a strong independent business community. From the Lace Market to the suburbs, local businesses rely on visibility and trust to attract customers. GuardX provides an automated review growth system that ensures your Google profile reflects the quality of your service.\n\nOur platform sends personalised email and SMS review requests after every customer interaction, making it simple for happy customers to leave positive feedback. The result: more reviews, higher rankings, and steady business growth.",
    localContext:
      "Nottingham has a population of over 330,000 and a metropolitan area of over 800,000. The city's economy spans retail, hospitality, creative industries, and trades. With two major universities bringing a constant flow of new residents, local businesses that invest in their online reputation are well-positioned to capture this dynamic market.",
    relatedLocations: ["sheffield", "leicester", "birmingham", "leeds", "manchester"],
    relatedIndustries: ["restaurants", "cafes", "builders", "plumbers", "salons", "barbers"],
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "uk-cities",
    metaTitle: "GuardX Leicester — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Leicester Businesses",
    metaDescription:
      "GuardX Leicester: automated Google review requests that help local businesses build five-star reputations and attract more customers across the city.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Leicester Businesses",
    intro:
      "Leicester is one of the most diverse and dynamic cities in the East Midlands. Local businesses here serve a wide range of communities and need a strong online presence to stand out. GuardX automates your Google review collection, ensuring your reputation grows consistently and authentically.\n\nOur email and SMS system sends personalised review requests to your customers at the right moment, building a five-star profile that attracts new business and reinforces customer loyalty.",
    localContext:
      "Leicester has a population of over 370,000 and a diverse economy that includes textiles, food manufacturing, retail, and services. The city's multicultural character means businesses serve varied communities, and a strong Google review profile helps build trust across all customer segments.",
    relatedLocations: ["nottingham", "birmingham", "sheffield", "milton-keynes", "cambridge"],
    relatedIndustries: ["restaurants", "builders", "garages", "salons", "plumbers", "electricians"],
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    region: "uk-cities",
    metaTitle: "GuardX Newcastle — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Newcastle Businesses",
    metaDescription:
      "GuardX helps Newcastle businesses grow with automated Google review requests. Build your reputation, improve local rankings, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Newcastle Businesses",
    intro:
      "Newcastle upon Tyne is a vibrant city with a strong identity and a loyal local customer base. Whether you run a restaurant on the Quayside, a trades business in Jesmond, or a salon in the city centre, your Google reviews are critical for attracting new customers. GuardX automates the process so your reputation grows steadily.\n\nOur personalised email and SMS review requests are sent after every customer interaction, making it effortless for satisfied customers to leave positive feedback on Google.",
    localContext:
      "Newcastle has a population of over 300,000 and anchors the wider Tyne and Wear metropolitan area. The city has a diverse economy spanning hospitality, digital, professional services, and trades. With a strong culture of supporting local businesses, a visible Google review profile helps convert community loyalty into measurable online trust.",
    relatedLocations: ["leeds", "manchester", "edinburgh", "sheffield"],
    relatedIndustries: ["restaurants", "barbers", "builders", "plumbers", "gyms", "mechanics"],
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "uk-cities",
    metaTitle: "GuardX Glasgow — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Glasgow Businesses",
    metaDescription:
      "Grow your Glasgow business with GuardX. Automated Google review requests that build trust, boost visibility, and bring in more local customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Glasgow Businesses",
    intro:
      "Glasgow is Scotland's largest city and one of the UK's most vibrant business markets. From the Merchant City to the West End, local businesses need strong Google reviews to stand out in this competitive landscape. GuardX automates the entire review collection process, giving Glasgow businesses a reliable path to a five-star reputation.\n\nOur platform sends personalised email and SMS review requests at the right moment, turning every satisfied customer into a visible advocate for your business.",
    localContext:
      "Glasgow has a population of over 630,000 and a metropolitan area of nearly two million. The city's economy is diverse, with strengths in hospitality, creative industries, health, financial services, and trades. In this large and competitive market, businesses with strong Google reviews consistently attract more customers.",
    relatedLocations: ["edinburgh", "newcastle", "manchester", "leeds"],
    relatedIndustries: ["restaurants", "builders", "plumbers", "barbers", "salons", "dentists"],
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    region: "uk-cities",
    metaTitle: "GuardX Edinburgh — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Edinburgh Businesses",
    metaDescription:
      "GuardX Edinburgh: automated Google review requests that help local businesses build trust, improve visibility, and attract more customers in Scotland's capital.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Edinburgh Businesses",
    intro:
      "Edinburgh is a world-class city that attracts millions of visitors alongside a strong resident population. For local businesses, Google reviews are the bridge between tourist curiosity and paying customers. GuardX automates review collection so your reputation grows consistently, capturing feedback from both locals and visitors.\n\nOur email and SMS system sends personalised review requests after every interaction, ensuring a steady stream of genuine five-star reviews that boost your search visibility and build lasting trust.",
    localContext:
      "Edinburgh has a population of over 540,000 and welcomes millions of tourists annually. The city's economy combines tourism, financial services, technology, and a thriving food and drink scene. Businesses that build strong Google review profiles benefit from both local loyalty and the constant flow of visitors searching for trusted local services.",
    relatedLocations: ["glasgow", "newcastle", "leeds", "manchester"],
    relatedIndustries: ["restaurants", "cafes", "salons", "plumbers", "builders", "estate-agents"],
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    region: "uk-cities",
    metaTitle: "GuardX Cardiff — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Cardiff Businesses",
    metaDescription:
      "GuardX helps Cardiff businesses grow with automated Google review requests. Build your five-star reputation, improve local rankings, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Cardiff Businesses",
    intro:
      "Cardiff is Wales's capital and its largest commercial centre. From the Bay to the city centre, local businesses compete for the attention of a growing population. GuardX gives Cardiff businesses an automated review growth system that builds a five-star Google reputation without any manual effort.\n\nOur platform sends personalised email and SMS review requests after every job, visit, or purchase. More genuine reviews mean higher search rankings, more trust, and more customers walking through your door.",
    localContext:
      "Cardiff has a population of over 360,000 and serves as the economic hub for South Wales. The city has a diverse economy spanning hospitality, professional services, retail, and trades. With ongoing development and a growing population, local businesses that invest in their Google reputation are best positioned to capture new opportunities.",
    relatedLocations: ["bristol", "birmingham", "southampton", "liverpool"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "estate-agents", "garages", "electricians"],
  },
  {
    slug: "belfast",
    name: "Belfast",
    region: "uk-cities",
    metaTitle: "GuardX Belfast — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Belfast Businesses",
    metaDescription:
      "Grow your Belfast business with GuardX. Automated review requests that boost your Google visibility, build customer trust, and attract more local business.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Belfast Businesses",
    intro:
      "Belfast is a city experiencing remarkable growth and renewal. Local businesses across all sectors are competing for the attention of a confident, expanding market. GuardX helps Belfast businesses stand out by automating Google review collection, ensuring your reputation grows as fast as the city itself.\n\nOur email and SMS system sends personalised review requests to your customers at the perfect moment, making it simple for them to leave positive feedback. The result: a stronger Google profile that attracts more enquiries and builds lasting trust.",
    localContext:
      "Belfast has a population of over 340,000 and is the commercial heart of Northern Ireland. The city has undergone significant regeneration, with a thriving hospitality scene, growing tech sector, and strong trades community. Businesses that build visible online trust through Google reviews gain a significant competitive advantage.",
    relatedLocations: ["glasgow", "liverpool", "manchester", "edinburgh"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "barbers", "mechanics", "dentists"],
  },
  {
    slug: "southampton",
    name: "Southampton",
    region: "uk-cities",
    metaTitle: "GuardX Southampton — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Southampton Businesses",
    metaDescription:
      "GuardX Southampton: automated Google review requests that help local businesses build five-star reputations, improve visibility, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Southampton Businesses",
    intro:
      "Southampton is a major port city with a diverse business community. From the city centre to the suburbs, local businesses compete for a large and varied customer base. GuardX automates your Google review collection, ensuring your reputation reflects the quality of your work and drives new business.\n\nOur personalised email and SMS review requests are sent at the right time, making it effortless for customers to share their positive experience. Consistent reviews build trust, improve rankings, and grow revenue.",
    localContext:
      "Southampton has a population of over 250,000 and serves as a commercial hub for Hampshire. The city's economy is driven by its port, university sector, retail, hospitality, and trades. With a large student population and diverse communities, businesses benefit from a strong Google review profile that appeals to all customer segments.",
    relatedLocations: ["portsmouth", "reading", "bristol", "london", "brighton"],
    relatedIndustries: ["restaurants", "builders", "plumbers", "garages", "salons", "cleaning-companies"],
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    region: "uk-cities",
    metaTitle: "GuardX Portsmouth — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Portsmouth Businesses",
    metaDescription:
      "GuardX helps Portsmouth businesses collect more Google reviews automatically. Build trust, improve local rankings, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Portsmouth Businesses",
    intro:
      "Portsmouth is a historic naval city with a strong and growing business community. Whether you are a tradesperson, a restaurant owner, or a service provider, your Google reviews play a crucial role in how new customers find and evaluate you. GuardX automates the review process so your reputation grows consistently.\n\nOur email and SMS system sends personalised review requests after every customer interaction, capturing genuine feedback and building a visible five-star profile on Google.",
    localContext:
      "Portsmouth has a population of over 210,000 on Portsea Island, making it one of the most densely populated cities in the UK. Its economy combines naval heritage, tourism, retail, and a strong trades sector. In such a compact market, Google reviews are a powerful way for businesses to stand out and attract local customers.",
    relatedLocations: ["southampton", "chichester", "brighton", "reading", "london"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "mechanics", "electricians", "barbers"],
  },
  {
    slug: "reading",
    name: "Reading",
    region: "uk-cities",
    metaTitle: "GuardX Reading — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Reading Businesses",
    metaDescription:
      "Grow your Reading business with GuardX. Automated Google review requests that build trust, boost local visibility, and bring in more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Reading Businesses",
    intro:
      "Reading is one of the UK's most prosperous and well-connected towns, with a large and demanding customer base. Local businesses here face competition from both independents and national brands. GuardX gives Reading businesses an edge by automating Google review collection, building the trust and visibility needed to win customers.\n\nOur platform sends personalised email and SMS review requests after every interaction, ensuring a steady flow of genuine five-star reviews that improve your search rankings and attract more business.",
    localContext:
      "Reading has a population of over 230,000 and sits at the heart of the Thames Valley economy. The town has a strong mix of professional services, tech companies, retail, hospitality, and trades. With excellent transport links to London and a highly connected population, online reputation matters enormously for local businesses.",
    relatedLocations: ["oxford", "london", "southampton", "milton-keynes", "cambridge"],
    relatedIndustries: ["estate-agents", "builders", "plumbers", "restaurants", "dentists", "electricians"],
  },
  {
    slug: "oxford",
    name: "Oxford",
    region: "uk-cities",
    metaTitle: "GuardX Oxford — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Oxford Businesses",
    metaDescription:
      "GuardX Oxford: automated review requests that help local businesses build five-star Google reputations and attract more customers in one of the UK's most competitive markets.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Oxford Businesses",
    intro:
      "Oxford is a world-famous city with a unique blend of academic prestige and vibrant local commerce. For businesses here, standing out means having visible proof of quality. GuardX automates your Google review collection, ensuring your reputation matches the standard your customers expect.\n\nOur personalised email and SMS review requests are sent after every job, visit, or service, making it effortless for customers to leave positive feedback. The result: a growing Google profile that attracts new business from both residents and the city's many visitors.",
    localContext:
      "Oxford has a population of over 150,000, swelling significantly with students and tourists. The city's economy combines education, tourism, technology, and a strong local services sector. With a highly educated and discerning customer base, Google reviews carry particular weight in purchasing decisions.",
    relatedLocations: ["reading", "milton-keynes", "london", "cambridge", "bristol"],
    relatedIndustries: ["restaurants", "cafes", "builders", "plumbers", "estate-agents", "dentists"],
  },
  {
    slug: "cambridge",
    name: "Cambridge",
    region: "uk-cities",
    metaTitle: "GuardX Cambridge — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Cambridge Businesses",
    metaDescription:
      "GuardX helps Cambridge businesses grow with automated Google review requests. Build your reputation, improve local visibility, and win more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Cambridge Businesses",
    intro:
      "Cambridge is a city of innovation and high expectations. Local businesses here serve a discerning customer base that values quality and reliability. GuardX helps Cambridge businesses demonstrate that quality through automated Google review collection, building a five-star profile that earns trust and drives growth.\n\nOur email and SMS system sends personalised review requests at the right moment, ensuring a steady flow of genuine reviews that strengthen your position in local search results.",
    localContext:
      "Cambridge has a population of over 145,000 and is home to one of the world's leading universities. The city's economy extends well beyond academia, with a thriving tech sector, strong hospitality industry, and active trades community. Businesses that invest in their Google reputation benefit from the city's culture of research and informed decision-making.",
    relatedLocations: ["oxford", "norwich", "london", "milton-keynes", "leicester"],
    relatedIndustries: ["restaurants", "cafes", "builders", "plumbers", "dentists", "salons"],
  },
  {
    slug: "milton-keynes",
    name: "Milton Keynes",
    region: "uk-cities",
    metaTitle: "GuardX Milton Keynes — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Milton Keynes Businesses",
    metaDescription:
      "Grow your Milton Keynes business with GuardX. Automated Google review requests that build trust, improve search rankings, and bring in more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Milton Keynes Businesses",
    intro:
      "Milton Keynes is one of the UK's fastest-growing cities, with new businesses and residents arriving constantly. In this expanding market, your Google reviews are essential for establishing trust and standing out. GuardX automates the review collection process, ensuring your reputation grows alongside the city.\n\nOur platform sends personalised email and SMS review requests after every customer interaction, building a five-star Google profile that attracts new business and strengthens your market position.",
    localContext:
      "Milton Keynes has a population of over 280,000 and continues to grow rapidly. The city's modern infrastructure and strong economy attract businesses across all sectors, from trades and retail to tech and professional services. For businesses in this dynamic market, a strong online reputation is essential for capturing the attention of a mobile, digitally savvy population.",
    relatedLocations: ["oxford", "reading", "london", "leicester", "cambridge"],
    relatedIndustries: ["builders", "plumbers", "electricians", "estate-agents", "garages", "landscapers"],
  },
  {
    slug: "norwich",
    name: "Norwich",
    region: "uk-cities",
    metaTitle: "GuardX Norwich — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Norwich Businesses",
    metaDescription:
      "GuardX Norwich: automated Google review requests that help local businesses build five-star reputations, improve visibility, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Norwich Businesses",
    intro:
      "Norwich is the regional capital of Norfolk and a thriving centre for business, culture, and tourism. Local businesses here benefit from a loyal customer base, but competition for new customers is fierce. GuardX automates your Google review collection, turning satisfied customers into visible five-star advocates for your business.\n\nOur email and SMS system sends personalised review requests at the perfect moment, building a review profile that improves your search rankings and drives new enquiries.",
    localContext:
      "Norwich has a population of over 210,000 and serves as the commercial hub for East Anglia. The city has a rich independent business scene, with strengths in retail, hospitality, creative industries, and trades. A strong Google review profile helps businesses here reach both loyal locals and the many visitors drawn by the city's heritage and culture.",
    relatedLocations: ["cambridge", "leicester", "london", "nottingham"],
    relatedIndustries: ["restaurants", "builders", "plumbers", "estate-agents", "salons", "painters-and-decorators"],
  },
  {
    slug: "plymouth",
    name: "Plymouth",
    region: "uk-cities",
    metaTitle: "GuardX Plymouth — Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Plymouth Businesses",
    metaDescription:
      "GuardX helps Plymouth businesses collect more Google reviews automatically. Build your reputation, improve local rankings, and attract more customers.",
    h1: "Web Design, SEO & Review Generation System

Includes:

Simple system to send customers directly to your Google review page
Optimised review request experience for higher response rates
Direct review links for easy customer access
Helps improve trust and credibility for your business
Supports long-term reputation growth through consistent review collection
 for Plymouth Businesses",
    intro:
      "Plymouth is a major city in Devon's south coast with a strong maritime heritage and a growing economy. Local businesses here serve a diverse community, from city-centre retailers to suburban trades. GuardX automates your Google review collection, ensuring your online reputation accurately reflects the quality of your service.\n\nOur personalised email and SMS review requests are sent after every customer interaction, making it easy for happy customers to leave five-star reviews. The result: higher rankings, more visibility, and a steady stream of new business.",
    localContext:
      "Plymouth has a population of over 260,000 and is the largest city in Devon. Its economy spans naval services, retail, hospitality, education, and trades. As a regional centre, businesses here serve both the city and surrounding rural areas, making a strong Google review profile essential for reaching a wide customer base.",
    relatedLocations: ["bristol", "southampton", "cardiff", "birmingham"],
    relatedIndustries: ["builders", "plumbers", "restaurants", "mechanics", "roofers", "electricians"],
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug)
}

export function getSussexLocations(): Location[] {
  return locations.filter((l) => l.region === "sussex")
}

export function getUKCityLocations(): Location[] {
  return locations.filter((l) => l.region === "uk-cities")
}

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'rx8bsd2v',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

// ─── STATIC FALLBACKS ─────────────────────────────────────────────────────────

const staticFallback = {
  business: {
    name: 'First Electrical Supply',
    tagline: "Toronto's Trade-Trusted Electrical Supply House",
    phone: '(416) 882-7070',
    email: 'info@firstelectricalsupply.com',
    address: '28 Industrial St, Unit 106, East York, ON M4G 1Y9',
    hours: 'Mon–Fri 7am–5pm · Sat 8am–12pm',
    mapEmbedUrl: '',
    googleRating: 5.0,
    reviewCount: 19,
    yearsInBusiness: 20,
  },
  hero: {
    headline: "Built for Pros Who Can't Afford Downtime",
    subheadline: "GTA's independent electrical supply house — stocked, knowledgeable, and actually answers the phone.",
    cta1: { label: 'Get a Free Quote', href: '#quote' },
    cta2: { label: 'Call (416) 882-7070', href: 'tel:+14168827070' },
    heroVideoUrl: null as string | null,
    heroImageUrl: null as string | null,
  },
  trustSignals: [
    { value: '5.0★', label: 'Google Rating', sub: '19 reviews, zero complaints' },
    { value: '20+', label: 'Years in Business', sub: 'Serving the GTA since day one' },
    { value: 'Free', label: 'GTA Delivery', sub: 'On orders over $1,000 + tax' },
    { value: 'Same-Day', label: 'Order Fulfillment', sub: 'When you need it, not tomorrow' },
  ],
  whyUs: [
    { icon: 'Phone', title: 'We Actually Answer the Phone', body: 'No voicemail maze. No "press 1 for…" No waiting on hold while your job sits. Real humans at the counter and on the line — every time.' },
    { icon: 'Brain', title: 'We Know the Trade Slang', body: '"Pig tail", "whip", "Romex" — our counter staff knows what you\'re asking for before you finish the sentence. No blank stares, no Googling on your time.' },
    { icon: 'Package', title: 'Right Order. Every Time.', body: 'Wrong substitutions, missing items, and surprise back-orders kill jobs. We confirm before we ship and call before you drive in.' },
    { icon: 'DollarSign', title: "Prices That Don't Gouge", body: "We're not Rexel. We don't jack prices when a product goes scarce. Competitive pricing, transparent accounts, no games." },
    { icon: 'Store', title: 'Independently Owned', body: 'No corporate buyout gutting our stock levels. The owners are here. The decision-makers are reachable. And we still hustle like our name is on the line — because it is.' },
    { icon: 'Zap', title: 'Emergency Ready', body: "Service calls don't wait. When you're in a bind mid-job, we move fast. Same-day fulfillment, and we've been known to make it happen when it really matters." },
  ],
  whatWeDo: {
    badge: 'What we do',
    headline: 'Everything Electrical.',
    headlineAccent: 'One Reliable Source.',
    body: "From the rough-in to the finish — wire, panels, conduit, lighting, controls, tools — we stock what the GTA's electrical trades actually need, not what looks good on a product sheet.",
    bulletList: [
      'Electrical distribution & switchgear',
      'Wire, cable & conduit systems',
      'Lighting: LED, emergency, landscape, controls',
      'Security cameras, NVR/DVR, CCTV accessories',
      'Wiring devices, plugs, motion sensors',
      'HVAC, fans, heat pumps, snow melt',
      'Tools, PPE & job site accessories',
      'Low voltage A/V, speakers, data accessories',
    ],
    ctaLabel: 'Browse All Categories',
    ctaHref: '/products',
    imageUrl: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Electrical supply warehouse',
  },
  categories: [
    { name: 'Security & Camera', icon: '📷', slug: 'security-camera', desc: 'IP, AHD, PTZ & WiFi cameras, NVR/DVR, CCTV accessories', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Distribution', icon: '⚡', slug: 'distribution', desc: 'Breakers, panel boards, safety switches, EV charging, surge protection', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Lighting', icon: '💡', slug: 'lighting', desc: 'LED, downlights, emergency, landscape, controls & accessories', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Wire, Cord & Cable', icon: '🔌', slug: 'wire-cord-cable', desc: 'Armoured, NMD, Cat 6/6A, fire alarm, industrial cables & more', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Wiring Devices', icon: '🔧', slug: 'wiring-devices', desc: 'Receptacles, switches, plugs, motion sensors, floor boxes', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Conduit & Fittings', icon: '🏗️', slug: 'conduit-fittings-accessories', desc: 'EMT, ENT, liquid tight, conduit bodies & fittings', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Boxes & Covers', icon: '📦', slug: 'boxes-covers', desc: 'Cast boxes, wall/ceiling, weatherproof, masonry, concrete', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Tools & Hardware', icon: '🔩', slug: 'tools-hardware', desc: 'Strippers, crimpers, test & measure, PPE, tool kits', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Low Voltage A/V', icon: '🎵', slug: 'low-voltage-audio-video', desc: 'Speakers, HDMI, cable management, racks & data accessories', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'Smoke & CO Detectors', icon: '🚨', slug: 'smoke-carbon-monoxide-detectors', desc: 'Smoke alarms, CO alarms, combination units & fire safety', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
    { name: 'HVAC & Vacuum', icon: '🌡️', slug: 'hvac-vacuum-systems', desc: 'Exhaust fans, heat pumps, ERV, snow melt, electric fireplaces', tagline: null, longDesc: null, keyProducts: [], highlight: null, imageUrl: null, imageAlt: null },
  ],
  whoWeServe: [
    { title: 'Electrical Contractors', desc: 'Fast quotes, account pricing, reliable stock and same-day pickup or GTA delivery on large orders.' },
    { title: 'Licensed Electricians', desc: 'Counter staff who speak your language. No homeowner queues. No explaining what a "Wiremold" is.' },
    { title: 'General Contractors', desc: 'Project estimation support, specification-matched products, and consistent supply across job phases.' },
    { title: 'Property Managers', desc: 'Ongoing supply for maintenance and capital projects. Build an account and stop paying list price.' },
    { title: 'Industrial & Commercial', desc: 'Switchgear, automation, control, networking — deep product knowledge for complex installations.' },
    { title: 'Homeowners & DIY', desc: "Walk-ins welcome. No trade account required. We'll help you find exactly what you need." },
  ],
  workflow: [
    { step: '01', title: 'Tell Us What You Need', desc: 'Call, email, or walk in. Describe the job — our team matches products to your spec, not the other way around.' },
    { step: '02', title: 'Get a Fast, Honest Quote', desc: 'No inflated list prices. Account holders get wholesale rates. Quotes turned around same day for standard orders.' },
    { step: '03', title: 'We Confirm Before You Commit', desc: 'We verify stock before confirming. No surprises on delivery day. Substitutions are called in, never assumed.' },
    { step: '04', title: 'Pickup or GTA Delivery', desc: 'Pick up at our East York location or get free delivery on orders over $1,000 (before tax) anywhere in the GTA.' },
  ],
  testimonials: [
    { text: 'Needed a few parts to setup an EV charger and these guys were awesome. Friendly service, knowledgeable staff and prices were way cheaper than your box store. What more can you ask for.', author: '', theme: 'EV Charger Setup' },
    { text: 'Professional staff, excellent efficient service, huge variety of products, unbeatable prices. Highly recommended.', author: '', theme: 'General' },
    { text: "Based on my experience the guys at First Electric care about customer satisfaction. They did the research for me and although they didn't carry it, they found what I needed at a different supplier. Going above and beyond.", author: '', theme: 'Specialty Parts' },
    { text: 'It is always a pleasure doing business with First Electrical Supply. Thank you to the team for your consistent support and professionalism. We truly appreciate the collaboration.', author: '', theme: 'B2B Partnership' },
  ],
  finalCta: {
    badge: 'East York, ON · Mon–Fri 7am–5pm · Sat 8am–12pm',
    headline: "Stop Mid-Job Supply Runs.",
    headlineAccent: "Start Every Job Stocked.",
    body: "Open a trade account. Get wholesale pricing. Tell us what you need and we'll have it ready — pickup or free GTA delivery on orders over $1,000.",
    primaryCtaLabel: 'Get a Free Quote',
    primaryCtaHref: '#quote',
    secondaryCtaLabel: '(416) 882-7070',
    secondaryCtaHref: 'tel:+14168827070',
    trustLine: 'Serving the GTA for 20+ years · 5.0★ on Google · Independently owned and operated',
  },
  productsPage: {
    seoTitle: null as string | null,
    seoDescription: null as string | null,
    heroBadge: '11 Categories · Thousands of SKUs',
    heroHeadline: 'Everything You Need to Get the Job Done.',
    heroSubheadline: 'Stocked for the full scope of residential, commercial, and industrial electrical work across the GTA. No chasing multiple suppliers. One call, one order, one delivery.',
    heroImageUrl: null as string | null,
    stats: [
      { val: 'Eleven', label: 'Product Categories' },
      { val: '1,000s', label: 'SKUs In Stock' },
      { val: 'Same Day', label: 'Order Fulfillment' },
      { val: 'Free', label: 'GTA Delivery on $1k+' },
    ],
    ctaBandHeadline: "We Source What We Don't Stock.",
    ctaBandBody: "If it's not on the shelf, our team will find it. We work with a broad supplier network and can special-order specialty products, uncommon ratings, and brand-specific equipment — often with turnaround times faster than the big box chains.",
    quoteHeadline: "Ready to Order? Let's Talk.",
    quoteBody: 'Call us, email us, or fill out the form on our contact page. We respond same business day with pricing, stock confirmation, and delivery options.',
  },
  contactPage: {
    seoTitle: null as string | null,
    seoDescription: null as string | null,
    heroBadge: 'Get in Touch',
    heroHeadline: 'We Actually Answer the Phone.',
    heroSubheadline: 'Call, email, or walk in. Our team is ready to quote, confirm stock, and get your order moving — same business day.',
    heroImageUrl: null as string | null,
    faqItems: [] as Array<{ question: string; answer: string }>,
  },
};

// ─── IMAGE URL HELPER ─────────────────────────────────────────────────────────

function imageUrl(asset: any): string | null {
  if (!asset?.asset?._ref) return null;
  const ref: string = asset.asset._ref;
  // ref format: image-<id>-<width>x<height>-<format>
  const [, id, dimensions, format] = ref.split('-');
  return `https://cdn.sanity.io/images/rx8bsd2v/production/${id}-${dimensions}.${format}`;
}

function fileUrl(asset: any): string | null {
  if (!asset?.asset?._ref) return null;
  const ref: string = asset.asset._ref;
  const [, id, ext] = ref.split('-');
  return `https://cdn.sanity.io/files/rx8bsd2v/production/${id}.${ext}`;
}

// ─── FETCH FROM SANITY ────────────────────────────────────────────────────────

async function fetchFromSanity() {
  const [
    business, hero, trustSignals, whyUs, whatWeDo,
    categories, whoWeServe, workflow, testimonials, finalCta,
    productsPage, contactPage,
  ] = await Promise.all([
    client.fetch(`*[_type == "siteSettings"][0]`),
    client.fetch(`*[_type == "hero"][0]`),
    client.fetch(`*[_type == "trustSignal"] | order(order asc)`),
    client.fetch(`*[_type == "whyUsCard"] | order(order asc)`),
    client.fetch(`*[_type == "whatWeDoSection"][0]`),
    client.fetch(`*[_type == "productCategory"] | order(order asc) {
      name, icon, "slug": slug.current, desc,
      tagline, longDesc, keyProducts, highlight,
      image, imageAlt
    }`),
    client.fetch(`*[_type == "whoWeServeItem"] | order(order asc)`),
    client.fetch(`*[_type == "workflowStep"] | order(order asc)`),
    client.fetch(`*[_type == "testimonial"] | order(order asc)`),
    client.fetch(`*[_type == "finalCtaSection"][0]`),
    client.fetch(`*[_type == "productsPage"][0]`),
    client.fetch(`*[_type == "contactPage"][0]`),
  ]);

  return {
    business: business ? {
      name: business.businessName ?? staticFallback.business.name,
      tagline: business.tagline ?? staticFallback.business.tagline,
      phone: business.phone ?? staticFallback.business.phone,
      email: business.email ?? staticFallback.business.email,
      address: business.address ?? staticFallback.business.address,
      hours: business.hours ?? staticFallback.business.hours,
      mapEmbedUrl: business.mapEmbedUrl ?? '',
      googleRating: business.googleRating ?? staticFallback.business.googleRating,
      reviewCount: business.reviewCount ?? staticFallback.business.reviewCount,
      yearsInBusiness: business.yearsInBusiness ?? staticFallback.business.yearsInBusiness,
    } : staticFallback.business,

    hero: hero ? {
      headline: hero.headline ?? staticFallback.hero.headline,
      subheadline: hero.subheadline ?? staticFallback.hero.subheadline,
      cta1: { label: hero.cta1Label, href: hero.cta1Href },
      cta2: { label: hero.cta2Label, href: hero.cta2Href },
      heroVideoUrl: hero.heroVideo ? fileUrl(hero.heroVideo) : null,
      heroImageUrl: hero.heroImage ? imageUrl(hero.heroImage) : null,
    } : staticFallback.hero,

    trustSignals: trustSignals?.length ? trustSignals : staticFallback.trustSignals,
    whyUs: whyUs?.length ? whyUs : staticFallback.whyUs,

    whatWeDo: whatWeDo ? {
      badge: whatWeDo.badge ?? staticFallback.whatWeDo.badge,
      headline: whatWeDo.headline ?? staticFallback.whatWeDo.headline,
      headlineAccent: whatWeDo.headlineAccent ?? staticFallback.whatWeDo.headlineAccent,
      body: whatWeDo.body ?? staticFallback.whatWeDo.body,
      bulletList: whatWeDo.bulletList?.length ? whatWeDo.bulletList : staticFallback.whatWeDo.bulletList,
      ctaLabel: whatWeDo.ctaLabel ?? staticFallback.whatWeDo.ctaLabel,
      ctaHref: whatWeDo.ctaHref ?? staticFallback.whatWeDo.ctaHref,
      imageUrl: whatWeDo.image ? imageUrl(whatWeDo.image) : staticFallback.whatWeDo.imageUrl,
      imageAlt: whatWeDo.imageAlt ?? staticFallback.whatWeDo.imageAlt,
    } : staticFallback.whatWeDo,

    categories: categories?.length ? categories.map((cat: any) => ({
      name: cat.name,
      icon: cat.icon,
      slug: cat.slug,
      desc: cat.desc,
      tagline: cat.tagline ?? null,
      longDesc: cat.longDesc ?? null,
      keyProducts: cat.keyProducts ?? [],
      highlight: cat.highlight ?? null,
      imageUrl: cat.image ? imageUrl(cat.image) : null,
      imageAlt: cat.imageAlt ?? null,
    })) : staticFallback.categories,

    whoWeServe: whoWeServe?.length ? whoWeServe : staticFallback.whoWeServe,
    workflow: workflow?.length ? workflow : staticFallback.workflow,
    testimonials: testimonials?.length ? testimonials : staticFallback.testimonials,

    finalCta: finalCta ? {
      badge: finalCta.badge ?? staticFallback.finalCta.badge,
      headline: finalCta.headline ?? staticFallback.finalCta.headline,
      headlineAccent: finalCta.headlineAccent ?? staticFallback.finalCta.headlineAccent,
      body: finalCta.body ?? staticFallback.finalCta.body,
      primaryCtaLabel: finalCta.primaryCtaLabel ?? staticFallback.finalCta.primaryCtaLabel,
      primaryCtaHref: finalCta.primaryCtaHref ?? staticFallback.finalCta.primaryCtaHref,
      secondaryCtaLabel: finalCta.secondaryCtaLabel ?? staticFallback.finalCta.secondaryCtaLabel,
      secondaryCtaHref: finalCta.secondaryCtaHref ?? staticFallback.finalCta.secondaryCtaHref,
      trustLine: finalCta.trustLine ?? staticFallback.finalCta.trustLine,
    } : staticFallback.finalCta,

    productsPage: productsPage ? {
      seoTitle: productsPage.seoTitle ?? null,
      seoDescription: productsPage.seoDescription ?? null,
      heroBadge: productsPage.heroBadge ?? staticFallback.productsPage.heroBadge,
      heroHeadline: productsPage.heroHeadline ?? staticFallback.productsPage.heroHeadline,
      heroSubheadline: productsPage.heroSubheadline ?? staticFallback.productsPage.heroSubheadline,
      heroImageUrl: productsPage.heroImage ? imageUrl(productsPage.heroImage) : null,
      stats: productsPage.stats?.length ? productsPage.stats : staticFallback.productsPage.stats,
      ctaBandHeadline: productsPage.ctaBandHeadline ?? staticFallback.productsPage.ctaBandHeadline,
      ctaBandBody: productsPage.ctaBandBody ?? staticFallback.productsPage.ctaBandBody,
      quoteHeadline: productsPage.quoteHeadline ?? staticFallback.productsPage.quoteHeadline,
      quoteBody: productsPage.quoteBody ?? staticFallback.productsPage.quoteBody,
    } : staticFallback.productsPage,

    contactPage: contactPage ? {
      seoTitle: contactPage.seoTitle ?? null,
      seoDescription: contactPage.seoDescription ?? null,
      heroBadge: contactPage.heroBadge ?? staticFallback.contactPage.heroBadge,
      heroHeadline: contactPage.heroHeadline ?? staticFallback.contactPage.heroHeadline,
      heroSubheadline: contactPage.heroSubheadline ?? staticFallback.contactPage.heroSubheadline,
      heroImageUrl: contactPage.heroImage ? imageUrl(contactPage.heroImage) : null,
      faqItems: contactPage.faqItems ?? [],
    } : staticFallback.contactPage,
  };
}

export const siteData = await fetchFromSanity().catch(() => staticFallback);

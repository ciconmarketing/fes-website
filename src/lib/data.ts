import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'rx8bsd2v',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const staticFallback = {
  business: {
    name: 'First Electrical Supply',
    tagline: "Toronto's Trade-Trusted Electrical Supply House",
    phone: '(416) 882-7070',
    email: 'info@firstelectricalsupply.com',
    address: '28 Industrial St, Unit 106, East York, ON M4G 1Y9',
    hours: 'Mon–Fri 7am–5pm · Sat 8am–12pm',
    googleRating: 5.0,
    reviewCount: 19,
    yearsInBusiness: 20,
  },
  hero: {
    headline: "Built for Pros Who Can't Afford Downtime",
    subheadline: "GTA's independent electrical supply house — stocked, knowledgeable, and actually answers the phone.",
    cta1: { label: 'Get a Free Quote', href: '#quote' },
    cta2: { label: 'Call (416) 882-7070', href: 'tel:+14168827070' },
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
  categories: [
    { name: 'Security & Camera', icon: '📷', slug: 'security-camera', desc: 'IP, AHD, PTZ & WiFi cameras, NVR/DVR, CCTV accessories' },
    { name: 'Distribution', icon: '⚡', slug: 'distribution', desc: 'Breakers, panel boards, safety switches, EV charging, surge protection' },
    { name: 'Lighting', icon: '💡', slug: 'lighting', desc: 'LED, downlights, emergency, landscape, controls & accessories' },
    { name: 'Wire, Cord & Cable', icon: '🔌', slug: 'wire-cord-cable', desc: 'Armoured, NMD, Cat 6/6A, fire alarm, industrial cables & more' },
    { name: 'Wiring Devices', icon: '🔧', slug: 'wiring-devices', desc: 'Receptacles, switches, plugs, motion sensors, floor boxes' },
    { name: 'Conduit & Fittings', icon: '🏗️', slug: 'conduit-fittings-accessories', desc: 'EMT, ENT, liquid tight, conduit bodies & fittings' },
    { name: 'Boxes & Covers', icon: '📦', slug: 'boxes-covers', desc: 'Cast boxes, wall/ceiling, weatherproof, masonry, concrete' },
    { name: 'Tools & Hardware', icon: '🔩', slug: 'tools-hardware', desc: 'Strippers, crimpers, test & measure, PPE, tool kits' },
    { name: 'Low Voltage A/V', icon: '🎵', slug: 'low-voltage-audio-video', desc: 'Speakers, HDMI, cable management, racks & data accessories' },
    { name: 'Smoke & CO Detectors', icon: '🚨', slug: 'smoke-carbon-monoxide-detectors', desc: 'Smoke alarms, CO alarms, combination units & fire safety' },
    { name: 'HVAC & Vacuum', icon: '🌡️', slug: 'hvac-vacuum-systems', desc: 'Exhaust fans, heat pumps, ERV, snow melt, electric fireplaces' },
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
    { text: 'Needed a few parts to setup an EV charger and these guys were awesome. Friendly service, knowledgeable staff and prices were way cheaper than your box store. What more can you ask for.', theme: 'EV Charger Setup' },
    { text: 'Professional staff, excellent efficient service, huge variety of products, unbeatable prices. Highly recommended.', theme: 'General' },
    { text: "Based on my experience the guys at First Electric care about customer satisfaction. They did the research for me and although they didn't carry it, they found what I needed at a different supplier. Going above and beyond.", theme: 'Specialty Parts' },
    { text: 'It is always a pleasure doing business with First Electrical Supply. Thank you to the team for your consistent support and professionalism. We truly appreciate the collaboration.', theme: 'B2B Partnership' },
  ],
};

async function fetchFromSanity() {
  const [business, hero, trustSignals, whyUs, categories, whoWeServe, workflow, testimonials] =
    await Promise.all([
      client.fetch(`*[_type == "siteSettings"][0]`),
      client.fetch(`*[_type == "hero"][0]`),
      client.fetch(`*[_type == "trustSignal"] | order(order asc)`),
      client.fetch(`*[_type == "whyUsCard"] | order(order asc)`),
      client.fetch(`*[_type == "productCategory"] | order(order asc) { name, icon, "slug": slug.current, desc }`),
      client.fetch(`*[_type == "whoWeServeItem"] | order(order asc)`),
      client.fetch(`*[_type == "workflowStep"] | order(order asc)`),
      client.fetch(`*[_type == "testimonial"] | order(order asc)`),
    ]);

  return {
    business: business ?? staticFallback.business,
    hero: hero
      ? {
          headline: hero.headline,
          subheadline: hero.subheadline,
          cta1: { label: hero.cta1Label, href: hero.cta1Href },
          cta2: { label: hero.cta2Label, href: hero.cta2Href },
        }
      : staticFallback.hero,
    trustSignals: trustSignals?.length ? trustSignals : staticFallback.trustSignals,
    whyUs: whyUs?.length ? whyUs : staticFallback.whyUs,
    categories: categories?.length ? categories : staticFallback.categories,
    whoWeServe: whoWeServe?.length ? whoWeServe : staticFallback.whoWeServe,
    workflow: workflow?.length ? workflow : staticFallback.workflow,
    testimonials: testimonials?.length ? testimonials : staticFallback.testimonials,
  };
}

export const siteData = await fetchFromSanity().catch(() => staticFallback);

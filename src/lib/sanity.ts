import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'rx8bsd2v',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getSiteData() {
  const [
    business,
    hero,
    trustSignals,
    whyUs,
    categories,
    whoWeServe,
    workflow,
    testimonials,
  ] = await Promise.all([
    sanityClient.fetch(`*[_type == "siteSettings"][0]`),
    sanityClient.fetch(`*[_type == "hero"][0]`),
    sanityClient.fetch(`*[_type == "trustSignal"] | order(order asc)`),
    sanityClient.fetch(`*[_type == "whyUsCard"] | order(order asc)`),
    sanityClient.fetch(`*[_type == "productCategory"] | order(order asc) { name, icon, "slug": slug.current, desc }`),
    sanityClient.fetch(`*[_type == "whoWeServeItem"] | order(order asc)`),
    sanityClient.fetch(`*[_type == "workflowStep"] | order(order asc)`),
    sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`),
  ]);

  return { business, hero, trustSignals, whyUs, categories, whoWeServe, workflow, testimonials };
}

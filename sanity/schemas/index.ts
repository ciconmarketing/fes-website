import { defineField, defineType } from 'sanity';

// --- Site Settings ---
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'businessName', title: 'Business Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'email', title: 'Email Address', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'hours', title: 'Hours (display string)', type: 'string' }),
    defineField({ name: 'googleRating', title: 'Google Rating', type: 'number' }),
    defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
    defineField({ name: 'yearsInBusiness', title: 'Years in Business', type: 'number' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'logoWhite', title: 'Logo (White)', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'ogImage', title: 'OG Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
});

// --- Homepage ---
export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
        defineField({ name: 'cta1Label', title: 'Primary CTA Label', type: 'string' }),
        defineField({ name: 'cta2Label', title: 'Secondary CTA Label', type: 'string' }),
        defineField({ name: 'heroVideo', title: 'Hero Video (MP4)', type: 'file', options: { accept: 'video/*' } }),
      ],
    }),
    defineField({
      name: 'trustSignals',
      title: 'Trust Signals',
      type: 'array',
      of: [{ type: 'trustSignal' }],
    }),
    defineField({
      name: 'whyUs',
      title: 'Why Choose Us Cards',
      type: 'array',
      of: [{ type: 'whyUsCard' }],
    }),
    defineField({
      name: 'workflow',
      title: 'How It Works Steps',
      type: 'array',
      of: [{ type: 'workflowStep' }],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
    }),
  ],
});

// --- Trust Signal ---
export const trustSignal = defineType({
  name: 'trustSignal',
  title: 'Trust Signal',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Value (e.g. "5.0★")', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'sub', title: 'Sub-label', type: 'string' }),
  ],
});

// --- Why Us Card ---
export const whyUsCard = defineType({
  name: 'whyUsCard',
  title: 'Why Choose Us Card',
  type: 'object',
  fields: [
    defineField({ name: 'icon', title: 'Icon Name (Lucide)', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body Text', type: 'text', rows: 3 }),
  ],
});

// --- Workflow Step ---
export const workflowStep = defineType({
  name: 'workflowStep',
  title: 'Workflow Step',
  type: 'object',
  fields: [
    defineField({ name: 'step', title: 'Step Number (e.g. "01")', type: 'string' }),
    defineField({ name: 'title', title: 'Step Title', type: 'string' }),
    defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
  ],
});

// --- Testimonial ---
export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 4 }),
    defineField({ name: 'theme', title: 'Theme / Tag', type: 'string' }),
  ],
});

// --- Product Category ---
export const productCategory = defineType({
  name: 'productCategory',
  title: 'Product Category',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Category Name', type: 'string' }),
    defineField({ name: 'icon', title: 'Emoji Icon', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'string' }),
    defineField({ name: 'desc', title: 'Short Description', type: 'text', rows: 2 }),
    defineField({ name: 'image', title: 'Category Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});

// --- Who We Serve ---
export const whoWeServeItem = defineType({
  name: 'whoWeServeItem',
  title: 'Who We Serve Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Audience Title', type: 'string' }),
    defineField({ name: 'desc', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});

export const schemaTypes = [
  siteSettings,
  homepage,
  trustSignal,
  whyUsCard,
  workflowStep,
  testimonial,
  productCategory,
  whoWeServeItem,
];

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // Optional basic fields
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docs' }),
  schema: z.object({
    // Required fields
    title: z.string(),
    description: z.string(),

    // Docs-specific fields
    order: z.number().optional(),
    section: z.string().optional(),

    // Optional basic fields (shared with blog)
    pubDate: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // Date fields
    updatedDate: z.coerce.date().optional(),

    // SEO fields
    ogImage: z.string().optional(),
    canonicalUrl: z.string().optional(),

    // Organization fields
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),

    // Display fields
    toc: z.boolean().default(true),
    readingTime: z.string().optional(),
  }),
});

const agents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/agents' }),
  schema: z.object({
    // Written by the article editor; an undeclared key is stripped by zod.
    imageAlt: z.string().optional(),
    image: z.string().optional(),
    ogImage: z.string().optional(),
    schemaType: z.string().optional(),
    schemaData: z.record(z.string(), z.any()).optional(),
    jsonLd: z.union([z.record(z.string(), z.any()), z.array(z.record(z.string(), z.any()))]).optional(),
    name: z.string(),
    role: z.string(),
    phone: z.string(),
    email: z.string(),
    experience: z.string(),
    bio: z.string(),
    specialties: z.array(z.string()),
    photo: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/reviews' }),
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    body: z.string(),
    date: z.string(),
    rating: z.number().default(5),
    initials: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { blog, docs, agents, reviews };

import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional().default(false),
      pubDate: z.iso.date(),
      updatedDate: z.iso.date().optional(),
      image: image(),
    }),
})

const jobsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/jobs' }),
  schema: z.object({
    position: z.string().min(1),
    company: z.string().min(1),
    location: z.string().min(1),
    startDate: z.iso.date(),
    endDate: z.iso.date().optional(),
    highlights: z.string().min(1).array().min(3).max(7),
    skills: z.string().min(1).array().min(1),
  }),
})

const educationCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/education' }),
  schema: z.object({
    degree: z.string().min(1),
    school: z.string().min(1),
    location: z.string().min(1),
    graduationDate: z.iso.date(),
    highlights: z.string().min(1).array().min(1).max(7),
  }),
})

export const collections = {
  blog,
  jobs: jobsCollection,
  education: educationCollection,
}

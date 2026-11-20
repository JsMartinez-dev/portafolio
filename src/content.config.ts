import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      translationKey: z.string().min(1),
      locale: z.enum(['es', 'en']),
      category: z.enum(['backend', 'data-analysis']),
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      title: z.string().min(1),
      summary: z.string().min(1),
      cover: image(),
      coverAlt: z.string().min(1),
      technologies: z.array(z.string().min(1)).min(1),
      links: z
        .object({
          repository: z.url({ protocol: /^https?$/ }).optional(),
          demo: z.url({ protocol: /^https?$/ }).optional(),
        })
        .optional(),
      draft: z.boolean().default(true),
    }),
});

export const collections = { projects };

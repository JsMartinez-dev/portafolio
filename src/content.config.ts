import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
const translation = z.object({
  category: z.string(),
  summary: z.string(),
  overview: z.string(),
  architecture: z.array(z.string()).min(1),
});
export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '*.json', base: './src/content/projects' }),
    schema: ({ image }) =>
      z.object({
        order: z.number(),
        title: z.string(),
        cover: image(),
        repository: z.url({ protocol: /^https$/ }),
        site: z.url({ protocol: /^https$/ }).optional(),
        video: z
          .string()
          .regex(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/),
        featured: z.array(z.string()).min(1),
        stack: z.array(z.string()).min(1),
        es: translation,
        en: translation,
      }),
  }),
};

import { defineCollection, defineContentConfig } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: "page",
      source: "articles/*.md",

      schema: z.object({
        category: z.string(),
        publishedAt: z.string(),
        readingTime: z.number(),
        featured: z.boolean().default(false),
        image: z.string().optional(),
        icon: z.string().optional(),
        gradient: z.string().optional(),
      }),
    }),
  },
});

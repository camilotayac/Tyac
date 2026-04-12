import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apuntesCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/apuntes" }),
    schema: z.object({
        titulo: z.string(),
        materia: z.string(),
        curso: z.string(),
        id_clase: z.string(),
        layout: z.string().optional(),
    }),
});

const cursosCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/cursos" }),
    schema: z.object({
        titulo: z.string(),
        materia: z.string(),
        curso: z.string(),
        id_clase: z.string(),
        layout: z.string().optional(),
    }),
});

export const collections = {
    'apuntes': apuntesCollection,
    'cursos': cursosCollection,
};

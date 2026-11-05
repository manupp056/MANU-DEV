import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema({ extend: z.object({
		codigo: z.string().optional(),
		estado: z.string().optional(),
		fecha: z.union([z.string(), z.date().transform((date) => date.toISOString().slice(0, 10))]).optional(),
		version_entrega: z.string().optional(),
		archivos: z.array(z.string().refine((path) => path.split('/').every(
			(part) => part.length > 0 && !part.startsWith('.') && !/[:\\]/.test(part),
		), 'Usa una ruta relativa a web/public/entregables/')).default([]),
	}) }) }),
};

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://manupp056.github.io/MANU-DEV',
	base: '/MANU-DEV',
	integrations: [
		starlight({
			title: 'MANU.DEV',
			description: 'Mi laboratorio de Programación con IA.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Inicio', link: '/' },
				{ label: 'Formación', slug: 'formacion' },
				{ label: 'Entregas', slug: 'entregas' },
				{ label: 'Evolución', slug: 'evolucion' },
				{
					label: 'Actividades publicadas',
					items: [{ autogenerate: { directory: 'actividades', collapsed: true } }],
				},
			],
		}),
	],
});

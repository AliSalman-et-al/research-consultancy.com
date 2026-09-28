// The site's pages for search engines: the fixed pages and one per course.
import type { APIRoute } from 'astro';
import { courses } from '../data/courses';
import { nav } from '../data/site';

export const GET: APIRoute = ({ site }) => {
	const paths = ['/', ...nav.map((n) => `${n.href}/`), ...courses.map((c) => `/courses/${c.slug}/`)];
	const urls = paths.map((p) => `<url><loc>${new URL(p, site).href}</loc></url>`).join('');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: { 'Content-Type': 'application/xml' },
	});
};

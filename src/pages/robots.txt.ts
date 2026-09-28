// Built from the configured site address, so it follows the site if the domain changes.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) =>
	new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, { headers: { 'Content-Type': 'text/plain' } });

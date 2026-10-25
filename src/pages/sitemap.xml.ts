import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const urls = ['/', ...projects.map((p) => `/work/${p.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u, site)}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

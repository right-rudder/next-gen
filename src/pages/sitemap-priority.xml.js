export const GET = () => {
  const priorityPages = [
    // Core business pages - highest priority
    {
      url: "https://flyhere.aero/",
      priority: "1.0",
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/high-altitude-endorsement",
      priority: "1.0",
      changefreq: "weekly",
      lastmod: new Date().toISOString(),
    },

    // Training programs - very high priority
    {
      url: "https://flyhere.aero/training-programs/high-altitude-endorsement",
      priority: "0.95",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/riverside/high-altitude-endorsement",
      priority: "0.95",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/redlands/high-altitude-endorsement",
      priority: "0.95",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },

    // Core training programs
    {
      url: "https://flyhere.aero/training-programs/private-pilot",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/training-programs/instrument-rating",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/training-programs/commercial-pilot",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },

    // Location-specific programs
    {
      url: "https://flyhere.aero/riverside/private-pilot",
      priority: "0.85",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/redlands/private-pilot",
      priority: "0.85",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },

    // Important pages
    {
      url: "https://flyhere.aero/about",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/about/faqs",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/contact",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/intro-flight",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: new Date().toISOString(),
    },
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${priorityPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
};

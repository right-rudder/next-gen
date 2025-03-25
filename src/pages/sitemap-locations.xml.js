export const get = () => {
  const locationPages = [
    {
      url: "https://flyhere.aero/high-altitude-endorsement",
      priority: "1.0",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/big-bear-lake-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/lake-arrowhead-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/running-springs-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/apple-valley-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/victorville-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/san-bernardino-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    },
    {
      url: "https://flyhere.aero/location/wrightwood-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
    }
  ];

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`,
  };
};
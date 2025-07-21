export const GET = () => {
  const locationPages = [
    // High priority training programs
    {
      url: "https://flyhere.aero/training-programs/high-altitude-endorsement",
      priority: "1.0",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/riverside/high-altitude-endorsement",
      priority: "0.95",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/redlands/high-altitude-endorsement",
      priority: "0.95",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    // Major location pages - high search volume areas
    {
      url: "https://flyhere.aero/location/big-bear-lake-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/lake-arrowhead-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/running-springs-ca",
      priority: "0.9",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/palm-springs-ca",
      priority: "0.85",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/ontario-ca",
      priority: "0.85",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/rancho-cucamonga-ca",
      priority: "0.85",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    // Secondary location pages
    {
      url: "https://flyhere.aero/location/apple-valley-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/victorville-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/san-bernardino-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/wrightwood-ca",
      priority: "0.8",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/moreno-valley-ca",
      priority: "0.75",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/corona-ca",
      priority: "0.75",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
    {
      url: "https://flyhere.aero/location/fontana-ca",
      priority: "0.75",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
    },
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
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

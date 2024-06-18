import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://altoflight.com/",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    partytown(),
  ],
  redirects: {
    // View previous sitemap and Google Search Console and place redirects from old routes to new routes here
  },
});

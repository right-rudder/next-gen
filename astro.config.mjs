import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://flyhere.aero/",
  vite: {
    build: {
      cssCodeSplit: true,
      minify: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        page !== "https://flyhere.aero/contact-confirmation" &&
        page !== "https://flyhere.aero/enrollment-confirmation" &&
        page !== "https://flyhere.aero/intro-flight-confirmation" &&
        page !== "https://flyhere.aero/quiz-confirmation",
      serialize(item) {
        // High priority pages
        if (
          item.url === "https://flyhere.aero/" ||
          item.url === "https://flyhere.aero/high-altitude-endorsement" ||
          item.url.includes("/high-altitude-endorsement")
        ) {
          item.priority = 1.0;
          item.changefreq = "weekly";
        }
        // Training programs - high priority
        else if (
          item.url.includes("/training-programs/") ||
          item.url.includes("/riverside/") ||
          item.url.includes("/redlands/")
        ) {
          item.priority = 0.9;
          item.changefreq = "monthly";
        }
        // Location pages - good for local SEO
        else if (item.url.includes("/location/")) {
          if (
            item.url.includes("big-bear") ||
            item.url.includes("lake-arrowhead") ||
            item.url.includes("palm-springs") ||
            item.url.includes("ontario")
          ) {
            item.priority = 0.85;
          } else {
            item.priority = 0.8;
          }
          item.changefreq = "monthly";
        }
        // Blog posts
        else if (item.url.includes("/blog/")) {
          item.priority = 0.7;
          item.changefreq = "yearly";
        }
        // Other pages
        else {
          item.priority = 0.6;
          item.changefreq = "monthly";
        }

        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    tailwind(),
    react(),
    partytown(),
  ],
  redirects: {
    // View previous sitemap and Google Search Console and place redirects from old routes to new routes here
  },
});

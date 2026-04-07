import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Set to your production URL before deploy (used for canonical URLs and sitemaps).
  // site: "https://your-site.pages.dev",
  output: "static",
  integrations: [tailwind()],
});

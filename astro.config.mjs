import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://mar-js.github.io/landing-pages/",
	base: "https://mar-js.github.io/landing-pages/",
	integrations: [tailwind()],
	prefetch: true,
});

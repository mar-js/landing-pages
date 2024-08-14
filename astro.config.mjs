import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "http://localhost:4321/",
	base: "https://github.com/mar-js/mar-js.github.io",
	integrations: [tailwind()],
	prefetch: true,
});

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				customPink: "#ff52bf",
				customLightPink: "#ff8fd8",
				customLightRed: "#ff4242",
				customVeryDarkCyan: "#00252e",
				customVeryPaleBlue: "#f5faff",
			},
		},
	},
	plugins: [],
};

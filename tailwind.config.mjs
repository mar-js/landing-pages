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
				customDarkBlueOther: "#1c2431",
				customDarkBlueMain: "#181f2a",
				customDarkBlueFooter: "#0b1523",
				customDarkBlueTestimonials: "#202a3c",
				customCyan: "#65e2d9",
				customBlue: "#339ecc",
			},
		},
	},
	plugins: [],
};

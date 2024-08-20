import type { ImageMetadata } from "astro";

export type Size =
	| "text-xs"
	| "text-sm"
	| "text-base"
	| "text-lg"
	| "text-xl"
	| "text-2xl"
	| "text-3xl"
	| "text-4xl"
	| "text-5xl";

export type ButtonTypes = "button" | "submit" | "reset" | null | undefined;

export type TTypography =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "p"
	| "span";

export type TPages = {
	id: string;
	name: string;
	logo: ImageMetadata;
	isAlternative?: boolean;
};

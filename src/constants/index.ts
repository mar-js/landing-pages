import fylo from "@assets/icons/fylo.svg";
import huddle from "@assets/icons/huddle.svg";
import type { TPages } from "@types";

export const PAGES: TPages[] = [
	{
		id: "fylo",
		name: "Fylo",
		logo: fylo,
	},
	{
		id: "huddle",
		name: "Huddle",
		logo: huddle,
		isAlternative: true,
	},
];

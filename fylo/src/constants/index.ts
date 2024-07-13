import iconAccess from "@images/icon-access.svg";
import iconCollaboration from "@images/icon-collaboration.svg";
import iconFile from "@images/icon-file.svg";
import iconSecurity from "@images/icon-security.svg";

export const menuHeader = (alternative: boolean) => [
	alternative
		? {
				id: 0,
				text: "Old design 🏚️",
				to: "/",
			}
		: {
				id: 0,
				text: "New design 🏠",
				to: "/fylo-dark",
			},
	{
		id: 1,
		text: "Features",
		to: "#",
	},
	{
		id: 2,
		text: "Team",
		to: "#",
	},
	{
		id: 3,
		text: "Sign In",
		to: "#",
	},
];

export const menuFooter = [
	[
		{
			id: 1,
			text: "About Us",
		},
		{
			id: 2,
			text: "Jobs",
		},
		{
			id: 3,
			text: "Press",
		},
		{
			id: 4,
			text: "Blog",
		},
	],
	[
		{
			id: 1,
			text: "Contact Us",
		},
		{
			id: 2,
			text: "Terms",
		},
		{
			id: 3,
			text: "Privacy",
		},
	],
];

export const cardData = [
	{
		id: 1,
		icon: iconAccess,
		title: "Access your files, anywhere",
		description:
			"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
	},
	{
		id: 2,
		icon: iconSecurity,
		title: "Security you can trust",
		description:
			"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
	},
	{
		id: 3,
		icon: iconCollaboration,
		title: "Real-time collaboration",
		description:
			"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required",
	},
	{
		id: 4,
		icon: iconFile,
		title: "Store any type of file",
		description:
			"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
	},
];

export const mentionsDarkData = [
	{
		id: 1,
		owner: "Satish Patel",
	},
	{
		id: 2,
		owner: "Bruce McKenzie",
	},
	{
		id: 3,
		owner: "Iva Boyd",
	},
];

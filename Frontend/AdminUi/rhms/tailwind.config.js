/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			rmdGreen: "#032d30",
			rmdYellow: "#d8ad5d",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#032d30",

					secondary: "#d8ad5d",

					accent: "#ffff",

					neutral: "#ffff",

					"base-100": "#000000",

					info: "#ff00ff",

					success: "#00ff00",

					warning: "#00ff00",

					error: "#ffff00",
				},
			},
		],
	},
};

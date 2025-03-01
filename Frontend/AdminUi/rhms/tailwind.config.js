/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
		colors: {
			rmdGreen: "#032d30",
			rmdYellow: "#d8ad5d",
			rmdRed: "#EA0C0C",
			rmdRed2:"#9E0808",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {}
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{svelte,ts}"],
	theme: {
		fontFamily: {
			header: ["Poppins"],
			sans: ["Open Sans"],
		},
		extend: {
			colors: {
				jhTangerine: {
					100: "#F06C00",
					50: "#F7B57F",
				},
				jhSlate: {
					100: "#252A36",
					50: "#92949A",
				},
				jhCerulean: {
					100: "#007398",
					50: "#80B9CB",
				},
				jhMerlot: {
					100: "#AA1E2D",
					50: "#D58F96",
				},
				jhRoyal: {
					100: "#512D6C",
					50: "#A896B6",
				},
				jhJade: {
					100: "#00A84F",
					50: "#80D4A7",
				},
				jhIrisBlue: {
					100: "#00B9E4",
					50: "#7FDCF1",
				},
				jhPersianRed: {
					100: "#D63D36",
					50: "#EB9E9B",
				},
			},
		},
	},
	plugins: [require('prettier-plugin-tailwindcss')],
};

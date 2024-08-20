/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"body-color": "#f7f7f7",
				"html-color": "#e9e9e9" ,
				// primary: "rgb(198, 0, 216)",
				primary: "rgb(1, 131, 145)",
				"pirmary-contrast": "#fff",
				secondary: "#1111f3",
			},
			screens: {
				'xs': '580px',
			}
		},
		
	},
	plugins: [],
}

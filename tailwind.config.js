/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				black: '#080808'
			},
			height: {
				50: '200px'
			}
		}
	},
	plugins: []
};

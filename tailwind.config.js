/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./js/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				'mobile': {'max': '380px',},
				'tablet': {'max': '640px',},
				'm-tablet': {'max': '820px',},
				'laptop': {'max': '1025px',},
				'laptop-m': {'max': '1200px',},
				'desktop': {'max': '1400px',},
				'wide': '1950px',
			},
		},
		colors: {
			'main': '#7DA2B0',
			'light-accent': '#74736F',
			'dark-accent': '#6B6865',
			'light-shade': '#F2F1F2',
			'dark-shade': '#23343F',
		},
	},
	plugins: [],
};

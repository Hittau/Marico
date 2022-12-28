module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './**/*.html'],
	theme: {
		extend: {
			colors: {
				ocean: {
					100: '#3c82f4',
					200: '#306ef7',
				},
				cobble: {
					100: '#b4b1b1',
					200: '#707070',
				},
			},
			fontFamily: {
				poppins: 'Poppins, sans-serif',
			},
		},
	},
	plugins: [],
}

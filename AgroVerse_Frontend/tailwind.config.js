module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        soil: '#7C4D25',     // Rich soil brown
        leaf: '#3B7A57',     // Deep leafy green
        field: '#F3F1E7',    // Soft field beige
      },
    },
  },
  plugins: [],
};

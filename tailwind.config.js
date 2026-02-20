module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        'yu-beige': '#F5EFE6', // Main background: Soft beige/cream
        'yu-brown': '#4B3621', // Dark text color (keeping existing name if used, or map to primary)
         // Mapping requested colors
        'yu-black': '#2C2C2C', // text-primary replacement
        'yu-green': '#6B8E23', // Accent green
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Or whatever sans-serif is preferred
        serif: ['"Playfair Display"', 'serif'],
      },
      textColor: {
         DEFAULT: '#2C2C2C', // Setting default text color to the requested charcoal
      }
    },
  },
};
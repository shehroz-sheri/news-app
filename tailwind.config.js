/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#ffffffd9",
        dark: '#2A2A2A',
        primary: '#0E1E32',
        danger: '#C31815',
        secondary: '#666666',
        dimSecondary: '#F1F2F3',
      },
    },
  },
  plugins: [],
}


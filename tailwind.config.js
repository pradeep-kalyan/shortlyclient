/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        courier: ["Courier Prime", "monospace"],
        dancing: ["Dancing Script", "cursive"],
        electrolize: ["Electrolize", "sans-serif"],
        greatvibes: ["Great Vibes", "cursive"],
        lavishly: ["Lavishly Yours", "cursive"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "sans-serif"],
        tangerine: ["Tangerine", "cursive"],
      },
    },
  },
  plugins: [],
};

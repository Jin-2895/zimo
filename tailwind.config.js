/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('./public/Images/ZIMO_Pro.png')",
      },
    },
  },
  plugins: [],
};

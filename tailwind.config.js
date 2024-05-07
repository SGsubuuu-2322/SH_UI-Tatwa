/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(25,94,131,1) 3%, rgba(28,104,145,1) 21%, rgba(5,65,97,1) 68%, rgba(5,65,97,1) 99%, rgba(9,77,114,1) 100%)",
      },
    },
  },
  plugins: [],
};

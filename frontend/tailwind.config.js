export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans', 'sans-serif'",
        ABeeZee: "'ABeeZee', 'sans-serif'",
        Poppins: "'Poppins', 'sans-serif'",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

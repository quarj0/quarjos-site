/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        impact: ["Impact", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Oswals: ["Oswald", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Playfair: ["Playfair Display", "serif"],
        Lato: ["Lato", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
        Lobster: ["Lobster", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        IndieFlower: ["Indie Flower", "cursive"],
        DancingScript: ["Dancing Script", "cursive"],
        GreatVibes: ["Great Vibes", "cursive"],
        AmaticSC: ["Amatic SC", "cursive"],
        ShadowsIntoLight: ["Shadows Into Light", "cursive"],
        Sacramento: ["Sacramento", "cursive"],
        KaushanScript: ["Kaushan Script", "cursive"],
        PermanentMarker: ["Permanent Marker", "cursive"],
      },
    },
  },
  plugins: [],
};

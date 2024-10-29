import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|button|card|chip|image|link|navbar|ripple|spinner).js",
  ],
  theme: {
    extend: {
      colors: { "item-espera": "#A09D9D", "card-atendiendo": "#DD3914" },
    },
    backgroundImage: {
      "fondo-pantalla": "url(/img/background/barberia.png)",
    },
  },
  plugins: [
    nextui({
      themes: {
        "barberia-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#000000",
            foreground: "#F2F2F2",
            primary: {
              50: "#fef7ee",
              100: "#fcedd8",
              200: "#f8d6b0",
              300: "#f4b87d",
              400: "#ee9149",
              500: "#e96e1d",
              600: "#db5b1b",
              700: "#b64418",
              800: "#91381b",
              900: "#752f19",
              DEFAULT: "#e96e1d",
              foreground: "#F2F2F2",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
export default config;

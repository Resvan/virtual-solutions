import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        kurb: ['var(--font-kurb)'],
      },
      colors: {
        primary: {
          DEFAULT: '#17495B',
        },
        "dark-blue": "#1C1F35",
        gray: "#6F7B8E",
        "secondary": "#F8A71B",
      },
      backgroundImage: {
        "banner-small-head": 'linear-gradient(94deg, #F8A71B -1.21%, #FBC65D 58.66%, #FCE2A0 116.84%)',
        "banner-button": ' linear-gradient(94deg, #F8A71B 0%, #FBC65D 50%, #FCE2A0 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
